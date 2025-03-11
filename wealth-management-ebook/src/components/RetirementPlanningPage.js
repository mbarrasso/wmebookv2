import React from 'react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const RetirementPlanningPage = ({ retirementProjectionData, incomeSourcesData, withdrawalRatesData }) => (
  <div className="max-w-4xl mx-auto p-4 md:p-8">
    <h2 className="text-3xl font-bold text-blue-900 border-b-2 border-blue-700 pb-2 mb-6">Retirement Planning & Income Strategies</h2>
    
    <p className="mb-6">Retirement planning for high-income professionals and affluent families involves more complexity than simply contributing to a 401(k). Professional wealth managers develop sophisticated retirement strategies that account for multiple income sources, tax optimization, and longevity planning. Here's how comprehensive retirement planning creates value:</p>
    
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
        <div className="bg-blue-100 rounded-full p-4 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-blue-700 mb-2 text-center">Retirement Capital Analysis</h3>
        <p className="text-sm text-center">Comprehensive modeling to determine if you're on track and how much you need to save to maintain your lifestyle in retirement.</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
        <div className="bg-green-100 rounded-full p-4 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-green-700 mb-2 text-center">Sustainable Income Planning</h3>
        <p className="text-sm text-center">Creating tax-efficient withdrawal strategies that maximize sustainable income while preserving assets for later years.</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
        <div className="bg-purple-100 rounded-full p-4 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-purple-700 mb-2 text-center">Risk Management</h3>
        <p className="text-sm text-center">Preparing for longevity, healthcare costs, inflation, and market volatility to protect your retirement security.</p>
      </div>
    </div>
    
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-blue-700 mb-4 text-center">Retirement Projection: Growth of $2M Portfolio</h3>
      <p className="text-center mb-4 italic">With annual additions of $50,000 until retirement at age 65</p>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={retirementProjectionData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="age" />
            <YAxis tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`} />
            <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, '']} />
            <Legend />
            <Area type="monotone" dataKey="managedGrowth" name="Professional Management" stroke="#4C51BF" fill="#4C51BF" fillOpacity={0.3} />
            <Area type="monotone" dataKey="selfDirected" name="Self-Directed" stroke="#E53E3E" fill="#E53E3E" fillOpacity={0.3} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-2 p-3 bg-indigo-50 rounded-md">
        <p className="text-sm text-center text-indigo-700">Professional management with optimized savings, asset allocation, and tax efficiency projects to $2.3M more wealth at retirement.</p>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-blue-700 mb-4 text-center">Retirement Income Sources</h3>
        <p className="text-center mb-4 italic">Diversified income strategy creates stability</p>
        
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={incomeSourcesData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {incomeSourcesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value}%`, '']} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-blue-700 mb-4 text-center">Sustainable Withdrawal Rates</h3>
        <p className="text-center mb-4 italic">How market conditions affect safe spending</p>
        
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={withdrawalRatesData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[0, 6]} tickFormatter={(value) => `${value}%`} />
              <Tooltip formatter={(value) => [`${value}%`, '']} />
              <Legend />
              <Line type="monotone" dataKey="conservativeRate" name="Conservative" stroke="#2C5282" strokeWidth={2} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="moderateRate" name="Moderate" stroke="#3182CE" strokeWidth={2} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="aggressiveRate" name="Aggressive" stroke="#63B3ED" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
    
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-blue-700 mb-6">Advanced Retirement Planning Strategies</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-bold text-blue-800 mb-2">Retirement Account Optimization</h4>
          <ul className="text-sm space-y-2">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Strategic use of Traditional, Roth, and after-tax contributions</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Backdoor and Mega Backdoor Roth contribution strategies</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>Tax-efficient account placement and withdrawal sequencing</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>QCD strategies for RMD management and charitable goals</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-bold text-green-800 mb-2">Pre-Retirement Strategies</h4>
          <ul className="text-sm space-y-2">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              <span>Catch-up contributions for those 50+ ($7,500 extra to 401(k) in 2023)</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              <span>HSA maximization as stealth retirement accounts</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              <span>Strategic Roth conversions in lower-income years</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              <span>NUA strategies for employer stock in retirement plans</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg">
          <h4 className="font-bold text-purple-800 mb-2">Income Distribution Planning</h4>
          <ul className="text-sm space-y-2">
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <span>Tax-efficient withdrawal sequencing across account types</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <span>Roth conversion ladders to manage future RMDs</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <span>Dynamic spending strategies based on market conditions</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <span>Strategic Social Security claiming to maximize lifetime benefits</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-orange-50 p-4 rounded-lg">
          <h4 className="font-bold text-orange-800 mb-2">Longevity & Healthcare Planning</h4>
          <ul className="text-sm space-y-2">
            <li className="flex items-start">
              <span className="text-orange-600 mr-2">•</span>
              <span>Medicare planning and supplemental insurance optimization</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-2">•</span>
              <span>Long-term care insurance analysis and alternatives</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-2">•</span>
              <span>HSA accumulation strategy for healthcare costs</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-2">•</span>
              <span>Inflation-protected income sources for essential expenses</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-md italic mb-6">
      <p>Retirement planning is where professional wealth management often adds the most tangible value. Many investors focus exclusively on investment returns, but a comprehensive retirement strategy addresses tax efficiency, income planning, risk management, and longevity planning. Studies suggest professionally managed retirement plans typically outperform self-directed plans by 1-3% annually through these optimizations, potentially translating to hundreds of thousands or even millions in additional retirement wealth.</p>
    </div>
    
    <p className="text-sm italic text-gray-600">Compliance note: All retirement projections are hypothetical examples for educational purposes only. Actual results will vary based on market conditions, contribution rates, investment selection, and other factors. Professional advice specific to your situation is recommended.</p>
  </div>
);

export default RetirementPlanningPage; 