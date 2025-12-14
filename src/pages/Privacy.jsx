import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Hair Routine Generator</title>
        <meta name="description" content="Read Hair Routine Generator's privacy policy to understand how we collect, use, and protect your personal information." />
      </Helmet>

      <div className="min-h-screen bg-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-yellow-400 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Privacy Policy</h1>
              <p className="text-gray-600">Last Updated: December 12, 2025</p>
            </div>

            {/* Content */}
            <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">1. Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  Welcome to Hair Routine Generator. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">2. Information We Collect</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                </p>
                <div className="bg-green-50 p-6 rounded-xl space-y-2">
                  <p className="text-gray-700"><span className="font-semibold">Identity Data:</span> Your name and email address.</p>
                  <p className="text-gray-700"><span className="font-semibold">Quiz Data:</span> Your responses to our hair care quiz questions.</p>
                  <p className="text-gray-700"><span className="font-semibold">Technical Data:</span> IP address, browser type, and device information.</p>
                  <p className="text-gray-700"><span className="font-semibold">Usage Data:</span> Information about how you use our website and services.</p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">3. How We Use Your Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                </p>
                <div className="space-y-3 ml-6">
                  <p className="text-gray-700">• To provide you with personalized hair care recommendations</p>
                  <p className="text-gray-700">• To send you your customized routine via email</p>
                  <p className="text-gray-700">• To improve our services and user experience</p>
                  <p className="text-gray-700">• To send you marketing communications (with your consent)</p>
                  <p className="text-gray-700">• To analyze website usage and performance</p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">4. Data Storage and Security</h2>
                <p className="text-gray-700 leading-relaxed">
                  We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. Your data is stored securely using industry-standard encryption methods.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">5. Third-Party Services</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may use third-party services to help us operate our business and provide services to you. These third parties have access to your personal data only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">6. Your Rights</h2>
                <p className="text-gray-700 leading-relaxed">
                  Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
                </p>
                <div className="space-y-3 ml-6">
                  <p className="text-gray-700">• Request access to your personal data</p>
                  <p className="text-gray-700">• Request correction of your personal data</p>
                  <p className="text-gray-700">• Request erasure of your personal data</p>
                  <p className="text-gray-700">• Object to processing of your personal data</p>
                  <p className="text-gray-700">• Request restriction of processing your personal data</p>
                  <p className="text-gray-700">• Request transfer of your personal data</p>
                  <p className="text-gray-700">• Withdraw consent at any time</p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">7. Cookies</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website uses cookies to distinguish you from other users. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">8. Changes to This Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">9. Contact Us</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about this privacy policy or our privacy practices, please contact us at:
                </p>
                <div className="bg-yellow-50 p-6 rounded-xl">
                  <p className="text-gray-700 font-semibold">Email: privacy@hairgen.com</p>
                  <p className="text-gray-700">We aim to respond to all legitimate requests within one month.</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Privacy;