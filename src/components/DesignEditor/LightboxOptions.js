
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleShowLightbox } from '../../actions/lightbox'

class LightboxOptions extends Component {
    componentDidMount() {
        this.props.dispatch(handleShowLightbox({}))
    }
    render() {
        return (
            <div className='design_editor_section lightbox_options'>
                <div className='section_header'>
                    <label>Photo Info Placement</label>
                </div>
                <div className='section'>
                    <div className='option'>
                        <i className="fad fa-arrow-to-bottom"></i>
                        <label>Bottom</label>
                    </div>
                    <div className='option'>
                        <i className="fad fa-arrow-to-right"></i>
                        <label>Right</label>
                    </div>
                </div>

                <div className='section_header'>
                    <label>User Avatar</label>
                </div>
                <div className='section'>
                    <div className='option'>
                        <i className="fas fa-eye"></i>
                        <label>Show</label>
                    </div>
                    <div className='option'>
                        <i className="fad fa-eye-slash"></i>
                        <label>Hide</label>
                    </div>
                </div>

                <div className='section_header'>
                    <label>Social Media Icons</label>
                </div>
                <div className='section'>
                    <div className='option'>
                        <i className="fas fa-eye"></i>
                        <label>Show</label>
                    </div>
                    <div className='option'>
                        <i className="fad fa-eye-slash"></i>
                        <label>Hide</label>
                    </div>
                </div>

                <div className='section_header'>
                    <label>Caption</label>
                </div>
                <div className='section'>
                    <div className='option'>
                        <i className="fas fa-sort-amount-down-alt"></i>
                        <label>Short</label>
                    </div>
                    <div className='option'>
                        <i className="fas fa-align-left"></i>
                        <label>Full</label>
                    </div>
                    <div className='option'>
                        <i className="fad fa-eye-slash"></i>
                        <label>Hide</label>
                    </div>
                </div>

                <div className='section_header'>
                    <label>Products</label>
                </div>
                <div className='section'>
                    <div className='option'>
                        <i className="fas fa-sort-amount-down-alt"></i>
                        <label>Carousel</label>
                    </div>
                    <div className='option'>
                        <i className="fal fa-border-all"></i>
                        <label>Grid</label>
                    </div>
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