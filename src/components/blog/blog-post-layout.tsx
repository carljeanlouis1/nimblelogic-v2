import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import type { BlogPost } from "@/lib/blog-data";

function formatDate(dateString: string): string {
  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogPostLayout({ post }: { post: BlogPost }) {
  const bookingUrl =
    "https://cal.com/carl-jean-louis-ttpk27/clawsetup-discovery";

  return (
    <main className="min-h-screen bg-[#0A0F1C] pt-32 pb-20">
      <article className="mx-auto max-w-3xl px-5 md:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-[#9CA3AF] hover:text-[#00D4AA] transition-colors duration-200 mb-8"
        >
          <ArrowLeft className="size-4" />
          Back to Blog
        </Link>

        {/* Banner Image */}
        <img
          src={post.image}
          alt={post.imageAlt}
          className="w-full aspect-video object-cover rounded-2xl mb-8"
        />

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#F9FAFB] leading-tight mb-4">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-[#6B7280] mb-10">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="size-4" />
            {formatDate(post.datePublished)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-4" />
            {post.readTime}
          </span>
        </div>

        {/* Content */}
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA */}
        <div className="mt-16 text-center border-t border-white/5 pt-12">
          <p className="text-lg text-[#9CA3AF] mb-6">
            Ready to stop missing calls and start capturing every lead?
          </p>
          <p className="text-lg text-[#9CA3AF] mb-4">
            Try our AI live:{" "}
            <a
              href="tel:8566663692"
              className="text-[#00D4AA] font-semibold hover:underline"
            >
              (856) 666-3692
            </a>
          </p>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient inline-block px-8 py-3 rounded-lg text-base font-semibold"
          >
            Book a Discovery Call
          </a>
          <div className="mt-8 pt-8 border-t border-white/5">
            <p className="text-sm text-[#6B7280] italic">
              Written by NimbleLogic AI — we help small businesses capture every
              call with custom AI phone agents. Based in NYC.
            </p>
          </div>
        </div>
      </article>

      {/* JSON-LD: BlogPosting */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.metaDescription,
            image: `https://nimblelogicai.com${post.image}`,
            datePublished: post.datePublished,
            dateModified: post.datePublished,
            author: {
              "@type": "Organization",
              name: "NimbleLogic AI",
              url: "https://nimblelogicai.com",
            },
            publisher: {
              "@type": "Organization",
              name: "NimbleLogic AI",
              url: "https://nimblelogicai.com",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://nimblelogicai.com/blog/${post.slug}`,
            },
          }),
        }}
      />

      {/* JSON-LD: FAQPage */}
      {post.faqSchema.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: post.faqSchema.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      )}
    </main>
  );
}
