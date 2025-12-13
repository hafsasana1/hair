import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { 
  Unlock, 
  Layers, 
  Droplet, 
  Umbrella,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const HighPorosityRoutine = () => {
  return (
    <>
      <Helmet>
        <title>High Porosity Hair Routine: Retain Moisture | HairGen</title>
        <meta name="description" content="Hair absorbs water instantly but dries just as fast? You have high porosity. Learn the LOC method, protein treatments, and sealing techniques to lock moisture in." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="bg-purple-50/50 py-20">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <Unlock className="w-12 h-12 text-purple-500 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Care for <span className="text-purple-600">High Porosity</span> Hair
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your hair drinks up water like a sponge but loses it just as quickly. The cuticles are open (from damage or genetics). The goal: Seal it shut.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Characteristics</h2>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">1</div>
                    <span className="text-gray-700">Hair gets wet instantly in the shower</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">2</div>
                    <span className="text-gray-700">Hair dries very quickly after washing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">3</div>
                    <span className="text-gray-700">Prone to frizz and tangles</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">4</div>
                    <span className="text-gray-700">Often absorbs product but feels dry later</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Layers className="w-5 h-5" /> The Solution: Layering
                </h3>
                <p className="text-gray-300 mb-4">
                  Since moisture escapes easily, you must create physical barriers. We use the <strong>LOC Method</strong> (Liquid, Oil, Cream).
                </p>
                <div className="grid gap-2 mt-6">
                  <div className="bg-white/10 p-3 rounded">L = Water / Leave-in</div>
                  <div className="bg-white/10 p-3 rounded">O = Heavy Oil (Castor, Olive)</div>
                  <div className="bg-white/10 p-3 rounded">C = Thick Cream / Butter</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Essential Tips for High Porosity</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 border rounded-xl hover:shadow-lg transition-shadow">
                <Umbrella className="w-10 h-10 text-purple-500 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Cold Water Rinse</h3>
                <p className="text-sm text-gray-600">Always finish your wash with cold water to physically shock the cuticles into closing.</p>
              </div>
              <div className="text-center p-6 border rounded-xl hover:shadow-lg transition-shadow">
                <Droplet className="w-10 h-10 text-blue-500 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Protein is King</h3>
                <p className="text-sm text-gray-600">High porosity hair has gaps. Protein treatments patch these holes, strengthening the structure.</p>
              </div>
              <div className="text-center p-6 border rounded-xl hover:shadow-lg transition-shadow">
                <Unlock className="w-10 h-10 text-red-500 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Avoid Heat</h3>
                <p className="text-sm text-gray-600">Your cuticle is already open. Heat opens it further, leading to rapid moisture loss.</p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold mb-6">Compare with Low Porosity</h3>
              <p className="text-gray-600 mb-6">Not sure which one you are?</p>
              <div className="flex justify-center gap-4">
                <Link to="/hair-routine-for-low-porosity">
                  <Button variant="outline" className="text-gray-700">View Low Porosity Guide</Button>
                </Link>
                <Link to="/quiz">
                  <Button className="bg-purple-600 text-white hover:bg-purple-700">Take Porosity Quiz</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 text-center bg-purple-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Get Your Heavy Sealants List</h2>
            <p className="text-purple-100 mb-8 max-w-xl mx-auto">
              We've curated a list of the best heavy butters and oils that successfully seal high porosity hair.
            </p>
            <Link to="/quiz">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100 font-bold px-8">
                Generate My Routine
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default HighPorosityRoutine;