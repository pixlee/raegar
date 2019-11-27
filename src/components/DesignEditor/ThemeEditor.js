
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class ThemeEditor extends Component {
    render() {
        return (
            <div className='design_editor_section theme_editor'>
                <Link className='section' to='./default-theme/lightbox'>
                    <label>Global</label>
                    <i className="far fa-chevron-right"></i>
                </Link>
                <Link className='section' to='./default-theme/lightbox'>
                    <label>Header</label>
                    <i className="far fa-chevron-right"></i>
                </Link>
                <Link className='section' to='./default-theme/lightbox'>
                    <label>Widget</label>
                    <i className="far fa-chevron-right"></i>
                </Link>
                <Link className='section' to='./default-theme/lightbox'>
                    <label>Lightbox</label>
                    <i className="far fa-chevron-right"></i>
                </Link>
                <Link className='section' to='./default-theme/lightbox'>
                    <label>Uploader</label>
                    <i className="far fa-chevron-right"></i>
                </Link>
                <Link className='section' to='./default-theme/lightbox'>
                    <label>Localization</label>
                    <i className="far fa-chevron-right"></i>
                </Link>
                <Link className='section' to='./default-theme/lightbox'>
                    <label>Custom CSS</label>
                    <i className="far fa-chevron-right"></i>
                </Link>
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