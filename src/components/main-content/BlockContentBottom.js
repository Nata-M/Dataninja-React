import React from 'react';
import BlockContentData from './BlockContentData';

function BlockContentBottom(props) {
    return (
        <div className="block-content">
            <div className="block-content-data">
                <BlockContentData backgroundColor='circle-orange' primary='Total:' secondary='200,000'></BlockContentData>
                <BlockContentData backgroundColor='circle-blue' primary='Unique Views:' secondary='155,000'></BlockContentData>
                <BlockContentData backgroundColor='circle-green' primary='Views:' secondary='100,000'></BlockContentData>
            </div>
        </div>
    )
}


export default BlockContentBottom