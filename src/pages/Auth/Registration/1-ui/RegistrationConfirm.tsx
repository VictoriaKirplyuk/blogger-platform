import React, { FormEvent, ReactElement } from 'react';

import { NavLink } from 'react-router-dom';

import Button from '../../../../components/Button/Button';
import Input from '../../../../components/Input/Input';
import { useInput } from '../../../../hooks/useInput';
import pS from '../../../Pages.module.scss';
import aS from '../../Auth.module.scss';

const RegistrationConfirm = (): ReactElement => {
  // const dispatch = useAppDispatch();

  const confirmCode = useInput();

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    console.log('code');
  };

  return (
    <div className={pS.pageWrapper}>
      <div className={aS.formWrapper}>
        <h1>Confirm registration</h1>
        <NavLink to="#" className={aS.link}>
          Send code 1:30
        </NavLink>
        <form className={aS.form} onSubmit={handleSubmit} noValidate>
          <div className={aS.inputGroup}>
            <Input
              name="code"
              placeholder="Confirm code"
              value={confirmCode.value}
              onChange={confirmCode.onChange}
              autoComplete="off"
            />
          </div>
          <Button isSubmitting>Sign in</Button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationConfirm;
