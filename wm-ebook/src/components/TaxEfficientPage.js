import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const TaxEfficientPage = ({ taxEfficientData }) => (
  <div className="max-w-4xl mx-auto p-4 md:p-8">
    <h2 className="text-3xl font-bold text-blue-900 border-b-2 border-blue-700 pb-2 mb-6">Tax-Efficient Investing Strategies</h2>
    
    <p className="mb-6">Tax considerations can significantly affect your net investment returns, especially for high-net-worth individuals in higher tax brackets. An experienced advisor will proactively implement strategies to minimize the tax drag on your wealth:</p>
    
    <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">Asset Location</h3>
    
    <p className="mb-4">This means placing investments in the optimal type of account for tax purposes. Different assets are taxed differently – for example, interest from bonds is taxed as ordinary income, while stocks can yield tax-favored qualified dividends and long-term capital gains.</p>
    
    <p className="mb-6">A savvy wealth manager will place tax-inefficient assets (like taxable bonds or REITs) inside tax-deferred accounts (IRAs, 401(k)s), and hold more tax-efficient assets (like stock index funds) in taxable brokerage accounts. This way, you shelter the high-tax items and take advantage of lower rates on the others.</p>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-blue-600 text-white font-bold text-center py-3">
          Tax-Deferred Accounts
        </div>
        <div className="absolute top-2 right-2 bg-white text-xs font-semibold px-2 py-1 rounded shadow">
          Shelter High-Tax Assets
        </div>
        <div className="p-4 space-y-3">
          <div className="flex items-center border-b pb-2">
            <div className="h-6 w-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold mr-3">B</div>
            <div className="text-sm">Corporate & Government Bonds</div>
          </div>
          <div className="flex items-center border-b pb-2">
            <div className="h-6 w-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold mr-3">R</div>
            <div className="text-sm">REITs</div>
          </div>
          <div className="flex items-center border-b pb-2">
            <div className="h-6 w-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold mr-3">H</div>
            <div className="text-sm">High-Turnover Funds</div>
          </div>
          <div className="flex items-center">
            <div className="h-6 w-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold mr-3">T</div>
            <div className="text-sm">Taxable Bond Funds</div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-green-500 text-white font-bold text-center py-3">
          Taxable Accounts
        </div>
        <div className="absolute top-2 right-2 bg-white text-xs font-semibold px-2 py-1 rounded shadow">
          Hold Tax-Efficient Assets
        </div>
        <div className="p-4 space-y-3">
          <div className="flex items-center border-b pb-2">
            <div className="h-6 w-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold mr-3">I</div>
            <div className="text-sm">Index Funds/ETFs</div>
          </div>
          <div className="flex items-center border-b pb-2">
            <div className="h-6 w-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold mr-3">G</div>
            <div className="text-sm">Growth-Oriented Stocks</div>
          </div>
          <div className="flex items-center border-b pb-2">
            <div className="h-6 w-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold mr-3">M</div>
            <div className="text-sm">Municipal Bonds</div>
          </div>
          <div className="flex items-center">
            <div className="h-6 w-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold mr-3">L</div>
            <div className="text-sm">Low-Turnover Funds</div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-orange-500 text-white font-bold text-center py-3">
          Tax-Free Accounts (Roth)
        </div>
        <div className="absolute top-2 right-2 bg-white text-xs font-semibold px-2 py-1 rounded shadow">
          Maximize Growth
        </div>
        <div className="p-4 space-y-3">
          <div className="flex items-center border-b pb-2">
            <div className="h-6 w-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold mr-3">H</div>
            <div className="text-sm">High-Growth Investments</div>
          </div>
          <div className="flex items-center border-b pb-2">
            <div className="h-6 w-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold mr-3">A</div>
            <div className="text-sm">Aggressive Stock Funds</div>
          </div>
          <div className="flex items-center border-b pb-2">
            <div className="h-6 w-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold mr-3">E</div>
            <div className="text-sm">Emerging Markets</div>
          </div>
          <div className="flex items-center">
            <div className="h-6 w-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold mr-3">S</div>
            <div className="text-sm">Small-Cap Stocks</div>
          </div>
        </div>
      </div>
    </div>
    
    <p className="mb-6">Studies show that smart asset location can add on the order of 50–75 basis points (0.5%–0.75%) to a portfolio's return over time. While that boost accrues gradually, over many years the compounded benefit is substantial. Asset location is especially beneficial for those with large balances across taxable and tax-advantaged accounts, and it's a service typically included (and continuously managed) with a 1% AUM relationship.</p>
    
    <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">Tax-Loss Harvesting</h3>
    
    <p className="mb-4">In volatile markets, investments may temporarily decline in value. Tax-loss harvesting is the process of realizing losses on paper (by selling positions that are down) to capture a tax deduction, while reinvesting the proceeds in a similar exposure to stay on track. Those realized losses can offset capital gains and even a portion of regular income on your tax return, reducing your tax bill.</p>
    
    <p className="mb-6">Effective advisors often harvest losses during market dips — something many DIY investors fail to do consistently. According to Vanguard's research, tax-loss harvesting alone can add up to 1.5% in after-tax return per year in certain scenarios (especially in years with market volatility) – a direct gain that can more than cover a 1% fee.</p>
    
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h4 className="text-center text-lg font-bold mb-4">Impact of Tax-Efficient Investing Over 30 Years</h4>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={taxEfficientData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis tickFormatter={(value) => `$${value / 1000000}M`} />
            <Tooltip formatter={(value) => [`$${(value/1000000).toFixed(1)}M`, 'Portfolio Value']} />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="taxEfficient" 
              stroke="#48bb78" 
              name="Tax-Efficient Portfolio (5.75% net)"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
            <Line 
              type="monotone" 
              dataKey="standard" 
              stroke="#4299e1" 
              name="Standard Portfolio (5% net)"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-green-100 rounded-lg p-3 text-center mt-4 font-bold">
        Difference after 30 years: +$1.42 Million
      </div>
      <p className="text-center text-sm text-gray-500 italic mt-4">Starting with $1,000,000. Assumes consistent returns without market volatility for illustration purposes.</p>
    </div>
    
    <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-md shadow-sm mb-6">
      <h4 className="text-lg font-bold text-teal-700 mb-2">Example:</h4>
      <p>In the March 2020 downturn, many advisors harvested losses in stock portfolios, generating potentially tens of thousands of dollars of tax savings for affluent clients, which later offset gains when the market rebounded. Such tax alpha directly improves clients' net results.</p>
    </div>
    
    <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">Roth Conversions and Tax Bracket Management</h3>
    
    <p className="mb-4">A comprehensive wealth plan looks for opportunities to proactively manage your tax brackets over time. For instance, in years when your income (and tax bracket) is lower – such as early retirement before Social Security and required IRA distributions kick in – an advisor might recommend converting a portion of your traditional IRA to a Roth IRA.</p>
    
    <p className="mb-4">Paying some tax now at (say) a 12% or 22% rate to avoid paying tax later at 32% can result in huge long-term savings. Roth conversions can also reduce future Required Minimum Distributions (RMDs), potentially saving on Medicare premiums and taxes in your 70s.</p>
    
    <p className="mb-4">Coordinating these moves requires careful analysis of current vs. future tax rates, something in-house tax professionals do particularly well. Similarly, an advisor will be mindful of capital gains realization – for example, spreading the sale of a highly appreciated asset over multiple tax years or using charitable contributions (donor-advised funds, charitable trusts) to offset large gains.</p>
    
    <p className="mb-6">All of these maneuvers aim to keep more of your money compounding for you instead of going to Uncle Sam. The benefit is often quantifiable in dollars – every $50,000 tax saved via strategic planning is $50,000 back in your pocket, which by itself might cover years of advisory fees.</p>
    
    <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-md italic mb-6">
      <p>In short, effective tax management is a critical part of the value an advisor provides. It's not just about picking investments; it's about optimizing after-tax returns. High-net-worth investors often have complex tax situations (multiple account types, stock options, business income, etc.), and the difference between average and optimized tax strategy can be immense.</p>
    </div>
  </div>
);

export default TaxEfficientPage; 