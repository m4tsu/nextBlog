import { axios } from "@/lib/axiosInstance";
import { MCMSPosts, Post } from "@/types/API/post";

export const fetchAllPosts = () => {
  return axios.get<MCMSPosts>(`/posts`).then((res) => res.data);
};

export const fetchPost = (id: number | string) => {
  return axios.get<Post>(`/posts/${id}`).then((res) => res.data);
};

export const fetchPostByTag = (tagId: number | string) => {
  console.log(`/posts?filters=tags[contains]${tagId}`);
  return axios
    .get<MCMSPosts>(`/posts?filters=tags[contains]${tagId}`)
    .then((res) => res.data);
};
