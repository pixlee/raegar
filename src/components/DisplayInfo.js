
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

class DisplayInfo extends Component {
    render() {
        return (
            <section className='display_info'>
                <Navbar currentLink='display_info' />
                <Sidebar />
            </section>
        )
    }
}

export default connect()(DisplayInfo)