import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  RefreshCcw, 
  Shield, 
  HeartHandshake,
  ArrowRight,
  Sparkles,
  Scissors,
  Flame
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const DamagedHairRoutine = () => {
  const damageTypes = [
    { type: 'Heat Damage', desc: 'Caused by flat irons, curling irons, and blow dryers. Heat breaks down the protein structure and evaporates moisture from inside the hair shaft.', icon: Flame, color: 'text-orange-500' },
    { type: 'Chemical Damage', desc: 'From bleaching, perms, relaxers, and frequent coloring. These processes break and restructure the bonds within your hair, weakening it permanently.', icon: AlertTriangle, color: 'text-yellow-500' },
    { type: 'Mechanical Damage', desc: 'Rough brushing, tight hairstyles, and friction from cotton pillowcases. This type of damage wears away at the cuticle over time.', icon: Scissors, color: 'text-red-500' }
  ];

  const recoveryPhases = [
    { 
      phase: 'Phase 1: Stop the Damage', 
      weeks: 'Weeks 1-2', 
      color: 'bg-orange-500',
      tasks: [
        'Completely stop all heat styling and chemical treatments',
        'Switch to sulfate-free, gentle cleansers',
        'Use a microfiber towel and be extremely gentle when handling wet hair',
        'Remove tight hairstyles and avoid elastic bands',
        'Focus purely on hydration with deep conditioning masks'
      ]
    },
    { 
      phase: 'Phase 2: Bond Building', 
      weeks: 'Weeks 3-6', 
      color: 'bg-yellow-400',
      tasks: [
        'Introduce bond-building treatments (Olaplex, K18, or similar)',
        'These repair the disulfide bonds within the hair shaft',
        'Continue deep conditioning but alternate with protein treatments',
        'Trim away the most damaged ends if necessary',
        'Begin protective styling to prevent further mechanical damage'
      ]
    },
    { 
      phase: 'Phase 3: Protein Balance', 
      weeks: 'Weeks 7+', 
      color: 'bg-green-500',
      tasks: [
        'Establish a balance between protein and moisture treatments',
        'Use hydrolyzed protein treatments every 2 weeks',
        'Alternate with deep moisture masks on other weeks',
        'Slowly reintroduce heat styling with always using protection',
        'Consider continuing bond builders as maintenance'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Damaged Hair Repair Routine: Restore Health | HairGen</title>
        <meta name="description" content="Heat damage? Bleach damage? Don't panic. Follow our intensive repair routine to restore bonds, hydration, and elasticity to damaged hair." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-white py-20 border-b border-amber-200">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <AlertTriangle className="w-12 h-12 text-amber-500 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              The <span className="text-amber-600">Repair Routine</span> for Damaged Hair
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whether your hair is damaged from heat, chemicals, or rough handling, it can be rehabilitated. It takes patience, the right products, and a careful balance of protein and moisture.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Understanding Hair Damage</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Not all damage is the same. Identifying the type of damage helps you choose the right repair strategy. Most damaged hair suffers from a combination of these factors.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {damageTypes.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                >
                  <item.icon className={`w-12 h-12 ${item.color} mb-4`} />
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.type}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">The Road to Recovery</h2>
            
            <div className="space-y-8">
              {recoveryPhases.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className={`${phase.color} px-6 py-4`}>
                    <div className="flex justify-between items-center text-white">
                      <h3 className="text-xl font-bold">{phase.phase}</h3>
                      <span className="text-sm opacity-90">{phase.weeks}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {phase.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start gap-3">
                          <div className={`w-2 h-2 ${phase.color} rounded-full mt-2 flex-shrink-0`}></div>
                          <span className="text-gray-600">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Protein-Moisture Balance</h2>
                <p className="text-gray-600 mb-4">
                  One of the biggest mistakes people make with damaged hair is using too much of one treatment type. Damaged hair needs both protein and moisture, but the balance is critical.
                </p>
                <p className="text-gray-600 mb-6">
                  Think of it like a seesaw: too much protein makes hair stiff and brittle. Too much moisture makes hair limp, stretchy, and prone to breakage. The goal is to find the middle ground where your hair is strong yet flexible.
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-blue-700 text-lg mb-2">Signs You Need Moisture</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Hair feels like straw - rough and dry</li>
                    <li>• Hair is brittle and snaps easily</li>
                    <li>• Tangles constantly</li>
                    <li>• Looks dull with no shine</li>
                  </ul>
                </div>
                <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                  <h4 className="font-bold text-amber-700 text-lg mb-2">Signs You Need Protein</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Hair feels gummy or mushy when wet</li>
                    <li>• Hair stretches excessively before breaking</li>
                    <li>• Limp with no body or elasticity</li>
                    <li>• Won't hold a style</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <Shield className="w-12 h-12 text-amber-200 mb-6" />
                <h2 className="text-3xl font-bold mb-4">Bond Builders: Your Secret Weapon</h2>
                <p className="text-amber-100 mb-4">
                  Bond-building treatments like Olaplex, K18, and similar products work at a molecular level. They reconnect the broken disulfide bonds that give hair its strength and structure.
                </p>
                <p className="text-amber-100">
                  Unlike regular conditioners that coat the outside of hair, bond builders actually repair the internal structure. They're especially effective for chemically damaged hair from bleaching or relaxing.
                </p>
              </div>
              <div>
                <RefreshCcw className="w-12 h-12 text-amber-200 mb-6" />
                <h2 className="text-3xl font-bold mb-4">The Truth About Repair</h2>
                <p className="text-amber-100 mb-4">
                  Here's the honest truth: truly dead, severely damaged hair cannot be fully restored to its original state. The damage is permanent at the structural level.
                </p>
                <p className="text-amber-100">
                  However, you can significantly improve how damaged hair looks and feels, prevent further damage, and grow out healthy new hair. Sometimes the best solution is to gradually trim away the damaged ends while nurturing new growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Damaged Hair FAQs</h2>
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-lg mb-2">Can damaged hair be fully repaired?</h3>
                <p className="text-gray-600">Severely damaged hair cannot be restored to its original state because the structural damage is permanent. However, bond builders and proper care can significantly improve how it looks and feels. The best long-term solution is often to trim away the most damaged parts while nurturing healthy new growth.</p>
              </div>
              <div className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-lg mb-2">How long does hair repair take?</h3>
                <p className="text-gray-600">You should start seeing improvements within 2-4 weeks of consistent care. However, full recovery depends on the extent of damage and may take several months. Remember that hair grows about half an inch per month, so growing out severely damaged hair takes patience.</p>
              </div>
              <div className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-lg mb-2">Should I cut off all my damaged hair at once?</h3>
                <p className="text-gray-600">This is a personal choice. A "big chop" can be liberating and allows you to start fresh with healthy hair. However, many people prefer to gradually trim while growing out new healthy hair. Do what feels right for you - there's no wrong answer.</p>
              </div>
              <div className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-lg mb-2">Can I still color my hair if it's damaged?</h3>
                <p className="text-gray-600">It's best to give your hair a break from chemical treatments while it recovers. If you must color, consider gentler options like demi-permanent color or glosses, and always do a strand test first. Wait at least 6-8 weeks between any chemical treatments.</p>
              </div>
              <div className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-lg mb-2">How often should I use protein treatments?</h3>
                <p className="text-gray-600">This depends on your hair's needs. A good starting point is once every 2 weeks, alternating with deep moisture treatments. Pay attention to how your hair responds - if it feels stiff or brittle, you may be using too much protein. If it feels limp and stretchy, you may need more.</p>
              </div>
              <div className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-lg mb-2">Are bond builders worth the investment?</h3>
                <p className="text-gray-600">For chemically damaged hair, bond builders can make a significant difference. They work at a molecular level to repair broken bonds, which regular conditioners cannot do. If your damage is primarily from bleaching, perms, or relaxers, bond builders are often worth trying.</p>
              </div>
              <div className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-lg mb-2">Why does my damaged hair tangle so easily?</h3>
                <p className="text-gray-600">Damaged cuticles don't lie flat - they're raised and rough, which causes individual strands to catch on each other. Regular deep conditioning helps temporarily smooth the cuticle, but the long-term solution is growing out healthy new hair with intact cuticles.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-8">Explore Related Routines</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/hair-routine-for-high-porosity">
                <Button variant="outline" className="border-amber-500 text-amber-600 hover:bg-amber-50">
                  High Porosity Care
                </Button>
              </Link>
              <Link to="/hair-routine-for-frizzy-hair">
                <Button variant="outline" className="border-amber-500 text-amber-600 hover:bg-amber-50">
                  Frizz Control
                </Button>
              </Link>
              <Link to="/hair-routine-for-dry-scalp">
                <Button variant="outline" className="border-amber-500 text-amber-600 hover:bg-amber-50">
                  Dry Scalp Solutions
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-900 text-white text-center">
          <div className="container mx-auto px-4">
            <Sparkles className="w-12 h-12 text-amber-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Diagnose Your Damage Level</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Our AI can analyze your symptoms to determine if you need intense protein, hydration, bond builders, or a combination approach.
            </p>
            <Link to="/quiz">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8">
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
