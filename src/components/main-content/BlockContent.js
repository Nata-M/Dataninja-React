import React from 'react';

function BlockContent() {
    return (
        <div className='row block-content'>
            <div className="block-photo">
                <img className="photo" src={require('../../photos/ninja.svg')} alt="" />
            </div>
            <div className="block-txt">
                <div className="block-paragraph">
                    <p>White Belt</p>
                    <p>Now you are White Belt but you can keep going</p>
                </div>
                <div className="block-button">
                    <div className="block-button-txt">Create More Ad</div>
                    <div className="status">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default BlockContent