import React from 'react';


function BlockList(props) {
    const text = props.text;
    const textMiddle = props.textMiddle;
    const textLeft = props.textLeft;
    const styleProps = props.styleProps;
    const textStyle = props.textStyle;
    const percentage = props.percentage;
    return (
        <div className="block-list">
            <div className="block-list-item">
                <div className={`${styleProps}`}>{percentage}</div>
                <div>{text}</div>
            </div>
            <div>{textMiddle}</div>
            <p className={`${textStyle}`}>{textLeft}</p>
        </div>
    )
}

export default BlockList