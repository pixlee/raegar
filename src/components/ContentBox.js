
import React, { Component } from 'react'
import { connect } from 'react-redux'

class ContentBox extends Component {
    render() {
        let { currentSection } = this.props

        return (
            <section className='content_box'>
                <div className='device_switcher'>
                    <ul>
                        <li className='active'>
                            <i class="far fa-laptop"></i>
                            <span>Web</span>
                        </li>
                        <li>
                            <i class="far fa-tablet"></i>
                            <span>Tablet</span>
                        </li>
                        <li>
                            <i class="far fa-mobile"></i>
                            <span>Mobile</span>
                        </li>
                    </ul>
                </div>
                <div className='widget_holder'>
                    <div className='widget'>
                        <div className='header'>
                            <h4>Header goes here</h4>
                        </div>
                        <div className='gallery'>
                            <h4>Photos goes here</h4>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

function mapStateToProps({ currentSection }) {
    return {
        currentSection
    }
}

export default connect(mapStateToProps)(ContentBox)