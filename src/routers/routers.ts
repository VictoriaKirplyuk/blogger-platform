import { ComponentType } from 'react';

import { RouteNames } from '../enums/routes';
import Blog from '../pages/Blog/1-ui/Blog';
import Blogs from '../pages/Blogs/1-ui/Blogs';
import Posts from '../pages/Posts/1-ui/Posts';

export interface IRouter {
  path: RouteNames;
  component: ComponentType;
}

export const publicRouter: IRouter[] = [
  { path: RouteNames.DEFAULT, component: Blogs },
  { path: RouteNames.BLOGS, component: Blogs },
  { path: RouteNames.POSTS, component: Posts },
  { path: RouteNames.BLOG, component: Blog },
];
