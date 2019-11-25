
import React, { Component } from 'react'
import { connect } from 'react-redux'
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
                </div>
                <div className='section_controls'>
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