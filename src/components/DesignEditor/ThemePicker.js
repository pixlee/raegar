
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { handleApplyTheme } from '../../actions/widget'

class ThemePicker extends Component {
    applyTheme(e, theme) {
        this.props.dispatch(handleApplyTheme(theme))
    }
    isCurrentTheme(listTheme) {
        return this.props.theme === listTheme
    }
    render() {
        return (
            <div className='design_editor_section main'>
                <div className='section'>
                    <h5>Select a theme to apply or modify</h5>
                </div>
                <div className={ this.isCurrentTheme('default-theme') ? 'section active' : 'section' }>
                    <div>
                        <i className={ this.isCurrentTheme('default-theme') ? 'fas fa-check-circle' : 'far fa-circle' } 
                            onClick={(e) => this.applyTheme(e, 'default-theme')}></i>
                        <Link to='design-editor/default-theme' className='theme_name' onClick={(e) => this.applyTheme(e, 'default-theme')}>
                            Pixlee - Default Theme
                        </Link>
                    </div>
                    <Link to='design-editor/default-theme' onClick={(e) => this.applyTheme(e, 'default-theme')}>
                        <i className="far fa-chevron-right"></i>
                    </Link>
                </div>
                <div className={ this.isCurrentTheme('minimalist-modern') ? 'section active' : 'section' }>
                    <div>
                        <i className={ this.isCurrentTheme('minimalist-modern') ? 'fas fa-check-circle' : 'far fa-circle' } 
                            onClick={(e) => this.applyTheme(e, 'minimalist-modern')}></i>
                        <Link to='design-editor/default-theme' className='theme_name' onClick={(e) => this.applyTheme(e, 'minimalist-modern')}>
                            Pixlee - Minimalist Modern
                        </Link>
                    </div>
                    <Link to='design-editor/default-theme' onClick={(e) => this.applyTheme(e, 'minimalist-modern')}>
                        <i className="far fa-chevron-right"></i>
                    </Link>
                </div>
                <div className={ this.isCurrentTheme('black-and-white') ? 'section active' : 'section' }>
                    <div>
                        <i className={ this.isCurrentTheme('black-and-white') ? 'fas fa-check-circle' : 'far fa-circle' } 
                            onClick={(e) => this.applyTheme(e, 'black-and-white')}></i>
                        <Link to='design-editor/default-theme' className='theme_name' onClick={(e) => this.applyTheme(e, 'black-and-white')}>
                            Pixlee - Black & White
                        </Link>
                    </div>
                    <Link to='design-editor/default-theme' onClick={(e) => this.applyTheme(e, 'black-and-white')}>
                        <i className="far fa-chevron-right"></i>
                    </Link>
                </div>
                <div className={ this.isCurrentTheme('paper-composition') ? 'section active' : 'section' }>
                    <div>
                        <i className={ this.isCurrentTheme('paper-composition') ? 'fas fa-check-circle' : 'far fa-circle' } 
                            onClick={(e) => this.applyTheme(e, 'paper-composition')}></i>
                        <Link to='design-editor/default-theme' className='theme_name' onClick={(e) => this.applyTheme(e, 'paper-composition')}>
                            Pixlee - Paper Composition
                        </Link>
                    </div>
                    <Link to='design-editor/default-theme' onClick={(e) => this.applyTheme(e, 'paper-composition')}>
                        <i className="far fa-chevron-right"></i>
                    </Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ theme }) {
    return {
        theme
    }
}

export default connect(mapStateToProps)(ThemePicker)