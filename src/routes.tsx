import Link, { LinkProps } from "next/link";
import { FC, ReactElement, ReactNode } from "react";

// ----------------

// 参考 https://twitter.com/Panda_Program/status/1339248778604232705

type A<T> = T extends `/${infer U}` ? U : never;
type B<T> = T extends `${infer U}/${infer S}` ? U | B<S> : T;
type C<T> = T extends `[${infer U}]` ? U : never;

// ----------------

type Params<T> = C<B<A<T>>>;

type PathKey = keyof typeof Paths;
type Path = typeof Paths[PathKey];
type ParamKeys<T extends Path> = Params<T>;
type PathParams<T extends Path> = {
  path: T;
  params?: { [K in ParamKeys<T>]: string | number };
};
type Args<T extends Path> = ParamKeys<T> extends never
  ? PathParams<T>
  : Required<PathParams<T>>;

// ----------------

// export function getPath<T extends Path>({path, params}: Args<T> ) {
//   if (!params) {
//     return path
//   }

//   return path.split('/').map(str => {
//     const match = str.match(/\[(.*?)\]/)
//     if (match) {
//       const key = match[0]
//       const trimed = key.substring(1, key.length - 1) as ParamKeys<typeof path>
//       return params[trimed]
//     }
//     return str
//   }).join('/')
// }

// ----------------

export const TypedLink: <T extends Path>(
  props: Args<T> & { children?: ReactNode; className?: string } & Omit<
      LinkProps,
      "href" | "as"
    >
) => ReactElement = ({ children, className, path, params, ...rest }) => {
  let as: string;
  const href = path;
  if (!params) {
    as = path;
  } else {
    as = path
      .split("/")
      .map((str) => {
        const match = str.match(/\[(.*?)\]/);
        if (match) {
          const key = match[0];
          const trimed = key.substring(1, key.length - 1) as ParamKeys<
            typeof path
          >;
          return params[trimed];
        }
        return str;
      })
      .join("/");
  }

  return (
    <Link href={href} as={as} {...rest}>
      <a className={className}>{children}</a>
    </Link>
  );
};

// ----------------

export const Paths = {
  posts: "/",
  post: "/[id]",
  about: "/about",
  // posts: "/posts",
  // post: "/posts/[id]",
  tags: "/tags",
  tag: "/tags/[name]",
} as const;
