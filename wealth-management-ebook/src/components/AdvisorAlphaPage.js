import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const AdvisorAlphaPage = ({ advisorAlphaData }) => (
  <div className="max-w-4xl mx-auto p-4 md:p-8">
    <h2 className="text-3xl font-bold text-blue-900 border-b-2 border-blue-700 pb-2 mb-6">The Value of Advice: Vanguard's Alpha & Morningstar's Gamma</h2>
    
    <p className="mb-4">One way to evaluate an advisor's worth is to look at research on the "advisor alpha" or "gamma" – essentially, the extra value created by good financial advice. Two landmark frameworks come from Vanguard and Morningstar:</p>
    
    <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">Vanguard's Advisor's Alpha</h3>
    
    <p className="mb-4">Vanguard researchers introduced "Advisor's Alpha" to quantify how much value a financial advisor can add through best practices in wealth management. Their analysis concludes that advisors who implement key strategies can add about 3% in net annual returns for their clients (in other words, 3% beyond what the client might achieve on their own).</p>
    
    <p className="mb-6">This ~3% figure isn't from trying to beat the market; rather, it comes from relationship-oriented services – things like optimizing asset allocation, reducing costs, rebalancing, providing behavioral coaching, implementing tax efficiencies, and structuring retirement drawdowns. Vanguard emphasizes that the actual value will vary for each investor and each year, and much of it appears in intermittent big wins (for example, avoiding a major mistake in a market crisis) rather than a steady 0.25% each quarter.</p>
    
    <div className="h-96 bg-white p-4 rounded-lg shadow-md mb-8">
      <h4 className="text-center text-lg font-bold mb-4">Components of Vanguard's Advisor Alpha</h4>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart
          data={advisorAlphaData}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 120, bottom: 40 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
          <XAxis 
            type="number" 
            domain={[0, 2.5]} 
            tickCount={6} 
            label={{ value: 'Annual Value Added (%)', position: 'bottom', offset: 15 }}
          />
          <YAxis type="category" dataKey="name" width={100} />
          <Tooltip formatter={(value) => [`${value}%`, 'Annual Value Added']} />
          <Bar dataKey="value" background={{ fill: '#eee' }}>
            {advisorAlphaData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <p className="text-center text-sm text-gray-500 italic">Source: Based on Vanguard's Advisor's Alpha research. Individual results may vary.</p>
    </div>
    
    <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">Morningstar's Gamma</h3>
    
    <p className="mb-4">In a separate but related approach, Morningstar researchers developed the concept of "Gamma" – which measures the increase in retirement income an investor can achieve by making optimized financial planning decisions (as opposed to just optimizing investments).</p>
    
    <p className="mb-6">In their seminal study, Morningstar's David Blanchett and Paul Kaplan found that by combining five specific strategies, a retiree could generate 22.6% more income in retirement compared to an average strategy. This boost is equivalent to an extra 1.59% return per year for the portfolio as a whole – a significant improvement.</p>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-blue-50 p-4 rounded-lg border-t-4 border-blue-600">
        <div className="bg-blue-600 h-8 w-8 rounded-full flex items-center justify-center text-white font-bold mb-2 mx-auto">1</div>
        <h5 className="font-bold text-center mb-2">Total-Wealth Asset Allocation</h5>
        <p className="text-sm text-center">Considering all assets, including human capital, when setting the portfolio mix</p>
      </div>
      
      <div className="bg-green-50 p-4 rounded-lg border-t-4 border-green-600">
        <div className="bg-green-600 h-8 w-8 rounded-full flex items-center justify-center text-white font-bold mb-2 mx-auto">2</div>
        <h5 className="font-bold text-center mb-2">Dynamic Withdrawal Strategy</h5>
        <p className="text-sm text-center">Adjusting withdrawals based on market performance and life expectancy</p>
      </div>
      
      <div className="bg-orange-50 p-4 rounded-lg border-t-4 border-orange-500">
        <div className="bg-orange-500 h-8 w-8 rounded-full flex items-center justify-center text-white font-bold mb-2 mx-auto">3</div>
        <h5 className="font-bold text-center mb-2">Annuity Allocation</h5>
        <p className="text-sm text-center">Incorporating annuities to secure higher guaranteed income</p>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      <div className="bg-purple-50 p-4 rounded-lg border-t-4 border-purple-600">
        <div className="bg-purple-600 h-8 w-8 rounded-full flex items-center justify-center text-white font-bold mb-2 mx-auto">4</div>
        <h5 className="font-bold text-center mb-2">Tax-Efficient Withdrawals</h5>
        <p className="text-sm text-center">Optimizing which accounts to draw from and when</p>
      </div>
      
      <div className="bg-indigo-50 p-4 rounded-lg border-t-4 border-indigo-600">
        <div className="bg-indigo-600 h-8 w-8 rounded-full flex items-center justify-center text-white font-bold mb-2 mx-auto">5</div>
        <h5 className="font-bold text-center mb-2">Liability-Relative Optimization</h5>
        <p className="text-sm text-center">Tailoring asset allocation to specific needs and risk factors</p>
      </div>
    </div>
    
    <div className="bg-blue-700 text-white p-6 rounded-lg text-center mb-8">
      <h4 className="font-bold mb-2">Potential Retirement Income Improvement</h4>
      <div className="text-4xl font-bold mb-4">22.6%</div>
      <h4 className="font-bold mb-2">Equivalent Annual Return Boost</h4>
      <div className="text-4xl font-bold">1.59%</div>
    </div>
    
    <p className="mb-6">In plain terms, Morningstar's research highlights that good financial planning decisions – not just good stock picking – can materially improve your retirement outcome. It quantifies in dollars the value of thoughtful planning, which often far exceeds the advisory fee.</p>
    
    <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-md italic mb-6">
      <p>Bottom line: Both Vanguard's "Advisor's Alpha" and Morningstar's "Gamma" conclude that a skilled advisor can add on the order of 1.5%–3% (or more) per year of incremental value through holistic wealth management. Over the long run, this can compound into substantially higher portfolio values or retirement income. In context, a 1% AUM fee can be a bargain if it delivers even a portion of these benefits.</p>
    </div>
    
    <p className="text-sm italic text-gray-600">Disclosure: "Up to 3%" or "22.6% more income" are findings from specific studies under certain assumptions. These are not guaranteed for every individual; actual results will depend on your personal situation. The cited figures are averages or potential improvements, and individual advisor value may be higher or lower.</p>
  </div>
);

export default AdvisorAlphaPage; 