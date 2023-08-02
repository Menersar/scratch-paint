import parseColorLib from 'parse-color';

/**
 * @typedef ParsedColor
 * @property {[number, number, number, number]} rgba - red, green, blue (range from 0 to 255), alpha (range from 0 to 1).
 * @property {string} hex - color of '#abc123' format; without alpha channel.
 */

const TRANSPARENT_BLACK = {
    rgba: [0, 0, 0, 0],
    hex: '#000000'
};

/**
 * @param {string} color - color; any format.
 * @returns {ParsedColor} parsed color object.
 */
const parseColor = color => {
    if (/^#[a-f0-9]{3,8}$/i.test(color)) {
        // The alpha values of hexadecimal colours are not handled well via 'parseColor':
        // So the alpha values of hexadecimal colours are parsed manually via the following lines.
        let hexPart = color.substring(1).toLowerCase();

        if (hexPart.length === 3 || hexPart.length === 4) {
            // Double every character (e.g. '08A'  becomes '0088AA').
            hexPart = hexPart
                .split('')
                .map(char => char + char)
                .join('');
        }

        const red = parseInt(hexPart.substring(0, 2), 16);
        const green = parseInt(hexPart.substring(2, 4), 16);
        const blue = parseInt(hexPart.substring(4, 6), 16);
        let alpha = 1;
        if (hexPart.length === 8) {
            alpha = parseInt(hexPart.substring(6, 8), 16) / 255;
        }

        return {
            rgba: [red, green, blue, alpha],
            hex: `#${hexPart.substring(0, 6)}`
        };
    }

    const result = parseColorLib(color);
    if (!result.rgba) {
        return TRANSPARENT_BLACK;
    }
    return result;
};

/**
 * @param {number} alpha - alpha channel; range from 0 to 1.
 * @returns {string} string for creating an 8-digit hex color code.
 */
const makeAlphaComponent = alpha => Math.round(alpha * 255)
    .toString(16)
    .padStart(2, '0');

/**
 * @param {string} color - color; any format.
 * @returns {string} color 6- or 8-digit hex code (if it contains an alpha channel).
 */
const colorToHex = color => {
    const parsed = parseColor(color);
    const hex = parsed.hex;
    const alpha = parsed.rgba[3];
    if (alpha < 1) {
        return `${hex}${makeAlphaComponent(alpha)}`;
    }
    return hex;
};

export {
    makeAlphaComponent,
    colorToHex
};
