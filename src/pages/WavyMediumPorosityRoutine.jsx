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

const WavyMediumPorosityRoutine = () => {
  const [openFAQ, setOpenFAQ] = React.useState(null);

  const faqs = [
    {
      question: "What is the best routine for wavy hair with medium porosity?",
      answer: "The best routine for wavy medium porosity hair focuses on enhancing your natural wave pattern while maintaining moisture balance. Use lightweight products that define waves without weighing them down, and refresh between wash days with a wave spray."
    },
    {
      question: "How often should I wash wavy medium porosity hair?",
      answer: "Wash wavy medium porosity hair every 2-3 days or as needed. Use a gentle, sulfate-free shampoo to cleanse without stripping natural oils. Your waves will look best on day 2 or 3 when natural oils enhance definition."
    },
    {
      question: "Why do my waves fall flat throughout the day?",
      answer: "Waves can fall flat due to heavy products, humidity, or lack of hold. Use lightweight mousses and gels instead of heavy creams. Apply products to soaking wet hair and scrunch to encourage wave formation. Sleep with a pineapple to maintain volume."
    },
    {
      question: "Which products work best for medium porosity wavy hair?",
      answer: "Medium porosity wavy hair works well with a variety of products. Focus on lightweight leave-ins, wave-enhancing mousses, and medium-hold gels. Avoid heavy butters and oils that can weigh down your waves."
    },
    {
      question: "Should I brush my wavy hair?",
      answer: "Only brush wavy hair when wet and saturated with conditioner. Brushing dry wavy hair disrupts the wave pattern and causes frizz. Use a wide-tooth comb or detangling brush in the shower, then scrunch to reform waves."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Wavy Hair Routine – Medium Porosity Care Plan</title>
        <meta name="description" content="Discover a complete daily and weekly hair routine for Wavy hair with Medium porosity. Expert care tips included." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Wavy Hair Routine – Medium Porosity Care Plan" />
        <meta property="og:description" content="Discover a complete daily and weekly hair routine for Wavy hair with Medium porosity. Expert care tips included." />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="/wavy-hair-routine-medium-porosity" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-r from-sky-500 to-blue-400 rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
                Wavy Hair Routine – Medium Porosity Care Plan
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Unlock the full potential of your wavy hair with this complete care guide. Learn how to enhance your natural waves, prevent frizz, and achieve beachy, bouncy texture.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Understanding Wavy Medium Porosity Hair</h2>
              <p className="text-gray-700 leading-relaxed">
                Wavy hair, classified as Type 2 hair, falls between straight and curly on the texture spectrum. It features loose, S-shaped waves that can range from barely there to defined beach waves. When combined with medium porosity, your hair has an ideal cuticle structure that absorbs and retains moisture well.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Medium porosity wavy hair is often the most versatile combination. Your waves respond well to a variety of products and techniques, making it easier to achieve different looks. The key challenge for wavy hair is maintaining definition and volume while preventing frizz and flatness.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Many people with wavy hair do not realize they have waves because brushing disrupts the pattern. Once you embrace wave-friendly techniques like scrunching and diffusing, your natural texture will emerge beautifully. With the right routine, your waves will be defined, bouncy, and full of life.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Sun className="w-6 h-6 text-yellow-500" />
                Daily Hair Care Routine
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl">
                  <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Refresh with Water Spray</h3>
                    <p className="text-gray-600 mt-1">On non-wash days, revive your waves by misting with plain water or a water-based wave refresher spray. Scrunch gently to reactivate your wave pattern and reduce frizz from sleeping.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl">
                  <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Apply Light Leave-In</h3>
                    <p className="text-gray-600 mt-1">Use a lightweight leave-in conditioner or wave spray on damp hair. Focus on the mid-lengths and ends. Avoid heavy products at the roots which can weigh down your waves and cause flatness.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl">
                  <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Scrunch and Style</h3>
                    <p className="text-gray-600 mt-1">Scrunch your waves upward to encourage wave formation. If needed, add a small amount of mousse or light gel. Avoid touching your hair while it dries to prevent frizz and maintain definition.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl">
                  <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Air Dry or Diffuse</h3>
                    <p className="text-gray-600 mt-1">Let your waves air dry for the softest result, or use a diffuser on low heat for faster drying with more volume. Cup sections in the diffuser bowl and bring up to your head rather than moving the dryer around.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Moon className="w-6 h-6 text-indigo-500" />
                Nighttime Wave Protection
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Preserve your waves overnight with the pineapple method. Gather your hair loosely at the top of your head with a silk or satin scrunchie. This keeps waves stretched and prevents them from being crushed while you sleep. Use a satin pillowcase for added protection against frizz and breakage.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If your waves tend to fall flat, try sleeping with your hair in loose braids or twists. In the morning, gently undo them for refreshed, enhanced waves. This method can help train your waves and give them extra definition on day 2 and beyond.
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
                    <li className="flex items-start gap-2"><Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> Cleanse with a lightweight sulfate-free shampoo at the scalp</li>
                    <li className="flex items-start gap-2"><Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> Apply conditioner to mid-lengths and ends only</li>
                    <li className="flex items-start gap-2"><Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> Detangle with a wide-tooth comb while conditioner is in</li>
                    <li className="flex items-start gap-2"><Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> Rinse with cool water to enhance shine</li>
                    <li className="flex items-start gap-2"><Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> Apply styling products to soaking wet hair</li>
                    <li className="flex items-start gap-2"><Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> Scrunch and air dry or diffuse on low heat</li>
                  </ul>
                </div>
                <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">Weekly Deep Conditioning</h3>
                  <p className="text-gray-600">Once a week, use a lightweight deep conditioner or hair mask. Leave on for 10-15 minutes (no heat needed for medium porosity). This maintains moisture balance without weighing down your waves.</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">Bi-Weekly Clarifying</h3>
                  <p className="text-gray-600">Every 2-3 weeks, use a clarifying shampoo to remove product buildup. Wavy hair styling products can accumulate and weigh down your waves. Follow with a moisturizing conditioner.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <ShoppingBag className="w-6 h-6 text-pink-500" />
                Product Recommendations
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Wavy hair with medium porosity does best with lightweight, water-based products. Avoid heavy butters and oils that can stretch out your waves. Look for products specifically designed for wavy or fine curly hair.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <h3 className="font-bold text-gray-900">Cleansers</h3>
                  <p className="text-gray-600 text-sm mt-1">Lightweight sulfate-free shampoos that cleanse without stripping. Avoid heavy co-washes which can weigh down waves.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <h3 className="font-bold text-gray-900">Conditioners</h3>
                  <p className="text-gray-600 text-sm mt-1">Silicone-free conditioners that provide moisture without coating. Look for ingredients like aloe and glycerin.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <h3 className="font-bold text-gray-900">Styling Products</h3>
                  <p className="text-gray-600 text-sm mt-1">Lightweight mousses, sea salt sprays, and wave-enhancing creams. Medium-hold gels work well for definition.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <h3 className="font-bold text-gray-900">Refreshers</h3>
                  <p className="text-gray-600 text-sm mt-1">Water-based wave refresher sprays for reviving day 2 and 3 waves. DIY with water and a few drops of leave-in conditioner.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Droplets className="w-6 h-6 text-blue-500" />
                FAQs About Wavy Medium Porosity Hair
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
                Get a personalized routine tailored to your specific goals with our <Link to="/quiz" className="text-green-600 hover:text-green-700 font-medium underline">hair routine generator quiz</Link>. For more wave-specific tips, check out our <Link to="/hair-routine-for-wavy-hair" className="text-green-600 hover:text-green-700 font-medium underline">wavy hair guide</Link> and <Link to="/blog/hair-porosity-guide" className="text-green-600 hover:text-green-700 font-medium underline">porosity guide</Link>.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/quiz">
                  <Button className="bg-gradient-to-r from-green-500 to-yellow-400 hover:from-green-600 hover:to-yellow-500 text-white">
                    Take the Quiz
                  </Button>
                </Link>
                <Link to="/hair-routine-for-2b-hair">
                  <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
                    2B Hair Guide
                  </Button>
                </Link>
                <Link to="/blog/hair-types-guide">
                  <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                    Hair Types Guide
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

export default WavyMediumPorosityRoutine;
