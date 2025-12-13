import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Droplets, 
  ThermometerSun, 
  Ban, 
  CheckCircle,
  ArrowRight,
  Sparkles,
  Clock,
  Layers
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const LowPorosityRoutine = () => {
  const signs = [
    'Water beads up on your hair instead of absorbing quickly',
    'Products tend to sit on top of hair rather than soaking in',
    'Hair takes a very long time to get fully wet in the shower',
    'Takes hours for your hair to air dry completely',
    'Buildup happens easily, even with small amounts of product',
    'Deep conditioners don\'t seem to make much difference'
  ];

  const bestIngredients = [
    { name: 'Glycerin', desc: 'A humectant that draws moisture from the air into your hair.' },
    { name: 'Honey', desc: 'Natural humectant that adds shine and softness without heaviness.' },
    { name: 'Aloe Vera', desc: 'Lightweight moisture that penetrates low porosity hair easily.' },
    { name: 'Argan Oil', desc: 'Light enough to absorb without leaving heavy residue.' },
    { name: 'Jojoba Oil', desc: 'Mimics natural sebum, absorbs well into the hair shaft.' }
  ];

  return (
    <>
      <Helmet>
        <title>Low Porosity Hair Routine & Care Guide | HairGen</title>
        <meta name="description" content="Struggling to get moisture into your hair? Discover the best routine for low porosity hair, including heat tips, best ingredients, and products to avoid." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-emerald-50 via-green-50 to-white py-20">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <span className="text-emerald-600 font-bold tracking-wider text-sm uppercase mb-2 block">Hair Science 101</span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Mastering <span className="text-emerald-600">Low Porosity</span> Hair
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              If water sits on your hair like beads and products just sit on top without absorbing, you likely have low porosity hair. Here's how to finally get moisture in and keep your hair healthy.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Low Porosity?</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Hair porosity refers to your hair's ability to absorb and retain moisture. With low porosity hair, the cuticle layer (the outer protective layer of each strand) is tightly packed and lies flat. This creates a barrier that makes it difficult for water and products to penetrate.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  The good news? Once moisture finally gets into low porosity hair, it tends to stay there. Your hair is naturally more protected from environmental damage too. The challenge is getting past that barrier in the first place.
                </p>
                <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                  <h3 className="font-bold text-gray-900 mb-2">The Float Test</h3>
                  <p className="text-sm text-gray-600">
                    Take a clean strand of hair (wash it first to remove any products) and place it in a glass of room temperature water. If it floats at the top for 5+ minutes before starting to sink, you likely have low porosity hair.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">Signs You Have Low Porosity Hair</h3>
                {signs.map((sign, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <Droplets className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{sign}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-emerald-500 to-green-600 text-white">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <ThermometerSun className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
            <h2 className="text-3xl font-bold mb-4">The Secret Weapon: Heat</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Heat is your best friend when you have low porosity hair. It gently lifts the tightly packed cuticles, allowing moisture and products to penetrate. Without heat, even the best products may just sit on the surface.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h4 className="font-bold mb-2">Warm Water</h4>
                <p className="text-sm opacity-90">Always wash with warm (not hot) water to help open cuticles before applying products.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h4 className="font-bold mb-2">Heat Cap</h4>
                <p className="text-sm opacity-90">Use a heated cap during deep conditioning to dramatically improve absorption.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h4 className="font-bold mb-2">Warm Towel</h4>
                <p className="text-sm opacity-90">Wrap your hair in a warm, damp towel after applying treatments as a budget-friendly alternative.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Your Low Porosity Routine</h2>
            
            <div className="space-y-10">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">1</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Clarify Regularly</h3>
                  <p className="text-gray-600 mb-4">Low porosity hair is prone to buildup because products sit on top instead of absorbing. Use a clarifying shampoo every 2-4 weeks to remove buildup and create a clean slate for moisture.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">2</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Use Warm Water</h3>
                  <p className="text-gray-600 mb-4">Start your wash routine with warm water to help open the cuticle layer. This allows your shampoo to cleanse more effectively and prepares your hair to receive moisture.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">3</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Deep Condition with Heat</h3>
                  <p className="text-gray-600 mb-4">Apply a lightweight deep conditioner and add heat for 15-30 minutes. Use a heat cap, hooded dryer, or simply wrap your hair in a warm towel. This step makes all the difference for low porosity hair.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">4</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Choose Lightweight Products</h3>
                  <p className="text-gray-600 mb-4">Avoid heavy butters and thick creams that will just sit on your hair. Look for liquid-based products, lightweight milks, and water-based leave-ins that can actually penetrate the cuticle.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">5</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Use the LCO Method</h3>
                  <p className="text-gray-600 mb-4">For low porosity hair, the LCO (Liquid, Cream, Oil) method works better than LOC. Start with liquid/leave-in, add a light cream, then seal with a light oil. Applying oil last prevents it from blocking moisture absorption.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <Ban className="w-8 h-8 text-red-500" />
                  <h3 className="text-xl font-bold text-gray-900">Ingredients to Avoid</h3>
                </div>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">✕</span>
                    <span><strong>Heavy proteins</strong> - Can make low porosity hair stiff and brittle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">✕</span>
                    <span><strong>Thick butters</strong> - Shea butter and mango butter sit on hair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">✕</span>
                    <span><strong>Heavy oils</strong> - Castor oil, coconut oil can coat without penetrating</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">✕</span>
                    <span><strong>Silicones</strong> - Create a barrier that prevents moisture entry</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle className="w-8 h-8 text-emerald-500" />
                  <h3 className="text-xl font-bold text-gray-900">Best Ingredients</h3>
                </div>
                <ul className="space-y-4">
                  {bestIngredients.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span className="text-gray-600"><strong>{item.name}</strong> - {item.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Low Porosity Hair FAQs</h2>
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-lg mb-2">Why does my hair take so long to dry?</h3>
                <p className="text-gray-600">With low porosity hair, moisture has trouble getting in, but once it's inside, it also has trouble getting out. This is why low porosity hair can take hours to air dry. The tightly sealed cuticle traps water inside. Using lightweight products and allowing good airflow can help speed up drying time.</p>
              </div>
              <div className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-lg mb-2">Should I use the LOC or LCO method?</h3>
                <p className="text-gray-600">LCO (Liquid, Cream, Oil) typically works better for low porosity hair. If you apply oil first (LOC method), it can seal the cuticle before the liquid and cream have a chance to penetrate. With LCO, you get moisture in first, then seal it with oil at the end.</p>
              </div>
              <div className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-lg mb-2">Why does my deep conditioner seem to do nothing?</h3>
                <p className="text-gray-600">If you're not using heat during deep conditioning, your low porosity hair isn't fully absorbing the treatment. The heat opens the cuticle layer and allows the conditioning ingredients to actually penetrate. Try sitting under a hooded dryer or using a heat cap for 15-30 minutes.</p>
              </div>
              <div className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-lg mb-2">Is low porosity hair naturally healthier?</h3>
                <p className="text-gray-600">In some ways, yes. The tightly sealed cuticle protects your hair from environmental damage, chemicals, and excessive moisture loss. However, it also means your hair needs special care to stay moisturized. With the right routine, low porosity hair can look incredibly shiny and healthy.</p>
              </div>
              <div className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-lg mb-2">How often should I clarify low porosity hair?</h3>
                <p className="text-gray-600">Every 2-4 weeks is a good starting point. Low porosity hair builds up product easily because products tend to sit on the surface. Regular clarifying removes this buildup so your hair can actually receive moisture on wash days.</p>
              </div>
              <div className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-lg mb-2">Can my hair porosity change over time?</h3>
                <p className="text-gray-600">While your natural porosity is largely genetic, chemical treatments, heat damage, and even environmental factors can temporarily change how your hair behaves. Bleaching, for example, damages the cuticle and can make previously low porosity hair behave like high porosity hair.</p>
              </div>
            </div>

            <div className="mt-12 text-center space-y-4">
              <p className="text-gray-600">Explore routines for your texture:</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
                <Link to="/hair-routine-for-curly-hair" className="text-emerald-600 hover:underline">Curly Hair</Link>
                <span className="text-gray-300">|</span>
                <Link to="/hair-routine-for-2b-hair" className="text-emerald-600 hover:underline">Wavy Hair</Link>
                <span className="text-gray-300">|</span>
                <Link to="/hair-routine-for-high-porosity" className="text-emerald-600 hover:underline">High Porosity Hair</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 text-center bg-gradient-to-br from-emerald-50 to-green-50">
          <div className="container mx-auto px-4">
            <Sparkles className="w-12 h-12 text-emerald-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Build Your Low Porosity Regimen</h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">Get product recommendations specifically chosen for low porosity hair based on your unique needs.</p>
            <Link to="/quiz">
              <Button size="lg" className="bg-emerald-600 text-white hover:bg-emerald-700">
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
