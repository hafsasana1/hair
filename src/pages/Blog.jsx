import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'Understanding Hair Porosity: A Complete Guide',
    excerpt: 'Learn how to determine your hair porosity and why it matters for choosing the right products. Discover the float test, care tips for all porosity types, and expert product recommendations.',
    date: '2024-12-10',
    readTime: '15 min read',
    category: 'Hair Science',
    slug: '/blog/hair-porosity-guide',
    image: '/images/blog/woman_examining_hair_0a03f537.webp',
    wordCount: '2,500+'
  },
  {
    id: 2,
    title: '10 Natural Ingredients for Healthy Hair',
    excerpt: 'Discover the power of natural ingredients like coconut oil, aloe vera, argan oil, and more. Complete with DIY recipes and science-backed benefits for every hair type.',
    date: '2024-12-08',
    readTime: '12 min read',
    category: 'Natural Care',
    slug: '/blog/natural-ingredients-for-healthy-hair',
    image: '/images/blog/natural_hair_care_in_fc40f08f.webp',
    wordCount: '2,200+'
  },
  {
    id: 3,
    title: 'How to Protect Your Hair from Heat Damage',
    excerpt: 'Essential tips and products to keep your hair healthy while using heat styling tools. Learn safe temperatures, proper techniques, and recovery treatments.',
    date: '2024-12-05',
    readTime: '14 min read',
    category: 'Hair Care Tips',
    slug: '/blog/heat-damage-protection',
    image: '/images/blog/woman_using_hair_str_d63b3565.webp',
    wordCount: '2,300+'
  },
  {
    id: 4,
    title: 'The Ultimate Guide to Hair Types and Textures',
    excerpt: 'Master the Andre Walker hair typing system with our comprehensive guide. Learn to identify your hair type (1-4), understand texture and density, plus get expert care tips for every hair pattern.',
    date: '2024-12-14',
    readTime: '18 min read',
    category: 'Hair Science',
    slug: '/blog/hair-types-guide',
    image: '/images/blog/hair_types_comparison_guide.webp',
    wordCount: '3,500+'
  },
  {
    id: 5,
    title: 'Seasonal Hair Care: Complete Guide to Adapting Your Routine',
    excerpt: 'Master seasonal hair care with our expert guide. Learn to protect your hair from summer sun, winter dryness, humidity, and cold. Science-backed tips for spring, summer, fall, and winter hair routines.',
    date: '2024-12-14',
    readTime: '18 min read',
    category: 'Seasonal Tips',
    slug: '/blog/seasonal-hair-care',
    image: '/images/blog/autumn_fall_hair_care.webp',
    wordCount: '3,200+'
  },
  {
    id: 6,
    title: 'DIY Hair Masks: 25+ Recipes for Every Hair Type',
    excerpt: 'Transform your hair with 25+ homemade hair mask recipes using kitchen ingredients. Customized treatments for dry, oily, damaged, color-treated, and curly hair with step-by-step instructions.',
    date: '2024-12-14',
    readTime: '22 min read',
    category: 'DIY Care',
    slug: '/blog/diy-hair-masks',
    image: '/images/blog/diy_hair_mask_ingredients.webp',
    wordCount: '3,800+'
  },
  {
    id: 7,
    title: 'Complete Guide to Healthy Hair Growth: Science-Backed Tips',
    excerpt: 'Discover proven methods to accelerate hair growth naturally. Learn about the hair growth cycle, best nutrients, scalp care, and treatments backed by science for faster, thicker, healthier hair.',
    date: '2024-12-14',
    readTime: '25 min read',
    category: 'Hair Science',
    slug: '/blog/hair-growth-guide',
    image: '/images/blog/healthy_hair_growth_results.webp',
    wordCount: '4,500+'
  }
];

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Hair Routine Generator Hair Care Blog",
  "description": "Expert hair care tips, guides, and advice to help you achieve healthy, beautiful hair. Science-backed articles on porosity, natural ingredients, heat protection, and more.",
  "url": "https://hairgen.com/blog",
  "publisher": {
    "@type": "Organization",
    "name": "Hair Routine Generator",
    "logo": {
      "@type": "ImageObject",
      "url": "/logo.png"
    }
  },
  "blogPost": blogPosts.filter(p => p.slug).map(post => ({
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date,
    "url": `https://hairgen.com${post.slug}`
  }))
};

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Hair Care Blog: Expert Tips, Guides & Science-Backed Advice | Hair Routine Generator</title>
        <meta name="description" content="Explore expert hair care articles covering porosity, natural ingredients, heat protection, and personalized routines. Science-backed tips for all hair types. Start your hair transformation today!" />
        <meta name="keywords" content="hair care blog, hair tips, hair porosity guide, natural hair care, heat damage protection, hair routine, healthy hair tips" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <link rel="canonical" href="https://hairgen.com/blog" />
        
        <meta property="og:title" content="Hair Care Blog: Expert Tips & Science-Backed Advice | Hair Routine Generator" />
        <meta property="og:description" content="Explore expert hair care articles covering porosity, natural ingredients, heat protection, and personalized routines for all hair types." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hairgen.com/blog" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hair Care Blog | Hair Routine Generator" />
        <meta name="twitter:description" content="Expert hair care tips, guides, and advice for all hair types." />
        
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>

      <div className="min-h-screen bg-white py-8">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10 space-y-3"
          >
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Hair Care <span className="bg-gradient-to-r from-green-500 to-yellow-400 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              Science-backed tips, expert guides, and proven techniques for healthier hair
            </p>
            <div className="flex flex-wrap justify-center gap-2 pt-2">
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Hair Science</span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">Natural Care</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">DIY Recipes</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">Expert Tips</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <div className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-2xl overflow-hidden shadow-xl">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto min-h-[300px]">
                  <img 
                    src={blogPosts[0].image}
                    alt="Understanding hair porosity - featured article about hair care science"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex gap-2 mb-4">
                    <span className="px-4 py-2 bg-green-500 text-white rounded-full text-sm font-semibold">
                      Featured
                    </span>
                    <span className="px-4 py-2 bg-yellow-400 text-gray-800 rounded-full text-sm font-semibold flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      {blogPosts[0].wordCount} words
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
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
                  <Link to={blogPosts[0].slug}>
                    <Button className="bg-gradient-to-r from-green-500 to-yellow-400 hover:from-green-600 hover:to-yellow-500 text-white font-semibold w-fit">
                      Read Complete Guide
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

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
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  {!post.slug && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <span className="px-4 py-2 bg-white/90 text-gray-800 rounded-full text-sm font-semibold">
                        Coming Soon
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                    {post.slug && (
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                        {post.wordCount} words
                      </span>
                    )}
                  </div>
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
                  {post.slug ? (
                    <Link to={post.slug}>
                      <Button
                        variant="outline"
                        className="w-full border-2 border-green-500 text-green-600 hover:bg-green-50 font-semibold"
                      >
                        Read Full Article
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      variant="outline"
                      className="w-full border-2 border-gray-300 text-gray-400 cursor-not-allowed font-semibold"
                      disabled
                    >
                      Coming Soon
                    </Button>
                  )}
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-white border-2 border-gray-200 rounded-2xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Popular Topics</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/hair-routine-for-curly-hair" className="px-4 py-2 bg-gray-100 hover:bg-green-100 text-gray-700 hover:text-green-700 rounded-full text-sm font-medium transition-colors">
                Curly Hair Routine
              </Link>
              <Link to="/hair-routine-for-low-porosity" className="px-4 py-2 bg-gray-100 hover:bg-green-100 text-gray-700 hover:text-green-700 rounded-full text-sm font-medium transition-colors">
                Low Porosity Care
              </Link>
              <Link to="/hair-routine-for-high-porosity" className="px-4 py-2 bg-gray-100 hover:bg-green-100 text-gray-700 hover:text-green-700 rounded-full text-sm font-medium transition-colors">
                High Porosity Care
              </Link>
              <Link to="/hair-routine-for-damaged-hair" className="px-4 py-2 bg-gray-100 hover:bg-green-100 text-gray-700 hover:text-green-700 rounded-full text-sm font-medium transition-colors">
                Damaged Hair Recovery
              </Link>
              <Link to="/hair-routine-for-hair-growth" className="px-4 py-2 bg-gray-100 hover:bg-green-100 text-gray-700 hover:text-green-700 rounded-full text-sm font-medium transition-colors">
                Hair Growth Tips
              </Link>
              <Link to="/hair-routine-for-frizzy-hair" className="px-4 py-2 bg-gray-100 hover:bg-green-100 text-gray-700 hover:text-green-700 rounded-full text-sm font-medium transition-colors">
                Frizz Control
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-green-500 to-yellow-400 rounded-2xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Get Your Personalized Hair Care Routine</h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Skip the guesswork! Take our 2-minute quiz to discover the perfect routine and products for your unique hair type, porosity, and goals.
            </p>
            <Link to="/quiz">
              <Button className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-8 py-3">
                Start Free Hair Quiz
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Blog;