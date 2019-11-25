
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        const { currentLink } = this.props

        return (
            <ul className='navbar'>
                <li>
                    <button className='close_btn'>
                        <i className="fal fa-times"></i>
                    </button>
                </li>
                <li className={ currentLink === 'display_info' ? 'active' : '' }>
                    <Link to='/'>
                        <i className="far fa-image"></i>
                        <span>Display Info</span>
                    </Link>
                </li>
                <li className={ currentLink === 'customize_widget' ? 'active' : '' }>
                    <Link to='/customize-widget'>
                        <i className="far fa-tools"></i>
                        <span>Customize Widget</span>
                    </Link>
                </li>
                <li className={ currentLink === 'design_editor' ? 'active' : '' }>
                    <Link to='/design-editor'>
                        <i className="far fa-palette"></i>
                        <span>Design Editor</span>
                    </Link>
                </li>
                <li className={ currentLink === 'display_settings' ? 'active' : '' }>
                    <Link to='/display-settings'>
                        <i className="far fa-cogs"></i>
                        <span>Display Settings</span>
                    </Link>
                </li>
                <li className={ currentLink === 'advanced_options' ? 'active' : '' }>
                    <Link to='/advanced-options'>
                        <i className="fas fa-graduation-cap"></i>
                        <span>Advanced Options</span>
                    </Link>
                </li>
            </ul>
        )
    }
}

export default connect()(Navbar)