import React from 'react';
import PropTypes from 'prop-types';
import PaintEditor from './paint-editor.jsx';
import {connect} from 'react-redux';
import {resetZoomLevels} from '../reducers/zoom-levels.js';

// 'PaintEditor' does not currently support dynamic width and height resizing.
// As countermeasure create a new PaintEditor as width or height change.

class SidekickPaintEditorWrapper extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            key: 0
        };
    }
    componentWillUpdate (nextProps) {
        if (this.props.width !== nextProps.width || this.props.height !== nextProps.height) {
            this.props.onResetZoomLevels();
            this.setState({
                key: this.state.key + 1
            });
        }
    }
    render () {
        const {
            /* eslint-disable no-unused-vars */
            onResetZoomLevels,
            /* eslint-enable no-unused-vars */
            ...props
        } = this.props;
        return (
            <PaintEditor
                key={this.state.key}
                {...props}
            />
        );
    }
}

SidekickPaintEditorWrapper.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    onResetZoomLevels: PropTypes.func
};

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
    onResetZoomLevels: () => dispatch(resetZoomLevels())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SidekickPaintEditorWrapper);
