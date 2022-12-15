import React, { ReactElement, useEffect } from 'react';

import Button from '../../../components/Button/Button';
import BlogCard from '../../../components/Cards/BlogCard/BlogCard';
import SearchInput from '../../../components/SearchInput/SearchInput';
import Select from '../../../components/Select/Select';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import pS from '../../Pages.module.scss';
import { getBlogs } from '../2-bll/thunks/thunks';

import s from './Blogs.module.scss';

const Blogs = (): ReactElement => {
  const dispatch = useAppDispatch();

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
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <div className={pS.contentFooter}>
        <Button>Show more</Button>
      </div>
    </>
  );
};

export default Blogs;
