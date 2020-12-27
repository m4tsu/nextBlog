import useSWR from "swr";
import { axios } from "../lib/axiosInstance";
import { MCMSPosts, MCMSTags, Tag } from "../types/API/post";

export const useGetTags = () => {
  return useSWR(`/tags`, (url) => {
    return axios.get<MCMSTags>(url).then((res) => res.data);
  });
};

export const useGetTagByName = (tagName: string) => {
  return useSWR(`/tags?filters=name[equals]${tagName}`, (url) => {
    return axios.get<MCMSTags>(url).then((res) => res.data);
  });
};

export const useGetPostsByTagName = (tagName: string) => {
  return useSWR(`/tags?filters=name[equals]${tagName}`, (url) => {
    return axios
      .get<MCMSTags>(url)
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        if (data.contents.length === 0) {
          throw new Error("タグが見つかりません。");
        } else {
          const tag = data.contents[0];
          return axios
            .get<MCMSPosts>(`/posts?filters=tags[contains]${tag.id}`)
            .then((res) => res.data);
        }
      });
  });
};
