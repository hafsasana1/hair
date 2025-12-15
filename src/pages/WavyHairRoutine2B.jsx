import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Wind, 
  Droplet, 
  XCircle, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Sun,
  Moon,
  Clock,
  Star,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const WavyHairRoutine2B = () => {
  const wavyTypes = [
    { type: '2A Hair', desc: 'Very loose, almost straight waves. Often appears straight when wet and shows subtle texture when dry.', tips: 'Use the lightest products to avoid weighing down waves.' },
    { type: '2B Hair', desc: 'Defined S-shaped waves that start from the mid-length. More texture than 2A but not quite curly.', tips: 'Mousse and lightweight gels work best for definition.' },
    { type: '2C Hair', desc: 'Thick waves with some spiral curls mixed in. Closest to Type 3 curly hair.', tips: 'Can handle slightly richer products than 2A and 2B.' }
  ];

  const refreshTips = [
    'Mist hair lightly with water - don\'t soak it',
    'Add a tiny amount of mousse to scrunch waves back',
    'Use a diffuser on cool setting to revive volume',
    'Avoid re-wetting completely as this can cause frizz'
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Complete Wavy Hair Routine Guide (2A-2C): Expert Tips for Beautiful Waves",
        "description": "Discover the ultimate wavy hair care routine for 2A, 2B, and 2C hair types. Learn product recommendations, styling techniques, and daily care tips from hair experts.",
        "author": {
          "@type": "Organization",
          "name": "Hair Routine Generator"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Hair Routine Generator",
          "url": "https://hairroutinegen.com"
        },
        "datePublished": "2024-01-15",
        "dateModified": "2024-12-14",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://hairroutinegen.com/hair-routine-for-wavy-hair"
        }
      },
      {
        "@type": "HowTo",
        "name": "How to Care for Wavy Hair (2A-2C)",
        "description": "Step-by-step guide to washing, conditioning, and styling wavy hair for maximum definition and minimal frizz",
        "totalTime": "PT30M",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Lightweight Cleanse",
            "text": "Use a gentle, sulfate-free shampoo that won't strip natural oils or leave heavy residue."
          },
          {
            "@type": "HowToStep",
            "name": "Condition from Ears Down",
            "text": "Apply lightweight conditioner from ears to ends, skipping roots to maintain volume."
          },
          {
            "@type": "HowToStep",
            "name": "Squish to Condish",
            "text": "Cup water in hands and scrunch upward to encourage wave clumping."
          },
          {
            "@type": "HowToStep",
            "name": "Apply Mousse",
            "text": "Apply mousse to soaking wet hair and scrunch upward for hold without weight."
          },
          {
            "@type": "HowToStep",
            "name": "Diffuse or Air Dry",
            "text": "Air dry for natural texture or diffuse for added volume using low heat."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How often should I wash wavy hair?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most people with wavy hair do well washing every 2-3 days. Washing too often can dry out your hair, while waiting too long can lead to buildup that weighs down waves."
            }
          },
          {
            "@type": "Question",
            "name": "Should I brush wavy hair?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Only brush wavy hair when it's wet and coated with conditioner. Brushing dry wavy hair breaks up the wave pattern and creates instant frizz."
            }
          },
          {
            "@type": "Question",
            "name": "What products are best for wavy hair?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Lightweight products like mousse and water-based gels work best for wavy hair. Avoid heavy butters and oils that can weigh down waves."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Wavy Hair Routine (2A-2C): Complete Care Guide for Beautiful Waves</title>
        <meta name="description" content="Discover the perfect wavy hair routine for 2A, 2B, and 2C hair types. Expert tips on products, styling techniques, and daily care for frizz-free, defined waves. Free personalized routine!" />
        <meta name="keywords" content="wavy hair routine, 2A hair care, 2B hair routine, 2C wavy hair, wavy hair products, how to style wavy hair, wavy hair tips, reduce frizz wavy hair" />
        <link rel="canonical" href="https://hairroutinegen.com/hair-routine-for-wavy-hair" />
        <meta property="og:title" content="Wavy Hair Routine (2A-2C): Complete Care Guide | Hair Routine Generator" />
        <meta property="og:description" content="Learn how to enhance your natural waves with our expert wavy hair routine. Perfect for 2A, 2B, and 2C hair types." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://hairroutinegen.com/hair-routine-for-wavy-hair" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-teal-50 via-cyan-50 to-white py-20 border-b border-teal-100">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm text-teal-700 text-sm font-semibold mb-6">
                  <Wind className="w-4 h-4" /> Wavy Hair Series
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  The Perfect <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">Wavy Hair Routine</span> (2A-2C)
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Wavy hair sits beautifully between straight and curly, with those lovely S-shaped patterns that many people desire. Whether you have loose 2A waves or defined 2C texture, this guide will help you bring out your natural waves and keep them looking their best all day.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-5 h-5 text-teal-500" />
                    <span className="text-sm font-medium">10 min read</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-sm font-medium">Expert Reviewed</span>
                  </div>
                </div>
                <Link to="/quiz">
                  <Button size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold hover:shadow-lg transition-all">
                    Get Your Personalized Routine <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <img 
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600" 
                  alt="Beautiful wavy hair texture showing natural S-shaped wave pattern" 
                  className="rounded-2xl shadow-2xl w-full object-cover"
                  loading="eager"
                />
                <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-teal-200 rounded-full blur-3xl opacity-50 -z-10"></div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Understanding Wavy Hair Types</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Not all waves are created equal. Understanding where your hair falls on the spectrum helps you choose the right products and techniques.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {wavyTypes.map((wave, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl border border-teal-100"
                >
                  <Wind className="w-10 h-10 text-teal-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-teal-700">{wave.type}</h3>
                  <p className="text-gray-600 mb-4">{wave.desc}</p>
                  <p className="text-sm text-teal-600 font-medium">{wave.tips}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Characteristics of Wavy Hair</h2>
                <p className="text-gray-600">Wavy hair has unique properties that require a specific approach. Understanding these characteristics helps you work with your natural texture instead of against it.</p>
                <ul className="space-y-4">
                  {[
                    "Waves usually start a few inches from the roots, not at the scalp",
                    "Easily weighed down by heavy oils, butters, and creams",
                    "Prone to frizz, especially in humid conditions",
                    "Can look flat or limp without proper styling products",
                    "Benefits from lightweight, water-based formulas"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-teal-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Common Wavy Hair Mistakes</h3>
                <ul className="space-y-4">
                  {[
                    "Using heavy butters or oils that weigh waves down",
                    "Brushing hair when dry - this destroys wave pattern",
                    "Skipping hold products like mousse or gel",
                    "Washing too infrequently leading to scalp buildup",
                    "Applying conditioner to the roots",
                    "Using too much product - less is more for waves"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Your Complete Wavy Hair Routine</h2>
            
            <div className="space-y-10">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">1</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Lightweight Cleanse</h3>
                  <p className="text-gray-600 mb-4">Use a gentle, sulfate-free shampoo that won't strip your natural oils or leave heavy residue. Wavy hair does best with clear or translucent shampoos rather than thick, creamy formulas that can weigh down your waves.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">2</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Condition from Ears Down</h3>
                  <p className="text-gray-600 mb-4">Apply a lightweight conditioner from your ears to your ends. Skip the roots entirely to maintain volume. While conditioner is in, detangle gently with a wide-tooth comb or your fingers.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">3</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Squish to Condish</h3>
                  <p className="text-gray-600 mb-4">Before rinsing, cup water in your hands and scrunch it upward into your hair. This technique encourages your waves to clump together and start forming their pattern while still in the shower.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">4</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Apply Mousse (Not Cream)</h3>
                  <p className="text-gray-600 mb-4">For wavy hair, mousse is usually better than cream. It provides hold and volume without the weight. Apply to soaking wet hair and scrunch upward. A small amount of lightweight gel can work too.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 bg-teal-700 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">5</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Diffuse or Air Dry</h3>
                  <p className="text-gray-600 mb-4">Air drying maintains natural texture, but diffusing adds volume. If using a diffuser, flip your head upside down and cup sections of hair toward your scalp. Use low heat to avoid frizz and damage.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Sun className="w-12 h-12 text-yellow-300 mb-6" />
                <h2 className="text-3xl font-bold mb-4">Refreshing Day-Old Waves</h2>
                <p className="text-teal-100 mb-6">Wavy hair can last multiple days with the right refresh technique. Here's how to revive your waves without starting over:</p>
                <ul className="space-y-3">
                  {refreshTips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <Moon className="w-10 h-10 text-teal-200 mb-4" />
                <h3 className="font-bold text-xl mb-4">Overnight Protection</h3>
                <p className="text-teal-100 mb-4">How you sleep affects your waves. Try these methods to wake up with better texture:</p>
                <ul className="space-y-2 text-sm text-teal-100">
                  <li>• Sleep on a silk or satin pillowcase</li>
                  <li>• Try a loose pineapple ponytail on top of your head</li>
                  <li>• Consider a loose braid for more texture in the morning</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Quiz CTA Mid-Section */}
        <section className="py-12 bg-gradient-to-r from-teal-500 to-cyan-500">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-6 h-6" />
                  <span className="font-semibold">Get Personalized Results</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Not Sure Which Products Suit Your Waves?</h3>
                <p className="text-teal-100">Take our 60-second quiz to get customized product recommendations for your specific wave pattern and hair porosity.</p>
              </div>
              <Link to="/quiz">
                <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 font-bold whitespace-nowrap">
                  Start Free Quiz <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Wavy Hair FAQs</h2>
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-lg mb-2">My waves fall flat by midday. What am I doing wrong?</h3>
                <p className="text-gray-600">This usually happens when products are too heavy or you're not using enough hold. Try switching from creams to mousse, and make sure you're applying to soaking wet hair (not just damp). A lightweight gel can also help waves hold their shape longer.</p>
              </div>
              <div className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-lg mb-2">Should I brush my wavy hair?</h3>
                <p className="text-gray-600">Only when it's wet and coated with conditioner. Brushing dry wavy hair breaks up the wave pattern and creates instant frizz. If you need to detangle between washes, use a wide-tooth comb on damp hair or spritz with water first.</p>
              </div>
              <div className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-lg mb-2">How often should I wash wavy hair?</h3>
                <p className="text-gray-600">Most people with wavy hair do well washing every 2-3 days. Washing too often can dry out your hair, while waiting too long can lead to buildup that weighs down waves. Listen to your hair and adjust based on how it looks and feels.</p>
              </div>
              <div className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-lg mb-2">Can I use curly hair products on my waves?</h3>
                <p className="text-gray-600">Some curly hair products work great, but many are too heavy for waves. Look for products labeled "lightweight" or specifically designed for wavy hair. Avoid anything with heavy butters like shea butter or thick oils like castor oil as primary ingredients.</p>
              </div>
              <div className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-lg mb-2">Why does my wavy hair look different wet vs. dry?</h3>
                <p className="text-gray-600">This is completely normal for wavy hair. Waves tend to relax and elongate as they dry, especially if your hair is on the finer side. Using the right styling products and technique helps your waves hold their shape as they dry.</p>
              </div>
              <div className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-lg mb-2">Is it better to air dry or diffuse wavy hair?</h3>
                <p className="text-gray-600">Both work well - it depends on your goals. Air drying is healthier and gives a more relaxed wave pattern. Diffusing adds volume and can enhance wave definition, but use low heat to avoid frizz. Many wavies prefer diffusing their roots for volume and air drying the rest.</p>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Explore More Hair Care Guides</h3>
              <p className="text-gray-600 mb-6">Continue your hair care journey with these related resources:</p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                <Link to="/hair-routine-for-frizzy-hair" className="bg-amber-50 p-4 rounded-xl border border-amber-100 hover:shadow-md transition-all group">
                  <h4 className="font-bold text-amber-700 group-hover:text-amber-800">Frizzy Hair Solutions</h4>
                  <p className="text-sm text-gray-600">Control frizz and smooth your texture</p>
                </Link>
                <Link to="/hair-routine-for-curly-hair" className="bg-purple-50 p-4 rounded-xl border border-purple-100 hover:shadow-md transition-all group">
                  <h4 className="font-bold text-purple-700 group-hover:text-purple-800">Curly Hair Routine</h4>
                  <p className="text-sm text-gray-600">Care tips for type 3 curls</p>
                </Link>
                <Link to="/hair-routine-for-low-porosity" className="bg-emerald-50 p-4 rounded-xl border border-emerald-100 hover:shadow-md transition-all group">
                  <h4 className="font-bold text-emerald-700 group-hover:text-emerald-800">Low Porosity Care</h4>
                  <p className="text-sm text-gray-600">Tips for moisture-resistant hair</p>
                </Link>
                <Link to="/hair-growth-routine" className="bg-pink-50 p-4 rounded-xl border border-pink-100 hover:shadow-md transition-all group">
                  <h4 className="font-bold text-pink-700 group-hover:text-pink-800">Hair Growth Tips</h4>
                  <p className="text-sm text-gray-600">Maximize your growth potential</p>
                </Link>
                <Link to="/hair-routine-for-straight-hair" className="bg-blue-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition-all group">
                  <h4 className="font-bold text-blue-700 group-hover:text-blue-800">Straight Hair Care</h4>
                  <p className="text-sm text-gray-600">Routines for type 1 hair</p>
                </Link>
                <Link to="/hair-routine-for-oily-scalp" className="bg-lime-50 p-4 rounded-xl border border-lime-100 hover:shadow-md transition-all group">
                  <h4 className="font-bold text-lime-700 group-hover:text-lime-800">Oily Scalp Solutions</h4>
                  <p className="text-sm text-gray-600">Balance and cleanse your scalp</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 text-center bg-gradient-to-br from-teal-50 to-cyan-50">
          <div className="container mx-auto px-4">
            <Sparkles className="w-12 h-12 text-teal-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Product Recommendations for Your Waves</h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">Not all products work for waves. Find out exactly which brands suit your hair density and porosity level.</p>
            <Link to="/quiz">
              <Button size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold hover:shadow-lg transition-all">
                Get Personalized Recommendations
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default WavyHairRoutine2B;
