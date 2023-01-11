import { ComponentType } from 'react';

import { RouteNames } from '../enums/routes';
import Login from '../pages/Auth/Login/1-ui/Login';
import Registration from '../pages/Auth/Registration/1-ui/Registration';
import Blog from '../pages/Blog/1-ui/Blog';
import Blogs from '../pages/Blogs/1-ui/Blogs';
import Post from '../pages/Post/1-ui/Post';
import Posts from '../pages/Posts/1-ui/Posts';

export interface IRouter {
  path: RouteNames;
  component: ComponentType;
}

export const publicRouter: IRouter[] = [
  { path: RouteNames.DEFAULT, component: Blogs },
  { path: RouteNames.BLOGS, component: Blogs },
  { path: RouteNames.BLOG, component: Blog },
  { path: RouteNames.POSTS, component: Posts },
  { path: RouteNames.POST, component: Post },
  { path: RouteNames.LOGIN, component: Login },
  { path: RouteNames.REGISTRATION, component: Registration },
];
