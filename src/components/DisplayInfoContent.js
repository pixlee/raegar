
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleGetAlbum } from '../actions/widget'
import { getAlbum } from '../data/albums'

class DisplayInfoContent extends Component {
    state = {
        showAlbumList: false
    }
    showAlbumList(e) {
        e.preventDefault()

        this.setState({
            showAlbumList: !this.state.showAlbumList
        })
    }
    loadAlbum(e, albumId) {
        e.preventDefault()
        this.props.dispatch(handleGetAlbum(getAlbum(albumId)))

        this.setState({
            showAlbumList: !this.state.showAlbumList
        })
    }
    render() {
        return (
            <div className='container'>
                <div className='section name_of_display'>
                    <label className='required'>Name of your display</label>
                    <input type='text' placeholder='Ex. Homepage | Community | PDP' />
                </div>
                <div className='section'>
                    <label className='required'>Albums</label>
                    <div className='select' onClick={(e) => this.showAlbumList(e)}>
                        <span>Select an album</span>

                        { this.state.showAlbumList && (
                            <ul className='options'>
                                <li onClick={(e) => this.loadAlbum(e, 1659473)}>Fashion & Clothes</li>
                                <li>Canadian Influencers</li>
                                <li>Nature and Wilderness</li>
                                <li>Canadian Influencers</li>
                            </ul>
                        )}
                    </div>
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