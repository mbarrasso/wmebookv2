import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Menu, BookOpen, Home, FileText, Settings, Users, TrendingUp, CheckCircle } from 'lucide-react';

const IntegratedWealthEbook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const pages = [
    {
      id: 'cover',
      title: 'Cover',
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center p-8">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Integrated Tax Planning & Wealth Management</h1>
          <h2 className="text-2xl text-blue-600 mb-8">The Often-Overlooked Wealth Multiplier</h2>
          <div className="w-80 h-80 mb-8 flex items-center justify-center">
            <svg viewBox="0 0 300 300" className="w-full h-full">
              {/* Main Background */}
              <circle cx="150" cy="150" r="145" fill="#EBF5FF" stroke="#3B82F6" strokeWidth="2" />
              
              {/* Middle Circle */}
              <circle cx="150" cy="150" r="95" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="1.5" />
              
              {/* Inner Circle - United FPG */}
              <circle cx="150" cy="150" r="55" fill="#2563EB" />
              <text x="150" y="143" textAnchor="middle" fill="#FFF" fontSize="22" fontWeight="bold">UNITED</text>
              <text x="150" y="168" textAnchor="middle" fill="#FFF" fontSize="22" fontWeight="bold">FPG</text>
              
              {/* Evenly spaced service bubbles - 3 on top, 3 on bottom */}
              
              {/* TOP ROW */}
              
              {/* Investment Management - Top Left */}
              <g>
                <circle cx="75" cy="75" r="40" fill="white" stroke="#3B82F6" strokeWidth="1.5" />
                <text x="75" y="70" textAnchor="middle" fill="#1E40AF" fontSize="10" fontWeight="bold">INVESTMENT</text>
                <text x="75" y="82" textAnchor="middle" fill="#1E40AF" fontSize="10" fontWeight="bold">MANAGEMENT</text>
                <line x1="105" y1="105" x2="108" y2="108" stroke="#3B82F6" strokeWidth="1.5" />
              </g>
              
              {/* Estate Planning - Top Center */}
              <g>
                <circle cx="150" cy="55" r="40" fill="white" stroke="#3B82F6" strokeWidth="1.5" />
                <text x="150" y="50" textAnchor="middle" fill="#1E40AF" fontSize="10" fontWeight="bold">ESTATE</text>
                <text x="150" y="62" textAnchor="middle" fill="#1E40AF" fontSize="10" fontWeight="bold">PLANNING</text>
                <line x1="150" y1="95" x2="150" y2="95" stroke="#3B82F6" strokeWidth="1.5" />
              </g>
              
              {/* Financial Planning - Top Right */}
              <g>
                <circle cx="225" cy="75" r="40" fill="white" stroke="#3B82F6" strokeWidth="1.5" />
                <text x="225" y="70" textAnchor="middle" fill="#1E40AF" fontSize="10" fontWeight="bold">FINANCIAL</text>
                <text x="225" y="82" textAnchor="middle" fill="#1E40AF" fontSize="10" fontWeight="bold">PLANNING</text>
                <line x1="195" y1="105" x2="192" y2="108" stroke="#3B82F6" strokeWidth="1.5" />
              </g>
              
              {/* BOTTOM ROW */}
              
              {/* Retirement Planning - Bottom Left */}
              <g>
                <circle cx="75" cy="225" r="40" fill="white" stroke="#3B82F6" strokeWidth="1.5" />
                <text x="75" y="220" textAnchor="middle" fill="#1E40AF" fontSize="10" fontWeight="bold">RETIREMENT</text>
                <text x="75" y="232" textAnchor="middle" fill="#1E40AF" fontSize="10" fontWeight="bold">PLANNING</text>
                <line x1="105" y1="195" x2="108" y2="192" stroke="#3B82F6" strokeWidth="1.5" />
              </g>
              
              {/* Tax Strategy - Bottom Center */}
              <g>
                <circle cx="150" cy="245" r="40" fill="white" stroke="#3B82F6" strokeWidth="1.5" />
                <text x="150" y="240" textAnchor="middle" fill="#1E40AF" fontSize="10" fontWeight="bold">TAX</text>
                <text x="150" y="252" textAnchor="middle" fill="#1E40AF" fontSize="10" fontWeight="bold">STRATEGY</text>
                <line x1="150" y1="205" x2="150" y2="205" stroke="#3B82F6" strokeWidth="1.5" />
              </g>
              
              {/* Tax Preparation - Bottom Right */}
              <g>
                <circle cx="225" cy="225" r="40" fill="white" stroke="#3B82F6" strokeWidth="1.5" />
                <text x="225" y="220" textAnchor="middle" fill="#1E40AF" fontSize="10" fontWeight="bold">TAX</text>
                <text x="225" y="232" textAnchor="middle" fill="#1E40AF" fontSize="10" fontWeight="bold">PREPARATION</text>
                <line x1="195" y1="195" x2="192" y2="192" stroke="#3B82F6" strokeWidth="1.5" />
              </g>
              
              {/* Inner connector circle */}
              <circle cx="150" cy="150" r="75" fill="none" stroke="#BFDBFE" strokeWidth="1" strokeDasharray="3,3" />
              
              {/* Glow effect */}
              <defs>
                <radialGradient id="blue-glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#2563EB" stopOpacity="1" />
                </radialGradient>
              </defs>
              <circle cx="150" cy="150" r="45" fill="url(#blue-glow)" />
            </svg>
          </div>
          <p className="text-lg text-gray-600 italic">By United Financial Planning Group</p>
        </div>
      )
    },
    {
      id: 'intro',
      title: 'Executive Summary',
      content: (
        <div className="p-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Executive Summary</h2>
          
          <p className="mb-4">Strategic, year-round tax planning represents one of the most powerful yet underutilized tools for building and preserving wealth. At United Financial Planning Group, we've pioneered a fully integrated approach where tax professionals work in lockstep with financial advisors to enhance every aspect of your financial plan.</p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
            <p className="italic">The typical approach to wealth management is fundamentally broken. You meet with your investment advisor who creates strategies that your CPA never sees. Your CPA identifies tax opportunities after the fact—too late to implement. Meanwhile, neither professional has visibility into your complete financial picture. This disconnected approach doesn't just create blind spots—it actively prevents optimal financial outcomes.</p>
          </div>
          
          <div className="my-8 p-6 bg-gray-50 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">The Communication Breakdown vs. Integrated Approach</h3>
            <div className="flex justify-center">
              <svg viewBox="0 0 800 400" className="w-full max-w-3xl">
                {/* Main Title */}
                <text x="400" y="40" textAnchor="middle" fontSize="22" fontWeight="bold">Two Approaches to Wealth Management</text>
                
                {/* Dividing line */}
                <line x1="400" y1="60" x2="400" y2="380" stroke="#CBD5E1" strokeWidth="2" />
                
                {/* LEFT SIDE - Fragmented Approach */}
                <text x="200" y="80" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#EF4444">Fragmented Approach</text>
                
                {/* Investment Advisor Box */}
                <rect x="80" y="110" width="240" height="60" rx="8" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1.5" />
                <text x="200" y="145" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#B91C1C">Investment Advisor</text>
                <text x="200" y="165" textAnchor="middle" fontSize="12" fill="#B91C1C">Creates investment strategies</text>
                
                {/* Broken connection - dashed line */}
                <line x1="200" y1="170" x2="200" y2="220" stroke="#EF4444" strokeWidth="2" strokeDasharray="6,4" />
                
                {/* CPA Box */}
                <rect x="80" y="220" width="240" height="60" rx="8" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1.5" />
                <text x="200" y="255" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#B91C1C">CPA / Tax Professional</text>
                <text x="200" y="275" textAnchor="middle" fontSize="12" fill="#B91C1C">Prepares annual tax returns</text>
                
                {/* Problems List */}
                <rect x="80" y="300" width="240" height="80" rx="5" fill="#FECACA" fillOpacity="0.3" />
                <text x="90" y="320" fontSize="12" fill="#B91C1C">• Delayed tax-saving opportunities</text>
                <text x="90" y="340" fontSize="12" fill="#B91C1C">• Conflicting investment strategies</text>
                <text x="90" y="360" fontSize="12" fill="#B91C1C">• Client bears coordination burden</text>
                
                {/* Results Box */}
                <rect x="80" y="390" width="240" height="30" rx="5" fill="none" stroke="#EF4444" strokeWidth="1" strokeDasharray="3,2" />
                <text x="200" y="410" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#B91C1C">RESULT: EXECUTION GAP</text>
                
                {/* RIGHT SIDE - Integrated Approach */}
                <text x="600" y="80" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#10B981">Integrated Approach</text>
                
                {/* Integrated Circle */}
                <circle cx="600" cy="200" r="100" fill="#DCFCE7" stroke="#10B981" strokeWidth="1.5" />
                
                {/* Center text */}
                <text x="600" y="145" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#047857">UNITED FPG</text>
                
                {/* Services inside the circle */}
                <text x="600" y="175" textAnchor="middle" fontSize="11" fill="#047857">• Investment Management</text>
                <text x="600" y="195" textAnchor="middle" fontSize="11" fill="#047857">• Tax Strategy</text>
                <text x="600" y="215" textAnchor="middle" fontSize="11" fill="#047857">• Tax Preparation</text>
                <text x="600" y="235" textAnchor="middle" fontSize="11" fill="#047857">• Financial Planning</text>
                <text x="600" y="255" textAnchor="middle" fontSize="11" fill="#047857">• Retirement Planning</text>
                
                {/* Benefits List */}
                <rect x="480" y="300" width="240" height="80" rx="5" fill="#A7F3D0" fillOpacity="0.3" />
                <text x="490" y="320" fontSize="12" fill="#047857">• Year-round proactive planning</text>
                <text x="490" y="340" fontSize="12" fill="#047857">• Coordinated implementation</text>
                <text x="490" y="360" fontSize="12" fill="#047857">• Complete financial visibility</text>
                
                {/* Results Box */}
                <rect x="480" y="390" width="240" height="30" rx="5" fill="none" stroke="#10B981" strokeWidth="1.5" />
                <text x="600" y="410" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#047857">RESULT: OPTIMIZED OUTCOMES</text>
              </svg>
            </div>
          </div>
          
          <p className="mb-4">At United Financial Planning Group, we've eliminated the coordination gap by bringing financial planning and tax strategy under one roof, with professionals who collaborate in real-time and share a complete view of your financial situation. No more recommendations that sit in a binder, never implemented. No more tax-saving opportunities discovered months too late.</p>
          
          <p className="mb-4">This ebook explores how this synchronized approach creates substantial value, eliminates costly inefficiencies, and delivers measurable results across diverse client scenarios. You'll see exactly how strategies fall through the cracks in the traditional model and discover how our coordination system ensures every opportunity is identified, evaluated, and executed at precisely the right time.</p>
        </div>
      )
    },
    {
      id: 'hidden-costs',
      title: 'The Hidden Cost of Fragmented Advice',
      content: (
        <div className="p-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">The Hidden Cost of Fragmented Financial Advice</h2>
          
          <p className="mb-4">Most individuals maintain separate relationships with financial advisors and tax professionals—a division that seems logical on the surface but creates significant wealth-draining inefficiencies.</p>
          
          <h3 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">Common Pitfalls of Separated Services</h3>
          
          <div className="grid md:grid-cols-3 gap-6 my-6">
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <div className="flex items-start mb-3">
                <div className="bg-red-100 p-2 rounded-full mr-2">
                  <FileText size={24} className="text-red-700" />
                </div>
                <h4 className="text-xl font-semibold text-red-800">Missed Opportunities</h4>
              </div>
              <ul className="list-disc pl-6 space-y-2">
                <li>Investment strategies operating in isolation from tax implications</li>
                <li>Potential deductions and credits discovered too late</li>
                <li>Tax-efficient investment vehicles underutilized or misapplied</li>
                <li>Roth conversion opportunities overlooked in lower income years</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <div className="flex items-start mb-3">
                <div className="bg-orange-100 p-2 rounded-full mr-2">
                  <Settings size={24} className="text-orange-700" />
                </div>
                <h4 className="text-xl font-semibold text-orange-800">Last-Minute Scrambling</h4>
              </div>
              <ul className="list-disc pl-6 space-y-2">
                <li>Tax filings reduced to deadline-driven exercises</li>
                <li>Year-end tax moves executed hastily</li>
                <li>Reactive rather than proactive approach</li>
                <li>Rushed decisions leading to documentation errors</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <div className="flex items-start mb-3">
                <div className="bg-yellow-100 p-2 rounded-full mr-2">
                  <Users size={24} className="text-yellow-700" />
                </div>
                <h4 className="text-xl font-semibold text-yellow-800">Communication Gaps</h4>
              </div>
              <ul className="list-disc pl-6 space-y-2">
                <li>Critical information lost between separate professionals</li>
                <li>Conflicting strategies across domains</li>
                <li>Burden of coordination falling on you</li>
                <li>Inconsistent advice on key financial decisions</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
            <p className="italic text-lg">"Most financial decisions have tax implications, and most tax decisions have financial implications. When these considerations aren't synchronized, wealth inevitably leaks from the system."</p>
          </div>
          
          <h3 className="text-2xl font-semibold text-blue-700 mt-10 mb-4">The Execution Gap: Where Traditional Advice Fails</h3>
          
          <p className="mb-4">The traditional model of separate financial advisors and CPAs creates an execution gap where critical strategies fall through the cracks:</p>
          
          <div className="my-8">
            <svg viewBox="0 0 800 350" className="w-full">
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#777" />
                </marker>
              </defs>
              
              {/* Title */}
              <text x="400" y="30" textAnchor="middle" fontSize="18" fontWeight="bold">The Execution Gap: Strategies That Never Happen</text>
              
              {/* Boxes and arrows */}
              <rect x="60" y="60" width="250" height="90" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1" rx="5" />
              <text x="185" y="80" textAnchor="middle" fontWeight="bold" fill="#EF4444">Roth Conversion Opportunities</text>
              <text x="185" y="100" textAnchor="middle" fontSize="12">Financial advisor recommends but</text>
              <text x="185" y="115" textAnchor="middle" fontSize="12">CPA never implements because they</text>
              <text x="185" y="130" textAnchor="middle" fontSize="12">weren't involved in the decision</text>
              <text x="185" y="145" textAnchor="middle" fontSize="10" fontStyle="italic" fill="#EF4444">Lost savings: $120,000+ over lifetime</text>
              
              <rect x="60" y="170" width="250" height="90" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1" rx="5" />
              <text x="185" y="190" textAnchor="middle" fontWeight="bold" fill="#EF4444">Tax-Loss Harvesting</text>
              <text x="185" y="210" textAnchor="middle" fontSize="12">Market drops but advisor doesn't</text>
              <text x="185" y="225" textAnchor="middle" fontSize="12">act because they're unaware of</text>
              <text x="185" y="240" textAnchor="middle" fontSize="12">your complete tax situation</text>
              <text x="185" y="255" textAnchor="middle" fontSize="10" fontStyle="italic" fill="#EF4444">Lost savings: $5,000-$15,000 annually</text>
              
              <rect x="490" y="60" width="250" height="90" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1" rx="5" />
              <text x="615" y="80" textAnchor="middle" fontWeight="bold" fill="#EF4444">Asset Location Strategy</text>
              <text x="615" y="100" textAnchor="middle" fontSize="12">Investments placed in wrong accounts</text>
              <text x="615" y="115" textAnchor="middle" fontSize="12">because advisor lacks real-time</text>
              <text x="615" y="130" textAnchor="middle" fontSize="12">coordination with tax planning</text>
              <text x="615" y="145" textAnchor="middle" fontSize="10" fontStyle="italic" fill="#EF4444">Lost returns: 0.5-0.7% annually</text>
              
              <rect x="490" y="170" width="250" height="90" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1" rx="5" />
              <text x="615" y="190" textAnchor="middle" fontWeight="bold" fill="#EF4444">Retirement Account Selection</text>
              <text x="615" y="210" textAnchor="middle" fontSize="12">Pre-tax vs. Roth contributions decided</text>
              <text x="615" y="225" textAnchor="middle" fontSize="12">without analyzing future tax projections</text>
              <text x="615" y="240" textAnchor="middle" fontSize="12">from a tax professional</text>
              <text x="615" y="255" textAnchor="middle" fontSize="10" fontStyle="italic" fill="#EF4444">Lost savings: $85,000+ over lifetime</text>
              
              {/* Impact text */}
              <path d="M400,270 L400,290" stroke="#000" markerEnd="url(#arrowhead)" />
              <rect x="200" y="290" width="400" height="50" fill="#FEE2E2" stroke="#EF4444" strokeWidth="2" rx="5" />
              <text x="400" y="310" textAnchor="middle" fontWeight="bold" fill="#EF4444" fontSize="14">THE EXECUTION GAP</text>
              <text x="400" y="330" textAnchor="middle" fontStyle="italic" fontSize="12" fill="#EF4444">Where strategies are recommended but never implemented</text>
            </svg>
          </div>
          
          <p className="mt-6">This execution gap can cost affluent families hundreds of thousands—sometimes millions—of dollars over their lifetime. It's not just about having good strategies—it's about having a system that ensures every strategy is properly executed at precisely the right time. Only an integrated approach where financial planning and tax expertise exist under one roof can truly eliminate this costly gap.</p>
        </div>
      )
    },
    {
      id: 'tax-management',
      title: 'Strategic Tax Management',
      content: (
        <div className="p-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Strategic Tax Management: The Often-Overlooked Wealth Multiplier</h2>
          
          <p className="mb-4">Taxes represent one of the largest expenses most people will face over their lifetime. Strategic tax management, proactively integrated with your financial plan, can significantly enhance your net worth and financial outcomes.</p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
            <p className="italic">Without strategic tax planning, even a well-designed investment strategy can lose a significant portion of its returns to taxes. Proactive tax management is the difference between building wealth and maximizing wealth.</p>
          </div>
          
          <h3 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">Year-Round Proactive Planning</h3>
          
          <div className="my-8 p-6 bg-gray-50 rounded-lg shadow-md">
            <p className="mb-4">Unlike traditional approaches that address taxes as an annual event, our integrated model incorporates tax strategy into every financial decision throughout the year:</p>
            
            <div className="grid md:grid-cols-4 gap-4 my-6">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex items-center justify-center mb-2">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <span className="font-bold text-blue-800">Q1</span>
                  </div>
                </div>
                <p className="text-sm text-center">First-quarter strategy sessions identify opportunities for the current tax year</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex items-center justify-center mb-2">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <span className="font-bold text-blue-800">Q2</span>
                  </div>
                </div>
                <p className="text-sm text-center">Mid-year reviews adjust for legislative changes and life events</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex items-center justify-center mb-2">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <span className="font-bold text-blue-800">Q3</span>
                  </div>
                </div>
                <p className="text-sm text-center">Third-quarter preparation for tax-loss harvesting, Roth conversions, and charitable planning</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex items-center justify-center mb-2">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <span className="font-bold text-blue-800">Q4</span>
                  </div>
                </div>
                <p className="text-sm text-center">Fourth-quarter execution of strategic tax moves before year-end deadlines</p>
              </div>
            </div>
          </div>
          
          <h3 className="text-2xl font-semibold text-blue-700 mt-10 mb-4">Tax-Efficient Investment Strategies</h3>
          
          <div className="my-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-6 text-blue-700">Asset Location Strategy</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h5 className="font-semibold mb-2 text-red-800">Taxable Accounts</h5>
                  <p className="text-sm mb-3">Most tax-efficient investments</p>
                  <ul className="text-sm space-y-2 pl-4">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Tax-efficient stock funds</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Index funds & ETFs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Municipal bonds</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Stocks held for growth</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h5 className="font-semibold mb-2 text-yellow-800">Tax-Deferred Accounts</h5>
                  <p className="text-sm mb-3">(Traditional IRA, 401(k))</p>
                  <ul className="text-sm space-y-2 pl-4">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Taxable bonds</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>REITs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Actively managed funds</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>High-turnover investments</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h5 className="font-semibold mb-2 text-green-800">Tax-Free Accounts</h5>
                  <p className="text-sm mb-3">(Roth IRA, Roth 401(k))</p>
                  <ul className="text-sm space-y-2 pl-4">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Assets with highest growth potential</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Small-cap stocks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Aggressive stock funds</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Emerging markets</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <h3 className="text-2xl font-semibold text-blue-700 mt-10 mb-4">Tax-Loss Harvesting: Turning Losses into Opportunities</h3>
          
          <div className="my-8 p-6 bg-gray-50 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4 text-blue-700">How Tax-Loss Harvesting Works</h4>
            <div className="flex justify-center">
              <svg viewBox="0 0 700 300" className="w-full max-w-2xl">
                {/* Timeline */}
                <line x1="50" y1="150" x2="650" y2="150" stroke="#666" strokeWidth="2" />
                
                {/* Initial Purchase */}
                <circle cx="100" cy="150" r="10" fill="#3B82F6" />
                <text x="100" y="125" textAnchor="middle" fontWeight="bold">Initial Purchase</text>
                <text x="100" y="180" textAnchor="middle" fontSize="12">$10,000 investment</text>
                <text x="100" y="195" textAnchor="middle" fontSize="12">in Fund A</text>
                
                {/* Market Decline */}
                <circle cx="250" cy="150" r="10" fill="#EF4444" />
                <text x="250" y="125" textAnchor="middle" fontWeight="bold">Market Decline</text>
                <text x="250" y="180" textAnchor="middle" fontSize="12">Fund A drops to $8,000</text>
                <text x="250" y="195" textAnchor="middle" fontSize="12">($2,000 unrealized loss)</text>
                
                {/* Harvest Loss */}
                <circle cx="400" cy="150" r="10" fill="#10B981" />
                <text x="400" y="125" textAnchor="middle" fontWeight="bold">Harvest Loss</text>
                <text x="400" y="180" textAnchor="middle" fontSize="12">Sell Fund A</text>
                <text x="400" y="195" textAnchor="middle" fontSize="12">Buy similar Fund B</text>
                
                {/* Tax Benefit */}
                <circle cx="550" cy="150" r="10" fill="#F59E0B" />
                <text x="550" y="125" textAnchor="middle" fontWeight="bold">Tax Benefit</text>
                <text x="550" y="180" textAnchor="middle" fontSize="12">Offset $2,000 against</text>
                <text x="550" y="195" textAnchor="middle" fontSize="12">capital gains or income</text>
                
                {/* Benefits callout */}
                <rect x="450" y="220" width="200" height="60" rx="5" fill="#DBEAFE" stroke="#3B82F6" />
                <text x="550" y="240" textAnchor="middle" fontWeight="bold" fill="#1E40AF">Tax Savings</text>
                <text x="550" y="260" textAnchor="middle" fontSize="12" fill="#1E40AF">Up to $740 (37% tax bracket)</text>
                <text x="550" y="275" textAnchor="middle" fontSize="12" fill="#1E40AF">while maintaining market position</text>
                
                {/* Wash Sale Warning */}
                <rect x="50" y="220" width="200" height="60" rx="5" fill="#FEE2E2" stroke="#EF4444" />
                <text x="150" y="240" textAnchor="middle" fontWeight="bold" fill="#B91C1C">Wash Sale Rule</text>
                <text x="150" y="260" textAnchor="middle" fontSize="12" fill="#B91C1C">Don't buy substantially identical</text>
                <text x="150" y="275" textAnchor="middle" fontSize="12" fill="#B91C1C">securities within 30 days</text>
              </svg>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'client-profiles',
      title: 'Tailored Client Solutions',
      content: (
        <div className="p-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Tailored Advantages for Different Client Profiles</h2>
          
          <p className="mb-6">Our integrated tax and financial planning approach delivers specific benefits tailored to your unique situation. Here's how we serve clients across various life stages and circumstances.</p>
          
          <div className="grid md:grid-cols-2 gap-8 my-8">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 shadow-md">
              <div className="flex flex-col items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-full mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3 text-center">Retirees and Pre-Retirees</h3>
              </div>
              <ul className="list-disc pl-6 space-y-2">
                <li>Strategic withdrawal sequencing across taxable, tax-deferred, and tax-free accounts</li>
                <li>Proactive management of Required Minimum Distributions (RMDs)</li>
                <li>Social Security claiming strategies that minimize lifetime tax burden</li>
                <li>Multi-year Roth conversion planning in lower-income years</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 shadow-md">
              <div className="flex flex-col items-center mb-4">
                <div className="bg-purple-100 p-2 rounded-full mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-purple-800 mb-3 text-center">High-Income Professionals</h3>
              </div>
              <ul className="list-disc pl-6 space-y-2">
                <li>Backdoor and mega-backdoor Roth contribution strategies</li>
                <li>Tax-efficient management of equity compensation</li>
                <li>Identification of often-overlooked deductions for high earners</li>
                <li>Alternative investment strategies with favorable tax treatment</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border border-green-200 shadow-md">
              <div className="flex flex-col items-center mb-4">
                <div className="bg-green-100 p-2 rounded-full mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3 text-center">Business Owners</h3>
              </div>
              <ul className="list-disc pl-6 space-y-2">
                <li>Entity selection and structure aligned with personal financial goals</li>
                <li>Retirement plan strategies that maximize tax-advantaged savings</li>
                <li>Exit planning with multi-year tax implication forecasting</li>
                <li>Business expense optimization and documentation</li>
              </ul>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 shadow-md">
              <div className="flex flex-col items-center mb-4">
                <div className="bg-amber-100 p-2 rounded-full mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-amber-800 mb-3 text-center">Estate and Legacy Planners</h3>
              </div>
              <ul className="list-disc pl-6 space-y-2">
                <li>Lifetime gifting strategies that reduce estate tax exposure</li>
                <li>Charitable giving approaches that maximize tax benefits</li>
                <li>Trust structures that achieve both tax and legacy objectives</li>
                <li>Family wealth transfer techniques that preserve assets across generations</li>
              </ul>
            </div>
          </div>
          
          <h3 className="text-2xl font-semibold text-blue-700 mt-10 mb-6">Comprehensive Financial Visibility</h3>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <p className="mb-4">When your tax professionals have complete visibility into your investments, business interests, estate plans, and financial goals:</p>
            
            <div className="flex flex-col md:flex-row justify-between my-6 space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-1 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex justify-center mb-3">
                  <TrendingUp size={28} className="text-blue-600" />
                </div>
                <p className="text-center text-sm">Investment decisions incorporate after-tax return projections</p>
              </div>
              
              <div className="flex-1 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex justify-center mb-3">
                  <Settings size={28} className="text-blue-600" />
                </div>
                <p className="text-center text-sm">Business strategies align with personal tax situations</p>
              </div>
              
              <div className="flex-1 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex justify-center mb-3">
                  <Users size={28} className="text-blue-600" />
                </div>
                <p className="text-center text-sm">Estate planning coordinates with lifetime gifting strategies</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'case-studies',
      title: 'Real-World Results',
      content: (
        <div className="p-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Real-World Results: The Impact of Integration</h2>
          
          <p className="mb-6">Our integrated approach creates superior outcomes for clients across various situations. Through these case studies, we'll illustrate the power of aligning tax and financial strategies.</p>
          
          <h3 className="text-2xl font-semibold text-blue-700 mt-8 mb-6">Case Study: The Retirement Transition</h3>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-10">
            <h4 className="text-xl font-semibold text-blue-700 mb-4">Client Profile</h4>
            <p className="mb-4">Married couple, ages 62 and 60, with $2.8 million across various account types</p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="italic text-sm">This couple worked with separate advisors for years. Their financial advisor created a retirement plan but had limited tax expertise. Their CPA prepared annual tax returns but was never consulted about retirement strategy. Critical opportunities were identified too late or never implemented at all.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h5 className="font-semibold text-red-700 mb-3">Traditional Disconnected Approach</h5>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Claimed Social Security at retirement</strong> because financial advisor never coordinated with CPA on tax implications</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Missed Roth conversion window</strong> because strategy was recommended but never executed</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Tax-inefficient charitable giving</strong> because CPA identified opportunity after donations were already made</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-4">
                  <svg viewBox="0 0 350 200" className="w-full">
                    <rect x="25" y="25" width="300" height="150" fill="#FEE2E2" stroke="#EF4444" rx="5" />
                    
                    <text x="175" y="50" textAnchor="middle" fontWeight="bold" fill="#B91C1C">COORDINATION FAILURE</text>
                    
                    <line x1="50" y1="70" x2="300" y2="70" stroke="#B91C1C" strokeWidth="1" />
                    
                    <text x="175" y="95" textAnchor="middle" fontSize="12" fill="#B91C1C">$315,000 more in lifetime taxes</text>
                    <text x="175" y="120" textAnchor="middle" fontSize="12" fill="#B91C1C">Portfolio exhausted 4-6 years earlier</text>
                    <text x="175" y="145" textAnchor="middle" fontSize="12" fill="#B91C1C">$800,000+ reduction in inheritance</text>
                    <text x="175" y="170" textAnchor="middle" fontSize="12" fill="#B91C1C">Strategies recommended but never executed</text>
                  </svg>
                </div>
              </div>
              
              <div>
                <h5 className="font-semibold text-green-700 mb-3">United Financial Planning Approach</h5>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <ol className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Multi-year Roth conversion strategy</strong> in years before Social Security and RMDs</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Strategic realization of capital gains</strong> in lower-income years</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Charitable giving bunched</strong> into higher-income years</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span><strong>Social Security claiming strategy</strong> optimized for tax efficiency</span>
                    </li>
                  </ol>
                </div>
                
                <div className="mt-4">
                  <svg viewBox="0 0 350 220" className="w-full">
                    <rect x="25" y="25" width="300" height="170" fill="#DCFCE7" stroke="#10B981" rx="5" />
                    
                    <text x="175" y="50" textAnchor="middle" fontWeight="bold" fill="#047857">INTEGRATED RESULTS</text>
                    
                    <line x1="50" y1="70" x2="300" y2="70" stroke="#047857" strokeWidth="1" />
                    
                    <text x="175" y="95" textAnchor="middle" fontSize="12" fill="#047857">$300,000+ in lifetime tax savings</text>
                    <text x="175" y="120" textAnchor="middle" fontSize="12" fill="#047857">Portfolio longevity extended by 7 years</text>
                    <text x="175" y="145" textAnchor="middle" fontSize="12" fill="#047857">Coordinated implementation of all strategies</text>
                    <text x="175" y="170" textAnchor="middle" fontSize="12" fill="#047857">Regular progress monitoring with both</text>
                    <text x="175" y="190" textAnchor="middle" fontSize="12" fill="#047857">financial and tax perspectives</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <h3 className="text-2xl font-semibold text-blue-700 mt-10 mb-6">Case Study: The High-Income Physician</h3>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-10">
            <h4 className="text-xl font-semibold text-blue-700 mb-4">Client Profile</h4>
            <p className="mb-4">Specialist physician earning $600,000+ annually</p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="italic text-sm">Challenge: Maximizing retirement savings while reducing current tax burden</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h5 className="font-semibold text-blue-700 mb-3">Integrated Solution</h5>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <ul className="space-y-3 text-sm list-disc pl-5">
                    <li>Implemented defined benefit plan alongside 401(k)</li>
                    <li>Restructured compensation arrangement with practice</li>
                    <li>Coordinated backdoor Roth contributions</li>
                    <li>Optimized charitable giving through donor-advised fund</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h5 className="font-semibold text-green-700 mb-3">Outcome</h5>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <ul className="space-y-3 text-sm list-disc pl-5">
                    <li>Annual tax savings of $42,000</li>
                    <li>Additional retirement savings of $110,000 annually</li>
                    <li>Path to financial independence accelerated by 8 years</li>
                    <li>Integrated investment strategy aligned with tax plan</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <h3 className="text-2xl font-semibold text-blue-700 mt-10 mb-6">Case Study: The Business Owner's Exit</h3>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-blue-700 mb-4">Client Profile</h4>
            <p className="mb-4">Manufacturing business owner planning exit from $8.5 million company</p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="italic text-sm">Challenge: Structuring sale to minimize tax impact while ensuring retirement security</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h5 className="font-semibold text-blue-700 mb-3">Integrated Solution</h5>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <ul className="space-y-3 text-sm list-disc pl-5">
                    <li>Qualified Small Business Stock exclusion maximization</li>
                    <li>Installment sale structure to spread tax burden</li>
                    <li>ESOP consideration for portion of business</li>
                    <li>Strategic charitable remainder trust for dual tax and income benefits</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h5 className="font-semibold text-green-700 mb-3">Outcome</h5>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <ul className="space-y-3 text-sm list-disc pl-5">
                    <li>Effective tax rate on sale reduced from 37% to 19%</li>
                    <li>$1.5 million in additional after-tax proceeds</li>
                    <li>Secure income stream for retirement</li>
                    <li>Legacy giving objectives achieved</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'next-steps',
      title: 'Taking the Next Step',
      content: (
        <div className="p-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Taking the Next Step</h2>
          
          <p className="mb-6">Tax planning should be a cornerstone of your wealth strategy, not an annual afterthought. By integrating proactive tax planning with comprehensive financial management, United Financial Planning Group consistently uncovers opportunities to reduce tax burdens, enhance investment performance, and help you achieve your most important life and legacy goals.</p>
          
          <div className="my-8 p-6 bg-blue-50 rounded-lg border border-blue-200 shadow-md">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4 text-center">Our Integrated Approach</h3>
            
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex flex-col items-center mb-3">
                  <div className="bg-blue-100 p-2 rounded-full mb-2">
                    <TrendingUp size={20} className="text-blue-700" />
                  </div>
                  <h4 className="text-lg font-semibold text-blue-800 text-center">Ongoing Monitoring & Analysis</h4>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>Portfolio performance relative to after-tax return targets</li>
                  <li>Income timing opportunities across multiple years</li>
                  <li>Tax-loss harvesting occasions throughout market cycles</li>
                  <li>Legislative changes that open planning windows</li>
                </ul>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex flex-col items-center mb-3">
                  <div className="bg-blue-100 p-2 rounded-full mb-2">
                    <Settings size={20} className="text-blue-700" />
                  </div>
                  <h4 className="text-lg font-semibold text-blue-800 text-center">Forward-Looking Recommendations</h4>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>Multi-year tax projection models that show cumulative effects</li>
                  <li>Lifetime tax burden analysis, not just annual savings</li>
                  <li>After-tax estate value forecasting</li>
                  <li>Cash flow modeling that incorporates tax efficiency</li>
                </ul>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex flex-col items-center mb-3">
                  <div className="bg-blue-100 p-2 rounded-full mb-2">
                    <FileText size={20} className="text-blue-700" />
                  </div>
                  <h4 className="text-lg font-semibold text-blue-800 text-center">Transparent, Fee-Only Structure</h4>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>No product sales or hidden incentives</li>
                  <li>Recommendations driven solely by your best interests</li>
                  <li>Clear explanation of all fee structures</li>
                  <li>No separate billing for integrated tax services</li>
                </ul>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex flex-col items-center mb-3">
                  <div className="bg-blue-100 p-2 rounded-full mb-2">
                    <CheckCircle size={20} className="text-blue-700" />
                  </div>
                  <h4 className="text-lg font-semibold text-blue-800 text-center">Streamlined Implementation</h4>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>Coordinated implementation across investment and tax teams</li>
                  <li>Documented actions for tax substantiation</li>
                  <li>Tracking of results against projections</li>
                  <li>Regular reporting on tax savings alongside investment performance</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-10 p-8 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg shadow-lg text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to experience the difference?</h3>
            <p className="mb-6">Schedule a consultation today to discover how our integrated approach can transform your financial trajectory.</p>
            
            <div className="mt-6 text-center">
              <h4 className="text-xl font-semibold mb-3">Contact us today:</h4>
              <div className="flex flex-col md:flex-row justify-center space-y-3 md:space-y-0 md:space-x-8">
                <div className="flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>Phone: 631-234-0871</span>
                </div>
                <div className="flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>350 Motor Parkway, Suite 300<br />Hauppauge, NY 11788</span>
                </div>
                <div className="flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                  </svg>
                  <span>Website: unitedfpg.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center text-sm text-gray-600">
            <p>United Financial Planning Group is a fee-only fiduciary financial planning firm specializing in integrated tax and financial planning services for high-net-worth individuals, business owners, and professionals.</p>
            <p className="mt-2">This document is for informational purposes only and does not constitute tax, legal, or investment advice. Consult qualified professionals for advice specific to your situation.</p>
          </div>
        </div>
      )
    }
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
            <span className="font-semibold">Integrated Tax Planning & Wealth Management</span>
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
          <div className="w-64 bg-gray-100 p-4 overflow-y-auto">
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

export default IntegratedWealthEbook; 