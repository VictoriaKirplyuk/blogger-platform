import React, { ReactElement } from 'react';

import Header from '../../components/Header/Header';
import Pages from '../../pages/Pages';

import s from './App.module.scss';

const App = (): ReactElement => {
  return (
    <div className={s.app}>
      <Header />
      <Pages />
    </div>
  );
};

export default App;
