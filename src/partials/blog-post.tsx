import type { FrontMatter } from '@/components';
import { PostContent, PostHeader, Section } from '@/components';
import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/app-config';

type IBlogPostProps = {
  frontmatter: FrontMatter;
  children: ReactNode;
};

const BlogPost = (props: IBlogPostProps) => (
  <Section>
    <PostHeader content={props.frontmatter} author={AppConfig.author} />

    <PostContent content={props.frontmatter}>{props.children}</PostContent>
  </Section>
);

export { BlogPost };
