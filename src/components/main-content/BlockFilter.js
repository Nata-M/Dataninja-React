import React from 'react';


function BlockFilter(props) {
    const text = props.text
    return (
        <div className="filter-first-row">
            <div className="filter-by">
                {text}
                <select name="" id="select-button"></select>
            </div>
            <div>View All</div>
        </div>
    )
}


export default BlockFilter;