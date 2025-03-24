import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EbookViewer from './EbookViewer';
import IntegratedWealthEbook from './IntegratedWealthEbook';
import InteractiveRetirementEbook from './InteractiveRetirementEbook';
import ebooks from '../data/ebooks';

const EbookViewerContainer = () => {
  const { ebookId } = useParams();
  const navigate = useNavigate();
  const [selectedEbook, setSelectedEbook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the requested ebook
    const ebook = ebooks.find(e => e.id === ebookId);
    
    if (ebook && ebook.published) {
      setSelectedEbook(ebook);
      setLoading(false);
    } else {
      // Ebook not found or not published
      setLoading(false);
      // Navigate back to library after a delay
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [ebookId, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700"></div>
          <p className="mt-4 text-lg text-blue-800">Loading eBook...</p>
        </div>
      </div>
    );
  }

  if (!selectedEbook) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-50">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
          <div className="text-red-500 text-5xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">eBook Not Found</h1>
          <p className="text-gray-600 mb-6">
            The eBook you're looking for either doesn't exist or hasn't been published yet.
          </p>
          <p className="text-gray-500 text-sm mb-6">
            Redirecting you to the eBook library...
          </p>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-colors"
          >
            Go to Library
          </button>
        </div>
      </div>
    );
  }

  // Return the specialized component for specific eBooks
  if (ebookId === 'integrated-tax-planning') {
    return <IntegratedWealthEbook />;
  }
  
  if (ebookId === 'investors-guide-retirement') {
    return <InteractiveRetirementEbook />;
  }

  // For all other eBooks, use the standard viewer
  return <EbookViewer ebook={selectedEbook} />;
};

export default EbookViewerContainer; 