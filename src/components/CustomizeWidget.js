
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import ContentBox from './ContentBox'
import { handleSetCurrentSection } from '../actions/shared'
import CustomizeContent from './CustomizeWidget/CustomizeContent'
import LayoutType from './CustomizeWidget/LayoutType'
import { withRouter } from 'react-router-dom'

class CustomizeWidget extends Component {
    componentDidMount() {
        this.props.dispatch(handleSetCurrentSection('customize-widget'))
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

        let showBackButton = title.trim() === 'customize widget' ? false : true

        return (
            <section className='display_info'>
                <Navbar />
                <Sidebar title={ title.trim() } showBackButton={showBackButton} handleGoBack={() => this.goBack()}>
                    { title.trim() === 'customize widget' && (
                        <CustomizeContent />
                    )}

                    { title.trim() === 'layout type' && (
                        <LayoutType />
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

export default withRouter(connect(mapStateToProps)(CustomizeWidget))