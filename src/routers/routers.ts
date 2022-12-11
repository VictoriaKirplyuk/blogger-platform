import { ComponentType } from 'react';

import { RouteNames } from '../enums/routes';
import Blogs from '../pages/Blogs/1-ui/Blogs';

export interface IRouter {
  path: RouteNames;
  component: ComponentType;
}

export const publicRouter: IRouter[] = [
  { path: RouteNames.DEFAULT, component: Blogs },
  { path: RouteNames.BLOGS, component: Blogs },
];
