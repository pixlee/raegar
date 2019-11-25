
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

class DesignEditor extends Component {
    render() {
        return (
            <section className='display_info'>
                <Navbar currentLink='design_editor' />
                <Sidebar />
            </section>
        )
    }
}

export default connect()(DesignEditor)