
import React, { Component } from 'react'
import { connect } from 'react-redux'
import DisplayInfoContent from './DisplayInfoContent'
// import { Link } from 'react-router-dom'

class Sidebar extends Component {
    render() {
        let { currentSection } = this.props

        return (
            <section className='sidebar'>
                <div className='section_title'>
                    <h5>{ currentSection }</h5>
                </div>
                <div className='section_content'>
                    { currentSection === 'Display Info' && (
                        <DisplayInfoContent />
                    )}
                </div>
                <div className='section_controls disabled'>
                    <button className='create_btn'>Create</button>
                    <button className='reset_btn'>Reset</button>
                    <button className='preview_btn'>Preview</button>
                </div>
            </section>
        )
    }
}

function mapStateToProps({ currentSection }) {
    console.log(currentSection)
    return {
        currentSection
    }
}

export default connect(mapStateToProps)(Sidebar)