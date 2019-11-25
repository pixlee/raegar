
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { handleSetcurrentSection } from '../actions/navigation'

class DisplaySettings extends Component {
    componentDidMount() {
        this.props.dispatch(handleSetcurrentSection('display-settings'))
    }
    render() {
        return (
            <section className='display_info'>
                <Navbar currentLink='display_settings' />
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

export default connect(mapStateToProps)(DisplaySettings)