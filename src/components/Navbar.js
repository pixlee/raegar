
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <ul className='navbar'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/'>Leaderboard</Link>
                </li>
                <li>
                    <Link to='/'>New Poll</Link>
                </li>
            </ul>
        )
    }
}

export default connect()(Navbar)