
import React, { Component } from 'react'
import { connect } from 'react-redux'

class LayoutType extends Component {
    render() {
        return (
            <section className='customize_widget_section layout_type'>
                <div className='section'>
                    <label className='title'>Full Page Gallery</label>
                    <span className='secondary_title'>Best used for Shoppable Instagram, Inspiration Galleries, Contests.</span>

                    <ul className='layout_grid'>
                        <li>
                            <img src='https://assets.pixlee.com/assets/embed/glyph/publishing_widget_photowall-2a7b48cfceaca48c7776cb9efa2fafb9458f2f777d6f35ece5aa477ec74810be.svg' alt='photowall icon' />
                            <label>PHOTOWALL</label>
                        </li>
                        <li>
                            <img src='https://assets.pixlee.com/assets/embed/glyph/publishing_widget_mosaic-b80a575341cdafab545b5de7fb2d8588360a41aa7d7adbdeffba3d79a9ae73b8.svg' alt='photowall icon' />
                            <label>PHOTOWALL</label>
                        </li>
                    </ul>
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

export default connect(mapStateToProps)(LayoutType)