
import React, { Component } from 'react'

class PhotoItem extends Component {
    render() {
        const { photo } = this.props

        return (
            <div className='photo_item'>
                <img src={photo.url} />
            </div>
        )
    }
}

export default PhotoItem