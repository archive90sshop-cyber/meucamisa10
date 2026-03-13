import React from 'react';
import { X, ShieldCheck, FileText, Lock, Info, Mail } from './Icons';

interface PolicyData {
  title: string;
  content: string; // HTML allowed or plain text
  type: 'privacy' | 'terms' | 'about' | 'contact';
}

interface Props {
  policy: PolicyData;
  onClose: () => void;
}

export const PolicyModal: React.FC<Props> = ({ policy, onClose }) => {
  const getIcon = () => {
    switch (policy.type) {
      case 'privacy': return <Lock className="h-6 w-6 text-pitch-600" />;
      case 'terms': return <FileText className="h-6 w-6 text-pitch-600" />;
      case 'about': return <Info className="h-6 w-6 text-pitch-600" />;
      case 'contact': return <Mail className="h-6 w-6 text-pitch-600" />;
      default: return <ShieldCheck className="h-6 w-6 text-pitch-600" />;
    }
  };

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        
        <div className="fixed inset-0 bg-gray-900 bg-opacity-80 transition-opacity backdrop-blur-sm" aria-hidden="true" onClick={onClose}></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full border-t-4 border-pitch-600">
          
          <div className="absolute top-0 right-0 pt-4 pr-4 z-10">
            <button
              type="button"
              className="bg-white rounded-full p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none transition-colors"
              onClick={onClose}
            >
              <span className="sr-only">Fechar</span>
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="px-6 py-6 sm:px-8 sm:py-8">
            <div className="flex items-center space-x-3 mb-6 border-b border-gray-100 pb-4">
              <div className="p-2 bg-pitch-50 rounded-lg">
                {getIcon()}
              </div>
              <h3 className="text-2xl leading-6 font-bold text-gray-900 font-display" id="modal-title">
                {policy.title}
              </h3>
            </div>
            
            <div className="mt-2 text-sm text-gray-600 space-y-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
               {/* Rendering consistent with text formatting */}
               {policy.content.split('\n\n').map((paragraph, idx) => {
                 if (paragraph.startsWith('### ')) {
                    return <h4 key={idx} className="text-lg font-bold text-gray-800 mt-4 mb-2">{paragraph.replace('### ', '')}</h4>
                 }
                 if (paragraph.startsWith('- ')) {
                    return <li key={idx} className="ml-4">{paragraph.replace('- ', '')}</li>
                 }
                 return <p key={idx} className="leading-relaxed">{paragraph}</p>
               })}
            </div>

            <div className="mt-8 pt-4 border-t border-gray-100 flex justify-end">
                <button 
                    onClick={onClose}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-6 rounded-lg transition-colors"
                >
                    Entendido
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};