import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Menu, BookOpen, Home, FileText, Settings, Users, TrendingUp, CheckCircle } from 'lucide-react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, AreaChart, Area } from 'recharts';

const InteractiveRetirementEbook = () => {
  // State for navigation and interactive elements
  const [currentPage, setCurrentPage] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedRiskProfile, setSelectedRiskProfile] = useState('moderate');
  const [expandedSections, setExpandedSections] = useState({});
  
  // Toggle section expansion
  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };
  
  // Navigate to section
  const navigateToSection = (sectionId) => {
    setActiveSection(sectionId);
    // Auto-expand the section when navigated to
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: true
    }));
    // Scroll to section
    document.getElementById(`section${sectionId}`).scrollIntoView({ behavior: 'smooth' });
  };
  
  // Data for Asset Allocation chart (Section 3)
  const allocationData = {
    conservative: [
      { name: 'Stocks', value: 30 },
      { name: 'Bonds', value: 50 },
      { name: 'Cash', value: 20 },
    ],
    moderate: [
      { name: 'Stocks', value: 60 },
      { name: 'Bonds', value: 35 },
      { name: 'Cash', value: 5 },
    ],
    aggressive: [
      { name: 'Stocks', value: 80 },
      { name: 'Bonds', value: 15 },
      { name: 'Cash', value: 5 },
    ]
  };

  // Data for Social Security Benefits (Section 8)
  const ssData = [
    { age: 62, benefit: 70, label: 'Early' },
    { age: 67, benefit: 100, label: 'Full Retirement Age' },
    { age: 70, benefit: 132, label: 'Maximum' },
  ];

  // Data for Retirement Account Comparison (Section 4)
  const accountData = [
    { 
      name: 'Traditional IRA', 
      contributions: 'Tax-deductible', 
      growth: 'Tax-deferred', 
      withdrawals: 'Taxed as income',
      rmd: 'Required at 73' 
    },
    { 
      name: 'Roth IRA', 
      contributions: 'After-tax', 
      growth: 'Tax-free', 
      withdrawals: 'Tax-free',
      rmd: 'None for owner' 
    },
    { 
      name: '401(k)', 
      contributions: 'Pre-tax', 
      growth: 'Tax-deferred', 
      withdrawals: 'Taxed as income',
      rmd: 'Required at 73' 
    },
  ];

  // Data for Retirement Income Strategy (Section 5)
  const incomeData = [
    { year: 1, socialSecurity: 24000, pension: 12000, portfolio: 36000 },
    { year: 5, socialSecurity: 26000, pension: 12000, portfolio: 39000 },
    { year: 10, socialSecurity: 28000, pension: 12000, portfolio: 42000 },
    { year: 15, socialSecurity: 30000, pension: 12000, portfolio: 45000 },
    { year: 20, socialSecurity: 33000, pension: 12000, portfolio: 48000 },
    { year: 25, socialSecurity: 36000, pension: 12000, portfolio: 51000 },
  ];

  // Data for Withdrawal Sequence Strategy (Section 7)
  const withdrawalData = [
    { category: 'Taxable Accounts', priority: 1, rationale: 'Access without penalties' },
    { category: 'Tax-Deferred Accounts', priority: 2, rationale: 'Required once RMDs begin' },
    { category: 'Tax-Free Accounts', priority: 3, rationale: 'Maximum tax-free growth' },
  ];

  // Colors for pie charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
  // State for navigation
  const [activeSection, setActiveSection] = useState(1);
  
  // Pages array to match with the IntegratedWealthEbook.js structure
  const pages = [
    {
      id: 'cover',
      title: 'Cover',
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center p-8">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">THE INVESTOR'S GUIDE TO A COMFORTABLE RETIREMENT</h1>
          <h2 className="text-2xl text-blue-600 mb-8">Your Go-To Handbook for Financial Success in Retirement</h2>
          <div className="w-80 h-80 mb-8 flex items-center justify-center">
            <svg viewBox="0 0 240 240" className="w-full h-full">
              <circle cx="120" cy="120" r="110" fill="#EBF5FF" stroke="#3B82F6" strokeWidth="2" />
              <circle cx="120" cy="120" r="85" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="1.5" />
              <circle cx="120" cy="120" r="60" fill="#2563EB" />
              <text x="120" y="115" textAnchor="middle" fill="#FFF" fontSize="20" fontWeight="bold">UNITED</text>
              <text x="120" y="138" textAnchor="middle" fill="#FFF" fontSize="20" fontWeight="bold">FPG</text>
              
              {/* Retirement icons/symbols */}
              <circle cx="120" cy="45" r="15" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="1.5" />
              <text x="120" y="50" textAnchor="middle" fill="#1E40AF" fontSize="16">$</text>
              
              <circle cx="50" cy="120" r="15" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="1.5" />
              <text x="50" y="125" textAnchor="middle" fill="#1E40AF" fontSize="16">%</text>
              
              <circle cx="120" cy="195" r="15" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="1.5" />
              <text x="120" y="200" textAnchor="middle" fill="#1E40AF" fontSize="16">🏠</text>
              
              <circle cx="190" cy="120" r="15" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="1.5" />
              <text x="190" y="125" textAnchor="middle" fill="#1E40AF" fontSize="16">📈</text>
              
              <circle cx="70" cy="70" r="15" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="1.5" />
              <text x="70" y="75" textAnchor="middle" fill="#1E40AF" fontSize="16">📝</text>
              
              <circle cx="170" cy="70" r="15" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="1.5" />
              <text x="170" y="75" textAnchor="middle" fill="#1E40AF" fontSize="16">⏱️</text>
              
              <circle cx="70" cy="170" r="15" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="1.5" />
              <text x="70" y="175" textAnchor="middle" fill="#1E40AF" fontSize="16">🔄</text>
              
              <circle cx="170" cy="170" r="15" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="1.5" />
              <text x="170" y="175" textAnchor="middle" fill="#1E40AF" fontSize="16">💼</text>
            </svg>
          </div>
          <p className="text-lg text-gray-600 italic">By United Financial Planning Group</p>
        </div>
      )
    },
    {
      id: 'introduction',
      title: 'Introduction',
      content: (
        <div className="mb-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Introduction</h2>
          <p className="mb-4">Thank you for taking this important step toward securing your financial future. At United Financial Planning Group, we understand that retirement planning involves more than simply accumulating assets—it requires a thoughtful, integrated approach that addresses your unique goals, concerns, and circumstances.</p>
          <p className="mb-4">As a fee-only Registered Investment Advisor (RIA), we're committed to providing objective guidance across financial planning, wealth management, tax planning, and tax preparation services—all while adhering to the fiduciary standard of placing your interests first.</p>
          <p>This guide offers insights into key retirement planning considerations, but it's just the beginning of a conversation. We invite you to explore these concepts and connect with our team to discuss how they apply to your specific situation.</p>
        </div>
      )
    },
    {
      id: 'section1',
      title: 'Retirement Planning',
      content: (
        <div className="p-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Retirement Planning</h2>
          <p className="mb-4">Planning for retirement can be confusing, even overwhelming. True success involves much more than simply putting money away during your working years. It requires considering how you will:</p>
              
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Generate sustainable cash flow</strong> in retirement.</li>
            <li><strong>Manage taxes efficiently</strong> across various account types.</li>
            <li><strong>Coordinate estate and legacy goals</strong> with your overall financial plan.</li>
            <li><strong>Adapt to unforeseen health or family events</strong> that may impact your finances.</li>
          </ul>
          
          <p className="mb-4">A robust strategy should account for all these aspects. Just as important, retirement planning is not "set it and forget it." You must periodically review and adjust your plan to keep pace with changes in both your personal situation and the markets.</p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
            <p className="font-semibold">Did You Know?</p>
            <p>According to research from the Employee Benefit Research Institute, only 42% of Americans have calculated how much they need to save for retirement. Having a written plan significantly increases confidence and success in retirement.</p>
          </div>
          
          <h3 className="font-bold text-lg mt-6 mb-2">Action Steps:</h3>
          <ol className="list-decimal pl-6 space-y-1">
            <li><strong>Schedule a retirement readiness assessment</strong> to identify potential gaps in your current plan</li>
            <li><strong>Document your retirement vision</strong> in specific terms (lifestyle, location, activities)</li>
            <li><strong>Gather your most recent statements</strong> from all retirement accounts to establish a baseline</li>
            <li><strong>Consider potential life changes</strong> that might impact your retirement timeline</li>
          </ol>
        </div>
      )
    },
    {
      id: 'section2',
      title: 'Your Retirement Goals and Time Horizon',
      content: (
        <div className="p-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Your Retirement Goals and Time Horizon</h2>
          <p className="mb-4">The foundation of any retirement plan is you—your unique goals, needs, and values. Start by asking yourself:</p>
          
          <h3 className="font-bold text-lg mt-4 mb-2">Do I need more growth or more current income?</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Growth-focused strategies</strong> aim to maintain or expand purchasing power—especially important over a possible 20- to 30-year retirement horizon.</li>
            <li><strong>Income-focused approaches</strong> prioritize stable cash flow for daily living expenses.</li>
            <li><strong>Blended approaches</strong> balance both objectives, often shifting gradually from growth to income as you age.</li>
          </ul>
          
          <h3 className="font-bold text-lg mt-4 mb-2">What is my time horizon?</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Early retirees (50s-early 60s)</strong> may need to fund 30+ years of retirement, requiring strategies that address inflation risk and longevity.</li>
            <li><strong>Mid-stage retirees (mid 60s-70s)</strong> typically balance growth and income while beginning to consider legacy planning.</li>
            <li><strong>Later-stage retirees (80+)</strong> may focus more on preservation, income, and efficient wealth transfer strategies.</li>
          </ul>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
            <h3 className="font-bold text-lg mb-2">Real-World Perspective:</h3>
            <p>Consider a couple retiring at age 62 with a life expectancy into their late 80s. They'll need their assets to last 25+ years and retain purchasing power despite inflation. A comprehensive plan would likely include a mix of growth-oriented investments for longer-term needs and stable income sources for immediate expenses.</p>
          </div>
          
          <h3 className="font-bold text-lg mt-6 mb-2">Action Steps:</h3>
          <ol className="list-decimal pl-6 space-y-1">
            <li><strong>Create a retirement budget</strong> that distinguishes between essential and discretionary expenses</li>
            <li><strong>Establish an ideal retirement date</strong> and an acceptable range (best case/acceptable case)</li>
            <li><strong>Define what "financial success" means to you</strong> beyond numbers (peace of mind, family support, etc.)</li>
            <li><strong>Prioritize your goals</strong> to guide decision-making when trade-offs are necessary</li>
          </ol>
        </div>
      )
    },
    // More pages will be added in the next part
  ];
  
  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  const goToPage = (index) => {
    setCurrentPage(index);
    setMenuOpen(false);
  };
  
  // Section content component
  const SectionContent = ({ id, title, isExpanded, toggleExpand, content }) => {
    return (
      <div id={`section${id}`} className="mb-6 bg-white rounded-lg shadow overflow-hidden">
        <button 
          className="w-full flex justify-between items-center p-4 bg-blue-50 hover:bg-blue-100 text-left"
          onClick={toggleExpand}
        >
          <h2 className="text-xl font-bold text-blue-800">{id}. {title}</h2>
          <span className="text-2xl">{isExpanded ? '−' : '+'}</span>
        </button>
        
        {isExpanded && (
          <div className="p-6">
            {content}
          </div>
        )}
      </div>
    );
  };
  
  // Helper function to get section titles
  const getSectionTitle = (sectionId) => {
    const titles = {
      1: "Retirement Planning",
      2: "Your Retirement Goals and Time Horizon",
      3: "Evaluating Your Asset Allocation",
      4: "Retirement Account Types and Key Considerations",
      5: "Generating Income in Retirement",
      6: "Additional Financial Planning Essentials",
      7: "Tax Planning",
      8: "Social Security: Key Decisions",
      9: "Estate Planning Fundamentals",
      10: "Insurance in Retirement",
      11: "How United Financial Planning Group Can Help"
    };
    
    return titles[sectionId] || `Section ${sectionId}`;
  };
  
  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Top navigation bar */}
      <div className="bg-blue-800 text-white px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-1 rounded-md hover:bg-blue-700"
          >
            <Menu size={24} />
          </button>
          <div className="flex items-center">
            <BookOpen size={20} className="mr-2" />
            <span className="font-semibold">The Investor's Guide to a Comfortable Retirement</span>
          </div>
        </div>
        <div className="text-sm">
          Page {currentPage + 1} of {pages.length}
        </div>
      </div>
      
      {/* Main content area with sidebar */}
      <div className="flex flex-1 overflow-hidden">
        {/* Table of Contents Sidebar */}
        {menuOpen && (
          <div className="w-64 bg-gray-100 p-4 overflow-y-auto flex-shrink-0 h-full">
            <h3 className="font-bold text-lg mb-4 text-blue-800">Table of Contents</h3>
            <ul className="space-y-2">
              {pages.map((page, index) => (
                <li key={page.id}>
                  <button
                    onClick={() => goToPage(index)}
                    className={`w-full text-left px-3 py-2 rounded-md ${currentPage === index ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-200'}`}
                  >
                    {page.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto">
            {pages[currentPage].content}
          </div>
          
          {/* Bottom navigation controls */}
          <div className="p-4 border-t flex justify-between">
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className={`flex items-center px-4 py-2 rounded-md ${currentPage === 0 ? 'text-gray-400 cursor-not-allowed' : 'bg-blue-100 text-blue-800 hover:bg-blue-200'}`}
            >
              <ChevronLeft size={20} className="mr-1" />
              Previous
            </button>
            
            <button
              onClick={() => goToPage(0)}
              className="flex items-center px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200"
            >
              <Home size={20} className="mr-1" />
              Home
            </button>
            
            <button
              onClick={nextPage}
              disabled={currentPage === pages.length - 1}
              className={`flex items-center px-4 py-2 rounded-md ${currentPage === pages.length - 1 ? 'text-gray-400 cursor-not-allowed' : 'bg-blue-100 text-blue-800 hover:bg-blue-200'}`}
            >
              Next
              <ChevronRight size={20} className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveRetirementEbook; 