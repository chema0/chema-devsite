import type {
  FrontMatter,
  MarkdownInstance,
} from '@/components';

export const sortByDate = (posts: MarkdownInstance<FrontMatter>[]) => {
  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.pubDate).valueOf() -
      new Date(a.frontmatter.pubDate).valueOf()
  );
};
