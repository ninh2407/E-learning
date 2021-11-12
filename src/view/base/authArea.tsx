import React from 'react';

import './index.css'
import userIcon from '../../resource/img/user_circle.svg';

type propsType = {
    userName: string;
}


const AuthArea = ({userName}:propsType) => {
   return (
    <div className="auth">
        <div className="auth__user">
            <img className="auth__user-img" src={userIcon} alt="user" />
            <p className="auth__user-name">{userName}</p>
        </div>
        <div className="auth__user-action">
                <p className="auth__user-text">Đăng xuất</p>
        </div>
    </div>
   )
}

export default AuthArea;