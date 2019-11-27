
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import ContentBox from './ContentBox'
import DisplayInfoContent from './DisplayInfoContent'
import { handleSetCurrentSection } from '../actions/shared'

class DisplayInfo extends Component {
    componentDidMount() {
        this.props.dispatch(handleSetCurrentSection('display-info'))
    }
    render() {
        let disableControls = this.props.album ? false : true

        return (
            <section className='display_info'>
                <Navbar />
                <Sidebar title='Display Info' disableControls={disableControls}>
                    <DisplayInfoContent />
                </Sidebar>
                <ContentBox />
            </section>
        )
    }
}

function mapStateToProps({ album, currentSection }) {
    return {
        currentSection,
        album,
    }
}

export default connect(mapStateToProps)(DisplayInfo)