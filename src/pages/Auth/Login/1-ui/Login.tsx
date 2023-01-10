import React, { FormEvent, ReactElement } from 'react';

import Button from '../../../../components/Button/Button';
import Input from '../../../../components/Input/Input';
import { useAppDispatch } from '../../../../hooks/redux/useAppDispatch';
import { useInput } from '../../../../hooks/useInput';
import { login } from '../2-bll/thunks/thunks';

import s from './Login.module.scss';

const Login = (): ReactElement => {
  const dispatch = useAppDispatch();

  const loginOrEmail = useInput();
  const password = useInput();

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (loginOrEmail.value && password.value) {
      dispatch(login(loginOrEmail.value, password.value));
    }
  };

  return (
    <div className={s.pageWrapper}>
      <div className={s.formWrapper}>
        <h1>Authorization</h1>
        <h2>fill in the required fields</h2>
        <form className={s.loginForm} onSubmit={handleSubmit} noValidate>
          <div className={s.inputGroup}>
            <Input
              name="login"
              placeholder="Login"
              value={loginOrEmail.value}
              onChange={loginOrEmail.onChange}
              autoComplete="off"
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={password.value}
              onChange={password.onChange}
            />
          </div>
          <Button isSubmitting>Sign in</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
