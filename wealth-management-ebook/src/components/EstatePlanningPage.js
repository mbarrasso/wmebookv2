import React from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip } from 'recharts';

const EstatePlanningPage = ({ estateDistributionData }) => (
  <div className="max-w-4xl mx-auto p-4 md:p-8">
    <h2 className="text-3xl font-bold text-blue-900 border-b-2 border-blue-700 pb-2 mb-6">Estate Planning and Legacy Strategies</h2>
    
    <p className="mb-6">For high-net-worth families and successful professionals, estate planning and legacy goals are a critical component of financial well-being. Professional wealth managers don't replace estate attorneys, but they work in concert with estate planning professionals (and often facilitate the process) to ensure your financial plan accounts for the efficient transfer of wealth according to your wishes. Here are ways an advisor adds value in this arena:</p>
    
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h4 className="text-center text-lg font-bold mb-6">The Estate Planning Coordination Process</h4>
      
      <div className="space-y-12 relative">
        {/* Vertical line connecting steps */}
        <div className="absolute left-6 top-10 w-0.5 h-[calc(100%-90px)] bg-blue-700 z-0"></div>
        
        <div className="flex items-start relative z-10">
          <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-700 flex items-center justify-center text-white text-xl font-bold mr-4 shadow-md">1</div>
          <div className="bg-blue-50 rounded-lg shadow-sm p-4 flex-grow">
            <h5 className="font-bold text-blue-700 mb-2">Comprehensive Review of Current Documents</h5>
            <p className="text-sm">Your advisor examines existing wills, trusts, powers of attorney, and beneficiary designations to identify any gaps or inconsistencies with your current goals.</p>
          </div>
          <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 w-12 h-16 bg-white rounded-md shadow-md flex flex-col items-center justify-center z-20">
            <div className="w-8 h-10 border-2 border-blue-500 rounded"></div>
            <div className="text-xs font-bold mt-1">WILL</div>
          </div>
        </div>
        
        <div className="flex items-start relative z-10">
          <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-700 flex items-center justify-center text-white text-xl font-bold mr-4 shadow-md">2</div>
          <div className="bg-blue-50 rounded-lg shadow-sm p-4 flex-grow">
            <h5 className="font-bold text-blue-700 mb-2">Estate Goal Assessment</h5>
            <p className="text-sm">Your advisor helps clarify your estate transfer priorities: providing for a spouse, supporting children and grandchildren, charitable giving, minimizing taxes, and business succession planning.</p>
          </div>
        </div>
        
        <div className="flex items-start relative z-10">
          <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-700 flex items-center justify-center text-white text-xl font-bold mr-4 shadow-md">3</div>
          <div className="bg-blue-50 rounded-lg shadow-sm p-4 flex-grow">
            <h5 className="font-bold text-blue-700 mb-2">Estate Tax Analysis</h5>
            <p className="text-sm">Your advisor analyzes potential estate tax exposure and identifies strategies to minimize taxes while achieving your goals. This may include lifetime gifting, trust structures, or charitable planning.</p>
          </div>
        </div>
        
        <div className="flex items-start relative z-10">
          <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-700 flex items-center justify-center text-white text-xl font-bold mr-4 shadow-md">4</div>
          <div className="bg-blue-50 rounded-lg shadow-sm p-4 flex-grow">
            <h5 className="font-bold text-blue-700 mb-2">Coordination with Estate Attorney</h5>
            <p className="text-sm">Your advisor works with your estate attorney to implement legal structures. The advisor communicates your goals clearly and ensures that all financial assets align with the legal strategy.</p>
          </div>
          <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 w-12 h-16 bg-white rounded-md shadow-md flex flex-col items-center justify-center z-20">
            <div className="w-8 h-10 border-2 border-blue-500 rounded"></div>
            <div className="text-xs font-bold mt-1">TRUST</div>
          </div>
        </div>
        
        <div className="flex items-start relative z-10">
          <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-700 flex items-center justify-center text-white text-xl font-bold mr-4 shadow-md">5</div>
          <div className="bg-blue-50 rounded-lg shadow-sm p-4 flex-grow">
            <h5 className="font-bold text-blue-700 mb-2">Implementation & Asset Alignment</h5>
            <p className="text-sm">Your advisor ensures that all asset titles, beneficiary designations, and account registrations align with your estate plan. This critical step prevents unintended consequences.</p>
          </div>
        </div>
        
        <div className="flex items-start relative z-10">
          <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-700 flex items-center justify-center text-white text-xl font-bold mr-4 shadow-md">6</div>
          <div className="bg-blue-50 rounded-lg shadow-sm p-4 flex-grow">
            <h5 className="font-bold text-blue-700 mb-2">Ongoing Monitoring & Updates</h5>
            <p className="text-sm">Your advisor continuously monitors for changes in tax laws, your financial situation, or family circumstances that may require updates to your estate plan. This ensures your plan remains current.</p>
          </div>
        </div>
      </div>
    </div>
    
    <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">Minimizing Estate Taxes</h3>
    
    <p className="mb-6">At very high wealth levels, federal (and sometimes state) estate taxes can take a big bite out of the legacy you leave. Advisors work with estate attorneys to implement strategies to minimize estate tax – such as gifting strategies, spousal trusts like SLATs, irrevocable life insurance trusts (ILITs) to pay estate taxes, or setting up family limited partnerships.</p>
    
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h4 className="text-center text-lg font-bold mb-4">Impact of Estate Planning: $10 Million Estate Example</h4>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="h-80">
          <h5 className="text-center font-bold mb-4 bg-red-500 text-white py-2 rounded-t-lg">Without Proper Planning</h5>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={estateDistributionData[0]}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {estateDistributionData[0].map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value}%`, '']} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="h-80">
          <h5 className="text-center font-bold mb-4 bg-green-500 text-white py-2 rounded-t-lg">With Proper Planning</h5>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={estateDistributionData[1]}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {estateDistributionData[1].map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value}%`, '']} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="bg-green-500 text-white text-center font-bold py-3 rounded-lg text-xl mt-4">
        Potential Tax Savings: $1,500,000
      </div>
    </div>
    
    <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">Legacy and Philanthropy</h3>
    
    <p className="mb-6">Many high-net-worth individuals have charitable intentions or specific legacy goals (funding a family foundation, endowing a charity, or simply ensuring children and grandchildren are provided for responsibly). A financial advisor can help design a charitable giving plan that is tax-efficient (for example, using donor-advised funds, Qualified Charitable Distributions from IRAs after age 70½, or gifting appreciated stock instead of cash to avoid capital gains tax).</p>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        <div className="h-20 flex items-center justify-center">
          <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
            <div className="h-8 w-6 bg-blue-700 rounded relative">
              <div className="h-3 w-4 bg-blue-700 absolute -top-3 left-1/2 transform -translate-x-1/2 rounded-t-md"></div>
            </div>
          </div>
        </div>
        <div className="p-4 border-t">
          <h5 className="font-bold text-center mb-2">Trust Structures</h5>
          <p className="text-xs text-center">Establish trusts that pass wealth to heirs according to your specific conditions and timeline, potentially reducing taxes and protecting assets.</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        <div className="h-20 flex items-center justify-center">
          <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
            <div className="relative h-8 w-8">
              <div className="absolute h-8 w-2 bg-orange-500 top-0 left-1/2 transform -translate-x-1/2"></div>
              <div className="absolute h-2 w-8 bg-orange-500 top-1/2 left-0 transform -translate-y-1/2"></div>
            </div>
          </div>
        </div>
        <div className="p-4 border-t">
          <h5 className="font-bold text-center mb-2">Strategic Giving</h5>
          <p className="text-xs text-center">Maximize charitable impact through tax-efficient giving strategies like donor-advised funds, charitable trusts, and foundation planning.</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        <div className="h-20 flex items-center justify-center">
          <div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center">
            <div className="h-8 w-6 bg-indigo-500 rounded">
              <div className="h-2 w-4 bg-indigo-500 absolute -top-2 left-1/2 transform -translate-x-1/2 rounded-t-md"></div>
            </div>
          </div>
        </div>
        <div className="p-4 border-t">
          <h5 className="font-bold text-center mb-2">Education Funding</h5>
          <p className="text-xs text-center">Fund education for future generations through 529 plans and other tax-advantaged education saving vehicles.</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        <div className="h-20 flex items-center justify-center">
          <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
            <div className="relative h-4 w-4 bg-green-500 rounded-full">
              <div className="absolute h-8 w-8 border-2 border-green-500 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
        </div>
        <div className="p-4 border-t">
          <h5 className="font-bold text-center mb-2">Family Education</h5>
          <p className="text-xs text-center">Prepare heirs for responsible wealth management through structured education and guided wealth transition.</p>
        </div>
      </div>
    </div>
    
    <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-md italic mb-6">
      <p>In all, estate and legacy planning is a field where mistakes or omissions only surface after one's passing – at which point it's too late to fix them. By having a professional oversee this aspect, you reduce the risk of costly missteps (like assets going through lengthy probate, or inadvertent tax bills) and you maximize the impact of the wealth you've built. Part of the 1% fee is essentially for keeping an eye on the big picture of your life, not just your investments.</p>
    </div>
    
    <p className="text-sm italic text-gray-600">Compliance note: Estate planning strategies are complex and require legal expertise; advisors work in conjunction with legal professionals. Any examples are illustrative – individual estate planning needs vary, and legal/tax outcomes depend on your personal situation and current laws.</p>
  </div>
);

export default EstatePlanningPage; 