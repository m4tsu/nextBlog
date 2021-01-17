import React from "react";
import Link, { LinkProps } from "next/link";
import { ReactElement, ReactNode } from "react";
import qs from "query-string";

// ----------------

// 参考 https://zenn.dev/panda_program/articles/typescript-nextjs-routing

export type PathKey = keyof typeof Paths;
export type Path = typeof Paths[PathKey];

type WithoutSlash<T> = T extends `/${infer U}` ? U : never;
type Resource<T> = T extends `${infer U}/${infer S}` ? U | Resource<S> : T;
type DynamicRoute<T> = T extends `[${infer U}]` ? U : never;

type Params<T> = DynamicRoute<Resource<WithoutSlash<T>>>;
type ParamKeys<T extends Path> = Params<T>;

type PathParams<T extends Path> = {
  path: T;
  params?: { [K in ParamKeys<T>]: string | number };
};
export type Args<T extends Path> = ParamKeys<T> extends never
  ? PathParams<T>
  : Required<PathParams<T>>;

export const TypedLink: <T extends Path>(
  props: Args<T> & {
    children?: ReactNode;
    className?: string;
    query?: { [key: string]: string | number | string[] };
    hash?: string;
  } & Omit<LinkProps, "href">
) => ReactElement = ({ children, className, params, ...rest }) => {
  let path: string;
  if (!params) {
    path = rest.path;
  } else {
    path = rest.path
      .split("/")
      .map((str) => {
        const match = str.match(/\[(.*?)\]/);
        if (match) {
          const key = match[0];
          const trimed = key.substring(1, key.length - 1) as ParamKeys<
            typeof rest.path
          >;
          return params[trimed];
        }
        return str;
      })
      .join("/");
  }

  const query = rest.query ? `?${qs.stringify(rest.query)}` : "";
  const hash = rest.hash ? `#${rest.hash}` : "";
  const href = path + query + hash;

  return (
    <Link href={href} {...rest}>
      <a className={className}>{children}</a>
    </Link>
  );
};

// ----------------

export const Paths = {
  posts: "/",
  post: "/[id]",
  about: "/about",
  tags: "/tags",
  tag: "/tags/[name]",
} as const;
