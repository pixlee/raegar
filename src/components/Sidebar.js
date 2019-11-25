
import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'

class Sidebar extends Component {
    render() {
        return (
            <section className='sidebar'>
                <div className='section_title'>
                    <h5>Section Title</h5>
                </div>
                <div className='section_content'>
                </div>
                <div className='section_controls'>
                </div>
            </section>
        )
    }
}

export default connect()(Sidebar)