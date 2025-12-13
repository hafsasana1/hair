import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { 
  CloudFog, 
  Droplet, 
  ShieldCheck, 
  Scissors,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const FrizzyHairRoutine = () => {
  return (
    <>
      <Helmet>
        <title>Anti-Frizz Hair Routine: How to Tame Frizz | HairGen</title>
        <meta name="description" content="Stop fighting the frizz. Learn the causes of frizzy hair and the step-by-step routine to smooth, hydrate, and seal your hair cuticle." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-b from-gray-50 to-white py-20">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <CloudFog className="w-8 h-8 text-gray-600" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Tame the <span className="text-green-600">Frizz</span> for Good
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Frizz isn't a hair type—it's a cry for moisture. Discover the routine that smooths the cuticle and locks out humidity.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="p-6 bg-white border border-gray-100 shadow-lg rounded-xl text-center hover:-translate-y-1 transition-transform">
                <Droplet className="w-10 h-10 text-blue-500 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Lack of Moisture</h3>
                <p className="text-gray-600 text-sm">Dry hair reaches out to the air to absorb moisture, causing it to swell and frizz.</p>
              </div>
              <div className="p-6 bg-white border border-gray-100 shadow-lg rounded-xl text-center hover:-translate-y-1 transition-transform">
                <ShieldCheck className="w-10 h-10 text-green-500 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Damaged Cuticle</h3>
                <p className="text-gray-600 text-sm">Heat styling and dyeing lift the cuticle layer, making hair rough and prone to frizz.</p>
              </div>
              <div className="p-6 bg-white border border-gray-100 shadow-lg rounded-xl text-center hover:-translate-y-1 transition-transform">
                <CloudFog className="w-10 h-10 text-gray-500 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Humidity</h3>
                <p className="text-gray-600 text-sm">High dew points cause hair to absorb extra water from the air, disrupting hydrogen bonds.</p>
              </div>
            </div>

            <div className="bg-green-50 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The Anti-Frizz Strategy</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-green-700">1. The Wash Day</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Use a microfiber towel (never regular cotton towels)</li>
                    <li>• Rinse with cool water to close the cuticle</li>
                    <li>• Apply products to soaking wet hair</li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-green-700">2. The Styling</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Use a leave-in conditioner as a base</li>
                    <li>• Layer an oil or serum to seal moisture in</li>
                    <li>• Avoid touching hair while it dries</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Ingredients to Look For</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2 text-blue-600">Glycerin (With Caution)</h4>
                <p className="text-gray-600">Great for moisture, but in very humid or very dry weather, it can cause frizz. Use sparingly in extreme weather.</p>
              </div>
              <div className="border p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2 text-yellow-600">Argan & Jojoba Oil</h4>
                <p className="text-gray-600">Excellent sealing oils that smooth the cuticle without being too greasy for most hair types.</p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-yellow-50 rounded-xl flex gap-4 items-start">
              <Scissors className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900">Pro Tip: The Trim</h4>
                <p className="text-gray-600">Split ends will always travel up the hair shaft and create frizz. Regular trims every 8-12 weeks are non-negotiable for smooth hair.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-900 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Stop Guessing, Start Smoothing</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Our AI analyzes exactly why your hair is frizzing—whether it's porosity, damage, or dryness—and builds the cure.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link to="/quiz">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white font-bold px-8">
                  Get My Anti-Frizz Routine
                </Button>
              </Link>
              <Link to="/hair-routine-for-curly-hair">
                <Button size="lg" variant="outline" className="border-green-500 text-green-500 hover:bg-gray-800">
                  Curly Hair Guide
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FrizzyHairRoutine;