import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactElement } from 'react';

import s from './Button.module.scss';

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type IBtnProps = {
  isSubmitting?: boolean;
} & DefaultButtonPropsType;

const Button = ({ isSubmitting, ...restProps }: IBtnProps): ReactElement => {
  return isSubmitting ? (
    <button className={s.btn} type="submit" {...restProps} />
  ) : (
    <button className={s.btn} type="button" {...restProps} />
  );
};

export default Button;
