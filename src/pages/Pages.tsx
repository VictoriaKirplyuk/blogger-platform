import React, { ReactElement } from 'react';

import s from '../app/1-ui/App.module.scss';
import AppRouter from '../components/AppRouter/AppRouter';
import NavbarBlock from '../components/NavbarBlock/NavbarBlock';

const Pages = (): ReactElement => {
  return (
    <div className={s.wrapper}>
      <NavbarBlock />
      <main>
        <div className={s.content}>
          <AppRouter />
        </div>
      </main>
    </div>
  );
};

export default Pages;
