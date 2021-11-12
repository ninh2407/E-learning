import React from 'react';

import './index.css';
import logo from '../../resource/img/logo.svg';
import a1 from '../../resource/img/1.svg';
import a2 from '../../resource/img/2.svg';
import a3 from '../../resource/img/3.svg';
import a4 from '../../resource/img/4.svg';
import a5 from '../../resource/img/5.svg';

const Aside = () => {
    return (
    <div className="aside__wrapper">
        <div>
            <img src={logo} alt="logo" />
        </div>
        <ul>
            <li><img src={a1} alt="" /></li>
            <li><img src={a2} alt="" /></li>
            <li><img src={a3} alt="" /></li>
            <li><img src={a4} alt="" /></li>
            <li><img src={a5} alt="" /></li>
        </ul>
    </div>  
    )
};

export default Aside;
