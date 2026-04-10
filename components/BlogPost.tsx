
import React, { useEffect } from 'react';
import { ArrowLeft, Clock, Tag, Phone, ArrowRight } from 'lucide-react';
import { getBlogPostById, blogPosts, BlogPost as BlogPostType, BlogSection } from '../data/blogData';

interface BlogPostProps {
    postId: string;
    onBack: () => void;
    onReadMore: (postId: string) => void;
}

export const BlogPost: React.FC<BlogPostProps> = ({ postId, onBack, onReadMore }) => {
    const post = getBlogPostById(postId);

    useEffect(() => {
        // Scroll to top when viewing a blog post
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [postId]);

    if (!post) {
        return (
            <div className="py-24 text-center">
                <h2 className="text-2xl font-bold text-slate-900">Post not found</h2>
                <button onClick={onBack} className="mt-4 text-orange-500 hover:text-orange-600">
                    Go Back
                </button>
            </div>
        );
    }

    const relatedPosts = post.relatedPosts
        .map(id => blogPosts.find(p => p.id === id))
        .filter((p): p is BlogPostType => p !== undefined);

    const renderContent = (section: BlogSection, index: number) => {
        switch (section.type) {
            case 'heading':
                return (
                    <h2
                        key={index}
                        className="text-2xl md:text-3xl font-black text-slate-900 mt-8 mb-4"
                    >
                        {section.content as string}
                    </h2>
                );
            case 'subheading':
                return (
                    <h3
                        key={index}
                        className="text-xl md:text-2xl font-bold text-orange-600 mt-6 mb-3"
                    >
                        {section.content as string}
                    </h3>
                );
            case 'paragraph':
                return (
                    <p
                        key={index}
                        className="text-slate-700 text-base md:text-lg leading-relaxed mb-4"
                    >
                        {section.content as string}
                    </p>
                );
            case 'list':
                return (
                    <ul key={index} className="list-none space-y-3 my-6">
                        {(section.content as string[]).map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-700">
                                <span className="text-orange-500 font-bold mt-1">â€¢</span>
                                <span className="text-base md:text-lg leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
        <div className="relative bg-slate-900 pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/hero-building.jpg')] bg-cover bg-center opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-900"></div>
            <div className="relative max-w-[900px] mx-auto px-4 sm:px-6">
                    <button
                        onClick={onBack}
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 md:mb-8 transition-colors"
                    >
                        <ArrowLeft size={18} />
                        <span className="font-semibold">Back to Blog</span>
                    </button>

                    <div className="flex flex-wrap items-center gap-4 mb-4 text-slate-400 text-sm">
                        <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full uppercase">
                            {post.categoryTag}
                        </span>
                        <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>{post.readingTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Tag size={14} />
                            <span>{post.category}</span>
                        </div>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                        {post.title}
                    </h1>

                    <p className="text-slate-400 text-sm">
                        Target Audience: {post.targetAudience}
                    </p>
                </div>
            </div>

            {/* Article Content */}
            <div className="max-w-[900px] mx-auto px-4 sm:px-6 py-12 md:py-16">
                <article className="bg-white rounded-lg p-6 md:p-10 shadow-lg border border-slate-100">
                    {post.content.map((section, index) => renderContent(section, index))}
                </article>

                {/* CTA Section */}
                <div className="mt-10 md:mt-12 p-6 md:p-10 bg-orange-500 text-white rounded-lg">
                    <h3 className="text-2xl md:text-3xl font-black mb-4">
                        Ready to Protect Your Project?
                    </h3>
                    <p className="text-orange-100 text-base md:text-lg mb-6">
                        Contact Vancouver Shrink Wrap today for a free estimate. We serve Vancouver, St. Albert, Sherwood Park, Calgary, and all of British Columbia.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="#contact"
                            onClick={onBack}
                            className="inline-flex items-center justify-center px-6 py-3 bg-white text-orange-600 hover:bg-slate-900 hover:text-white font-bold transition-all gap-2 rounded-lg"
                        >
                            Get Free Quote
                            <ArrowRight size={18} />
                        </a>
                        <a
                            href="tel:7804793285"
                            className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold transition-all gap-2 rounded-lg"
                        >
                            <Phone size={18} />
                            780-479-3285
                        </a>
                    </div>
                </div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <div className="mt-12 md:mt-16">
                        <h3 className="text-2xl font-black text-slate-900 mb-6">
                            Related Articles
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {relatedPosts.map((relatedPost) => (
                                <button
                                    key={relatedPost.id}
                                    onClick={() => onReadMore(relatedPost.id)}
                                    className="text-left group bg-white border-2 border-slate-100 hover:border-orange-500 rounded-lg p-6 transition-all"
                                >
                                    <span className="mono text-[10px] font-bold text-orange-500 uppercase tracking-widest block mb-2">
                                        {relatedPost.categoryTag}
                                    </span>
                                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors leading-tight">
                                        {relatedPost.title}
                                    </h4>
                                    <span className="inline-flex items-center gap-1 mt-3 text-orange-500 text-sm font-semibold">
                                        Read More <ArrowRight size={14} />
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* SEO Keywords */}
                <div className="mt-12 pt-8 border-t border-slate-200">
                    <div className="flex flex-wrap gap-2">
                        {post.focusKeywords.map((keyword, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full"
                            >
                                {keyword}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
