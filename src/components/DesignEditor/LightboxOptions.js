
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleShowLightbox, handleUpdateLightbox } from '../../actions/lightbox'

class LightboxOptions extends Component {
    componentDidMount() {
        this.props.dispatch(handleShowLightbox())
    }
    changeLightboxOption(property, value) {
        let lightbox = this.props.lightbox ? this.props.lightbox : {}
        lightbox[property] = value

        this.props.dispatch(handleUpdateLightbox(lightbox))
    }
    render() {
        let { lightbox } = this.props

        return (
            <div className='design_editor_section lightbox_options'>
                <div className='section_header'>
                    <label>Photo Info Placement</label>
                </div>
                <div className='section'>
                    <div className={ lightbox.info_placement === 'bottom' ? 'option active' : 'option'}
                            onClick={() => this.changeLightboxOption('info_placement', 'bottom')}>
                        <i className="fad fa-arrow-to-bottom"></i>
                        <label>Bottom</label>
                    </div>
                    <div className={ lightbox.info_placement === 'right' ? 'option active' : 'option'}
                            onClick={() => this.changeLightboxOption('info_placement', 'right')}>
                        <i className="fad fa-arrow-to-right"></i>
                        <label>Right</label>
                    </div>
                </div>

                <div className='section_header'>
                    <label>User Avatar</label>
                </div>
                <div className='section'>
                    <div className={ lightbox.show_user_avatar ? 'option active' : 'option'}
                        onClick={() => this.changeLightboxOption('show_user_avatar', true)}>
                        <i className="fas fa-eye"></i>
                        <label>Show</label>
                    </div>
                    <div className={ !lightbox.show_user_avatar ? 'option active' : 'option'}
                        onClick={() => this.changeLightboxOption('show_user_avatar', false)}>
                        <i className="fad fa-eye-slash"></i>
                        <label>Hide</label>
                    </div>
                </div>

                <div className='section_header'>
                    <label>Social Media Icons</label>
                </div>
                <div className='section'>
                    <div className={ lightbox.show_social_icons ? 'option active' : 'option'}>
                        <i className="fas fa-eye"></i>
                        <label>Show</label>
                    </div>
                    <div className={ !lightbox.show_social_icons ? 'option active' : 'option'}>
                        <i className="fad fa-eye-slash"></i>
                        <label>Hide</label>
                    </div>
                </div>

                <div className='section_header'>
                    <label>Caption</label>
                </div>
                <div className='section'>
                    <div className={ lightbox.captions === 'short' ? 'option active' : 'option'}>
                        <i className="fas fa-sort-amount-down-alt"></i>
                        <label>Short</label>
                    </div>
                    <div className={ lightbox.captions === 'full' ? 'option active' : 'option'}>
                        <i className="fas fa-align-left"></i>
                        <label>Full</label>
                    </div>
                    <div className={ lightbox.captions === 'hide' ? 'option active' : 'option'}>
                        <i className="fad fa-eye-slash"></i>
                        <label>Hide</label>
                    </div>
                </div>

                <div className='section_header'>
                    <label>Products</label>
                </div>
                <div className='section'>
                    <div className={ lightbox.products_layout === 'carousel' ? 'option active' : 'option'}
                        onClick={() => this.changeLightboxOption('products_layout', 'carousel')}>
                        <i className="fas fa-sort-amount-down-alt"></i>
                        <label>Carousel</label>
                    </div>
                    <div className={ lightbox.products_layout === 'grid' ? 'option active' : 'option'}
                        onClick={() => this.changeLightboxOption('products_layout', 'grid')}>
                        <i className="fal fa-border-all"></i>
                        <label>Grid</label>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ lightbox }) {
    return {
        lightbox
    }
}

export default connect(mapStateToProps)(LightboxOptions)