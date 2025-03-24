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