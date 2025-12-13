import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { 
  Droplet, 
  Leaf, 
  Clock, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const OilyScalpRoutine = () => {
  return (
    <>
      <Helmet>
        <title>Oily Scalp Routine: How to Balance Sebum | HairGen</title>
        <meta name="description" content="Struggling with greasy roots? Discover the ultimate routine for oily scalp care. Learn how to balance sebum production, choose the right shampoo, and extend wash days." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative bg-gradient-to-br from-green-50 via-teal-50 to-white py-20">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6 inline-block">
              Scalp Health Series
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              The Ultimate Routine for <span className="text-green-600">Oily Scalp</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stop the cycle of over-washing. Learn how to balance your scalp's natural oil production for fresh, voluminous hair that lasts longer.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Why Is My Scalp So Oily?</h2>
                <p className="text-gray-600 leading-relaxed">
                  Sebum is natural and healthy, but overproduction often happens when we strip our scalp too aggressively. It's a defense mechanism: your scalp thinks it's dry, so it produces <i>more</i> oil to compensate.
                </p>
                <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                  <h3 className="font-bold text-gray-900 mb-2">The "Training" Myth</h3>
                  <p className="text-sm text-gray-600">
                    You can't "train" your glands to stop producing oil by not washing. However, using gentle products can reduce irritation-induced oil production.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="p-6 bg-white shadow-sm border border-gray-100 rounded-xl flex gap-4">
                  <div className="bg-green-100 p-3 rounded-lg h-fit">
                    <Droplet className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Over-washing</h3>
                    <p className="text-sm text-gray-600">Daily washing with harsh sulfates triggers rebound oil production.</p>
                  </div>
                </div>
                <div className="p-6 bg-white shadow-sm border border-gray-100 rounded-xl flex gap-4">
                  <div className="bg-green-100 p-3 rounded-lg h-fit">
                    <Leaf className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Product Buildup</h3>
                    <p className="text-sm text-gray-600">Silicones and heavy conditioners on roots clog follicles.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Your Balancing Routine</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-green-500"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 text-sm">1</span>
                  Double Cleanse (The Game Changer)
                </h3>
                <p className="text-gray-600 mb-4">
                  The first shampoo breaks down oil and product styling; the second shampoo actually cleans the scalp.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Use lukewarm water (hot water stimulates oil glands)</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Massage scalp for 60 seconds each time</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-yellow-400"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100 text-yellow-600 text-sm">2</span>
                  Condition Correctly
                </h3>
                <p className="text-gray-600">
                  Never apply conditioner to your scalp. Apply only from the ears down to the ends. Oily scalps often have dry ends, so hydration is still key for the lengths.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-green-500"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 text-sm">3</span>
                  Weekly Scalp Detox
                </h3>
                <p className="text-gray-600">
                  Once a week, use a chemical exfoliant (Salicylic Acid/BHA) or a clarifying shampoo to deep clean pores and remove hard water buildup.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold mb-8">Oily Scalp FAQs</h2>
            <div className="grid gap-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Is dry shampoo bad for oily hair?</h3>
                <p className="text-gray-600">It's a great temporary fix, but overuse causes buildup which leads to... more oil. Use it on day 2 or 3, but always wash it out thoroughly.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Can I oil my scalp if it's already oily?</h3>
                <p className="text-gray-600">Generally, avoid heavy oils. However, pre-shampoo treatments with Jojoba oil (which mimics sebum) can actually signal your scalp to produce less oil over time.</p>
              </div>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-500">
              <span>Related:</span>
              <Link to="/hair-routine-for-dry-scalp" className="text-green-600 hover:underline">Dry Scalp Guide</Link>
              <span>•</span>
              <Link to="/hair-routine-for-hair-growth" className="text-green-600 hover:underline">Growth Tips</Link>
            </div>
          </div>
        </section>

        <section className="py-20 text-center bg-green-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Find Your Balancing Shampoo</h2>
            <p className="text-green-100 mb-8 max-w-xl mx-auto">
              Not all clarifying shampoos are created equal. Find the one that cleans without stripping.
            </p>
            <Link to="/quiz">
              <Button size="lg" className="bg-white text-green-900 hover:bg-gray-100 font-bold">
                Get Personalized Recommendations
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default OilyScalpRoutine;