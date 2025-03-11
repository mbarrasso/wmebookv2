import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const InsurancePage = ({ insuranceGapData }) => (
  <div className="max-w-4xl mx-auto p-4 md:p-8">
    <h2 className="text-3xl font-bold text-blue-900 border-b-2 border-blue-700 pb-2 mb-6">Insurance & Risk Management</h2>
    
    <p className="mb-6">Risk management is a critical but often overlooked component of comprehensive wealth management. Professional wealth managers help protect your financial security by identifying vulnerabilities and implementing appropriate insurance strategies. This aspect of planning isn't about selling insurance – it's about ensuring your wealth is protected from various threats that could derail your financial goals.</p>
    
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-blue-700 mb-6 text-center">The Insurance Needs Analysis Process</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-4 rounded-lg border-t-4 border-blue-500">
          <div className="flex items-center mb-3">
            <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">1</div>
            <h4 className="font-bold text-blue-700">Risk Assessment</h4>
          </div>
          <p className="text-sm">Identify financial risks and quantify potential losses in areas like premature death, disability, healthcare costs, property damage, and liability claims.</p>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg border-t-4 border-blue-500">
          <div className="flex items-center mb-3">
            <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">2</div>
            <h4 className="font-bold text-blue-700">Gap Analysis</h4>
          </div>
          <p className="text-sm">Compare existing coverage against identified needs to find potential gaps or overlaps in protection strategies.</p>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg border-t-4 border-blue-500">
          <div className="flex items-center mb-3">
            <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">3</div>
            <h4 className="font-bold text-blue-700">Solutions Design</h4>
          </div>
          <p className="text-sm">Create a comprehensive protection strategy that balances adequate coverage with cost-effectiveness and integration with other financial plans.</p>
        </div>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <div className="bg-white rounded-lg shadow-lg p-6 h-full">
        <h3 className="text-xl font-bold text-blue-700 mb-4">Key Insurance Coverage Areas</h3>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="h-12 w-12 rounded-full flex items-center justify-center bg-green-100 flex-shrink-0 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-green-700 mb-1">Life Insurance</h4>
              <p className="text-sm">Provides income replacement and estate liquidity needs. Permanent policies can also offer tax-advantaged wealth accumulation.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="h-12 w-12 rounded-full flex items-center justify-center bg-purple-100 flex-shrink-0 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-purple-700 mb-1">Disability Insurance</h4>
              <p className="text-sm">Protects your most valuable asset – your earning power – if you become unable to work due to illness or injury.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="h-12 w-12 rounded-full flex items-center justify-center bg-red-100 flex-shrink-0 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-red-700 mb-1">Health Insurance</h4>
              <p className="text-sm">Comprehensive health coverage with appropriate deductibles and out-of-pocket maximums to protect against catastrophic medical expenses.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="h-12 w-12 rounded-full flex items-center justify-center bg-blue-100 flex-shrink-0 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-blue-700 mb-1">Property & Casualty</h4>
              <p className="text-sm">Home, auto, and umbrella liability coverage to protect your assets from lawsuits and damages that could erode your wealth.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="h-12 w-12 rounded-full flex items-center justify-center bg-orange-100 flex-shrink-0 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-orange-700 mb-1">Long-Term Care</h4>
              <p className="text-sm">Covers costs of extended care needs that could otherwise rapidly deplete retirement savings and impact legacy goals.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-blue-700 mb-4 text-center">Identifying Insurance Gaps</h3>
        <p className="text-center italic mb-4">Typical coverage gaps for a family with $300k income and $2M net worth</p>
        
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={insuranceGapData}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" tickFormatter={(value) => `$${value / 1000}k`} />
              <YAxis dataKey="name" type="category" width={100} />
              <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Coverage Gap']} />
              <Legend />
              <Bar dataKey="recommended" name="Recommended Coverage" fill="#3182CE" />
              <Bar dataKey="current" name="Current Coverage" fill="#F56565" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
    
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h3 className="text-xl font-bold text-blue-700 mb-6">Advanced Risk Management Strategies</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-indigo-50 p-4 rounded-lg">
          <h4 className="font-bold text-indigo-800 mb-2">Personal Liability Protection</h4>
          <p className="text-sm mb-3">High-net-worth individuals are often targets for liability claims. Umbrella insurance provides additional coverage beyond standard homeowners and auto policies.</p>
          <div className="bg-white p-3 rounded-md shadow-sm">
            <p className="text-xs font-bold text-center">Recommendation:</p>
            <p className="text-sm text-center">Umbrella coverage equal to at least your net worth</p>
          </div>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-bold text-green-800 mb-2">Business Owner Planning</h4>
          <p className="text-sm mb-3">Business owners need specialized coverage including key person insurance, business continuation planning, and buy-sell agreements funded with life insurance.</p>
          <div className="bg-white p-3 rounded-md shadow-sm">
            <p className="text-xs font-bold text-center">Recommendation:</p>
            <p className="text-sm text-center">Regular business valuation and coverage review</p>
          </div>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg">
          <h4 className="font-bold text-purple-800 mb-2">Long-Term Care Alternatives</h4>
          <p className="text-sm mb-3">Beyond traditional LTC insurance, consider hybrid life/LTC policies, annuities with LTC riders, or self-insuring through dedicated investment accounts.</p>
          <div className="bg-white p-3 rounded-md shadow-sm">
            <p className="text-xs font-bold text-center">Recommendation:</p>
            <p className="text-sm text-center">Custom strategy based on health and wealth factors</p>
          </div>
        </div>
        
        <div className="bg-orange-50 p-4 rounded-lg">
          <h4 className="font-bold text-orange-800 mb-2">Estate Liquidity Planning</h4>
          <p className="text-sm mb-3">Life insurance can provide immediate liquidity to pay estate taxes, equalize inheritances, or fund charitable bequests without forcing liquidation of other assets.</p>
          <div className="bg-white p-3 rounded-md shadow-sm">
            <p className="text-xs font-bold text-center">Recommendation:</p>
            <p className="text-sm text-center">ILIT-owned policies for estates nearing taxable threshold</p>
          </div>
        </div>
      </div>
    </div>
    
    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-8">
      <h3 className="text-xl font-bold text-blue-800 mb-4">The Advisor's Role in Insurance Planning</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-md shadow-sm">
          <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h4 className="text-center font-bold mb-2">Objective Analysis</h4>
          <p className="text-xs text-center">Fiduciary advisors provide objective analysis of insurance needs without commission-based conflicts.</p>
        </div>
        
        <div className="bg-white p-4 rounded-md shadow-sm">
          <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          </div>
          <h4 className="text-center font-bold mb-2">Integration</h4>
          <p className="text-xs text-center">Insurance planning integrated with your overall financial strategy, not as isolated products.</p>
        </div>
        
        <div className="bg-white p-4 rounded-md shadow-sm">
          <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h4 className="text-center font-bold mb-2">Ongoing Review</h4>
          <p className="text-xs text-center">Regular policy reviews ensure coverage remains appropriate as your life circumstances change.</p>
        </div>
      </div>
    </div>
    
    <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-md italic mb-6">
      <p>Insurance and risk management represent some of the most valuable but least glamorous aspects of wealth management. Few people are excited about insurance, yet proper coverage can prevent catastrophic financial losses. Professional advisors ensure this critical foundation is in place before focusing on more exciting aspects like investment growth. Having an expert regularly review your coverage as your wealth grows can prevent significant gaps that could otherwise derail your financial plan.</p>
    </div>
    
    <p className="text-sm italic text-gray-600">Compliance note: Insurance recommendations should be tailored to your specific situation. While wealth managers can coordinate and advise on insurance strategies, specific product recommendations typically come from licensed insurance professionals. Review all policy details carefully before purchasing.</p>
  </div>
);

export default InsurancePage; 