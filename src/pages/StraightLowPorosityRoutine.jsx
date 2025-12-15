import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Sun, 
  Moon, 
  Calendar, 
  Droplets, 
  ShoppingBag,
  ChevronDown,
  ArrowRight,
  Check
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const StraightLowPorosityRoutine = () => {
  const [openFAQ, setOpenFAQ] = React.useState(null);

  const faqs = [
    {
      question: "What is the best routine for straight hair with low porosity?",
      answer: "The best routine for straight low porosity hair uses lightweight, water-based products applied with heat to open the cuticle. Clarify regularly to prevent buildup, use warm water when conditioning, and avoid heavy oils that sit on top of the hair."
    },
    {
      question: "How often should I wash straight low porosity hair?",
      answer: "Wash straight low porosity hair every 2-3 days. Straight hair shows oil more quickly, and low porosity hair is prone to product buildup. Use a gentle clarifying shampoo weekly to remove residue that can make hair look limp."
    },
    {
      question: "Why do products just sit on my low porosity hair?",
      answer: "Low porosity hair has tightly sealed cuticles that resist moisture and product absorption. To help products penetrate, apply to damp hair, use heat (warm water, steam, or a heat cap), and choose lightweight, liquid-based products instead of thick creams."
    },
    {
      question: "Which products work best for straight low porosity hair?",
      answer: "Straight low porosity hair thrives with lightweight, water-based products. Use liquid leave-ins, light oils like argan or jojoba, and products with humectants like glycerin and honey. Avoid heavy butters and thick creams."
    },
    {
      question: "Does low porosity hair need protein treatments?",
      answer: "Low porosity hair often has strong protein bonds and may be protein-sensitive. Only use protein treatments if you notice signs of damage. When you do use them, choose light proteins like silk amino acids and always follow with moisture."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Straight Hair Routine – Low Porosity Care Plan</title>
        <meta name="description" content="Discover a complete daily and weekly hair routine for Straight hair with Low porosity. Expert care tips included." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Straight Hair Routine – Low Porosity Care Plan" />
        <meta property="og:description" content="Discover a complete daily and weekly hair routine for Straight hair with Low porosity. Expert care tips included." />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="/straight-hair-routine-low-porosity" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-r from-slate-500 to-gray-400 rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
                Straight Hair Routine – Low Porosity Care Plan
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Master the art of caring for straight hair with low porosity. Learn how to achieve maximum hydration, add volume, and maintain healthy, shiny strands.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Understanding Straight Low Porosity Hair</h2>
              <p className="text-gray-700 leading-relaxed">
                Straight hair, classified as Type 1 hair, has no natural curl pattern and tends to be the shiniest hair type due to how easily sebum travels down the hair shaft. When combined with low porosity, your hair has tightly sealed cuticles that resist absorbing moisture and products.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Low porosity straight hair can feel frustrating because products often sit on top of the hair rather than absorbing in. This leads to buildup, limpness, and a greasy appearance. However, once you understand how to work with your hair's characteristics, you can achieve beautiful, healthy, shiny results.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The key to thriving low porosity straight hair is using lightweight products, incorporating heat to open the cuticle, and clarifying regularly to prevent buildup. With the right approach, your hair will be hydrated, voluminous, and full of natural shine.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Sun className="w-6 h-6 text-yellow-500" />
                Daily Hair Care Routine
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl">
                  <div className="w-8 h-8 bg-slate-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Gentle Morning Refresh</h3>
                    <p className="text-gray-600 mt-1">Straight hair often looks its best without much manipulation. In the morning, simply brush through to distribute natural oils from roots to ends. This adds shine and prevents oil from accumulating at the scalp.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl">
                  <div className="w-8 h-8 bg-slate-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Light Leave-In Application</h3>
                    <p className="text-gray-600 mt-1">If your ends feel dry, apply a small amount of liquid leave-in conditioner to the ends only. Use a spray or very lightweight formula. Avoid applying near the roots to prevent limpness and oily appearance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl">
                  <div className="w-8 h-8 bg-slate-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Heat Protection</h3>
                    <p className="text-gray-600 mt-1">If you style with heat, always apply a lightweight heat protectant spray. For low porosity hair, spray formulas work better than creams as they do not cause buildup. Apply evenly through mid-lengths and ends.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl">
                  <div className="w-8 h-8 bg-slate-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Volume Boost (Optional)</h3>
                    <p className="text-gray-600 mt-1">For added volume, use a volumizing powder or spray at the roots. Low porosity hair can go flat quickly, so lifting at the roots helps maintain body throughout the day.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Moon className="w-6 h-6 text-indigo-500" />
                Nighttime Hair Care
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Straight hair is less prone to tangling than curly or wavy hair, but overnight care still matters. Brush through your hair before bed to remove any tangles and distribute oils. If you want to add volume for the next day, loosely braid your hair or wrap it in a silk scarf.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Sleep on a silk or satin pillowcase to reduce friction and maintain smoothness. This is especially important for low porosity hair, which can become static-prone and flyaway with cotton pillowcases. The smooth surface also helps preserve any styling from the previous day.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-green-500" />
                Weekly Hair Care Routine
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">Wash Day (Every 2-3 Days)</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2"><Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> Use warm water to help open the cuticle for better product absorption</li>
                    <li className="flex items-start gap-2"><Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> Massage a gentle, sulfate-free shampoo into the scalp</li>
                    <li className="flex items-start gap-2"><Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> Apply lightweight conditioner to mid-lengths and ends only</li>
                    <li className="flex items-start gap-2"><Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> Leave conditioner on for 3-5 minutes under warm water</li>
                    <li className="flex items-start gap-2"><Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> Rinse thoroughly with cool water to seal the cuticle and add shine</li>
                    <li className="flex items-start gap-2"><Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> Squeeze out excess water and apply a light leave-in spray</li>
                  </ul>
                </div>
                <div className="p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">Weekly Clarifying (Essential for Low Porosity)</h3>
                  <p className="text-gray-600">Once a week, use a clarifying shampoo to remove product buildup. Low porosity hair is especially prone to buildup since products sit on the surface. This step is crucial for maintaining volume and preventing limp, greasy-looking hair.</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">Monthly Deep Conditioning with Heat</h3>
                  <p className="text-gray-600">Once a month, use a lightweight deep conditioner with a heat cap or steamer. The heat opens the cuticle, allowing the treatment to penetrate. Keep treatments light to avoid protein overload, which low porosity hair is susceptible to.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <ShoppingBag className="w-6 h-6 text-pink-500" />
                Product Recommendations
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Low porosity straight hair needs lightweight, water-based products that will not cause buildup. Avoid heavy oils, butters, and thick creams. Look for products with humectants like glycerin and honey that attract moisture without coating the hair.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <h3 className="font-bold text-gray-900">Cleansers</h3>
                  <p className="text-gray-600 text-sm mt-1">Gentle clarifying shampoos and lightweight sulfate-free options. Clarify weekly to prevent the buildup that plagues low porosity hair.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <h3 className="font-bold text-gray-900">Conditioners</h3>
                  <p className="text-gray-600 text-sm mt-1">Lightweight, liquid conditioners without heavy silicones. Look for ingredients like aloe vera, glycerin, and light botanical extracts.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <h3 className="font-bold text-gray-900">Leave-Ins</h3>
                  <p className="text-gray-600 text-sm mt-1">Spray leave-ins and light serums. Avoid cream-based leave-ins which can weigh down straight hair and cause buildup on low porosity strands.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <h3 className="font-bold text-gray-900">Oils</h3>
                  <p className="text-gray-600 text-sm mt-1">Light oils like argan, jojoba, or grapeseed. Apply sparingly to ends only. Avoid coconut oil which can cause buildup on low porosity hair.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Droplets className="w-6 h-6 text-blue-500" />
                FAQs About Straight Low Porosity Hair
              </h2>
              <div className="divide-y divide-gray-100">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="py-4">
                    <button
                      onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                      className="w-full flex items-center justify-between text-left"
                    >
                      <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                      <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFAQ === idx ? 'rotate-180' : ''}`} />
                    </button>
                    {openFAQ === idx && (
                      <p className="mt-3 text-gray-600 leading-relaxed">{faq.answer}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <ArrowRight className="w-6 h-6 text-green-500" />
                Explore More Resources
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Get a personalized routine based on your specific concerns with our <Link to="/quiz" className="text-green-600 hover:text-green-700 font-medium underline">hair routine generator quiz</Link>. Learn more about low porosity hair in our <Link to="/hair-routine-for-low-porosity" className="text-green-600 hover:text-green-700 font-medium underline">low porosity guide</Link> and <Link to="/blog/hair-porosity-guide" className="text-green-600 hover:text-green-700 font-medium underline">complete porosity guide</Link>.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/quiz">
                  <Button className="bg-gradient-to-r from-green-500 to-yellow-400 hover:from-green-600 hover:to-yellow-500 text-white">
                    Take the Quiz
                  </Button>
                </Link>
                <Link to="/hair-routine-for-straight-hair">
                  <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
                    Straight Hair Guide
                  </Button>
                </Link>
                <Link to="/hair-routine-for-low-porosity">
                  <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                    Low Porosity Tips
                  </Button>
                </Link>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </>
  );
};

export default StraightLowPorosityRoutine;
