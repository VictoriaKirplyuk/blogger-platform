import React, { ReactElement } from 'react';

import openFilterIcon from '../../assets/img/components/open-select.svg';

import s from './Select.module.scss';

const Select = (): ReactElement => {
  return (
    <div className={s.select}>
      <div className={s.selectHeader}>
        <span className={s.selectCurrent}>New blogs first</span>
        <img className={s.selectIcon} src={openFilterIcon} alt="icon filter" />
      </div>

      <div className={s.selectBody}>
        <div className={s.selectItem}>Old blog first</div>
        <div className={s.selectItem}>From A to Z</div>
        <div className={s.selectItem}>From Z to A</div>
      </div>
    </div>
  );
};

export default Select;
