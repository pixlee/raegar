
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { handleSetCurrentSection } from '../actions/shared'

class AdvancedOptions extends Component {
    componentDidMount() {
        this.props.dispatch(handleSetCurrentSection('advanced-options'))
    }
    render() {
        return (
            <section className='display_info'>
                <Navbar currentLink='advanced_options' />
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

export default connect(mapStateToProps)(AdvancedOptions)