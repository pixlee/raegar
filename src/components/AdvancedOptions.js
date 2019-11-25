
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

class AdvancedOptions extends Component {
    render() {
        return (
            <section className='display_info'>
                <Navbar currentLink='advanced_options' />
                <Sidebar />
            </section>
        )
    }
}

export default connect()(AdvancedOptions)