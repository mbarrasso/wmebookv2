import React from 'react';
import { Link } from 'react-router-dom';
import ebooks from '../data/ebooks';

const EbookLibrary = () => {
  const publishedEbooks = ebooks.filter(ebook => ebook.published);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">United Financial eBook Library</h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          Browse our collection of financial guides and resources designed to help you navigate your financial journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publishedEbooks.map((ebook) => (
            <div key={ebook.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="h-48 bg-blue-100 flex items-center justify-center p-6">
                {ebook.coverImage ? (
                  <img 
                    src={ebook.coverImage} 
                    alt={ebook.title} 
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <div className="text-blue-500 text-xl font-bold">{ebook.title}</div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-2">{ebook.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{ebook.subtitle}</p>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    {ebook.publishedDate && `Published: ${new Date(ebook.publishedDate).toLocaleDateString()}`}
                  </div>
                  <Link 
                    to={`/ebook/${ebook.id}`}
                    className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-md shadow transition duration-300"
                  >
                    Read Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EbookLibrary; 