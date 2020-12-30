import { axios } from "@/lib/axiosInstance";
import { MCMSTags } from "@/types/API/post";

export const fetchAllTags = () => {
  return axios.get<MCMSTags>(`/tags`).then((res) => res.data);
};

export const fetchTagByName = (tagName: string) => {
  console.log(`/tags?filters=name[equals]${tagName}`);
  return axios
    .get<MCMSTags>(encodeURI(`/tags?filters=name[equals]${tagName}`))
    .then((res) => res.data);
};
