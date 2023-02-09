import React, { ReactElement } from 'react';

import { useNavigate } from 'react-router-dom';

import photoIcon from '../../../assets/img/photo/photo-icon.svg';
import DefaultAvatar from '../../../components/DefaultAvatar/DefaultAvatar';
import pS from '../../Pages.module.scss';

import s from './Post.module.scss';

const Post = (): ReactElement => {
  const navigate = useNavigate();

  const onBackPostsBtnClick = (): void => navigate('/posts');

  return (
    <>
      <h3 className={pS.contentTitle}>Posts</h3>
      <div className={s.post}>
        <div className={s.postHeader}>
          <button
            type="button"
            className={s.postHeaderTitle}
            onClick={onBackPostsBtnClick}
          >
            Back to posts
          </button>
        </div>
        <div className={s.postInfo}>
          <div className={s.blogInfo}>
            <div className={s.blogImage}>
              <DefaultAvatar
                circleStyle={s.imageCircle}
                iconWidth="15px"
                iconHeight="13px"
              />
            </div>
            <div className={s.blogTitle}>Back-end blog</div>
          </div>

          <div className={s.postDescription}>
            <div className={s.postTitleInfo}>
              <div className={s.postTitle}>First day at the office</div>
              <div className={s.postAccessTitle}>(for public posts)</div>
            </div>
            <div className={s.postDate}>12/12/2022 at 15:46:58</div>
          </div>

          <div className={s.postBackground}>
            <img src={photoIcon} alt="icon" />
          </div>

          <div className={s.postMessage}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit, magna felis vestibulum
            metus aptent velit, tempor posuere natoque habitasse phasellus dignissim. Nec
            libero purus etiam venenatis velit cras nascetur euismod ornare sodales, ex ut
            augue sed vestibulum molestie dis quisque laoreet, tempor ullamcorper mus odio
            nostra est dolor magna justo. Lorem ipsum dolor sit amet consectetur
            adipiscing elit, magna felis vestibulum metus aptent velit, tempor posuere
            natoque habitasse phasellus dignissim. Nec libero purus etiam venenatis velit
            cras nascetur euismod ornare sodales, ex ut augue sed vestibulum molestie dis
            quisque laoreet, tempor ullamcorper mus odio nostra est dolor magna justo.
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
