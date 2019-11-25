
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

class PublishLightbox extends Component {
    render() {
        return (
            <section className='publish_lightbox'>
                <Navbar />
                <Sidebar />
            </section>
        )
    }
}

export default connect()(PublishLightbox)