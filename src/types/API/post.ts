export type MCMS<Contents> = {
  limit: number;
  offset: number;
  totalCount: number;
  contents: Contents;
};

export type Tag = {
  id: string;
  name: string;
  image?: {
    url: string; // Image URL
  };
};

export type Post = {
  id: string;
  title: string;
  content: string;
  mainImage?: {
    url: string; // Image URL
  };
  tags: Tag[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

export type MCMSTags = MCMS<Tag[]>;
export type MCMSPosts = MCMS<Post[]>;
