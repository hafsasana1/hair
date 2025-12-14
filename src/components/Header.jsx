import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navLinks = [{
    path: '/',
    label: 'Home'
  }, {
    path: '/quiz',
    label: 'Take Quiz'
  }, {
    path: '/blog',
    label: 'Blog'
  }, {
    path: '/about',
    label: 'About'
  }];
  const isActive = path => location.pathname === path;
  return <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
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
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`font-medium transition-colors hover:text-green-500 ${isActive(link.path) ? 'text-green-500' : 'text-gray-700'}`}>
                {link.label}
              </Link>)}
            <Link to="/quiz">
              <Button className="bg-gradient-to-r from-green-500 to-yellow-400 hover:from-green-600 hover:to-yellow-500 text-white font-semibold">
                Start Quiz
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-gray-700 hover:text-green-500 transition-colors" aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && <motion.div initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} transition={{
          duration: 0.3
        }} className="md:hidden overflow-hidden">
              <div className="flex flex-col gap-4 pt-4 pb-2">
                {navLinks.map(link => <Link key={link.path} to={link.path} onClick={() => setIsMenuOpen(false)} className={`font-medium transition-colors hover:text-green-500 ${isActive(link.path) ? 'text-green-500' : 'text-gray-700'}`}>
                    {link.label}
                  </Link>)}
                <Link to="/quiz" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-green-500 to-yellow-400 hover:from-green-600 hover:to-yellow-500 text-white font-semibold">
                    Start Quiz
                  </Button>
                </Link>
              </div>
            </motion.div>}
        </AnimatePresence>
      </nav>
    </header>;
};
export default Header;