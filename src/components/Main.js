import React from 'react';
import HeaderTop from './header/header-top/HeaderTop';
import HeaderBottom from './header/header-bottom/HeaderBottom';
import MainContent from './main-content/MainContent';

function Main() {
    return (
        <div className='Main'>
            <div className='header'>
                <HeaderTop />
                <HeaderBottom />
                <MainContent />
            </div>
        </div>
    )
}


export default Main