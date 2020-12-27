import useSWR from "swr";
import { axios } from "../lib/axiosInstance";
import { MCMSPosts, Post } from "../types/API/post";

export const useGetPosts = () => {
  return useSWR(`/posts`, (url) => {
    return axios.get<MCMSPosts>(url).then((res) => res.data);
  });
};

export const useGetPost = (id: string) => {
  return useSWR(`/posts/${id}`, (url) => {
    return axios.get<Post>(url).then((res) => res.data);
  });
};

export const useGetPostByTag = (tagId: string) => {
  return useSWR(`/posts?filters=tags[contains]${tagId}`, (url) => {
    return axios.get<MCMSPosts>(url).then((res) => res.data);
  });
};
