import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { 
  CloudRain, 
  Droplets, 
  Flower2, 
  XCircle,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const DryScalpRoutine = () => {
  return (
    <>
      <Helmet>
        <title>Dry Scalp Routine: Hydration & Relief Guide | HairGen</title>
        <meta name="description" content="Itchy, flaky scalp? Distinguish between dry scalp and dandruff. Learn the moisturizing routine to soothe irritation and restore scalp barrier health." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="bg-blue-50/50 py-20">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <CloudRain className="w-12 h-12 text-blue-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Relief for <span className="text-blue-500">Dry Scalp</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dryness causes itching, small white flakes, and tightness. It's different from dandruff, and needs hydration, not harsh chemicals.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Dry Scalp Symptoms</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex gap-2"><Droplets className="w-5 h-5" /> Small, dry, white flakes</li>
                  <li className="flex gap-2"><Droplets className="w-5 h-5" /> Scalp feels tight after washing</li>
                  <li className="flex gap-2"><Droplets className="w-5 h-5" /> Itchiness without redness</li>
                  <li className="flex gap-2"><Droplets className="w-5 h-5" /> Hair is also dry</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Dandruff vs. Dry Scalp</h3>
                <p className="text-gray-600 mb-4">
                  <strong>Dandruff</strong> is fungal (yeast overgrowth) and produces oily, large, yellowish flakes.
                </p>
                <p className="text-gray-600">
                  <strong>Dry Scalp</strong> is simply dehydrated skin. Using anti-dandruff shampoo on dry scalp will make it <i>worse</i>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">The Hydration Routine</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Pre-Shampoo Oil Treatment</h3>
                  <p className="text-gray-600">Massage warm Jojoba or Coconut oil into scalp 30 minutes before washing. This creates a protective barrier against surfactants.</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Switch to Moisturizing Shampoo</h3>
                  <p className="text-gray-600">Look for Aloe Vera, Glycerin, or Hyaluronic Acid. Avoid "Volumizing" or "Clarifying" shampoos daily as they strip oils.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Cool Rinse Only</h3>
                  <p className="text-gray-600">Hot water is the #1 enemy of dry skin. Wash with lukewarm water, rinse with cool.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <Flower2 className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            <h2 className="text-3xl font-bold mb-6">Natural Remedies</h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <h4 className="font-bold mb-2">Aloe Vera Gel</h4>
                <p className="text-sm opacity-90">Apply direct from leaf to scalp for instant soothing and hydration.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <h4 className="font-bold mb-2">Tea Tree Oil</h4>
                <p className="text-sm opacity-90">Anti-inflammatory. Mix 2 drops into your shampoo dollop (never use pure).</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <h4 className="font-bold mb-2">Apple Cider Vinegar</h4>
                <p className="text-sm opacity-90">Diluted (1:10) rinse can balance pH levels, reducing itchiness.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 text-center bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Not Sure If It's Dry Scalp or Dandruff?</h2>
            <p className="text-gray-600 mb-8">Our quiz asks specific questions to differentiate between the two.</p>
            <Link to="/quiz">
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
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