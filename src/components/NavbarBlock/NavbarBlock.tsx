import React, { ReactElement } from 'react';

import { NavLink } from 'react-router-dom';

import { ReactComponent as BlogLogo } from '../../assets/img/blog/logo.svg';
import { ReactComponent as PostLogo } from '../../assets/img/post/logo.svg';
import { RouteNames } from '../../enums/routes';

import s from './NavbarBlock.module.scss';

const navItems = [
  { path: RouteNames.BLOGS, logo: BlogLogo, title: 'Blogs' },
  { path: RouteNames.POSTS, logo: PostLogo, title: 'Posts' },
];

const NavbarBlock = (): ReactElement => {
  return (
    <aside className={s.nav}>
      {navItems.map(item => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            isActive ? `${s.navItem} ${s.navItemActive}` : s.navItem
          }
        >
          <item.logo className={s.navItemLogo} />
          <div className={s.navItemTitle}>{item.title}</div>
        </NavLink>
      ))}
    </aside>
  );
};

export default NavbarBlock;
