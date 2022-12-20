import React, { ReactElement } from 'react';

import Input from '../../components/Input/Input';
import Popup from '../../components/Popup/Popup';

import s from './Auth.module.scss';

const Auth = (): ReactElement => {
  return (
    <Popup
      isShow
      title="Authorization"
      description="for administrator"
      modalBtnTitle="Sign in"
    >
      <div className={s.inputGroup}>
        <Input placeholder="Login" />
        <Input placeholder="Password" type="password" />
      </div>
    </Popup>
  );
};

export default Auth;
