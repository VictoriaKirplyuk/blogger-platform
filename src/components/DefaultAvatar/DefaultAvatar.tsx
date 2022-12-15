import React, { ReactElement } from 'react';

import photoIcon from '../../assets/img/photo/photo-icon.svg';

import s from './DefaultAvatar.module.scss';

interface IDefaultAvatar {
  circleStyle?: string;
  iconWidth?: string;
  iconHeight?: string;
}

const DefaultAvatar = ({
  circleStyle,
  iconWidth,
  iconHeight,
}: IDefaultAvatar): ReactElement => {
  return (
    <div className={`${s.imageCircle} ${circleStyle}`}>
      <img src={photoIcon} alt="photoIcon" width={iconWidth} height={iconHeight} />
    </div>
  );
};

export default DefaultAvatar;
