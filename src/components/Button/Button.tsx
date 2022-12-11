import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactElement } from 'react';

import s from './Button.module.scss';

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = ({ ...restProps }: DefaultButtonPropsType): ReactElement => {
  return <button className={s.btn} type="button" {...restProps} />;
};

export default Button;
