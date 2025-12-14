import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-green-500" />
              <span className="text-xl font-bold">Hair Routine Generator</span>
            </div>
            <p className="text-gray-400 text-sm">
              AI-powered personalized hair care routines tailored to your unique needs.
            </p>
          </div>

          <div>
            <p className="font-semibold mb-4 text-green-400">Quick Links</p>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-green-400 transition-colors text-sm">
                Home
              </Link>
              <Link to="/quiz" className="block text-gray-400 hover:text-green-400 transition-colors text-sm">
                Take Quiz
              </Link>
              <Link to="/blog" className="block text-gray-400 hover:text-green-400 transition-colors text-sm">
                Blog
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-green-400 transition-colors text-sm">
                About
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-green-400 transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <p className="font-semibold mb-4 text-green-400">Legal</p>
            <div className="space-y-2">
              <Link to="/privacy" className="block text-gray-400 hover:text-green-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block text-gray-400 hover:text-green-400 transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>

          <div>
            <p className="font-semibold mb-4 text-green-400">Connect</p>
            <div className="flex gap-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <a href="mailto:support@hairgen.com" className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors text-sm">
              <Mail className="w-4 h-4" />
              support@hairgen.com
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Hair Routine Generator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;