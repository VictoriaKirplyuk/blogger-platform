import React, { ReactElement } from 'react';

import Button from '../../../components/Button/Button';
import BlogCard from '../../../components/Cards/BlogCard/BlogCard';

import s from './Blogs.module.scss';

const Blogs = (): ReactElement => {
  return (
    <div className={s.blogs}>
      <div className={s.blogList}>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <div className={s.blogsFooter}>
        <Button>Show more</Button>
      </div>
    </div>
  );
};

export default Blogs;
