import React from 'react';
import { Calendar } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'iPhone 15 Pro vs Pro Max: Which One Is Right for You?',
      excerpt: 'A comprehensive comparison of iPhone 15 Pro and Pro Max to help you make an informed decision...',
      date: '2024-03-15',
      image: 'https://images.unsplash.com/photo-1696426051872-0b664d1df01c?auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      title: 'Best iPhones for Photography in 2024',
      excerpt: 'Discover the top iPhones for photography, comparing camera features and capabilities...',
      date: '2024-03-10',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&q=80'
    },
    {
      id: 3,
      title: 'Essential iPhone Features You Need to Know',
      excerpt: 'A guide to must-have iPhone features and how to make the most of them...',
      date: '2024-03-05',
      image: 'https://images.unsplash.com/photo-1697653489841-b5bf7b33d6a3?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">iPhone Guide Blog</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Stay up to date with the latest iPhone models, buying guides, and tech tips.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                <Calendar size={16} />
                {new Date(post.date).toLocaleDateString()}
              </div>
              <h2 className="text-xl font-bold mb-2 hover:text-blue-600">
                <a href="#">{post.title}</a>
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <a
                href="#"
                className="text-blue-600 font-medium hover:text-blue-700"
              >
                Read More →
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}