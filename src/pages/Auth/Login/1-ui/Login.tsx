import React, { FormEvent, ReactElement } from 'react';

import { NavLink } from 'react-router-dom';

import Button from '../../../../components/Button/Button';
import Input from '../../../../components/Input/Input';
import { RouteNames } from '../../../../enums/routes';
import { useAppDispatch } from '../../../../hooks/redux/useAppDispatch';
import { useInput } from '../../../../hooks/useInput';
import pS from '../../../Pages.module.scss';
import aS from '../../Auth.module.scss';
import { login } from '../2-bll/thunks/thunks';

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
    <div className={pS.pageWrapper}>
      <div className={aS.formWrapper}>
        <h1>Authorization</h1>
        <NavLink to={RouteNames.REGISTRATION} className={aS.link}>
          Don&#39;t have an account?
        </NavLink>
        <form className={aS.form} onSubmit={handleSubmit} noValidate>
          <div className={aS.inputGroup}>
            <Input
              name="loginOrEmail"
              placeholder="Login or email"
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
