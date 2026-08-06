import React from 'react';
import { BLOG_POSTS } from '../data/websiteData';
import { Clock, ArrowRight, BookOpen } from 'lucide-react';

export default function BlogSection({ onSelectBlog }) {
  return (
    <section id="blog" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-widest">
            Vector Knowledge Base
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Latest Articles & Prevention Guides
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Stay informed with expert advice on Dengue prevention, monsoon pest safety, and eco-friendly vector eradication techniques in Hyderabad.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="hover-lift glass-card rounded-3xl overflow-hidden border border-slate-200/90 bg-white flex flex-col justify-between group shadow-sm hover:shadow-xl"
            >
              <div>
                {/* Thumbnail Image */}
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-emerald-700 text-white text-xs font-bold rounded-full shadow-md">
                    {post.category}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 font-normal">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Read More Trigger */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectBlog(post)}
                  className="w-full py-3 rounded-xl border border-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 hover:border-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 transition-all cursor-pointer"
                >
                  <BookOpen className="w-4 h-4 text-emerald-600" />
                  <span>Read Full Article</span>
                </button>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
