
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handleSetcurrentSection } from '../actions/navigation'

class Navbar extends Component {
    handleNavigation(e, link) {
        e.preventDefault()
        this.props.dispatch(handleSetcurrentSection(link))
        this.props.history.push(link);
    }
    render() {
        let { currentSection } = this.props

        return (
            <ul className='navbar'>
                <li>
                    <button className='close_btn'>
                        <i className="fal fa-times"></i>
                    </button>
                </li>
                <li className={ currentSection === 'Display Info' ? 'active' : '' }>
                    <div onClick={(e) => this.handleNavigation(e, 'display-info')}>
                        <i className="far fa-image"></i>
                        <span>Display Info</span>
                    </div>
                </li>
                <li className={ currentSection === 'Customize Widget' ? 'active' : '' }>
                    <div onClick={(e) => this.handleNavigation(e, 'customize-widget')}>
                        <i className="far fa-tools"></i>
                        <span>Customize Widget</span>
                    </div>
                </li>
                <li className={ currentSection === 'Design Editor' ? 'active' : '' }>
                    <div onClick={(e) => this.handleNavigation(e, 'design-editor')}>
                        <i className="far fa-palette"></i>
                        <span>Design Editor</span>
                    </div>
                </li>
                <li className={ currentSection === 'Display Settings' ? 'active' : '' }>
                    <div onClick={(e) => this.handleNavigation(e, 'display-settings')}>
                        <i className="far fa-cogs"></i>
                        <span>Display Settings</span>
                    </div>
                </li>
                <li className={ currentSection === 'Advanced Options' ? 'active' : '' }>
                    <div onClick={(e) => this.handleNavigation(e, 'advanced-options')}>
                        <i className="fas fa-graduation-cap"></i>
                        <span>Advanced Options</span>
                    </div>
                </li>
            </ul>
        )
    }
}

function mapStateToProps({ currentSection }) {
    return {
        currentSection
    }
}

export default withRouter(connect(mapStateToProps)(Navbar))