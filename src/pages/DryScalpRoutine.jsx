import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CloudRain, 
  Droplets, 
  Flower2, 
  XCircle,
  ArrowRight,
  Sparkles,
  CheckCircle,
  ThermometerSun
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const DryScalpRoutine = () => {
  const drySigns = [
    'Small, dry, white flakes that fall off easily',
    'Scalp feels tight or uncomfortable after washing',
    'Itchiness without visible redness or inflammation',
    'Hair also feels dry and lacks shine',
    'Symptoms worsen in winter or dry climates',
    'Scalp may feel slightly rough to the touch'
  ];

  const naturalRemedies = [
    { name: 'Aloe Vera Gel', desc: 'Apply directly from the leaf to your scalp for instant soothing and hydration. Leave on for 20 minutes before washing.' },
    { name: 'Tea Tree Oil', desc: 'Has anti-inflammatory properties. Mix 2-3 drops into your shampoo (never apply pure oil directly to scalp).' },
    { name: 'Apple Cider Vinegar', desc: 'A diluted rinse (1 part ACV to 10 parts water) can help balance pH levels and reduce itchiness.' },
    { name: 'Coconut Oil', desc: 'A warm coconut oil scalp massage before washing can deeply moisturize. Leave on for at least 30 minutes.' },
    { name: 'Honey Mask', desc: 'Mix honey with olive oil and apply to scalp. Honey is a natural humectant that draws moisture in.' }
  ];

  return (
    <>
      <Helmet>
        <title>Dry Scalp Routine: Hydration & Relief Guide | HairGen</title>
        <meta name="description" content="Itchy, flaky scalp? Distinguish between dry scalp and dandruff. Learn the moisturizing routine to soothe irritation and restore scalp barrier health." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-yellow-50 via-amber-50 to-white py-20">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <CloudRain className="w-12 h-12 text-amber-500 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Relief for <span className="text-amber-500">Dry Scalp</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dryness causes itching, small white flakes, and that tight, uncomfortable feeling. It's different from dandruff and needs hydration, not harsh chemical treatments.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Dry Scalp vs. Dandruff</h2>
                <p className="text-gray-600 mb-4">
                  Many people confuse dry scalp with dandruff, but they're different conditions that require different treatments. Using the wrong approach can actually make things worse.
                </p>
                <div className="bg-amber-50 p-6 rounded-xl border border-amber-100 mb-6">
                  <h4 className="font-bold text-amber-700 text-lg mb-3">Dry Scalp</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Small, dry, white flakes</li>
                    <li>• Scalp feels tight and may be itchy</li>
                    <li>• Hair is also usually dry</li>
                    <li>• Caused by lack of moisture</li>
                    <li>• Treatment: Hydration and gentle products</li>
                  </ul>
                </div>
                <div className="bg-gray-100 p-6 rounded-xl border border-gray-200">
                  <h4 className="font-bold text-gray-700 text-lg mb-3">Dandruff (Seborrheic Dermatitis)</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Large, oily, yellowish flakes</li>
                    <li>• Scalp may be oily and red</li>
                    <li>• Caused by yeast overgrowth</li>
                    <li>• Hair may be oily at roots</li>
                    <li>• Treatment: Anti-fungal ingredients</li>
                  </ul>
                </div>
                <p className="text-gray-600 mt-4 text-sm italic">
                  Important: Using anti-dandruff shampoo on a dry scalp can make it much worse by stripping what little moisture remains.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Signs of Dry Scalp</h3>
                <div className="space-y-4">
                  {drySigns.map((sign, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg"
                    >
                      <Droplets className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{sign}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">The Hydration Routine</h2>
            
            <div className="space-y-10">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">1</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Pre-Shampoo Oil Treatment</h3>
                  <p className="text-gray-600 mb-4">Before washing, massage warm jojoba, coconut, or olive oil into your scalp. Leave it on for at least 30 minutes (or overnight for intense hydration). This creates a protective barrier against the stripping effect of shampoo.</p>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-500">Warm the oil slightly by rubbing between your palms - warmth helps it penetrate better and feels soothing on a dry scalp.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">2</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Switch to Moisturizing Shampoo</h3>
                  <p className="text-gray-600 mb-4">Look for shampoos with hydrating ingredients like aloe vera, glycerin, or hyaluronic acid. Avoid sulfates, which strip natural oils. Also avoid "volumizing" or "clarifying" shampoos for daily use as these are designed to remove oils.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">3</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Don't Over-Wash</h3>
                  <p className="text-gray-600 mb-4">Washing too frequently can strip your scalp of its natural protective oils. For dry scalp, try to extend wash days to every 2-3 days. If your hair gets oily at the roots but your scalp is dry, focus shampoo only on the oily areas.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">4</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Use Cool Water</h3>
                  <p className="text-gray-600 mb-4">Hot water is the enemy of dry skin - including your scalp. It strips natural oils and leaves skin feeling tight and parched. Wash with lukewarm water and do a final cool rinse to help seal in moisture.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">5</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Weekly Scalp Mask</h3>
                  <p className="text-gray-600 mb-4">Once a week, apply a hydrating scalp mask or treatment. Look for ingredients like shea butter, argan oil, or honey. Leave on for 15-30 minutes under a shower cap (the warmth helps absorption) before washing out.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-amber-500 to-yellow-500 text-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex items-center gap-4 mb-8">
              <Flower2 className="w-12 h-12 text-amber-200" />
              <h2 className="text-3xl font-bold">Natural Remedies for Dry Scalp</h2>
            </div>
            <p className="text-amber-100 mb-8 max-w-2xl">
              These kitchen ingredients and natural products can provide relief for dry, itchy scalp. Always do a patch test first to check for sensitivity.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {naturalRemedies.map((remedy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 p-6 rounded-xl backdrop-blur-sm"
                >
                  <h4 className="font-bold text-lg mb-2">{remedy.name}</h4>
                  <p className="text-sm text-amber-100">{remedy.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
                <div className="flex items-center gap-3 mb-6">
                  <ThermometerSun className="w-8 h-8 text-red-500" />
                  <h3 className="text-xl font-bold text-gray-900">Environmental Factors</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Dry scalp often worsens with environmental conditions. Winter heating, air conditioning, and dry climates all suck moisture from your skin and scalp.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-1" />
                    <span>Use a humidifier in your home during dry seasons</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-1" />
                    <span>Wear a hat to protect from cold, dry winds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-1" />
                    <span>Stay hydrated - drink plenty of water</span>
                  </li>
                </ul>
              </div>
              <div className="bg-amber-50 p-8 rounded-2xl border border-amber-100">
                <div className="flex items-center gap-3 mb-6">
                  <XCircle className="w-8 h-8 text-amber-600" />
                  <h3 className="text-xl font-bold text-gray-900">What to Avoid</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">✕</span>
                    <span>Harsh sulfate shampoos that strip oils</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">✕</span>
                    <span>Anti-dandruff shampoos (these can worsen dry scalp)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">✕</span>
                    <span>Very hot water when washing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">✕</span>
                    <span>Excessive heat styling without protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">✕</span>
                    <span>Products with drying alcohols</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Dry Scalp FAQs</h2>
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-lg mb-2">How do I know if it's dry scalp or dandruff?</h3>
                <p className="text-gray-600">Dry scalp produces small, dry white flakes and your hair is usually also dry. Dandruff produces larger, oily, yellowish flakes and your scalp may be oily or red. If anti-dandruff shampoo makes things worse, you likely have dry scalp, not dandruff.</p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-lg mb-2">Can I use oil on my scalp if I have oily hair?</h3>
                <p className="text-gray-600">Yes! It's possible to have an oily scalp in some areas and dry patches in others. Apply oil only to the dry areas as a pre-shampoo treatment, then wash as normal. Your oily areas don't need the extra moisture.</p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-lg mb-2">Why is my dry scalp worse in winter?</h3>
                <p className="text-gray-600">Winter combines multiple drying factors: cold outdoor air, indoor heating that removes humidity, and wearing hats that can cause friction. This is why dry scalp is often a seasonal problem that improves in summer. Using a humidifier and extra moisturizing treatments during winter can help.</p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-lg mb-2">Is itchiness always a sign of dry scalp?</h3>
                <p className="text-gray-600">Not always. Itchiness can also be caused by product buildup, allergic reactions, or skin conditions like psoriasis. If your scalp is itchy but not dry or flaky, the cause might be something else. If over-the-counter treatments don't help, see a dermatologist.</p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-lg mb-2">How long does it take for dry scalp to improve?</h3>
                <p className="text-gray-600">With consistent care, you should start seeing improvement within 1-2 weeks. However, if you've had dry scalp for a long time, it may take a month or more of proper care to fully resolve. Be patient and stick with your hydrating routine.</p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-lg mb-2">Should I see a doctor for dry scalp?</h3>
                <p className="text-gray-600">Most dry scalp responds well to home treatment. However, if you have severe symptoms, persistent irritation, bleeding, or if home remedies don't help after a few weeks, it's worth seeing a dermatologist to rule out other conditions like eczema or psoriasis.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 text-center bg-gradient-to-br from-amber-50 to-yellow-50">
          <div className="container mx-auto px-4">
            <Sparkles className="w-12 h-12 text-amber-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Not Sure If It's Dry Scalp or Dandruff?</h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">Our quiz asks specific questions to help differentiate between the two and recommend the right treatment approach.</p>
            <Link to="/quiz">
              <Button size="lg" className="bg-amber-500 text-white hover:bg-amber-600">
                Take Diagnosis Quiz <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default DryScalpRoutine;
