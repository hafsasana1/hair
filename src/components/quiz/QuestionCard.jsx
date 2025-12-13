import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const QuestionCard = ({ question, answer, onAnswer }) => {
  const isSelected = (value) => {
    if (question.multiSelect) {
      return answer && answer.includes(value);
    }
    return answer === value;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-xl p-8 space-y-6"
    >
      <div className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          {question.question}
        </h2>
        {question.multiSelect && (
          <p className="text-sm text-gray-500">Select all that apply</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.options.map((option) => {
          const IconComponent = option.icon;
          return (
            <motion.button
              key={option.value}
              onClick={() => onAnswer(option.value)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative p-6 rounded-xl border-2 text-left transition-all ${
                isSelected(option.value)
                  ? 'border-green-500 bg-green-50 shadow-lg'
                  : 'border-gray-200 hover:border-green-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  {IconComponent && (
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                      isSelected(option.value) 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                  )}
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 mb-1">{option.label}</p>
                    {option.description && (
                      <p className="text-sm text-gray-600">{option.description}</p>
                    )}
                  </div>
                </div>
                {isSelected(option.value) && (
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center ml-4">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
};

export default QuestionCard;