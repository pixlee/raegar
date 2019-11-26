
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleGetAlbum } from '../actions/widget'
import { handleSetFetchingData } from '../actions/shared'
import { getAlbum } from '../data/albums'

class DisplayInfoContent extends Component {
    state = {
        showAlbumList: false,
        albumSelected: this.props.albumSelected
    }
    showAlbumList(e) {
        e.preventDefault()

        this.setState({
            showAlbumList: !this.state.showAlbumList
        })
    }
    loadAlbum(e, albumName) {
        e.preventDefault()

        const { dispatch } = this.props

        dispatch(handleSetFetchingData(true))
        dispatch(handleGetAlbum(getAlbum(albumName)))

        // fake a delay for "API" call
        setTimeout(() => {
          dispatch(handleSetFetchingData(false))
        }, 1000)

        this.setState({
            showAlbumList: !this.state.showAlbumList,
            albumSelected: albumName
        })
    }
    render() {
        return (
            <div className='container'>
                <div className='section name_of_display'>
                    <label className='required'>Name of your display</label>
                    <input type='text' placeholder='Ex. Homepage | Community | PDP' />
                </div>
                <div className='section albums_dropdown'>
                    <label className='required'>Albums</label>
                    <div className='select' onClick={(e) => this.showAlbumList(e)}>
                        <span>
                            { this.state.albumSelected ? this.state.albumSelected : 'Select an album' }
                        </span>

                        { this.state.showAlbumList && (
                            <ul className='options'>
                                <li onClick={(e) => this.loadAlbum(e, 'Fashion & Clothes')}>Fashion & Clothes</li>
                                <li onClick={(e) => this.loadAlbum(e, 'Travel Life')}>Travel Life</li>
                                <li>Nature and Wilderness</li>
                                <li>Food and Drinks</li>
                            </ul>
                        )}
                    </div>
                </div>
                <div className={ this.state.albumSelected ? 'section' : 'section disabled'}>
                    <label className='required'>Filters</label>
                    <div className='select'>
                        <span>Show All Approved Content</span>
                    </div>
                </div>
                <div className={ this.state.albumSelected ? 'section' : 'section disabled'}>
                    <label className='required'>Sort Order</label>
                    <div className='select'>
                        <span>Dynamic (Recommended)</span>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ currentSection, album }) {
    return {
        currentSection,
        albumSelected: album.name
    }
}

export default connect(mapStateToProps)(DisplayInfoContent)