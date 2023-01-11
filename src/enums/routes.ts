export enum LoadStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export enum RouteNames {
  DEFAULT = '/',
  BLOGS = '/blogs',
  BLOG = '/blog/:id',
  POSTS = '/posts',
  POST = '/post/:id',
  LOGIN = '/login',
  REGISTRATION = '/registration',
  REGISTRATION_CONFIRM = '/registration/confirm',
}
