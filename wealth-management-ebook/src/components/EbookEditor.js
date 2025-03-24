import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EbookEditor = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    id: '',
    published: false,
    sections: [
      { id: 'cover', title: 'Cover' },
      { id: 'introduction', title: 'Introduction' }
    ]
  });
  const [coverImage, setCoverImage] = useState(null);
  const [currentSection, setCurrentSection] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleIdGeneration = () => {
    if (formData.title) {
      const generatedId = formData.title
        .toLowerCase()
        .replace(/[^\w\s]/gi, '')
        .replace(/\s+/g, '-');
      setFormData({
        ...formData,
        id: generatedId
      });
    }
  };

  const handleAddSection = () => {
    if (currentSection.trim()) {
      const sectionId = currentSection
        .toLowerCase()
        .replace(/[^\w\s]/gi, '')
        .replace(/\s+/g, '-');
      
      setFormData({
        ...formData,
        sections: [
          ...formData.sections,
          { id: sectionId, title: currentSection }
        ]
      });
      setCurrentSection('');
    }
  };

  const handleRemoveSection = (indexToRemove) => {
    setFormData({
      ...formData,
      sections: formData.sections.filter((_, index) => index !== indexToRemove)
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // In a real app, you would upload this to a server
      // For now, we'll just create a preview URL
      setCoverImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real app, this would save to a database
    // For this demo, we'll just show success and go back
    alert(`eBook "${formData.title}" has been created!`);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">Create New eBook</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="bg-blue-50 p-6 rounded-lg space-y-4">
            <h2 className="text-xl font-bold text-blue-800 mb-4">Basic Information</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                eBook Title*
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                onBlur={handleIdGeneration}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subtitle
              </label>
              <input
                type="text"
                name="subtitle"
                value={formData.subtitle}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                URL Identifier
              </label>
              <div className="flex">
                <input
                  type="text"
                  name="id"
                  value={formData.id}
                  onChange={handleInputChange}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="auto-generated-from-title"
                />
                <button
                  type="button"
                  onClick={handleIdGeneration}
                  className="bg-gray-200 px-4 py-2 rounded-r-md hover:bg-gray-300"
                >
                  Generate
                </button>
              </div>
            </div>
            
            <div>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="published"
                  checked={formData.published}
                  onChange={handleInputChange}
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="text-sm font-medium text-gray-700">Publish immediately</span>
              </label>
            </div>
          </div>
          
          {/* Cover Image */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-blue-800 mb-4">Cover Image</h2>
            
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 p-6 rounded-lg bg-white">
              {coverImage ? (
                <div className="mb-4">
                  <img 
                    src={coverImage} 
                    alt="Cover preview" 
                    className="max-h-48 object-contain"
                  />
                </div>
              ) : (
                <div className="text-center text-gray-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p>Upload a cover image</p>
                </div>
              )}
              
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="cover-image-upload"
              />
              <label
                htmlFor="cover-image-upload"
                className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-md shadow cursor-pointer"
              >
                {coverImage ? 'Change Image' : 'Select Image'}
              </label>
            </div>
          </div>
          
          {/* Sections */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-blue-800 mb-4">eBook Sections</h2>
            
            <div className="mb-4">
              <div className="flex">
                <input
                  type="text"
                  value={currentSection}
                  onChange={(e) => setCurrentSection(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter section title"
                />
                <button
                  type="button"
                  onClick={handleAddSection}
                  className="bg-blue-700 text-white px-4 py-2 rounded-r-md hover:bg-blue-800"
                >
                  Add
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-md border border-gray-200">
              <ul className="divide-y divide-gray-200">
                {formData.sections.map((section, index) => (
                  <li key={index} className="px-4 py-3 flex justify-between items-center">
                    <div>
                      <span className="font-medium">{section.title}</span>
                      <span className="ml-2 text-sm text-gray-500">({section.id})</span>
                    </div>
                    {index > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveSection(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-2 text-sm text-gray-500">Note: Cover and Introduction are required sections.</p>
          </div>
          
          {/* Actions */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800"
            >
              Save eBook
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EbookEditor; 