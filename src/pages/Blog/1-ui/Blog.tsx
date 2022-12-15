import React, { ReactElement } from 'react';

import photoIcon from '../../../assets/img/photo/photo-icon.svg';
import Button from '../../../components/Button/Button';
import PostCard from '../../../components/Cards/PostCard/PostCard';
import DefaultAvatar from '../../../components/DefaultAvatar/DefaultAvatar';
import pS from '../../Pages.module.scss';

import s from './Blog.module.scss';

const Blog = (): ReactElement => {
  return (
    <>
      <h3 className={pS.contentTitle}>Blogs</h3>
      <div className={s.blogWrapper}>
        <div className={s.blog}>
          <div className={s.blogHeader}>
            <div className={s.blogHeaderTitle}>Back to blogs</div>
          </div>

          <div className={s.blogBackground}>
            <img src={photoIcon} alt="icon" />
          </div>

          <div className={s.blogInfo}>
            <div className={s.blogImage}>
              <DefaultAvatar
                circleStyle={s.imageCircle}
                iconWidth="33px"
                iconHeight="27px"
              />
            </div>

            <div className={s.blogGeneralDescription}>
              <div className={s.blogTitle}>The best blog in our village</div>

              <div>
                <div className={s.blogDate}>Blog creation date: 12.12.2022</div>
                <div className={s.blogWebsite}>Website: https://www.youtube.com/</div>
              </div>

              <div className={s.blogDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum
                dolorddddddddddddddddddddddddddddddddddd sit amet, consectetur adipiscing
                elit Lorfem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum
              </div>
            </div>
          </div>

          <div className={s.blogFooter}>Show more</div>
        </div>

        <div className={s.postList}>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
        <div className={pS.contentFooter}>
          <Button>Show more</Button>
        </div>
      </div>
    </>
  );
};

export default Blog;
