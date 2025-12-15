import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, BookOpen, CheckCircle, AlertCircle, Star, Sparkles, ExternalLink } from 'lucide-react';
import BlogDisclaimer from '@/components/BlogDisclaimer';

const HairTypesGuide = () => {
  const publishDate = '2024-12-14';
  const updateDate = '2024-12-14';

  const tableOfContents = [
    { id: 'introduction', title: 'Introduction to Hair Types' },
    { id: 'andre-walker-system', title: 'The Andre Walker Hair Typing System' },
    { id: 'type-1-straight', title: 'Type 1: Straight Hair' },
    { id: 'type-2-wavy', title: 'Type 2: Wavy Hair' },
    { id: 'type-3-curly', title: 'Type 3: Curly Hair' },
    { id: 'type-4-coily', title: 'Type 4: Coily Hair' },
    { id: 'hair-texture-explained', title: 'Hair Texture: Fine, Medium, and Coarse' },
    { id: 'hair-density', title: 'Understanding Hair Density' },
    { id: 'identifying-your-type', title: 'How to Identify Your Hair Type' },
    { id: 'caring-for-your-type', title: 'Care Tips for Every Hair Type' },
    { id: 'common-mistakes', title: 'Common Mistakes to Avoid' },
    { id: 'products-by-type', title: 'Product Recommendations by Hair Type' },
    { id: 'faqs', title: 'Frequently Asked Questions' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The Ultimate Guide to Hair Types and Textures: From Straight to Coily",
    "description": "Master the Andre Walker hair typing system with our comprehensive guide. Learn to identify your hair type (1-4), understand texture and density, plus get expert care tips for every hair pattern.",
    "image": [
      "/images/blog/hair_types_comparison_guide.webp",
      "/images/blog/hair_wave_patterns_visual.webp",
      "/images/blog/curly_hair_type_portrait.webp"
    ],
    "author": {
      "@type": "Organization",
      "name": "Hair Routine Generator",
      "url": "https://hairroutinegen.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Hair Routine Generator",
      "logo": {
        "@type": "ImageObject",
        "url": "/logo.png"
      }
    },
    "datePublished": publishDate,
    "dateModified": updateDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://hairroutinegen.com/blog/hair-types-guide"
    },
    "articleSection": "Hair Science",
    "wordCount": "3500"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the Andre Walker Hair Typing System?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Andre Walker Hair Typing System is the most widely used hair classification system, created by celebrity hairstylist Andre Walker. It categorizes hair into four main types: Type 1 (Straight), Type 2 (Wavy), Type 3 (Curly), and Type 4 (Coily). Each type has three subcategories (A, B, C) based on the tightness of the curl or wave pattern."
        }
      },
      {
        "@type": "Question",
        "name": "How do I determine my hair type?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To determine your hair type, wash your hair with a sulfate-free shampoo, skip conditioner, and let it air dry completely without any products. Observe your natural curl pattern: if it's completely straight, you're Type 1; if it has S-shaped waves, you're Type 2; if it has defined spiral curls, you're Type 3; if it has tight coils or zigzag patterns, you're Type 4."
        }
      },
      {
        "@type": "Question",
        "name": "Can your hair type change over time?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, your hair type can change due to hormonal changes (pregnancy, menopause), aging, medications, chemical treatments, and heat damage. However, these changes are often temporary, and with proper care, your natural pattern may return. Genetics primarily determine your base hair type."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between hair type and hair texture?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hair type refers to your curl pattern (straight, wavy, curly, coily), while hair texture refers to the thickness of individual hair strands (fine, medium, coarse). You can have any combination of type and texture - for example, fine Type 3A curly hair or coarse Type 2B wavy hair."
        }
      },
      {
        "@type": "Question",
        "name": "What hair type is the most common?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Type 2 wavy hair is considered the most common hair type globally. However, hair type distribution varies significantly by ethnicity and geographic region. Straight hair (Type 1) is most common in Asian populations, while coily hair (Type 4) is predominant in African descent populations."
        }
      },
      {
        "@type": "Question",
        "name": "How often should I wash my hair based on my hair type?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wash frequency depends on your hair type: Type 1 (straight) may need washing every 1-2 days due to oiliness; Type 2 (wavy) typically every 2-3 days; Type 3 (curly) every 3-5 days; Type 4 (coily) can go 5-7 days or more between washes. Coily and curly hair types retain less natural oils, so they need less frequent washing."
        }
      },
      {
        "@type": "Question",
        "name": "What products work best for curly and coily hair?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Curly and coily hair types benefit from moisturizing products like leave-in conditioners, curl creams, hair oils, and deep conditioning treatments. Look for ingredients like shea butter, coconut oil, and glycerin. Avoid products with sulfates, silicones, and drying alcohols. The LOC (Liquid, Oil, Cream) or LCO method is especially effective for Type 3 and 4 hair."
        }
      },
      {
        "@type": "Question",
        "name": "Is it possible to have multiple hair types?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, it's very common to have multiple hair types on the same head. Many people have different curl patterns in different areas - for example, looser waves at the crown and tighter curls at the nape. Your hair care routine should address the needs of all your hair types."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Hair Types Guide: Complete Andre Walker System Explained (Types 1-4)</title>
        <meta name="description" content="Master the Andre Walker hair typing system with our 3500+ word guide. Learn Types 1-4 (straight to coily), identify your pattern, plus get expert care tips and product recommendations for every hair type." />
        <meta name="keywords" content="hair types, hair type chart, Andre Walker hair system, Type 1 hair, Type 2 hair, Type 3 hair, Type 4 hair, straight hair, wavy hair, curly hair, coily hair, hair texture, hair density, curl pattern, hair classification, hair care by type" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://hairroutinegen.com/blog/hair-types-guide" />
        
        <meta property="og:title" content="The Ultimate Guide to Hair Types: Andre Walker System Explained (Types 1-4)" />
        <meta property="og:description" content="Learn to identify your hair type with our comprehensive guide. From straight Type 1 to coily Type 4, discover your pattern and get personalized care tips." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://hairroutinegen.com/blog/hair-types-guide" />
        <meta property="og:image" content="/images/blog/hair_types_comparison_guide.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:modified_time" content={updateDate} />
        <meta property="article:section" content="Hair Science" />
        <meta property="article:tag" content="hair types" />
        <meta property="article:tag" content="hair care" />
        <meta property="article:tag" content="curl pattern" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hair Types Guide: Complete Andre Walker System (1-4)" />
        <meta name="twitter:description" content="Master the hair typing system. Learn Types 1-4, identify your pattern, get expert care tips." />
        <meta name="twitter:image" content="/images/blog/hair_types_comparison_guide.webp" />
        
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <article className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-green-50 to-yellow-50 py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <Link to="/blog" className="inline-flex items-center text-green-600 hover:text-green-700 font-medium">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-1 bg-green-500 text-white rounded-full text-sm font-semibold">
                  Hair Science
                </span>
                <span className="px-4 py-1 bg-yellow-500 text-white rounded-full text-sm font-semibold">
                  Complete Guide
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                The Ultimate Guide to Hair Types and Textures: From Straight to Coily
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Master the Andre Walker hair typing system, identify your unique hair pattern, and unlock the secrets to caring for your specific hair type with science-backed tips and expert product recommendations.
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Recently Updated</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>18 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>3,500+ words</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 max-w-4xl py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Sticky Table of Contents */}
            <aside className="hidden md:block">
              <div className="sticky top-24">
                <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Contents</h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="block text-left text-sm text-gray-600 hover:text-green-600 transition-colors py-1 border-l-2 border-transparent hover:border-green-500 pl-3 w-full"
                    >
                      {item.title}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Article Content */}
            <div className="md:col-span-3">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="prose prose-lg max-w-none"
              >
                <img 
                  src="/images/blog/hair_types_comparison_guide.webp" 
                  alt="Comprehensive comparison of all hair types from straight Type 1 to coily Type 4, showing diverse hair textures and patterns"
                  className="w-full rounded-2xl shadow-lg mb-8"
                  loading="eager"
                  width="1200"
                  height="675"
                />

                {/* Introduction */}
                <section id="introduction" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction to Hair Types: Why Understanding Your Hair Matters</h2>
                  
                  <p className="text-xl text-gray-700 leading-relaxed mb-6">
                    Understanding your hair type is the foundation of an effective hair care routine. Whether you have sleek straight strands, beachy waves, bouncy curls, or stunning coils, knowing your specific hair type empowers you to make informed decisions about products, styling techniques, and treatments that will truly work for your unique hair.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Many people struggle with their hair simply because they're using products and techniques designed for a different hair type. A person with fine, straight hair using heavy oils will end up with limp, greasy locks. Meanwhile, someone with coily hair using the same lightweight products as their straight-haired friend may experience extreme dryness and breakage.
                  </p>

                  <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-6">
                    <div className="flex items-start gap-3">
                      <Sparkles className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Key Insight</h4>
                        <p className="text-gray-700">
                          According to research published in the <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4387693/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">International Journal of Trichology</a>, understanding your hair's structural properties—including type, texture, and porosity—is essential for preventing damage and maintaining optimal hair health.
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    In this comprehensive guide, we'll explore the complete <strong>Andre Walker Hair Typing System</strong>, break down each hair type from 1 to 4, help you accurately identify your own hair pattern, and provide tailored care recommendations. If you haven't already, we recommend also checking out our <Link to="/blog/hair-porosity-guide" className="text-green-600 hover:underline font-medium">complete guide to hair porosity</Link>, as understanding both your type and porosity will give you the complete picture of your hair's needs.
                  </p>
                </section>

                {/* Andre Walker System */}
                <section id="andre-walker-system" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Andre Walker Hair Typing System: A Complete Breakdown</h2>
                  
                  <img 
                    src="/images/blog/hair_wave_patterns_visual.webp" 
                    alt="Hair wave pattern visual guide showing the progression from straight to coily hair types with clear categorization"
                    className="w-full rounded-2xl shadow-lg mb-8"
                    loading="lazy"
                    width="1200"
                    height="675"
                  />
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The <strong>Andre Walker Hair Typing System</strong> was created by celebrity hairstylist Andre Walker, best known for his work with Oprah Winfrey. This classification system has become the industry standard for categorizing hair and is used by hairstylists, product manufacturers, and beauty enthusiasts worldwide.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    The system divides hair into <strong>four main types</strong>, numbered 1 through 4, with each type having <strong>three subcategories</strong> labeled A, B, and C. The main types are based on the overall curl pattern, while the subcategories indicate the tightness or definition within that pattern.
                  </p>

                  <div className="overflow-x-auto mb-8">
                    <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-md">
                      <thead>
                        <tr className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                          <th className="px-6 py-4 text-left font-bold">Type</th>
                          <th className="px-6 py-4 text-left font-bold">Pattern</th>
                          <th className="px-6 py-4 text-left font-bold">Characteristics</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-semibold text-gray-900">Type 1</td>
                          <td className="px-6 py-4 text-gray-700">Straight</td>
                          <td className="px-6 py-4 text-gray-700">No natural curl, lies flat, reflects light easily</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-semibold text-gray-900">Type 2</td>
                          <td className="px-6 py-4 text-gray-700">Wavy</td>
                          <td className="px-6 py-4 text-gray-700">S-shaped waves, between straight and curly</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-semibold text-gray-900">Type 3</td>
                          <td className="px-6 py-4 text-gray-700">Curly</td>
                          <td className="px-6 py-4 text-gray-700">Defined spiral curls, springy texture</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-semibold text-gray-900">Type 4</td>
                          <td className="px-6 py-4 text-gray-700">Coily</td>
                          <td className="px-6 py-4 text-gray-700">Tight coils or zigzag patterns, most fragile</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    It's important to understand that the Andre Walker system, while incredibly useful, doesn't capture every aspect of hair. Factors like <strong>hair texture</strong> (fine, medium, coarse), <strong>hair density</strong> (thin, medium, thick), and <Link to="/blog/hair-porosity-guide" className="text-green-600 hover:underline font-medium">hair porosity</Link> (low, medium, high) are equally important when developing your hair care routine.
                  </p>
                </section>

                {/* Type 1: Straight Hair */}
                <section id="type-1-straight" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Type 1: Straight Hair – Complete Care Guide</h2>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    <strong>Type 1 hair</strong> is characterized by strands that have no natural curl pattern whatsoever. This hair type lies completely flat from root to tip and is typically the shiniest of all hair types because the natural oils from the scalp can travel easily down the straight hair shaft.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Type 1 Subcategories</h3>

                  <div className="space-y-4 mb-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">Type 1A: Fine Straight Hair</h4>
                      <p className="text-gray-700">
                        The finest and most fragile of the straight hair types. Type 1A hair is typically thin with little volume. It tends to become oily quickly and can be difficult to curl or hold styles. Common in people of Asian descent.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">Type 1B: Medium Straight Hair</h4>
                      <p className="text-gray-700">
                        The most common straight hair type. Type 1B has medium thickness, more body and volume than 1A, and can hold styles better. It may have a slight bend at the ends but remains straight overall.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">Type 1C: Coarse Straight Hair</h4>
                      <p className="text-gray-700">
                        The thickest straight hair type. Type 1C is strong, resistant to damage, and holds styles well. However, it can be difficult to curl and may appear coarse or wiry. Often resistant to chemical treatments.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Type 1 Hair Care Tips</h3>
                  
                  <ul className="space-y-3 mb-6">
                    {[
                      'Wash more frequently (every 1-2 days) as oils travel quickly down straight strands',
                      'Use lightweight, volumizing products to avoid weighing hair down',
                      'Avoid heavy oils and butters that can make hair look greasy',
                      'Consider dry shampoo between washes to absorb excess oil',
                      'Use clarifying shampoo weekly to prevent product buildup'
                    ].map((tip, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Type 2: Wavy Hair */}
                <section id="type-2-wavy" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Type 2: Wavy Hair – Complete Care Guide</h2>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    <strong>Type 2 hair</strong> falls between straight and curly, featuring S-shaped waves that can range from subtle to defined. This versatile hair type can be styled straight or enhanced into more defined waves. Type 2 hair is considered the most common hair type globally.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Type 2 Subcategories</h3>

                  <div className="space-y-4 mb-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">Type 2A: Fine Wavy Hair</h4>
                      <p className="text-gray-700">
                        Subtle, loose waves that are close to straight. Type 2A hair can be easily straightened or styled into more defined waves. It tends to be fine and may lack volume at the roots. The wave pattern is most visible from mid-length to ends.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">Type 2B: Medium Wavy Hair</h4>
                      <p className="text-gray-700">
                        More defined S-shaped waves with medium texture. Type 2B waves start closer to the root and have more body than 2A. This hair type is prone to frizz, especially in humid conditions. Often referred to as "beach waves."
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">Type 2C: Coarse Wavy Hair</h4>
                      <p className="text-gray-700">
                        The waviest of the Type 2 category, with well-defined waves that can form loose spirals. Type 2C hair is thicker, prone to frizz, and often difficult to style. It borders on curly and may have a few actual curls mixed in.
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    For detailed care routines specifically for wavy hair, check out our <Link to="/wavy-hair-routine-2b" className="text-green-600 hover:underline font-medium">complete wavy hair routine guide</Link>.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Type 2 Hair Care Tips</h3>
                  
                  <ul className="space-y-3 mb-6">
                    {[
                      'Use sulfate-free shampoos to prevent stripping natural oils',
                      'Apply products to wet hair using the "scrunching" technique to enhance waves',
                      'Consider the "Curly Girl Method" (modified) to bring out natural wave pattern',
                      'Use a microfiber towel or cotton t-shirt to reduce frizz when drying',
                      'Avoid brushing dry hair – use a wide-tooth comb on wet, conditioned hair',
                      'Sleep on a silk or satin pillowcase to minimize frizz and breakage'
                    ].map((tip, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Type 3: Curly Hair */}
                <section id="type-3-curly" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Type 3: Curly Hair – Complete Care Guide</h2>
                  
                  <img 
                    src="/images/blog/curly_hair_type_portrait.webp" 
                    alt="Beautiful woman with defined Type 3 curly hair showing healthy, bouncy spiral curls"
                    className="w-full rounded-2xl shadow-lg mb-8"
                    loading="lazy"
                    width="800"
                    height="600"
                  />
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    <strong>Type 3 hair</strong> features well-defined, springy curls that form spirals or ringlets. This hair type has a definite S or Z-shaped pattern and maintains its curl shape even when stretched. Type 3 hair is prone to dryness and frizz because the curls make it harder for natural scalp oils to travel down the hair shaft.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Type 3 Subcategories</h3>

                  <div className="space-y-4 mb-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">Type 3A: Loose Curls</h4>
                      <p className="text-gray-700">
                        Large, loose curls about the circumference of sidewalk chalk. Type 3A curls are shiny, bouncy, and well-defined. This hair type has the most volume of the curly family and can be prone to frizz in humidity.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">Type 3B: Medium Curls</h4>
                      <p className="text-gray-700">
                        Springy ringlets ranging from bouncy corkscrews to tight curls, about the circumference of a marker. Type 3B curls are voluminous and can experience significant shrinkage (up to 50% of actual length). More prone to dryness than 3A.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">Type 3C: Tight Curls</h4>
                      <p className="text-gray-700">
                        Densely packed, tight curls or coils about the circumference of a pencil or straw. Type 3C curls experience significant shrinkage and can appear much shorter than their actual length when dry. This subtype is the most prone to dryness and requires extra moisture.
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    We've created a dedicated <Link to="/curly-hair-routine" className="text-green-600 hover:underline font-medium">curly hair care routine</Link> with step-by-step instructions for maintaining healthy, defined curls.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Type 3 Hair Care Tips</h3>
                  
                  <ul className="space-y-3 mb-6">
                    {[
                      'Co-wash (conditioner-only washing) between shampoo days to maintain moisture',
                      'Use the LOC (Liquid, Oil, Cream) or LCO method to lock in moisture',
                      'Deep condition weekly with a moisturizing treatment',
                      'Detangle only when hair is wet and saturated with conditioner',
                      'Apply styling products to soaking wet hair for best definition',
                      'Consider "plopping" with a t-shirt to enhance curl definition while drying',
                      'Refresh curls between wash days with a water-based spray',
                      'Trim regularly to prevent split ends from traveling up the curl'
                    ].map((tip, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Important Note on Heat Styling</h4>
                        <p className="text-gray-700">
                          Type 3 curly hair is especially vulnerable to heat damage. If you use heat tools, always use a heat protectant and keep temperatures below 375°F. Learn more in our <Link to="/blog/heat-damage-protection" className="text-yellow-700 hover:underline font-medium">heat damage protection guide</Link>.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Type 4: Coily Hair */}
                <section id="type-4-coily" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Type 4: Coily Hair – Complete Care Guide</h2>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    <strong>Type 4 hair</strong>, also known as coily, kinky, or Afro-textured hair, features tight coils, curls, or zigzag patterns. This hair type is the most fragile due to its shape – the bends and coils create weak points along the hair shaft. Type 4 hair is also the driest because natural oils have the hardest time traveling down the coiled strand.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Despite its fragility, Type 4 hair is incredibly versatile and can be styled in countless ways, from twist-outs and braid-outs to protective styles and natural afros.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Type 4 Subcategories</h3>

                  <div className="space-y-4 mb-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">Type 4A: Soft Coils</h4>
                      <p className="text-gray-700">
                        Densely packed, springy S-pattern coils about the circumference of a crochet needle. Type 4A hair retains moisture better than 4B or 4C and has visible curl definition when properly hydrated. It can experience up to 70% shrinkage.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">Type 4B: Z-Pattern Coils</h4>
                      <p className="text-gray-700">
                        Sharp, angular Z-shaped pattern rather than defined curls. Type 4B hair strands bend in sharp angles like the letter Z. This hair type has a cotton-like feel and can shrink up to 75% of its actual length. Less defined curl pattern than 4A.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">Type 4C: Tight Coils</h4>
                      <p className="text-gray-700">
                        The tightest coil pattern with very little definition. Type 4C hair looks similar to 4B but with tighter, more densely packed coils. It experiences the most shrinkage (up to 80% or more) and requires the most moisture of all hair types. Extremely versatile for styling.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Type 4 Hair Care Tips</h3>
                  
                  <ul className="space-y-3 mb-6">
                    {[
                      'Wash less frequently (every 7-14 days) to prevent stripping natural oils',
                      'Pre-poo (pre-shampoo treatment) with oils before washing to protect hair',
                      'Use the LOC/LCO method religiously to layer and seal in moisture',
                      'Deep condition for 30+ minutes under a heat cap for best penetration',
                      'Section hair during detangling and styling to prevent breakage',
                      'Use protective styles (twists, braids, bantu knots) to retain length',
                      'Sleep with a satin bonnet or on a satin pillowcase',
                      'Moisturize daily or every other day with a water-based leave-in',
                      'Limit heat styling and manipulation to prevent damage'
                    ].map((tip, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Many Type 4 naturals benefit from incorporating <Link to="/blog/natural-ingredients-for-healthy-hair" className="text-green-600 hover:underline font-medium">natural ingredients like shea butter and coconut oil</Link> into their routine for extra moisture and sealing.
                  </p>
                </section>

                {/* Hair Texture Section */}
                <section id="hair-texture-explained" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Hair Texture: Understanding Fine, Medium, and Coarse Hair</h2>
                  
                  <img 
                    src="/images/blog/hair_structure_texture_detail.webp" 
                    alt="Close-up of hair structure showing the hair shaft and cuticle layer for understanding hair texture"
                    className="w-full rounded-2xl shadow-lg mb-8"
                    loading="lazy"
                    width="800"
                    height="600"
                  />
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    <strong>Hair texture</strong> refers to the thickness or diameter of individual hair strands, not to be confused with hair type (curl pattern). You can have any combination of hair type and texture – for example, fine Type 4C hair or coarse Type 2A hair.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                      <h4 className="font-bold text-lg text-gray-900 mb-3">Fine Hair</h4>
                      <p className="text-gray-700 text-sm mb-4">
                        Individual strands are thin and delicate, similar to a piece of thread. Fine hair is easily weighed down by heavy products and prone to breakage.
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Test:</strong> If you can barely feel a single strand between your fingers, you have fine hair.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6">
                      <h4 className="font-bold text-lg text-gray-900 mb-3">Medium Hair</h4>
                      <p className="text-gray-700 text-sm mb-4">
                        The most common hair texture. Medium hair strands are balanced – not too thin, not too thick. Most versatile and easy to style.
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Test:</strong> If you can feel a single strand between your fingers but it doesn't feel stiff, you have medium hair.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6">
                      <h4 className="font-bold text-lg text-gray-900 mb-3">Coarse Hair</h4>
                      <p className="text-gray-700 text-sm mb-4">
                        Individual strands are thick and strong. Coarse hair is resistant to damage but can be difficult to style and may feel wiry or rough.
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Test:</strong> If a single strand feels thick and sturdy between your fingers, you have coarse hair.
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Understanding your hair texture helps you choose the right product weights. Fine hair needs lightweight products, while coarse hair can handle heavier creams and butters. For more on how texture interacts with moisture absorption, see our <Link to="/blog/hair-porosity-guide" className="text-green-600 hover:underline font-medium">hair porosity guide</Link>.
                  </p>
                </section>

                {/* Hair Density Section */}
                <section id="hair-density" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Hair Density: Thin, Medium, and Thick</h2>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    <strong>Hair density</strong> refers to how many hair strands you have on your head, not the thickness of each strand. You can have fine hair with high density (lots of thin strands) or coarse hair with low density (fewer thick strands).
                  </p>

                  <div className="overflow-x-auto mb-8">
                    <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-md">
                      <thead>
                        <tr className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                          <th className="px-6 py-4 text-left font-bold">Density</th>
                          <th className="px-6 py-4 text-left font-bold">Scalp Visibility</th>
                          <th className="px-6 py-4 text-left font-bold">Product Recommendations</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-semibold text-gray-900">Low (Thin)</td>
                          <td className="px-6 py-4 text-gray-700">Easily visible through hair</td>
                          <td className="px-6 py-4 text-gray-700">Volumizing products, avoid heavy styling products</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-semibold text-gray-900">Medium</td>
                          <td className="px-6 py-4 text-gray-700">Partially visible</td>
                          <td className="px-6 py-4 text-gray-700">Moderate product amounts, versatile styling options</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-semibold text-gray-900">High (Thick)</td>
                          <td className="px-6 py-4 text-gray-700">Difficult to see</td>
                          <td className="px-6 py-4 text-gray-700">More product needed, may require stronger hold products</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                    <div className="flex items-start gap-3">
                      <Star className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Quick Density Test</h4>
                        <p className="text-gray-700">
                          Gather your hair into a ponytail and measure its circumference. Less than 2 inches indicates low density, 2-4 inches is medium density, and more than 4 inches suggests high density.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* How to Identify Your Type */}
                <section id="identifying-your-type" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Identify Your Hair Type: Step-by-Step Guide</h2>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    To accurately determine your hair type, follow these steps:
                  </p>

                  <div className="space-y-6 mb-8">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Wash Your Hair</h4>
                        <p className="text-gray-700">Use a sulfate-free clarifying shampoo to remove all product buildup. Do NOT use conditioner for this test.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Let Hair Air Dry Completely</h4>
                        <p className="text-gray-700">Allow your hair to dry naturally without any manipulation, products, or heat. This may take several hours.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Observe Your Natural Pattern</h4>
                        <p className="text-gray-700">Look at your hair's natural shape. Is it straight, wavy, curly, or coily? Compare to the descriptions above.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xl">4</div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Check Different Areas</h4>
                        <p className="text-gray-700">Examine hair at the crown, sides, nape, and front. Many people have multiple hair types on their head.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-xl">5</div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Determine Your Subcategory</h4>
                        <p className="text-gray-700">Within your main type, identify whether your pattern is loosest (A), medium (B), or tightest (C).</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-green-600" />
                      Personalized Hair Analysis
                    </h4>
                    <p className="text-gray-700 mb-4">
                      Want a more thorough analysis of your hair type, texture, and care needs? Take our comprehensive hair quiz to get personalized product and routine recommendations.
                    </p>
                    <Link 
                      to="/quiz" 
                      className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                      Take the Hair Quiz
                      <ArrowLeft className="w-4 h-4 rotate-180" />
                    </Link>
                  </div>
                </section>

                {/* Care Tips by Type */}
                <section id="caring-for-your-type" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Essential Care Tips for Every Hair Type</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h4 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                        Type 1 Care Summary
                      </h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Wash frequency: Every 1-2 days</li>
                        <li>• Products: Lightweight, volumizing</li>
                        <li>• Focus: Oil control, adding texture</li>
                        <li>• Avoid: Heavy oils and butters</li>
                      </ul>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h4 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                        Type 2 Care Summary
                      </h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Wash frequency: Every 2-3 days</li>
                        <li>• Products: Mousse, light gels, sea salt sprays</li>
                        <li>• Focus: Frizz control, wave enhancement</li>
                        <li>• Avoid: Heavy creams, over-brushing</li>
                      </ul>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h4 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                        <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                        Type 3 Care Summary
                      </h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Wash frequency: Every 3-5 days</li>
                        <li>• Products: Curl creams, leave-ins, gels</li>
                        <li>• Focus: Hydration, curl definition</li>
                        <li>• Avoid: Sulfates, heat damage, brushing dry</li>
                      </ul>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h4 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-sm font-bold">4</div>
                        Type 4 Care Summary
                      </h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Wash frequency: Every 7-14 days</li>
                        <li>• Products: Heavy creams, butters, oils</li>
                        <li>• Focus: Deep moisture, gentle handling</li>
                        <li>• Avoid: Over-manipulation, harsh ingredients</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Common Mistakes */}
                <section id="common-mistakes" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Hair Type Mistakes to Avoid</h2>
                  
                  <div className="space-y-4 mb-8">
                    {[
                      {
                        mistake: 'Using the wrong products for your hair type',
                        solution: 'Match product weight to your hair type – lightweight for 1-2, heavier for 3-4'
                      },
                      {
                        mistake: 'Over-washing curly or coily hair',
                        solution: 'Reduce wash frequency and co-wash between shampoos to maintain moisture'
                      },
                      {
                        mistake: 'Brushing curly/coily hair when dry',
                        solution: 'Only detangle on wet, conditioned hair with a wide-tooth comb'
                      },
                      {
                        mistake: 'Ignoring hair porosity',
                        solution: 'Test your porosity and adjust products accordingly – it\'s as important as hair type'
                      },
                      {
                        mistake: 'Using too much heat without protection',
                        solution: 'Always use heat protectant and keep temperatures appropriate for your hair type'
                      },
                      {
                        mistake: 'Skipping regular trims',
                        solution: 'Trim every 8-12 weeks to prevent split ends and maintain healthy ends'
                      }
                    ].map((item, index) => (
                      <div key={index} className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                        <p className="font-semibold text-red-800 mb-1">Mistake: {item.mistake}</p>
                        <p className="text-gray-700 text-sm">Solution: {item.solution}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Products by Type */}
                <section id="products-by-type" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Product Recommendations by Hair Type</h2>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Choosing the right products for your hair type makes all the difference. Here's a general guide to product types that work best for each category:
                  </p>

                  <div className="overflow-x-auto mb-8">
                    <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-md">
                      <thead>
                        <tr className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                          <th className="px-4 py-4 text-left font-bold">Type</th>
                          <th className="px-4 py-4 text-left font-bold">Shampoo</th>
                          <th className="px-4 py-4 text-left font-bold">Conditioner</th>
                          <th className="px-4 py-4 text-left font-bold">Styling</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr className="hover:bg-gray-50">
                          <td className="px-4 py-4 font-semibold text-gray-900">Type 1</td>
                          <td className="px-4 py-4 text-gray-700 text-sm">Clarifying, volumizing</td>
                          <td className="px-4 py-4 text-gray-700 text-sm">Lightweight, ends only</td>
                          <td className="px-4 py-4 text-gray-700 text-sm">Volumizing mousse, texturizing spray</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-4 py-4 font-semibold text-gray-900">Type 2</td>
                          <td className="px-4 py-4 text-gray-700 text-sm">Sulfate-free, hydrating</td>
                          <td className="px-4 py-4 text-gray-700 text-sm">Lightweight to medium</td>
                          <td className="px-4 py-4 text-gray-700 text-sm">Sea salt spray, light gel, mousse</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-4 py-4 font-semibold text-gray-900">Type 3</td>
                          <td className="px-4 py-4 text-gray-700 text-sm">Sulfate-free, moisturizing</td>
                          <td className="px-4 py-4 text-gray-700 text-sm">Rich, moisturizing</td>
                          <td className="px-4 py-4 text-gray-700 text-sm">Curl cream, defining gel, leave-in</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-4 py-4 font-semibold text-gray-900">Type 4</td>
                          <td className="px-4 py-4 text-gray-700 text-sm">Gentle, moisturizing</td>
                          <td className="px-4 py-4 text-gray-700 text-sm">Deep conditioning, thick</td>
                          <td className="px-4 py-4 text-gray-700 text-sm">Butters, heavy creams, oils</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    For specific ingredient recommendations, especially natural options, check out our guide on <Link to="/blog/natural-ingredients-for-healthy-hair" className="text-green-600 hover:underline font-medium">10 natural ingredients for healthy hair</Link>.
                  </p>
                </section>

                {/* FAQs */}
                <section id="faqs" className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions About Hair Types</h2>
                  
                  <div className="space-y-4">
                    {[
                      {
                        q: 'What is the Andre Walker Hair Typing System?',
                        a: 'The Andre Walker Hair Typing System is the most widely used hair classification system, created by celebrity hairstylist Andre Walker. It categorizes hair into four main types: Type 1 (Straight), Type 2 (Wavy), Type 3 (Curly), and Type 4 (Coily). Each type has three subcategories (A, B, C) based on the tightness of the curl or wave pattern.'
                      },
                      {
                        q: 'How do I determine my hair type?',
                        a: 'To determine your hair type, wash your hair with a sulfate-free shampoo, skip conditioner, and let it air dry completely without any products. Observe your natural curl pattern: if it\'s completely straight, you\'re Type 1; if it has S-shaped waves, you\'re Type 2; if it has defined spiral curls, you\'re Type 3; if it has tight coils or zigzag patterns, you\'re Type 4.'
                      },
                      {
                        q: 'Can your hair type change over time?',
                        a: 'Yes, your hair type can change due to hormonal changes (pregnancy, menopause), aging, medications, chemical treatments, and heat damage. However, these changes are often temporary, and with proper care, your natural pattern may return. Genetics primarily determine your base hair type.'
                      },
                      {
                        q: 'What is the difference between hair type and hair texture?',
                        a: 'Hair type refers to your curl pattern (straight, wavy, curly, coily), while hair texture refers to the thickness of individual hair strands (fine, medium, coarse). You can have any combination of type and texture – for example, fine Type 3A curly hair or coarse Type 2B wavy hair.'
                      },
                      {
                        q: 'What hair type is the most common?',
                        a: 'Type 2 wavy hair is considered the most common hair type globally. However, hair type distribution varies significantly by ethnicity and geographic region.'
                      },
                      {
                        q: 'How often should I wash my hair based on my hair type?',
                        a: 'Wash frequency depends on your hair type: Type 1 (straight) may need washing every 1-2 days; Type 2 (wavy) typically every 2-3 days; Type 3 (curly) every 3-5 days; Type 4 (coily) can go 5-7 days or more between washes.'
                      },
                      {
                        q: 'What products work best for curly and coily hair?',
                        a: 'Curly and coily hair types benefit from moisturizing products like leave-in conditioners, curl creams, hair oils, and deep conditioning treatments. Look for ingredients like shea butter, coconut oil, and glycerin. The LOC (Liquid, Oil, Cream) method is especially effective.'
                      },
                      {
                        q: 'Is it possible to have multiple hair types?',
                        a: 'Yes, it\'s very common to have multiple hair types on the same head. Many people have different curl patterns in different areas – for example, looser waves at the crown and tighter curls at the nape.'
                      }
                    ].map((faq, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-6">
                        <h3 className="font-bold text-gray-900 mb-3">{faq.q}</h3>
                        <p className="text-gray-700">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Conclusion */}
                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion: Embrace Your Natural Hair Type</h2>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Understanding your hair type is the first step toward achieving healthy, beautiful hair. Whether you're a Type 1 with sleek straight strands or a Type 4 with gorgeous coils, knowing your hair's specific needs allows you to choose the right products, techniques, and routines.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Remember that hair type is just one piece of the puzzle. Consider your <Link to="/blog/hair-porosity-guide" className="text-green-600 hover:underline font-medium">hair porosity</Link>, texture, and density when building your complete hair care routine. And don't forget – every hair type is beautiful, and the goal is healthy hair that you love.
                  </p>

                  <div className="bg-gradient-to-r from-green-500 to-yellow-400 rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Get Your Personalized Hair Care Routine</h3>
                    <p className="text-white/90 mb-6">
                      Take our comprehensive hair quiz to discover your exact hair type, porosity, and get a customized routine designed just for you.
                    </p>
                    <Link 
                      to="/quiz" 
                      className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors"
                    >
                      Start Your Hair Journey
                      <ArrowLeft className="w-5 h-5 rotate-180" />
                    </Link>
                  </div>
                </section>

                <BlogDisclaimer />

                {/* Related Articles */}
                <section className="border-t border-gray-200 pt-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Link to="/blog/hair-porosity-guide" className="group block bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                      <img 
                        src="/images/blog/woman_examining_hair_0a03f537.webp" 
                        alt="Hair porosity guide"
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="p-4">
                        <h4 className="font-bold text-gray-900 group-hover:text-green-600 transition-colors">Understanding Hair Porosity: Complete Guide</h4>
                        <p className="text-sm text-gray-600 mt-2">Learn how to test and care for your hair based on porosity</p>
                      </div>
                    </Link>
                    <Link to="/blog/natural-ingredients-for-healthy-hair" className="group block bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                      <img 
                        src="/images/blog/natural_hair_care_in_fc40f08f.webp" 
                        alt="Natural ingredients for hair"
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="p-4">
                        <h4 className="font-bold text-gray-900 group-hover:text-green-600 transition-colors">10 Natural Ingredients for Healthy Hair</h4>
                        <p className="text-sm text-gray-600 mt-2">Discover nature's best ingredients for your hair type</p>
                      </div>
                    </Link>
                  </div>
                </section>

                {/* External Resources */}
                <section className="mt-12 bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">External Resources</h3>
                  <p className="text-gray-700 text-sm mb-4">For more scientific information about hair structure and care, we recommend these authoritative sources:</p>
                  <ul className="space-y-2">
                    <li>
                      <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4387693/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline text-sm flex items-center gap-1">
                        International Journal of Trichology: Hair Cosmetics
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.aad.org/public/everyday-care/hair-scalp-care/hair" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline text-sm flex items-center gap-1">
                        American Academy of Dermatology: Hair Care
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </li>
                  </ul>
                </section>
              </motion.div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default HairTypesGuide;
