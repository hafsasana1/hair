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

const CurlyHighPorosityRoutine = () => {
  const [openFAQ, setOpenFAQ] = React.useState(null);

  const faqs = [
    {
      question: "What is the best routine for curly hair with high porosity?",
      answer: "The best routine for curly high porosity hair focuses on moisture retention. Use the LOC or LCO method (Liquid, Oil, Cream), incorporate regular protein treatments, and seal with heavier oils to prevent moisture loss through the raised cuticles."
    },
    {
      question: "How often should I wash curly high porosity hair?",
      answer: "Wash curly high porosity hair every 3-5 days. Use a gentle, sulfate-free shampoo or co-wash. High porosity hair absorbs moisture quickly but loses it just as fast, so regular conditioning is essential."
    },
    {
      question: "Why does my high porosity hair dry out so fast?",
      answer: "High porosity hair has raised or damaged cuticles that allow moisture to escape quickly. Combat this by using heavier sealing products, doing regular protein treatments to fill gaps in the cuticle, and avoiding heat styling."
    },
    {
      question: "Which oils work best for high porosity curly hair?",
      answer: "Heavier oils like castor oil, olive oil, and avocado oil work best for sealing high porosity hair. These thicker oils help coat the hair shaft and prevent moisture from escaping through the raised cuticles."
    },
    {
      question: "How often should I do protein treatments?",
      answer: "High porosity curly hair typically benefits from protein treatments every 2-4 weeks. Protein helps fill gaps in the cuticle layer, reducing porosity over time. Always follow with a moisturizing deep conditioner."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Curly Hair Routine – High Porosity Care Plan</title>
        <meta name="description" content="Discover a complete daily and weekly hair routine for Curly hair with High porosity. Expert care tips included." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Curly Hair Routine – High Porosity Care Plan" />
        <meta property="og:description" content="Discover a complete daily and weekly hair routine for Curly hair with High porosity. Expert care tips included." />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="/curly-hair-routine-high-porosity" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
                Curly Hair Routine – High Porosity Care Plan
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Master the art of caring for high porosity curly hair. Learn how to lock in moisture, strengthen your strands, and achieve defined, hydrated curls every day.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Understanding High Porosity Curly Hair</h2>
              <p className="text-gray-700 leading-relaxed">
                Curly hair with high porosity presents unique challenges and opportunities. High porosity means your hair cuticles are raised or have gaps, often due to heat damage, chemical processing, or genetics. While this allows moisture to enter quickly, it also means moisture escapes just as fast, leading to dryness and frizz.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The good news is that high porosity curly hair responds exceptionally well to rich, nourishing treatments. Your curls can absorb heavy butters and oils that might weigh down other hair types. With the right routine focused on sealing in moisture and strengthening the cuticle layer, your curls can thrive.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Understanding your porosity is the first step to transforming your curls. High porosity hair needs extra care, but once you master the techniques, you will be rewarded with soft, defined, and moisturized curls that last between wash days.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Sun className="w-6 h-6 text-yellow-500" />
                Daily Hair Care Routine
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Hydrate with Water</h3>
                    <p className="text-gray-600 mt-1">Begin each morning by misting your curls with water or a water-based leave-in spray. High porosity hair absorbs water quickly, so use this to your advantage by ensuring your strands are hydrated before applying products.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Apply Leave-In Conditioner</h3>
                    <p className="text-gray-600 mt-1">Use a rich, creamy leave-in conditioner to provide lasting moisture. For high porosity hair, look for products with humectants like glycerin combined with emollients to help retain that moisture throughout the day.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Seal with Heavy Oil or Butter</h3>
                    <p className="text-gray-600 mt-1">This step is crucial for high porosity hair. Seal in the moisture with castor oil, olive oil, or shea butter. These heavier products create a barrier that prevents moisture from escaping through your raised cuticles.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Style with Curl Cream and Gel</h3>
                    <p className="text-gray-600 mt-1">Layer a curl cream with a strong-hold gel for defined curls that last. The gel creates a cast that helps seal in moisture and reduce frizz. Scrunch out the crunch once your hair is fully dry.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Moon className="w-6 h-6 text-indigo-500" />
                Nighttime Protection
              </h2>
              <p className="text-gray-700 leading-relaxed">
                High porosity curls need extra protection at night to prevent moisture loss while you sleep. Apply a small amount of oil to your ends before bed to keep them hydrated. Gather your curls into a loose pineapple using a satin scrunchie, then cover with a satin bonnet or sleep on a satin pillowcase.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Consider doing a light baggy method once a week by applying a moisturizer to your hair and covering with a plastic cap under your bonnet. This creates a greenhouse effect that allows your high porosity hair to absorb extra moisture overnight.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-green-500" />
                Weekly Hair Care Routine
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">Wash Day Protocol</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2"><Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> Pre-poo with a heavy oil or butter to protect strands during washing</li>
                    <li className="flex items-start gap-2"><Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> Use lukewarm or cool water to avoid raising cuticles further</li>
                    <li className="flex items-start gap-2"><Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> Cleanse with a gentle, sulfate-free shampoo on the scalp only</li>
                    <li className="flex items-start gap-2"><Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> Deep condition for 30+ minutes with a protein-moisture balanced mask</li>
                    <li className="flex items-start gap-2"><Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> Rinse with cold water to help close the cuticle</li>
                    <li className="flex items-start gap-2"><Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> Apply LCO method: Leave-in, Cream, Oil for maximum sealing</li>
                    <li className="flex items-start gap-2"><Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> Style while hair is soaking wet for best curl definition</li>
                  </ul>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">Bi-Weekly Protein Treatment</h3>
                  <p className="text-gray-600">Every 2-3 weeks, use a protein treatment to help fill gaps in your cuticle layer. This temporarily reduces porosity and helps your hair retain moisture better. Choose treatments with hydrolyzed keratin or silk proteins.</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">Monthly Clarifying</h3>
                  <p className="text-gray-600">Once a month, use a clarifying shampoo to remove product buildup. High porosity hair absorbs products quickly, which can lead to buildup faster than other hair types. Follow immediately with a deep conditioning treatment.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <ShoppingBag className="w-6 h-6 text-pink-500" />
                Product Recommendations
              </h2>
              <p className="text-gray-700 leading-relaxed">
                High porosity curly hair thrives with rich, creamy products that seal and protect. Look for ingredients like shea butter, castor oil, avocado oil, and proteins. Avoid lightweight products that will not provide enough sealing power for your raised cuticles.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <h3 className="font-bold text-gray-900">Cleansers</h3>
                  <p className="text-gray-600 text-sm mt-1">Gentle, sulfate-free shampoos or creamy co-washes that clean without stripping. Look for added oils and butters.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <h3 className="font-bold text-gray-900">Deep Conditioners</h3>
                  <p className="text-gray-600 text-sm mt-1">Rich masks with protein and moisture. Look for keratin, collagen, or silk amino acids combined with butters and oils.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <h3 className="font-bold text-gray-900">Leave-Ins & Creams</h3>
                  <p className="text-gray-600 text-sm mt-1">Thick, creamy leave-ins and styling creams. Anti-humectant products work well in humid weather to prevent frizz.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <h3 className="font-bold text-gray-900">Sealing Oils</h3>
                  <p className="text-gray-600 text-sm mt-1">Heavy oils like castor, olive, and JBCO (Jamaican Black Castor Oil). These seal the cuticle and prevent moisture loss.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Droplets className="w-6 h-6 text-blue-500" />
                FAQs About Curly High Porosity Hair
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
                Want a routine customized to your specific concerns? Take our <Link to="/quiz" className="text-green-600 hover:text-green-700 font-medium underline">hair routine generator quiz</Link> for personalized recommendations. Learn more about porosity in our <Link to="/blog/hair-porosity-guide" className="text-green-600 hover:text-green-700 font-medium underline">complete porosity guide</Link>.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/quiz">
                  <Button className="bg-gradient-to-r from-green-500 to-yellow-400 hover:from-green-600 hover:to-yellow-500 text-white">
                    Take the Quiz
                  </Button>
                </Link>
                <Link to="/hair-routine-for-high-porosity">
                  <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
                    High Porosity Guide
                  </Button>
                </Link>
                <Link to="/hair-routine-for-curly-hair">
                  <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                    Curly Hair Basics
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

export default CurlyHighPorosityRoutine;
