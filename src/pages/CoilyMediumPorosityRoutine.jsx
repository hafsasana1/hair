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

const CoilyMediumPorosityRoutine = () => {
  const [openFAQ, setOpenFAQ] = React.useState(null);

  const faqs = [
    {
      question: "What is the best routine for coily hair with medium porosity?",
      answer: "The best routine for coily medium porosity hair includes gentle cleansing once a week, deep conditioning with heat, daily moisturizing with the LOC method, and protective styling. Focus on maintaining moisture balance while avoiding product buildup."
    },
    {
      question: "How often should I wash coily medium porosity hair?",
      answer: "Wash coily medium porosity hair once a week or every 5-7 days. Use a sulfate-free shampoo or co-wash to cleanse without stripping natural oils. Follow with a deep conditioner for optimal moisture retention."
    },
    {
      question: "Which products work best for medium porosity coily hair?",
      answer: "Medium porosity coily hair responds well to a variety of products. Use water-based leave-ins, medium-weight oils like jojoba or sweet almond, and creamy stylers. Balance protein and moisture treatments monthly."
    },
    {
      question: "How do I prevent shrinkage in coily hair?",
      answer: "While shrinkage is natural and healthy, you can reduce it by stretching methods like banding, threading, or twist-outs. Apply styling products to soaking wet hair and allow to air dry or use a diffuser on low heat."
    },
    {
      question: "Does medium porosity hair need protein treatments?",
      answer: "Yes, medium porosity hair benefits from occasional protein treatments every 4-6 weeks. This helps maintain the protein-moisture balance. Look for products with hydrolyzed proteins and always follow with a moisturizing deep conditioner."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Coily Hair Routine – Medium Porosity Care Plan</title>
        <meta name="description" content="Discover a complete daily and weekly hair routine for Coily hair with Medium porosity. Expert care tips included." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Coily Hair Routine – Medium Porosity Care Plan" />
        <meta property="og:description" content="Discover a complete daily and weekly hair routine for Coily hair with Medium porosity. Expert care tips included." />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="/coily-hair-routine-medium-porosity" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
                Coily Hair Routine – Medium Porosity Care Plan
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A complete guide to caring for your beautiful coily hair with medium porosity. Learn the best techniques, products, and routines for healthy, defined coils.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Understanding Coily Medium Porosity Hair</h2>
              <p className="text-gray-700 leading-relaxed">
                Coily hair, also known as Type 4 hair, features tight curls or coils that range from S-shaped patterns to Z-shaped zigzag patterns. When combined with medium porosity, your hair has a balanced cuticle layer that allows moisture to enter and be retained effectively. This combination means your hair is versatile and responds well to a variety of products and techniques.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Medium porosity coily hair is often considered the ideal porosity level because the cuticles are neither too tight nor too raised. This allows for optimal product absorption without excessive moisture loss. However, maintaining this balance requires consistent care and the right routine tailored to your unique texture.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The key to thriving coily medium porosity hair is maintaining moisture, minimizing manipulation, and protecting your strands from environmental damage. With the right approach, your coils will be defined, bouncy, and full of life.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Sun className="w-6 h-6 text-yellow-500" />
                Daily Hair Care Routine
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Morning Moisture Refresh</h3>
                    <p className="text-gray-600 mt-1">Start your day by spritzing your hair with a water-based refresher spray or plain water mixed with a leave-in conditioner. This reactivates products from the previous day and adds hydration to your coils.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Apply Leave-In Conditioner</h3>
                    <p className="text-gray-600 mt-1">Follow the water mist with a lightweight leave-in conditioner. Focus on the ends and mid-lengths where hair tends to be driest. For medium porosity hair, choose products that are not too heavy or too light.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Seal with Oil</h3>
                    <p className="text-gray-600 mt-1">Lock in moisture with a medium-weight oil like jojoba, sweet almond, or grapeseed oil. These oils mimic the natural sebum and help maintain hydration throughout the day without weighing down your coils.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-bold text-gray-900">Style and Protect</h3>
                    <p className="text-gray-600 mt-1">Refresh your protective style or reshape your twist-out or braid-out. Avoid excessive manipulation which can lead to breakage. Use edge control sparingly on your hairline if needed.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Moon className="w-6 h-6 text-indigo-500" />
                Nighttime Routine
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Protecting your coils at night is essential for maintaining moisture and preventing breakage. Before bed, gently gather your hair into a loose pineapple on top of your head using a satin scrunchie. Cover with a satin or silk bonnet, or sleep on a satin pillowcase. This reduces friction that causes frizz and breakage while you sleep.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If your hair is in a protective style like twists or braids, lightly mist with water and apply a small amount of oil to your scalp to prevent dryness overnight. In the morning, your coils will be refreshed and ready for minimal styling.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-green-500" />
                Weekly Hair Care Routine
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">Wash Day (Once Weekly)</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2"><Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> Pre-poo with a natural oil blend for 30 minutes to 2 hours</li>
                    <li className="flex items-start gap-2"><Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> Cleanse scalp with sulfate-free shampoo, focusing on the scalp</li>
                    <li className="flex items-start gap-2"><Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> Apply deep conditioner and sit under a heat cap for 20-30 minutes</li>
                    <li className="flex items-start gap-2"><Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> Detangle in sections with fingers or wide-tooth comb while conditioner is in</li>
                    <li className="flex items-start gap-2"><Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> Rinse with cool water to seal the cuticle</li>
                    <li className="flex items-start gap-2"><Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> Apply LOC method: Leave-in, Oil, Cream</li>
                    <li className="flex items-start gap-2"><Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> Style with twist-out, braid-out, or wash-and-go</li>
                  </ul>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">Mid-Week Refresh</h3>
                  <p className="text-gray-600">Between wash days, refresh your style by spritzing with a water and conditioner mix, re-twisting or re-braiding any sections that have come undone, and sealing with a light oil.</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-2">Monthly Treatments</h3>
                  <p className="text-gray-600">Every 4-6 weeks, incorporate a protein treatment to strengthen your strands. For medium porosity hair, a light to medium protein treatment works well. Always follow with a moisturizing deep conditioner to maintain balance.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <ShoppingBag className="w-6 h-6 text-pink-500" />
                Product Recommendations
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Medium porosity coily hair works well with a variety of products. Look for ingredients like shea butter, coconut oil, glycerin, and aloe vera. Avoid products with drying alcohols, sulfates, and heavy silicones that can cause buildup.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <h3 className="font-bold text-gray-900">Cleansers</h3>
                  <p className="text-gray-600 text-sm mt-1">Sulfate-free shampoos, co-washes, or clay cleansers that remove buildup without stripping moisture.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <h3 className="font-bold text-gray-900">Conditioners</h3>
                  <p className="text-gray-600 text-sm mt-1">Rich deep conditioners with slip for detangling. Look for ingredients like honey, avocado, and olive oil.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <h3 className="font-bold text-gray-900">Leave-Ins</h3>
                  <p className="text-gray-600 text-sm mt-1">Lightweight to medium-weight leave-in conditioners that provide moisture without heaviness.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <h3 className="font-bold text-gray-900">Styling Products</h3>
                  <p className="text-gray-600 text-sm mt-1">Curl creams, twisting butters, and gels that define coils and reduce frizz. Choose water-based options.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Droplets className="w-6 h-6 text-blue-500" />
                FAQs About Coily Medium Porosity Hair
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
                Ready to get a personalized routine tailored to your specific goals and concerns? Take our <Link to="/quiz" className="text-green-600 hover:text-green-700 font-medium underline">hair routine generator quiz</Link> for customized recommendations. You can also explore our <Link to="/blog/hair-porosity-guide" className="text-green-600 hover:text-green-700 font-medium underline">complete porosity guide</Link> to learn more about caring for medium porosity hair.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/quiz">
                  <Button className="bg-gradient-to-r from-green-500 to-yellow-400 hover:from-green-600 hover:to-yellow-500 text-white">
                    Take the Quiz
                  </Button>
                </Link>
                <Link to="/blog/hair-types-guide">
                  <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
                    Hair Types Guide
                  </Button>
                </Link>
                <Link to="/hair-routine-for-curly-hair">
                  <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                    Curly Hair Routine
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

export default CoilyMediumPorosityRoutine;
