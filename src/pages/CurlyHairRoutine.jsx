import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Waves, 
  Droplets, 
  Sparkles, 
  CheckCircle, 
  ArrowRight, 
  AlertCircle 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const CurlyHairRoutine = () => {
  const curlTypes = [
    { type: 'Type 2 (Wavy)', desc: 'S-shaped waves ranging from loose (2A) to defined (2C).' },
    { type: 'Type 3 (Curly)', desc: 'Spiral curls ranging from loose loops (3A) to tight corkscrews (3C).' },
    { type: 'Type 4 (Coily)', desc: 'Tight coils and zig-zags ranging from defined (4A) to undefined (4C).' }
  ];

  return (
    <>
      <Helmet>
        <title>Ultimate Curly Hair Routine (2A-4C) | HairGen Guide</title>
        <meta name="description" content="The comprehensive guide to curly hair care. Discover the best routine for 2A to 4C hair types, product recommendations, and expert tips for defined, healthy curls." />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-50 via-yellow-50 to-white py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center space-y-6"
            >
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                Curly Hair Guide
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                The Ultimate <span className="text-green-600">Curly Hair Routine</span> (2A-4C)
              </h1>
              <p className="text-xl text-gray-600">
                Master your natural texture with our step-by-step guide for healthy, defined curls.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Understanding Curls */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Understanding Your Curl Pattern</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {curlTypes.map((curl, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-green-300 transition-colors">
                  <Waves className="w-10 h-10 text-green-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{curl.type}</h3>
                  <p className="text-gray-600">{curl.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Not sure exactly what type you have?</p>
              <Link to="/quiz">
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Take the Free Hair Analysis Quiz
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* The Routine */}
        <section className="py-16 bg-green-50/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Step-by-Step Curly Routine</h2>
            
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">1</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Cleanse (Gently)</h3>
                  <p className="text-gray-700 mb-4">Curly hair is naturally drier. Use a sulfate-free shampoo to cleanse without stripping natural oils. Focus on the scalp, not the ends.</p>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <p className="font-semibold text-green-700 text-sm">Recommended:</p>
                    <p className="text-gray-600">Hydrating Cream Shampoo or Co-wash</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">2</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Condition & Detangle</h3>
                  <p className="text-gray-700 mb-4">Apply a rich conditioner with a lot of "slip". Detangle gently with your fingers or a wide-tooth comb while hair is soaking wet.</p>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <p className="font-semibold text-green-700 text-sm">Expert Tip:</p>
                    <p className="text-gray-600">Try "Squish to Condish" - scrunching water and conditioner into hair to hydrate.</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">3</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Style & Define</h3>
                  <p className="text-gray-700 mb-4">Apply leave-in conditioner followed by a gel or cream. Use the "praying hands" method to smooth product over clumps, then scrunch.</p>
                  <Link to="/hair-routine-for-frizzy-hair" className="text-green-600 underline text-sm">
                    Learn how to prevent frizz during styling →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Curly Hair FAQs</h2>
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <h3 className="font-bold text-lg mb-2">How often should I wash curly hair?</h3>
                <p className="text-gray-600">Typically 1-2 times per week. Over-washing can dry out curls. If you work out often, consider a co-wash (conditioner only wash) in between.</p>
              </div>
              <div className="border-b border-gray-100 pb-4">
                <h3 className="font-bold text-lg mb-2">What if my curls are frizzy?</h3>
                <p className="text-gray-600">Frizz often means lack of moisture or definition product. Ensure you apply products to soaking wet hair. Check our <Link to="/hair-routine-for-frizzy-hair" className="text-green-600 hover:underline">Frizzy Hair Guide</Link> for more tips.</p>
              </div>
              <div className="border-b border-gray-100 pb-4">
                <h3 className="font-bold text-lg mb-2">Does porosity matter for curls?</h3>
                <p className="text-gray-600">Yes! High porosity hair needs protein and heavy sealants, while low porosity hair needs lightweight moisture and heat. Read our <Link to="/hair-routine-for-low-porosity" className="text-green-600 hover:underline">Low Porosity Guide</Link> to learn more.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-green-500 to-yellow-400 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-6">Get Your Exact Routine</h2>
            <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
              Knowing your curl type is just the start. Let our AI build your full schedule.
            </p>
            <Link to="/quiz">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-bold px-8 py-6 rounded-full text-lg">
                Start Quiz Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default CurlyHairRoutine;