import React, { ReactElement } from 'react';

import DefaultAvatar from '../../DefaultAvatar/DefaultAvatar';

import s from './BlogCard.module.scss';

const BlogCard = (): ReactElement => {
  return (
    <div className={s.blogCard}>
      <div className={s.blogImage}>
        <DefaultAvatar />
      </div>
      <div className={s.blogCardInfo}>
        <div className={s.blogCardInfoHeader}>
          <h4 className={s.blogTitle}>Warriors</h4>
          <div className={s.blogWebsite}>
            Website: <a href="https://www.youtube.com/">https://www.youtube.com/</a>
          </div>
        </div>
        <p className={s.blogDescription}>
          Asperiores excepturi Lorem ipsum dolor sit amet, ctetur adipisicing elit.
          Asperiores excepturi Lorem ipsum dolor sit amet, ctetur adipisicing elit.
          Asperiores excepturi Lorem ipsum dolor sit amet, ctetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
