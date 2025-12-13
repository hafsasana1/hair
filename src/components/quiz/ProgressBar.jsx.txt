import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ progress, currentStep, totalSteps }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm text-gray-600">
        <span>Progress</span>
        <span className="font-semibold">{Math.round(progress)}%</span>
      </div>
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-green-500 to-yellow-400 rounded-full"
        />
      </div>
      <div className="flex justify-between text-xs text-gray-500">
        <span>Step {currentStep}</span>
        <span>{totalSteps} Steps Total</span>
      </div>
    </div>
  );
};

export default ProgressBar;