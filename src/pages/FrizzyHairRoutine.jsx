import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CloudFog, 
  Droplet, 
  ShieldCheck, 
  Scissors,
  ArrowRight,
  Sparkles,
  ThermometerSnowflake,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const FrizzyHairRoutine = () => {
  const frizzCauses = [
    { icon: Droplet, title: 'Lack of Moisture', desc: 'Dry hair reaches out to absorb moisture from the air, causing the cuticle to lift and swell. This creates that fluffy, undefined look we call frizz.', color: 'text-blue-500' },
    { icon: ShieldCheck, title: 'Damaged Cuticle', desc: 'Heat styling, chemical treatments, and rough handling lift the cuticle layer. When cuticles don\'t lie flat, hair looks rough and catches humidity easily.', color: 'text-green-500' },
    { icon: CloudFog, title: 'Humidity', desc: 'High dew points cause hair to absorb extra water from the air. This disrupts the hydrogen bonds in your hair, changing its shape and causing frizz.', color: 'text-gray-500' }
  ];

  const antifrizzSteps = [
    { step: 'Microfiber Towel', desc: 'Regular cotton towels create friction and rough up the cuticle. Microfiber or a cotton t-shirt gently absorbs water without causing frizz.' },
    { step: 'Cool Water Rinse', desc: 'End your shower with a cool water rinse. Cold water helps seal the cuticle flat, locking in moisture and creating a smoother surface.' },
    { step: 'Products on Wet Hair', desc: 'Apply styling products to soaking wet hair, not just damp. Water helps distribute products evenly and allows better penetration before drying.' },
    { step: 'Don\'t Touch While Drying', desc: 'The more you touch your hair while it dries, the more frizz you create. Let it air dry or diffuse without constantly adjusting.' }
  ];

  const ingredientsToSeek = [
    { name: 'Argan Oil', benefit: 'Smooths cuticle, adds shine without weight' },
    { name: 'Jojoba Oil', benefit: 'Mimics natural sebum, seals in moisture' },
    { name: 'Silicones', benefit: 'Creates protective barrier against humidity' },
    { name: 'Keratin', benefit: 'Strengthens and smooths damaged hair' },
    { name: 'Shea Butter', benefit: 'Deep moisture for very dry hair (use sparingly)' }
  ];

  return (
    <>
      <Helmet>
        <title>Anti-Frizz Hair Routine: How to Tame Frizz | HairGen</title>
        <meta name="description" content="Stop fighting the frizz. Learn the causes of frizzy hair and the step-by-step routine to smooth, hydrate, and seal your hair cuticle." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-b from-amber-50 to-white py-20">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CloudFog className="w-8 h-8 text-amber-600" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Tame the <span className="text-amber-600">Frizz</span> for Good
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Frizz isn't a hair type—it's your hair crying out for moisture and protection. Discover the routine that smooths the cuticle, locks in hydration, and keeps humidity at bay.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Understanding What Causes Frizz</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              To fix frizz, you need to understand why it happens. Frizz is essentially your hair's cuticle layer not lying flat. Here are the main culprits:
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {frizzCauses.map((cause, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-white border border-gray-100 shadow-lg rounded-xl text-center hover:-translate-y-1 transition-transform"
                >
                  <cause.icon className={`w-12 h-12 ${cause.color} mx-auto mb-4`} />
                  <h3 className="font-bold text-xl mb-3">{cause.title}</h3>
                  <p className="text-gray-600">{cause.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold mb-12 text-center">The Anti-Frizz Wash Day Strategy</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {antifrizzSteps.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">{item.step}</h3>
                      <p className="text-amber-100">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Your Complete Anti-Frizz Routine</h2>
            
            <div className="space-y-10">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">1</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Hydrating Cleanse</h3>
                  <p className="text-gray-600 mb-4">Use a moisturizing, sulfate-free shampoo. Sulfates strip natural oils, leaving hair dry and prone to frizz. Focus on massaging your scalp and let the suds gently cleanse your lengths as you rinse.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">2</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Deep Condition Weekly</h3>
                  <p className="text-gray-600 mb-4">Once a week, use a rich deep conditioning mask. Leave it on for 10-30 minutes (use heat for better absorption). This replenishes moisture that prevents your hair from reaching out to humid air for hydration.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">3</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Leave-In Conditioner</h3>
                  <p className="text-gray-600 mb-4">Apply a leave-in conditioner to soaking wet hair. This provides a base layer of moisture that your styling products can build upon. Focus on mid-lengths to ends.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">4</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Seal with Oil or Serum</h3>
                  <p className="text-gray-600 mb-4">Layer an anti-frizz oil or serum over your leave-in. This creates a protective barrier that seals moisture in and blocks humidity from getting in. A little goes a long way—start with a small amount.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">5</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Style Gently</h3>
                  <p className="text-gray-600 mb-4">Use smoothing techniques like "praying hands" to apply products. Avoid raking or aggressive scrunching which can rough up the cuticle. Let hair dry without touching it.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Ingredients That Fight Frizz</h2>
                <div className="space-y-4">
                  {ingredientsToSeek.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-100">
                      <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-gray-900">{item.name}</span>
                        <p className="text-sm text-gray-600">{item.benefit}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="bg-white p-8 rounded-2xl shadow-lg h-full">
                  <Scissors className="w-10 h-10 text-amber-600 mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">The Importance of Regular Trims</h3>
                  <p className="text-gray-600 mb-4">
                    Split ends are a major cause of frizz that no product can fix. When hair splits, it travels up the shaft, creating rough, frayed ends that catch humidity and stick out in all directions.
                  </p>
                  <p className="text-gray-600">
                    Regular trims every 8-12 weeks remove split ends before they can travel. Even if you're growing your hair out, small dustings keep your ends smooth and significantly reduce frizz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <ThermometerSnowflake className="w-16 h-16 text-blue-500 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">The Glycerin Debate</h3>
                  <p className="text-gray-600 mb-4">
                    Glycerin is a popular humectant that draws moisture into hair—but it works both ways. In very humid conditions, glycerin can pull too much moisture from the air, causing hair to swell and frizz. In very dry conditions, it can actually pull moisture out of your hair.
                  </p>
                  <p className="text-gray-600">
                    The solution? In moderate humidity, glycerin is your friend. In extreme weather (very humid or very dry), look for products that rely more on sealing ingredients like oils and silicones rather than humectants.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frizzy Hair FAQs</h2>
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-lg mb-2">Why is my hair still frizzy after using anti-frizz products?</h3>
                <p className="text-gray-600">There are several possibilities: you might be applying products to damp hair instead of soaking wet, touching your hair too much while drying, or using products that aren't right for your hair type. Also check if you have underlying damage that needs repair first.</p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-lg mb-2">Is some frizz normal?</h3>
                <p className="text-gray-600">Yes! A little frizz, especially around the hairline, is completely normal. Hair isn't meant to look perfectly smooth like magazine photos (which are heavily edited). The goal is to minimize frizz to a level you're comfortable with, not eliminate every flyaway.</p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-lg mb-2">Does brushing cause frizz?</h3>
                <p className="text-gray-600">Brushing dry hair can definitely cause frizz, especially for curly or wavy hair types. It breaks up your natural texture and creates static. If you need to detangle, do it when hair is wet and coated with conditioner, using a wide-tooth comb or wet brush.</p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-lg mb-2">Can sleeping cause frizz?</h3>
                <p className="text-gray-600">Yes! Tossing and turning on a cotton pillowcase creates friction that roughs up the cuticle. Switching to a silk or satin pillowcase, or wearing a silk bonnet to bed, can dramatically reduce overnight frizz and keep your style intact longer.</p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-lg mb-2">Does hair color affect frizz?</h3>
                <p className="text-gray-600">Color-treated hair, especially bleached hair, is more prone to frizz. The chemical process damages the cuticle, making it harder for hair to retain moisture. If you color your hair, you'll need extra conditioning treatments to combat frizz.</p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-lg mb-2">Are silicones bad for frizzy hair?</h3>
                <p className="text-gray-600">Despite some controversy, silicones can actually be great for frizzy hair. They create a smooth coating that seals the cuticle and blocks humidity. Water-soluble silicones wash out easily, while heavier ones may require clarifying occasionally. If silicones work for your hair, there's no need to avoid them.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-900 text-white text-center">
          <div className="container mx-auto px-4">
            <Sparkles className="w-12 h-12 text-amber-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Stop Guessing, Start Smoothing</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Our AI analyzes exactly why your hair is frizzing—whether it's porosity, damage, or simply dryness—and builds a personalized routine to fix it.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link to="/quiz">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8">
                  Get My Anti-Frizz Routine
                </Button>
              </Link>
              <Link to="/hair-routine-for-curly-hair">
                <Button size="lg" variant="outline" className="border-amber-500 text-amber-500 hover:bg-gray-800">
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
