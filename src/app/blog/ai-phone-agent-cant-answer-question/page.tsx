import type { Metadata } from "next";
import { getPostBySlug } from "@/lib/blog-data";
import { BlogPostLayout } from "@/components/blog/blog-post-layout";
import { SITE } from "@/lib/constants";
import { notFound } from "next/navigation";

const post = getPostBySlug("ai-phone-agent-cant-answer-question");

export const metadata: Metadata = post
  ? {
      title: `${post.title} | ${SITE.name}`,
      description: post.metaDescription,
      openGraph: {
        title: post.title,
        description: post.metaDescription,
        url: `${SITE.url}/blog/${post.slug}`,
        siteName: SITE.name,
        locale: "en_US",
        type: "article",
        publishedTime: post.datePublished,
        images: [{ url: `https://nimblelogicai.com${post.image}` }],
      },
    }
  : {};

export default function Page() {
  if (!post) return notFound();
  return <BlogPostLayout post={post} />;
}
