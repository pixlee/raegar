
import React, { Component } from 'react'
import { connect } from 'react-redux'

class DisplayInfoContent extends Component {
    render() {
        return (
            <div className='container'>
                <div className='section name_of_display'>
                    <label className='required'>Name of your display</label>
                    <input type='text' placeholder='Ex. Homepage | Community | PDP' />
                </div>
                <div className='section'>
                    <label className='required'>Albums</label>
                    <ul className='select'>
                        <li className='option'>Select an album</li>
                    </ul>
                </div>
                <div className='section disabled'>
                    <label className='required'>Filters</label>
                    <ul className='select'>
                        <li className='option'>Show All Approved Content</li>
                    </ul>
                </div>
                <div className='section disabled'>
                    <label className='required'>Sort Order</label>
                    <ul className='select'>
                        <li className='option'>Dynamic (Recommended)</li>
                    </ul>
                </div>
                <div className='section disabled'>
                    <label className='required'>Inspiration</label>
                    <p>See what's possible to design and build using our other widgets as inspiration</p>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ currentSection }) {
    return {
        currentSection
    }
}

export default connect(mapStateToProps)(DisplayInfoContent)