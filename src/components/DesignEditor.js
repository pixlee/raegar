
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import ContentBox from './ContentBox'
import { handleSetCurrentSection } from '../actions/shared'
import ThemePicker from './DesignEditor/ThemePicker'
import ThemeEditor from './DesignEditor/ThemeEditor'
import LightboxOptions from './DesignEditor/LightboxOptions'

class DesignEditor extends Component {
    componentDidMount() {
        this.props.dispatch(handleSetCurrentSection('design-editor'))
    }
    goBack() {
        this.props.history.goBack();
    }
    render() {
        const path = this.props.location.pathname
        const index = path.lastIndexOf('/')
        const titleArray = path.substring(index + 1).split('-')
        let title = ''

        titleArray.map((t) => {
            title = title + ' ' + t
            return ''
        })

        let showBackButton = title.trim() === 'design editor' ? false : true
        
        return (
            <section className='display_info'>
                <Navbar currentLink='design_editor' />
                <Sidebar title={title.trim()} showBackButton={showBackButton} handleGoBack={() => this.goBack()}>                    
                    { title.trim() === 'design editor' && (
                        <ThemePicker />
                    )}

                    { (title.trim() === 'default theme' || title.trim() === 'black & white') && (
                        <ThemeEditor />
                    )}

                    { title.trim() === 'lightbox' && (
                        <LightboxOptions />
                    )}
                </Sidebar>
                <ContentBox />
            </section>
        )
    }
}

function mapStateToProps({ currentSection }) {
    return {
        currentSection
    }
}

export default connect(mapStateToProps)(DesignEditor)