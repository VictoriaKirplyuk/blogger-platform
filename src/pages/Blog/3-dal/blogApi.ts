import { instance } from '../../../app/3-dal/instance';

import { BlogResponse, UpdateBlogResponse } from './types/types';

export const blogApi = {
  getBlog: (id: string) => {
    return instance.get<BlogResponse>(`blogs/${id}`).then(response => {
      return response.data;
    });
  },
  createBlog: (name: string, description: string, websiteUrl: string) => {
    return instance
      .post<BlogResponse>('blogs', { name, description, websiteUrl })
      .then(response => {
        return response.data;
      });
  },
  updateBlog: (id: string, name: string, description: string, websiteUrl: string) => {
    return instance
      .put<UpdateBlogResponse>(`blogs/${id}`, { name, description, websiteUrl })
      .then(response => {
        return response.data;
      });
  },
  deleteBlog: (id: string) => {
    return instance.delete<string>(`blogs/${id}`).then(response => {
      return response.data;
    });
  },
};
