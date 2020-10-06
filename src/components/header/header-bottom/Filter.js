import React from 'react';

function Filter() {
    return (
        <button className='date filter'>
            <img src={require(`../../../photos/filter.svg`)} alt="" />
            <p>Filter</p>
        </button>
    )
}

export default Filter