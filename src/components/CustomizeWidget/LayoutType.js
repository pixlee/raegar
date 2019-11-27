
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleChangeDisplayLayout } from '../../actions/widget'
import { handleSetLoading } from '../../actions/shared'

class LayoutType extends Component {
    changeLayout(e, layout) {
        this.props.dispatch(handleSetLoading(true))
        this.props.dispatch(handleChangeDisplayLayout(layout))

        // fake a delay for "API" call
        setTimeout(() => {
            this.props.dispatch(handleSetLoading(false))
        }, 1000)
    }
    getClassName(layoutType) {
        return this.props.layout === layoutType ? 'active' : ''
    }
    render() {
        return (
            <section className='customize_widget_section layout_type'>
                <div className='section'>
                    <label className='title'>Full Page Gallery</label>
                    <span className='secondary_title'>Best used for Shoppable Instagram, Inspiration Galleries, Contests.</span>

                    <ul className='layout_grid'>
                        <li onClick={(e) => this.changeLayout(e, 'photowall')} className={this.getClassName('photowall')}>
                            <img src='https://assets.pixlee.com/assets/embed/glyph/publishing_widget_photowall-2a7b48cfceaca48c7776cb9efa2fafb9458f2f777d6f35ece5aa477ec74810be.svg' alt='photowall icon' />
                            <label>PHOTOWALL</label>
                        </li>
                        <li onClick={(e) => this.changeLayout(e, 'mosaic')} className={this.getClassName('mosaic')}>
                            <img src='https://assets.pixlee.com/assets/embed/glyph/publishing_widget_mosaic-b80a575341cdafab545b5de7fb2d8588360a41aa7d7adbdeffba3d79a9ae73b8.svg' alt='photowall icon' />
                            <label>MOSAIC</label>
                        </li>
                        <li onClick={(e) => this.changeLayout(e, 'pinboard')} className={this.getClassName('pinboard')}>
                            <img src='https://assets.pixlee.com/assets/embed/glyph/publishing_widget_mosaic-b80a575341cdafab545b5de7fb2d8588360a41aa7d7adbdeffba3d79a9ae73b8.svg' alt='photowall icon' />
                            <label>PINBOARD</label>
                        </li>
                    </ul>
                </div>
                <div className='section'>
                    <label className='title'>Carousel</label>
                    <span className='secondary_title'>Best used for homepages, PDPs, pages with limited space</span>

                    <ul className='layout_grid'>
                        <li>
                            <img src='https://assets.pixlee.com/assets/embed/glyph/publishing_widget_carousel_photowall_2rows-b04eec9961796e2025feca9b7fd11cb0f769dfdc04ef8cdc20ed3597f97ad0c3.svg' alt='photowall icon' />
                            <label>PHOTOWALL</label>
                        </li>
                        <li>
                            <img src='https://assets.pixlee.com/assets/embed/glyph/publishing_widget_carousel_mosaic_2rows-21acffaec03c88706e0503945f5787014e01388ad25402b759aaa851ff4880fd.svg' alt='photowall icon' />
                            <label>MOSAIC</label>
                        </li>
                        <li>
                            <img src='https://assets.pixlee.com/assets/embed/glyph/publishing_widget_horizontal-2fc9fafdf8a6a53d5ee0fd5eb04a155586c7330adbfba93c2bd0d9bc00fb125a.svg' alt='photowall icon' />
                            <label>HORIZONTAL</label>
                        </li>
                        <li>
                            <img src='https://assets.pixlee.com/assets/embed/glyph/publishing_widget_coverflow@2x-c1eba3d0c2ecdf51cb4ff7e592c43dd2799bfc0fcef7b791972aad617eb57b3a.png' alt='photowall icon' />
                            <label>COVERFLOW</label>
                        </li>
                        <li>
                            <img src='https://assets.pixlee.com/assets/embed/glyph/publishing_widget_vertical-ff94ec6c5d18fc7706240bc0b3302d32a47ce0215956ebcd42d3dfc5f4acabc7.svg' alt='photowall icon' />
                            <label>VERTICAL</label>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}

function mapStateToProps({ layout }) {
    return {
        layout
    }
}

export default connect(mapStateToProps)(LayoutType)