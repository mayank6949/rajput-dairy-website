import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/blog';
import { BlogPost, PageRoute } from '../types';
import { Clock, BookOpen, ArrowRight, X, MessageCircle } from 'lucide-react';

interface BlogViewProps {
  onRouteChange: (route: PageRoute) => void;
}

export const BlogView: React.FC<BlogViewProps> = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const whatsappNumber = '919839000000';

  return (
    <div className="pt-24 pb-20 font-poppins bg-[#FAFAFA] space-y-16">
      
      {/* Hero Banner */}
      <section className="py-16 bg-neutral-900 text-white text-center space-y-4">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-semibold text-[#C9A227] uppercase tracking-widest block mb-2">
            Dairy Knowledge & Nutrition
          </span>
          <h1 className="font-cinzel font-extrabold text-4xl sm:text-5xl">
            Rajput Dairy Journal
          </h1>
          <p className="text-sm sm:text-base text-gray-300 font-light max-w-2xl mx-auto mt-2">
            Expert articles on authentic Desi Ghee, paneer crafting, curd probiotics, and home storage techniques.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-[20px] border border-[#ECECEC] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#F57C00] text-white text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-cinzel font-bold text-xl text-[#222222] group-hover:text-[#F57C00] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedPost(post)}
                  className="inline-flex items-center gap-2 text-[#F57C00] font-semibold text-xs sm:text-sm hover:underline"
                  id={`read-post-btn-${post.id}`}
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Full Article Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
          <div 
            className="bg-white rounded-[24px] max-w-3xl w-full my-8 max-h-[88vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative border border-[#ECECEC]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 text-gray-700 hover:text-black flex items-center justify-center transition-colors"
              aria-label="Close article"
              id="close-article-modal-btn"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6 text-gray-800 font-poppins">
              <div className="space-y-2">
                <span className="text-xs font-semibold text-[#F57C00] uppercase tracking-widest bg-orange-50 px-3 py-1 rounded-full border border-orange-200 inline-block">
                  {selectedPost.category}
                </span>
                <h2 className="font-cinzel font-bold text-2xl sm:text-3xl text-[#222222]">
                  {selectedPost.title}
                </h2>
                <div className="flex items-center gap-4 text-xs text-gray-400 pt-1">
                  <span>{selectedPost.date}</span>
                  <span>•</span>
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>

              <div className="h-64 sm:h-80 w-full rounded-[18px] overflow-hidden bg-gray-100">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700">
                {selectedPost.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-gray-500">
                  Written by Rajput Dairy Craftsmen • Serving Varanasi Since 1984
                </div>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello Rajput Dairy, I read your article "${selectedPost.title}" and would like to order.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2E7D32] text-white text-xs font-semibold px-5 py-2.5 rounded-[12px] inline-flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order Products from Article</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
