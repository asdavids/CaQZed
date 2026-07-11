export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  readingMinutes: number;
  relatedCalculators: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-paye-works-zambia",
    title: "How PAYE Works in Zambia: A Plain-English Guide",
    description: "PAYE is deducted from your salary every month, but most people don't know exactly how it's calculated. Here's a clear, step-by-step explanation using the 2026 ZRA bands.",
    category: "Tax",
    publishedAt: "2026-07-01",
    readingMinutes: 6,
    relatedCalculators: ["paye", "gross-to-net", "net-to-gross"],
  },
  {
    slug: "how-to-calculate-gross-to-net-salary",
    title: "How to Calculate Your Net Salary in Zambia (PAYE + NAPSA + NHIMA)",
    description: "Your payslip has three mandatory deductions. Here's exactly how each one is calculated and what you can expect to take home.",
    category: "Salary",
    publishedAt: "2026-07-01",
    readingMinutes: 5,
    relatedCalculators: ["gross-to-net", "paye", "napsa", "nhima"],
  },
  {
    slug: "importing-a-car-zambia-complete-guide",
    title: "Importing a Car into Zambia: The Complete Cost Breakdown",
    description: "From the purchase price in Japan to the moment it's registered in Lusaka — every cost you'll face importing a used vehicle, and how to budget for it accurately.",
    category: "Vehicles",
    publishedAt: "2026-07-02",
    readingMinutes: 9,
    relatedCalculators: ["import-duty", "road-tax", "running-costs"],
  },
  {
    slug: "zambia-vat-guide-businesses",
    title: "VAT in Zambia: What Every Business Owner Needs to Know",
    description: "When do you need to register? What's the difference between VAT-inclusive and VAT-exclusive pricing? A practical guide to Zambia's 16% VAT for small and medium businesses.",
    category: "Business",
    publishedAt: "2026-07-02",
    readingMinutes: 7,
    relatedCalculators: ["vat", "turnover-tax", "profit-margin"],
  },
  {
    slug: "napsa-guide-zambia",
    title: "NAPSA Explained: How Zambia's Pension Scheme Works",
    description: "What NAPSA is, how contributions are calculated, what the monthly cap means for you, and how to eventually access your pension benefits.",
    category: "Employment",
    publishedAt: "2026-07-03",
    readingMinutes: 6,
    relatedCalculators: ["napsa", "pension", "employer-cost"],
  },
  {
    slug: "turnover-tax-vs-corporate-tax-zambia",
    title: "Turnover Tax vs Corporate Tax in Zambia: Which Applies to You?",
    description: "If your business earns under K5 million a year, you're in turnover tax territory — and it's simpler than corporate tax. Here's how to tell which regime applies and what it means for your tax bill.",
    category: "Business",
    publishedAt: "2026-07-03",
    readingMinutes: 5,
    relatedCalculators: ["turnover-tax", "corporate-tax", "vat"],
  },
  {
    slug: "zesco-electricity-bill-explained",
    title: "Why Your ZESCO Bill Changes as You Use More Units",
    description: "ZESCO uses a block tariff system — the more you use, the more each additional unit costs. Here's how to understand your bill and reduce it.",
    category: "Utilities",
    publishedAt: "2026-07-04",
    readingMinutes: 4,
    relatedCalculators: ["zesco-bill", "budget-planner"],
  },
  {
    slug: "employment-code-act-rights-zambia",
    title: "Your Rights as an Employee in Zambia: What the Employment Code Act Says",
    description: "Overtime, leave days, gratuity, notice pay — a plain-English summary of the key things the Employment Code Act 2019 entitles you to.",
    category: "Employment",
    publishedAt: "2026-07-04",
    readingMinutes: 8,
    relatedCalculators: ["overtime", "leave-pay", "terminal-benefits"],
  },
  {
    slug: "how-to-get-a-loan-zambia",
    title: "Getting a Loan in Zambia: What to Know Before You Sign",
    description: "Interest rates, reducing balance vs flat rate, what to watch for in the fine print, and how to calculate exactly what you'll repay before you commit.",
    category: "Loans",
    publishedAt: "2026-07-05",
    readingMinutes: 7,
    relatedCalculators: ["loan", "loan-affordability", "debt-payoff"],
  },
  {
    slug: "buying-a-house-zambia-costs",
    title: "Buying a House in Zambia: All the Costs Nobody Tells You About",
    description: "The purchase price is just the beginning. Here's a full breakdown of legal fees, transfer duty, mortgage costs, and running expenses for property buyers in Zambia.",
    category: "Property",
    publishedAt: "2026-07-05",
    readingMinutes: 8,
    relatedCalculators: ["mortgage", "rental-yield", "loan-affordability"],
  },
  {
    slug: "treasury-bills-zambia-beginners-guide",
    title: "Treasury Bills in Zambia: A Beginner's Guide to Investing",
    description: "What T-bills are, how to buy them through a bank, what yields to expect, and how withholding tax affects your real return — everything you need before your first investment.",
    category: "Investments",
    publishedAt: "2026-07-06",
    readingMinutes: 6,
    relatedCalculators: ["treasury-bills", "roi", "inflation"],
  },
  {
    slug: "compound-interest-explained-zambia",
    title: "Compound Interest: Why Starting to Save Early Matters More Than the Amount",
    description: "A simple illustration of how compound interest works over 5, 10, and 20 years — and why the biggest lever isn't the interest rate, it's time.",
    category: "Investments",
    publishedAt: "2026-07-06",
    readingMinutes: 5,
    relatedCalculators: ["compound-interest", "savings-goal", "fixed-deposit"],
  },
  {
    slug: "road-tax-zambia-guide",
    title: "Road Tax in Zambia: What You Pay, How It's Calculated, and When",
    description: "RTSA road tax is calculated by gross vehicle weight — not engine size, and not the value of your car. Here's how to find your correct band and what your options are for payment.",
    category: "Vehicles",
    publishedAt: "2026-07-07",
    readingMinutes: 4,
    relatedCalculators: ["road-tax", "import-duty", "running-costs"],
  },
  {
    slug: "poultry-farming-zambia-profit-margins",
    title: "Is Poultry Farming Profitable in Zambia? A Realistic Numbers Breakdown",
    description: "Day-old chick costs, feed conversion ratios, mortality rates, market prices — a practical look at what the numbers actually say about small-scale poultry profitability.",
    category: "Agriculture",
    publishedAt: "2026-07-07",
    readingMinutes: 7,
    relatedCalculators: ["poultry-profit", "break-even", "profit-margin"],
  },
  {
    slug: "nhima-health-insurance-zambia",
    title: "NHIMA: How Zambia's National Health Insurance Scheme Works",
    description: "What NHIMA covers, how contributions are calculated, who's enrolled automatically, and what you need to do to use it when you need care.",
    category: "Employment",
    publishedAt: "2026-07-08",
    readingMinutes: 5,
    relatedCalculators: ["nhima", "gross-to-net", "employer-cost"],
  },
  {
    slug: "inflation-savings-zambia",
    title: "Inflation and Your Savings: What Zambia's Inflation Rate Actually Costs You",
    description: "If your savings account earns less than inflation, you're losing money in real terms — even if the balance is growing. Here's how to think about it and what to do.",
    category: "Personal Finance",
    publishedAt: "2026-07-08",
    readingMinutes: 5,
    relatedCalculators: ["inflation", "savings-goal", "compound-interest"],
  },
  {
    slug: "gratuity-zambia-explained",
    title: "Gratuity in Zambia: What You're Entitled to at the End of a Contract",
    description: "If you're on a fixed-term contract over 12 months, you're entitled to gratuity at 25% of your basic pay. Here's how it's calculated and what the tax situation looks like.",
    category: "Employment",
    publishedAt: "2026-07-09",
    readingMinutes: 5,
    relatedCalculators: ["terminal-benefits", "leave-pay", "gross-to-net"],
  },
  {
    slug: "true-cost-of-owning-a-car-zambia",
    title: "The True Monthly Cost of Owning a Car in Zambia",
    description: "Most people only think about the purchase price. But fuel, road tax, insurance, maintenance, and the opportunity cost of the capital tied up all add up fast.",
    category: "Vehicles",
    publishedAt: "2026-07-09",
    readingMinutes: 6,
    relatedCalculators: ["running-costs", "fuel-cost", "road-tax", "loan"],
  },
  {
    slug: "bonus-tax-zambia",
    title: "How Bonuses Are Taxed in Zambia: Why Your Bonus Isn't Taxed at a Flat Rate",
    description: "Many people think bonuses are taxed at a special flat rate. They're not — they're added to your salary for the month and taxed through PAYE bands. Here's what that means in kwacha.",
    category: "Tax",
    publishedAt: "2026-07-10",
    readingMinutes: 4,
    relatedCalculators: ["bonus-tax", "paye", "gross-to-net"],
  },
  {
    slug: "starting-a-business-zambia-tax-guide",
    title: "Starting a Business in Zambia: Your First Tax Obligations Explained",
    description: "VAT registration, turnover tax vs corporate tax, PAYE for employees, skills levy — a clear map of what taxes a new Zambian business needs to think about from day one.",
    category: "Business",
    publishedAt: "2026-07-10",
    readingMinutes: 8,
    relatedCalculators: ["turnover-tax", "corporate-tax", "vat", "employer-cost"],
  },
];

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getBlogPostsByCategory(category: string) {
  return BLOG_POSTS.filter((p) => p.category === category);
}

export const BLOG_CATEGORIES = [...new Set(BLOG_POSTS.map((p) => p.category))];
