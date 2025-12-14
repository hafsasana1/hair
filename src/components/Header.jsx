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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <nav className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-1.5 group">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Logo className="w-8 h-8 drop-shadow-sm" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-green-500 via-lime-500 to-yellow-400 bg-clip-text text-transparent leading-tight">
                Hair Routine
              </span>
              <span className="text-[9px] md:text-[10px] font-semibold tracking-wider uppercase -mt-0.5 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Generator
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map(link => {
              const IconComponent = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive(link.path)
                      ? 'bg-gradient-to-r from-green-50 to-yellow-50 text-gray-800 shadow-sm'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <IconComponent className={`w-3.5 h-3.5 transition-all duration-300 ${
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
            <Link to="/quiz" className="ml-1.5">
              <Button size="sm" className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 text-white text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Start Quiz
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-gradient-to-br from-green-50 to-yellow-50 border border-green-100 shadow-sm hover:shadow-md transition-all duration-300"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-rose-500" />
            ) : (
              <div className="relative">
                <Menu className="w-5 h-5 text-emerald-600" />
                <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
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
              <div className="flex flex-col gap-1.5 pt-3 pb-2">
                {navLinks.map(link => {
                  const IconComponent = link.icon;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        isActive(link.path)
                          ? 'bg-gradient-to-r from-green-50 to-yellow-50 text-gray-800 shadow-sm'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <IconComponent className={`w-4 h-4 ${link.color}`} />
                      <span>{link.label}</span>
                    </Link>
                  );
                })}
                <Link to="/quiz" onClick={() => setIsMenuOpen(false)} className="mt-1.5">
                  <Button size="sm" className="w-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 text-white text-sm font-medium shadow-md flex items-center justify-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
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
