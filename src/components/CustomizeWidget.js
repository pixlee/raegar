
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

class CustomizeWidget extends Component {
    render() {
        return (
            <section className='display_info'>
                <Navbar currentLink='customize_widget' />
                <Sidebar />
            </section>
        )
    }
}

export default connect()(CustomizeWidget)