
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handleSetCurrentSection } from '../actions/shared'

class Navbar extends Component {
    handleNavigation(e, link) {
        e.preventDefault()
        this.props.dispatch(handleSetCurrentSection(link))
        this.props.history.push(link);
    }
    getClassNames(section) {
        let { currentSection, album } = this.props
        let classNames = ''

        if(currentSection === section) {
            classNames += 'active'
        }

        if(section !== 'Display Info' && !album) {
            classNames += ' disabled'
        }

        return classNames
    }
    render() {
        return (
            <ul className='navbar'>
                <li>
                    <button className='close_btn'>
                        <i className="fal fa-times"></i>
                    </button>
                </li>
                <li className={ this.getClassNames('Display Info') }>
                    <div onClick={(e) => this.handleNavigation(e, 'display-info')}>
                        <i className="far fa-image"></i>
                        <span>Display Info</span>
                    </div>
                </li>
                <li className={ this.getClassNames('Customize Widget') }>
                    <div onClick={(e) => this.handleNavigation(e, 'customize-widget')}>
                        <i className="far fa-tools"></i>
                        <span>Customize Widget</span>
                    </div>
                </li>
                <li className={ this.getClassNames('Design Editor') }>
                    <div onClick={(e) => this.handleNavigation(e, 'design-editor')}>
                        <i className="far fa-palette"></i>
                        <span>Design Editor</span>
                    </div>
                </li>
                <li className={ this.getClassNames('Display Settings') }>
                    <div onClick={(e) => this.handleNavigation(e, 'display-settings')}>
                        <i className="far fa-cogs"></i>
                        <span>Display Settings</span>
                    </div>
                </li>
                <li className={ this.getClassNames('Advanced Options') }>
                    <div onClick={(e) => this.handleNavigation(e, 'advanced-options')}>
                        <i className="fas fa-graduation-cap"></i>
                        <span>Advanced Options</span>
                    </div>
                </li>
            </ul>
        )
    }
}

function mapStateToProps({ album, currentSection }) {
    return {
        album,
        currentSection
    }
}

export default withRouter(connect(mapStateToProps)(Navbar))