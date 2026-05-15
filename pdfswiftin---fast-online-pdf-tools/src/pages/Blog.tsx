import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, Clock, ChevronRight, Search } from 'lucide-react';
import SEO from '../components/SEO';
import { motion } from 'motion/react';

export const blogPosts = [
  {
    slug: 'how-to-merge-pdf-files',
    title: 'How to Merge PDF Files Free Online Without Quality Loss',
    excerpt: 'Learn the quickest way to combine multiple PDF documents into one professional file using PDFSwiftin\'s local browser-side engine.',
    date: 'May 12, 2026',
    readTime: '4 min read',
    category: 'Guides',
    image: 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?w=800&auto=format&fit=crop'
  },
  {
    slug: 'protect-sensitive-pdf-documents',
    title: 'Encryption 101: How to Secure Your PDF with a Password',
    excerpt: 'Stop unauthorized access to your sensitive contracts and documents. We show you how to use AES-256 bit protection effectively.',
    date: 'May 10, 2026',
    readTime: '5 min read',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop'
  },
  {
    slug: 'optimize-images-for-pdf',
    title: 'Best Practices for Converting JPG and PNG to PDF',
    excerpt: 'Ever wondered why some PDFs look blurry? Discover the ideal DPI and layout settings for a perfect image-to-PDF conversion.',
    date: 'May 08, 2026',
    readTime: '3 min read',
    category: 'Optimization',
    image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=800&auto=format&fit=crop'
  }
];

export default function Blog() {
  return (
    <div className="max-w-5xl mx-auto pb-20 px-4">
      <SEO 
        title="PDF Guides & Tutorials - PDFSwiftin Blog" 
        description="Discover expert tips and tutorials on how to manage, convert, and secure your PDF documents with PDFSwiftin."
        keywords="pdf tutorials, how to merge pdf, secure pdf guide, image to pdf conversion tips"
      />

      <div className="mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
          <BookOpen size={12} /> The Swift Blog
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-6">PDF Mastery Guides.</h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          In-depth tutorials and industry insights to help you work smarter with your documents.
        </p>

        <div className="mt-10 max-w-xl mx-auto relative">
          <input 
            type="text" 
            placeholder="Search guides..." 
            className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-12 pr-6 outline-none focus:ring-2 focus:ring-indigo-100 shadow-sm transition-all text-sm"
          />
          <Search className="absolute left-4 top-4 text-slate-300" size={18} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.article 
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all"
          >
            <Link to={`/blog/${post.slug}`} className="block relative aspect-video overflow-hidden">
               <img 
                 src={post.image} 
                 alt={post.title} 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
               />
               <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-black text-slate-900 uppercase">
                 {post.category}
               </div>
            </Link>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-4 text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-4">
                 <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                 <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors leading-snug">
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-6 line-clamp-3">
                {post.excerpt}
              </p>
              <Link 
                to={`/blog/${post.slug}`} 
                className="mt-auto text-xs font-black text-slate-900 uppercase tracking-widest flex items-center gap-2 group/btn"
              >
                Read Article <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform text-indigo-500" />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
