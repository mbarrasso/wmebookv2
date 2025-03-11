import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import BeyondInvestmentPage from './BeyondInvestmentPage';
import TaxEfficientPage from './TaxEfficientPage';
import AdvisorAlphaPage from './AdvisorAlphaPage';

const MainEbookViewer = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToTop();
  }, [currentPage]);

  const sections = [
    { id: "cover", title: "Cover" },
    { id: "introduction", title: "Introduction" },
    { id: "advisor-alpha", title: "Advisor Alpha" },
    { id: "beyond-investment", title: "Beyond Investment" },
    { id: "tax-efficient", title: "Tax-Efficient Investing" },
    { id: "retirement", title: "Retirement Planning" },
    { id: "behavioral", title: "Behavioral Coaching" },
    { id: "estate", title: "Estate Planning" },
    { id: "case-studies", title: "Case Studies" },
    { id: "tax-advantage", title: "Tax Advantage" },
    { id: "fee-concern", title: "Addressing Fee Concerns" },
    { id: "conclusion", title: "Conclusion" }
  ];

  const navigateTo = (index) => {
    setCurrentPage(index);
    setIsMenuOpen(false);
  };

  const nextPage = () => {
    if (currentPage < sections.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Sample data for charts
  const advisorAlphaData = [
    { name: 'Behavioral Coaching', value: 2.0, fill: '#4299e1' },
    { name: 'Tax-Loss Harvesting', value: 1.5, fill: '#48bb78' },
    { name: 'Retirement Spending', value: 1.0, fill: '#ed8936' },
    { name: 'Asset Location', value: 0.6, fill: '#667eea' },
    { name: 'Rebalancing', value: 0.4, fill: '#9f7aea' }
  ];

  const taxEfficientData = [
    { name: 'Year 5', standard: 2500000, taxEfficient: 2700000 },
    { name: 'Year 10', standard: 3000000, taxEfficient: 3500000 },
    { name: 'Year 15', standard: 3500000, taxEfficient: 4300000 },
    { name: 'Year 20', standard: 4100000, taxEfficient: 5200000 },
    { name: 'Year 25', standard: 4800000, taxEfficient: 6300000 },
    { name: 'Year 30', standard: 5500000, taxEfficient: 7420000 }
  ];

  const renderCoverPage = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl w-full">
        <div className="bg-blue-700 h-4 w-full"></div>
        <div className="p-8 md:p-12">
          <div className="flex justify-center mb-8">
            <div className="w-40 h-16 relative">
              <div className="absolute w-full h-8 bg-blue-700 rounded-t-full"></div>
              <div className="absolute bottom-0 w-full text-center">
                <div className="font-bold text-lg">United</div>
                <div className="text-xs">Financial Planning Group, LLC</div>
              </div>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-center text-blue-900 mb-6">
            The Value Of Wealth Management
          </h1>
          
          <h2 className="text-xl md:text-2xl text-center text-blue-700 mb-8">
            Why paying for professional wealth management can be well worth it for high-net-worth individuals, retirees, and high-earning professionals.
          </h2>
          
          <div className="bg-gray-100 rounded-lg p-4 mb-8">
            <div className="flex flex-row h-20 w-full rounded-md overflow-hidden">
              <div className="w-1/4 bg-blue-700 flex flex-col items-center justify-center text-white">
                <div className="text-sm font-medium">Fee</div>
                <div className="text-xl font-bold">1%</div>
              </div>
              <div className="w-3/4 bg-green-500 flex flex-col items-center justify-center text-white">
                <div className="text-sm font-medium">Potential Value Added</div>
                <div className="text-xl font-bold">3%+</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <button 
              onClick={nextPage}
              className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-6 rounded-md shadow flex items-center space-x-2 transition duration-300"
            >
              <span>Start Reading</span>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderIntroductionPage = () => (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <h2 className="text-3xl font-bold text-blue-900 border-b-2 border-blue-700 pb-2 mb-6">Introduction</h2>
      
      <p className="mb-4">A 1% AUM fee is a fee equal to 1% of the assets an advisor manages on your behalf, charged annually. It has become a common industry standard for full-service wealth management. In practice, many firms charge around 1% (often on a sliding scale for larger portfolios) as a transparent, straightforward way to compensate advisors. This fee structure largely replaced commission-based sales because it aligns the advisor's incentives with the client's success. When your portfolio grows, your advisor benefits; if it shrinks, their revenue dips.</p>
      
      <p className="mb-6">However, it's natural to ask: What do I get for 1% per year? At first glance, 1% of a large portfolio is a substantial dollar amount. But focusing only on the cost overlooks the tremendous value a skilled wealth manager can provide beyond basic investment picking. This eBook will demonstrate how professional financial advisors can add value well above and beyond their fee through prudent planning, expert advice, and strategic guidance. In fact, research by industry leaders suggests that good advice can more than pay for itself over time, in both measurable financial outcomes and in peace of mind.</p>
      
      <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-md shadow-sm mb-6">
        <h4 className="text-lg font-bold text-teal-700 mb-2">Key Points:</h4>
        <div className="space-y-2">
          <div className="flex items-start">
            <div className="text-teal-500 mr-2 mt-1">•</div>
            <p>A 1% AUM fee aligns advisor incentives with client success</p>
          </div>
          <div className="flex items-start">
            <div className="text-teal-500 mr-2 mt-1">•</div>
            <p>Professional wealth management goes far beyond basic investment picking</p>
          </div>
          <div className="flex items-start">
            <div className="text-teal-500 mr-2 mt-1">•</div>
            <p>Research suggests good advice can more than pay for itself over time</p>
          </div>
        </div>
      </div>
      
      <p className="mb-6">Before diving in, note that all investing involves risk, and no strategy guarantees success. But by understanding the full scope of services you receive for 1%, you can make an informed decision on the merits of professional wealth management. Let's explore the value proposition in detail.</p>
    </div>
  );

  // Use our imported components for the remaining pages
  const pageComponents = [
    renderCoverPage(),
    renderIntroductionPage(),
    <AdvisorAlphaPage advisorAlphaData={advisorAlphaData} />,
    <BeyondInvestmentPage />,
    <TaxEfficientPage taxEfficientData={taxEfficientData} />,
    <div className="max-w-4xl mx-auto p-4 md:p-8 text-center">Retirement Planning Page (Under Construction)</div>,
    <div className="max-w-4xl mx-auto p-4 md:p-8 text-center">Behavioral Coaching Page (Under Construction)</div>,
    <div className="max-w-4xl mx-auto p-4 md:p-8 text-center">Estate Planning Page (Under Construction)</div>,
    <div className="max-w-4xl mx-auto p-4 md:p-8 text-center">Case Studies Page (Under Construction)</div>,
    <div className="max-w-4xl mx-auto p-4 md:p-8 text-center">Tax Advantage Page (Under Construction)</div>,
    <div className="max-w-4xl mx-auto p-4 md:p-8 text-center">Fee Concern Page (Under Construction)</div>,
    <div className="max-w-4xl mx-auto p-4 md:p-8 text-center">Conclusion Page (Under Construction)</div>
  ];

  return (
    <div className="bg-gray-100 min-h-screen pb-16">
      {/* Side navigation for table of contents */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-30`}>
        <div className="p-4 border-b">
          <h3 className="text-lg font-bold text-blue-900">Table of Contents</h3>
        </div>
        <div className="p-4 overflow-y-auto h-full">
          <ul className="space-y-2">
            {sections.map((section, index) => (
              <li key={section.id}>
                <button 
                  onClick={() => navigateTo(index)}
                  className={`w-full text-left px-2 py-1.5 rounded ${currentPage === index ? 'bg-blue-100 text-blue-700 font-medium' : 'hover:bg-gray-100'}`}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Menu toggle button */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-4 left-4 z-40 bg-blue-700 text-white p-2 rounded-md shadow focus:outline-none hover:bg-blue-600 transition duration-300"
      >
        {isMenuOpen ? 'Close Menu' : 'Contents'}
      </button>

      {/* Main content */}
      <div className="mt-16">
        {pageComponents[currentPage]}
      </div>

      {/* Navigation controls */}
      <div className="fixed bottom-0 left-0 right-0 bg-white py-3 px-6 flex justify-between shadow-lg z-20">
        <button 
          onClick={prevPage}
          disabled={currentPage === 0}
          className={`flex items-center space-x-1 py-2 px-4 rounded-md ${currentPage === 0 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-blue-700 text-white hover:bg-blue-600'} transition duration-300`}
        >
          <ChevronLeft size={18} />
          <span>Previous</span>
        </button>
        
        <div className="text-gray-600 flex items-center">
          Page {currentPage + 1} of {sections.length}
        </div>
        
        <button 
          onClick={nextPage}
          disabled={currentPage === sections.length - 1}
          className={`flex items-center space-x-1 py-2 px-4 rounded-md ${currentPage === sections.length - 1 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-blue-700 text-white hover:bg-blue-600'} transition duration-300`}
        >
          <span>Next</span>
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default MainEbookViewer; 