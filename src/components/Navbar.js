
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <ul className='navbar'>
                <li>
                    <button className='close_btn'>
                        <i class="fal fa-times"></i>
                    </button>
                </li>
                <li>
                    <Link to='/'>
                        <i class="far fa-image"></i>
                        <span>Display Info</span>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <i class="far fa-tools"></i>
                        <span>Customize Widget</span>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <i class="far fa-palette"></i>
                        <span>Design Editor</span>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <i class="far fa-cogs"></i>
                        <span>Display Settings</span>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <i class="fas fa-graduation-cap"></i>
                        <span>Advanced Options</span>
                    </Link>
                </li>
            </ul>
        )
    }
}

export default connect()(Navbar)