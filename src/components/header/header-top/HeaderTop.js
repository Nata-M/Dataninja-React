import React from 'react';
import Logo from './Logo';
import Search from './Search';
import Profile from './Profile';
import HeaderTopLink from './HeaderTopLink';

function HeaderTop() {
    return (
        <div className='header-top'>
            <div className="row-1">
                <Logo />
            </div>
            <HeaderTopLink textStyle="underline">Create Website</HeaderTopLink>
            <HeaderTopLink color='orange'>+ Create Ad</HeaderTopLink>
            <Search />
            <Profile />
        </div>
    )
}


export default HeaderTop