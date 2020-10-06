import React from 'react';

function BlockTitles(props) {
    const primaryTitle = props.primary;
    const secondaryTitle = props.secondary;

    return <div className='block-titles'>
        <div className="texts">{primaryTitle}</div>
        {secondaryTitle ? <div className="texts orange secondary-font underline">{secondaryTitle}</div> : null}
    </div>
}


export default BlockTitles