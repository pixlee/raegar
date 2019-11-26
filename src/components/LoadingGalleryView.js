
import React, { Component } from 'react'
import { connect } from 'react-redux'

class LoadingGalleryView extends Component {
    render() {
        return (
            <ul className='gallery loading'>
                <li className='shine'></li>
                <li className='shine'></li>
                <li className='shine'></li>
                <li className='shine'></li>
                <li className='shine'></li>
                <li className='shine'></li>
                <li className='shine'></li>
                <li className='shine'></li>
                <li className='shine'></li>
                <li className='shine'></li>
                <li className='shine'></li>
                <li className='shine'></li>
                <li className='shine'></li>
                <li className='shine'></li>
                <li className='shine'></li>
                <li className='shine'></li>
            </ul>
        )
    }
}

function mapStateToProps({ currentSection }) {
    return {
        currentSection
    }
}

export default connect(mapStateToProps)(LoadingGalleryView)