import { instance } from '../../../app/3-dal/instance';

import { BlogsResponse } from './types/types';

const defaultPage: number = 1;
const defaultSize: number = 4;

export const blogsAPI = {
  getBlogs: (pageNumber: number = defaultPage, pageSize: number = defaultSize) => {
    return instance
      .get<BlogsResponse>(`blogs?pageNumber=${pageNumber}&pageSize=${pageSize}`)
      .then(response => response.data);
  },
};
