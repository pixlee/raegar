
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PhotoItem from './PhotoItem'
import LoadingGalleryView from './LoadingGalleryView'

class ContentBox extends Component {
    render() {
        const { fetchingData, photos } = this.props

        return (
            <section className='content_box'>
                <div className='device_switcher'>
                    <ul>
                        <li className='active'>
                            <i className="far fa-laptop"></i>
                            <span>Web</span>
                        </li>
                        <li>
                            <i className="far fa-tablet"></i>
                            <span>Tablet</span>
                        </li>
                        <li>
                            <i className="far fa-mobile"></i>
                            <span>Mobile</span>
                        </li>
                    </ul>
                </div>
                <div className='widget_holder'>
                    { !photos && (
                        <div className='empty widget'>
                            <div className='header'>
                                <h4>Header goes here</h4>
                            </div>
                            <div className='gallery'>
                                <h4>Photos goes here</h4>
                            </div>
                        </div>
                    )}

                    { photos && (
                        <div className='widget photowall'>
                            <div className='header'>
                                <h4>Share your photos with us!</h4>
                                <button className='add_photo_btn'>
                                    <i className="fas fa-camera-retro"></i>
                                    <span>Add Your Photo</span>
                                </button>
                            </div>
                            { !fetchingData && (
                                <ul className='gallery'>
                                    { photos.map((photo) => {
                                        return <li key={photo.id}>
                                            <PhotoItem photo={photo} />
                                        </li>
                                    })}
                                </ul>
                            )}

                            { fetchingData && (
                                <LoadingGalleryView />
                            )}
                        </div>
                    )}
                </div>
            </section>
        )
    }
}

function mapStateToProps({ fetchingData, album }) {
    return {
        photos: album.data,
        fetchingData
    }
}

export default connect(mapStateToProps)(ContentBox)