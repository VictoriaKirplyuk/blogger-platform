import React, { ReactElement } from 'react';

import { NavLink } from 'react-router-dom';

import blogLogo from '../../assets/img/logo.svg';
import postLogo from '../../assets/img/post/post-icon.png';
import { RouteNames } from '../../enums/routes';

import s from './NavbarBlock.module.scss';

const NavbarBlock = (): ReactElement => {
  return (
    <aside className={s.nav}>
      <div className={s.navItem}>
        <img src={blogLogo} className={s.navItemLogo} alt="blogLogo" />
        <NavLink to={RouteNames.BLOGS} className={s.navItemTitle}>
          Blogs
        </NavLink>
      </div>
      <div className={s.navItem}>
        <img src={postLogo} className={s.navItemLogo} alt="postLogo" />
        <NavLink to={RouteNames.POSTS} className={s.navItemTitle}>
          Posts
        </NavLink>
      </div>
    </aside>
  );
};

export default NavbarBlock;
