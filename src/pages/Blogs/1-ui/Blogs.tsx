import React, { ReactElement, useEffect } from 'react';

import Button from '../../../components/Button/Button';
import BlogCard from '../../../components/Cards/BlogCard/BlogCard';
import SearchInput from '../../../components/SearchInput/SearchInput';
import Select from '../../../components/Select/Select';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import pS from '../../Pages.module.scss';
import { getBlogs } from '../2-bll/thunks/thunks';

import s from './Blogs.module.scss';

const Blogs = (): ReactElement => {
  const dispatch = useAppDispatch();

  const blogs = useAppSelector(state => state.blogs.blogList.items);

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  return (
    <>
      <h3 className={pS.contentTitle}>Blogs</h3>
      <div className={s.searchBlock}>
        <SearchInput />
        <Select />
      </div>
      <div className={pS.contentList}>
        {blogs.length ? <BlogCard /> : <div className={pS.noContent}>No blogs</div>}
      </div>
      <div className={pS.contentFooter}>
        <Button>Show more</Button>
      </div>
    </>
  );
};

export default Blogs;
