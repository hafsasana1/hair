import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Unlock, 
  Layers, 
  Droplet, 
  Umbrella,
  ArrowRight,
  Sparkles,
  ThermometerSnowflake,
  Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const HighPorosityRoutine = () => {
  const characteristics = [
    'Hair gets completely wet within seconds in the shower',
    'Hair dries very quickly after washing - sometimes within an hour',
    'Prone to frizz and tangling, especially in humid weather',
    'Absorbs products quickly but feels dry again shortly after',
    'Color fades faster than expected',
    'Hair may feel rough or look dull even after conditioning'
  ];

  const locMethod = [
    { letter: 'L', name: 'Liquid/Leave-in', desc: 'Start with water or a water-based leave-in conditioner to hydrate the hair shaft. This is the moisture your hair needs.' },
    { letter: 'O', name: 'Oil', desc: 'Apply a heavy, sealing oil like castor, olive, or avocado oil. The oil starts to fill gaps in the cuticle and begins sealing in moisture.' },
    { letter: 'C', name: 'Cream/Butter', desc: 'Finish with a thick cream or butter like shea butter. This creates the final barrier to lock everything in and prevent moisture escape.' }
  ];

  const bestOils = [
    { name: 'Castor Oil', desc: 'Thick and excellent for sealing, though it can be sticky on its own' },
    { name: 'Olive Oil', desc: 'Penetrates the hair shaft and provides lasting moisture' },
    { name: 'Avocado Oil', desc: 'Rich in fatty acids that help repair and seal the cuticle' },
    { name: 'Jamaican Black Castor Oil', desc: 'Heavy sealant that also promotes scalp health' },
    { name: 'Coconut Oil', desc: 'Penetrates well but may be too light as the only sealant' }
  ];

  return (
    <>
      <Helmet>
        <title>High Porosity Hair Routine: Retain Moisture | Hair Routine Generator</title>
        <meta name="description" content="Hair absorbs water instantly but dries just as fast? You have high porosity. Learn the LOC method, protein treatments, and sealing techniques to lock moisture in." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-purple-50 via-violet-50 to-white py-20">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <Unlock className="w-12 h-12 text-purple-500 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Moisture Care for <span className="text-purple-600">High Porosity</span> Hair
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your hair drinks up moisture like a sponge but loses it just as quickly. The cuticles are raised and open, whether from damage or genetics. The solution? Learn to seal that moisture in.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What is High Porosity Hair?</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Hair porosity refers to how easily your hair absorbs and retains moisture. With high porosity hair, the cuticle layer has gaps and holes - either from genetics or from damage like heat styling and chemical treatments.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  These gaps mean water and products soak in instantly, but they also escape just as fast. The goal of a high porosity routine is to fill those gaps and create a barrier that keeps moisture locked inside.
                </p>
                <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                  <h3 className="font-bold text-gray-900 mb-2">The Float Test</h3>
                  <p className="text-sm text-gray-600">
                    Take a clean strand of hair and place it in a glass of water. If it sinks to the bottom quickly (within 1-2 minutes), you have high porosity hair. The porous cuticle absorbs water rapidly, making the strand heavy enough to sink.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Signs of High Porosity Hair</h3>
                {characteristics.map((char, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg"
                  >
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-600">{char}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <Layers className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">The LOC Method: Your Moisture Solution</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Since moisture escapes easily from high porosity hair, you need to layer products strategically. The LOC method creates multiple barriers to lock hydration in.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {locMethod.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
                >
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                    {step.letter}
                  </div>
                  <h3 className="font-bold text-xl mb-2">{step.name}</h3>
                  <p className="text-gray-300">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Your Complete High Porosity Routine</h2>
            
            <div className="space-y-10">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">1</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Pre-Poo with Oil</h3>
                  <p className="text-gray-600 mb-4">Before shampooing, apply a penetrating oil like coconut or olive oil to your hair. This fills some of the gaps in your cuticle and prevents shampoo from stripping too much moisture. Leave it on for at least 30 minutes or overnight.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 bg-violet-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">2</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Gentle Cleansing</h3>
                  <p className="text-gray-600 mb-4">Use a moisturizing, sulfate-free shampoo. High porosity hair is already prone to dryness, so harsh cleansers make things worse. Focus on your scalp and let the suds gently cleanse your lengths as you rinse.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">3</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Protein Treatment</h3>
                  <p className="text-gray-600 mb-4">High porosity hair has gaps in the cuticle that need to be filled. Protein treatments (hydrolyzed keratin, silk protein, etc.) temporarily patch these holes, strengthening the hair structure and helping it retain moisture longer.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">4</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Deep Condition</h3>
                  <p className="text-gray-600 mb-4">Apply a rich, moisturizing deep conditioner. Good news: high porosity hair absorbs treatments quickly, so you don't need as much time as low porosity hair. 10-15 minutes is usually sufficient.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 bg-purple-700 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">5</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Cold Water Rinse</h3>
                  <p className="text-gray-600 mb-4">Finish your wash with a cold water rinse. The cold temperature helps close the cuticle, sealing in the moisture and products you just applied. This step makes a real difference for high porosity hair.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 bg-violet-700 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">6</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Apply LOC Method</h3>
                  <p className="text-gray-600 mb-4">Layer your products: leave-in conditioner first, then a sealing oil, then a thick cream or butter. This creates multiple barriers to prevent moisture from escaping through your porous cuticle.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <Shield className="w-10 h-10 text-purple-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Best Sealing Oils</h3>
                <p className="text-gray-600 mb-6">High porosity hair needs heavy oils that coat and seal the cuticle:</p>
                <ul className="space-y-4">
                  {bestOils.map((oil, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="font-bold text-gray-900">{oil.name}</span>
                        <p className="text-sm text-gray-600">{oil.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <ThermometerSnowflake className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Cold Water Matters</h3>
                <p className="text-gray-600 mb-4">
                  For high porosity hair, cold water is your friend. While warm water opens the cuticle (great for low porosity), cold water helps close it.
                </p>
                <p className="text-gray-600 mb-4">
                  After conditioning and applying leave-ins, a final cold rinse helps seal the cuticle shut. This keeps your products and moisture locked inside rather than evaporating away.
                </p>
                <p className="text-gray-600">
                  It doesn't have to be ice cold - cool water works too. Just avoid finishing with hot water, which leaves cuticles wide open.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">High Porosity Hair FAQs</h2>
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-lg mb-2">Is high porosity hair always damaged?</h3>
                <p className="text-gray-600">Not necessarily. Some people are genetically predisposed to high porosity hair. However, heat styling, chemical treatments, and environmental damage can also raise the cuticle and create high porosity. The care routine is similar regardless of the cause.</p>
              </div>
              <div className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-lg mb-2">How often should I use protein treatments?</h3>
                <p className="text-gray-600">High porosity hair generally needs more protein than other types because the gaps in the cuticle benefit from being filled. Start with a protein treatment every 2 weeks and adjust based on how your hair responds. If it feels brittle, reduce frequency. If it still feels limp and stretchy, you may need more.</p>
              </div>
              <div className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-lg mb-2">Why does my hair color fade so fast?</h3>
                <p className="text-gray-600">The same gaps that let moisture escape also let color molecules escape. High porosity hair typically has faster color fade. Using color-protecting products and cold water rinses can help. Consider getting color refresh treatments more frequently if you dye your hair.</p>
              </div>
              <div className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-lg mb-2">Can I lower my hair's porosity?</h3>
                <p className="text-gray-600">If your high porosity is from damage, protein treatments and careful care can help temporarily fill gaps and improve moisture retention. However, you can't permanently change the porosity of existing hair. As new, healthy hair grows in, it will have your natural porosity level.</p>
              </div>
              <div className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-lg mb-2">Should I avoid heat styling completely?</h3>
                <p className="text-gray-600">Heat further damages the cuticle, which is already compromised in high porosity hair. If you must use heat, always use a heat protectant and keep temperatures as low as possible. Air drying is the safest option when you can.</p>
              </div>
              <div className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-lg mb-2">What's the difference between LOC and LCO?</h3>
                <p className="text-gray-600">LOC means Liquid, Oil, Cream. LCO means Liquid, Cream, Oil. For high porosity hair, LOC usually works better because the oil helps start sealing the cuticle before the cream adds the final barrier. LCO is typically recommended for low porosity hair.</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-xl font-bold mb-6">Compare with Low Porosity</h3>
              <p className="text-gray-600 mb-6">Not sure which porosity you have?</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/hair-routine-for-low-porosity">
                  <Button variant="outline" className="text-gray-700 border-purple-300 hover:bg-purple-50">View Low Porosity Guide</Button>
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
            <Sparkles className="w-12 h-12 text-purple-300 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Get Your Personalized Sealant Recommendations</h2>
            <p className="text-purple-100 mb-8 max-w-xl mx-auto">
              We'll help you find the best heavy butters and oils that successfully seal high porosity hair, based on your specific needs.
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
