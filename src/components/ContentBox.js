
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PhotoItem from './PhotoItem'
import LoadingGalleryView from './LoadingGalleryView'
import Lightbox from './Lightbox'
import { handleChangePreviewDevice } from '../actions/widget'
// import { handleShowLightbox } from '../actions/lightbox'

class ContentBox extends Component {
    changePreviewDevice(e, device) {
        this.props.dispatch(handleChangePreviewDevice(device))
    }
    render() {
        let { loading, photos, album, layout, previewDevice, theme, lightbox } = this.props

        if(!previewDevice) {
            previewDevice = 'web'
        }
        
        return (
            <section className='content_box'>
                { lightbox && (
                    <Lightbox onHideLightBox={() => this.hideLightbox()} />
                )}

                { !album && (
                    <div className='widget_holder'>
                        <div className='empty widget'>
                            <div className='gallery'>
                                <i className="fal fa-photo-video"></i>
                                <h4>Select an album to see what your Widget is going to look like</h4>
                            </div>
                        </div>
                    </div>
                )}

                { album && (                    
                    <div className='widget_holder'>
                        <div className='device_switcher'>
                            <div className='box'>
                                <ul>
                                    <li className={ previewDevice === 'web' ? 'active' : ''} 
                                        onClick={(e) => this.changePreviewDevice(e, 'web')}>
                                        <i className="far fa-laptop"></i>
                                        <span>Web</span>
                                    </li>
                                    <li className={ previewDevice === 'tablet' ? 'active' : ''}
                                        onClick={(e) => this.changePreviewDevice(e, 'tablet')}>
                                        <i className="far fa-tablet"></i>
                                        <span>Tablet</span>
                                    </li>
                                    <li className={ previewDevice === 'mobile' ? 'active' : ''}
                                        onClick={(e) => this.changePreviewDevice(e, 'mobile')}>
                                        <i className="far fa-mobile"></i>
                                        <span>Mobile</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={ previewDevice + ' widget'}>
                            <div className='header'>
                                <h4>Share your photos with us!</h4>
                                <button className='add_photo_btn'>
                                    <i className="fas fa-camera-retro"></i>
                                    <span>Add Your Photo</span>
                                </button>
                            </div>

                            { !loading && photos && (
                                <ul className={ layout + ' gallery ' + theme }>
                                    { photos.map((photo) => {
                                        return <li key={photo.id}>
                                            <PhotoItem photo={photo} />
                                        </li>
                                    })}
                                </ul>
                            )}

                            { !loading && !photos && (
                                <div className="empty_album">
                                    <i className="fal fa-frown-open"></i>
                                    <h5>Uh oh. Your album needs to have more than 5 photos for a photowall widget</h5>
                                </div>
                            )}

                            { loading && (
                                <LoadingGalleryView />
                            )}
                        </div>
                    </div>
                )}
        </section>
        )
    }
}

function mapStateToProps({ loading, album, filter, layout, previewDevice, theme, lightbox }) {
    let photos = album ? album.data : null

    if(album && photos) {
        if(filter === 'Permissioned Content') {
            photos = album.data.filter((photo) => photo.id > 8)
        }
    }

    return {
        album,
        photos: photos,
        loading,
        layout,
        previewDevice,
        theme,
        lightbox
    }
}

export default connect(mapStateToProps)(ContentBox)