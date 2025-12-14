import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'support@hairgen.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Fri: 9AM - 6PM EST',
      description: 'Weekend support available'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      details: 'Available on website',
      description: 'Instant assistance during hours'
    }
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Hair Routine Generator",
    "description": "Get in touch with Hair Routine Generator for hair care advice, support, or general inquiries.",
    "url": "https://hairgen.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Hair Routine Generator",
      "email": "support@hairgen.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "email": "support@hairgen.com",
        "availableLanguage": "English",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Hair Routine Generator | Hair Care Support & Inquiries</title>
        <meta name="description" content="Contact Hair Routine Generator for personalized hair care advice, product recommendations, or general support. Our expert team is here to help you achieve your hair goals." />
        <meta name="keywords" content="contact hairgen, hair care support, hair advice, customer service, hair care help" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hairgen.com/contact" />
        
        <meta property="og:title" content="Contact Us - Hair Routine Generator" />
        <meta property="og:description" content="Get in touch with our hair care experts for personalized advice and support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hairgen.com/contact" />
        
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-yellow-50 to-white py-10">
          <div className="container mx-auto px-4 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-4"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-yellow-400 rounded-full flex items-center justify-center mx-auto">
                <Mail className="w-4 h-4 text-white" />
              </div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                Get in{' '}
                <span className="bg-gradient-to-r from-green-500 to-yellow-400 bg-clip-text text-transparent">
                  Touch
                </span>
              </h1>
              <p className="text-sm text-gray-600 max-w-xl mx-auto">
                Have questions about your hair care routine? Need personalized advice? Our expert team is here to help.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-10 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-5 mb-10">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-xl p-5 text-center space-y-3 hover:shadow-lg transition-shadow"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-yellow-400 rounded-lg flex items-center justify-center mx-auto">
                    <info.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900">{info.title}</h3>
                  <p className="text-green-600 font-semibold text-sm">{info.details}</p>
                  <p className="text-gray-600 text-xs">{info.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                  <p className="text-gray-600 text-sm">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 rounded-xl p-5 text-center space-y-3"
                  >
                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
                    <h3 className="text-lg font-bold text-gray-900">Message Sent!</h3>
                    <p className="text-gray-600">
                      Thank you for reaching out. Our team will review your message and respond within 24 hours.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-gradient-to-r from-green-500 to-yellow-400 text-white"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select a topic</option>
                        <option value="hair-advice">Hair Care Advice</option>
                        <option value="product-recommendations">Product Recommendations</option>
                        <option value="routine-help">Routine Help</option>
                        <option value="technical-support">Technical Support</option>
                        <option value="partnership">Partnership Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                        placeholder="Tell us about your hair care concerns or questions..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-green-500 to-yellow-400 text-white hover:opacity-90 py-6"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 shadow-lg space-y-4">
                  <h3 className="text-lg font-bold text-gray-900">Frequently Asked Questions</h3>
                  
                  <div className="space-y-4">
                    <div className="border-b border-gray-200 pb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">How quickly will I receive a response?</h4>
                      <p className="text-gray-600 text-sm">Our team typically responds within 24 hours during business days. Urgent inquiries are prioritized.</p>
                    </div>
                    
                    <div className="border-b border-gray-200 pb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Can I get personalized hair advice?</h4>
                      <p className="text-gray-600 text-sm">Absolutely! We offer personalized recommendations based on your hair type and concerns. Try our free quiz first for instant results.</p>
                    </div>
                    
                    <div className="border-b border-gray-200 pb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Do you offer partnership opportunities?</h4>
                      <p className="text-gray-600 text-sm">Yes, we welcome collaborations with brands and professionals. Select "Partnership Inquiry" in the form above.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Is my information secure?</h4>
                      <p className="text-gray-600 text-sm">We take privacy seriously. All communications are encrypted and handled according to our privacy policy.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500 to-yellow-400 rounded-xl p-5 text-white">
                  <h3 className="text-lg font-bold mb-3">Quick Hair Assessment</h3>
                  <p className="mb-4 opacity-90 text-sm">
                    Want instant, personalized hair care recommendations? Take our free quiz.
                  </p>
                  <a href="/quiz">
                    <Button className="bg-white text-green-600 hover:bg-gray-100 w-full">
                      Take the Free Quiz
                    </Button>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;