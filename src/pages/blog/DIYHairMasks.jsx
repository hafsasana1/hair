import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, BookOpen, CheckCircle, AlertCircle, Star, Sparkles, ExternalLink, Droplets, Leaf, Heart, Timer, User, Share2, Beaker, Apple } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DIYHairMasks = () => {
  const publishDate = '2025-12-14';
  const updateDate = '2025-12-14';
  const author = 'HairGen Expert Team';
  const readTime = '22 min read';

  const tableOfContents = [
    { id: 'introduction', title: 'Why DIY Hair Masks Work' },
    { id: 'benefits', title: 'Benefits of Homemade Hair Masks' },
    { id: 'dry-hair-masks', title: 'Best Masks for Dry Hair' },
    { id: 'oily-hair-masks', title: 'Best Masks for Oily Hair & Scalp' },
    { id: 'damaged-hair-masks', title: 'Best Masks for Damaged Hair' },
    { id: 'color-treated-masks', title: 'Best Masks for Color-Treated Hair' },
    { id: 'curly-hair-masks', title: 'Best Masks for Curly & Coily Hair' },
    { id: 'hair-growth-masks', title: 'Best Masks for Hair Growth' },
    { id: 'frizz-control-masks', title: 'Best Masks for Frizz Control' },
    { id: 'application-guide', title: 'How to Apply Hair Masks Correctly' },
    { id: 'ingredients-guide', title: 'Understanding Key Ingredients' },
    { id: 'mistakes-to-avoid', title: 'Common Mistakes to Avoid' },
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
    "headline": "DIY Hair Masks: 25+ Recipes for Every Hair Type [Complete Guide 2025]",
    "description": "Discover 25+ homemade hair mask recipes using kitchen ingredients. Customized DIY treatments for dry, oily, damaged, color-treated, and curly hair with step-by-step instructions.",
    "image": [
      "/images/blog/diy_hair_mask_ingredients.webp",
      "/images/blog/woman_applying_hair_mask.webp",
      "/images/blog/honey_hair_treatment.webp",
      "/images/blog/avocado_hair_mask.webp"
    ],
    "author": {
      "@type": "Organization",
      "name": "HairGen",
      "url": "https://hairgen.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "HairGen",
      "logo": {
        "@type": "ImageObject",
        "url": "/logo.png"
      }
    },
    "datePublished": publishDate,
    "dateModified": updateDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://hairgen.com/blog/diy-hair-masks"
    },
    "articleSection": "DIY Care",
    "wordCount": "3800"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How often should I use a DIY hair mask?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For most hair types, using a DIY hair mask once a week is ideal. Dry or damaged hair may benefit from twice-weekly treatments, while oily hair should stick to once every 7-10 days. Over-masking can lead to product buildup and weigh hair down, so monitor how your hair responds and adjust frequency accordingly."
        }
      },
      {
        "@type": "Question",
        "name": "Can I leave a homemade hair mask overnight?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Some oil-based masks (coconut, olive, argan) are safe for overnight use when wrapped in a silk scarf or shower cap. However, masks containing eggs, yogurt, or mayonnaise should never be left on overnight as they can spoil and cause scalp irritation. Protein-heavy masks should be limited to 30 minutes maximum to prevent hair from becoming brittle."
        }
      },
      {
        "@type": "Question",
        "name": "Why isn't my DIY hair mask working?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Common reasons include: using the wrong mask for your hair type, not leaving it on long enough, applying to dirty or product-laden hair, using cold ingredients that don't penetrate well, or washing out with hot water that strips benefits. Also, DIY masks work gradually - expect results after 4-6 consistent applications rather than overnight transformation."
        }
      },
      {
        "@type": "Question",
        "name": "What's the best DIY mask for extremely dry hair?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most effective DIY mask for extremely dry hair combines avocado, honey, and olive oil. Mash one ripe avocado with 2 tablespoons honey and 1 tablespoon olive oil. Apply to damp hair, cover with a shower cap, and leave for 30-45 minutes. The healthy fats in avocado and humectant properties of honey provide intense hydration that rivals professional treatments."
        }
      },
      {
        "@type": "Question",
        "name": "Can DIY hair masks cause hair damage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When used incorrectly, yes. Protein-rich masks (eggs, gelatin) can cause protein overload, making hair stiff and prone to breakage. Acidic ingredients like lemon juice can damage hair if used undiluted or too frequently. Always patch test new ingredients, follow recommended times, and balance protein treatments with moisturizing masks for optimal hair health."
        }
      },
      {
        "@type": "Question",
        "name": "How do I store leftover DIY hair mask?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most DIY masks should be made fresh for each use as natural ingredients spoil quickly. Oil-based masks (pure coconut or olive oil) can be stored at room temperature. Masks with eggs, dairy, or fresh fruits must be refrigerated and used within 2-3 days. For convenience, freeze banana or avocado in portions for future mask preparation."
        }
      },
      {
        "@type": "Question",
        "name": "Should I apply hair mask before or after shampooing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For most DIY masks, apply to clean, damp hair after shampooing but before conditioning. This allows ingredients to penetrate the hair shaft effectively. However, oil-based pre-wash treatments should be applied to dry hair before shampooing. Deep conditioning masks work best on towel-dried hair that's been gently squeezed to remove excess water."
        }
      },
      {
        "@type": "Question",
        "name": "What kitchen ingredients should I never put in my hair?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Avoid using undiluted lemon juice or citrus (damages cuticle), cinnamon (can burn scalp), baking soda in large amounts (disrupts pH balance), white sugar (too abrasive), hot sauce or spicy peppers, and expired or moldy ingredients. Also avoid artificial food dyes that can stain hair and essential oils without proper dilution."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Make and Apply a DIY Hair Mask",
    "description": "Step-by-step guide to creating and applying homemade hair masks for maximum benefits.",
    "totalTime": "PT45M",
    "image": "/images/blog/woman_applying_hair_mask.webp",
    "supply": [
      { "@type": "HowToSupply", "name": "Ripe avocado" },
      { "@type": "HowToSupply", "name": "Raw honey" },
      { "@type": "HowToSupply", "name": "Coconut oil" },
      { "@type": "HowToSupply", "name": "Olive oil" },
      { "@type": "HowToSupply", "name": "Eggs" },
      { "@type": "HowToSupply", "name": "Plain yogurt" },
      { "@type": "HowToSupply", "name": "Banana" },
      { "@type": "HowToSupply", "name": "Apple cider vinegar" }
    ],
    "tool": [
      { "@type": "HowToTool", "name": "Mixing bowl" },
      { "@type": "HowToTool", "name": "Fork or blender" },
      { "@type": "HowToTool", "name": "Shower cap or plastic wrap" },
      { "@type": "HowToTool", "name": "Wide-tooth comb" },
      { "@type": "HowToTool", "name": "Warm towel" }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Prepare Your Ingredients",
        "text": "Gather all ingredients and bring them to room temperature. Cold ingredients don't penetrate the hair cuticle as effectively. For oil-based masks, gently warm the oils in a microwave-safe bowl for 10-15 seconds."
      },
      {
        "@type": "HowToStep",
        "name": "Mix the Mask",
        "text": "Combine ingredients in a bowl and mix until you achieve a smooth, lump-free consistency. For masks with banana or avocado, use a blender for best results to avoid chunks getting stuck in hair."
      },
      {
        "@type": "HowToStep",
        "name": "Prep Your Hair",
        "text": "Shampoo your hair and gently squeeze out excess water with a microfiber towel. Hair should be damp but not dripping wet. Section your hair into 4-6 parts for even application."
      },
      {
        "@type": "HowToStep",
        "name": "Apply the Mask",
        "text": "Starting from the ends (which are oldest and most damaged), work the mask up toward the mid-lengths. For dry scalp treatments, massage into roots. Avoid roots for moisturizing masks unless specified."
      },
      {
        "@type": "HowToStep",
        "name": "Cover and Wait",
        "text": "Cover hair with a shower cap or plastic wrap. For deeper penetration, wrap a warm towel over the cap - the heat opens the cuticle for better absorption. Leave on for 20-45 minutes depending on the recipe."
      },
      {
        "@type": "HowToStep",
        "name": "Rinse Thoroughly",
        "text": "Rinse with lukewarm water (never hot) until water runs clear. For egg-based masks, use cool water to prevent cooking the protein. Follow with a light conditioner if needed, then style as usual."
      }
    ]
  };

  const recipeSchema = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "name": "Ultimate Hydrating Avocado Honey Hair Mask",
    "description": "A deeply moisturizing DIY hair mask perfect for dry, damaged, or color-treated hair using kitchen ingredients.",
    "image": "/images/blog/avocado_hair_mask.webp",
    "author": {
      "@type": "Organization",
      "name": "HairGen"
    },
    "prepTime": "PT10M",
    "totalTime": "PT45M",
    "recipeYield": "1 application",
    "recipeCategory": "Hair Care",
    "recipeIngredient": [
      "1 ripe avocado",
      "2 tablespoons raw honey",
      "1 tablespoon olive oil or coconut oil",
      "1 tablespoon plain yogurt (optional)"
    ],
    "recipeInstructions": [
      {
        "@type": "HowToStep",
        "text": "Mash the ripe avocado in a bowl until smooth with no lumps."
      },
      {
        "@type": "HowToStep",
        "text": "Add honey and oil, mixing thoroughly until well combined."
      },
      {
        "@type": "HowToStep",
        "text": "Apply to clean, damp hair from mid-length to ends."
      },
      {
        "@type": "HowToStep",
        "text": "Cover with a shower cap and leave for 30-45 minutes."
      },
      {
        "@type": "HowToStep",
        "text": "Rinse thoroughly with lukewarm water and shampoo lightly if needed."
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>DIY Hair Masks: 25+ Recipes for Every Hair Type | Complete Guide 2025</title>
        <meta name="description" content="Discover 25+ homemade hair mask recipes for dry, oily, damaged, curly & color-treated hair. Easy kitchen ingredients, step-by-step instructions. Transform your hair naturally!" />
        <meta name="keywords" content="DIY hair mask, homemade hair mask, hair mask recipe, avocado hair mask, honey hair mask, coconut oil hair mask, hair mask for dry hair, hair mask for damaged hair, natural hair treatment" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <link rel="canonical" href="https://hairgen.com/blog/diy-hair-masks" />
        
        <meta property="og:title" content="DIY Hair Masks: 25+ Recipes for Every Hair Type | Complete Guide 2025" />
        <meta property="og:description" content="Transform your hair with 25+ homemade hair mask recipes. Easy kitchen ingredients, customized for every hair type. Start your natural hair care journey!" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/images/blog/diy_hair_mask_ingredients.webp" />
        <meta property="og:url" content="https://hairgen.com/blog/diy-hair-masks" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DIY Hair Masks: 25+ Recipes for Every Hair Type" />
        <meta name="twitter:description" content="Transform your hair with homemade masks using kitchen ingredients. Recipes for dry, oily, damaged, curly & color-treated hair." />
        <meta name="twitter:image" content="/images/blog/diy_hair_mask_ingredients.webp" />
        
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(recipeSchema)}</script>
      </Helmet>

      <article className="min-h-screen bg-white">
        <div className="relative bg-gradient-to-br from-amber-50 to-green-50 py-16">
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
                <span className="px-4 py-1 bg-amber-500 text-white rounded-full text-sm font-semibold">
                  DIY Care
                </span>
                <span className="px-4 py-1 bg-green-500 text-white rounded-full text-sm font-semibold">
                  Complete Guide
                </span>
                <span className="px-4 py-1 bg-pink-400 text-white rounded-full text-sm font-semibold">
                  25+ Recipes
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                DIY Hair Masks: The Ultimate Guide to Homemade Recipes for Every Hair Type
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your hair care routine with powerful, all-natural hair masks made from ingredients in your kitchen. From deep hydration for dry locks to clarifying treatments for oily scalps, discover 25+ science-backed recipes tailored to your unique hair needs.
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 pt-4">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {readTime}
                </span>
                <span className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  3,800+ words
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-4xl py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            <aside className="lg:col-span-1">
              <div className="sticky top-24 bg-gradient-to-br from-amber-50 to-green-50 rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-amber-600" />
                  Table of Contents
                </h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left text-sm text-gray-600 hover:text-amber-600 hover:bg-white/50 rounded px-2 py-1.5 transition-colors"
                    >
                      {index + 1}. {item.title}
                    </button>
                  ))}
                </nav>

                <div className="mt-6 pt-6 border-t border-amber-200">
                  <Link to="/quiz">
                    <Button className="w-full bg-gradient-to-r from-amber-500 to-green-500 hover:from-amber-600 hover:to-green-600 text-white">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Get Personalized Routine
                    </Button>
                  </Link>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-3 prose prose-lg max-w-none">
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                src="/images/blog/diy_hair_mask_ingredients.webp"
                alt="DIY hair mask ingredients including honey, avocado, coconut oil, and eggs arranged on a wooden table"
                className="w-full rounded-2xl shadow-lg mb-8"
                loading="eager"
              />

              <section id="introduction" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Leaf className="w-8 h-8 text-green-500" />
                  Why DIY Hair Masks Work: The Science Behind Natural Ingredients
                </h2>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  DIY hair masks have been used for centuries across cultures, from ancient Egyptian honey treatments to Ayurvedic coconut oil rituals. Today, scientific research validates what our ancestors knew intuitively: natural ingredients contain powerful compounds that can genuinely transform hair health.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  The key to understanding why homemade masks work lies in the structure of your hair. Each strand consists of three layers: the medulla (innermost core), cortex (middle layer containing proteins and pigment), and cuticle (outer protective scales). When your cuticle is healthy and lies flat, hair appears shiny and smooth. When damaged, raised cuticles create a rough texture that leads to frizz, breakage, and dullness.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Natural ingredients in DIY masks work by penetrating these layers differently. <strong>Oils like coconut and olive</strong> contain fatty acids small enough to enter the cortex, providing deep hydration from within. <strong>Proteins from eggs and yogurt</strong> temporarily bind to the cuticle, filling in gaps and smoothing the surface. <strong>Humectants like honey</strong> draw moisture from the air into your hair shaft.
                </p>

                <div className="bg-gradient-to-r from-amber-50 to-green-50 border-l-4 border-amber-500 p-6 rounded-r-xl my-8">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Star className="w-5 h-5 text-amber-500" />
                    Key Insight
                  </h4>
                  <p className="text-gray-700 m-0">
                    According to research published in the <em>International Journal of Trichology</em>, coconut oil is the only oil proven to significantly reduce protein loss in both damaged and undamaged hair when used as a pre-wash or post-wash treatment. This makes it a cornerstone ingredient in effective DIY hair masks.
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  The beauty of DIY masks is customization. Unlike commercial products formulated for the average consumer, you can tailor ingredients to your specific hair type, concerns, and goals. Whether you're dealing with <Link to="/hair-routine-for-dry-scalp" className="text-amber-600 hover:text-amber-700 font-medium">dry scalp issues</Link>, <Link to="/hair-routine-for-damaged-hair" className="text-amber-600 hover:text-amber-700 font-medium">heat damage recovery</Link>, or need to enhance your <Link to="/hair-routine-for-curly-hair" className="text-amber-600 hover:text-amber-700 font-medium">curly hair routine</Link>, there's a perfect homemade mask waiting to be discovered.
                </p>
              </section>

              <section id="benefits" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Heart className="w-8 h-8 text-pink-500" />
                  Benefits of Homemade Hair Masks
                </h2>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    { title: 'Cost-Effective', desc: 'Kitchen ingredients cost a fraction of salon treatments while delivering comparable results' },
                    { title: 'Chemical-Free', desc: 'No sulfates, parabens, silicones, or synthetic fragrances that can build up and damage hair' },
                    { title: 'Customizable', desc: 'Adjust recipes based on your unique hair type, porosity, and current condition' },
                    { title: 'Fresh & Potent', desc: 'Freshly made masks contain active compounds at peak effectiveness' },
                    { title: 'Environmentally Friendly', desc: 'No plastic packaging, fewer chemicals entering waterways' },
                    { title: 'Gentle on Sensitive Scalps', desc: 'Natural ingredients are less likely to cause irritation or allergic reactions' }
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
                        <p className="text-gray-600 text-sm">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Understanding your <Link to="/blog/hair-porosity-guide" className="text-amber-600 hover:text-amber-700 font-medium">hair porosity</Link> is essential for choosing the right DIY mask ingredients. Low porosity hair benefits from lightweight oils and heat application, while high porosity hair thrives with heavier butters and proteins that seal the cuticle.
                </p>
              </section>

              <section id="dry-hair-masks" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Droplets className="w-8 h-8 text-blue-500" />
                  Best DIY Masks for Dry Hair
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Dry hair lacks sufficient moisture and natural oils, often appearing dull, brittle, and prone to breakage. These masks focus on deep hydration and restoring your hair's natural lipid barrier.
                </p>

                <img
                  src="/images/blog/avocado_hair_mask.webp"
                  alt="Avocado hair mask ingredients including fresh avocado, olive oil, and natural ingredients"
                  className="w-full rounded-2xl shadow-lg mb-8"
                  loading="lazy"
                />

                <div className="bg-white border-2 border-amber-200 rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    Ultimate Hydrating Avocado Honey Mask
                  </h3>
                  <p className="text-gray-600 mb-4">Best for: Severely dry, coarse, or thick hair</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Ingredients:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• 1 ripe avocado (mashed smooth)</li>
                        <li>• 2 tablespoons raw honey</li>
                        <li>• 1 tablespoon extra virgin olive oil</li>
                        <li>• 1 tablespoon plain Greek yogurt</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Instructions:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Blend avocado until completely smooth</li>
                        <li>• Mix in honey, oil, and yogurt</li>
                        <li>• Apply to damp hair, mid-lengths to ends</li>
                        <li>• Cover with shower cap for 30-45 minutes</li>
                        <li>• Rinse with lukewarm water, shampoo lightly</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-green-800 text-sm m-0">
                      <strong>Why it works:</strong> Avocado contains vitamins E, B5, and healthy fats that penetrate the hair shaft. Honey is a natural humectant that locks in moisture. Olive oil provides oleic acid for deep conditioning.
                    </p>
                  </div>
                </div>

                <div className="bg-white border-2 border-amber-200 rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    Banana Coconut Deep Moisture Mask
                  </h3>
                  <p className="text-gray-600 mb-4">Best for: Fine to medium dry hair, split ends</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Ingredients:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• 1 very ripe banana</li>
                        <li>• 2 tablespoons coconut oil (melted)</li>
                        <li>• 1 tablespoon honey</li>
                        <li>• 1 tablespoon coconut milk</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Instructions:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Blend banana until no lumps remain (crucial!)</li>
                        <li>• Mix in warmed coconut oil and other ingredients</li>
                        <li>• Apply from roots to ends</li>
                        <li>• Leave on for 20-30 minutes</li>
                        <li>• Rinse thoroughly, shampoo twice if needed</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-green-800 text-sm m-0">
                      <strong>Why it works:</strong> Bananas are rich in potassium and natural oils that soften hair. Coconut oil is proven to reduce protein loss and penetrate the hair shaft more effectively than other oils.
                    </p>
                  </div>
                </div>

                <div className="bg-white border-2 border-amber-200 rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    Overnight Olive Oil Treatment
                  </h3>
                  <p className="text-gray-600 mb-4">Best for: Extremely dry, straw-like hair needing intensive repair</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Ingredients:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• 3-4 tablespoons extra virgin olive oil</li>
                        <li>• 5-6 drops lavender essential oil (optional)</li>
                        <li>• 1 teaspoon vitamin E oil</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Instructions:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Warm olive oil slightly (not hot)</li>
                        <li>• Add vitamin E and essential oil</li>
                        <li>• Massage into dry hair, focusing on ends</li>
                        <li>• Wrap in silk scarf or old t-shirt</li>
                        <li>• Sleep overnight, shampoo twice in morning</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section id="oily-hair-masks" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Beaker className="w-8 h-8 text-purple-500" />
                  Best DIY Masks for Oily Hair & Scalp
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  If you're battling <Link to="/hair-routine-for-oily-scalp" className="text-amber-600 hover:text-amber-700 font-medium">oily scalp issues</Link>, these masks help balance sebum production, remove buildup, and cleanse without stripping your hair of essential moisture.
                </p>

                <div className="bg-white border-2 border-purple-200 rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    Apple Cider Vinegar Clarifying Rinse
                  </h3>
                  <p className="text-gray-600 mb-4">Best for: Oily scalp with product buildup, limp hair</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Ingredients:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• 2 tablespoons apple cider vinegar</li>
                        <li>• 1 cup cool water</li>
                        <li>• 3 drops tea tree essential oil</li>
                        <li>• 1 tablespoon fresh lemon juice</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Instructions:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Mix all ingredients in a spray bottle</li>
                        <li>• After shampooing, spray onto scalp</li>
                        <li>• Massage gently for 2-3 minutes</li>
                        <li>• Rinse with cool water</li>
                        <li>• Use 1-2 times per week</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-purple-800 text-sm m-0">
                      <strong>Why it works:</strong> ACV has natural antibacterial properties and helps restore scalp pH balance. Tea tree oil has antifungal properties that combat dandruff and buildup. The acidity smooths the cuticle for added shine.
                    </p>
                  </div>
                </div>

                <div className="bg-white border-2 border-purple-200 rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    Egg White & Lemon Purifying Mask
                  </h3>
                  <p className="text-gray-600 mb-4">Best for: Very oily hair needing deep cleanse</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Ingredients:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• 2 egg whites</li>
                        <li>• 1 tablespoon lemon juice (fresh)</li>
                        <li>• 1 teaspoon honey</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Instructions:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Whisk egg whites until slightly foamy</li>
                        <li>• Add lemon juice and honey</li>
                        <li>• Apply to damp hair and scalp</li>
                        <li>• Leave for 15-20 minutes only</li>
                        <li>• Rinse with COOL water (important!)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg">
                    <p className="text-red-800 text-sm m-0 flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span><strong>Warning:</strong> Always rinse egg masks with cool water. Hot water will cook the egg in your hair, making it extremely difficult to remove.</span>
                    </p>
                  </div>
                </div>

                <div className="bg-white border-2 border-purple-200 rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    Green Clay Detox Mask
                  </h3>
                  <p className="text-gray-600 mb-4">Best for: Oily scalp, environmental pollution removal</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Ingredients:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• 2 tablespoons bentonite or French green clay</li>
                        <li>• 3 tablespoons apple cider vinegar</li>
                        <li>• 2 tablespoons aloe vera gel</li>
                        <li>• Water to achieve paste consistency</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Instructions:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Mix clay with ACV (it will fizz - normal!)</li>
                        <li>• Add aloe vera, adjust with water</li>
                        <li>• Apply to scalp only, section by section</li>
                        <li>• Leave 15-20 minutes (don't let it dry fully)</li>
                        <li>• Rinse thoroughly, condition ends</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section id="damaged-hair-masks" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Sparkles className="w-8 h-8 text-orange-500" />
                  Best DIY Masks for Damaged Hair
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Heat styling, chemical treatments, and environmental damage can wreak havoc on your hair. These protein-rich masks help repair and rebuild weakened strands. For a complete <Link to="/hair-routine-for-damaged-hair" className="text-amber-600 hover:text-amber-700 font-medium">damaged hair care routine</Link>, combine these masks with protective daily habits.
                </p>

                <img
                  src="/images/blog/honey_hair_treatment.webp"
                  alt="Honey being drizzled for natural hair treatment with kitchen ingredients"
                  className="w-full rounded-2xl shadow-lg mb-8"
                  loading="lazy"
                />

                <div className="bg-white border-2 border-orange-200 rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    Protein-Packed Egg & Mayonnaise Mask
                  </h3>
                  <p className="text-gray-600 mb-4">Best for: Heat-damaged, over-processed, or bleached hair</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Ingredients:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• 1 whole egg</li>
                        <li>• 2 tablespoons full-fat mayonnaise</li>
                        <li>• 1 tablespoon olive oil</li>
                        <li>• 1 tablespoon honey</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Instructions:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Beat egg and mix with mayonnaise</li>
                        <li>• Add oil and honey, stir well</li>
                        <li>• Apply to damp, detangled hair</li>
                        <li>• Cover with shower cap, leave 20-30 min</li>
                        <li>• Rinse with cool water, shampoo gently</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="text-orange-800 text-sm m-0">
                      <strong>Why it works:</strong> Eggs contain keratin protein that temporarily bonds to damaged hair cuticles, filling in gaps. Mayonnaise contains eggs plus nourishing oils. This mask rebuilds hair structure from outside-in. Use every 2 weeks maximum to avoid <Link to="/blog/hair-porosity-guide" className="text-orange-700 underline">protein overload</Link>.
                    </p>
                  </div>
                </div>

                <div className="bg-white border-2 border-orange-200 rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    Greek Yogurt Repair Mask
                  </h3>
                  <p className="text-gray-600 mb-4">Best for: Brittle, breaking hair with elasticity loss</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Ingredients:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• 1/2 cup full-fat Greek yogurt</li>
                        <li>• 2 tablespoons honey</li>
                        <li>• 1 tablespoon argan oil</li>
                        <li>• 1 egg yolk (for extra damage)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Instructions:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Mix yogurt with honey until smooth</li>
                        <li>• Add argan oil and egg yolk</li>
                        <li>• Apply generously to hair length</li>
                        <li>• Leave 30-40 minutes with heat cap</li>
                        <li>• Rinse with lukewarm water</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-orange-200 rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    Honey & Coconut Oil Bond Repair
                  </h3>
                  <p className="text-gray-600 mb-4">Best for: Color-damaged, porous hair needing moisture seal</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Ingredients:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• 3 tablespoons raw honey</li>
                        <li>• 2 tablespoons coconut oil</li>
                        <li>• 1 tablespoon apple cider vinegar</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Instructions:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Melt coconut oil, mix with honey</li>
                        <li>• Add ACV, stir thoroughly</li>
                        <li>• Apply to dry hair before washing</li>
                        <li>• Leave 45 minutes to 2 hours</li>
                        <li>• Shampoo twice to remove</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section id="color-treated-masks" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Star className="w-8 h-8 text-pink-500" />
                  Best DIY Masks for Color-Treated Hair
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Color-treated hair requires gentle, color-safe ingredients that won't strip or fade your dye. These masks nourish while protecting your color investment. Learn more about protecting color-treated hair from heat in our <Link to="/blog/heat-damage-protection" className="text-amber-600 hover:text-amber-700 font-medium">heat damage protection guide</Link>.
                </p>

                <div className="bg-white border-2 border-pink-200 rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    Avocado & Olive Oil Color Protector
                  </h3>
                  <p className="text-gray-600 mb-4">Best for: All hair colors, especially brunettes and reds</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Ingredients:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• 1 ripe avocado</li>
                        <li>• 2 tablespoons olive oil</li>
                        <li>• 1 tablespoon argan oil</li>
                        <li>• 1 egg yolk</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Instructions:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Blend avocado until creamy</li>
                        <li>• Add oils and egg yolk, mix well</li>
                        <li>• Apply to clean, damp hair</li>
                        <li>• Leave 20-30 minutes</li>
                        <li>• Rinse with cool water</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-pink-200 rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    Coconut Milk & Honey Gloss Treatment
                  </h3>
                  <p className="text-gray-600 mb-4">Best for: Blonde or highlighted hair needing shine boost</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Ingredients:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• 1/2 cup full-fat coconut milk</li>
                        <li>• 2 tablespoons honey</li>
                        <li>• 1 tablespoon coconut oil</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Instructions:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Warm coconut milk slightly</li>
                        <li>• Dissolve honey and oil into milk</li>
                        <li>• Apply from mid-length to ends</li>
                        <li>• Leave 30-45 minutes</li>
                        <li>• Rinse, follow with color-safe conditioner</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 p-6 rounded-xl my-6">
                  <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    Ingredients to Avoid with Color-Treated Hair
                  </h4>
                  <ul className="text-red-700 space-y-1 text-sm">
                    <li>• <strong>Lemon juice:</strong> Can lighten and fade color unevenly</li>
                    <li>• <strong>Baking soda:</strong> Opens cuticle and strips color molecules</li>
                    <li>• <strong>Apple cider vinegar (undiluted):</strong> Too acidic, can fade color</li>
                    <li>• <strong>Chamomile:</strong> Has natural lightening properties</li>
                    <li>• <strong>Hydrogen peroxide:</strong> Will lift color immediately</li>
                  </ul>
                </div>
              </section>

              <section id="curly-hair-masks" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Sparkles className="w-8 h-8 text-indigo-500" />
                  Best DIY Masks for Curly & Coily Hair
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Curly and coily hair (Types 3 and 4 on the <Link to="/blog/hair-types-guide" className="text-amber-600 hover:text-amber-700 font-medium">hair type chart</Link>) needs extra moisture due to the difficulty of natural oils traveling down the hair shaft. These masks provide deep hydration while enhancing curl definition.
                </p>

                <div className="bg-white border-2 border-indigo-200 rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    Flaxseed Gel Curl Defining Mask
                  </h3>
                  <p className="text-gray-600 mb-4">Best for: Type 3A-4C curls needing definition and hold</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Ingredients:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• 1/4 cup flaxseeds</li>
                        <li>• 2 cups water</li>
                        <li>• 1 tablespoon honey</li>
                        <li>• 1 tablespoon argan oil</li>
                        <li>• 5 drops rosemary essential oil</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Instructions:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Boil flaxseeds in water until gel forms</li>
                        <li>• Strain through fine mesh or pantyhose</li>
                        <li>• Mix in honey, oils while warm</li>
                        <li>• Apply to wet hair, scrunch into curls</li>
                        <li>• Air dry or diffuse - don't rinse out</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <p className="text-indigo-800 text-sm m-0">
                      <strong>Pro tip:</strong> Store excess gel in the refrigerator for up to 2 weeks. Add a few drops of vitamin E oil as a natural preservative.
                    </p>
                  </div>
                </div>

                <div className="bg-white border-2 border-indigo-200 rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    Shea Butter Deep Conditioning Treatment
                  </h3>
                  <p className="text-gray-600 mb-4">Best for: Type 4 coily hair, <Link to="/hair-routine-for-high-porosity" className="text-indigo-600 hover:underline">high porosity hair</Link></p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Ingredients:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• 2 tablespoons raw shea butter</li>
                        <li>• 1 tablespoon coconut oil</li>
                        <li>• 1 tablespoon castor oil</li>
                        <li>• 1 mashed banana</li>
                        <li>• 1 tablespoon honey</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Instructions:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Melt shea butter and coconut oil</li>
                        <li>• Add castor oil, blended banana, honey</li>
                        <li>• Apply section by section to damp hair</li>
                        <li>• Cover with plastic cap, apply heat 30-45 min</li>
                        <li>• Rinse with warm water, style as usual</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-indigo-200 rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    Aloe Vera & Coconut Milk Hydrator
                  </h3>
                  <p className="text-gray-600 mb-4">Best for: Lightweight moisture for fine curls, <Link to="/hair-routine-for-low-porosity" className="text-indigo-600 hover:underline">low porosity curly hair</Link></p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Ingredients:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• 1/4 cup pure aloe vera gel</li>
                        <li>• 1/4 cup coconut milk</li>
                        <li>• 1 tablespoon jojoba oil</li>
                        <li>• 1 tablespoon honey</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Instructions:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Blend all ingredients until smooth</li>
                        <li>• Apply to wet hair after cleansing</li>
                        <li>• Detangle with wide-tooth comb</li>
                        <li>• Leave 15-20 minutes with steam or heat cap</li>
                        <li>• Rinse with cool water to seal cuticle</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section id="hair-growth-masks" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Leaf className="w-8 h-8 text-emerald-500" />
                  Best DIY Masks for Hair Growth
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  While no topical treatment can change your genetics, these masks contain ingredients shown to support scalp health and potentially stimulate follicles. Combine with a complete <Link to="/hair-routine-for-hair-growth" className="text-amber-600 hover:text-amber-700 font-medium">hair growth routine</Link> for best results.
                </p>

                <div className="bg-white border-2 border-emerald-200 rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    Rosemary & Castor Oil Scalp Stimulator
                  </h3>
                  <p className="text-gray-600 mb-4">Best for: Thinning hair, receding hairlines, slow growth</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Ingredients:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• 2 tablespoons castor oil</li>
                        <li>• 1 tablespoon coconut oil</li>
                        <li>• 10 drops rosemary essential oil</li>
                        <li>• 5 drops peppermint essential oil</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Instructions:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Mix oils together in a small bowl</li>
                        <li>• Warm slightly (not hot)</li>
                        <li>• Apply to scalp in sections, massage 5-10 min</li>
                        <li>• Leave on 1-2 hours or overnight</li>
                        <li>• Shampoo twice to remove</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <p className="text-emerald-800 text-sm m-0">
                      <strong>Science says:</strong> A 2015 study published in <em>SKINmed Journal</em> found that rosemary oil performed as well as 2% minoxidil for promoting hair growth after 6 months of use, with less scalp itching. <a href="https://pubmed.ncbi.nlm.nih.gov/25842469/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline inline-flex items-center gap-1">View study <ExternalLink className="w-3 h-3" /></a>
                    </p>
                  </div>
                </div>

                <div className="bg-white border-2 border-emerald-200 rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    Onion Juice & Honey Growth Mask
                  </h3>
                  <p className="text-gray-600 mb-4">Best for: Pattern hair loss, alopecia support</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Ingredients:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Juice of 1 medium onion (blended & strained)</li>
                        <li>• 1 tablespoon raw honey</li>
                        <li>• 1 tablespoon coconut oil</li>
                        <li>• 3 drops lavender oil (to mask scent)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Instructions:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Blend onion and strain through cheesecloth</li>
                        <li>• Mix juice with honey, oils</li>
                        <li>• Apply to scalp only (avoid lengths)</li>
                        <li>• Leave 30-60 minutes</li>
                        <li>• Shampoo 2-3 times, use fragrant conditioner</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <p className="text-emerald-800 text-sm m-0">
                      <strong>Research:</strong> A 2002 study in the <em>Journal of Dermatology</em> found that applying onion juice to the scalp twice daily resulted in hair regrowth in 86.9% of participants with alopecia areata after 6 weeks. <a href="https://pubmed.ncbi.nlm.nih.gov/12126069/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline inline-flex items-center gap-1">View study <ExternalLink className="w-3 h-3" /></a>
                    </p>
                  </div>
                </div>

                <div className="bg-white border-2 border-emerald-200 rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    Caffeine & Coconut Energizing Mask
                  </h3>
                  <p className="text-gray-600 mb-4">Best for: Sluggish growth, dull scalp circulation</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Ingredients:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• 2 tablespoons cooled strong brewed coffee</li>
                        <li>• 2 tablespoons coconut oil</li>
                        <li>• 1 tablespoon honey</li>
                        <li>• 1 egg yolk</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Instructions:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Mix all ingredients until smooth</li>
                        <li>• Apply to scalp and hair</li>
                        <li>• Massage scalp for 5 minutes</li>
                        <li>• Leave 20-30 minutes</li>
                        <li>• Rinse with cool water, shampoo</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section id="frizz-control-masks" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Droplets className="w-8 h-8 text-cyan-500" />
                  Best DIY Masks for Frizz Control
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Frizz occurs when the hair cuticle is lifted, allowing moisture from the air to swell the strand. These masks smooth the cuticle and add protective barriers against humidity. For a complete approach, check out our <Link to="/hair-routine-for-frizzy-hair" className="text-amber-600 hover:text-amber-700 font-medium">frizzy hair routine guide</Link>.
                </p>

                <div className="bg-white border-2 border-cyan-200 rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    Coconut Oil & Honey Anti-Frizz Mask
                  </h3>
                  <p className="text-gray-600 mb-4">Best for: Humidity-prone frizz, wavy to curly hair</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Ingredients:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• 3 tablespoons virgin coconut oil</li>
                        <li>• 2 tablespoons honey</li>
                        <li>• 1 tablespoon argan oil</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Instructions:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Melt coconut oil, stir in honey and argan</li>
                        <li>• Apply to dry hair before washing</li>
                        <li>• Focus on ends and frizzy areas</li>
                        <li>• Leave 30-60 minutes</li>
                        <li>• Shampoo as normal, cool water final rinse</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-cyan-200 rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    Avocado & Olive Oil Smoothing Treatment
                  </h3>
                  <p className="text-gray-600 mb-4">Best for: Coarse, thick hair prone to puffiness</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Ingredients:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• 1 ripe avocado</li>
                        <li>• 2 tablespoons olive oil</li>
                        <li>• 1 tablespoon mayonnaise</li>
                        <li>• 1 tablespoon honey</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Instructions:</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>• Blend avocado until completely smooth</li>
                        <li>• Mix in olive oil, mayo, and honey</li>
                        <li>• Apply to clean, damp hair</li>
                        <li>• Cover with shower cap, leave 30 minutes</li>
                        <li>• Rinse with lukewarm water</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section id="application-guide" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Timer className="w-8 h-8 text-blue-500" />
                  How to Apply Hair Masks Correctly
                </h2>

                <img
                  src="/images/blog/woman_applying_hair_mask.webp"
                  alt="Woman applying DIY hair mask to her hair in bathroom"
                  className="w-full rounded-2xl shadow-lg mb-8"
                  loading="lazy"
                />

                <p className="text-gray-700 leading-relaxed mb-6">
                  Proper application technique can make the difference between a mediocre result and salon-quality transformation. Follow these expert steps for maximum benefit:
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    { step: '1', title: 'Start with the Right Hair State', desc: 'For most masks, apply to clean, damp (not soaking wet) hair. Oil-based pre-treatments work better on dry hair before shampooing.' },
                    { step: '2', title: 'Section Your Hair', desc: 'Divide hair into 4-6 sections for even coverage. Use clips to keep sections separate while you work.' },
                    { step: '3', title: 'Apply Strategically', desc: 'For moisturizing masks, focus on mid-lengths to ends. For scalp treatments, massage into roots. For damaged hair, saturate the ends where damage is worst.' },
                    { step: '4', title: 'Use Heat for Better Penetration', desc: 'Cover hair with a plastic cap and wrap with a warm towel, or use a hooded dryer or heat cap. Heat opens the cuticle for deeper ingredient absorption.' },
                    { step: '5', title: 'Time It Right', desc: 'Follow recipe recommendations. More time isn\'t always better - protein masks left too long can make hair stiff and brittle.' },
                    { step: '6', title: 'Rinse Thoroughly', desc: 'Use lukewarm water and rinse until water runs clear. For egg masks, always use cool water. Finish with a cold water rinse to seal the cuticle.' }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 bg-blue-50 p-4 rounded-xl">
                      <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="ingredients-guide" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Apple className="w-8 h-8 text-red-500" />
                  Understanding Key Ingredients
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Knowing what each ingredient does helps you customize masks for your specific needs. Here's your complete guide to the most effective natural hair mask ingredients:
                </p>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-amber-100 to-green-100">
                        <th className="text-left p-4 font-bold text-gray-900">Ingredient</th>
                        <th className="text-left p-4 font-bold text-gray-900">Benefits</th>
                        <th className="text-left p-4 font-bold text-gray-900">Best For</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr><td className="p-4 font-medium">Coconut Oil</td><td className="p-4 text-gray-600">Penetrates hair shaft, reduces protein loss, adds shine</td><td className="p-4 text-gray-600">All hair types, especially damaged</td></tr>
                      <tr className="bg-gray-50"><td className="p-4 font-medium">Honey</td><td className="p-4 text-gray-600">Humectant, attracts and retains moisture, antibacterial</td><td className="p-4 text-gray-600">Dry hair, scalp issues</td></tr>
                      <tr><td className="p-4 font-medium">Avocado</td><td className="p-4 text-gray-600">Rich in vitamins E, B5, healthy fats for deep conditioning</td><td className="p-4 text-gray-600">Dry, damaged, color-treated</td></tr>
                      <tr className="bg-gray-50"><td className="p-4 font-medium">Eggs</td><td className="p-4 text-gray-600">Protein for strength, biotin for growth, lecithin for shine</td><td className="p-4 text-gray-600">Damaged, weak, breaking hair</td></tr>
                      <tr><td className="p-4 font-medium">Olive Oil</td><td className="p-4 text-gray-600">Oleic acid for deep moisturizing, antioxidants</td><td className="p-4 text-gray-600">Dry, thick, coarse hair</td></tr>
                      <tr className="bg-gray-50"><td className="p-4 font-medium">Banana</td><td className="p-4 text-gray-600">Potassium, natural oils, silica for elasticity</td><td className="p-4 text-gray-600">Brittle hair, split ends</td></tr>
                      <tr><td className="p-4 font-medium">Greek Yogurt</td><td className="p-4 text-gray-600">Protein, lactic acid for gentle exfoliation, probiotics</td><td className="p-4 text-gray-600">Dull hair, flaky scalp</td></tr>
                      <tr className="bg-gray-50"><td className="p-4 font-medium">Apple Cider Vinegar</td><td className="p-4 text-gray-600">pH balancing, clarifying, cuticle smoothing</td><td className="p-4 text-gray-600">Oily hair, buildup removal</td></tr>
                      <tr><td className="p-4 font-medium">Aloe Vera</td><td className="p-4 text-gray-600">Hydrating, soothing, contains vitamins A, C, E</td><td className="p-4 text-gray-600">Irritated scalp, fine hair</td></tr>
                      <tr className="bg-gray-50"><td className="p-4 font-medium">Castor Oil</td><td className="p-4 text-gray-600">Ricinoleic acid for growth, thick coating for moisture seal</td><td className="p-4 text-gray-600">Thinning hair, coily types</td></tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  For a deeper dive into natural hair care ingredients and their scientific benefits, read our comprehensive <Link to="/blog/natural-ingredients-for-healthy-hair" className="text-amber-600 hover:text-amber-700 font-medium">10 Natural Ingredients for Healthy Hair guide</Link>.
                </p>
              </section>

              <section id="mistakes-to-avoid" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <AlertCircle className="w-8 h-8 text-red-500" />
                  Common DIY Hair Mask Mistakes to Avoid
                </h2>

                <div className="space-y-4 mb-8">
                  {[
                    { mistake: 'Not blending ingredients smooth enough', fix: 'Chunks of banana or avocado can get stuck in hair. Always use a blender and strain if necessary.' },
                    { mistake: 'Using too much protein', fix: 'Protein overload makes hair stiff and prone to breakage. Limit protein masks to once every 2-4 weeks.' },
                    { mistake: 'Applying to dirty hair', fix: 'Product buildup prevents mask ingredients from penetrating. Shampoo first for best absorption.' },
                    { mistake: 'Rinsing with hot water', fix: 'Hot water opens the cuticle and washes away benefits. Always rinse with lukewarm or cool water.' },
                    { mistake: 'Expecting overnight results', fix: 'DIY masks work gradually. Commit to 4-6 weeks of consistent use before evaluating results.' },
                    { mistake: 'Using wrong ingredients for your hair type', fix: 'Heavy oils can weigh down fine hair. Learn your hair\'s porosity and type for best ingredient matching.' },
                    { mistake: 'Skipping the patch test', fix: 'Even natural ingredients can cause allergic reactions. Test new ingredients on a small skin area first.' },
                    { mistake: 'Leaving masks on too long', fix: 'More isn\'t always better. Protein masks especially can cause damage if left on for hours.' }
                  ].map((item, index) => (
                    <div key={index} className="bg-red-50 border border-red-100 p-4 rounded-xl">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-red-800">{item.mistake}</h4>
                          <p className="text-red-700 text-sm">{item.fix}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="faqs" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <BookOpen className="w-8 h-8 text-amber-500" />
                  Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                  {[
                    { q: 'How often should I use a DIY hair mask?', a: 'For most hair types, once a week is ideal. Dry or damaged hair may benefit from twice-weekly treatments, while oily hair should stick to once every 7-10 days. Over-masking can lead to product buildup and weigh hair down.' },
                    { q: 'Can I leave a homemade hair mask overnight?', a: 'Some oil-based masks (coconut, olive, argan) are safe for overnight use when wrapped in a silk scarf or shower cap. However, masks containing eggs, yogurt, or mayonnaise should never be left on overnight as they can spoil and cause scalp irritation.' },
                    { q: 'Why isn\'t my DIY hair mask working?', a: 'Common reasons include: using the wrong mask for your hair type, not leaving it on long enough, applying to dirty hair, using cold ingredients, or washing out with hot water. DIY masks work gradually - expect results after 4-6 consistent applications.' },
                    { q: 'What\'s the best DIY mask for extremely dry hair?', a: 'The avocado, honey, and olive oil mask is most effective. Mash one ripe avocado with 2 tablespoons honey and 1 tablespoon olive oil. Apply to damp hair for 30-45 minutes. The healthy fats and humectants provide intense hydration.' },
                    { q: 'Can DIY hair masks cause hair damage?', a: 'When used incorrectly, yes. Protein-rich masks can cause protein overload, making hair stiff and brittle. Acidic ingredients like lemon juice can damage hair if used undiluted. Always patch test and follow recommended times.' },
                    { q: 'How do I store leftover DIY hair mask?', a: 'Most DIY masks should be made fresh as natural ingredients spoil quickly. Oil-based masks can be stored at room temperature. Masks with eggs, dairy, or fresh fruits must be refrigerated and used within 2-3 days.' },
                    { q: 'Should I apply hair mask before or after shampooing?', a: 'For most DIY masks, apply to clean, damp hair after shampooing but before conditioning. Oil-based pre-wash treatments should be applied to dry hair before shampooing.' },
                    { q: 'What kitchen ingredients should I never put in my hair?', a: 'Avoid undiluted lemon juice, cinnamon (burns scalp), large amounts of baking soda (disrupts pH), white sugar (too abrasive), hot sauce, and expired or moldy ingredients. Also avoid artificial food dyes.' }
                  ].map((item, index) => (
                    <div key={index} className="bg-gradient-to-r from-amber-50 to-green-50 p-6 rounded-xl">
                      <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
                      <p className="text-gray-700">{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-12 bg-gradient-to-r from-amber-100 to-green-100 p-8 rounded-2xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready for a Personalized Hair Care Routine?</h2>
                <p className="text-gray-700 mb-6">
                  DIY masks work best as part of a complete, personalized hair care routine. Take our quick hair quiz to get customized recommendations based on your unique hair type, porosity, and goals.
                </p>
                <Link to="/quiz">
                  <Button className="bg-gradient-to-r from-amber-500 to-green-500 hover:from-amber-600 hover:to-green-600 text-white text-lg px-8 py-6">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Get Your Free Personalized Routine
                  </Button>
                </Link>
              </section>

              <section className="border-t pt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link to="/blog/natural-ingredients-for-healthy-hair" className="group bg-white border rounded-xl p-4 hover:shadow-lg transition-shadow">
                    <h4 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">10 Natural Ingredients for Healthy Hair</h4>
                    <p className="text-sm text-gray-600">Deep dive into the science behind natural hair care ingredients</p>
                  </Link>
                  <Link to="/blog/hair-porosity-guide" className="group bg-white border rounded-xl p-4 hover:shadow-lg transition-shadow">
                    <h4 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">Understanding Hair Porosity</h4>
                    <p className="text-sm text-gray-600">Learn why porosity matters for choosing the right masks</p>
                  </Link>
                  <Link to="/blog/heat-damage-protection" className="group bg-white border rounded-xl p-4 hover:shadow-lg transition-shadow">
                    <h4 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">Heat Damage Protection Guide</h4>
                    <p className="text-sm text-gray-600">Protect your hair from heat styling damage</p>
                  </Link>
                  <Link to="/blog/seasonal-hair-care" className="group bg-white border rounded-xl p-4 hover:shadow-lg transition-shadow">
                    <h4 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">Seasonal Hair Care Guide</h4>
                    <p className="text-sm text-gray-600">Adapt your masks and routine for every season</p>
                  </Link>
                </div>
              </section>

              <section className="mt-8 pt-8 border-t">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>Last updated: {new Date(updateDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">Share this article:</span>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Share2 className="w-4 h-4" />
                      Share
                    </Button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default DIYHairMasks;