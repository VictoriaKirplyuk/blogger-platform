import React, { ReactElement } from 'react';

import AppRouter from '../../components/AppRouter/AppRouter';
import NavbarBlock from '../../components/NavbarBlock/NavbarBlock';

import s from './App.module.scss';

const App = (): ReactElement => {
  return (
    <div className={s.app}>
      <header>
        <div className={s.logo}>Blogger Platform</div>
      </header>
      <div className={s.wrapper}>
        <NavbarBlock />
        <main>
          <div className={s.content}>
            <AppRouter />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
