import React, { ReactElement } from 'react';

import photoIcon from '../../../assets/img/photo/photo-icon.svg';
import DefaultAvatar from '../../DefaultAvatar/DefaultAvatar';

import s from './PostCard.module.scss';

const PostCard = (): ReactElement => {
  return (
    <div className={s.postCard}>
      <div className={s.postImage}>
        <img src={photoIcon} alt="icon" />
      </div>
      <div className={s.postInfo}>
        <div className={s.blogImage}>
          <DefaultAvatar circleStyle={s.imageCircle} iconWidth="22px" iconHeight="18px" />
        </div>
        <div className={s.postDescription}>
          <div className={s.postTitle}>Let&apos;s fly into space</div>
          <div className={s.blogTitle}>The best blog in our village</div>
          <div className={s.postDate}>12.12.2022</div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
