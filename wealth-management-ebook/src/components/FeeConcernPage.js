import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const FeeConcernPage = ({ feeComparisonData, valueAddedData }) => (
  <div className="max-w-4xl mx-auto p-4 md:p-8">
    <h2 className="text-3xl font-bold text-blue-900 border-b-2 border-blue-700 pb-2 mb-6">Addressing Fee Concerns</h2>
    
    <p className="mb-6">Fee sensitivity is natural and healthy – after all, costs directly reduce returns. But focusing solely on cost (the 1% fee) without considering the complete value proposition can lead to poor decisions. Let's address some common concerns about wealth management fees and examine the question of fee reasonableness in context.</p>
    
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-blue-700 mb-6 text-center">Common Fee Concerns Addressed</h3>
      
      <div className="space-y-6">
        <div className="border-l-4 border-red-500 pl-4 py-1">
          <h4 className="font-bold text-red-700 mb-2">"Why pay 1% when I can invest in index funds for almost nothing?"</h4>
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="mb-2">As this e-book has demonstrated, wealth management goes far beyond basic investment selection. The additional services provided – tax planning, retirement analysis, behavioral coaching, estate coordination and more – create significant value that far exceeds basic investment implementation.</p>
            <p className="text-sm italic">Remember: A 1% fee is not being charged merely for investment selection but for comprehensive financial expertise across multiple domains.</p>
          </div>
        </div>
        
        <div className="border-l-4 border-orange-500 pl-4 py-1">
          <h4 className="font-bold text-orange-700 mb-2">"Robo-advisors charge much less – why not use them?"</h4>
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="mb-2">Robo-advisors excel at low-cost investment implementation for simple situations but cannot replicate the personalized guidance, comprehensive planning, and relationship-based elements of full-service wealth management.</p>
            <p className="text-sm italic">Digital tools simply cannot accommodate the complex interplay of tax, estate, retirement, behavioral, and risk management considerations that human advisors navigate daily.</p>
          </div>
        </div>
        
        <div className="border-l-4 border-green-500 pl-4 py-1">
          <h4 className="font-bold text-green-700 mb-2">"1% compounds to a large amount over time – it seems excessive."</h4>
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="mb-2">While the dollar value of a 1% fee grows with your assets, so does the complexity and value of managing those assets. Larger portfolios require more sophisticated tax and estate strategies, involve greater risk management challenges, and benefit more from advanced planning techniques.</p>
            <p className="text-sm italic">Most firms employ tiered fee schedules to accommodate this reality, with percentage rates declining at higher asset levels.</p>
          </div>
        </div>
        
        <div className="border-l-4 border-blue-500 pl-4 py-1">
          <h4 className="font-bold text-blue-700 mb-2">"I can manage my investments myself – I don't need to pay an advisor."</h4>
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="mb-2">Self-management is certainly possible, but consider three factors: expertise (keeping up with tax law, estate strategies, investment research), time (the hours required to properly manage all aspects of a complex financial life), and emotional discipline (maintaining objectivity during market turbulence).</p>
            <p className="text-sm italic">Many successful DIY investors eventually recognize the opportunity cost of their time and the value of focused expertise as their wealth grows more complex.</p>
          </div>
        </div>
      </div>
    </div>
    
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-blue-700 mb-4 text-center">The Bigger Picture: Fee Competitiveness</h3>
      
      <p className="text-center italic mb-6">Annual percentage fees across wealth management options</p>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={feeComparisonData}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" tickFormatter={(value) => `${value}%`} domain={[0, 2.0]} />
            <YAxis dataKey="name" type="category" width={120} />
            <Tooltip formatter={(value) => [`${value}%`, 'Fee']} />
            <Bar dataKey="fee" fill="#3182CE" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 text-sm text-gray-600 italic">
        <p>* Private wealth managers often charge additional fees for unique service needs</p>
        <p>** Financial advisors' fees typically include all planning services in the AUM fee</p>
      </div>
    </div>
    
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-blue-700 mb-6 text-center">Value vs. Cost: The Complete Picture</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
        <div>
          <h4 className="font-bold text-center mb-4">Components of Value</h4>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={valueAddedData}
                margin={{ top: 5, right: 5, left: 5, bottom: 50 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                <YAxis tickFormatter={(value) => `${value}%`} />
                <Tooltip formatter={(value) => [`${value}%`, 'Potential Value Added']} />
                <Bar dataKey="value" fill="#48BB78" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="flex flex-col justify-center">
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-md mb-4">
            <h5 className="font-bold text-green-700 mb-2">Quantifiable Value</h5>
            <p className="text-sm">Research from Vanguard, Morningstar, and other independent sources suggests well-executed wealth management can add 1.5% to 3.0% in net returns annually.</p>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-md mb-4">
            <h5 className="font-bold text-blue-700 mb-2">Non-Quantifiable Value</h5>
            <p className="text-sm">Peace of mind, time savings, reduced stress, and confidence in your financial future are significant but unmeasurable benefits of professional advice.</p>
          </div>
          
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-md">
            <h5 className="font-bold text-purple-700 mb-2">Value Across Life Stages</h5>
            <p className="text-sm">The value of advice often increases during critical transitions: retirement, wealth transfer, business sale, or market volatility.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-md">
        <h4 className="font-bold text-center mb-3">The Bottom Line on Fees</h4>
        <p className="text-center">When comprehensive wealth management creates potential value of 1.5-3.0% while charging around 1%, the net result is clearly positive. The fee covers both tangible services and intangible benefits that together create more value than cost for most high-net-worth individuals.</p>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div className="bg-white rounded-lg shadow p-6">
        <h4 className="font-bold text-center mb-4 text-blue-700">Questions to Ask About Fees</h4>
        <ul className="space-y-3">
          <li className="flex items-start">
            <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold mr-2 flex-shrink-0">1</div>
            <p className="text-sm">What specific services are included in the fee? Is financial planning included, or is it an additional cost?</p>
          </li>
          <li className="flex items-start">
            <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold mr-2 flex-shrink-0">2</div>
            <p className="text-sm">Are there breakpoints where the fee percentage decreases as assets grow?</p>
          </li>
          <li className="flex items-start">
            <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold mr-2 flex-shrink-0">3</div>
            <p className="text-sm">Are there additional costs for transactions, fund expenses, or platform fees?</p>
          </li>
          <li className="flex items-start">
            <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold mr-2 flex-shrink-0">4</div>
            <p className="text-sm">How does the advisor add value beyond investment selection?</p>
          </li>
        </ul>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h4 className="font-bold text-center mb-4 text-blue-700">When the 1% Fee Makes Sense</h4>
        <div className="space-y-3">
          <div className="flex items-start">
            <div className="text-green-600 mr-2 mt-1">✓</div>
            <p className="text-sm">You have a complex financial situation (multiple accounts, high income, business interests, etc.)</p>
          </div>
          <div className="flex items-start">
            <div className="text-green-600 mr-2 mt-1">✓</div>
            <p className="text-sm">You value your time and prefer to delegate financial management</p>
          </div>
          <div className="flex items-start">
            <div className="text-green-600 mr-2 mt-1">✓</div>
            <p className="text-sm">You need help with tax planning, estate planning, or other specialized guidance</p>
          </div>
          <div className="flex items-start">
            <div className="text-green-600 mr-2 mt-1">✓</div>
            <p className="text-sm">You want a reliable partner during major life transitions and market volatility</p>
          </div>
          <div className="flex items-start">
            <div className="text-green-600 mr-2 mt-1">✓</div>
            <p className="text-sm">You recognize you might make emotional investment decisions without objective guidance</p>
          </div>
        </div>
      </div>
    </div>
    
    <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-md italic mb-6">
      <p>The fee discussion shouldn't focus solely on cost but on value creation – what you receive for what you pay. While a 1% AUM fee represents a significant cost in absolute dollars for larger portfolios, when compared to the potential financial benefits and intangible value of comprehensive wealth management, it represents a strong value proposition for many successful individuals and families.</p>
    </div>
  </div>
);

export default FeeConcernPage; 