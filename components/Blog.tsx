
import React from 'react';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import { blogPosts, BlogPost } from '../data/blogData';

interface BlogProps {
    onReadMore: (postId: string) => void;
}

export const Blog: React.FC<BlogProps> = ({ onReadMore }) => {
    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'CONSTRUCTION':
                return 'bg-blue-500';
            case 'INDUSTRIAL':
                return 'bg-green-500';
            case 'TRANSPORT':
                return 'bg-purple-500';
            default:
                return 'bg-orange-500';
        }
    };

    return (
        <div className="py-16 md:py-24 bg-white relative">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
                <div className="text-center mb-12 md:mb-16">
                    <span className="mono text-orange-600 font-bold uppercase tracking-widest text-xs mb-3 md:mb-4 block">
                        Our Insights
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900">
                        INDUSTRY <span className="text-orange-500">KNOWLEDGE</span>
                    </h2>
                    <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-4">
                        Expert insights on shrink wrap solutions for construction, industrial, and transport applications in Vancouver and across British Columbia.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {blogPosts.map((post) => (
                        <article
                            key={post.id}
                            className="group bg-white border-2 border-slate-100 hover:border-orange-500 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col"
                        >
                            {/* Category Banner */}
                            <div className={`${getCategoryColor(post.categoryTag)} px-4 py-2`}>
                                <span className="mono text-[10px] font-bold text-white uppercase tracking-widest">
                                    {post.categoryTag}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 mb-4 text-slate-400 text-xs">
                                    <div className="flex items-center gap-1">
                                        <Clock size={12} />
                                        <span>{post.readingTime}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Tag size={12} />
                                        <span>{post.category}</span>
                                    </div>
                                </div>

                                <h3 className="text-lg md:text-xl font-black text-slate-900 mb-3 leading-tight group-hover:text-orange-600 transition-colors">
                                    {post.title}
                                </h3>

                                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                                    {post.excerpt}
                                </p>

                                <button
                                    onClick={() => onReadMore(post.id)}
                                    className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-bold text-sm transition-colors group/btn"
                                >
                                    Read Full Article
                                    <ArrowRight
                                        size={16}
                                        className="group-hover/btn:translate-x-1 transition-transform"
                                    />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                {/* SEO Keywords Footer */}
                <div className="mt-12 md:mt-16 text-center">
                    <p className="text-slate-400 text-sm">
                        Serving Vancouver, St. Albert, Sherwood Park, Calgary, and all of British Columbia with professional shrink wrap solutions.
                    </p>
                </div>
            </div>
        </div>
    );
};
