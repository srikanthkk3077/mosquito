import React, { useState } from 'react';
import BlogSection from '../components/BlogSection';
import LightboxModal from '../components/LightboxModal';
import TrustBadges from '../components/TrustBadges';

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="pt-28 pb-20 space-y-12">
      <section className="bg-gradient-to-b from-emerald-900 via-emerald-800 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-4 relative z-10">
          <span className="px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-widest">
            Vector Knowledge Base
          </span>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Dengue & Mosquito Prevention Blog
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal">
            Stay informed with expert advice on Dengue prevention, monsoon pest safety, and eco-friendly vector eradication techniques in Hyderabad.
          </p>
        </div>
      </section>

      <TrustBadges />

      <BlogSection onSelectBlog={(post) => setSelectedPost(post)} />

      {selectedPost && (
        <LightboxModal
          item={selectedPost}
          type="blog"
          onClose={() => setSelectedPost(null)}
        />
      )}
    </div>
  );
}
