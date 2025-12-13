import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Calendar, 
  HeartPulse, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const HairGrowthRoutine = () => {
  return (
    <>
      <Helmet>
        <title>Hair Growth Routine: Science-Backed Tips for Length | HairGen</title>
        <meta name="description" content="Want longer, thicker hair? Follow our science-backed hair growth routine. Learn about the growth cycle, scalp massage techniques, and essential nutrients." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-pink-50 to-rose-50 py-20">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm text-pink-600 text-sm font-semibold mb-6">
              <TrendingUp className="w-4 h-4" /> Growth Series
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Maximize Your <span className="text-pink-500">Hair Growth</span> Potential
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Genetics play a role, but your routine determines if you reach your maximum potential. Here is the science of growing longer, stronger hair.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-pink-400">
                <h3 className="text-xl font-bold mb-4">1. Anagen Phase</h3>
                <p className="text-sm text-gray-600">The growth phase (2-7 years). Our goal is to keep hair in this phase as long as possible through nutrition and scalp health.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-yellow-400">
                <h3 className="text-xl font-bold mb-4">2. Catagen Phase</h3>
                <p className="text-sm text-gray-600">The transition phase (2-3 weeks). Hair stops growing and detaches from blood supply.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-400">
                <h3 className="text-xl font-bold mb-4">3. Telogen Phase</h3>
                <p className="text-sm text-gray-600">The resting phase. Hair falls out and the follicle rests before starting over. Stress can push more hair here prematurely.</p>
              </div>
            </div>

            <div className="bg-gray-900 text-white rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8 text-center">The Growth Protocol</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-pink-400 flex items-center gap-2">
                    <HeartPulse className="w-5 h-5" /> Stimulation
                  </h3>
                  <p className="text-gray-300">
                    Blood flow delivers nutrients to the follicle. Perform a 4-minute scalp massage daily. Use rosemary oil (diluted) which studies show can rival minoxidil for growth support.
                  </p>
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-green-400 flex items-center gap-2">
                    <Sparkles className="w-5 h-5" /> Retention
                  </h3>
                  <p className="text-gray-300">
                    Growing hair is useless if it breaks at the ends. Length retention requires protective styling, satin pillowcases, and regular dusting of split ends.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Essential Nutrients</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Biotin', 'Zinc', 'Iron', 'Vitamin D'].map((item) => (
                <div key={item} className="bg-pink-50 p-4 rounded-xl text-center font-bold text-gray-800">
                  {item}
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-500 mt-4 italic">
              *Always consult a doctor before starting supplements.
            </p>

            <div className="mt-16 border-t border-gray-100 pt-10">
              <h3 className="text-2xl font-bold mb-6">Growth Routine FAQ</h3>
              <div className="space-y-4">
                <details className="group">
                  <summary className="font-semibold cursor-pointer list-none flex justify-between">
                    How fast does hair actually grow?
                    <span className="group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-gray-600 mt-2 pl-4 border-l-2 border-pink-200">
                    On average, 0.5 inches per month. Anyone promising 2+ inches a month is likely selling a scam. Patience is key.
                  </p>
                </details>
                <details className="group">
                  <summary className="font-semibold cursor-pointer list-none flex justify-between">
                    Does trimming make hair grow faster?
                    <span className="group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="text-gray-600 mt-2 pl-4 border-l-2 border-pink-200">
                    No, growth happens at the root. However, trimming prevents split ends from traveling up the shaft and breaking hair off, making it <i>seem</i> like it's growing faster.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-pink-500 to-rose-400 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Build Your Growth Plan</h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              Get a customized schedule of scalp treatments, wash days, and protein balances to support maximum length.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link to="/quiz">
                <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 font-bold px-8">
                  Start Growth Quiz
                </Button>
              </Link>
              <Link to="/hair-routine-for-damaged-hair">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Fix Damaged Hair
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HairGrowthRoutine;