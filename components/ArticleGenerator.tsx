import React, { useState } from 'react';
import { Feather, Shirt } from './Icons';
import { generateArticle } from '../services/geminiService';
import { Article } from '../types';

interface Props {
  onArticleGenerated: (article: Article) => void;
}

export const ArticleGenerator: React.FC<Props> = ({ onArticleGenerated }) => {
  const [topic, setTopic] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      const generatedData = await generateArticle(topic);
      
      // Use Pollinations.ai to generate an image relevant to the topic
      const imagePrompt = encodeURIComponent(`soccer jersey football kit ${topic} high quality photography`);
      const relevantImageUrl = `https://image.pollinations.ai/prompt/${imagePrompt}?width=800&height=600&nologo=true&seed=${Date.now()}`;

      const newArticle: Article = {
        ...generatedData,
        id: Date.now().toString(),
        imageUrl: relevantImageUrl,
        date: new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })
      };

      onArticleGenerated(newArticle);
      setTopic('');
    } catch (err) {
      setError("Não foi possível gerar o artigo no momento. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sm:p-8">
      <div className="flex items-center mb-6">
        <div className="p-3 bg-brand-50 rounded-lg text-brand-600 mr-4">
            <Feather className="h-6 w-6" />
        </div>
        <div>
            <h3 className="text-xl font-bold text-gray-900 font-display">Redação Virtual</h3>
            <p className="text-sm text-gray-500">Solicite uma análise sobre a história ou tecnologia de qualquer camisa.</p>
        </div>
      </div>

      <form onSubmit={handleGenerate} className="space-y-4">
        <div>
            <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-2">
                Sobre qual tipo de camisa você quer ler hoje?
            </label>
            <div className="relative">
                <input
                    type="text"
                    id="topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="Ex: Camisas de algodão, Evolução das golas, Camisas dos anos 90..."
                    className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-200 focus:border-brand-600 focus:ring focus:ring-brand-100 transition-colors shadow-sm"
                    disabled={isLoading}
                />
                <div className="absolute left-3 top-3.5 text-gray-400">
                    <Shirt className="h-5 w-5" />
                </div>
            </div>
        </div>

        {error && (
            <div className="p-3 bg-red-50 text-red-700 text-sm rounded-lg">
                {error}
            </div>
        )}

        <button
            type="button" // Prevent default submission if needed, but form handles it.
            onClick={handleGenerate}
            disabled={isLoading || !topic.trim()}
            className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all flex items-center justify-center
                ${isLoading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-brand-600 hover:bg-brand-700 shadow-md hover:shadow-lg'
                }`}
        >
            {isLoading ? (
                <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Pesquisando e Escrevendo...
                </>
            ) : (
                'Gerar Artigo Exclusivo'
            )}
        </button>
      </form>
    </div>
  );
};