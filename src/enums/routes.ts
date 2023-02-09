export enum LoadStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export enum RouteNames {
  DEFAULT = '/',
  BLOGS = '/blogs',
  BLOG = '/blogs/:id',
  POSTS = '/posts',
  POST = '/posts/:id',
  LOGIN = '/login',
  REGISTRATION = '/registration',
  REGISTRATION_CONFIRM = '/registration/confirm',
}
