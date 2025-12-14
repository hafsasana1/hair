import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogDisclaimer = () => {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-8">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <AlertTriangle className="w-6 h-6 text-amber-600" />
        </div>
        <div className="space-y-3">
          <h4 className="font-bold text-amber-800 text-lg">Disclaimer</h4>
          <p className="text-amber-700 text-sm leading-relaxed">
            The information provided in this article is for educational and informational purposes only and is not intended as medical or professional advice. Hair care results may vary depending on individual hair type, condition, and other factors.
          </p>
          <p className="text-amber-700 text-sm leading-relaxed">
            Always consult with a licensed dermatologist, trichologist, or hair care professional before making significant changes to your hair care routine, especially if you have underlying scalp conditions, allergies, or medical concerns.
          </p>
          <p className="text-amber-700 text-sm leading-relaxed">
            Hair Routine Generator does not guarantee specific results and is not responsible for any adverse effects resulting from the use of information or product recommendations contained in this article. Product recommendations are based on general research and may contain affiliate links.
          </p>
          <p className="text-amber-600 text-xs mt-4">
            For more information, please review our{' '}
            <Link to="/terms" className="underline hover:text-amber-800">Terms of Service</Link>
            {' '}and{' '}
            <Link to="/privacy" className="underline hover:text-amber-800">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDisclaimer;