// NEVER CHANGE THE ORDER OF THE CODE. ALWAYS REFER BACK TO THE MAIN.
//ALWAYS READ THE COMMENTS

/* ============================================================
   STEP 1 — ONE-TIME EMAILJS SETUP (free, ~5 minutes)
   1. Go to https://www.emailjs.com and create a free account.
   2. Add an Email Service (e.g. connect your Gmail) → copy its
      "Service ID" into EMAILJS_SERVICE_ID below.
   3. Create an Email Template. In the template body, use these
      variable names so they fill in correctly:
         {{to_email}}   → recipient's address
         {{job_count}}  → number of jobs selected
         {{week_of}}    → the week label
         {{job_list}}   → the formatted list of selected jobs
      Copy its "Template ID" into EMAILJS_TEMPLATE_ID below.
   4. Go to Account → General → copy your "Public Key" into
      EMAILJS_PUBLIC_KEY below.
   That's it — the form below will start sending real emails.
   ============================================================ */

const EMAILJS_SERVICE_ID  = "service_bazfoet";
const EMAILJS_TEMPLATE_ID = "template_h0w8en2";
const EMAILJS_PUBLIC_KEY  = "PNgKNRpf6HZ_tgm42";

if (window.emailjs && EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY") {
  // initialize EmailJS with the public key (string form is compatible
  // with the CDN/browser bundle)
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

/* ============================================================
   STEP 2 — WEEKLY UPDATE ZONE
   Edit WEEK_OF and each major's job list every Monday.
  Each job can include applyBy as an ISO date: { title, company, link, applyBy }
   Delete last week's entries and paste in the new ones.
   ============================================================ */

/* Add Mondays Date to
const WEEK_OF ="Enter Date or text in double quotes";
Example = const WEEK_OF = "July 7, 2026";
*/

const WEEK_OF = "October 5, 2026"; 

/*
Const MAJORS contains all the braches of the jobs that CCOB has that you can apply for
Always watch out for parenthesis and square brackets
*/

const MAJORS = {
  finance: {
    label: "Finance",
    icon: "💹",
    desc: "Investment banking, corporate finance, and asset management roles.",
    jobs: [
      { title: "Financial Services Representative (Omaha, NE)", company: "Charles Schwab", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/db3a7e65709c3dc771130390f0c57fc2", applyBy: "November 1, 2026" },
      { title: "Investment Analyst Intern", company: "12Twenty", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/d488dc520f58fedcd256b7334dd5b109", applyBy: "November 13, 2026" },
      { title: "Financial Planning Intern", company: "Affirm Wealth Advisors", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/c632ae74c134bada3d83bc6a71f35a6f", applyBy: "November 11, 2026" },
      { title: "2027 Summer Internship - Finance", company: "Arizona Public Service (APS)", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/269da52b6adc6772659b8238f5e4f0c3", applyBy: "October 30, 2026" },
      { title: "December 2026 Externship", company: "Equity Methods", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/864757bdb67e6f6aeb0e473210376bc4", applyBy: "October 28, 2026" },
      { title: "Commercial Real Estate Advisor", company: "12Twenty", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/bedd8fd4f1980369155a4651db6ef0bc", applyBy: "November 7, 2026" },
      { title: "Financial Services Representative (Austin, TX)", company: "Charles Schwab", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/1edb147836951d91f9eb35d8623b7044", applyBy: "November 7, 2026" },
      { title: "Financial Services Representative (Indianapolis, IN)", company: "Charles Schwab", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/531c150c0fd88f2322848d2f641b6ed6", applyBy: "November 7, 2026" },
      { title: "Financial Services Representative (Westlake, TX)", company: "Charles Schwab", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/a890444436cafcf8002505bffad1aea9", applyBy: "November 7, 2026" },
      { title: "2027 Commercial & Specialized Industries Full-Time Analyst P", company: "JPMorgan Chase & Co.", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/bd4bcc56f24d3f85b565b225d9031d32", applyBy: "October 16, 2026" },
    ]
  },
  accounting: {
    label: "Accounting",
    icon: "📊",
    desc: "Audit, tax, and staff accounting positions at firms of every size.",
    jobs: [
      { title: "Tax Preparer", company: "Landmark Certified Public Accountants", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/45953ea1c029e4e3ee685790f8ed83de", applyBy: "November 1, 2026" },
      { title: "Accounts Payable Clerk - Entry-Level", company: "BASIS.ed", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/61e23a7236d1149e4e626c67a795e4a6", applyBy: "November 13, 2026" },
      { title: "Accounting Clerk", company: "InnovaQuartz", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/aa1ea256aabedf5b87f4a67e5daa925d", applyBy: "November 12, 2026" },
      { title: "Accounting Support", company: "Absolute Sales LLC", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/6afdb2cc67f8ce972c738a511a298e15", applyBy: "November 7, 2026" },
      { title: "Audit Internship", company: "Walker & Armstrong", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/b6143b570e82651c573e15d8fdd35656", applyBy: "November 12, 2026" },
      { title: "Accounting Compliance Evaluator", company: "Arizona Office of the Auditor General", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/9561f1401ddec7e643ebd895750d0504", applyBy: "November 11, 2026" },
      { title: "Accounting Compliance Intern - Spring 2027", company: "Arizona Office of the Auditor General", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/d17d7cdb510bf3e332c0f0190ac79923", applyBy: "November 11, 2026" },
      { title: "Financial Audit Intern, Spring 2027", company: "Arizona Office of the Auditor General", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/b13a76c725b437b8e12fc7721e5858f5", applyBy: "November 11, 2026" },
      { title: "Performance Audit Intern - Spring 2027", company: "Arizona Office of the Auditor General", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/e32392b8e50c446912188cdc9ef399b4", applyBy: "November 11, 2026" },
      { title: "Program Analyst - Performance Auditor", company: "Arizona Office of the Auditor General", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/255dbf310657ffb83533e63b3a0762cd", applyBy: "November 11, 2026" },
    ]
  },
  economics: {
    label: "Economics",
    icon: "🌐",
    trend: "down",
    desc: "Research, policy, and consulting roles for data-driven thinkers.",
    jobs: [
      { title: "University Intern, Disputes & Economics - Healthcare and Life Sciences", company: "Ankura", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/61095659a49edc85947f2e618deb09d1", applyBy: "October 12, 2026" },
      { title: "2027 Summer Trading Intern (Baltimore, MD)", company: "Constellation", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/d2c3a402fcfd0736c6d2f9b0244758fd", applyBy: "October 6, 2026" },
      { title: "2027 Summer Finance Intern (Baltimore, MD)", company: "Constellation", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/3ea154561638cfd83b171d382f042d7f", applyBy: "October 9, 2026" },
      { title: "FP&A Intern", company: "Coinbase", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/c85cda2e1fb726c8560c63f213581390", applyBy: "October 6, 2026" },
      { title: "Strategic Sourcing Intern", company: "CHS Inc.", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/8c01ca01a2fced127b8fdf258112a5b7", applyBy: "October 12, 2026" },
      { title: "Community Relations Intern - MN", company: "Xcel Energy", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/e793489fbc8cf5911e332132e750293e", applyBy: "October 13, 2026" },
      { title: "Logistics Specialist Intern", company: "CHS Inc.", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/e09c5c5248310a93eaf0a4243aefce9e", applyBy: "October 12, 2026" },
      { title: "Underwriting Internship - Summer 2027 - Dallas", company: "Zurich NA", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/a2279234553341ef9af5879fc2fd8f5a", applyBy: "October 13, 2026" },
      { title: "Capstone Intern - BOS MI", company: "Huntington National Bank", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/af01813698165e95f63e70f6410147f8", applyBy: "October 12, 2026" },
      { title: "GFOAZ Internship - Scholarship Program", company: "Government Finance Officers Association of Arizona", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/51dd911878e219683c14db22aeb8b8e3", applyBy: "November 7, 2026" },
    ]
  },
  marketing: {
    label: "Marketing",
    icon: "📣",
    trend: "up",
    desc: "Brand, digital, and growth marketing openings.",
    jobs: [
      { title: "Intern - Marketing Operations", company: "Acxiom", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/3a77d1ef2aaf3264e9cebd32d6aa389e", applyBy: "October 8, 2026" },
      { title: "Commercial Marketing Intern", company: "Corteva Agriscience", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/22b2b7818d91abc550d0279e15b1ba19", applyBy: "October 12, 2026" },
      { title: "Brand Marketing Intern", company: "Texas Instruments", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/3ad19f15c53a985b2ee151fb0ed1531b", applyBy: "October 9, 2026" },
      { title: "Summer 2027 Internship - Marketing", company: "Ally", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/4d6d8d0e861fc9414c21b43b27d39b86", applyBy: "October 6, 2026" },
      { title: "Marketing Intern - Cognizant AI Labs", company: "Cognizant", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/be028764491eeabd789fc96ddcd4ab30", applyBy: "October 8, 2026" },
      { title: "Creative Marketing Specialist", company: "First Credit Union", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/581f7fb51e56a52f71f83cf0177c1b05", applyBy: "November 5, 2026" },
      { title: "Bilingual Spanish Marketing Trainee", company: "Sandhills Global, Inc (Lincoln, NE)", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/73c0133f5835e219533748c3c70a2089", applyBy: "October 30, 2026" },
      { title: "Summer 2027 Intern - Sales & Marketing", company: "Western Digital", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/5618b79c658dc7dea4932546189efba0", applyBy: "October 6, 2026" },
      { title: "Field Marketing Brand Ambassador", company: "FOR Energy", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/ae8c3b7d8a797e19055bb2a4359cec4a", applyBy: "October 11, 2026" },
      { title: "Sales and Marketing Intern", company: "Savage Air Conditioning", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/5f1f83b6d8b40bf75dce15553fef60aa", applyBy: "October 16, 2026" },
    ]
  },
  hr: {
    label: "Human Resources",
    icon: "🤝",
    trend: "steady",
    desc: "People operations, talent, and organizational development roles.",
    jobs: [
      { title: "Human Resources Rerpesentative", company: "First Credit Union", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/59e87d64c63003f90f5c0137ddb9af4f", applyBy: "November 12, 2026" },
      { title: "Human Resources: Office Admin", company: "CAMP-of-the-WOODS", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/73a2ca48effe9ae774c41ecbc467f255", applyBy: "October 23, 2026" },
      { title: "Human Resources Summer Associate Internship", company: "UPMC", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/3a3b1d9e63db9fbe57c056e593ab6fc9", applyBy: "October 13, 2026" },
      { title: "Human Resources Administrator", company: "Blue Trust", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/bb3e09e591fd0e8d8b3d3d593475a015", applyBy: "October 31, 2026" },
      { title: "Human Resources Summer Associate Internship - Benefits & Compensation", company: "UPMC", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/9d93c24c269a9d0df98ca55ad4739e12", applyBy: "October 13, 2026" },
      { title: "2027 Summer Internship - Human Resources", company: "Freeport-McMoRan", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/9ce771468f995adeb10cd656ef9a0109", applyBy: "October 31, 2026" },
      { title: "2027 Talent Development Internship", company: "Textron", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/206d179810fe322ccae34dca95c47101", applyBy: "October 7, 2026" },
      { title: "Talent Acquisition Intern Summer 2027", company: "Post Holdings Inc.", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/ab2766907f432e19ca68d0079ac57369", applyBy: "October 12, 2026" },
      { title: "HR Service Intern (Year Round)", company: "Bosch", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/6332f4386af0b65807cb5c2f318206ba", applyBy: "October 8, 2026" },
      { title: "Recruiting Intern", company: "CHS Inc.", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/227abf48bd9ff304dcd83b3ff165af4f", applyBy: "October 8, 2026" },
    ]
  },
  analytics: {
    label: "Business Analytics",
    icon: "📈",
    trend: "up",
    desc: "Data and business intelligence roles across industries.",
    jobs: [
      { title: "E-Commerce Specialist | Open to December 2026 Graduates", company: "Spirit Electronics", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/40870d84b57230e1f4e0324c2a6254ff", applyBy: "November 13, 2026" },
      { title: "Investment Analyst Intern", company: "12Twenty", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/d488dc520f58fedcd256b7334dd5b109", applyBy: "November 13, 2026" },
      { title: "Manufacturing Systems and Supply Planning Co-Op", company: "Entegris, Inc.", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/702ba68d2c22b3c49c2b7041c2428c95", applyBy: "November 5, 2026" },
      { title: "Manufacturing Systems Engineer Co-Op", company: "Entegris, Inc.", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/570eea89bcca15eef37da3c4d16360ea", applyBy: "November 6, 2026" },
      { title: "Operations Technical Training Platforms Co-Op", company: "Entegris, Inc.", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/ffe9eee1f60290c1509280ca544473b4", applyBy: "November 5, 2026" },
      { title: "2027 Manufacturing Engineer Intern", company: "Mercury Systems", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/9ed6d8d24c01f6be4db0698b90793500", applyBy: "November 12, 2026" },
      { title: "Software Engineering Intern (PHX)", company: "Astronautics Corporation of America", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/6e793e580cf7c974ff922fd61cde8ec9", applyBy: "November 12, 2026" },
      { title: "Systems Engineering Intern (PHX)", company: "Astronautics Corporation of America", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/00c936a977cdc8deec4b655a2b815f32", applyBy: "November 12, 2026" },
      { title: "Accounting Compliance Evaluator", company: "Arizona Office of the Auditor General", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/9561f1401ddec7e643ebd895750d0504", applyBy: "November 11, 2026" },
      { title: "IT Audit Intern, Spring 2027", company: "Arizona Office of the Auditor General", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/99ae412a96726430333a87630e094a73", applyBy: "November 11, 2026" },
    ]
  },
  entrepreneurship: {
    label: "Entrepreneurship",
    icon: "🚀",
    trend: "down",
    desc: "Startup, venture, and early-stage operating roles.",
    jobs: [
      { title: "Administrative Assistant", company: "InnovaQuartz", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/4361d1cea8d21a513ac90a6cabb954a4", applyBy: "November 11, 2026" },
      { title: "Commercial Real Estate Advisor", company: "Sands Investment Group (posted via 12Twenty)", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/bedd8fd4f1980369155a4651db6ef0bc", applyBy: "November 7, 2026" },
      { title: "Junior Account Executive", company: "MAZO Capital LLC", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/ce559dc41a60caeabce75f3475a91c8d", applyBy: "November 5, 2026" },
      { title: "Sales Intern Summer 2027 - Southern Region", company: "Crown Equipment Corporation", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/a2c4fa5b767f004b998e95a456d01f24", applyBy: "October 12, 2026" },
      { title: "Retail Store Management Internship Summer 2027 - North and East Metro Atlanta", company: "CVS Health", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/0fd98c33993cafa13c86db7d2677190f", applyBy: "October 6, 2026" },
      { title: "Sales & Business Development Intern", company: "Ignova Mechanical", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/9738edfaf1189eae79b53222ff042869", applyBy: "October 8, 2026" },
      { title: "Forward Deployed Engineer (New Graduate)", company: "LEYTON", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/d47f78a01c5aecd452a9f43b9edd6dc6", applyBy: "November 12, 2026" },
      { title: "Full-Stack Engineer (Junior & Senior Levels)", company: "LEYTON", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/bd28a49f3f3a40b4b44883ee6339f024", applyBy: "November 12, 2026" },
      { title: "Business Development Associate (AI-Native)", company: "The Camelback", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/645175b7dddae82c29169ad011187cc1", applyBy: "November 5, 2026" },
      { title: "The Camelback Operator Fellowship", company: "The Camelback", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/22f4fa7e90fe3638806fa547dc2d8533", applyBy: "November 5, 2026" },
    ]
  },
  hospitality: {
    label: "Hospitality Mgmt",
    icon: "🏨",
    trend: "steady",
    desc: "Hotel, event, and guest-experience operations roles.",
    jobs: [
      { title: "Hospitality&Catering Intern, FLIK Hospitality Group / Stamford&Norwalk, CT", company: "Compass Group, North America", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/7ce9472f374bf7c9f25bf84bdca8aedb", applyBy: "October 7, 2026" },
      { title: "Culinary and Hospitality Intern, FLIK Hospitality Group / Cambridge, MA", company: "Compass Group, North America", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/62261dc258384db9008d7524ffc5d17b", applyBy: "October 12, 2026" },
      { title: "Event Management Interns", company: "Arizona Events Group", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/d99d77f8f877ae8e7b09008ef23ff23b", applyBy: "October 30, 2026" },
      { title: "Golf Merchandise Internship - Hyatt Regency Hill Country Resort", company: "Hyatt", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/19a38051414c6902def32f78c8f79e32", applyBy: "October 12, 2026" },
      { title: "Summer 2027 - Food and Beverage Corporate Internship Program", company: "Hyatt", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/75d669f0c746ad34f0b2539db8e5a766", applyBy: "October 8, 2026" },
      { title: "Baking&Pastry Intern, Wolfgang Puck Catering / Bentonville, AR", company: "Compass Group, North America", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/c4408a7182e6d2a6a3b5ef877f3d6c45", applyBy: "October 13, 2026" },
      { title: "Manager in Training", company: "Drury Hotels", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/082ac7f1c11fd0874b9b3fad0e2b09d4", applyBy: "October 12, 2026" },
      { title: "Part-Time Banquet Server - Weddings & Events", company: "Wedgewood Weddings and Events", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/94dc4ebb6488efa1b72ba0148e6351b2", applyBy: "November 8, 2026" },
      { title: "Adventure Host", company: "Urban Air Adventure Park", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/2c3bb512c9eeceda53066f72c3eb9660", applyBy: "October 30, 2026" },
      { title: "Hospitality&Catering Intern, Eurest / Chicago, IL", company: "Compass Group, North America", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/d0dd0990b416cb8d188d07c3daabb7fb", applyBy: "October 12, 2026" },
    ]
  },
  sportsManagement: {
    label: "Sports Management",
    icon: "🏟️",
    trend: "down",
    desc: "Team operations, athletic administration, and sports marketing.",
    jobs: [
      { title: "Sports Data Entry Analyst (Part-Time)", company: "SportsData.IO", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/6b8cbb54330527217e2b2a24effe71cd", applyBy: "October 31, 2026" },
      { title: "Representative, Sales Development (Jan 2027 Start)", company: "Arizona Cardinals", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/6fb65f1e340266a959062bdfc3ba2e35", applyBy: "November 4, 2026" },
      { title: "Sports Class Instructor for Kids", company: "Beginners Edge Sports Training", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/6475107d33f734d60850335bbf449590", applyBy: "November 3, 2026" },
      { title: "Associate, Partnership Marketing (October 2026 - June 2027)", company: "Arizona Cardinals", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/e29a0e11134b6a357850b335da43843d", applyBy: "November 1, 2026" },
      { title: "2027 Intern - Sports and Entertainment Partnership Intern", company: "IBM", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/ce4ff0715077ee73a0433066f3663896", applyBy: "October 8, 2026" },
      { title: "Performance Coaching Intern", company: "Source Performance", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/875df51a36c404102b539309ca8196ac", applyBy: "October 30, 2026" },
      { title: "Sales Representative", company: "Athletes to Careers", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/b437f3b19b9f4a8cfe568940360bff57", applyBy: "October 25, 2026" },
      { title: "Soccer Coach - Junior High", company: "BASIS.ed", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/7288c04e81a50f21ea0aff2b3b67e382", applyBy: "October 23, 2026" },
      { title: "Program Intern", company: "Miracle League of Arizona", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/0e04873d233852d8008594bb47282cee", applyBy: "October 9, 2026" },
      { title: "Adventure Host", company: "Urban Air Adventure Park", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/2c3bb512c9eeceda53066f72c3eb9660", applyBy: "October 30, 2026" },
    ]
  },
  supplyChain: {
    label: "Supply Chain",
    icon: "📦",
    trend: "up",
    desc: "Logistics, procurement, and operations analyst roles.",
    jobs: [
      { title: "Distribution Engineer", company: "Pilot Thomas Logistics", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/0239ecd930a5c43c4ea00783afd74d75", applyBy: "November 19, 2026" },
      { title: "Manufacturing Systems and Supply Planning Co-Op", company: "Entegris, Inc.", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/702ba68d2c22b3c49c2b7041c2428c95", applyBy: "November 5, 2026" },
      { title: "2027 Operations, Supply Chain Intern", company: "Mercury Systems", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/f9f495fd5bdf278f3fe258606c54b060", applyBy: "November 12, 2026" },
      { title: "2027 Operations Intern", company: "Mercury Systems", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/5b8db58f310336e30df3dc30b34be2b1", applyBy: "November 12, 2026" },
      { title: "Brokerage Internship, Annual, Fall 2026", company: "J.B. Hunt Transport", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/4a0a1de6952ec8fd5a24185642524a24", applyBy: "October 13, 2026" },
      { title: "Intern - Account Manager Starting Summer 2027", company: "C.H. Robinson", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/ef0d71a3844e1c7d5a17541b8841b88b", applyBy: "October 13, 2026" },
      { title: "Intern - Supply Chain Management", company: "ERCOT", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/844a3e2bf44005f790810d947982de6c", applyBy: "October 13, 2026" },
      { title: "2027 Summer Inter - Supplier Quality Intern", company: "General Motors", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/05ae6ca54176b2ede7e1874906b54c44", applyBy: "October 12, 2026" },
      { title: "Demand Planning Intern (Summer 2027)", company: "Clarios", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/87e2e114e3b8856ea945ecf97228a5be", applyBy: "October 12, 2026" },
      { title: "Intern - Associate Portfolio Executive - Summer 2027", company: "C.H. Robinson", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/bc21f1762a768f07c885ae9c0cdbb414", applyBy: "October 13, 2026" },
    ]
  },
  businessManagement: {
    label: "Business Mgmt",
    icon: "🧭",
    trend: "steady",
    desc: "Generalist operations, project, and management-track roles.",
    jobs: [
      { title: "Manager in Training", company: "Drury Hotels", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/082ac7f1c11fd0874b9b3fad0e2b09d4", applyBy: "October 12, 2026" },
      { title: "Software Project Manager", company: "Sandhills Global, Inc", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/838217699579eca83462eb882c743efb", applyBy: "October 30, 2026" },
      { title: "Engineering Manager", company: "Procter & Gamble Co. (posted via 12Twenty)", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/da50ebc3dbb19ecccce418d84ef88079", applyBy: "November 7, 2026" },
      { title: "Manufacturing Manager", company: "Procter & Gamble Co. (posted via 12Twenty)", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/13f37629b9928532dd3a71a154494dae", applyBy: "November 7, 2026" },
      { title: "Marketing Manager", company: "FOX Corporation", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/1e5d548fe9bd6d85c19c13c0136c7939", applyBy: "November 1, 2026" },
      { title: "Case Manager/Child Safety Specialist", company: "Arizona Department of Child Safety", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/da052132a64a2c7f8e6bb0d06697cf15", applyBy: "October 21, 2026" },
      { title: "Project Manager", company: "Epic", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/02c5742ad7b904299c859484e1ba3e25", applyBy: "October 21, 2026" },
      { title: "Guest Relations Manager", company: "Marriott International", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/3f87e26928a185379c0056c251ae2e42", applyBy: "November 6, 2026" },
      { title: "Case Manager Children Services", company: "Spectrum Healthcare Group", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/3da27c3547e48b53e429ce79f4057c6b", applyBy: "October 10, 2026" },
      { title: "NACG Business Manager Intern", company: "Janus Henderson Investors", link: "https://gcu-csm.symplicity.com/students/app/jobs/detail/9d4e2fd6ab1bb86eb0b62ca66f380148", applyBy: "October 7, 2026" },
    ]
  },
};
/* normalize job links need not be touched unless of an exception of a non working link*/


// Ensure each job has a working link (fallback to a Google search URL)
(function normalizeJobLinks() {
  Object.values(MAJORS).forEach((m) => {
    m.jobs.forEach((job) => {
      if (!job.link || job.link === "#") {
        const q = encodeURIComponent((job.title || "job") + " " + (job.company || ""));
        job.link = `https://www.google.com/search?q=${q}`;
      } else if (/^[^/:]+$/.test(job.link)) {
        // if link is like 'www.google.com', add protocol
        job.link = `https://${job.link}`;
      }
    });
  });
})();

/*
!!!!!!!!!!!!!!!DO NOT TOUCH BELOW THIS PART!!!!!!!!!!!!!!!!!
*/

/* ============================================================
   RENDER + SELECTION LOGIC — no need to touch below this line
   ============================================================ */

let activeMajor = Object.keys(MAJORS)[0];

// selection map keyed by "majorKey::index" → job object
const selected = new Map();
const PREVIOUS_PAGE_KEY = "jobPostingsPreviousPage";

function init() {
  rememberPreviousPage();
  buildStats();
  buildTicker();
  buildNav();
  renderPanel();
  bindSelectionBar();
  bindModal();
  bindBackButton();
}

function rememberPreviousPage() {
  const referrer = document.referrer;
  if (referrer && referrer !== window.location.href) {
    sessionStorage.setItem(PREVIOUS_PAGE_KEY, referrer);
  }
}

function goBack() {
  const storedPreviousPage = sessionStorage.getItem(PREVIOUS_PAGE_KEY);

  if (storedPreviousPage && storedPreviousPage !== window.location.href) {
    window.location.href = storedPreviousPage;
  } else if (document.referrer && document.referrer !== window.location.href) {
    window.location.href = document.referrer;
  } else if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = "./";
  }
}

function bindBackButton() {
  const backBtn = document.getElementById("backBtn");
  if (!backBtn) return;

  backBtn.addEventListener("click", goBack);
}

function buildStats() {
  const majorCount = Object.keys(MAJORS).length;
  const jobCount = Object.values(MAJORS).reduce((sum, m) => sum + m.jobs.length, 0);

  document.getElementById("stat-strip").innerHTML = `
    <div class="stat-chip">
      <span class="stat-value">${jobCount}</span>
      <span class="stat-label">Open Roles</span>
    </div>
    <div class="stat-chip">
      <span class="stat-value">${majorCount}</span>
      <span class="stat-label">Departments</span>
    </div>
    <div class="stat-chip">
      <span class="stat-value">${WEEK_OF}</span>
      <span class="stat-label">Week Of</span>
    </div>
  `;
}

function buildTicker() {
  const track = document.getElementById("ticker-track");
  const trendMap = {
    up: { icon: "▲", label: "6+ openings", className: "up" },
    down: { icon: "▼", label: "0–2 openings", className: "down" },
    steady: { icon: "—", label: "3–5 openings", className: "steady" }
  };

  const items = Object.values(MAJORS).map(m => {
    const count = m.jobs.length;
    const trendKey = count > 5 ? "up" : count >= 3 ? "steady" : "down";
    const trend = trendMap[trendKey];
    return `
      <span class="ticker-item">
        <b>${m.label.toUpperCase()}</b>
        ${count} OPEN
        <span class="ticker-icon ${trend.className}" title="${trend.label}">${trend.icon}</span>
      </span>`;
  });

  track.innerHTML = items.join("") + items.join("");
}

function buildNav() {
  const nav = document.getElementById("majors-nav");
  nav.innerHTML = "";
  Object.entries(MAJORS).forEach(([key, m]) => {
    const btn = document.createElement("button");
    btn.className = "major-btn" + (key === activeMajor ? " active" : "");
    btn.innerHTML = `
      <span class="icon">${m.icon || "•"}</span>
      <span class="label">${m.label}</span>
      <span class="count">${m.jobs.length}</span>
    `;
    btn.onclick = () => {
      activeMajor = key;
      buildNav();
      renderPanel();
    };
    nav.appendChild(btn);
  });
}

function renderPanel() {
  const m = MAJORS[activeMajor];
  document.getElementById("panel-title").textContent = m.label;
  document.getElementById("panel-desc").textContent = m.desc || "";
  document.getElementById("week-chip").textContent = "Week of " + WEEK_OF;

  const list = document.getElementById("job-list");
  list.innerHTML = "";

  if (!m.jobs.length) {
    list.innerHTML = `<li class="empty-state">No roles posted for this department yet — check back next Monday.</li>`;
    return;
  }

  m.jobs.forEach((job, i) => {
    const selectionKey = activeMajor + "::" + i;
    const isChecked = selected.has(selectionKey);

    const li = document.createElement("li");
    li.innerHTML = `
      <div class="job${isChecked ? " checked" : ""}" data-key="${selectionKey}">
        <label class="job-check">
          <input type="checkbox" ${isChecked ? "checked" : ""} data-key="${selectionKey}">
          <span class="box">
            <svg viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#241536" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>
        </label>
        <span class="job-rank">${i + 1}</span>
        <span class="job-main">
          <p class="job-title">${job.title}</p>
          <span class="job-company">${job.company || ""}</span>
        </span>
        <!-- link icon removed; job.link still present for modal/email -->
      </div>
    `;
    const deadline = document.createElement("span");
    deadline.className = "job-deadline";
    if (job.applyBy) {
      const time = document.createElement("time");
      time.dateTime = job.applyBy;
      const applyByDate = new Date(`${job.applyBy}T00:00:00`);
      time.textContent = Number.isNaN(applyByDate.getTime())
        ? job.applyBy
        : applyByDate.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
      deadline.append("Apply by: ", time);
    } else {
      deadline.textContent = "Apply by: Not listed";
    }
    li.querySelector(".job-main").appendChild(deadline);
    list.appendChild(li);
  });

  // wire up checkboxes
  list.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.addEventListener("change", onCheckboxChange);
  });
}

function onCheckboxChange(e) {
  const key = e.target.dataset.key;
  const [majorKey, idx] = key.split("::");
  const job = MAJORS[majorKey].jobs[Number(idx)];
  const jobRow = e.target.closest(".job");

  if (e.target.checked) {
    selected.set(key, { ...job, majorLabel: MAJORS[majorKey].label });
    jobRow.classList.add("checked");
  } else {
    selected.delete(key);
    jobRow.classList.remove("checked");
  }

  updateSelectionBar();
}

function updateSelectionBar() {
  const bar = document.getElementById("selection-bar");
  const count = selected.size;
  document.getElementById("selected-count").textContent = count;
  document.getElementById("plural-s").textContent = count === 1 ? "" : "s";
  bar.classList.toggle("visible", count > 0);
}

function bindSelectionBar() {
  document.getElementById("email-btn").addEventListener("click", openModal);
}

function bindModal() {
  document.getElementById("modal-close").addEventListener("click", closeModal);
  document.getElementById("modal-overlay").addEventListener("click", (e) => {
    if (e.target.id === "modal-overlay") closeModal();
  });
  document.getElementById("send-btn").addEventListener("click", sendSelectedJobs);
  document.getElementById("email-input").addEventListener("click", showEmailKeyboard);
  buildEmailKeyboard();
}

function showEmailKeyboard() {
  document.getElementById("email-keyboard").classList.add("visible");
}

let emailKeyboardShift = false;

function buildEmailKeyboard() {
  const keyboard = document.getElementById("email-keyboard");
  const rows = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m"],
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    ["@", ".", "-", "_", "+", "!", "#", "$", "%", "&"],
    ["'", "*", "/", "=", "?", "^", "`", "{", "|", "}", "~"]
  ];

  keyboard.innerHTML = rows.map(row => `
    <div class="keyboard-row">
      ${row.map(key => {
        const displayedKey = emailKeyboardShift && /^[a-z]$/.test(key) ? key.toUpperCase() : key;
        return `<button type="button" class="keyboard-key" data-key="${displayedKey}" aria-label="${displayedKey}">${displayedKey}</button>`;
      }).join("")}
    </div>
  `).join("") + `
    <div class="keyboard-row keyboard-actions">
      <button type="button" class="keyboard-key keyboard-action" data-action="shift" aria-label="Shift">${emailKeyboardShift ? "SHIFT" : "Shift"}</button>
      <button type="button" class="keyboard-key keyboard-action" data-action="backspace" aria-label="Backspace">⌫</button>
      <button type="button" class="keyboard-key keyboard-action keyboard-clear" data-action="clear">Clear</button>
    </div>
  `;

  keyboard.onclick = (e) => {
    const keyButton = e.target.closest("button");
    if (!keyButton) return;

    const input = document.getElementById("email-input");
    const action = keyButton.dataset.action;
    if (action === "shift") {
      emailKeyboardShift = !emailKeyboardShift;
      buildEmailKeyboard();
      return;
    }
    if (action === "backspace") input.value = input.value.slice(0, -1);
    else if (action === "clear") input.value = "";
    else input.value += keyButton.dataset.key;
    if (emailKeyboardShift) {
      emailKeyboardShift = false;
      buildEmailKeyboard();
    }
    input.dispatchEvent(new Event("input", { bubbles: true }));
  };
}

function openModal() {
  const overlay = document.getElementById("modal-overlay");
  const list = document.getElementById("modal-job-list");
  const sub = document.getElementById("modal-sub");

  const jobs = Array.from(selected.values());
  sub.textContent = `We'll send the links for your ${jobs.length} selected role${jobs.length === 1 ? "" : "s"}.`;

  list.innerHTML = jobs.map(j => `
    <li>${j.title} — ${j.company}<span>${j.majorLabel} · ${j.link}</span></li>
  `).join("");

  document.getElementById("modal-status").textContent = "";
  document.getElementById("modal-status").className = "modal-status";
  document.getElementById("email-keyboard").classList.remove("visible");
  emailKeyboardShift = false;
  overlay.classList.add("visible");
}

function buildMailto(jobs, toEmail) {
  const subject = encodeURIComponent(`Job links — ${WEEK_OF}`);
  const bodyLines = jobs.map((j, i) => `${i + 1}. ${j.title} — ${j.company} (${j.majorLabel})\n${j.link}`);
  const body = encodeURIComponent(`Here are the roles you selected for ${WEEK_OF}:\n\n${bodyLines.join("\n\n")}`);
  let mailto = `mailto:${encodeURIComponent(toEmail || "")}?subject=${subject}&body=${body}`;
  return mailto;
}

function openMailClient() {
  const emailInput = document.getElementById("email-input");
  const email = emailInput.value.trim();
  const jobs = Array.from(selected.values());
  const mailto = buildMailto(jobs, email);
  // open in new window/tab to avoid navigation in single-page contexts
  window.open(mailto);
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("visible");
  document.getElementById("email-keyboard").classList.remove("visible");
}

function sendSelectedJobs() {
  const emailInput = document.getElementById("email-input");
  const status = document.getElementById("modal-status");
  const email = emailInput.value.trim();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    status.textContent = "Please enter a valid email address.";
    status.className = "modal-status error";
    return;
  }

  if (!window.emailjs || EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY") {
    status.textContent = "Email sending isn't set up yet — see the setup note at the top of jobs-script.js.";
    status.className = "modal-status error";
    return;
  }

  const jobs = Array.from(selected.values());
  const jobListText = jobs
    .map((j, i) => `${i + 1}. ${j.title} (${j.company}, ${j.majorLabel}) — ${j.link}`)
    .join("\n");

  const sendBtn = document.getElementById("send-btn");
  sendBtn.disabled = true;
  sendBtn.textContent = "Sending...";
  const payload = {
    to_email: email,
    job_count: jobs.length,
    week_of: WEEK_OF,
    job_list: jobListText
  };

  console.debug("Email payload:", payload);

  if (!window.emailjs || typeof emailjs.send !== "function") {
    console.error("EmailJS SDK not available or not loaded correctly.");
    status.textContent = "EmailJS SDK not loaded. Check the script include in jobs.html.";
    status.className = "modal-status error";
    sendBtn.disabled = false;
    sendBtn.textContent = "Send Links";
    return;
  }

  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, payload)
    .then((res) => {
      console.debug("EmailJS response:", res);
      status.textContent = "Sent! Check your inbox for the links.";
      status.className = "modal-status success";
      sendBtn.disabled = false;
      sendBtn.textContent = "Send Links";
      setTimeout(closeModal, 1800);
    })
    .catch((err) => {
      console.error("EmailJS send error:", err);

      // Friendly, more-detailed error message for debugging — user can copy this
      let details = "";
      try {
        if (err && typeof err === "object") {
          if (err.status) details += ` Status: ${err.status}.`;
          if (err.text) details += ` Response: ${err.text}`;
          if (!details) details = " " + JSON.stringify(err);
        } else {
          details = " " + String(err);
        }
      } catch (ex) {
        details = " (error serializing error)";
      }

      status.textContent = "Something went wrong sending that email." + details;
      status.className = "modal-status error";
      sendBtn.disabled = false;
      sendBtn.textContent = "Send Links";
    });
}

init();
