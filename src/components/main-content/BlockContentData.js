import React from 'react';


function BlockContentData(props) {
    const primaryTitle = props.primary;
    const secondaryTitle = props.secondary;

    return (
        <div className='data'>
            <div className={`circle ${props.backgroundColor}`}></div>
            <div className="txt-data">
                <p className="titles">{primaryTitle}</p>
                <p className="numbers">{secondaryTitle}</p>
            </div>
        </div>
    )
}

export default BlockContentData