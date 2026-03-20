import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog';
import SectionLabel from '@/components/SectionLabel';
import GoldDivider from '@/components/GoldDivider';

export const metadata: Metadata = {
  title: 'From the Gutter-Vine — Exterior Cleaning Blog',
  description:
    'Expert tips, guides, and insights on gutter cleaning, roof washing, soft washing, window cleaning, and home exterior maintenance from Top Down Gutter & Windows in Chico, CA.',
  alternates: { canonical: 'https://tdgutterandwindows.com/blog' },
  openGraph: { url: 'https://tdgutterandwindows.com/blog', title: 'From the Gutter-Vine — Exterior Cleaning Blog' },
};

export default function BlogPage() {
  return (
    <div className="bg-navy-900 min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <SectionLabel className="mb-3">Expert Insights</SectionLabel>
          <h1 className="font-display font-bold italic text-white text-5xl md:text-6xl mb-4">
            From the Gutter-Vine
          </h1>
          <GoldDivider className="mx-auto mb-4" />
          <p className="font-body text-slate max-w-xl mx-auto">
            Tips, guides, and insights from Northern California&apos;s exterior cleaning experts.
          </p>
        </div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-navy-800 border border-navy-700 rounded-xl overflow-hidden hover:border-gold/50 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Gradient image placeholder */}
              <div
                className="h-44 flex-shrink-0"
                style={{
                  background:
                    'linear-gradient(135deg, #122040 0%, #1A3560 50%, #0B1628 100%)',
                }}
                aria-hidden="true"
              >
                <div className="w-full h-full flex items-center justify-center opacity-20">
                  <svg className="w-16 h-16 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-body text-slate-dark text-xs">{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-dark" aria-hidden="true" />
                  <span className="font-body text-slate-dark text-xs">{post.readTime}</span>
                </div>
                <h2 className="font-display font-bold text-white text-xl mb-3 leading-snug">
                  {post.title}
                </h2>
                <p className="font-body text-slate text-sm leading-relaxed mb-5 flex-1 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-gold text-sm font-body font-medium hover:underline transition-all mt-auto"
                >
                  Read More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
