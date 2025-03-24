// Sample data structure for managing multiple ebooks
const ebooks = [
  {
    id: "wealth-management",
    title: "The Value Of Wealth Management",
    subtitle: "Why paying for professional wealth management can be well worth it for high-net-worth individuals, retirees, and high-earning professionals.",
    coverImage: require('../assets/united-logo.png'),
    sections: [
      { id: "cover", title: "Cover" },
      { id: "introduction", title: "Introduction" },
      { id: "advisor-alpha", title: "Advisor Alpha" },
      { id: "beyond-investment", title: "Beyond Investment" },
      { id: "tax-efficient", title: "Tax-Efficient Investing" },
      { id: "retirement", title: "Retirement Planning" },
      { id: "behavioral", title: "Behavioral Coaching" },
      { id: "estate", title: "Estate Planning" },
      { id: "tax-planning", title: "Tax Planning" },
      { id: "insurance", title: "Insurance & Risk Management" },
      { id: "fee-concern", title: "Addressing Fee Concerns" },
      { id: "conclusion", title: "Conclusion" }
    ],
    published: true,
    publishedDate: "2023-03-15"
  },
  {
    id: "integrated-tax-planning",
    title: "Integrated Tax Planning & Wealth Management",
    subtitle: "The Often-Overlooked Wealth Multiplier",
    coverImage: require('../assets/united-logo.png'),
    sections: [
      { id: "cover", title: "Cover" },
      { id: "intro", title: "Executive Summary" },
      { id: "hidden-costs", title: "The Hidden Cost of Fragmented Advice" },
      { id: "tax-management", title: "Strategic Tax Management" },
      { id: "client-profiles", title: "Tailored Client Solutions" },
      { id: "case-studies", title: "Real-World Results" },
      { id: "next-steps", title: "Taking the Next Step" }
    ],
    published: true,
    publishedDate: "2023-11-15"
  },
  {
    id: "investors-guide-retirement",
    title: "The Investor's Guide to a Comfortable Retirement",
    subtitle: "Your Go-To Handbook for Financial Success in Retirement",
    coverImage: require('../assets/united-logo.png'),
    sections: [
      { id: "section1", title: "Retirement Planning" },
      { id: "section2", title: "Your Retirement Goals and Time Horizon" },
      { id: "section3", title: "Evaluating Your Asset Allocation" },
      { id: "section4", title: "Retirement Account Types and Key Considerations" },
      { id: "section5", title: "Generating Income in Retirement" },
      { id: "section6", title: "Additional Financial Planning Essentials" },
      { id: "section7", title: "Tax Planning" },
      { id: "section8", title: "Social Security: Key Decisions" },
      { id: "section9", title: "Estate Planning Fundamentals" },
      { id: "section10", title: "Insurance in Retirement" },
      { id: "section11", title: "How United Financial Planning Group Can Help" }
    ],
    published: true,
    publishedDate: "2024-03-24"
  },
  // Example of a second ebook that could be added
  {
    id: "retirement-strategies",
    title: "Effective Retirement Strategies",
    subtitle: "A comprehensive guide to planning for a secure and fulfilling retirement",
    coverImage: null, // Would need to add this asset
    sections: [
      { id: "cover", title: "Cover" },
      { id: "introduction", title: "Introduction" },
      { id: "retirement-planning", title: "Retirement Planning Basics" },
      { id: "income-sources", title: "Income Sources in Retirement" },
      { id: "investment-strategies", title: "Investment Strategies" },
      { id: "tax-planning", title: "Tax Planning for Retirement" },
      { id: "healthcare", title: "Healthcare Considerations" },
      { id: "estate-planning", title: "Estate Planning" },
      { id: "conclusion", title: "Conclusion" }
    ],
    published: false, // Not published yet
    publishedDate: null
  }
];

export default ebooks; 