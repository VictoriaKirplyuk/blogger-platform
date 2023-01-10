import React, { ReactElement, useEffect } from 'react';

import Button from '../../../components/Button/Button';
import PostCard from '../../../components/Cards/PostCard/PostCard';
import Select from '../../../components/Select/Select';
import { useAppDispatch } from '../../../hooks/redux/useAppDispatch';
import { useAppSelector } from '../../../hooks/redux/useAppSelector';
import pS from '../../Pages.module.scss';
import { getPosts } from '../2-bll/thunks/thunks';

import s from './Posts.module.scss';

const Posts = (): ReactElement => {
  const dispatch = useAppDispatch();

  const posts = useAppSelector(state => state.posts.postList.items);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <h3 className={pS.contentTitle}>Posts</h3>
      <div className={s.searchBlock}>
        <Select />
      </div>
      <div className={`${pS.contentList} ${s.postList}`}>
        {posts.length ? <PostCard /> : <div className={pS.noContent}>No posts</div>}
      </div>
      <div className={pS.contentFooter}>
        <Button>Show more</Button>
      </div>
    </>
  );
};

export default Posts;
