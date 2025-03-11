import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const BehavioralCoachingPage = ({ behaviorGapData }) => (
  <div className="max-w-4xl mx-auto p-4 md:p-8">
    <h2 className="text-3xl font-bold text-blue-900 border-b-2 border-blue-700 pb-2 mb-6">Behavioral Coaching: Preventing Costly Mistakes</h2>
    
    <p className="mb-4">Investing prowess isn't just about knowing what to do – it's also about avoiding knee-jerk reactions that can sabotage your long-term results. Numerous studies (and years of market history) show that individual investors often let emotions drive their decisions, to their detriment. The role of a financial advisor as a behavioral coach can be one of the most valuable (if not the most valuable) aspects of wealth management.</p>
    
    <p className="mb-6">It's frequently said that "investors are their own worst enemies." For instance, DALBAR's long-running studies on investor behavior have found that the average individual equity fund investor underperforms the broader market by around 3% per year over extended periods. Why? The typical self-directed investor buys high (chasing hot markets) and sells low (panicking in downturns), lags disciplined strategies, and mistimes market moves. Over decades, this behavior gap can cost hundreds of thousands or even millions in lost wealth.</p>
    
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h4 className="text-center text-lg font-bold mb-4">The Investor Behavior Gap</h4>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={behaviorGapData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 8]} tickCount={9} label={{ value: 'Annual Returns (%)', angle: -90, position: 'insideLeft' }} />
            <Tooltip formatter={(value) => [`${value}%`, 'Annual Return']} />
            <Bar dataKey="value" barSize={80}>
              {behaviorGapData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-red-50 p-3 rounded-lg border-l-4 border-red-500">
          <p className="text-sm font-bold">Behavior Gap: 3.0%</p>
          <p className="text-sm">Performance lost to emotional decisions</p>
        </div>
        <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
          <p className="text-sm font-bold">Advisor Value: 2.5%</p>
          <p className="text-sm">Recaptured through behavioral coaching</p>
        </div>
      </div>
      <p className="text-center text-sm text-gray-500 italic mt-4">Based on DALBAR's Quantitative Analysis of Investor Behavior studies and Vanguard Advisor's Alpha research. For illustration purposes.</p>
    </div>
    
    <p className="mb-4">A good advisor helps you avoid those classic mistakes. This means providing objective advice and emotional guardrails when the market gets euphoric or scary. For example, when markets are soaring and you feel tempted to pile into the latest fad investment, your advisor may counsel discipline and rebalancing (sell a bit of the winners to keep your portfolio allocation in line).</p>
    
    <p className="mb-6">Conversely, in a sharp downturn or crisis (think 2008 financial crisis or the 2020 COVID crash), a trusted advisor will coach you not to sell in panic, but rather to stick to the long-term plan – or even opportunistically rebalance and "buy low." These actions sound simple, but in the heat of the moment, many investors struggle to do them without guidance.</p>
    
    <h3 className="text-xl font-bold text-blue-700 mt-6 mb-3">Common Investor Behavioral Biases</h3>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-white shadow-md rounded-lg p-4 border-t-4 border-blue-500 hover:shadow-lg transition-shadow duration-300">
        <h4 className="font-bold text-gray-800 mb-2">Loss Aversion</h4>
        <p className="text-sm mb-2">The tendency to feel the pain of losses more acutely than the pleasure of gains, leading to overly conservative decisions.</p>
        <div className="bg-gray-100 p-2 rounded italic text-xs">
          "I'd rather keep my money in cash than risk losing it in the market, even if that means missing out on growth."
        </div>
      </div>
      
      <div className="bg-white shadow-md rounded-lg p-4 border-t-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
        <h4 className="font-bold text-gray-800 mb-2">Recency Bias</h4>
        <p className="text-sm mb-2">Placing too much weight on recent events and assuming they will continue indefinitely into the future.</p>
        <div className="bg-gray-100 p-2 rounded italic text-xs">
          "Tech stocks have been booming lately, so I should move most of my portfolio into tech."
        </div>
      </div>
      
      <div className="bg-white shadow-md rounded-lg p-4 border-t-4 border-orange-500 hover:shadow-lg transition-shadow duration-300">
        <h4 className="font-bold text-gray-800 mb-2">Herd Mentality</h4>
        <p className="text-sm mb-2">Following what others are doing rather than making independent decisions based on your own financial situation.</p>
        <div className="bg-gray-100 p-2 rounded italic text-xs">
          "Everyone I know is investing in cryptocurrency, so I should too."
        </div>
      </div>
      
      <div className="bg-white shadow-md rounded-lg p-4 border-t-4 border-indigo-500 hover:shadow-lg transition-shadow duration-300">
        <h4 className="font-bold text-gray-800 mb-2">Confirmation Bias</h4>
        <p className="text-sm mb-2">Seeking out information that confirms existing beliefs while ignoring contradictory evidence.</p>
        <div className="bg-gray-100 p-2 rounded italic text-xs">
          "I read an article supporting my investment thesis, so I'll ignore the five warning signs."
        </div>
      </div>
      
      <div className="bg-white shadow-md rounded-lg p-4 border-t-4 border-purple-500 hover:shadow-lg transition-shadow duration-300">
        <h4 className="font-bold text-gray-800 mb-2">Overconfidence</h4>
        <p className="text-sm mb-2">Overestimating one's own knowledge and abilities, leading to excessive trading or concentrated positions.</p>
        <div className="bg-gray-100 p-2 rounded italic text-xs">
          "I work in healthcare, so I know which pharmaceutical stocks will perform best."
        </div>
      </div>
      
      <div className="bg-white shadow-md rounded-lg p-4 border-t-4 border-blue-700 hover:shadow-lg transition-shadow duration-300">
        <h4 className="font-bold text-gray-800 mb-2">Anchoring</h4>
        <p className="text-sm mb-2">Fixating on a specific reference point (like purchase price) when making decisions, rather than current fundamentals.</p>
        <div className="bg-gray-100 p-2 rounded italic text-xs">
          "I won't sell this stock until it gets back to what I paid for it."
        </div>
      </div>
    </div>
    
    <p className="mb-6">By keeping you from "knee-jerk" reactions that derail your strategy, the advisor protects you from permanent losses. Vanguard has noted that behavioral coaching during extreme markets can add "tens of percentage points" of value by preventing catastrophic mistakes – easily offsetting years of fees in one go. In other words, if your advisor can stop you from selling out at the bottom of a bear market, they may have saved you from missing a subsequent rebound that could account for 20%, 30%, or more, of portfolio value – a one-time intervention worth far more than a modest annual fee.</p>
    
    <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-md italic mb-6">
      <p>Behavioral coaching also involves ongoing education and accountability: helping you understand market cycles, reminding you of your goals during turbulent times, and sometimes just being there as a sounding board before you make a big financial decision. High-net-worth investors often face unique emotional challenges – for example, managing concentrated stock positions in a company you founded (attachment bias), or anxiety from reading daily financial news given the large sums at stake.</p>
    </div>
    
    <p className="mb-4">An advisor provides perspective, historical context, and a steady hand, ensuring that decisions are driven by strategy rather than fear or greed. This ultimately leads to better long-term results – the value of which may not show up on a quarterly statement, but absolutely shows up in the end outcome.</p>
    
    <p className="mb-4">In summary, part of that 1% fee is essentially paying for an "emotional circuit breaker." It's an insurance policy against yourself doing something unwise in a moment of stress. As the saying goes, a good advisor will "save you from yourself." It's hard to overstate how important that is in wealth preservation.</p>
  </div>
);

export default BehavioralCoachingPage;
