
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class CustomizeContent extends Component {
    render() {
        return (
            <div className='customize_widget_section main'>
                <Link to='customize-widget/layout-type' className='section'>
                    <div>
                        <label>Layout Type</label>
                        <label className='value'>{ this.props.layout }</label>
                    </div>
                    <i className="far fa-chevron-right"></i>
                </Link>
                <div className='section'>
                    <div>
                        <label>Header Customization</label>
                        <label className='value'>Top | Center Customized</label>
                    </div>
                    <i className="far fa-chevron-right"></i>
                </div>
                <div className='section'>
                    <div>
                        <label>Interactive Social Hub</label>
                        <label className='value'>None</label>
                    </div>
                    <i className="far fa-chevron-right"></i>
                </div>
                <div className='section'>
                    <div>
                        <label>Lightbox Type</label>
                        <label className='value'>Default</label>
                    </div>
                    <i className="far fa-chevron-right"></i>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ layout, currentSection }) {
    return {
        layout,
        currentSection
    }
}

export default connect(mapStateToProps)(CustomizeContent)