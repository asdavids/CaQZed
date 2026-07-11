/**
 * BLOG POSTS
 *
 * To add a new post: add an entry to this array.
 * No rebuild of any component required — the listing and individual pages
 * are generated automatically from this data.
 *
 * `content` is plain HTML (no JSX needed — the page renders it via
 * dangerouslySetInnerHTML inside a styled prose container).
 * Use <h2>, <p>, <ul>, <li>, <strong>, <a href="..."> tags.
 * Keep paragraphs short and practical — these are for real Zambian readers.
 */

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // "YYYY-MM-DD"
  category: "Tax & ZRA" | "Salary & Employment" | "Business" | "Vehicles" | "Personal Finance" | "Investments";
  relatedCalculators?: string[]; // calculator slugs
  content: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-paye-works-zambia-2026",
    title: "How PAYE Works in Zambia (2026 Guide)",
    excerpt: "A plain-language explanation of how Pay As You Earn income tax is calculated in Zambia, with real examples using the 2026 ZRA bands.",
    date: "2026-07-10",
    category: "Tax & ZRA",
    relatedCalculators: ["paye", "gross-to-net", "net-to-gross"],
    content: `
<h2>What is PAYE?</h2>
<p>Pay As You Earn (PAYE) is Zambia's system for collecting income tax from salaried employees. Your employer deducts it from your pay each month before the salary reaches your account and remits it directly to ZRA on your behalf. If you're employed and earning above the tax-free threshold, you're already paying PAYE — it just happens invisibly.</p>

<h2>The 2026 PAYE bands</h2>
<p>Zambia uses a progressive tax system, which means you pay different rates on different portions of your income. The 2026 monthly bands are:</p>
<ul>
  <li><strong>K0 – K5,100:</strong> 0% (tax-free)</li>
  <li><strong>K5,100 – K7,100:</strong> 20%</li>
  <li><strong>K7,100 – K9,200:</strong> 30%</li>
  <li><strong>Above K9,200:</strong> 37%</li>
</ul>
<p>The critical thing to understand is that <strong>only the income in each band is taxed at that rate</strong> — not your whole salary. A progressive system never punishes you for earning more.</p>

<h2>A real example</h2>
<p>Say your monthly salary is K15,000. Here's how the tax is calculated:</p>
<ul>
  <li>First K5,100: 0% = K0</li>
  <li>Next K2,000 (K5,100 to K7,100): 20% = K400</li>
  <li>Next K2,100 (K7,100 to K9,200): 30% = K630</li>
  <li>Remaining K5,800 (above K9,200): 37% = K2,146</li>
</ul>
<p>Total PAYE: K3,176. Your effective tax rate is about 21.2% — not the headline 37%, because most of your income is taxed at lower rates.</p>

<h2>What's not included in taxable income?</h2>
<p>The rules around what counts as taxable income are more complex than many people realise. Cash allowances (housing, transport) are generally taxable. Benefits in kind (a company car, housing provided by the employer) have their own valuations. Always confirm the treatment of specific benefits with your employer's payroll team or a tax advisor.</p>

<h2>NAPSA and NHIMA also come off your pay</h2>
<p>PAYE is not the only deduction. NAPSA (pension, 5% capped at K1,861.80/month) and NHIMA (health insurance, 1%) also come off your gross salary. Use our <a href="/calculators/gross-to-net">Gross to Net Salary Calculator</a> to see all three deductions together.</p>
    `,
  },
  {
    slug: "zambia-vehicle-import-complete-guide-2026",
    title: "The Complete Guide to Importing a Car into Zambia (2026)",
    excerpt: "Everything you need to know about importing a used vehicle into Zambia — duty, JEVIC, clearing agents, RTSA registration and total costs.",
    date: "2026-07-10",
    category: "Vehicles",
    relatedCalculators: ["import-duty", "road-tax", "running-costs"],
    content: `
<h2>Why this matters</h2>
<p>Importing a used vehicle is one of the biggest financial decisions many Zambians make. The sticker price you see in Japan, the UAE, or South Africa is only one part of the cost — by the time a car reaches your driveway in Lusaka, you may have paid 40–80% on top of the purchase price in duties, fees, and logistics. Understanding every cost before you commit is essential.</p>

<h2>Step 1: Choose your vehicle wisely</h2>
<p>The duty you'll pay depends heavily on engine size, body type, and age. Older vehicles (over 5 years) attract lower specific duty than newer ones (2–5 years). SUVs are rated higher than sedans and hatchbacks at the same engine size. And hybrid/electric vehicles use a completely different calculation method — ad valorem (percentage-based) rather than the flat specific-duty schedule used for petrol and diesel cars.</p>

<h2>Step 2: Calculate your ZRA duty</h2>
<p>ZRA uses a <strong>specific duty schedule</strong> for most used passenger vehicles — a fixed Kwacha amount determined by engine capacity, body type, and whether the car is over or under 5 years old. For example, a 1,500cc sedan over 5 years old attracts a specific duty of around K29,491, plus a carbon emission surtax based on engine size. Use our <a href="/calculators/import-duty">Import Duty Calculator</a> to get your figure instantly.</p>

<h2>Step 3: Add the other costs</h2>
<p>ZRA duty is the biggest single charge, but it's far from the only one. Budget for:</p>
<ul>
  <li><strong>JEVIC inspection:</strong> approximately K3,110 for the roadworthiness certificate required before ZRA releases the vehicle</li>
  <li><strong>Clearing agent fees:</strong> typically K2,500–K4,000 depending on the agent and complexity</li>
  <li><strong>Port/border handling charges:</strong> around K7,000–K8,000</li>
  <li><strong>Transport from border to Lusaka:</strong> K3,000–K5,000 depending on origin point</li>
  <li><strong>RTSA fitness certificate:</strong> around K64</li>
  <li><strong>RTSA registration:</strong> around K750</li>
  <li><strong>First year's road tax</strong> (based on GVW): use our <a href="/calculators/road-tax">Road Tax Calculator</a></li>
  <li><strong>Third-party insurance:</strong> approximately K1,200 per year as a starting point</li>
</ul>

<h2>Step 4: Convert the purchase price</h2>
<p>If you're buying from Japan or the UAE in USD or JPY, use a realistic exchange rate from a forex bureau — not the best rate you've ever seen. Exchange rates move, and your clearing agent will use the rate prevailing at the time of customs assessment, not when you agreed to buy.</p>

<h2>Step 5: Find a reliable clearing agent</h2>
<p>Your clearing agent is the person who handles the customs paperwork and coordinates JEVIC, ZRA assessment, and release of your vehicle. A good one saves you time, avoids errors that can cause delays, and knows the latest ZRA procedures. Ask for referrals from people who've recently imported — experience matters more than the lowest quote.</p>

<h2>Total landed cost</h2>
<p>Our <a href="/calculators/import-duty">Import Duty Calculator</a> includes a "Total Landed Cost" mode that adds all of the above together in one figure, with every extra fee editable so you can plug in your own quotes. This gives you a realistic "what will I actually spend?" number before you commit.</p>
    `,
  },
  {
    slug: "napsa-contribution-what-you-need-to-know",
    title: "NAPSA Contributions: What Every Zambian Employee Needs to Know",
    excerpt: "How NAPSA pension contributions work, what the cap means, and what you'll actually receive when you retire.",
    date: "2026-07-10",
    category: "Salary & Employment",
    relatedCalculators: ["napsa", "pension", "gross-to-net"],
    content: `
<h2>What is NAPSA?</h2>
<p>The National Pension Scheme Authority (NAPSA) is Zambia's mandatory pension fund for formal-sector employees. Both you and your employer contribute 5% of your gross salary each month — a combined 10% going toward your retirement. It's not optional for eligible employees: it's deducted automatically from payroll.</p>

<h2>The contribution cap</h2>
<p>Contributions are capped at K1,861.80 per side per month. This means that even if your salary is K200,000, you only pay K1,861.80 to NAPSA each month — and your employer matches exactly that. The cap exists because the pension benefit calculation has a ceiling too.</p>

<h2>What does your employer actually pay?</h2>
<p>Many employees only think about the 5% coming off their own salary, but your employer is paying another 5% on top — money that never appears on your payslip but goes directly into your NAPSA account. When you change jobs, that benefit travels with you because NAPSA contributions belong to you as an individual, not to your employer.</p>

<h2>When can you access your NAPSA benefits?</h2>
<p>NAPSA benefits are primarily accessible on reaching retirement age (currently 55 for the optional age and 65 for compulsory retirement), but also under specific conditions: permanent invalidity, emigration from Zambia, and certain other circumstances defined in the NAPSA Act. It's not a savings account you can dip into whenever you want.</p>

<h2>What will you actually receive?</h2>
<p>The pension benefit NAPSA calculates on retirement is based on your full contribution history — every month you contributed, at every salary level you earned. NAPSA's formula for calculating the final benefit is not simple or publicly documented in a way that lets individuals accurately model it themselves. The best way to get a realistic projection is to contact NAPSA directly or check your NAPSA statement, which shows your accrued benefits.</p>

<h2>Does NAPSA reduce your PAYE?</h2>
<p>Different payroll systems handle this differently. Some calculate PAYE on full gross salary (the ZRA standard approach), others deduct NAPSA first. If you're unsure how your employer handles this, ask your HR or payroll department — it can make a meaningful difference to your take-home pay calculation.</p>
    `,
  },
  {
    slug: "vat-zambia-guide-for-small-businesses",
    title: "VAT in Zambia: A Practical Guide for Small Business Owners",
    excerpt: "When to register for VAT, how to calculate it, what's exempt, and how to stay on the right side of ZRA.",
    date: "2026-07-10",
    category: "Business",
    relatedCalculators: ["vat", "turnover-tax", "corporate-tax"],
    content: `
<h2>What is VAT and who pays it?</h2>
<p>Value Added Tax (VAT) is a 16% consumption tax charged on most goods and services sold in Zambia. When a registered business sells something, it adds 16% to the price and collects it on behalf of ZRA. The business doesn't keep that money — it remits it to ZRA, usually monthly. The end consumer ultimately bears the cost.</p>

<h2>Do you need to register for VAT?</h2>
<p>Registration is mandatory once your annual taxable turnover exceeds ZRA's threshold. Below that level, you can register voluntarily — and sometimes there are good reasons to do so (larger clients may prefer working with VAT-registered suppliers). If your turnover is below K5 million per year, you may instead qualify for the simpler turnover tax regime (5% of gross turnover) rather than standard VAT. Don't run both simultaneously — confirm your situation with ZRA.</p>

<h2>How VAT is calculated</h2>
<p>The calculation is simple. To add VAT to a price: multiply by 1.16. To find the VAT portion of a VAT-inclusive price: divide by 1.16 to get the net, then subtract. Our <a href="/calculators/vat">VAT Calculator</a> does both in one click.</p>

<h2>Input tax credits</h2>
<p>A key benefit of VAT registration is input tax credits. When you buy goods or services for your business from another VAT-registered supplier, the VAT you pay is called "input tax" — and you can offset it against the VAT you collected from your own sales. You only remit the difference to ZRA. This prevents the cascading of tax through the supply chain.</p>

<h2>What's exempt or zero-rated?</h2>
<p>Not everything is subject to the standard 16% rate. Most exports are zero-rated (charged at 0%, but the seller can still claim input credits). Some essential goods are exempt. The list changes with budget amendments — always check the current ZRA schedule if you're unsure about a specific product or service.</p>

<h2>Compliance: filing and penalties</h2>
<p>VAT returns must be filed monthly, even in months where you have nothing to remit. Late filing and late payment both attract penalties. ZRA's e-services portal (www.zra.org.zm) is the correct place to file — and staying on top of this monthly is far less painful than catching up after falling behind.</p>
    `,
  },
  {
    slug: "gross-to-net-salary-zambia-explained",
    title: "Gross vs Net Salary in Zambia: What's Actually the Difference?",
    excerpt: "Your gross salary and your take-home pay are very different numbers. Here's every deduction that sits between them.",
    date: "2026-07-10",
    category: "Salary & Employment",
    relatedCalculators: ["gross-to-net", "paye", "napsa", "nhima"],
    content: `
<h2>Gross salary vs net salary</h2>
<p>When an employer offers you a job in Zambia, the salary they quote is almost always the gross salary — what they'll pay before any deductions. What lands in your bank account each month is your net salary, which is gross minus everything that gets taken out along the way. Understanding the gap between the two is one of the most important things a salaried employee in Zambia can know.</p>

<h2>The three mandatory deductions</h2>
<p>Three statutory deductions come off every eligible employee's gross salary in Zambia:</p>
<ul>
  <li><strong>PAYE (Pay As You Earn):</strong> income tax, calculated progressively on your monthly gross using the 2026 ZRA bands. On a K15,000 salary this is approximately K3,176.</li>
  <li><strong>NAPSA:</strong> 5% of gross salary, capped at K1,861.80/month. On K15,000 this is K750.</li>
  <li><strong>NHIMA:</strong> 1% of basic salary for health insurance. On K15,000 basic, this is K150.</li>
</ul>
<p>On a K15,000 gross salary, total deductions are approximately K4,076 — leaving a net take-home of around K10,924.</p>

<h2>Other deductions that may apply</h2>
<p>Depending on your employer and your arrangements, there may be additional deductions: loan repayments (to your employer, SACCO, or a bank that has a payroll deduction arrangement), union dues, housing deductions, or voluntary pension contributions above the NAPSA minimum. These are specific to your contract and workplace — check your payslip for the full picture.</p>

<h2>Negotiating your salary</h2>
<p>This is where the gross/net distinction really matters. When you negotiate, you're negotiating gross — but you live on net. Use our <a href="/calculators/net-to-gross">Net to Gross Calculator</a> to work backwards: enter the take-home you need and it will tell you the gross salary to aim for in your negotiation.</p>

<h2>Employer costs go further still</h2>
<p>Your employer also pays an additional NAPSA contribution (another 5%) and NHIMA contribution (1%) on top of your gross salary, plus a 0.5% Skills Development Levy on their total payroll. These don't affect your pay, but they're why the "true cost" of hiring someone is higher than the salary you see on your offer letter. See our <a href="/calculators/employer-cost">Employer Cost Calculator</a>.</p>
    `,
  },
  {
    slug: "zambia-loan-interest-rates-what-to-know",
    title: "Loan Interest Rates in Zambia: What to Expect and How to Compare",
    excerpt: "How to compare loan offers from Zambian banks, SACCOs and microfinance institutions — and calculate your real monthly cost.",
    date: "2026-07-10",
    category: "Personal Finance",
    relatedCalculators: ["loan", "loan-affordability", "mortgage"],
    content: `
<h2>The interest rate landscape in Zambia</h2>
<p>Interest rates on personal loans in Zambia vary significantly depending on who you borrow from, your credit profile, and the type of loan. Commercial banks typically charge between 25–35% per year on personal loans. SACCOs (savings and credit cooperatives) can be cheaper, often 12–24%, but may require membership and a savings record. Microfinance institutions can be higher still. There is no single "correct" rate — shop around.</p>

<h2>Reducing balance vs flat rate: this matters more than you think</h2>
<p>When comparing loan offers, the interest rate alone isn't enough — you need to know how it's calculated. Most formal bank loans use <strong>reducing balance</strong> (the interest each month is calculated on the outstanding principal, which shrinks as you repay). Some informal lenders or hire purchase arrangements use a <strong>flat rate</strong> on the original principal, which means you pay interest on money you've already paid back — effectively much more expensive than it looks. Always ask which method your lender uses.</p>

<h2>How to calculate your monthly instalment</h2>
<p>For a reducing balance loan, the formula uses your principal (P), monthly interest rate (r = annual rate ÷ 12), and number of months (n). Our <a href="/calculators/loan">Loan Repayment Calculator</a> does the maths instantly — enter any amount, rate, and term to see your monthly instalment and total interest cost.</p>

<h2>The real cost of borrowing</h2>
<p>It's easy to focus only on the monthly repayment, but the total interest over the life of a loan can be eye-opening. A K50,000 loan at 28% over 36 months means paying roughly K25,000 in interest on top of the K50,000 — a total repayment of K75,000. At 24% it drops to about K19,000 in interest. A few percentage points matter a lot over years.</p>

<h2>Can you afford it?</h2>
<p>A common guideline used by Zambian lenders is that your total monthly debt repayments (all loans combined) shouldn't exceed 40% of your income. Our <a href="/calculators/loan-affordability">Loan Affordability Calculator</a> uses this approach to estimate the maximum loan size you can responsibly take on, given your income and existing debt.</p>
    `,
  },
  {
    slug: "zesco-electricity-bill-how-to-read-and-reduce",
    title: "Your ZESCO Bill Explained — and How to Reduce It",
    excerpt: "How Zambia's electricity block tariff system works, what your bill actually means, and practical ways to cut your monthly spend.",
    date: "2026-07-10",
    category: "Personal Finance",
    relatedCalculators: ["zesco-bill"],
    content: `
<h2>How ZESCO charges for electricity</h2>
<p>ZESCO uses a <strong>tiered block tariff</strong> for domestic customers — the price per unit (kWh) increases as you consume more. This structure is designed to keep electricity affordable for low-usage households while charging heavier users progressively more.</p>
<p>The current ERB-approved residential rates are approximately:</p>
<ul>
  <li><strong>First 100 units:</strong> K0.35/kWh (lifeline rate)</li>
  <li><strong>101 – 200 units:</strong> K1.00/kWh</li>
  <li><strong>201 – 400 units:</strong> K2.42/kWh</li>
  <li><strong>Above 400 units:</strong> K3.45/kWh</li>
</ul>

<h2>Why your average rate is higher than the lifeline rate</h2>
<p>Many people are surprised that their bill works out to more than K0.35 per unit. This is because only the first 100 units cost K0.35 — every unit after that costs more, so your average rate across all units consumed is a blend of all the bands. Estimate your bill with our <a href="/calculators/zesco-bill">ZESCO Bill Estimator</a>.</p>

<h2>How to reduce your electricity bill</h2>
<p>The block tariff structure creates a very clear incentive: the heaviest users pay the most. If you can keep your monthly usage under 200 units, you stay in the two cheapest bands. Some practical tips:</p>
<ul>
  <li><strong>Switch off geysers when not in use</strong> — electric water heating is typically the single biggest household electricity cost in Zambia.</li>
  <li><strong>Replace incandescent bulbs with LEDs</strong> — they use 75–80% less electricity for the same light output.</li>
  <li><strong>Use appliances during off-peak hours</strong> where possible — flat-rate tariffs don't distinguish time-of-use, but habits around ironing and cooking can still affect how much you buy at a time.</li>
  <li><strong>Fix leaking taps on electric water systems</strong> — running cold water causes a geyser to reheat more often than necessary.</li>
</ul>

<h2>Prepaid vs postpaid</h2>
<p>Most domestic ZESCO customers are on prepaid meters, which makes it easy to see exactly what you're spending in real time — each token purchase shows your balance. Postpaid customers receive a monthly bill. Both use the same tariff bands; the difference is only in how you pay.</p>
    `,
  },
  {
    slug: "turnover-tax-vs-vat-which-applies-to-you",
    title: "Turnover Tax vs VAT: Which One Applies to Your Zambian Business?",
    excerpt: "The two main tax regimes for Zambian businesses explained — and how to figure out which one you're on, or should be on.",
    date: "2026-07-10",
    category: "Tax & ZRA",
    relatedCalculators: ["turnover-tax", "vat", "corporate-tax"],
    content: `
<h2>Zambia's two main business tax regimes</h2>
<p>Small business owners in Zambia often get confused about whether they should be paying VAT or turnover tax — or both. The short answer is that these are generally mutually exclusive regimes, and which one applies to you depends primarily on your annual turnover.</p>

<h2>Turnover tax: the simplified regime</h2>
<p>Turnover tax is a simplified tax for small businesses with annual turnover not exceeding K5 million. Instead of calculating profit and paying corporate income tax on it, you simply pay 5% of your gross turnover each month. No complex accounting for expenses, no annual corporate tax return for most purposes — just 5% on what comes in.</p>
<p>It's not for every type of income: turnover tax doesn't apply to interest, dividends, royalties, consultancy income, or mining income. If a significant portion of your business income falls into those categories, get advice from a tax professional.</p>

<h2>VAT: the standard regime</h2>
<p>VAT is charged at 16% on the sale of most goods and services. If you're VAT-registered, you collect 16% from your customers, claim back the VAT you paid on purchases (input tax), and remit the difference to ZRA monthly. It requires more bookkeeping but can actually reduce your tax burden if you have significant input costs.</p>

<h2>Which applies to you?</h2>
<ul>
  <li><strong>Under K5 million/year:</strong> You generally qualify for turnover tax. You may also be able to register for VAT voluntarily if it suits your business model.</li>
  <li><strong>Above K5 million/year:</strong> You move out of turnover tax eligibility and into the standard VAT and corporate income tax regime.</li>
</ul>
<p>The exact thresholds and rules can change with budget amendments — confirm with ZRA before making decisions, especially if you're near the threshold.</p>

<h2>Can you be on both?</h2>
<p>No. Turnover tax and VAT are separate regimes, and you can't run both simultaneously for the same business income. If you register for VAT, you're no longer on the turnover tax regime for those activities.</p>
    `,
  },
  {
    slug: "understanding-zambia-road-tax-rtsa",
    title: "Road Tax in Zambia: How Much You Owe and How to Pay",
    excerpt: "How RTSA calculates road tax by vehicle weight, when it's due, and what happens if you don't pay.",
    date: "2026-07-10",
    category: "Vehicles",
    relatedCalculators: ["road-tax", "running-costs", "import-duty"],
    content: `
<h2>What is road tax?</h2>
<p>Road tax is an annual fee payable to the Road Transport and Safety Agency (RTSA) for the right to use your vehicle on public roads in Zambia. It is separate from your insurance, your RTSA fitness certificate, and your registration — all of which are also required. Road tax is the fee specifically for road access and is paid annually (or in quarterly instalments).</p>

<h2>How is road tax calculated?</h2>
<p>Road tax in Zambia is calculated using a fee-unit system based on your vehicle's <strong>Gross Vehicle Weight (GVW)</strong> — the maximum weight the vehicle is designed to carry, including passengers, cargo, and fuel. This is listed on your registration document (blue book) and on a plate or sticker near the driver's door.</p>
<p>Motorcycles have their own flat rate rather than a weight-based calculation.</p>
<p>Use our <a href="/calculators/road-tax">Road Tax Calculator</a> to find your exact annual amount based on your GVW.</p>

<h2>Gross Vehicle Weight vs kerb weight</h2>
<p>A common mistake: GVW is not the empty weight of your car. It's the maximum design weight. A vehicle that weighs 1,100 kg empty might have a GVW of 1,600 kg once you add the maximum allowed passengers and luggage. Make sure you're using the GVW, not the unladen weight, for the correct road tax band.</p>

<h2>When is road tax due?</h2>
<p>Road tax runs on a calendar year and can be paid annually (January) or quarterly. The fee is the same either way — RTSA doesn't add a surcharge for quarterly payment. Pay at any RTSA office or authorised payment point.</p>

<h2>What happens if you don't pay?</h2>
<p>Driving without valid road tax is an offence under Zambian traffic law. Traffic police can impound your vehicle, and you'll face fines on top of the overdue road tax. It's one of the easier compliance requirements to stay on top of — set a reminder in January.</p>
    `,
  },
  {
    slug: "how-to-save-money-on-importing-a-car-zambia",
    title: "5 Ways to Save Money When Importing a Car into Zambia",
    excerpt: "Practical tips to reduce your total landed cost without cutting corners on compliance.",
    date: "2026-07-10",
    category: "Vehicles",
    relatedCalculators: ["import-duty", "road-tax", "running-costs"],
    content: `
<h2>1. Choose engine size carefully</h2>
<p>The biggest single variable in ZRA specific duty is engine capacity. A 1,400cc car and a 1,600cc car might look identical and perform similarly, but the 1,600cc sits in a higher duty band. If you don't genuinely need the extra capacity, choosing a vehicle in a lower cc band can save you thousands of kwacha in duty. Check the exact duty for your shortlisted vehicles before you buy using our <a href="/calculators/import-duty">Import Duty Calculator</a>.</p>

<h2>2. Understand the age cutoffs</h2>
<p>ZRA's specific duty schedule has two age bands: 2–5 years old, and over 5 years old. Older vehicles consistently attract lower duty. A vehicle that's just over 5 years old can be significantly cheaper to import than one that's 4 years and 11 months old. If you're flexible on the exact model year, knowing these cutoffs can make a real difference.</p>

<h2>3. Get multiple clearing agent quotes</h2>
<p>Clearing agent fees are not government-regulated — they're set by individual agents and vary significantly. Get at least three quotes before committing. Ask specifically what's included: some quotes cover agent fees only, while others bundle port handling, JEVIC coordination, and transport. Compare like for like.</p>

<h2>4. Time the exchange rate</h2>
<p>If you're buying from Japan, the UAE, or South Africa in a foreign currency, the exchange rate at the time of your ZRA customs assessment affects your duty bill indirectly (the duty itself is a fixed Kwacha amount, but the purchase price you declare needs to convert). More importantly, the rate you get when transferring your purchase price directly affects how much you spend. A few percentage points on a $6,000 purchase adds up.</p>

<h2>5. Budget realistically for after-import costs</h2>
<p>Many people focus entirely on the duty and forget what comes after. RTSA fitness, registration, road tax, third-party insurance — these all need to be paid before the vehicle is legally on the road. Use our <a href="/calculators/import-duty">Total Landed Cost mode</a> to see the full picture, including all these fees in one number, before you commit to the purchase.</p>
    `,
  },
  {
    slug: "zambia-treasury-bills-beginners-guide",
    title: "Treasury Bills in Zambia: A Beginner's Guide to Government Investing",
    excerpt: "What Treasury Bills are, how to buy them, what returns to expect, and how withholding tax affects your net gain.",
    date: "2026-07-10",
    category: "Investments",
    relatedCalculators: ["treasury-bills", "roi", "inflation"],
    content: `
<h2>What is a Treasury Bill?</h2>
<p>A Treasury Bill (T-bill) is a short-term debt instrument issued by the Zambian government through the Bank of Zambia (BoZ). When you buy a T-bill, you're lending money to the government for a fixed period (91, 182, 273, or 364 days). In return, you receive your money back at the full face value at maturity — and the difference between what you paid and the face value is your return (interest).</p>

<h2>How the pricing works</h2>
<p>T-bills are sold at a discount to face value. If the face value is K10,000 and the annualised yield for the 91-day bill is 12%, you'd pay approximately K9,707 today and receive K10,000 in 91 days. The K293 difference is your gross return. Our <a href="/calculators/treasury-bills">Treasury Bills Calculator</a> shows this breakdown clearly.</p>

<h2>Withholding tax</h2>
<p>The interest (discount) on T-bills is subject to 15% withholding tax for resident individual investors. This is deducted before you receive your proceeds. Using the example above: the K293 gross return becomes K249 after 15% withholding tax. Always calculate net returns, not gross, when comparing T-bills to other investments.</p>

<h2>Current yields</h2>
<p>T-bill yields are set at auction by the Bank of Zambia, roughly every two weeks. Yields fluctuate with monetary policy and market conditions. Check the BoZ website for the latest auction results before calculating your return — there is no single fixed rate, and our calculator is designed to take whatever the current yield is as an input for exactly this reason.</p>

<h2>How to buy T-bills</h2>
<p>T-bills are sold through Primary Dealer banks and licensed brokers. The minimum non-competitive bid is typically K1,000. You submit your bid through a bank or broker, who submits it to the BoZ auction on your behalf. Settlement is usually within a day of the auction.</p>

<h2>T-bills vs savings accounts</h2>
<p>T-bills often offer better returns than standard bank savings accounts, especially when yields are high. They're also backed by the Zambian government (sovereign risk rather than bank risk). The main downside is that your money is locked in for the full term — there's no easy way to access it before maturity without selling in a secondary market, which is thin in Zambia.</p>
    `,
  },
  {
    slug: "employment-code-act-zambia-your-rights",
    title: "The Employment Code Act: Your Key Rights as a Zambian Employee",
    excerpt: "What the Employment Code Act 2019 actually says about overtime, leave, gratuity, and notice periods — in plain English.",
    date: "2026-07-10",
    category: "Salary & Employment",
    relatedCalculators: ["overtime", "leave-pay", "terminal-benefits"],
    content: `
<h2>Why this matters</h2>
<p>The Employment Code Act No. 3 of 2019 is the primary legislation governing employment relationships in Zambia. It replaced several older pieces of legislation and significantly updated employee protections. Most employees have never read it — but knowing what it says about your key entitlements is valuable, both for understanding your payslip and for knowing your rights if something goes wrong.</p>

<h2>Overtime</h2>
<p>Under Section 75(3), work beyond the standard 48-hour week must be compensated at <strong>1.5 times</strong> your normal hourly rate. Work on a rest day or public holiday is compensated at <strong>2 times</strong> your normal hourly rate. Your hourly rate for this purpose is your monthly salary divided by 208 hours. Some senior management categories can be exempted under Exemption Regulations — check your contract. Use our <a href="/calculators/overtime">Overtime Calculator</a> to find your amount.</p>

<h2>Annual leave</h2>
<p>You're entitled to 2 days of paid annual leave for every month of continuous service — 24 days per year, after completing 12 months with one employer. You can carry over a maximum of 6 days to the following year. Unused leave beyond 6 days must be paid out. Leave pay is calculated using the Fifth Schedule formula: (full monthly pay × leave days) ÷ 26. Our <a href="/calculators/leave-pay">Leave Pay Calculator</a> handles this.</p>

<h2>Gratuity (fixed-term contracts)</h2>
<p>If you're employed on a fixed-term contract exceeding 12 months, you're entitled to a gratuity of at least 25% of your basic pay earned during the contract, payable at the end of the contract. This applies to the actual months worked — if a contract is terminated early, gratuity is typically calculated on months actually completed. The tax treatment of this gratuity is a genuinely contested question — get specific advice from a payroll professional before relying on a particular take-home figure.</p>

<h2>Notice periods</h2>
<p>Both employee and employer must give notice to end an employment contract. The minimum notice period varies by pay frequency: for monthly-paid employees, it's typically one month. Contracts can specify longer notice periods. If an employer terminates without adequate notice, they must pay salary in lieu of notice.</p>

<h2>Protection against unlawful dismissal</h2>
<p>The Act requires that dismissal be based on valid grounds (misconduct, poor performance, redundancy) and that a fair procedure is followed. If you believe you've been unfairly dismissed, the right recourse is to take a complaint to the Industrial Relations Court within the prescribed time limit.</p>
    `,
  },
  {
    slug: "zambia-mortgage-guide-2026",
    title: "Getting a Mortgage in Zambia: What You Need to Know",
    excerpt: "How home loans work at Zambian banks, what interest rates to expect, what the banks check, and how to calculate your repayments.",
    date: "2026-07-10",
    category: "Personal Finance",
    relatedCalculators: ["mortgage", "loan-affordability", "loan"],
    content: `
<h2>The mortgage market in Zambia</h2>
<p>The home loan market in Zambia is still developing compared to some other African countries, but several commercial banks — including Stanbic, FNB, Absa, First National Bank and others — offer mortgage products. Interest rates are significantly higher than in South Africa or the UK because of Zambia's base lending environment, and deposit requirements can be substantial.</p>

<h2>Typical mortgage terms in Zambia</h2>
<ul>
  <li><strong>Interest rates:</strong> typically 18–25% per year, variable based on the Bank of Zambia monetary policy rate</li>
  <li><strong>Loan term:</strong> usually 10–25 years</li>
  <li><strong>Down payment (deposit):</strong> most banks require 10–30% of the property value upfront</li>
  <li><strong>Maximum loan amount:</strong> typically capped at a percentage of your gross salary (banks often limit total debt repayments to 40% of income)</li>
</ul>

<h2>Calculating your monthly repayment</h2>
<p>Use our <a href="/calculators/mortgage">Mortgage Calculator</a> to enter your purchase price, down payment, interest rate, and term. For example: buying a K800,000 property with a 20% deposit (K160,000) at 22% interest over 20 years gives a monthly repayment of approximately K11,700. Over 20 years, you'd repay about K2.8 million on a K640,000 loan — the total interest cost is significant at these rates.</p>

<h2>What banks check before approving a mortgage</h2>
<p>Zambian banks typically assess: your income and employment status (stable formal employment is preferred), your existing debt obligations, your credit history, the property's value (via an independent valuer they commission), and your deposit. Self-employed applicants often face more scrutiny and may need to show at least 2–3 years of financial records.</p>

<h2>Other costs to budget for</h2>
<p>Beyond the purchase price and deposit: legal fees (approximately 1.5–3% of property value), stamp duty, property valuation fee, mortgage arrangement fee (varies by bank), and ZESCO/utility connection or transfer fees. These add up — budget at least 5–8% of the property value in transaction costs above your deposit.</p>
    `,
  },
  {
    slug: "starting-business-zambia-tax-obligations",
    title: "Starting a Business in Zambia: Your Tax Obligations from Day One",
    excerpt: "TPIN, turnover tax, VAT registration, PAYE for employees — what you need to register for and when, as a new business in Zambia.",
    date: "2026-07-10",
    category: "Business",
    relatedCalculators: ["turnover-tax", "vat", "corporate-tax", "employer-cost"],
    content: `
<h2>Step 1: Get a TPIN</h2>
<p>Before anything else, every business in Zambia needs a Tax Payer Identification Number (TPIN) from ZRA. This is free and can be done online through ZRA's e-services portal or in person at any ZRA office. You'll need your business registration documents. A TPIN is required to file any tax return, open a business bank account at most banks, and bid for most government contracts.</p>

<h2>Step 2: Understand your turnover tax or VAT position</h2>
<p>If your annual turnover is expected to be under K5 million, you'll likely be paying turnover tax (5% of gross turnover) rather than standard VAT. Turnover tax is simpler — you don't need to track input VAT or file detailed monthly returns in the same way. Register for turnover tax at ZRA once you have your TPIN. See our <a href="/calculators/turnover-tax">Turnover Tax Calculator</a>.</p>
<p>If you expect to exceed K5 million, or if you want to voluntarily register for VAT earlier (for example, because most of your customers are VAT-registered businesses who need tax invoices), you register for VAT instead.</p>

<h2>Step 3: PAYE if you hire employees</h2>
<p>The moment you hire your first employee and pay them above the K5,100/month threshold, you become responsible for deducting and remitting PAYE to ZRA. You also become responsible for the employer-side NAPSA contribution (5%), NHIMA contribution (1%), and Skills Development Levy (0.5% of total payroll). These all have monthly filing requirements. Our <a href="/calculators/employer-cost">Employer Cost Calculator</a> shows the true monthly cost per employee.</p>

<h2>Step 4: NAPSA registration for employees</h2>
<p>Register your business with NAPSA and enrol each employee. NAPSA has its own registration process separate from ZRA. Monthly contributions (employer + employee) are paid to NAPSA on a set schedule.</p>

<h2>Common mistakes new businesses make</h2>
<ul>
  <li>Treating turnover tax and VAT as the same thing (they're not)</li>
  <li>Starting to pay employees without registering for PAYE or NAPSA</li>
  <li>Assuming that being informal means tax doesn't apply — turnover tax applies to many informal businesses too</li>
  <li>Missing monthly filing deadlines, which triggers penalties even if the amount owed is small</li>
</ul>
    `,
  },
  {
    slug: "nhima-health-insurance-zambia-explained",
    title: "NHIMA Explained: Zambia's National Health Insurance",
    excerpt: "What the National Health Insurance Management Authority scheme covers, what you pay, and what benefits you get.",
    date: "2026-07-10",
    category: "Salary & Employment",
    relatedCalculators: ["nhima", "gross-to-net", "employer-cost"],
    content: `
<h2>What is NHIMA?</h2>
<p>NHIMA — the National Health Insurance Management Authority — administers Zambia's national health insurance scheme, established under the National Health Insurance Act. Like NAPSA, it's a mandatory scheme for formal-sector employees: 1% is deducted from your basic salary each month, and your employer contributes a matching 1%, for a combined 2% going into the scheme.</p>

<h2>How much does it cost?</h2>
<p>NHIMA is calculated as 1% of your basic salary — not your full gross pay. If your basic salary is K10,000 and you receive K3,000 in allowances, NHIMA is K100 (1% of K10,000), not K130 (1% of K13,000). Your employer also pays K100. Use our <a href="/calculators/nhima">NHIMA Calculator</a> to check your exact deduction. There is no upper cap on NHIMA contributions, unlike NAPSA.</p>

<h2>What does NHIMA actually cover?</h2>
<p>NHIMA accredits health facilities across Zambia — government hospitals, mission hospitals, and private clinics — and registered members can access services at these facilities using their NHIMA membership. The scope of covered services and the network of accredited facilities has been expanding since the scheme launched. Check the current NHIMA website or your nearest accredited facility for the most current list of covered services, as this has been evolving.</p>

<h2>How does it interact with private medical insurance?</h2>
<p>Many formal-sector employers provide private medical insurance as a benefit on top of NHIMA contributions. These are separate — NHIMA is the statutory floor, and private insurance sits above it. If your employer provides both, you benefit from both systems, though the NHIMA contribution still comes off your payslip regardless.</p>

<h2>Does NHIMA reduce your PAYE?</h2>
<p>No — unlike NAPSA, NHIMA contributions do not reduce your taxable income for PAYE purposes. PAYE is calculated on your full gross salary regardless of NHIMA.</p>
    `,
  },
  {
    slug: "building-emergency-fund-zambia",
    title: "How to Build an Emergency Fund in Zambia",
    excerpt: "Why an emergency fund matters, how much you actually need, and the best places to keep it in the Zambian financial system.",
    date: "2026-07-10",
    category: "Personal Finance",
    relatedCalculators: ["savings-goal", "budget-planner", "compound-interest"],
    content: `
<h2>Why an emergency fund is non-negotiable</h2>
<p>An emergency fund is money set aside specifically for unexpected expenses: a car breakdown, a medical bill, job loss, a family emergency. Without it, unexpected costs force you into debt — usually expensive debt from a personal loan or mobile money borrowing. In Zambia's economy, where income can be variable and formal safety nets are limited, an emergency fund is even more important than it might be elsewhere.</p>

<h2>How much should you have?</h2>
<p>The standard advice — 3 to 6 months of living expenses — is a good starting point. For a household spending K8,000 per month on essentials (rent, utilities, food, transport), that means K24,000 to K48,000 in an emergency fund. If your income is variable (freelance, business income), aim for the higher end. If you have very stable employment and low dependents, the lower end may be adequate.</p>

<h2>Building it gradually</h2>
<p>Most people can't save 3 months of expenses at once. The key is consistency: even K500 per month gets you to K6,000 in a year. Use our <a href="/calculators/savings-goal">Savings Goal Calculator</a> to figure out exactly how much to set aside monthly to reach your target in your chosen timeframe.</p>

<h2>Where to keep it</h2>
<p>Your emergency fund needs to be: accessible quickly (not locked in a fixed deposit), separate from your day-to-day account (so you don't accidentally spend it), and earning at least something while it sits there. A savings account at a reputable Zambian bank that earns interest but allows immediate withdrawal is usually the right choice. Avoid mobile money wallets for the full amount — the cap limits and transfer fees make them better for smaller, quicker transactions.</p>

<h2>What it's not for</h2>
<p>An emergency fund is not for planned purchases, holidays, or wants that you've had time to save for separately. Using it for non-emergencies defeats the purpose — the next time a real emergency hits, you won't have the buffer. Keep it earmarked specifically for genuine surprises.</p>
    `,
  },
  {
    slug: "zambia-rental-property-investment-guide",
    title: "Is Rental Property a Good Investment in Zambia? A Numbers Guide",
    excerpt: "How to calculate gross and net rental yield on a Zambian property — and what factors actually determine if it makes financial sense.",
    date: "2026-07-10",
    category: "Investments",
    relatedCalculators: ["rental-yield", "mortgage", "roi"],
    content: `
<h2>Why rental property is popular in Zambia</h2>
<p>Property has historically been seen as a reliable store of value in Zambia, particularly in urban centres like Lusaka and the Copperbelt. Demand for quality rental accommodation remains strong, especially for middle-income housing. But popularity isn't the same as profitability — it's worth doing the numbers before committing.</p>

<h2>Gross yield vs net yield</h2>
<p>Gross rental yield is simple: (annual rent ÷ property value) × 100. A K900,000 property renting for K7,000/month has a gross yield of (K84,000 ÷ K900,000) × 100 = 9.3%. Our <a href="/calculators/rental-yield">Rental Yield Calculator</a> calculates this instantly.</p>
<p>Net yield is what you actually keep: subtract annual costs (maintenance, agent fees, rates, insurance, vacancy periods) from the annual rent before dividing. On a K900,000 property with K12,000 in annual costs, net yield drops to (K72,000 ÷ K900,000) × 100 = 8%. The difference matters.</p>

<h2>What affects yield in Zambia</h2>
<ul>
  <li><strong>Location:</strong> Properties in low-density Lusaka suburbs command higher rents relative to property values than high-density areas in some cases, but not always.</li>
  <li><strong>Property type:</strong> Serviced apartments and furnished rentals often achieve higher yields but require more active management.</li>
  <li><strong>USD vs ZMW rents:</strong> Some residential properties — especially those targeting expatriates — are rented in USD, which provides a hedge against kwacha depreciation. This is a meaningful factor for preserving the real value of your return.</li>
</ul>

<h2>Don't forget the financing cost</h2>
<p>If you take a mortgage to buy the property, the mortgage repayment comes out of the rent. On a K640,000 loan at 22% over 20 years, monthly repayments are approximately K11,700. If your rent is K7,000, you're cash-flow negative every month even before maintenance costs. The investment only makes sense if you're confident in significant capital appreciation over time — or if you're buying with a small or no mortgage.</p>

<h2>Tax on rental income</h2>
<p>Rental income is taxable in Zambia. It's included in your income and subject to appropriate tax. Consult a tax professional for the correct treatment of your specific situation, especially if you have multiple properties or mixed personal/rental use.</p>
    `,
  },
  {
    slug: "zambia-bonus-tax-how-it-works",
    title: "How Bonuses Are Taxed in Zambia",
    excerpt: "Zambia doesn't have a separate 'bonus tax' — but bonuses do affect your monthly PAYE in a way that surprises most people.",
    date: "2026-07-10",
    category: "Tax & ZRA",
    relatedCalculators: ["bonus-tax", "paye", "gross-to-net"],
    content: `
<h2>There's no separate bonus tax</h2>
<p>A common misconception: many Zambian employees believe there's a special higher tax rate on bonuses or commissions. There isn't. Zambia doesn't have a separate "bonus tax." Bonuses are simply added to your regular salary for the month they're paid, and the combined amount is taxed through the same PAYE progressive bands you're always on.</p>

<h2>But the effect can feel like a higher rate</h2>
<p>Here's why people think bonuses are taxed more heavily: if your normal K12,000 salary is taxed at an average rate of, say, 16%, and then a K8,000 bonus is added on top in one month (making your total K20,000 for that month), the K8,000 bonus itself may be pushed entirely into the 37% top band. On the bonus alone, you might pay 37% — which feels much higher than your normal rate, even though it's just the progressive bands working as designed.</p>

<h2>A real example</h2>
<p>Normal monthly salary: K12,000. PAYE on K12,000 alone: approximately K2,400. Bonus month: K12,000 + K8,000 bonus = K20,000 total. PAYE on K20,000: approximately K5,576. The extra PAYE from the bonus alone is K3,176 — an effective rate of about 40% on the bonus (at the top marginal rate, which is 37%, plus the fact that you've also been pushed into higher bands for the portion of normal salary that would otherwise have been in lower bands).</p>
<p>Use our <a href="/calculators/bonus-tax">Bonus Tax Calculator</a> to see your specific numbers.</p>

<h2>Can bonuses be structured to reduce tax?</h2>
<p>Some employers spread performance payments over multiple months rather than paying large lump sums, which can reduce the "bunching" effect. However, structuring compensation specifically to minimise PAYE can have its own compliance implications — this is a conversation for your employer's payroll team and potentially a tax advisor, not something to arrange informally.</p>
    `,
  },
  {
    slug: "poultry-farming-zambia-financial-basics",
    title: "The Financial Basics of Starting a Poultry Farm in Zambia",
    excerpt: "A practical look at the real costs, revenue potential and profitability of a small poultry operation in Zambia.",
    date: "2026-07-10",
    category: "Business",
    relatedCalculators: ["poultry-profit", "break-even", "profit-margin"],
    content: `
<h2>Why poultry?</h2>
<p>Broiler chicken farming is one of the most commonly started agribusinesses in Zambia, and for good reasons: the production cycle is short (approximately 6 weeks from day-old chick to market), demand is consistent, and the capital requirements to start small are relatively accessible. But "accessible" doesn't mean easy — margins can be thin and costs surprisingly easy to underestimate.</p>

<h2>The main cost categories</h2>
<ul>
  <li><strong>Day-old chicks:</strong> typically K18–K25 per chick from hatcheries</li>
  <li><strong>Feed:</strong> the single biggest ongoing cost — a broiler will consume approximately 4–4.5 kg of feed over its 6-week life. At current feed prices, budget around K60–K80 per bird just for feed.</li>
  <li><strong>Vaccines and medications:</strong> approximately K5–K10 per bird for a basic vaccination programme</li>
  <li><strong>Housing:</strong> a one-time capital cost, but relevant to your per-bird cost when amortised over time</li>
  <li><strong>Electricity or charcoal:</strong> for brooding (keeping chicks warm in the first 2–3 weeks), ZESCO supply is needed or alternative heating</li>
  <li><strong>Labour:</strong> daily feeding and monitoring</li>
</ul>

<h2>Revenue side</h2>
<p>Live weight at 6 weeks is typically 2–2.5 kg per bird. Market prices for live broilers in Zambia fluctuate but are approximately K55–K80 per kg depending on the season and market. Schools of thought differ on whether to sell live (simpler, less capital) or slaughter and sell dressed (higher price per kg but more complexity and capital for cold chain).</p>

<h2>The break-even calculation</h2>
<p>The profitability of a poultry batch depends heavily on your feed conversion ratio (FCR) — how efficiently your birds convert feed to body weight. Industry target FCR for broilers is around 1.8–2.0 (2 kg of feed to gain 1 kg of body weight). At a poor FCR of 2.5, your feed costs jump significantly. Use our <a href="/calculators/poultry-profit">Poultry Profit Calculator</a> to model your specific batch before you buy chicks.</p>

<h2>Common first-timer mistakes</h2>
<p>Underestimating feed costs is the most common one — people calculate based on what they think a chick eats, not what it actually eats. Mortality rates (typically 3–7% in a well-managed flock, higher for beginners) need to be factored in. And selling price volatility around Zambian holidays (when demand spikes and everyone flocks to the market at the same time) can work for or against you depending on your timing.</p>
    `,
  },
  {
    slug: "compound-interest-why-it-matters-zambia",
    title: "Why Compound Interest Should Change How You Save in Zambia",
    excerpt: "The concept that Albert Einstein supposedly called the eighth wonder of the world — explained with Zambian numbers.",
    date: "2026-07-10",
    category: "Investments",
    relatedCalculators: ["compound-interest", "savings-goal", "fixed-deposit"],
    content: `
<h2>Simple interest vs compound interest</h2>
<p>Simple interest pays you a return on your original deposit only. Compound interest pays you a return on your deposit <em>and</em> on the interest you've already earned. The difference sounds small in year one. Over many years, it becomes enormous.</p>

<h2>A Zambian example</h2>
<p>You invest K20,000 at 10% annual interest for 10 years.</p>
<ul>
  <li><strong>Simple interest:</strong> K2,000 per year × 10 years = K20,000 total interest. You end with K40,000.</li>
  <li><strong>Compound interest (annual):</strong> Your K20,000 grows to K51,875 after 10 years — K31,875 in total interest, or 59% more than simple interest would have given you.</li>
</ul>
<p>The longer the timeframe, the more dramatic the gap. Use our <a href="/calculators/compound-interest">Compound Interest Calculator</a> to model your own numbers.</p>

<h2>Compounding frequency matters</h2>
<p>Interest that compounds monthly grows faster than the same rate compounding annually, because each month's interest immediately starts earning interest itself. At 10% annual rate: annually you end with K51,875 after 10 years; monthly compounding gives you K54,239. The difference grows with time and rate.</p>

<h2>Why inflation erodes this</h2>
<p>The same principle works against you when inflation is compounding. If inflation is running at 13% and your savings earn 8%, you're losing purchasing power at roughly 5% per year — compounding in the wrong direction. Zambia's inflation rate has historically been meaningful, which is why it's important to find investments that outpace inflation, not just nominal returns that look impressive.</p>

<h2>Where to find compound interest in Zambia</h2>
<p>Fixed deposits at reputable Zambian banks compound interest at maturity or monthly, depending on the product. Some savings accounts compound monthly. Treasury bills don't compound (they're single-term discount instruments), but you can reinvest the proceeds in a new bill to create a compounding-like effect. Ask your bank specifically how they compound interest before choosing a savings product.</p>
    `,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getBlogPostsByCategory(category: BlogPost["category"]): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.category === category);
}

export const BLOG_CATEGORIES: BlogPost["category"][] = [
  "Tax & ZRA",
  "Salary & Employment",
  "Business",
  "Vehicles",
  "Personal Finance",
  "Investments",
];
