import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Calendar, 
  HeartPulse, 
  Sparkles,
  ArrowRight,
  Scissors,
  Apple,
  Moon,
  Clock,
  Star,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const HairGrowthRoutine = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Hair Growth Routine: Science-Backed Tips for Longer, Thicker Hair",
        "description": "Learn the science behind hair growth and discover proven techniques to maximize your hair growth potential. Expert tips on nutrition, scalp health, and length retention.",
        "author": {
          "@type": "Organization",
          "name": "Hair Routine Generator"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Hair Routine Generator",
          "url": "https://hairgen.com"
        },
        "datePublished": "2024-01-10",
        "dateModified": "2024-12-14",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://hairgen.com/hair-growth-routine"
        }
      },
      {
        "@type": "HowTo",
        "name": "How to Maximize Hair Growth",
        "description": "A complete guide to growing longer, healthier hair through proper nutrition, scalp care, and length retention techniques",
        "totalTime": "PT5M",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Optimize Nutrition",
            "text": "Ensure adequate intake of biotin, iron, zinc, vitamin D, protein, and omega-3 fatty acids for healthy hair growth."
          },
          {
            "@type": "HowToStep",
            "name": "Scalp Massage",
            "text": "Perform a 4-minute scalp massage daily to increase blood flow and nutrient delivery to hair follicles."
          },
          {
            "@type": "HowToStep",
            "name": "Reduce Heat Damage",
            "text": "Minimize heat styling to prevent breakage and preserve length. Air dry when possible."
          },
          {
            "@type": "HowToStep",
            "name": "Protect Your Ends",
            "text": "Use protective styles and sleep on silk pillowcases to prevent breakage and retain length."
          },
          {
            "@type": "HowToStep",
            "name": "Regular Trims",
            "text": "Trim split ends regularly to prevent them from traveling up the hair shaft and causing more damage."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How fast does hair grow?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "On average, hair grows about half an inch (1.25 cm) per month, or 6 inches per year. This rate is largely genetic but can be optimized through proper nutrition and scalp care."
            }
          },
          {
            "@type": "Question",
            "name": "Does cutting hair make it grow faster?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, this is a myth. Hair grows from the follicle in your scalp, not from the ends. However, regular trims prevent split ends from causing breakage."
            }
          },
          {
            "@type": "Question",
            "name": "Does rosemary oil work for hair growth?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Studies suggest rosemary oil can be as effective as minoxidil for promoting hair growth. Dilute it with a carrier oil and massage into your scalp several times per week."
            }
          }
        ]
      }
    ]
  };

  const growthPhases = [
    { phase: 'Anagen (Growth)', duration: '2-7 years', color: 'bg-pink-400', desc: 'The active growth phase. Hair grows about half an inch per month. Our goal is to keep hair in this phase as long as possible through nutrition and scalp health.' },
    { phase: 'Catagen (Transition)', duration: '2-3 weeks', color: 'bg-yellow-400', desc: 'Hair stops growing and detaches from its blood supply. The follicle shrinks and the hair prepares to shed.' },
    { phase: 'Telogen (Resting)', duration: '3 months', color: 'bg-green-400', desc: 'The hair rests in the follicle before falling out. New hair begins to grow underneath. Stress can push more hair into this phase prematurely.' }
  ];

  const nutrients = [
    { name: 'Biotin (B7)', food: 'Eggs, nuts, whole grains', role: 'Supports keratin production - the protein that makes up hair' },
    { name: 'Iron', food: 'Spinach, red meat, lentils', role: 'Carries oxygen to hair follicles; deficiency is a common cause of hair loss' },
    { name: 'Zinc', food: 'Oysters, beef, pumpkin seeds', role: 'Essential for hair tissue growth and repair; keeps oil glands working' },
    { name: 'Vitamin D', food: 'Sunlight, fatty fish, fortified foods', role: 'Helps create new hair follicles; deficiency linked to alopecia' },
    { name: 'Protein', food: 'Meat, fish, eggs, legumes', role: 'Hair is made of protein (keratin); inadequate protein can weaken hair' },
    { name: 'Omega-3', food: 'Salmon, walnuts, flaxseed', role: 'Nourishes hair and supports thickening; reduces inflammation' }
  ];

  const growthTips = [
    { title: 'Scalp Massage', desc: 'Massage your scalp for 4 minutes daily. This increases blood flow to follicles, bringing more nutrients and oxygen. Studies show it can increase hair thickness.', icon: HeartPulse },
    { title: 'Reduce Heat Styling', desc: 'Heat damages the hair shaft, leading to breakage. When you lose length from breakage, it cancels out your growth. Air dry when possible.', icon: TrendingUp },
    { title: 'Sleep on Silk', desc: 'Cotton pillowcases create friction that causes breakage. Silk or satin allows hair to glide smoothly, preserving length and reducing damage.', icon: Moon },
    { title: 'Regular Trims', desc: 'Trimming doesn\'t make hair grow faster, but it prevents split ends from traveling up the shaft and causing more damage and breakage.', icon: Scissors }
  ];

  return (
    <>
      <Helmet>
        <title>Hair Growth Routine: Science-Backed Tips for Longer, Thicker Hair</title>
        <meta name="description" content="Discover proven hair growth techniques backed by science. Learn about the hair growth cycle, essential nutrients, scalp massage, and how to maximize your growth potential. Free personalized routine!" />
        <meta name="keywords" content="hair growth routine, how to grow hair faster, hair growth tips, scalp massage for hair growth, biotin for hair, rosemary oil hair growth, hair length retention" />
        <link rel="canonical" href="https://hairgen.com/hair-growth-routine" />
        <meta property="og:title" content="Hair Growth Routine: Science-Backed Tips | Hair Routine Generator" />
        <meta property="og:description" content="Learn the science behind growing longer, healthier hair. Expert tips on nutrition, scalp care, and length retention." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://hairgen.com/hair-growth-routine" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-pink-50 via-rose-50 to-white py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm text-pink-600 text-sm font-semibold mb-6">
                  <TrendingUp className="w-4 h-4" /> Growth Series
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Maximize Your <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">Hair Growth</span> Potential
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Genetics set your maximum potential, but your routine determines whether you reach it. Learn the science behind growing longer, stronger hair and discover proven techniques used by hair care professionals.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-5 h-5 text-pink-500" />
                    <span className="text-sm font-medium">12 min read</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-sm font-medium">Science-Backed</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link to="/quiz">
                    <Button size="lg" className="bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold hover:shadow-lg transition-all">
                      Get Your Growth Plan <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <img 
                  src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600" 
                  alt="Healthy long hair showing hair growth results" 
                  className="rounded-2xl shadow-2xl w-full object-cover"
                  loading="eager"
                />
                <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-pink-200 rounded-full blur-3xl opacity-50 -z-10"></div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Understanding the Hair Growth Cycle</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Each hair follicle cycles through three phases independently. At any given time, about 90% of your hair is in the growth phase. Understanding this cycle helps you support healthy growth.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {growthPhases.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-lg border-t-4"
                  style={{ borderColor: phase.color.replace('bg-', '') }}
                >
                  <div className={`${phase.color} text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4`}>
                    {phase.duration}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{phase.phase}</h3>
                  <p className="text-gray-600">{phase.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold mb-4 text-center">The Two-Part Growth Strategy</h2>
            <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
              Growing long hair requires both growing new length AND keeping the length you already have. Most people focus only on growth and forget about retention.
            </p>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <HeartPulse className="w-8 h-8 text-pink-400" />
                  <h3 className="text-2xl font-bold text-pink-400">Stimulation (Growth)</h3>
                </div>
                <p className="text-gray-300">
                  Blood flow delivers nutrients to the hair follicle. The more nutrients your follicle receives, the healthier and faster your hair can grow.
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400">•</span>
                    <span>Perform a 4-minute scalp massage daily</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400">•</span>
                    <span>Use rosemary oil (diluted) - studies show it rivals minoxidil</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400">•</span>
                    <span>Ensure adequate nutrition (protein, iron, zinc)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400">•</span>
                    <span>Reduce stress, which can push hair into telogen</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Sparkles className="w-8 h-8 text-green-400" />
                  <h3 className="text-2xl font-bold text-green-400">Retention (Keeping Length)</h3>
                </div>
                <p className="text-gray-300">
                  Growing hair is pointless if it breaks off at the ends. Length retention ensures you keep every inch of growth you achieve.
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span>Use protective styles that tuck ends away</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span>Sleep on a satin or silk pillowcase</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span>Keep ends moisturized and sealed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span>Regular dustings to remove split ends before they travel</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex items-center gap-4 mb-12">
              <Apple className="w-10 h-10 text-pink-500" />
              <h2 className="text-3xl font-bold text-gray-900">Essential Nutrients for Hair Growth</h2>
            </div>
            <p className="text-gray-600 mb-8 max-w-3xl">
              Your hair is built from the nutrients you consume. Deficiencies in key vitamins and minerals can slow growth or cause increased shedding. Here's what your hair needs:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {nutrients.map((nutrient, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-pink-50 p-6 rounded-xl border border-pink-100"
                >
                  <h4 className="font-bold text-lg text-pink-700 mb-1">{nutrient.name}</h4>
                  <p className="text-sm text-gray-500 mb-2">Found in: {nutrient.food}</p>
                  <p className="text-gray-600">{nutrient.role}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 bg-yellow-50 p-6 rounded-xl border border-yellow-100">
              <h4 className="font-bold text-gray-900 mb-2">A Note on Supplements</h4>
              <p className="text-gray-600">
                If you eat a balanced diet, you likely get enough of these nutrients. Hair supplements help when you have a deficiency, but won't make normal hair grow faster. Before taking supplements, consider getting blood work to check for actual deficiencies - too much of certain vitamins can be harmful.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Daily & Weekly Growth Habits</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {growthTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-lg"
                >
                  <tip.icon className="w-10 h-10 text-pink-500 mb-4" />
                  <h3 className="font-bold text-xl text-gray-900 mb-3">{tip.title}</h3>
                  <p className="text-gray-600">{tip.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Hair Growth FAQs</h2>
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-lg mb-2">How fast does hair actually grow?</h3>
                <p className="text-gray-600">On average, hair grows about half an inch (1.25 cm) per month, or 6 inches per year. This rate is largely genetic and can't be dramatically increased. However, you can ensure you're reaching your personal maximum by eating well, caring for your scalp, and preventing breakage.</p>
              </div>
              <div className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-lg mb-2">Does cutting hair make it grow faster?</h3>
                <p className="text-gray-600">No, this is a myth. Hair grows from the follicle in your scalp, not from the ends. Cutting has no effect on growth rate. However, regular trims prevent split ends from traveling up the shaft and causing breakage, which helps you retain the length you grow.</p>
              </div>
              <div className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-lg mb-2">Does rosemary oil really work for hair growth?</h3>
                <p className="text-gray-600">Studies suggest yes! A 2015 study found rosemary oil to be as effective as minoxidil (Rogaine) for promoting hair growth, with fewer side effects like scalp itching. Dilute it with a carrier oil and massage into your scalp several times per week.</p>
              </div>
              <div className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-lg mb-2">Why does my hair seem to stop growing at a certain length?</h3>
                <p className="text-gray-600">Your hair has a genetically determined growth phase (anagen). When this phase ends, the hair stops growing and eventually falls out. This is why some people can grow hip-length hair while others struggle to get past their shoulders. Breakage can also make it seem like hair won't grow - the ends are breaking off at the same rate as new growth.</p>
              </div>
              <div className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-lg mb-2">Can stress really cause hair loss?</h3>
                <p className="text-gray-600">Yes, significant stress can trigger telogen effluvium, where a large number of hairs enter the resting phase simultaneously and fall out 2-3 months later. The good news is this type of hair loss is usually temporary and hair regrows once stress is managed.</p>
              </div>
              <div className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-lg mb-2">How do I know if I'm losing too much hair?</h3>
                <p className="text-gray-600">Losing 50-100 hairs per day is normal. If you're suddenly seeing more hair in your brush, shower drain, or on your pillow, or if you notice thinning or bald spots, that's worth investigating. Keep in mind that longer hair looks like more volume when it falls out, which can be misleading.</p>
              </div>
              <div className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-lg mb-2">Do biotin supplements help hair grow?</h3>
                <p className="text-gray-600">Biotin helps if you have a biotin deficiency, which is rare. For most people eating a normal diet, extra biotin won't speed up hair growth. It won't hurt (excess is excreted in urine), but don't expect miracles. Focus on overall nutrition rather than any single supplement.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quiz CTA Mid-Section */}
        <section className="py-12 bg-gradient-to-r from-pink-500 to-rose-500">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-6 h-6" />
                  <span className="font-semibold">Personalized Growth Plan</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Get a Custom Hair Growth Routine</h3>
                <p className="text-pink-100">Our AI analyzes your hair type, goals, and lifestyle to create a tailored growth plan that works for you.</p>
              </div>
              <Link to="/quiz">
                <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 font-bold whitespace-nowrap">
                  Start Free Analysis <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl font-bold mb-4 text-center">Explore More Hair Care Guides</h2>
            <p className="text-gray-600 text-center mb-8">Continue your hair care journey with these related resources:</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link to="/hair-routine-for-damaged-hair" className="bg-white p-4 rounded-xl border border-amber-100 hover:shadow-md transition-all group">
                <h4 className="font-bold text-amber-700 group-hover:text-amber-800">Repair Damaged Hair</h4>
                <p className="text-sm text-gray-600">Restore strength and shine</p>
              </Link>
              <Link to="/hair-routine-for-dry-scalp" className="bg-white p-4 rounded-xl border border-yellow-100 hover:shadow-md transition-all group">
                <h4 className="font-bold text-yellow-700 group-hover:text-yellow-800">Dry Scalp Solutions</h4>
                <p className="text-sm text-gray-600">Hydrate and soothe your scalp</p>
              </Link>
              <Link to="/hair-routine-for-oily-scalp" className="bg-white p-4 rounded-xl border border-lime-100 hover:shadow-md transition-all group">
                <h4 className="font-bold text-lime-700 group-hover:text-lime-800">Oily Scalp Care</h4>
                <p className="text-sm text-gray-600">Balance and cleanse naturally</p>
              </Link>
              <Link to="/hair-routine-for-wavy-hair" className="bg-white p-4 rounded-xl border border-teal-100 hover:shadow-md transition-all group">
                <h4 className="font-bold text-teal-700 group-hover:text-teal-800">Wavy Hair Routine</h4>
                <p className="text-sm text-gray-600">Enhance your natural waves</p>
              </Link>
              <Link to="/hair-routine-for-curly-hair" className="bg-white p-4 rounded-xl border border-purple-100 hover:shadow-md transition-all group">
                <h4 className="font-bold text-purple-700 group-hover:text-purple-800">Curly Hair Care</h4>
                <p className="text-sm text-gray-600">Define and nourish curls</p>
              </Link>
              <Link to="/hair-routine-for-low-porosity" className="bg-white p-4 rounded-xl border border-emerald-100 hover:shadow-md transition-all group">
                <h4 className="font-bold text-emerald-700 group-hover:text-emerald-800">Low Porosity Tips</h4>
                <p className="text-sm text-gray-600">Moisture for resistant hair</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 text-center bg-gradient-to-r from-pink-500 to-rose-500 text-white">
          <div className="container mx-auto px-4">
            <Sparkles className="w-12 h-12 text-pink-200 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Get Your Personalized Growth Routine</h2>
            <p className="text-pink-100 mb-8 max-w-xl mx-auto">
              Our AI analyzes your hair type, goals, and current routine to create a customized plan for maximizing your hair growth potential.
            </p>
            <Link to="/quiz">
              <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 font-bold px-8">
                Start Free Analysis <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default HairGrowthRoutine;
