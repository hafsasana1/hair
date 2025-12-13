import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const blogPosts = [
  {
    id: 1,
    title: 'Understanding Hair Porosity: A Complete Guide',
    excerpt: 'Learn how to determine your hair porosity and why it matters for choosing the right products.',
    date: '2025-12-10',
    readTime: '5 min read',
    category: 'Hair Science'
  },
  {
    id: 2,
    title: '10 Natural Ingredients for Healthy Hair',
    excerpt: 'Discover the power of natural ingredients like coconut oil, aloe vera, and argan oil for hair care.',
    date: '2025-12-08',
    readTime: '7 min read',
    category: 'Natural Care'
  },
  {
    id: 3,
    title: 'How to Protect Your Hair from Heat Damage',
    excerpt: 'Essential tips and products to keep your hair healthy while using heat styling tools.',
    date: '2025-12-05',
    readTime: '6 min read',
    category: 'Hair Care Tips'
  },
  {
    id: 4,
    title: 'The Ultimate Guide to Hair Types and Textures',
    excerpt: 'From straight to coily - understanding your hair type is the first step to great hair care.',
    date: '2025-12-03',
    readTime: '8 min read',
    category: 'Hair Science'
  },
  {
    id: 5,
    title: 'Seasonal Hair Care: Adapting Your Routine',
    excerpt: 'Learn how to adjust your hair care routine for different seasons and climates.',
    date: '2025-11-28',
    readTime: '6 min read',
    category: 'Seasonal Tips'
  },
  {
    id: 6,
    title: 'DIY Hair Masks: Recipes for Every Hair Type',
    excerpt: 'Easy-to-make hair masks using ingredients from your kitchen for amazing results.',
    date: '2025-11-25',
    readTime: '9 min read',
    category: 'DIY Care'
  }
];

const Blog = () => {
  const { toast } = useToast();

  const handleReadMore = (postTitle) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <>
      <Helmet>
        <title>Hair Care Blog - Tips, Guides & Expert Advice | HairGen</title>
        <meta name="description" content="Explore our collection of hair care articles, tips, and expert guides to help you achieve healthy, beautiful hair." />
      </Helmet>

      <div className="min-h-screen bg-white py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16 space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Hair Care <span className="bg-gradient-to-r from-green-500 to-yellow-400 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert tips, guides, and insights to help you achieve your best hair ever
            </p>
          </motion.div>

          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-2xl overflow-hidden shadow-xl">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <img alt="Featured blog post about hair care" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1587225438173-701d7edc94f9" />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="px-4 py-2 bg-green-500 text-white rounded-full text-sm font-semibold inline-block w-fit mb-4">
                    Featured
                  </span>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(blogPosts[0].date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {blogPosts[0].readTime}
                    </span>
                  </div>
                  <Button
                    onClick={() => handleReadMore(blogPosts[0].title)}
                    className="bg-gradient-to-r from-green-500 to-yellow-400 hover:from-green-600 hover:to-yellow-500 text-white font-semibold w-fit"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" src="https://images.unsplash.com/photo-1599447069021-11fa1b497b10" />
                </div>
                <div className="p-6 space-y-4">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 pt-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <Button
                    onClick={() => handleReadMore(post.title)}
                    variant="outline"
                    className="w-full border-2 border-green-500 text-green-600 hover:bg-green-50 font-semibold"
                  >
                    Read Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* AdSense Placeholder */}
          <div className="mt-16 bg-white border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
            <p className="text-gray-500 font-semibold">Advertisement Space</p>
            <p className="text-sm text-gray-400 mt-2">Google AdSense Placeholder</p>
          </div>

          {/* Newsletter CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-green-500 to-yellow-400 rounded-2xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest hair care tips, trends, and exclusive content delivered to your inbox.
            </p>
            <Button
              onClick={() => toast({ title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀" })}
              className="bg-white text-green-600 hover:bg-gray-100 font-semibold"
            >
              Subscribe Now
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Blog;