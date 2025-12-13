import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Heart, Zap, Users, Award, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Personalization',
      description: 'Every person\'s hair is unique. We believe in tailored solutions, not one-size-fits-all approaches.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Combining AI technology with hair care expertise to deliver cutting-edge recommendations.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a supportive community where everyone can achieve their hair goals together.'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Recommending only the best products and practices backed by science and experts.'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Happy Users' },
    { number: '100,000+', label: 'Routines Generated' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '95%', label: 'Success Rate' }
  ];

  return (
    <>
      <Helmet>
        <title>About HairGen - AI-Powered Hair Care Solutions</title>
        <meta name="description" content="Learn about HairGen's mission to provide personalized hair care routines using AI technology and expert knowledge." />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-yellow-50 to-white py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Transforming Hair Care with{' '}
                  <span className="bg-gradient-to-r from-green-500 to-yellow-400 bg-clip-text text-transparent">
                    AI & Expertise
                  </span>
                </h1>
                <p className="text-xl text-gray-600">
                  HairGen combines artificial intelligence with professional hair care knowledge to deliver personalized routines that actually work.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <img alt="HairGen team and technology" className="rounded-2xl shadow-2xl w-full" src="https://images.unsplash.com/photo-1684196508688-4d1408bc5126" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center space-y-6"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-yellow-400 rounded-full flex items-center justify-center mx-auto">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We're on a mission to make professional-grade hair care accessible to everyone. By leveraging advanced AI technology and insights from hair care experts, we help people discover routines perfectly tailored to their unique hair needs, lifestyle, and goals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-yellow-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-500 to-yellow-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </p>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600">What drives us to deliver the best hair care solutions</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center space-y-4 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-yellow-400 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-xl text-gray-600">Simple, fast, and personalized</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Take the Quiz',
                  description: 'Answer 8 simple questions about your hair type, concerns, lifestyle, and goals.'
                },
                {
                  step: '02',
                  title: 'AI Analysis',
                  description: 'Our advanced AI analyzes your answers and matches them with expert hair care knowledge.'
                },
                {
                  step: '03',
                  title: 'Get Your Routine',
                  description: 'Receive a personalized routine with product recommendations and expert tips.'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl shadow-lg p-8 space-y-4 hover:shadow-xl transition-shadow">
                    <div className="text-6xl font-bold text-green-500/20">{item.step}</div>
                    <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-green-500 to-yellow-400"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-500 to-yellow-400">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto space-y-6"
            >
              <Sparkles className="w-16 h-16 text-white mx-auto" />
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Ready to Transform Your Hair?
              </h2>
              <p className="text-xl text-white/90">
                Join thousands who've already discovered their perfect hair care routine
              </p>
              <Link to="/quiz">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 font-semibold text-lg px-8 py-6">
                  Start Your Journey
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;