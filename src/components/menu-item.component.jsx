import React from 'react';

import './menu-item.css';

const MenuItem = ({title,imageUrl,size}) => (
    <div className="menu-item">
        <div style={{backgroundImage:`url(${imageUrl})`}} className='background-image'></div>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
            </div>
        </div>
)

export default MenuItem;