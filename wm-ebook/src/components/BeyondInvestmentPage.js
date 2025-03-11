import React from 'react';
import { DollarSign, TrendingUp, Shield, Briefcase, Users, BarChart2, Gift, AlertTriangle } from 'lucide-react';

const BeyondInvestmentPage = () => (
  <div className="max-w-4xl mx-auto p-4 md:p-8">
    <h2 className="text-3xl font-bold text-blue-900 border-b-2 border-blue-700 pb-2 mb-6">Beyond Investment Management: Comprehensive Wealth Strategies</h2>
    
    <p className="mb-6">Many people initially think of a financial advisor as someone who "manages investments." While investment management (selecting and monitoring your portfolio) is certainly a core service, a good wealth manager delivers much more than stock picking or portfolio allocation. This section highlights several comprehensive wealth strategies included with professional management – areas where advisors provide expertise that individual investors often overlook or find hard to implement on their own.</p>
    
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-center text-blue-800 mb-6">Comprehensive Wealth Management Framework</h3>
      
      <div className="mb-8">
        <div className="bg-blue-700 text-white p-4 rounded-lg shadow-md text-center mb-6">
          <h4 className="font-bold text-lg">Wealth Management</h4>
          <p className="text-sm">A holistic approach to managing all aspects of your financial life</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Row 1 */}
          <div className="bg-blue-50 p-4 rounded-lg border-t-4 border-blue-500 shadow-md">
            <div className="flex items-center mb-3">
              <TrendingUp className="text-blue-500 mr-2" size={24} />
              <h5 className="font-bold">Investment Management</h5>
            </div>
            <p className="text-sm">Strategic portfolio construction and ongoing oversight</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border-t-4 border-green-500 shadow-md">
            <div className="flex items-center mb-3">
              <DollarSign className="text-green-500 mr-2" size={24} />
              <h5 className="font-bold">Tax Optimization</h5>
            </div>
            <p className="text-sm">Strategies to minimize tax impact and maximize after-tax returns</p>
          </div>
          
          <div className="bg-orange-50 p-4 rounded-lg border-t-4 border-orange-500 shadow-md">
            <div className="flex items-center mb-3">
              <BarChart2 className="text-orange-500 mr-2" size={24} />
              <h5 className="font-bold">Retirement Planning</h5>
            </div>
            <p className="text-sm">Creating sustainable income streams for lifelong financial security</p>
          </div>
          
          <div className="bg-indigo-50 p-4 rounded-lg border-t-4 border-indigo-500 shadow-md">
            <div className="flex items-center mb-3">
              <Shield className="text-indigo-500 mr-2" size={24} />
              <h5 className="font-bold">Risk Management</h5>
            </div>
            <p className="text-sm">Protecting your assets from market volatility and unforeseen events</p>
          </div>
          
          {/* Row 2 */}
          <div className="bg-purple-50 p-4 rounded-lg border-t-4 border-purple-500 shadow-md">
            <div className="flex items-center mb-3">
              <Users className="text-purple-500 mr-2" size={24} />
              <h5 className="font-bold">Estate Planning</h5>
            </div>
            <p className="text-sm">Ensuring your wealth transfers according to your wishes</p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border-t-4 border-blue-500 shadow-md">
            <div className="flex items-center mb-3">
              <Gift className="text-blue-500 mr-2" size={24} />
              <h5 className="font-bold">Legacy Planning</h5>
            </div>
            <p className="text-sm">Creating meaningful impact for future generations</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border-t-4 border-green-500 shadow-md">
            <div className="flex items-center mb-3">
              <AlertTriangle className="text-green-500 mr-2" size={24} />
              <h5 className="font-bold">Behavioral Coaching</h5>
            </div>
            <p className="text-sm">Guidance to avoid emotional decisions and stay disciplined</p>
          </div>
          
          <div className="bg-orange-50 p-4 rounded-lg border-t-4 border-orange-500 shadow-md">
            <div className="flex items-center mb-3">
              <Briefcase className="text-orange-500 mr-2" size={24} />
              <h5 className="font-bold">Cash Flow Planning</h5>
            </div>
            <p className="text-sm">Optimizing income streams and expense management</p>
          </div>
        </div>
      </div>
      
      <p className="text-sm text-center text-gray-600 italic">Professional wealth management integrates multiple aspects of your financial life into a cohesive strategy.</p>
    </div>
    
    <p className="mb-4">A professional wealth management relationship encompasses a wide array of financial strategies beyond just picking investments. When you engage a financial advisor, you're not just hiring someone to select stocks and bonds - you're partnering with an expert who can help coordinate all aspects of your financial life into a cohesive plan.</p>
    
    <p className="mb-6">The comprehensive approach includes areas such as:</p>
    
    <ul className="list-disc pl-8 mb-6 space-y-2">
      <li><strong>Tax-Efficient Investing:</strong> Strategically placing investments in the most tax-advantageous accounts and implementing tax-loss harvesting to reduce your tax burden.</li>
      <li><strong>Retirement Planning:</strong> Creating sustainable withdrawal strategies and ensuring your assets will last throughout your lifetime.</li>
      <li><strong>Risk Management:</strong> Identifying potential vulnerabilities in your financial plan and implementing appropriate protections.</li>
      <li><strong>Estate Planning:</strong> Coordinating with attorneys to ensure your wealth passes according to your wishes with minimal taxation.</li>
      <li><strong>Legacy Planning:</strong> Developing strategies for charitable giving and multi-generational wealth transfer.</li>
      <li><strong>Behavioral Coaching:</strong> Providing guidance during market volatility to help you avoid costly emotional decisions.</li>
      <li><strong>Cash Flow Planning:</strong> Analyzing your income and expenses to optimize your savings and spending strategies.</li>
    </ul>
    
    <p className="mb-4">All of these elements work together synergistically. For example, tax strategies directly affect your investment approaches, which in turn impact your retirement income planning. Your estate plan needs to align with your investment strategy, while risk management protects all aspects of your wealth.</p>
    
    <p className="mb-6">In the following sections, we'll explore these key areas in greater detail, demonstrating how each contributes to the overall value proposition of professional wealth management. As you'll see, the value extends far beyond basic portfolio construction and significantly exceeds the 1% AUM fee typical in the industry.</p>
  </div>
);

export default BeyondInvestmentPage; 