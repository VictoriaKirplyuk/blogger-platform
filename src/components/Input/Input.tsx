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
  name: string;
};

const Input = ({ isSearch, style, name, ...rest }: InputPropsType): ReactElement => {
  const inputStyle: string = `${s.Input} ${style}`;

  return (
    <label htmlFor={name} className={inputStyle}>
      {isSearch && <img src={searchIcon} alt="searchIcon" />}
      <input {...rest} name={name} id={name} />
    </label>
  );
};

export default Input;
