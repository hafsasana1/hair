import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { 
  Droplets, 
  ThermometerSun, 
  Ban, 
  CheckCircle,
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const LowPorosityRoutine = () => {
  return (
    <>
      <Helmet>
        <title>Low Porosity Hair Routine & Care Guide | HairGen</title>
        <meta name="description" content="Struggling to get moisture into your hair? Discover the best routine for low porosity hair, including heat tips, best ingredients, and products to avoid." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="bg-blue-50/30 py-20">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <span className="text-green-600 font-bold tracking-wider text-sm uppercase mb-2 block">Hair Science 101</span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Mastering <span className="text-green-600">Low Porosity</span> Hair
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              If water sits on your hair like beads and products just sit on top, you likely have low porosity hair. Here's how to finally get moisture in.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Low Porosity?</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Low porosity means your hair cuticles are tightly overlapping, creating a barrier that makes it difficult for water and products to penetrate.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  While it's hard to moisturize, the good news is that once moisture is in, low porosity hair retains it very well!
                </p>
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h3 className="font-bold text-gray-900 mb-2">The Water Test</h3>
                  <p className="text-sm text-gray-600">
                    Take a strand of clean hair and place it in a glass of water. If it floats at the top for a long time (5+ mins), you have low porosity hair.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4 p-4 bg-white shadow-sm border border-gray-100 rounded-xl">
                  <div className="bg-red-100 p-3 rounded-lg h-fit">
                    <Ban className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Avoid These</h3>
                    <p className="text-sm text-gray-600 mt-1">Protein-heavy products (can make hair brittle), heavy oils like castor oil, and cold water washing.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-white shadow-sm border border-gray-100 rounded-xl">
                  <div className="bg-green-100 p-3 rounded-lg h-fit">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Embrace These</h3>
                    <p className="text-sm text-gray-600 mt-1">Heat (indirect), warm water, lightweight oils (Argan, Jojoba), and humectants like Glycerin or Honey.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-green-500 to-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <ThermometerSun className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
            <h2 className="text-3xl font-bold mb-4">The Secret Weapon: Heat</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Heat lifts the cuticles. Always use warm water to wash, and use a heated cap or warm towel when deep conditioning to allow penetration.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Low Porosity FAQ</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">My hair takes hours to dry. Is this normal?</h3>
                <p className="text-gray-600">Yes! Because the cuticles are tight, water gets trapped on the surface (or inside if you managed to moisturize well). It's a hallmark of low porosity.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Should I use the LOC or LCO method?</h3>
                <p className="text-gray-600">LCO (Liquid, Cream, Oil) works better for low porosity. Liquid moisturizes, cream adds softness, and oil seals it in. LOC often seals too early.</p>
              </div>
            </div>

            <div className="mt-12 text-center space-y-4">
              <p className="text-gray-600">Check out routines for your texture:</p>
              <div className="flex justify-center gap-4 text-sm font-medium">
                <Link to="/hair-routine-for-curly-hair" className="text-green-600 hover:underline">Curly Hair</Link>
                <span className="text-gray-300">|</span>
                <Link to="/hair-routine-for-2b-hair" className="text-green-600 hover:underline">Wavy Hair</Link>
                <span className="text-gray-300">|</span>
                <Link to="/hair-routine-for-frizzy-hair" className="text-green-600 hover:underline">Frizzy Hair</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 text-center bg-yellow-50/50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Build Your Low Porosity Regimen</h2>
            <p className="text-gray-600 mb-8">Get product recommendations specifically chosen for low porosity hair.</p>
            <Link to="/quiz">
              <Button size="lg" className="bg-green-600 text-white hover:bg-green-700">
                Start Analysis <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default LowPorosityRoutine;