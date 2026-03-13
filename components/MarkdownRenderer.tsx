import React from 'react';

interface Props {
  content: string;
}

export const MarkdownRenderer: React.FC<Props> = ({ content }) => {
  const sections = content.split('\n');

  const renderText = (text: string) => {
    // Simple parser for **bold** text
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-bold text-gray-900">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="space-y-6 text-gray-700 leading-relaxed font-sans">
      {sections.map((line, index) => {
        // H2 Headers
        if (line.startsWith('## ')) {
          return (
            <h2 key={index} className="text-3xl font-bold text-gray-900 mt-12 mb-6 font-display border-l-4 border-pitch-600 pl-4 uppercase tracking-wide">
              {line.replace('## ', '')}
            </h2>
          );
        }
        // H3 Headers
        if (line.startsWith('### ')) {
          return (
            <h3 key={index} className="text-xl font-bold text-gray-800 mt-8 mb-4 font-display flex items-center">
              <span className="w-2 h-2 bg-pitch-600 rounded-full mr-3"></span>
              {line.replace('### ', '')}
            </h3>
          );
        }
        // Blockquotes (>)
        if (line.startsWith('> ')) {
            return (
                <blockquote key={index} className="p-4 my-6 bg-gray-50 border-l-4 border-gray-300 italic text-gray-600 text-lg">
                    "{line.replace('> ', '')}"
                </blockquote>
            )
        }
        // Lists
        if (line.startsWith('* ')) {
          return (
            <li key={index} className="ml-6 list-none relative pl-6 py-1 text-lg">
                <span className="absolute left-0 top-3 w-1.5 h-1.5 bg-pitch-600 rounded-full"></span>
                {renderText(line.replace('* ', ''))}
            </li>
          );
        }
        // Empty lines
        if (line.trim() === '') {
          return <div key={index} className="h-2"></div>;
        }
        // Paragraphs
        return <p key={index} className="mb-4 text-lg md:text-xl text-gray-600 leading-8 font-light antialiased">
            {renderText(line)}
        </p>;
      })}
    </div>
  );
};