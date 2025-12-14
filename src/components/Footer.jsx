import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter,
  Home,
  ClipboardList,
  BookOpen,
  Users,
  MessageCircle,
  Shield,
  FileText,
  Heart,
  Sparkles
} from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const quickLinks = [
    { path: '/', label: 'Home', icon: Home, color: 'text-emerald-400' },
    { path: '/quiz', label: 'Take Quiz', icon: ClipboardList, color: 'text-amber-400' },
    { path: '/blog', label: 'Blog', icon: BookOpen, color: 'text-sky-400' },
    { path: '/about', label: 'About', icon: Users, color: 'text-purple-400' },
    { path: '/contact', label: 'Contact', icon: MessageCircle, color: 'text-pink-400' }
  ];

  const legalLinks = [
    { path: '/privacy', label: 'Privacy Policy', icon: Shield, color: 'text-teal-400' },
    { path: '/terms', label: 'Terms of Service', icon: FileText, color: 'text-orange-400' }
  ];

  const socialLinks = [
    { href: '#', icon: Facebook, label: 'Facebook', color: 'text-blue-400', hoverColor: 'hover:text-blue-300', bgColor: 'hover:bg-blue-500/20' },
    { href: '#', icon: Instagram, label: 'Instagram', color: 'text-pink-400', hoverColor: 'hover:text-pink-300', bgColor: 'hover:bg-pink-500/20' },
    { href: '#', icon: Twitter, label: 'Twitter', color: 'text-sky-400', hoverColor: 'hover:text-sky-300', bgColor: 'hover:bg-sky-500/20' }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Logo className="w-10 h-10" />
              <div className="flex flex-col">
                <span className="text-lg font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Hair Routine
                </span>
                <span className="text-[10px] font-semibold tracking-wider uppercase bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                  Generator
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              AI-powered personalized hair care routines tailored to your unique needs.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              <span>for your hair</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-semibold mb-4 text-lg bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-green-400" />
              Quick Links
            </p>
            <div className="space-y-2">
              {quickLinks.map(link => {
                const IconComponent = link.icon;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 text-sm py-1"
                  >
                    <IconComponent className={`w-4 h-4 ${link.color} group-hover:scale-110 transition-transform duration-300`} />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <p className="font-semibold mb-4 text-lg bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent flex items-center gap-2">
              <Shield className="w-4 h-4 text-teal-400" />
              Legal
            </p>
            <div className="space-y-2">
              {legalLinks.map(link => {
                const IconComponent = link.icon;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 text-sm py-1"
                  >
                    <IconComponent className={`w-4 h-4 ${link.color} group-hover:scale-110 transition-transform duration-300`} />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Connect Section */}
          <div>
            <p className="font-semibold mb-4 text-lg bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent flex items-center gap-2">
              <Heart className="w-4 h-4 text-pink-400" />
              Connect
            </p>
            <div className="flex gap-3 mb-5">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`p-3 rounded-xl bg-gray-800/50 ${social.color} ${social.hoverColor} ${social.bgColor} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            <a
              href="mailto:support@hairgen.com"
              className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 text-sm"
            >
              <div className="p-2 rounded-lg bg-gray-800/50 group-hover:bg-amber-500/20 transition-all duration-300">
                <Mail className="w-4 h-4 text-amber-400" />
              </div>
              <span className="group-hover:translate-x-1 transition-transform duration-300">support@hairgen.com</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
            <p className="flex items-center gap-2">
              <span>&copy; {new Date().getFullYear()}</span>
              <span className="bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent font-medium">
                Hair Routine Generator
              </span>
              <span>All rights reserved.</span>
            </p>
            <div className="flex items-center gap-2 text-xs">
              <Sparkles className="w-3 h-3 text-yellow-400" />
              <span>Powered by AI Technology</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
