
import React, { Component } from 'react'
import { connect } from 'react-redux'

class LightboxOptions extends Component {
    render() {
        return (
            <div className='design_editor_section lightbox_options'>
                <div className='section' onClick={(e) => this.openLightbox()}>
                    <label>Photo Info Placement</label>
                    <i className="far fa-chevron-right"></i>
                </div>
                <div className='section'>
                    <label>User Avatar</label>
                    <i className="far fa-chevron-right"></i>
                </div>
                <div className='section'>
                    <label>Social Media Icons</label>
                    <i className="far fa-chevron-right"></i>
                </div>
                <div className='section'>
                    <label>Caption</label>
                    <i className="far fa-chevron-right"></i>
                </div>
                <div className='section'>
                    <label>Products</label>
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

export default connect(mapStateToProps)(LightboxOptions)