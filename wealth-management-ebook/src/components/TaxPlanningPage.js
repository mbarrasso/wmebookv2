import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const TaxPlanningPage = ({ taxSavingsData, taxDeferralData }) => (
  <div className="max-w-4xl mx-auto p-4 md:p-8">
    <h2 className="text-3xl font-bold text-blue-900 border-b-2 border-blue-700 pb-2 mb-6">Strategic Tax Planning</h2>
    
    <p className="mb-6">High-income professionals and affluent families often pay significant taxes, but many opportunities exist to legally minimize this burden. Professional wealth managers incorporate tax-efficient strategies throughout your financial plan. While wealth managers don't replace tax professionals (CPAs and tax attorneys), they work alongside them to implement tax-aware investment, retirement, and estate strategies. Here's how a wealth advisor helps optimize your tax situation:</p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-blue-700 mb-4 text-center">
          <span className="inline-block bg-blue-100 rounded-full p-2 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          Investment Tax Strategies
        </h3>
        <ul className="space-y-2 list-disc list-inside">
          <li className="flex items-start">
            <span className="font-semibold w-40 flex-shrink-0">Asset Location:</span>
            <span className="text-sm">Strategically placing investments in different account types (taxable, tax-deferred, tax-free) based on tax characteristics.</span>
          </li>
          <li className="flex items-start">
            <span className="font-semibold w-40 flex-shrink-0">Tax-Loss Harvesting:</span>
            <span className="text-sm">Offsetting capital gains with losses in taxable accounts.</span>
          </li>
          <li className="flex items-start">
            <span className="font-semibold w-40 flex-shrink-0">Tax-Efficient Funds:</span>
            <span className="text-sm">Using ETFs and index funds that minimize taxable distributions.</span>
          </li>
          <li className="flex items-start">
            <span className="font-semibold w-40 flex-shrink-0">Gain/Income Timing:</span>
            <span className="text-sm">Managing when to realize investment gains or income based on tax bracket planning.</span>
          </li>
          <li className="flex items-start">
            <span className="font-semibold w-40 flex-shrink-0">Qualified Dividends:</span>
            <span className="text-sm">Focusing on investments that pay qualified dividends (taxed at preferential rates) versus ordinary dividends.</span>
          </li>
        </ul>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-blue-700 mb-4 text-center">
          <span className="inline-block bg-blue-100 rounded-full p-2 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          Income & Retirement Tax Planning
        </h3>
        <ul className="space-y-2 list-disc list-inside">
          <li className="flex items-start">
            <span className="font-semibold w-40 flex-shrink-0">Roth Conversions:</span>
            <span className="text-sm">Strategic conversions from Traditional to Roth accounts in lower-income years.</span>
          </li>
          <li className="flex items-start">
            <span className="font-semibold w-40 flex-shrink-0">Retirement Contribution Optimization:</span>
            <span className="text-sm">Maximizing pre-tax, Roth, and after-tax contributions based on tax situation.</span>
          </li>
          <li className="flex items-start">
            <span className="font-semibold w-40 flex-shrink-0">Retirement Income Sequencing:</span>
            <span className="text-sm">Determining which accounts to draw from in retirement to minimize lifetime tax burden.</span>
          </li>
          <li className="flex items-start">
            <span className="font-semibold w-40 flex-shrink-0">QCD Strategies:</span>
            <span className="text-sm">Using Qualified Charitable Distributions from IRAs after age 70½ to satisfy charitable goals while reducing taxable income.</span>
          </li>
          <li className="flex items-start">
            <span className="font-semibold w-40 flex-shrink-0">NUA Planning:</span>
            <span className="text-sm">Evaluating Net Unrealized Appreciation strategies for employer stock in retirement plans.</span>
          </li>
        </ul>
      </div>
    </div>
    
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-blue-700 mb-6 text-center">Tax Savings Impact: Sample Analysis</h3>
      
      <p className="mb-4 text-center italic">Estimated annual tax savings for a professional earning $400,000 with $2M in investable assets</p>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={taxSavingsData}
            margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" angle={-45} textAnchor="end" height={70} />
            <YAxis label={{ value: 'Annual Tax Savings ($)', angle: -90, position: 'insideLeft' }} />
            <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Potential Savings']} />
            <Bar dataKey="savings" fill="#3182CE" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-6 bg-green-50 p-4 rounded-lg border border-green-200">
        <p className="text-center font-bold text-green-700">Total Potential Annual Tax Savings: $42,500+</p>
        <p className="text-center text-sm text-green-600 italic mt-1">Over 20 years, tax-efficient management could save $850,000+ (not accounting for growth)</p>
      </div>
    </div>
    
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-blue-700 mb-4">The Power of Tax-Deferred Compounding</h3>
      
      <p className="mb-6">One of the most powerful tax strategies is maximizing tax-deferred growth. By deferring taxes into the future, more of your money works for you today. The chart below shows the difference between taxable and tax-deferred growth for a $100,000 investment earning 7% annually.</p>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={taxDeferralData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
            <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, '']} />
            <Legend />
            <Bar dataKey="taxable" name="Taxable Account" fill="#FC8181" />
            <Bar dataKey="taxDeferred" name="Tax-Deferred Account" fill="#68D391" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="h-16 w-16 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h4 className="text-center font-bold mb-2">Tax Alpha</h4>
        <p className="text-sm text-center">The measurable value added through tax-efficient strategies that boost after-tax returns without increasing risk.</p>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h4 className="text-center font-bold mb-2">Tax-Aware Rebalancing</h4>
        <p className="text-sm text-center">Strategic portfolio adjustments that maintain target allocations while minimizing tax impact.</p>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h4 className="text-center font-bold mb-2">Tax Calendar Planning</h4>
        <p className="text-sm text-center">Year-round tax planning that anticipates opportunities and prevents surprises at tax time.</p>
      </div>
    </div>
    
    <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-md italic mb-6">
      <p>The value of tax planning is often overlooked in comparing investment performance. A portfolio that earns 1% less in pre-tax returns but is managed tax-efficiently can outperform a tax-inefficient portfolio with higher pre-tax returns. Tax decisions often have long-lasting implications, and professional management in this area alone can often justify the advisory fee.</p>
    </div>
    
    <p className="text-sm italic text-gray-600">Compliance note: Tax planning strategies are informational only; their suitability depends on your individual circumstances. Consult with tax professionals regarding your specific situation. Specific tax outcomes cannot be guaranteed.</p>
  </div>
);

export default TaxPlanningPage; 