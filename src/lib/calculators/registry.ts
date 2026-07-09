export type CalculatorStatus = "live" | "soon";

export interface CalculatorMeta {
  slug: string;
  name: string;
  shortDescription: string;
  category: string;
  status: CalculatorStatus;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
}

export const CATEGORIES: Category[] = [
  { slug: "salary-employment", name: "Salary & Employment", description: "PAYE, NAPSA, NHIMA, payroll and take-home pay." },
  { slug: "business", name: "Business", description: "VAT, turnover tax, profit margins and pricing." },
  { slug: "banking-loans", name: "Banking & Loans", description: "Loans, mortgages, savings and interest." },
  { slug: "investments", name: "Investments", description: "Treasury bills, bonds, dividends and returns." },
  { slug: "utilities", name: "Utilities", description: "ZESCO, water, fuel and household costs." },
  { slug: "mobile-money", name: "Mobile Money", description: "Airtel Money, MTN MoMo and Zamtel Kwacha fees." },
  { slug: "vehicles", name: "Vehicles", description: "Import duty, road tax and running costs." },
  { slug: "construction", name: "Construction", description: "Materials, quantities and building costs." },
  { slug: "agriculture", name: "Agriculture", description: "Fertilizer, livestock and farm budgets." },
  { slug: "property", name: "Property", description: "Rental yield, mortgages and property tax." },
  { slug: "personal-finance", name: "Personal Finance", description: "Budgeting, savings goals and debt payoff." },
  { slug: "education", name: "Education", description: "School fees and student budgeting." },
  { slug: "government", name: "Government", description: "Passport, licence and registration fees." },
  { slug: "everyday", name: "Everyday", description: "Percentages, dates, units and conversions." },
];

export const CALCULATORS: CalculatorMeta[] = [
  // --- Salary & Employment ---
  { slug: "paye", name: "PAYE Calculator", shortDescription: "Income tax on your salary using 2026 ZRA bands.", category: "salary-employment", status: "live" },
  { slug: "napsa", name: "NAPSA Calculator", shortDescription: "Pension contribution, employee and employer share.", category: "salary-employment", status: "live" },
  { slug: "nhima", name: "NHIMA Calculator", shortDescription: "Health insurance contribution on your salary.", category: "salary-employment", status: "live" },
  { slug: "gross-to-net", name: "Gross to Net Salary", shortDescription: "Full payslip breakdown from gross salary.", category: "salary-employment", status: "live" },
  { slug: "net-to-gross", name: "Net to Gross Salary", shortDescription: "Find the gross salary for a target take-home pay.", category: "salary-employment", status: "soon" },
  { slug: "skills-levy", name: "Skills Levy Calculator", shortDescription: "Employer skills development levy.", category: "salary-employment", status: "soon" },
  { slug: "pension", name: "Pension Calculator", shortDescription: "Estimate pension contributions and payout.", category: "salary-employment", status: "soon" },
  { slug: "employer-cost", name: "Employer Cost Calculator", shortDescription: "True cost of an employee to the business.", category: "salary-employment", status: "soon" },
  { slug: "overtime", name: "Overtime Calculator", shortDescription: "Overtime pay based on hourly rate.", category: "salary-employment", status: "soon" },
  { slug: "bonus-tax", name: "Bonus Tax Calculator", shortDescription: "Tax impact of a bonus or commission.", category: "salary-employment", status: "soon" },
  { slug: "hourly-wage", name: "Hourly Wage Calculator", shortDescription: "Convert between hourly, daily and annual pay.", category: "salary-employment", status: "soon" },
  { slug: "leave-pay", name: "Leave Pay Calculator", shortDescription: "Leave days payout calculation.", category: "salary-employment", status: "soon" },
  { slug: "terminal-benefits", name: "Terminal Benefits Calculator", shortDescription: "Gratuity and terminal benefits estimate.", category: "salary-employment", status: "soon" },

  // --- Business ---
  { slug: "vat", name: "VAT Calculator", shortDescription: "Add or remove 16% VAT from any amount.", category: "business", status: "live" },
  { slug: "profit-margin", name: "Profit Margin Calculator", shortDescription: "Margin, markup and selling price.", category: "business", status: "soon" },
  { slug: "turnover-tax", name: "Turnover Tax Calculator", shortDescription: "5% turnover tax for small businesses.", category: "business", status: "live" },
  { slug: "corporate-tax", name: "Corporate Tax Calculator", shortDescription: "Company income tax estimate.", category: "business", status: "soon" },
  { slug: "break-even", name: "Break-even Calculator", shortDescription: "Units needed to cover fixed costs.", category: "business", status: "soon" },

  // --- Banking & Loans ---
  { slug: "loan", name: "Loan Repayment Calculator", shortDescription: "Monthly instalments and total interest.", category: "banking-loans", status: "live" },
  { slug: "mortgage", name: "Mortgage Calculator", shortDescription: "Home loan repayments over time.", category: "banking-loans", status: "live" },
  { slug: "compound-interest", name: "Compound Interest Calculator", shortDescription: "Growth of savings or investments over time.", category: "banking-loans", status: "soon" },
  { slug: "fixed-deposit", name: "Fixed Deposit Calculator", shortDescription: "Maturity value of a fixed deposit.", category: "banking-loans", status: "soon" },
  { slug: "loan-affordability", name: "Loan Affordability Calculator", shortDescription: "How much you can safely borrow.", category: "banking-loans", status: "soon" },

  // --- Investments ---
  { slug: "treasury-bills", name: "Treasury Bills Calculator", shortDescription: "Returns on Zambian government treasury bills.", category: "investments", status: "soon" },
  { slug: "roi", name: "ROI Calculator", shortDescription: "Return on investment, in kwacha and percent.", category: "investments", status: "soon" },
  { slug: "inflation", name: "Inflation Calculator", shortDescription: "What your money is really worth over time.", category: "investments", status: "soon" },

  // --- Utilities ---
  { slug: "zesco-bill", name: "ZESCO Bill Estimator", shortDescription: "Estimate your monthly electricity bill.", category: "utilities", status: "live" },
  { slug: "fuel-cost", name: "Fuel Cost Calculator", shortDescription: "Trip fuel cost based on distance and consumption.", category: "utilities", status: "soon" },
  { slug: "water-bill", name: "Water Bill Calculator", shortDescription: "Estimate your household water bill.", category: "utilities", status: "soon" },

  // --- Mobile Money ---
  { slug: "mobile-money-fees", name: "Mobile Money Fees Calculator", shortDescription: "Compare Airtel Money, MTN MoMo and Zamtel fees.", category: "mobile-money", status: "soon" },

  // --- Vehicles ---
  { slug: "import-duty", name: "Vehicle Import Duty Calculator", shortDescription: "Customs and excise duty on imported vehicles.", category: "vehicles", status: "soon" },
  { slug: "road-tax", name: "Road Tax Calculator", shortDescription: "Annual road tax by vehicle type.", category: "vehicles", status: "soon" },

  // --- Construction ---
  { slug: "cement", name: "Cement Calculator", shortDescription: "Bags of cement needed for a project.", category: "construction", status: "soon" },
  { slug: "paint", name: "Paint Calculator", shortDescription: "Litres of paint needed by wall area.", category: "construction", status: "soon" },

  // --- Agriculture ---
  { slug: "fertilizer", name: "Fertilizer Calculator", shortDescription: "Fertilizer quantity by field size.", category: "agriculture", status: "soon" },
  { slug: "poultry-profit", name: "Poultry Profit Calculator", shortDescription: "Profitability of a poultry batch.", category: "agriculture", status: "soon" },

  // --- Property ---
  { slug: "rental-yield", name: "Rental Yield Calculator", shortDescription: "Annual rental yield on a property.", category: "property", status: "soon" },

  // --- Personal Finance ---
  { slug: "budget-planner", name: "Budget Planner", shortDescription: "Plan monthly income against expenses.", category: "personal-finance", status: "soon" },
  { slug: "savings-goal", name: "Savings Goal Calculator", shortDescription: "How much to save each month to hit a target.", category: "personal-finance", status: "soon" },
  { slug: "debt-payoff", name: "Debt Payoff Calculator", shortDescription: "Time and interest to clear a debt.", category: "personal-finance", status: "soon" },

  // --- Education ---
  { slug: "school-fees-planner", name: "School Fees Planner", shortDescription: "Plan and save for school fees.", category: "education", status: "soon" },

  // --- Government ---
  { slug: "passport-fees", name: "Passport Fees Calculator", shortDescription: "Zambian passport application costs.", category: "government", status: "soon" },

  // --- Everyday ---
  { slug: "percentage", name: "Percentage Calculator", shortDescription: "Percentages, increases and decreases.", category: "everyday", status: "live" },
  { slug: "age", name: "Age Calculator", shortDescription: "Exact age in years, months and days.", category: "everyday", status: "live" },
  { slug: "date-calculator", name: "Date Calculator", shortDescription: "Days between two dates.", category: "everyday", status: "soon" },
  { slug: "unit-converter", name: "Unit Converter", shortDescription: "Convert length, weight, volume and more.", category: "everyday", status: "soon" },
];

export function getLiveCalculators() {
  return CALCULATORS.filter((c) => c.status === "live");
}

export function getCalculatorsByCategory(categorySlug: string) {
  return CALCULATORS.filter((c) => c.category === categorySlug);
}

export function getCategory(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getCalculator(slug: string) {
  return CALCULATORS.find((c) => c.slug === slug);
}
