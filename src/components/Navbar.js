
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { history } from 'react-router-dom'
import { handleSetCurrentLink } from '../actions/navigation'

class Navbar extends Component {
    handleNavigation(e, link) {
        e.preventDefault()
        this.props.dispatch(handleSetCurrentLink(link))
    }
    render() {
        let { currentLink } = this.props

        if(!currentLink) {
            currentLink = 'display-info'
        }

        return (
            <ul className='navbar'>
                <li>
                    <button className='close_btn'>
                        <i className="fal fa-times"></i>
                    </button>
                </li>
                <li className={ currentLink === 'display-info' ? 'active' : '' }>
                    <div onClick={(e) => this.handleNavigation(e, 'display-info')}>
                        <i className="far fa-image"></i>
                        <span>Display Info</span>
                    </div>
                </li>
                <li className={ currentLink === 'customize-widget' ? 'active' : '' }>
                    <div onClick={(e) => this.handleNavigation(e, 'customize-widget')}>
                        <i className="far fa-tools"></i>
                        <span>Customize Widget</span>
                    </div>
                </li>
                <li className={ currentLink === 'design-editor' ? 'active' : '' }>
                    <div onClick={(e) => this.handleNavigation(e, 'design-editor')}>
                        <i className="far fa-palette"></i>
                        <span>Design Editor</span>
                    </div>
                </li>
                <li className={ currentLink === 'display-settings' ? 'active' : '' }>
                    <div onClick={(e) => this.handleNavigation(e, 'display-settings')}>
                        <i className="far fa-cogs"></i>
                        <span>Display Settings</span>
                    </div>
                </li>
                <li className={ currentLink === 'advanced-options' ? 'active' : '' }>
                    <div onClick={(e) => this.handleNavigation(e, 'advanced-options')}>
                        <i className="fas fa-graduation-cap"></i>
                        <span>Advanced Options</span>
                    </div>
                </li>
            </ul>
        )
    }
}

function mapStateToProps({ navigation }) {
    return {
        currentLink: navigation.currentLink
    }
}

export default connect(mapStateToProps)(Navbar)