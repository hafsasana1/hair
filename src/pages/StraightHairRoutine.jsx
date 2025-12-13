import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowDown, 
  Sparkles, 
  CheckCircle, 
  ArrowRight,
  Droplets,
  Wind,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const StraightHairRoutine = () => {
  const hairTypes = [
    { type: 'Type 1A', desc: 'Super fine and thin, lies flat with no wave or curl. Often limp and can appear oily quickly.' },
    { type: 'Type 1B', desc: 'Medium texture with slight body. Has more volume than 1A but still very straight.' },
    { type: 'Type 1C', desc: 'Coarse and thick straight hair. Has the most volume and can resist curling.' }
  ];

  const commonChallenges = [
    { title: 'Oiliness at Roots', desc: 'Sebum travels down the straight hair shaft easily, making roots greasy faster than other hair types.', icon: Droplets },
    { title: 'Lack of Volume', desc: 'Without natural texture to lift hair, straight hair can appear flat and lifeless.', icon: Wind },
    { title: 'Frizz & Flyaways', desc: 'Static and humidity cause fine flyaways and frizz even on straight hair.', icon: Zap }
  ];

  return (
    <>
      <Helmet>
        <title>Straight Hair Routine (1A-1C): Complete Care Guide | HairGen</title>
        <meta name="description" content="Master your straight hair care routine for Types 1A, 1B, and 1C. Learn how to add volume, control oil, prevent frizz, and keep your straight hair healthy and shiny." />
        <meta name="keywords" content="straight hair routine, type 1a hair, type 1b hair, type 1c hair, straight hair care, fine hair routine, limp hair solutions, oily hair tips" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-white py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center space-y-6"
            >
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                Straight Hair Guide
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                The Complete <span className="text-blue-600">Straight Hair Routine</span> (1A-1C)
              </h1>
              <p className="text-xl text-gray-600">
                Unlock shine, volume, and healthy straight hair with our expert-backed care routine for all straight hair types.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Understanding Your Straight Hair Type</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Straight hair (Type 1) is the shiniest hair type because the natural oils from your scalp can travel down the hair shaft easily. But this comes with its own challenges.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {hairTypes.map((hair, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 hover:border-blue-300 transition-colors"
                >
                  <ArrowDown className="w-10 h-10 text-blue-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-blue-700">{hair.type}</h3>
                  <p className="text-gray-600">{hair.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Not sure what type you have?</p>
              <Link to="/quiz">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Take the Free Hair Analysis Quiz
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Common Straight Hair Challenges</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {commonChallenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-lg"
                >
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <challenge.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{challenge.title}</h3>
                  <p className="text-gray-600">{challenge.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-50/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Step-by-Step Straight Hair Routine</h2>
            
            <div className="space-y-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">1</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Cleanse with a Lightweight Shampoo</h3>
                  <p className="text-gray-700 mb-4">Straight hair gets oily faster. Use a clarifying or volumizing sulfate-free shampoo to remove buildup without stripping. Focus on the scalp, not the ends.</p>
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <p className="font-semibold text-blue-700 text-sm">Pro Tip:</p>
                    <p className="text-gray-600">Wash every 2-3 days. Daily washing can trigger more oil production.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">2</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Condition Only the Ends</h3>
                  <p className="text-gray-700 mb-4">Never apply conditioner to your roots if you have straight hair. This will weigh your hair down and make it look greasy. Apply from mid-length to ends only.</p>
                  <div className="bg-white p-4 rounded-lg border border-indigo-200">
                    <p className="font-semibold text-indigo-700 text-sm">Best Ingredients:</p>
                    <p className="text-gray-600">Look for lightweight conditioners with argan oil, keratin, or silk proteins for shine without weight.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 bg-violet-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">3</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Add Volume While Damp</h3>
                  <p className="text-gray-700 mb-4">Apply a root-lifting spray or mousse to damp hair. Flip your head upside down while blow-drying for maximum lift.</p>
                  <Link to="/hair-routine-for-hair-growth" className="text-blue-600 underline text-sm">
                    Want more volume? Check out our hair growth tips →
                  </Link>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">4</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Heat Protection is Essential</h3>
                  <p className="text-gray-700 mb-4">Before any heat styling, always use a heat protectant spray. Straight hair is prone to damage from flat irons and blow dryers.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">5</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Weekly Deep Clarifying Treatment</h3>
                  <p className="text-gray-700 mb-4">Once a week, use a clarifying shampoo to remove product buildup that makes straight hair look dull and lifeless.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Products to Avoid for Straight Hair</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="font-bold text-xl mb-4 text-yellow-300">Heavy Oils & Butters</h3>
                <p className="text-blue-100">Coconut oil, shea butter, and castor oil will weigh down straight hair. Opt for lightweight argan or jojoba oil instead.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="font-bold text-xl mb-4 text-yellow-300">Thick Leave-in Conditioners</h3>
                <p className="text-blue-100">These are designed for curly hair. Use a light spray leave-in or skip it entirely if your hair is fine.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="font-bold text-xl mb-4 text-yellow-300">Silicone-Heavy Products</h3>
                <p className="text-blue-100">While silicones add shine initially, they build up quickly on straight hair, making it limp and dull.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="font-bold text-xl mb-4 text-yellow-300">Root-Touching Serums</h3>
                <p className="text-blue-100">Any oil or serum applied to roots will make straight hair look unwashed within hours.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Straight Hair FAQs</h2>
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <h3 className="font-bold text-lg mb-2">How often should I wash straight hair?</h3>
                <p className="text-gray-600">Every 2-3 days is ideal for most straight hair types. If you have 1A fine hair that gets oily quickly, you may need to wash every other day with a gentle, volumizing shampoo.</p>
              </div>
              <div className="border-b border-gray-100 pb-4">
                <h3 className="font-bold text-lg mb-2">Why does my straight hair look flat and lifeless?</h3>
                <p className="text-gray-600">Product buildup, heavy conditioners, or overwashing can strip natural volume. Try a clarifying treatment and switch to lightweight, volumizing products.</p>
              </div>
              <div className="border-b border-gray-100 pb-4">
                <h3 className="font-bold text-lg mb-2">Can straight hair become wavy or curly?</h3>
                <p className="text-gray-600">Hair texture can change due to hormones, medications, or aging. If you notice new waves, adjust your routine to accommodate the new texture.</p>
              </div>
              <div className="border-b border-gray-100 pb-4">
                <h3 className="font-bold text-lg mb-2">How can I add texture to straight hair?</h3>
                <p className="text-gray-600">Use sea salt spray for beachy waves, texturizing powder for volume, or try overnight braiding for heatless curls.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 text-center bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <Sparkles className="w-12 h-12 text-blue-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Your Personalized Straight Hair Routine</h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Our AI analyzes your specific hair type, lifestyle, and goals to create a custom routine just for you.
            </p>
            <Link to="/quiz">
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 text-lg px-8">
                Start Free Hair Analysis <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default StraightHairRoutine;
