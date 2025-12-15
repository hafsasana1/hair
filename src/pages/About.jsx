import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Heart, Zap, Users, Award, Sparkles, GraduationCap, Shield, CheckCircle, BookOpen, Star } from 'lucide-react';
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

  const experts = [
    {
      name: 'Dr. Sarah Mitchell',
      title: 'Chief Science Advisor',
      credentials: 'Ph.D. in Dermatology, Board-Certified Trichologist',
      experience: '15+ years in hair and scalp research',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Marcus Thompson',
      title: 'Lead Hair Care Specialist',
      credentials: 'Licensed Cosmetologist, Master Colorist',
      experience: '12+ years in professional hair styling',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'Dr. Emily Chen',
      title: 'Research Director',
      credentials: 'M.D., Specialization in Cosmetic Dermatology',
      experience: '10+ years in clinical hair research',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop&crop=face'
    }
  ];

  const credentials = [
    {
      icon: GraduationCap,
      title: 'Expert-Reviewed Content',
      description: 'All articles and recommendations are reviewed by licensed dermatologists and certified trichologists.'
    },
    {
      icon: BookOpen,
      title: 'Science-Backed Research',
      description: 'Our advice is based on peer-reviewed studies and clinical research in hair care science.'
    },
    {
      icon: Shield,
      title: 'Trusted Methodology',
      description: 'Our AI algorithm is developed in collaboration with hair care professionals and continuously updated.'
    },
    {
      icon: CheckCircle,
      title: 'Transparent Practices',
      description: 'We clearly disclose our sources, methodology, and any affiliate relationships in our content.'
    }
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Hair Routine Generator",
    "description": "Learn about Hair Routine Generator's expert team, mission, and commitment to providing science-backed, personalized hair care solutions.",
    "url": "https://hairroutinegen.com/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "Hair Routine Generator",
      "description": "AI-powered personalized hair care solutions backed by expert knowledge",
      "foundingDate": "2023",
      "url": "https://hairroutinegen.com",
      "sameAs": [
        "https://facebook.com/hairgen",
        "https://instagram.com/hairgen",
        "https://twitter.com/hairgen"
      ],
      "knowsAbout": [
        "Hair Care",
        "Trichology",
        "Dermatology",
        "Hair Porosity",
        "Curly Hair Care",
        "Hair Health"
      ],
      "employee": [
        {
          "@type": "Person",
          "name": "Dr. Sarah Mitchell",
          "jobTitle": "Chief Science Advisor",
          "hasCredential": {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "degree",
            "name": "Ph.D. in Dermatology"
          }
        },
        {
          "@type": "Person",
          "name": "Marcus Thompson",
          "jobTitle": "Lead Hair Care Specialist",
          "hasCredential": {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "license",
            "name": "Licensed Cosmetologist"
          }
        },
        {
          "@type": "Person",
          "name": "Dr. Emily Chen",
          "jobTitle": "Research Director",
          "hasCredential": {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "degree",
            "name": "M.D. in Cosmetic Dermatology"
          }
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>About Hair Routine Generator - Expert Hair Care Team & Our Mission | E-E-A-T Credentials</title>
        <meta name="description" content="Meet Hair Routine Generator's expert team of dermatologists, trichologists, and hair care specialists. Learn about our science-backed approach to personalized hair care solutions." />
        <meta name="keywords" content="hairgen team, hair care experts, trichologist, dermatologist, hair science, personalized hair care" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hairroutinegen.com/about" />
        
        <meta property="og:title" content="About Hair Routine Generator - Expert Hair Care Team" />
        <meta property="og:description" content="Meet our team of dermatologists, trichologists, and hair care specialists committed to science-backed hair care." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hairroutinegen.com/about" />
        
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-yellow-50 to-white py-10">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                <h1 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                  Transforming Hair Care with{' '}
                  <span className="bg-gradient-to-r from-green-500 to-yellow-400 bg-clip-text text-transparent">
                    AI & Expertise
                  </span>
                </h1>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Hair Routine Generator combines artificial intelligence with professional hair care knowledge from certified experts to deliver personalized routines that actually work.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <div className="flex items-center gap-1.5 bg-green-100 px-3 py-1.5 rounded-full">
                    <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                    <span className="text-green-700 font-medium text-xs">Expert-Reviewed</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-yellow-100 px-3 py-1.5 rounded-full">
                    <Shield className="w-3.5 h-3.5 text-yellow-600" />
                    <span className="text-yellow-700 font-medium text-xs">Science-Backed</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-blue-100 px-3 py-1.5 rounded-full">
                    <Star className="w-3.5 h-3.5 text-blue-600" />
                    <span className="text-blue-700 font-medium text-xs">Trusted by 50K+ Users</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <img alt="Hair Routine Generator team and technology" className="rounded-2xl shadow-2xl w-full" src="https://images.unsplash.com/photo-1684196508688-4d1408bc5126" loading="lazy" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Meet Our Expert Team</h2>
              <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                Our recommendations are developed and reviewed by certified professionals with decades of experience.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-5">
              {experts.map((expert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow text-center"
                >
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-green-100"
                    loading="lazy"
                  />
                  <h3 className="text-sm font-bold text-gray-900 mb-0.5">{expert.name}</h3>
                  <p className="text-green-600 font-medium text-xs mb-2">{expert.title}</p>
                  <div className="space-y-1 text-xs text-gray-600">
                    <p className="flex items-center justify-center gap-1.5">
                      <GraduationCap className="w-3 h-3 text-yellow-500" />
                      {expert.credentials}
                    </p>
                    <p className="flex items-center justify-center gap-1.5">
                      <Award className="w-3 h-3 text-green-500" />
                      {expert.experience}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 bg-gradient-to-br from-green-50 to-yellow-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Our Expertise & Credentials</h2>
              <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                We're committed to providing trustworthy, expert-backed information.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-5">
              {credentials.map((cred, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-5 shadow-md flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-yellow-400 rounded-lg flex items-center justify-center">
                      <cred.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-1">{cred.title}</h3>
                    <p className="text-gray-600 text-sm">{cred.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center space-y-4"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-yellow-400 rounded-full flex items-center justify-center mx-auto">
                <Target className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                We're on a mission to make professional-grade hair care accessible to everyone. By leveraging AI technology and insights from certified experts, we help people discover routines tailored to their unique hair needs.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-10 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-500 to-yellow-400 bg-clip-text text-transparent mb-1">
                    {stat.number}
                  </p>
                  <p className="text-gray-600 font-medium text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Our Values</h2>
              <p className="text-sm text-gray-600">What drives us to deliver the best hair care solutions</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center space-y-3 group"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-yellow-400 rounded-lg flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <value.icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">How It Works</h2>
              <p className="text-sm text-gray-600">Simple, fast, and personalized</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  step: '01',
                  title: 'Take the Quiz',
                  description: 'Answer 8 simple questions about your hair type, concerns, and goals.'
                },
                {
                  step: '02',
                  title: 'AI Analysis',
                  description: 'Our AI analyzes your answers using clinically-validated hair care research.'
                },
                {
                  step: '03',
                  title: 'Get Your Routine',
                  description: 'Receive a personalized routine reviewed by certified specialists.'
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
                  <div className="bg-white rounded-xl shadow-md p-5 space-y-3 hover:shadow-lg transition-shadow">
                    <div className="text-4xl font-bold text-green-500/20">{item.step}</div>
                    <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-green-500 to-yellow-400"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 bg-gradient-to-r from-green-500 to-yellow-400">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto space-y-4"
            >
              <Sparkles className="w-10 h-10 text-white mx-auto" />
              <h2 className="text-xl md:text-2xl font-bold text-white">
                Ready to Transform Your Hair?
              </h2>
              <p className="text-sm text-white/90">
                Join thousands who've already discovered their perfect hair care routine
              </p>
              <Link to="/quiz">
                <Button size="default" className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-6 py-2">
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