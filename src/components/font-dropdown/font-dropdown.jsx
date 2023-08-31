import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {FormattedMessage} from 'react-intl';

import Button from '../button/button.jsx';
import Dropdown from '../dropdown/dropdown.jsx';
import InputGroup from '../input-group/input-group.jsx';
import Fonts from '../../lib/fonts';
import CustomFontButton from './custom-font-button.jsx';
import styles from './font-dropdown.css';

const DisplayFont = ({font, getFontName}) => (
    <span
        style={{
            fontFamily: font
        }}
    >
        {getFontName(font)}
    </span>
);
DisplayFont.propTypes = {
    font: PropTypes.string.isRequired,
    getFontName: PropTypes.func.isRequired
};

const ModeToolsComponent = props => (
    <Dropdown
        className={classNames(styles.modUnselect, styles.fontDropdown)}
        enterExitTransitionDurationMs={60}
        popoverContent={
            <InputGroup className={styles.modContextMenu}>
                <Button
                    className={classNames(styles.modMenuItem)}
                    onClick={props.onChoose}
                    onMouseOver={props.onHoverSansSerif}
                >
                    {/* <span className={styles.sansSerif}>
                        {props.getFontName(Fonts.SANS_SERIF)}
                    </span> */}
                    <DisplayFont
                        font={Fonts.SANS_SERIF}
                        getFontName={props.getFontName}
                    />
                </Button>
                <Button
                    className={classNames(styles.modMenuItem)}
                    onClick={props.onChoose}
                    onMouseOver={props.onHoverSerif}
                >
                    {/* <span className={styles.serif}>
                        {props.getFontName(Fonts.SERIF)}
                    </span> */}
                    <DisplayFont
                        font={Fonts.SERIF}
                        getFontName={props.getFontName}
                    />
                </Button>
                <Button
                    className={classNames(styles.modMenuItem)}
                    onClick={props.onChoose}
                    onMouseOver={props.onHoverHandwriting}
                >
                    {/* <span className={styles.handwriting}>
                        {props.getFontName(Fonts.HANDWRITING)}
                    </span> */}
                    <DisplayFont
                        font={Fonts.HANDWRITING}
                        getFontName={props.getFontName}
                    />
                </Button>
                <Button
                    className={classNames(styles.modMenuItem)}
                    onClick={props.onChoose}
                    onMouseOver={props.onHoverMarker}
                >
                    {/* <span className={styles.marker}>
                        {props.getFontName(Fonts.MARKER)}
                    </span> */}
                    <DisplayFont
                        font={Fonts.MARKER}
                        getFontName={props.getFontName}
                    />
                </Button>
                <Button
                    className={classNames(styles.modMenuItem)}
                    onClick={props.onChoose}
                    onMouseOver={props.onHoverCurly}
                >
                    {/* <span className={styles.curly}>
                        {props.getFontName(Fonts.CURLY)}
                    </span> */}
                    <DisplayFont
                        font={Fonts.CURLY}
                        getFontName={props.getFontName}
                    />
                </Button>
                <Button
                    className={classNames(styles.modMenuItem)}
                    onClick={props.onChoose}
                    onMouseOver={props.onHoverPixel}
                >
                    {/* <span className={styles.pixel}>
                        {props.getFontName(Fonts.PIXEL)}
                    </span> */}
                    <DisplayFont
                        font={Fonts.PIXEL}
                        getFontName={props.getFontName}
                    />
                </Button>
                <Button
                    className={classNames(styles.modMenuItem)}
                    onClick={props.onChoose}
                    onMouseOver={props.onHoverChinese}
                >
                    {/* <span className={styles.chinese}>
                        {props.getFontName(Fonts.CHINESE)}
                    </span> */}
                    <DisplayFont
                        font={Fonts.CHINESE}
                        getFontName={props.getFontName}
                    />
                </Button>
                <Button
                    className={classNames(styles.modMenuItem)}
                    onClick={props.onChoose}
                    onMouseOver={props.onHoverJapanese}
                >
                    {/* <span className={styles.japanese}>
                        {props.getFontName(Fonts.JAPANESE)}
                    </span> */}
                    <DisplayFont
                        font={Fonts.JAPANESE}
                        getFontName={props.getFontName}
                    />
                </Button>
                <Button
                    className={classNames(styles.modMenuItem)}
                    onClick={props.onChoose}
                    onMouseOver={props.onHoverKorean}
                >
                    {/* <span className={styles.korean}>
                        {props.getFontName(Fonts.KOREAN)}
                    </span> */}
                    <DisplayFont
                        font={Fonts.KOREAN}
                        getFontName={props.getFontName}
                    />
                </Button>
                {props.customFonts.map(font => (
                    <CustomFontButton
                        key={font.name}
                        font={font.family}
                        className={classNames(styles.modMenuItem)}
                        onClick={props.onChoose}
                        onMouseOver={props.onHoverCustom}
                    >
                        <DisplayFont
                            font={font.family}
                            getFontName={props.getFontName}
                        />
                    </CustomFontButton>
                ))}
                {props.onManageFonts && (
                    <Button
                        className={styles.modMenuItem}
                        onClick={props.onManageFonts}
                    >
                        <FormattedMessage
                            defaultMessage="Add more fonts …"
                            description="Button in costume editor font list to add more fonts"
                            id="gui.paint.fonts.more"
                        />
                    </Button>
                )}
            </InputGroup>
        }
        ref={props.componentRef}
        tipSize={.01}
        onOpen={props.onOpenDropdown}
        onOuterAction={props.onClickOutsideDropdown}
    >
        {/* <span className={classNames(props.getFontStyle(props.font), styles.displayedFontName)}>
            {props.getFontName(props.font)} */}
        <span className={styles.displayedFontName}>
            <DisplayFont
                font={props.font}
                getFontName={props.getFontName}
            />
        </span>
    </Dropdown>
);

ModeToolsComponent.propTypes = {
    componentRef: PropTypes.func.isRequired,
    font: PropTypes.string,
    getFontName: PropTypes.func.isRequired,
    // getFontStyle: PropTypes.func.isRequired,
    onChoose: PropTypes.func.isRequired,
    onClickOutsideDropdown: PropTypes.func,
    customFonts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        family: PropTypes.string.isRequired
    })).isRequired,
    onHoverCustom: PropTypes.func.isRequired,
    onManageFonts: PropTypes.func,
    onHoverChinese: PropTypes.func,
    onHoverCurly: PropTypes.func,
    onHoverHandwriting: PropTypes.func,
    onHoverJapanese: PropTypes.func,
    onHoverKorean: PropTypes.func,
    onHoverMarker: PropTypes.func,
    onHoverPixel: PropTypes.func,
    onHoverSansSerif: PropTypes.func,
    onHoverSerif: PropTypes.func,
    onOpenDropdown: PropTypes.func
};
export default ModeToolsComponent;
