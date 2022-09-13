import { GradientText } from "@/components/gradient-text";
import type { MarkdownInstance } from "astro";
import type { FrontMatter } from "@/components";
import { BlogGallery, Section } from "@/components";

type IRecentPostsProps = {
  postList: MarkdownInstance<FrontMatter>[];
};

const RecentPosts = (props: IRecentPostsProps) => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>
          Recent <GradientText>Posts</GradientText>
        </div>

        <div className="text-sm">
          <a href="/posts">View all Posts →</a>
        </div>
      </div>
    }
  >
    <BlogGallery postList={props.postList} />
  </Section>
);

export { RecentPosts };
