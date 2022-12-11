import React, { ReactElement } from 'react';

import blogLogo from '../../assets/img/logo.svg';
import postLogo from '../../assets/img/post/post-icon.png';

import s from './NavbarBlock.module.scss';

const NavbarBlock = (): ReactElement => {
  return (
    <aside className={s.nav}>
      <div className={s.navItem}>
        <img src={blogLogo} className={s.navItemLogo} alt="blogLogo" />
        <span className={s.navItemTitle}>Blogs</span>
      </div>
      <div className={s.navItem}>
        <img src={postLogo} className={s.navItemLogo} alt="postLogo" />
        <span className={s.navItemTitle}>Posts</span>
      </div>
    </aside>
  );
};

export default NavbarBlock;
