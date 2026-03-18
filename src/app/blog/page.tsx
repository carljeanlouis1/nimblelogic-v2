import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: `Blog | ${SITE.name}`,
  description:
    "Insights on AI automation for small businesses. Learn how AI phone agents, receptionists, and automation tools help contractors and service businesses grow.",
  openGraph: {
    title: `Blog | ${SITE.name}`,
    description:
      "Insights on AI automation for small businesses. Learn how AI phone agents, receptionists, and automation tools help contractors and service businesses grow.",
    url: `${SITE.url}/blog`,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0A0F1C] pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-5 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-display-lg md:text-display-xl gradient-text mb-4">
            Blog
          </h1>
          <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
            Insights on AI automation for small businesses
          </p>
        </div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-[#111827]/60 backdrop-blur border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:border-white/10 hover:-translate-y-0.5"
            >
              <div className="flex flex-col h-full">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  className="w-full aspect-video object-cover rounded-xl mb-4"
                />
                <span className="text-sm text-[#6B7280] mb-3">
                  {post.readTime}
                </span>
                <h2 className="text-lg font-semibold text-[#F9FAFB] mb-3 group-hover:text-[#00D4AA] transition-colors duration-200">
                  {post.title}
                </h2>
                <p className="text-sm text-[#9CA3AF] leading-relaxed mb-4 flex-1">
                  {post.excerpt}
                </p>
                <span className="text-sm font-medium text-[#00D4AA] group-hover:underline">
                  Read more &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
