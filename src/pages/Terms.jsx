import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Hair Routine Generator</title>
        <meta name="description" content="Read Hair Routine Generator's terms of service to understand the rules and regulations for using our AI-powered hair care platform." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hairroutinegen.com/terms" />
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
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Terms of Service</h1>
              <p className="text-gray-600">Last Updated</p>
            </div>

            {/* Content */}
            <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">1. Acceptance of Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing and using Hair Routine Generator's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">2. Use License</h2>
                <p className="text-gray-700 leading-relaxed">
                  Permission is granted to temporarily access and use Hair Routine Generator's services for personal, non-commercial use only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <div className="space-y-3 ml-6">
                  <p className="text-gray-700">• Modify or copy the materials</p>
                  <p className="text-gray-700">• Use the materials for any commercial purpose</p>
                  <p className="text-gray-700">• Attempt to decompile or reverse engineer any software</p>
                  <p className="text-gray-700">• Remove any copyright or other proprietary notations</p>
                  <p className="text-gray-700">• Transfer the materials to another person or "mirror" the materials on any other server</p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">3. Service Description</h2>
                <p className="text-gray-700 leading-relaxed">
                  Hair Routine Generator provides AI-powered personalized hair care routine recommendations. Our service includes:
                </p>
                <div className="bg-green-50 p-6 rounded-xl space-y-2">
                  <p className="text-gray-700">• A comprehensive hair care quiz</p>
                  <p className="text-gray-700">• AI-generated personalized hair care routines</p>
                  <p className="text-gray-700">• Product recommendations and care tips</p>
                  <p className="text-gray-700">• Educational content and blog articles</p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">4. Disclaimer</h2>
                <p className="text-gray-700 leading-relaxed">
                  The materials on Hair Routine Generator's website are provided on an 'as is' basis. Hair Routine Generator makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
                <div className="bg-yellow-50 p-6 rounded-xl">
                  <p className="text-gray-700 font-semibold mb-2">Medical Disclaimer:</p>
                  <p className="text-gray-700">
                    Hair Routine Generator's recommendations are for informational purposes only and do not constitute medical advice. If you have concerns about your hair or scalp health, please consult with a qualified healthcare professional or licensed dermatologist.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">5. Limitations</h2>
                <p className="text-gray-700 leading-relaxed">
                  In no event shall Hair Routine Generator or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use Hair Routine Generator's services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">6. Accuracy of Materials</h2>
                <p className="text-gray-700 leading-relaxed">
                  The materials appearing on Hair Routine Generator's website could include technical, typographical, or photographic errors. Hair Routine Generator does not warrant that any of the materials on its website are accurate, complete or current. Hair Routine Generator may make changes to the materials contained on its website at any time without notice.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">7. Links</h2>
                <p className="text-gray-700 leading-relaxed">
                  Hair Routine Generator has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Hair Routine Generator of the site. Use of any such linked website is at the user's own risk.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">8. User Content</h2>
                <p className="text-gray-700 leading-relaxed">
                  By submitting information through our quiz or other features, you grant Hair Routine Generator a non-exclusive, royalty-free, perpetual, and worldwide license to use, modify, and distribute such information for the purpose of providing and improving our services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">9. Modifications</h2>
                <p className="text-gray-700 leading-relaxed">
                  Hair Routine Generator may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">10. Governing Law</h2>
                <p className="text-gray-700 leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">11. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="bg-yellow-50 p-6 rounded-xl">
                  <p className="text-gray-700 font-semibold">Email: legal@hairroutinegen.com</p>
                  <p className="text-gray-700 mt-2">We aim to respond to all inquiries within 48 hours.</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Terms;