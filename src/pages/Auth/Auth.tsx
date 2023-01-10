import React, { ChangeEvent, FormEvent, ReactElement, useState } from 'react';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Popup from '../../components/Popup/Popup';

import s from './Auth.module.scss';

const Auth = (): ReactElement => {
  const [isModalActive, setIsModalActive] = useState<boolean>(true);
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    console.log('hey');
  };

  const onLoginChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setLogin(e.currentTarget.value);
  };

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.currentTarget.value);
  };

  const onModalBtnClick = (): void => {
    setDisabled(true);
    setIsModalActive(true);
  };

  return (
    <div>
      <button type="button" onClick={onModalBtnClick} disabled={disabled}>
        Modal
      </button>
      <Popup
        title="Authorization"
        description="for administrator"
        isActive={isModalActive}
        setIsActive={setIsModalActive}
        setDisabled={setDisabled}
      >
        <form className={s.loginForm} onSubmit={handleSubmit} noValidate>
          <div className={s.inputGroup}>
            <Input
              name="login"
              placeholder="Login"
              value={login}
              onChange={onLoginChange}
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={onPasswordChange}
            />
          </div>
          <Button isSubmitting>Sign in</Button>
        </form>
      </Popup>
      {/* <Popup */}
      {/*  title="Authorization" */}
      {/*  description="for administrator" */}
      {/*  isActive={isModalActive} */}
      {/*  setIsActive={setIsModalActive} */}
      {/* > */}
      {/*  <form className={s.loginForm} onSubmit={handleSubmit} noValidate> */}
      {/*    <div className={s.inputGroup}> */}
      {/*      <Input */}
      {/*        name="login" */}
      {/*        placeholder="Login" */}
      {/*        value={login} */}
      {/*        onChange={onLoginChange} */}
      {/*      /> */}
      {/*      <Input */}
      {/*        type="password" */}
      {/*        name="password" */}
      {/*        placeholder="Password" */}
      {/*        value={password} */}
      {/*        onChange={onPasswordChange} */}
      {/*      /> */}
      {/*    </div> */}
      {/*    <Button isSubmitting>Sign in</Button> */}
      {/*  </form> */}
      {/* </Popup> */}
    </div>
  );
};

export default Auth;
