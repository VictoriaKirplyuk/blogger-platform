import React, { ReactElement } from 'react';

import searchIcon from '../../assets/img/components/search-icon.svg';

import s from './SearchInput.module.scss';

const SearchInput = (): ReactElement => {
  return (
    <div className={s.searchInput}>
      <img src={searchIcon} alt="searchIcon" />
      <input placeholder="Search" />
    </div>
  );
};

export default SearchInput;
