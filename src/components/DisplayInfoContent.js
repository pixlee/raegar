
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleGetAlbum, handleFilterAlbum } from '../actions/widget'
import { handleSetLoading } from '../actions/shared'
import { getAlbum } from '../data/albums'

class DisplayInfoContent extends Component {
    state = {
        showAlbumList: false,
        albumSelected: this.props.albumSelected,
        showFilterList: false,
        filterSelected: this.props.filterSelected
    }
    showAlbumList(e) {
        e.preventDefault()
        this.setState({
            showAlbumList: !this.state.showAlbumList
        })
    }
    showFilterList(e) {
        e.preventDefault()        
        this.setState({
            showFilterList: !this.state.showFilterList
        })
    }
    filterAlbum(e, filterName) {
        e.preventDefault()

        const { dispatch } = this.props

        dispatch(handleSetLoading(true))
        dispatch(handleFilterAlbum(filterName))

        // fake a delay for "API" call
        setTimeout(() => {
          dispatch(handleSetLoading(false))
        }, 1000)

        this.setState({
            showFilterList: !this.state.showFilterList,
            filterSelected: filterName
        })
    }
    loadAlbum(e, albumName) {
        e.preventDefault()

        const { dispatch } = this.props

        dispatch(handleSetLoading(true))
        dispatch(handleGetAlbum(getAlbum(albumName)))

        // fake a delay for "API" call
        setTimeout(() => {
          dispatch(handleSetLoading(false))
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
                <div className={ this.state.albumSelected ? 'section filters' : 'section disabled'}>
                    <label>Filters</label>
                    <div className='select' onClick={(e) => this.showFilterList(e)}>
                        <span>
                            { 
                                this.state.filterSelected ? 
                                this.state.filterSelected : 
                                'Show All Approved Content' 
                            }
                        </span>

                        { this.state.showFilterList && (
                            <ul className='options'>
                                <li onClick={(e) => this.filterAlbum(e, 'Show All Approved Content')}>
                                    Show All Approved Content
                                </li>
                                <li onClick={(e) => this.filterAlbum(e, 'Permissioned Content')}>
                                    Permissioned Content
                                </li>
                                <li>Two Factor Permissioned Content</li>
                                <li>Favorited Content</li>
                                <li>Content with Product Assigned</li>
                                <li>Content with Products In Stock</li>
                            </ul>
                        )}
                    </div>
                </div>
                <div className={ this.state.albumSelected ? 'section sort' : 'section disabled'}>
                    <label className='required'>Sort Order</label>
                    <div className='select'>
                        <span>Dynamic (Recommended)</span>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ currentSection, album, filter }) {
    return {
        currentSection,
        albumSelected: album.name,
        filterSelected: filter
    }
}

export default connect(mapStateToProps)(DisplayInfoContent)