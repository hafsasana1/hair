import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const EmailCapture = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    // Save email to localStorage
    localStorage.setItem('hairgen_user_email', email);
    
    onSubmit(email);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-2xl shadow-xl p-8 space-y-6"
    >
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-yellow-400 rounded-full flex items-center justify-center mx-auto">
          <Mail className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Almost There! 🎉
        </h2>
        <p className="text-gray-600">
          Enter your email to receive your personalized hair care routine and future updates.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your.email@example.com"
            className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none text-lg transition-colors"
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full bg-gradient-to-r from-green-500 to-yellow-400 hover:from-green-600 hover:to-yellow-500 text-white font-semibold text-lg py-6"
        >
          Get My Hair Routine
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>

        <p className="text-xs text-gray-500 text-center">
          We respect your privacy. Your email will only be used to send your routine and occasional hair care tips.
        </p>
      </form>
    </motion.div>
  );
};

export default EmailCapture;