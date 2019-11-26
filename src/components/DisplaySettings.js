
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { handleSetCurrentSection } from '../actions/shared'

class DisplaySettings extends Component {
    componentDidMount() {
        this.props.dispatch(handleSetCurrentSection('display-settings'))
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