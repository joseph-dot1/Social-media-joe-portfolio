import React, { useState } from 'react';
import { getBrainstormIdea } from '../services/geminiService';
import { SparklesIcon } from './icons/SparklesIcon';

interface GroundingChunk {
  web?: {
    uri: string;
    title: string;
  };
}

const Brainstormer: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isDeepDive, setIsDeepDive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{ text: string; sources: GroundingChunk[] } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) {
      setError('Please enter a topic to brainstorm.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await getBrainstormIdea(prompt, isDeepDive);
      setResult(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="brainstorm" className="py-20 px-6 bg-brand-light-gray">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-montserrat font-bold text-center text-brand-charcoal mb-4">
          AI Brainstorming Hub
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Got an idea? Let's flesh it out! Enter a topic, and my AI assistant will generate some social media post ideas for you.
        </p>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., 'new features for a SaaS product' or 'upcoming charity event'"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-orange focus:border-transparent transition"
            rows={3}
            disabled={isLoading}
          />

          <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
            <div className="flex items-center space-x-2 mb-4 sm:mb-0">
              <label htmlFor="deep-dive-toggle" className="text-sm font-semibold text-gray-700">Deep Dive Mode:</label>
              <button
                type="button"
                id="deep-dive-toggle"
                onClick={() => setIsDeepDive(!isDeepDive)}
                className={`${isDeepDive ? 'bg-brand-orange' : 'bg-gray-300'} relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
                disabled={isLoading}
              >
                <span className={`${isDeepDive ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}/>
              </button>
               <span className="text-xs text-gray-500">{isDeepDive ? 'Slower, more complex' : 'Faster, web-based'}</span>
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full sm:w-auto flex items-center justify-center bg-brand-orange text-white px-6 py-2 rounded-full font-bold hover:bg-brand-orange-dark transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Thinking...
                </>
              ) : (
                <>
                  <SparklesIcon /> <span className="ml-2">Generate Ideas</span>
                </>
              )}
            </button>
          </div>
        </form>

        {error && <div className="mt-6 p-4 bg-red-100 text-red-700 rounded-md">{error}</div>}

        {result && (
          <div className="mt-6 p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-montserrat font-bold text-brand-charcoal mb-4">Generated Ideas</h3>
            <div className="prose prose-sm max-w-none whitespace-pre-wrap text-gray-800">{result.text}</div>
            {result.sources && result.sources.length > 0 && (
                <div className="mt-6">
                    <h4 className="font-semibold text-brand-charcoal mb-2">Sources:</h4>
                    <ul className="list-disc list-inside space-y-1">
                        {result.sources.map((source, index) => source.web && (
                            <li key={index}>
                                <a href={source.web.uri} target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">
                                    {source.web.title || source.web.uri}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Brainstormer;