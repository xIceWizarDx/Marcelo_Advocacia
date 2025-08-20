import React from 'react';
import Icon from '../../../components/AppIcon';

const PopularQuestions = ({ questions, onQuestionClick }) => {
  return (
    <div className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl p-6 lg:p-8 text-white">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
          <Icon name="TrendingUp" size={20} />
        </div>
        <div>
          <h3 className="font-lora font-semibold text-xl">Perguntas Mais Frequentes</h3>
          <p className="text-white/80 text-sm">As dúvidas mais comuns dos nossos clientes</p>
        </div>
      </div>
      <div className="grid gap-3">
        {questions?.map((question, index) => (
          <button
            key={question?.id}
            onClick={() => onQuestionClick(question?.id)}
            className="flex items-start space-x-4 p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 text-left group"
          >
            <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-semibold">
              {index + 1}
            </div>
            <div className="flex-1">
              <h4 className="font-inter font-medium text-white group-hover:text-white/90 transition-colors duration-200">
                {question?.question}
              </h4>
              <p className="text-white/70 text-sm mt-1">
                {question?.category}
              </p>
            </div>
            <Icon 
              name="ArrowRight" 
              size={16} 
              className="text-white/60 group-hover:text-white/80 group-hover:translate-x-1 transition-all duration-200" 
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default PopularQuestions;