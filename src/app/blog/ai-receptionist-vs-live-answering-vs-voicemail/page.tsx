import type { Metadata } from "next";
import { getPostBySlug } from "@/lib/blog-data";
import { BlogPostLayout } from "@/components/blog/blog-post-layout";
import { SITE } from "@/lib/constants";
import { notFound } from "next/navigation";

const post = getPostBySlug("ai-receptionist-vs-live-answering-vs-voicemail");

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
      },
    }
  : {};

export default function Page() {
  if (!post) return notFound();
  return <BlogPostLayout post={post} />;
}
