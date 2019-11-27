
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleShowLightbox } from '../../actions/lightbox'
import { Link } from 'react-router-dom'

class ThemeEditor extends Component {
    openLightbox() {
        this.props.dispatch(handleShowLightbox())
    }
    render() {
        return (
            <div className='design_editor_section theme_editor'>
                <div className='section'>
                    <label>Global</label>
                    <i className="far fa-chevron-right"></i>
                </div>
                <div className='section'>
                    <label>Header</label>
                    <i className="far fa-chevron-right"></i>
                </div>
                <div className='section'>
                    <label>Widget</label>
                    <i className="far fa-chevron-right"></i>
                </div>
                <Link to='/design-editor/default-theme/lightbox' className='section' onClick={(e) => this.openLightbox()}>
                    <label>Lightbox</label>
                    <i className="far fa-chevron-right"></i>
                </Link>
                <div className='section'>
                    <label>Uploader</label>
                    <i className="far fa-chevron-right"></i>
                </div>
                <div className='section'>
                    <label>Localization</label>
                    <i className="far fa-chevron-right"></i>
                </div>
                <div className='section'>
                    <label>Custom CSS</label>
                    <i className="far fa-chevron-right"></i>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ theme }) {
    return {
        theme
    }
}

export default connect(mapStateToProps)(ThemeEditor)