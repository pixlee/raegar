
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { handleSetCurrentSection } from '../actions/shared'

class CustomizeWidget extends Component {
    componentDidMount() {
        this.props.dispatch(handleSetCurrentSection('customize-widget'))
    }
    render() {
        return (
            <section className='display_info'>
                <Navbar />
                <Sidebar />
            </section>
        )
    }
}

function mapStateToProps({ currentSection }) {
    return {
        currentSection
    }
}

export default connect(mapStateToProps)(CustomizeWidget)