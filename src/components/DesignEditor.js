
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { handleSetcurrentSection } from '../actions/navigation'

class DesignEditor extends Component {
    componentDidMount() {
        this.props.dispatch(handleSetcurrentSection('design-editor'))
    }
    render() {
        return (
            <section className='display_info'>
                <Navbar currentLink='design_editor' />
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

export default connect(mapStateToProps)(DesignEditor)