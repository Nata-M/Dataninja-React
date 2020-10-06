import React from 'react';


function HeaderTopLink(props) {
    return (
        <div className={`header-top-link ${props.color ? props.color : ''} ${props.textStyle ? props.textStyle : ''}`}>{props.children}</div>
    )
}
export default HeaderTopLink