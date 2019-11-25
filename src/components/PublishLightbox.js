
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Navbar from './Navbar'

class PublishLightbox extends Component {
    render() {
        return (
            <section className='publish_lightbox'>
                <Navbar />
            </section>
        )
    }
}

export default connect()(PublishLightbox)