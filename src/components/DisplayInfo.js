
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import ContentBox from './ContentBox'
import { handleSetCurrentSection } from '../actions/shared'

class DisplayInfo extends Component {
    componentDidMount() {
        this.props.dispatch(handleSetCurrentSection('display-info'))
    }
    render() {
        return (
            <section className='display_info'>
                <Navbar />
                <Sidebar />
                <ContentBox />
            </section>
        )
    }
}

function mapStateToProps({ currentSection }) {
    return {
        currentSection
    }
}

export default connect(mapStateToProps)(DisplayInfo)