import type { MarkdownInstance } from "astro";

import type { FrontMatter } from "./types/front-matter";
import { BlogCard } from "./blog-card";

type IRecentPostsProps = {
  postList: MarkdownInstance<FrontMatter>[];
};

const BlogGallery = (props: IRecentPostsProps) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
    {props.postList.map((elt) => (
      <BlogCard key={elt.url} instance={elt} />
    ))}
  </div>
);

export { BlogGallery };
