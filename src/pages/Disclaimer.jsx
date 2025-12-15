import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

const Disclaimer = () => {
  return (
    <>
      <Helmet>
        <title>Disclaimer - Hair Routine Generator</title>
        <meta name="description" content="Read Hair Routine Generator's disclaimer to understand the limitations of our hair care advice and recommendations." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hairroutinegen.com/disclaimer" />
      </Helmet>

      <div className="min-h-screen bg-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-400 rounded-full flex items-center justify-center mx-auto">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Disclaimer</h1>
              <p className="text-gray-600">Last Updated: December 2025</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">1. General Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  The information provided on Hair Routine Generator ("Website") is for general informational and educational purposes only. All information on the Website is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Website.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">2. Not Professional Advice</h2>
                <p className="text-gray-700 leading-relaxed">
                  The content on this Website is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Hair care recommendations provided through our quiz and content are based on general guidelines and may not be suitable for everyone.
                </p>
                <div className="bg-amber-50 p-6 rounded-xl space-y-2">
                  <p className="text-gray-700"><span className="font-semibold">Medical Conditions:</span> If you have any scalp conditions, hair loss concerns, or other medical issues, please consult a dermatologist or healthcare professional.</p>
                  <p className="text-gray-700"><span className="font-semibold">Allergies:</span> Always perform a patch test before using any new hair care product recommended on this Website.</p>
                  <p className="text-gray-700"><span className="font-semibold">Individual Results:</span> Hair care results may vary based on individual hair type, health, and other factors.</p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">3. Product Recommendations</h2>
                <p className="text-gray-700 leading-relaxed">
                  Product recommendations on this Website are based on general hair care principles and user preferences. We do not guarantee specific results from any products mentioned. Some links on our Website may be affiliate links, meaning we may earn a commission if you make a purchase through these links at no additional cost to you.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">4. External Links</h2>
                <p className="text-gray-700 leading-relaxed">
                  The Website may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites. The inclusion of any links does not imply our endorsement of the site.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">5. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the Website or reliance on any information provided on the Website. Your use of the Website and your reliance on any information on the Website is solely at your own risk.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">6. Fair Use Disclaimer</h2>
                <p className="text-gray-700 leading-relaxed">
                  This Website may contain copyrighted material, the use of which may not have been specifically authorized by the copyright owner. This material is made available for educational and informational purposes. We believe this constitutes a "fair use" of any such copyrighted material as provided for in applicable copyright law.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">7. Testimonials Disclaimer</h2>
                <p className="text-gray-700 leading-relaxed">
                  Any testimonials or reviews on this Website represent the personal experiences of individual users. These testimonials are not intended to represent or guarantee that anyone will achieve the same or similar results. Individual results may vary.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">8. Changes to This Disclaimer</h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify this disclaimer at any time. Changes and clarifications will take effect immediately upon their posting on the Website. We encourage you to review this disclaimer periodically for any changes.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">9. Contact Us</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about this Disclaimer, please contact us at:
                </p>
                <div className="bg-green-50 p-6 rounded-xl">
                  <p className="text-gray-700"><span className="font-semibold">Email:</span> support@hairroutinegen.com</p>
                  <p className="text-gray-700"><span className="font-semibold">Website:</span> hairroutinegen.com</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Disclaimer;
