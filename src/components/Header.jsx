import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, ClipboardList, BookOpen, Users, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { path: '/', label: 'Home', icon: Home, color: 'text-emerald-500' },
    { path: '/quiz', label: 'Take Quiz', icon: ClipboardList, color: 'text-amber-500' },
    { path: '/blog', label: 'Blog', icon: BookOpen, color: 'text-sky-500' },
    { path: '/about', label: 'About', icon: Users, color: 'text-purple-500' }
  ];
  
  const isActive = path => location.pathname === path;
  
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Logo className="w-10 h-10 drop-shadow-md" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-green-500 via-lime-500 to-yellow-400 bg-clip-text text-transparent leading-tight">
                Hair Routine
              </span>
              <span className="text-[10px] md:text-xs font-semibold tracking-wider uppercase -mt-1 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Generator
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => {
              const IconComponent = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`group flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    isActive(link.path)
                      ? 'bg-gradient-to-r from-green-50 to-yellow-50 text-gray-800 shadow-sm'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <IconComponent className={`w-4 h-4 transition-all duration-300 ${
                    isActive(link.path) ? link.color : 'text-gray-400 group-hover:' + link.color.replace('text-', 'text-')
                  } group-hover:scale-110`} />
                  <span className={`transition-colors duration-300 ${
                    isActive(link.path) ? 'text-gray-800' : 'group-hover:text-gray-800'
                  }`}>
                    {link.label}
                  </span>
                </Link>
              );
            })}
            <Link to="/quiz" className="ml-2">
              <Button className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Start Quiz
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-gradient-to-br from-green-50 to-yellow-50 border border-green-100 shadow-sm hover:shadow-md transition-all duration-300"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-rose-500" />
            ) : (
              <div className="relative">
                <Menu className="w-6 h-6 text-emerald-600" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              </div>
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-2 pt-4 pb-2">
                {navLinks.map(link => {
                  const IconComponent = link.icon;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                        isActive(link.path)
                          ? 'bg-gradient-to-r from-green-50 to-yellow-50 text-gray-800 shadow-sm'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <IconComponent className={`w-5 h-5 ${link.color}`} />
                      <span>{link.label}</span>
                    </Link>
                  );
                })}
                <Link to="/quiz" onClick={() => setIsMenuOpen(false)} className="mt-2">
                  <Button className="w-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 text-white font-semibold shadow-lg flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Start Quiz
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
