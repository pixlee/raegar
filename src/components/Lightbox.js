
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleHideLightbox } from '../actions/lightbox'

class Lightbox extends Component {
    hideLightbox() {
        this.props.dispatch(handleHideLightbox())
    }
    render() {
        return (
            <div className='lightbox_section'>
                <div className='lightbox'>
                    <i className="fal fa-times" onClick={() => this.hideLightbox()}></i>
                    <div className='photo'>
                        <img src='https://images.unsplash.com/photo-1554141220-83411835a60b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60' alt='img' />
                        <div className='caption_box'></div>
                    </div>
                    <div className='info'>
                        <div className='caption_box'>
                            <div className='social_info'>
                                <div className='user'>
                                    <img src='https://cdn.dribbble.com/users/266836/avatars/normal/4be8e29e3f2ea96f5e1675987b3fc230.jpg' alt='' />
                                </div>

                                <div className='label_and_icons'> 
                                    <label>@iisbardan</label>                                  
                                    <div>
                                        <i className="fab fa-twitter"></i>
                                        <i className="fab fa-facebook-f"></i>
                                        <i className="fab fa-whatsapp"></i>
                                        <i className="fab fa-pinterest-p"></i>
                                    </div>
                                </div>
                            </div>
                            <p className='caption'>
                                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                            </p>
                            <ul className='products_list'>
                                <li className='product'>
                                    <img src='https://lp2.hm.com/hmgoepprod?set=source[/3e/8d/3e8dd7e37aa623deeea483d0231a4ae020f73c42.jpg],origin[dam],category[ladies_dresses_shortdresses],type[DESCRIPTIVESTILLLIFE],res[y],hmver[1]&call=url[file:/product/main]' alt='' />
                                    <button>BUY NOW</button>
                                </li>
                                <li className='product'>
                                    <img src='https://lp2.hm.com/hmgoepprod?set=source[/b8/07/b8075312968addbf4c904cdd3ef6ddb4580f1789.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[1]&call=url[file:/product/main]' alt='' />
                                    <button>BUY NOW</button>
                                </li>
                                <li className='product'>
                                    <img src='https://lp2.hm.com/hmgoepprod?set=source[/81/ae/81ae370dd879f369b74044d3efb679951f8ec28a.jpg],origin[dam],category[ladies_dresses_shortdresses],type[DESCRIPTIVESTILLLIFE],res[w],hmver[1]&call=url[file:/product/main]' alt='' />
                                    <button>BUY NOW</button>
                                </li>
                                <li className='product'>
                                    <img src='https://lp2.hm.com/hmgoepprod?set=source[/3d/b3/3db30f21de23099815d7a59fec01f5ad2d1bd394.jpg],origin[dam],category[ladies_dresses_shortdresses],type[DESCRIPTIVESTILLLIFE],res[w],hmver[1]&call=url[file:/product/main]' alt='' />
                                    <button>BUY NOW</button>
                                </li>
                            </ul>
                        </div>
                    </div>
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

export default connect(mapStateToProps)(Lightbox)