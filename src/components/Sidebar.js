
import React from 'react'

export default function Sidebar(props) {
    return (
        <section className='sidebar'>
            <div className='section_title'>
                <div className='icon'>
                    { props.showBackButton && (
                        <i onClick={() => props.handleGoBack()} className="far fa-arrow-left"></i>
                    )}
                </div>
                <h5>{ props.title }</h5>
                <div className='icon'>
                </div>
            </div>
            <div className='section_content'>
                { props.children }
            </div>
            <div className={props.disableControls ? 'section_controls disabled' : 'section_controls'}>
                <button className='create_btn'>Create</button>
                <button className='reset_btn'>Reset</button>
                <button className='preview_btn'>Preview</button>
            </div>
        </section>
    )
}