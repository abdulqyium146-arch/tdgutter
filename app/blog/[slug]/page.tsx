import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts, getBlogPost } from '@/lib/blog';
import GoldDivider from '@/components/GoldDivider';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: 'Post Not Found', robots: { index: false } };
  const canonicalUrl = `https://tdgutterandwindows.com/blog/${slug}`;
  const titleWords = post.title.toLowerCase().split(/\s+/).slice(0, 6).join(' ');
  return {
    title: post.title,
    description: post.excerpt,
    keywords: [
      titleWords,
      'gutter cleaning northern california',
      'exterior cleaning chico ca',
      'home maintenance northern california',
      'top down gutter windows blog',
    ],
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: 'article',
      url: canonicalUrl,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.isoDate,
      authors: ['Top Down Gutter & Windows'],
      siteName: 'Top Down Gutter & Windows',
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: ['/opengraph-image'],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    const lines = content.trim().split('\n');
    const elements: React.ReactNode[] = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i].trim();

      if (!line) {
        i++;
        continue;
      }

      if (line.startsWith('## ')) {
        elements.push(
          <h2 key={i} className="font-display font-bold text-white text-3xl mt-10 mb-4">
            {line.replace('## ', '')}
          </h2>
        );
      } else if (line.startsWith('> ')) {
        elements.push(
          <blockquote
            key={i}
            className="border-l-4 border-gold pl-6 my-8 bg-navy-800 rounded-r-xl p-4"
          >
            <p className="font-display italic text-gold-light text-lg leading-relaxed">
              {line.replace('> ', '')}
            </p>
          </blockquote>
        );
      } else if (line.startsWith('**') && line.endsWith('**')) {
        elements.push(
          <p key={i} className="font-body font-semibold text-white text-base mb-3 mt-6">
            {line.replace(/\*\*/g, '')}
          </p>
        );
      } else if (line.startsWith('- ')) {
        // Collect list items
        const items: string[] = [];
        while (i < lines.length && lines[i].trim().startsWith('- ')) {
          items.push(lines[i].trim().replace('- ', ''));
          i++;
        }
        elements.push(
          <ul key={`ul-${i}`} className="space-y-2 my-4 ml-4">
            {items.map((item, idx) => (
              <li key={idx} className="font-body text-slate flex items-start gap-2">
                <span className="text-gold mt-1.5 flex-shrink-0">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="4" />
                  </svg>
                </span>
                <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }} />
              </li>
            ))}
          </ul>
        );
        continue;
      } else if (line.startsWith('| ')) {
        // Table
        const tableLines: string[] = [];
        while (i < lines.length && lines[i].trim().startsWith('|')) {
          if (!lines[i].includes('---')) tableLines.push(lines[i].trim());
          i++;
        }
        const headers = tableLines[0]?.split('|').filter(Boolean).map(h => h.trim()) ?? [];
        const rows = tableLines.slice(1).map(row => row.split('|').filter(Boolean).map(c => c.trim()));
        elements.push(
          <div key={`table-${i}`} className="overflow-x-auto my-6">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  {headers.map((h, idx) => (
                    <th key={idx} className="font-body font-semibold text-gold text-sm text-left p-3 border-b border-navy-700 bg-navy-800">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, ridx) => (
                  <tr key={ridx} className="border-b border-navy-700/50 hover:bg-navy-800/50">
                    {row.map((cell, cidx) => (
                      <td key={cidx} className="font-body text-slate text-sm p-3">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        continue;
      } else if (line.match(/^\d+\. /)) {
        // Ordered list
        const items: string[] = [];
        while (i < lines.length && lines[i].trim().match(/^\d+\. /)) {
          items.push(lines[i].trim().replace(/^\d+\. /, ''));
          i++;
        }
        elements.push(
          <ol key={`ol-${i}`} className="space-y-2 my-4 ml-4">
            {items.map((item, idx) => (
              <li key={idx} className="font-body text-slate flex items-start gap-3">
                <span className="font-label text-gold text-lg flex-shrink-0 leading-none mt-0.5">{idx + 1}</span>
                <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }} />
              </li>
            ))}
          </ol>
        );
        continue;
      } else {
        const html = line
          .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
          .replace(/\*(.*?)\*/g, '<em>$1</em>');
        elements.push(
          <p
            key={i}
            className="font-body text-slate leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      }

      i++;
    }

    return elements;
  };

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    url: `https://tdgutterandwindows.com/blog/${post.slug}`,
    datePublished: post.isoDate,
    dateModified: post.isoDate,
    image: 'https://tdgutterandwindows.com/opengraph-image',
    articleSection: 'Home Maintenance',
    isPartOf: { '@id': 'https://tdgutterandwindows.com/#website' },
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    license: 'https://creativecommons.org/licenses/by-nc/4.0/',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.article-excerpt'],
    },
    about: [
      { '@type': 'Service', name: 'Gutter Cleaning', provider: { '@type': 'LocalBusiness', name: 'Top Down Gutter & Windows' } },
      { '@type': 'Service', name: 'Roof Soft-Washing', provider: { '@type': 'LocalBusiness', name: 'Top Down Gutter & Windows' } },
      { '@type': 'Place', name: 'Northern California', containedInPlace: { '@type': 'State', name: 'California' } },
    ],
    author: {
      '@type': 'Organization',
      name: 'Top Down Gutter & Windows',
      url: 'https://tdgutterandwindows.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Top Down Gutter & Windows',
      url: 'https://tdgutterandwindows.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://tdgutterandwindows.com/opengraph-image',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://tdgutterandwindows.com/blog/${post.slug}`,
    },
  };

  const blogPostWebPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `https://tdgutterandwindows.com/blog/${post.slug}#webpage`,
    url: `https://tdgutterandwindows.com/blog/${post.slug}`,
    name: post.title,
    isPartOf: { '@id': 'https://tdgutterandwindows.com/#website' },
    about: { '@id': 'https://tdgutterandwindows.com/#organization' },
    datePublished: post.isoDate,
    dateModified: post.isoDate,
    inLanguage: 'en-US',
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: 'https://tdgutterandwindows.com/opengraph-image',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tdgutterandwindows.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://tdgutterandwindows.com/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://tdgutterandwindows.com/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostWebPageSchema) }} />
    <div className="bg-navy-900 min-h-screen pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-slate hover:text-gold transition-colors duration-200 font-body text-sm mb-8"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        {/* Article */}
        <article>
          {/* Meta */}
          <div className="flex items-center gap-3 mb-4">
            <span className="font-body text-slate text-sm">{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-slate-dark" aria-hidden="true" />
            <span className="font-body text-slate text-sm">{post.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="font-display font-bold text-white text-4xl md:text-5xl leading-tight mb-4">
            {post.title}
          </h1>
          <GoldDivider className="mb-8" />

          {/* Excerpt lead */}
          <p className="article-excerpt font-body text-slate-300 text-lg leading-relaxed mb-8 border-l-4 border-gold pl-5 italic">
            {post.excerpt}
          </p>

          {/* Content */}
          <div className="prose-custom">
            {renderContent(post.content)}
          </div>
        </article>

        {/* CTA */}
        <div className="mt-14 p-8 bg-navy-800 border border-navy-700 rounded-2xl text-center">
          <h3 className="font-display font-bold text-white text-2xl mb-3">
            Ready to Schedule?
          </h3>
          <p className="font-body text-slate mb-6">
            Contact Top Down Gutter &amp; Windows today for a free estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/service-request"
              className="bg-gold text-navy-900 font-body font-semibold px-7 py-3 rounded-full hover:bg-gold-light transition-colors duration-200"
            >
              Request a Service
            </Link>
            <a
              href="tel:6143505978"
              className="border-2 border-gold text-gold font-body font-semibold px-7 py-3 rounded-full hover:bg-gold/10 transition-colors duration-200"
            >
              Call (614) 350-5978
            </a>
          </div>
        </div>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-14">
            <h3 className="font-display font-bold text-white text-2xl mb-6">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group bg-navy-800 border border-navy-700 rounded-xl p-5 hover:border-gold/50 transition-all duration-300"
                >
                  <p className="font-body text-slate-dark text-xs mb-2">{related.date}</p>
                  <h4 className="font-display font-bold text-white text-lg leading-snug group-hover:text-gold transition-colors duration-200">
                    {related.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
}
