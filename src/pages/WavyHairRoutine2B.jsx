import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Wind, 
  Droplet, 
  XCircle, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const WavyHairRoutine2B = () => {
  return (
    <>
      <Helmet>
        <title>2B Hair Routine: Enhance Your Natural Waves | HairGen</title>
        <meta name="description" content="A complete care guide for 2B wavy hair. Learn how to enhance definition, reduce frizz, and choose the right lightweight products for your waves." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="bg-green-50/50 py-20 border-b border-green-100">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm text-green-700 text-sm font-semibold mb-6">
              <Wind className="w-4 h-4" /> Wavy Hair Series
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Perfect <span className="text-green-600">2B Hair Routine</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              2B hair is the perfect balance between straight and curly, featuring defined S-shape waves that start from the mid-length. Here is how to make them pop.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Characteristics of 2B Hair</h2>
                <ul className="space-y-4">
                  {[
                    "Waves usually start a few inches from the roots",
                    "Can easily be weighed down by heavy products",
                    "Prone to frizz, especially in humidity",
                    "Needs help holding definition throughout the day"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Common 2B Mistakes</h3>
                <ul className="space-y-4">
                  {[
                    "Using heavy butters or oils (weighs waves down)",
                    "Brushing hair when dry (causes poofy frizz)",
                    "Not using a hold product (gel or mousse)",
                    "Washing too infrequently (scalp buildup)"
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
            <h2 className="text-3xl font-bold text-center mb-12">Your Daily 2B Routine</h2>
            
            <div className="relative border-l-2 border-green-200 ml-4 md:ml-0 space-y-12 pl-8 md:pl-0">
              <div className="md:flex items-center justify-between group">
                <div className="hidden md:block w-1/2 pr-12 text-right">
                  <h3 className="text-xl font-bold text-gray-900">1. Lightweight Cleanse</h3>
                  <p className="text-gray-600 mt-2">Use a gentle, clear shampoo. Avoid heavy creamy shampoos that leave residue.</p>
                </div>
                <div className="absolute left-[-9px] md:left-1/2 md:-ml-[9px] w-4 h-4 rounded-full bg-green-500 border-4 border-white shadow-sm"></div>
                <div className="md:w-1/2 md:pl-12">
                  <h3 className="text-xl font-bold text-gray-900 md:hidden">1. Lightweight Cleanse</h3>
                  <p className="text-gray-600 mt-2 md:hidden">Use a gentle, clear shampoo. Avoid heavy creamy shampoos that leave residue.</p>
                </div>
              </div>

              <div className="md:flex items-center justify-between group">
                <div className="hidden md:block w-1/2 pr-12 text-right"></div>
                <div className="absolute left-[-9px] md:left-1/2 md:-ml-[9px] w-4 h-4 rounded-full bg-yellow-400 border-4 border-white shadow-sm"></div>
                <div className="md:w-1/2 md:pl-12">
                  <h3 className="text-xl font-bold text-gray-900">2. Squish to Condish</h3>
                  <p className="text-gray-600 mt-2">Apply lightweight conditioner. Cup water in your hands and scrunch upwards into hair to encourage wave clumps.</p>
                </div>
              </div>

              <div className="md:flex items-center justify-between group">
                <div className="hidden md:block w-1/2 pr-12 text-right">
                  <h3 className="text-xl font-bold text-gray-900">3. Mousse over Cream</h3>
                  <p className="text-gray-600 mt-2">For 2B hair, mousse is often better than heavy creams. It provides volume and hold without the weight.</p>
                </div>
                <div className="absolute left-[-9px] md:left-1/2 md:-ml-[9px] w-4 h-4 rounded-full bg-green-500 border-4 border-white shadow-sm"></div>
                <div className="md:w-1/2 md:pl-12">
                  <h3 className="text-xl font-bold text-gray-900 md:hidden">3. Mousse over Cream</h3>
                  <p className="text-gray-600 mt-2 md:hidden">For 2B hair, mousse is often better than heavy creams. It provides volume and hold without the weight.</p>
                </div>
              </div>

              <div className="md:flex items-center justify-between group">
                <div className="hidden md:block w-1/2 pr-12 text-right"></div>
                <div className="absolute left-[-9px] md:left-1/2 md:-ml-[9px] w-4 h-4 rounded-full bg-yellow-400 border-4 border-white shadow-sm"></div>
                <div className="md:w-1/2 md:pl-12">
                  <h3 className="text-xl font-bold text-gray-900">4. Diffuse or Air Dry</h3>
                  <p className="text-gray-600 mt-2">Air drying keeps it natural, but diffusing upside down adds massive volume.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="grid gap-4">
              <details className="bg-white p-6 rounded-xl shadow-sm cursor-pointer group">
                <summary className="font-semibold text-gray-900 list-none flex justify-between items-center">
                  My 2B waves fall flat by midday. Why?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-600 mt-4">You might be using products that are too heavy (oils/butters) or skipping a hold product like gel. Try a lightweight mousse or foam.</p>
              </details>
              <details className="bg-white p-6 rounded-xl shadow-sm cursor-pointer group">
                <summary className="font-semibold text-gray-900 list-none flex justify-between items-center">
                  Should I brush 2B hair?
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-600 mt-4">Only when wet and conditioned! Brushing dry 2B hair breaks the wave pattern and causes instant frizz.</p>
              </details>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-600 mb-4">Dealing with other issues?</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/hair-routine-for-frizzy-hair" className="text-green-600 font-medium hover:underline">
                  Fix Frizzy Hair →
                </Link>
                <Link to="/hair-routine-for-curly-hair" className="text-green-600 font-medium hover:underline">
                  See Curly Routines →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Custom Products for Your 2B Hair</h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">Not all products work for waves. Find out exactly which brands suit your density and porosity.</p>
            <Link to="/quiz">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-yellow-400 text-white font-bold hover:shadow-lg transition-all">
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