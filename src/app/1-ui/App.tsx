import React, { ReactElement } from 'react';

import AppRouter from '../../components/AppRouter/AppRouter';
import NavbarBlock from '../../components/NavbarBlock/NavbarBlock';
import SearchInput from '../../components/SearchInput/SearchInput';
import Select from '../../components/Select/Select';

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
            <h3 className={s.contentTitle}>Blogs</h3>
            <div className={s.searchBlock}>
              <SearchInput />
              <Select />
            </div>
            <AppRouter />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
