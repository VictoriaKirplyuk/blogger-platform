import React, { ReactElement } from 'react';

import { NavLink } from 'react-router-dom';

import { RouteNames } from '../../enums/routes';
import { useAppSelector } from '../../hooks/redux/useAppSelector';

import s from './Header.module.scss';

const Header = (): ReactElement => {
  const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);

  return (
    <header>
      <div className={s.logo}>Blogger Platform</div>
      <nav className={s.nav}>
        {isLoggedIn ? (
          <NavLink to="#" className={s.navItem}>
            Log out
          </NavLink>
        ) : (
          <>
            <NavLink to={RouteNames.LOGIN} className={s.navItem}>
              Sign in
            </NavLink>
            <NavLink to="#" className={s.navItem}>
              Sign up
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
