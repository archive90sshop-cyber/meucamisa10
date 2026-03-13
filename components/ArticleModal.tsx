import React from 'react';
import { Article } from '../types';
import { X, Clock, User, Shirt } from './Icons';
import { MarkdownRenderer } from './MarkdownRenderer';

interface Props {
  article: Article;
  onClose: () => void;
}

export const ArticleModal: React.FC<Props> = ({ article, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={onClose}></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
          
          <div className="absolute top-0 right-0 pt-4 pr-4 z-10">
            <button
              type="button"
              className="bg-white rounded-full p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              onClick={onClose}
            >
              <span className="sr-only">Fechar</span>
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="h-64 sm:h-80 w-full overflow-hidden relative">
             <img 
               src={article.imageUrl} 
               alt={article.title} 
               className="w-full h-full object-cover"
             />
             <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>
             <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-pitch-600 text-white mb-3">
                  {article.category}
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-white leading-tight shadow-black drop-shadow-md">
                  {article.title}
                </h2>
             </div>
          </div>

          <div className="px-6 py-6 sm:px-10 sm:py-10">
            <div className="flex items-center space-x-6 text-sm text-gray-500 mb-8 border-b border-gray-100 pb-6">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2 text-pitch-600" />
                {article.author}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-pitch-600" />
                {article.readTime}
              </div>
              <div className="flex items-center">
                 <Shirt className="h-4 w-4 mr-2 text-pitch-600" />
                 Camisas de Time
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray-800">
               <MarkdownRenderer content={article.content} />
            </div>
            
            <div className="mt-10 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500 italic">
                    Este conteúdo é informativo e destinado a entusiastas de camisas de futebol.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};