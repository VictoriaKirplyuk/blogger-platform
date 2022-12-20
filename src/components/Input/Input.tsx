import React, { DetailedHTMLProps, InputHTMLAttributes, ReactElement } from 'react';

import searchIcon from '../../assets/img/components/search-icon.svg';

import s from './Input.module.scss';

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type InputPropsType = DefaultInputPropsType & {
  isSearch?: boolean;
  style?: string;
};

const Input = ({ isSearch, style, ...rest }: InputPropsType): ReactElement => {
  const inputStyle: string = `${s.Input} ${style}`;

  return (
    <div className={inputStyle}>
      {isSearch && <img src={searchIcon} alt="searchIcon" />}
      <input {...rest} />
    </div>
  );
};

export default Input;
