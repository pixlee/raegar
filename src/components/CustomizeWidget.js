
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { handleSetcurrentSection } from '../actions/navigation'

class CustomizeWidget extends Component {
    componentDidMount() {
        this.props.dispatch(handleSetcurrentSection('customize-widget'))
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