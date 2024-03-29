import React, { FormEvent, ReactElement } from 'react';

import { Navigate, NavLink } from 'react-router-dom';

import Button from '../../../../components/Button/Button';
import Input from '../../../../components/Input/Input';
import { StepAuth } from '../../../../enums/auth';
import { RouteNames } from '../../../../enums/routes';
import { useAppDispatch } from '../../../../hooks/redux/useAppDispatch';
import { useAppSelector } from '../../../../hooks/redux/useAppSelector';
import { useInput } from '../../../../hooks/useInput';
import pS from '../../../Pages.module.scss';
import aS from '../../Auth.module.scss';
import { registration } from '../2-bll/thunks/thunks';

const Registration = (): ReactElement => {
  const dispatch = useAppDispatch();

  const stepAuth = useAppSelector(state => state.registration.stepAuth);

  const login = useInput();
  const email = useInput();
  const password = useInput();

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    dispatch(registration(login.value, password.value, email.value));
  };

  if (stepAuth === StepAuth.REGISTRATION_CONFIRM) {
    return <Navigate to={RouteNames.REGISTRATION_CONFIRM} />;
  }

  return (
    <div className={pS.pageWrapper}>
      <div className={aS.formWrapper}>
        <h1>Registration</h1>
        <NavLink to={RouteNames.LOGIN} className={aS.link}>
          Already have an account?
        </NavLink>
        <form className={aS.form} onSubmit={handleSubmit} noValidate>
          <div className={aS.inputGroup}>
            <Input
              name="login"
              placeholder="Login"
              value={login.value}
              onChange={login.onChange}
              autoComplete="off"
            />
            <Input
              name="email"
              placeholder="Email"
              value={email.value}
              onChange={email.onChange}
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

export default Registration;
