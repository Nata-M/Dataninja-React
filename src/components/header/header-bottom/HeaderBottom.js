import React from 'react';
import BlockRounded from './BlockRounded';
import Filter from './Filter';

function HeaderBottom() {
    return (
        <div className="header-bottom">
            <BlockRounded>
                <img src={require(`../../../photos/calendar.svg`)} alt="pic" />
                <p>11 Dec - 15 Dec</p>
            </BlockRounded>
            <BlockRounded>
                <img src={require(`../../../photos/fb.png`)} alt="" />
                <p>Facebook</p>
            </BlockRounded>
            <BlockRounded>
                <img src={require(`../../../photos/google.png`)} alt="" />
                <p>Google</p>
            </BlockRounded>
            <Filter />
            <button className='rounded'>
                <img src={require(`../../../photos/trash.svg`)} alt="" />
            </button>
        </div>
    )
}
export default HeaderBottom