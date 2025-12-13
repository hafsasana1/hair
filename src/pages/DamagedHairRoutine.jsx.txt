import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { 
  AlertTriangle, 
  RefreshCcw, 
  Shield, 
  HeartHandshake,
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const DamagedHairRoutine = () => {
  return (
    <>
      <Helmet>
        <title>Damaged Hair Repair Routine: Restore Health | HairGen</title>
        <meta name="description" content="Heat damage? Bleach damage? Don't panic. Follow our intensive repair routine to restore bonds, hydration, and elasticity to damaged hair." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="bg-gray-50 py-20 border-b border-gray-200">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <AlertTriangle className="w-12 h-12 text-orange-500 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              The <span className="text-orange-500">SOS Routine</span> for Damaged Hair
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whether it's heat, bleach, or chemical damage, hair can be rehabilitated. It takes time, patience, and the right balance of protein and moisture.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">The Road to Recovery</h2>
            
            <div className="relative border-l-4 border-gray-200 ml-6 md:mx-auto md:w-2/3 space-y-12 pl-8 pb-4">
              <div className="relative">
                <div className="absolute -left-[41px] bg-orange-500 w-6 h-6 rounded-full border-4 border-white shadow-sm"></div>
                <h3 className="text-xl font-bold text-gray-900">Phase 1: Stop the Bleeding (Weeks 1-2)</h3>
                <p className="text-gray-600 mt-2">
                  Immediate cessation of all heat styling and chemical treatments. Focus purely on hydration masks and gentle handling. No tight hairstyles.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-[41px] bg-yellow-400 w-6 h-6 rounded-full border-4 border-white shadow-sm"></div>
                <h3 className="text-xl font-bold text-gray-900">Phase 2: Bond Building (Weeks 3-6)</h3>
                <p className="text-gray-600 mt-2">
                  Introduce bond-building treatments (like Olaplex or K18) to repair the disulfide bonds within the hair shaft. This restores structural integrity.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-[41px] bg-green-500 w-6 h-6 rounded-full border-4 border-white shadow-sm"></div>
                <h3 className="text-xl font-bold text-gray-900">Phase 3: Protein Balance (Weeks 7+)</h3>
                <p className="text-gray-600 mt-2">
                  Damaged hair has gaps in the cuticle. Use hydrolyzed protein treatments every 2 weeks to fill these gaps, alternating with deep moisture.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-orange-50/50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80" 
                  alt="Healthy vs Damaged Hair" 
                  className="rounded-2xl shadow-xl w-full object-cover h-[400px]"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Moisture vs. Protein</h2>
                <p className="text-gray-600 text-lg">
                  The biggest mistake with damaged hair is using too much of one.
                </p>
                <div className="grid gap-4">
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-bold text-blue-600">Needs Moisture If:</h4>
                    <p className="text-sm text-gray-600">Hair feels like straw, is rough, dry, and tangles easily.</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-bold text-red-600">Needs Protein If:</h4>
                    <p className="text-sm text-gray-600">Hair feels gummy, mushy when wet, and stretches excessively before breaking.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-8">More Targeted Routines</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/hair-routine-for-high-porosity">
                <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
                  High Porosity Care
                </Button>
              </Link>
              <Link to="/hair-routine-for-frizzy-hair">
                <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
                  Frizz Control
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-900 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Diagnose Your Damage Level</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Our AI can analyze your symptoms to determine if you need intense protein, hydration, or a bond builder.
            </p>
            <Link to="/quiz">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8">
                Start Analysis <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default DamagedHairRoutine;