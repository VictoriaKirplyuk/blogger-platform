import { instance } from '../../../app/3-dal/instance';

import { PostsResponse } from './types/types';

const defaultPage: number = 1;
const defaultSize: number = 8;

export const postsAPI = {
  getPosts: (pageNumber: number = defaultPage, pageSize: number = defaultSize) => {
    return instance
      .get<PostsResponse>(`posts?pageNumber=${pageNumber}&pageSize=${pageSize}`)
      .then(response => response.data);
  },
};
