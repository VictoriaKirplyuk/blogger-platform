import React, { ReactElement } from 'react';

import Button from '../../../components/Button/Button';
import PostCard from '../../../components/Cards/PostCard/PostCard';
import Select from '../../../components/Select/Select';
import pS from '../../Pages.module.scss';

import s from './Posts.module.scss';

const Posts = (): ReactElement => {
  return (
    <>
      <h3 className={pS.contentTitle}>Posts</h3>
      <div className={s.searchBlock}>
        <Select />
      </div>
      <div className={`${pS.contentList} ${s.postList}`}>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
      <div className={pS.contentFooter}>
        <Button>Show more</Button>
      </div>
    </>
  );
};

export default Posts;
