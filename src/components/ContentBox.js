
import React, { Component } from 'react'
import { connect } from 'react-redux'

class ContentBox extends Component {
    render() {
        const { photos } = this.props

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
                        <div className='widget'>
                            <div className='header'>
                                <h4>Share your photos with us!</h4>
                                <button className='add_photo_btn'>Add Your Photo</button>
                            </div>
                            <div className='gallery'>
                                <ul>
                                    <li>Photo 1</li>
                                    <li>Photo 2</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        )
    }
}

function mapStateToProps({ album }) {
    return {
        photos: album.data
    }
}

export default connect(mapStateToProps)(ContentBox)