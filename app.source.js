(function(){
"use strict";
var SITE = "https://halaniimmigration.com";
var RM = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
var HAS_GSAP = typeof window.gsap !== "undefined";
if (HAS_GSAP && window.MotionPathPlugin) gsap.registerPlugin(MotionPathPlugin);

/* ---------- icons ---------- */
var I = {
  arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  ext:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px"><path d="M7 17 17 7M8 7h9v9"/></svg>',
  leaf:'<svg viewBox="80 70 580 590" aria-hidden="true"><use href="#leafIcon"/></svg>',
  leafLine:'<svg viewBox="80 70 580 590" aria-hidden="true"><use href="#leafLine"/></svg>',
  chev:'<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m2 4 4 4 4-4"/></svg>',
  plane:'<svg viewBox="0 0 24 24"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>',
  shield:'<svg viewBox="0 0 24 24"><path d="M12 3 4 6v6c0 4.4 3.4 8.3 8 9 4.6-.7 8-4.6 8-9V6l-8-3z"/><path d="m9 12 2 2 4-4"/></svg>',
  eye:'<svg viewBox="0 0 24 24"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
  compass:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/></svg>',
  doc:'<svg viewBox="0 0 24 24"><path d="M14 3H6v18h12V7z"/><path d="M14 3v4h4M9 12h6M9 16h6"/></svg>',
  globe:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9S14.5 18.3 12 21c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z"/></svg>',
  calc:'<svg viewBox="0 0 24 24"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 11h2M12 11h2M16 11h0M8 15h2M12 15h2M8 18h2M12 18h4"/></svg>',
  clock:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  quiz:'<svg viewBox="0 0 24 24"><path d="M9 11l2 2 4-4"/><rect x="4" y="4" width="16" height="16" rx="3"/></svg>',
  lang:'<svg viewBox="0 0 24 24"><path d="M4 5h9M8 3v2c0 4-2 7-5 9M6 9c1 2 3 4 6 5M13 21l4-9 4 9M14.5 18h5"/></svg>',
  list:'<svg viewBox="0 0 24 24"><path d="M9 6h11M9 12h11M9 18h11M4 6h0M4 12h0M4 18h0"/></svg>',
  chart:'<svg viewBox="0 0 24 24"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
  book:'<svg viewBox="0 0 24 24"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 21h15"/></svg>',
  phone:'<svg viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>',
  mail:'<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  pin:'<svg viewBox="0 0 24 24"><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  search:'<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>'
};
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
function ext(path){return SITE + path;}

/* ---------- services data (content drawn from halaniimmigration.com; time-sensitive rules flagged for IRCC verification before launch) ---------- */
var S = [
 {id:"visitor-visa",group:"Temporary",name:"Visitor Visa",full:"Visitor Visa (TRV)",img:"toronto-park",layout:0,fee:"CAD 800",
  tag:"Tourism, family visits and short business trips",
  h:"Visit Canada with a stronger application.",
  intro:"A Temporary Resident Visa lets visa-required travellers visit Canada for tourism, family events or short business trips. Officers decide each file on the purpose of the visit, your ties to home and your ability to fund the trip. We prepare the full application, including the ties-to-home strategy and supporting letters.",
  who:["Visa-required nationals travelling for tourism or family visits","Parents and relatives attending graduations, weddings or births","Short-term business visitors attending meetings or conferences","Applicants refused before who need a better-prepared file"],
  help:["Assessment of travel purpose and refusal risks","Genuine-temporary-purpose narrative and cover letter","Invitation letter guidance for your host in Canada","Document checklist and full IRCC-ready submission"],
  consider:["Visa-exempt travellers flying to Canada usually need an eTA instead of a visa","Biometrics are required for most applicants","Funds and ties to home matter more than the number of documents"],
  faq:[["How long can I stay in Canada as a visitor?","Visitors are usually authorized for up to six months, but the border officer decides the length of stay on entry. If you need longer, you can apply to extend your status before it expires."],["Can I work in Canada on a visitor visa?","No. A visitor visa does not allow you to work for a Canadian employer. If you plan to work, you need the right work permit."],["What if I was refused a visitor visa before?","A previous refusal is not a bar to applying again. We review the refusal reasons and address each concern before you reapply."]],
  rel:["super-visa","study-permit","status-extension"]},
 {id:"super-visa",group:"Temporary",name:"Super Visa",full:"Super Visa for Parents & Grandparents",img:"family",layout:1,fee:null,
  tag:"Long stays for parents and grandparents",
  h:"Bring your parents closer for longer.",
  intro:"The Super Visa lets parents and grandparents of Canadian citizens and permanent residents visit for extended stays on a multiple-entry visa. It is one of the most practical family options in Canada, and most refusals come down to how ties to home and the host's support are presented.",
  who:["Parents and grandparents of Canadian citizens or permanent residents","Families who want long, repeated visits without sponsorship","Families waiting on a Parents and Grandparents Program invitation"],
  help:["Income eligibility review for the child or grandchild in Canada","Invitation and financial support letters","Guidance on the required private medical insurance","Ties-to-home framing based on recurring refusal patterns we see"],
  consider:["The host must meet a minimum income threshold that IRCC updates regularly","Private health insurance from an eligible provider is required","An immigration medical exam is required"],
  faq:[["How long can my parents stay on a Super Visa?","A Super Visa can be valid for up to 10 years, and each entry can allow a long stay. Current maximum stay rules should be confirmed with IRCC at the time of application."],["Is a Super Visa better than sponsoring my parents?","They serve different goals. Sponsorship leads to permanent residence through a limited intake, while the Super Visa offers long visits without waiting for an invitation. We help you decide which fits your family."]],
  rel:["parents-grandparents","visitor-visa","spousal-sponsorship"]},
 {id:"study-permit",group:"Temporary",name:"Study Permit",full:"Study Permit",img:"study",layout:2,fee:"CAD 1,500",
  tag:"DLI applications and provincial attestation",
  h:"Study in Canada with a file built to be approved.",
  intro:"A study permit lets international students study at a designated learning institution in Canada. We help you present a clear study plan, credible proof of funds and the documents IRCC expects, so your application reads as a genuine student file.",
  who:["Students with an acceptance letter from a Canadian DLI","Graduate and postgraduate applicants","Students refused before who need a stronger study plan","Families planning to accompany a student"],
  help:["Study plan and statement of purpose review","Proof of funds strategy, including GIC and sponsor letters","Provincial attestation letter guidance where required","Dependant applications for spouses and children"],
  consider:["Most applicants need a provincial or territorial attestation letter","Proof-of-funds amounts are set by IRCC and change, so confirm the current figure","Your program choice affects later eligibility for a post-graduation work permit"],
  faq:[["Is a GIC mandatory for a study permit?","A GIC is not legally mandatory for every applicant, but it is a clear way to show first-year living funds and is strongly recommended for many applicants."],["Can my parents provide the funds for my study permit?","Yes. A sponsor can support you with an affidavit of support, bank statements, proof of income and a letter explaining the relationship."],["What if my bank statement shows a large recent deposit?","Unexplained large deposits can lead to refusal. Explain the source in writing and attach documents such as a sale deed or loan agreement."]],
  rel:["pgwp","work-permit","visitor-visa"]},
 {id:"work-permit",group:"Temporary",name:"Work Permit",full:"Work Permit",img:"work",layout:0,fee:"CAD 2,000",
  tag:"LMIA-based and LMIA-exempt routes",
  h:"Work in Canada through the right permit.",
  intro:"Canada offers employer-specific work permits, supported by an LMIA or an LMIA exemption, and open work permits for certain spouses, graduates and other groups. We identify the route that fits your job offer and background and handle the application from job offer to approval.",
  who:["Foreign workers with a Canadian job offer","Intra-company transferees","Spouses of eligible students and workers","Employers hiring international talent"],
  help:["Route selection between LMIA, LMIA-exempt and open permits","Employer compliance documents and job offer review","Dependant work and study permits for family members","Status maintenance and extensions"],
  consider:["Employer-specific permits tie you to one employer and role","Open work permit eligibility rules for spouses changed recently, so confirm current criteria","Work experience in Canada can support a later permanent residence application"],
  faq:[["What is the difference between LMIA-based and LMIA-exempt work permits?","An LMIA-based permit needs a positive Labour Market Impact Assessment from ESDC. LMIA-exempt permits rely on trade agreements, intra-company transfers or other exemptions."],["Can my spouse work while I work in Canada?","Some spouses qualify for an open work permit. Eligibility depends on your occupation and current IRCC rules, which we confirm during assessment."]],
  rel:["lmia-application","pgwp","c11-work-permit"]},
 {id:"pgwp",group:"Temporary",name:"PGWP",full:"Post-Graduation Work Permit",img:"friends",layout:1,fee:"CAD 1,500",
  tag:"After graduation from an eligible program",
  h:"Turn your Canadian degree into Canadian experience.",
  intro:"The Post-Graduation Work Permit lets eligible graduates of Canadian designated learning institutions work for almost any employer. Canadian work experience gained on a PGWP is often the foundation for a permanent residence application.",
  who:["Graduates of eligible programs at Canadian DLIs","Students approaching graduation who want to plan ahead","Graduates whose study permit is about to expire"],
  help:["Eligibility review of your program and institution","Timing advice around your study permit expiry","Application preparation and submission","Planning the route from PGWP to permanent residence"],
  consider:["You must apply within the IRCC deadline after completing your program","Eligibility depends on your program, institution and current rules, including field-of-study requirements for some programs","Language test results may be required depending on your program"],
  faq:[["Can I work while my PGWP application is processing?","In some situations you may be able to keep working while you wait for a decision. It depends on when and how you applied, so confirm before relying on it."],["How long will my PGWP be valid?","PGWP length generally depends on the length of your program. We confirm the expected validity during your review."]],
  rel:["study-permit","express-entry","work-permit"]},
 {id:"status-extension",group:"Temporary",name:"Status Extension",full:"Status Extension & Restoration",img:"toronto-night",layout:2,fee:null,
  tag:"Extend or restore temporary status",
  h:"Keep your status in Canada secure.",
  intro:"Visitors, students and workers who want to stay longer must apply to extend their status before it expires. If your status has already expired, restoration may be possible within a limited period. We handle extensions, visitor records and restoration applications.",
  who:["Visitors who need to stay longer than authorized","Students and workers whose permits are expiring","People whose status expired recently and need restoration"],
  help:["Timing review so you apply before your status expires","Visitor record and permit extension applications","Restoration applications with a clear explanation","Planning your next step toward longer-term status"],
  consider:["Apply before your current status expires whenever possible","Restoration is only available within a limited window after status is lost","You generally cannot work or study while waiting for restoration"],
  faq:[["What happens if I apply to extend before my status expires?","If you apply on time, you can generally remain in Canada under the same conditions while IRCC decides, which is often called maintained status."],["Can I restore my status after it expires?","Restoration may be possible within a limited period after expiry. Contact us quickly, because the window is strict."]],
  rel:["visitor-visa","work-permit","study-permit"]},
 {id:"express-entry",group:"Permanent Residence",name:"Express Entry",full:"Express Entry",img:"toronto-aerial",layout:0,fee:"CAD 3,850",
  tag:"FSW, CEC and FST pathways",
  h:"Express Entry, carefully optimized.",
  intro:"Express Entry manages applications for the Federal Skilled Worker, Canadian Experience Class and Federal Skilled Trades programs. Candidates are ranked by Comprehensive Ranking System score and invited in regular draws. We help you raise your score, build an accurate profile and submit a complete application after an invitation.",
  who:["Skilled workers abroad applying under FSW","Temporary residents with Canadian work experience under CEC","Qualified tradespeople under FST","Candidates targeting category-based draws"],
  help:["CRS score review and improvement planning","Profile creation and document verification","Category-based draw positioning","Complete electronic application after your ITA"],
  consider:["After an invitation you have a fixed window to submit your full application","Category-based draws now prioritize certain occupations and French ability","Accuracy matters: misrepresentation can lead to a five-year ban"],
  faq:[["How can I improve my CRS score?","Common levers include higher language test results, a second official language, education credential assessments, a provincial nomination and Canadian work experience."],["Do I need a job offer for Express Entry?","No. Most candidates are invited without a job offer. Program eligibility and your CRS score matter most."],["What happens after I receive an ITA?","You must submit a complete application with supporting documents within the IRCC deadline. We prepare and review every document before submission."]],
  rel:["pnp","citizenship","pgwp"]},
 {id:"pnp",group:"Permanent Residence",name:"Provincial Nominee Program",full:"Provincial Nominee Program (PNP)",img:"rockies",layout:1,fee:"CAD 6,000",
  tag:"Provincial nomination streams across Canada",
  h:"Get nominated by a province.",
  intro:"Provinces and territories nominate candidates who meet their labour market needs. An enhanced nomination linked to Express Entry adds 600 CRS points, which generally leads to an invitation. Base streams are processed outside Express Entry. We map your profile to the streams that fit.",
  who:["Express Entry candidates with scores below recent cut-offs","Workers and graduates with ties to a specific province","Candidates in occupations targeted by provincial draws"],
  help:["Stream mapping across provinces and territories","Expression of interest profiles","Nomination application preparation","Federal permanent residence application after nomination"],
  consider:["Each province sets its own criteria and changes streams often","Some streams require a job offer or provincial connection","You are expected to intend to live in the nominating province"],
  faq:[["What is the difference between enhanced and base PNP streams?","Enhanced streams are aligned with Express Entry and add 600 CRS points. Base streams lead to a separate paper-based federal application."],["Can I apply to more than one province?","You can express interest in several provinces where you qualify, but each nomination comes with an intention to settle in that province."]],
  rel:["express-entry","pnp-entrepreneur","work-permit"]},
 {id:"spousal-sponsorship",group:"Family Sponsorship",name:"Spousal Sponsorship",full:"Spousal & Partner Sponsorship",img:"lionsgate",layout:2,fee:"CAD 2,950",
  tag:"Spouses, common-law and conjugal partners",
  h:"Reunite with your partner in Canada.",
  intro:"Canadian citizens and permanent residents can sponsor a spouse, common-law partner or conjugal partner for permanent residence. We build the relationship evidence package, choose between inland and outland processing, and address the most common refusal grounds before you file.",
  who:["Spouses and partners of Canadian citizens or permanent residents","Couples living together in Canada or abroad","Couples who need advice on inland versus outland applications"],
  help:["Inland and outland strategy","Relationship evidence package and timeline","Open work permit support for eligible inland applicants","Interview preparation if IRCC requests one"],
  consider:["Genuineness of the relationship is the core assessment","Sponsors must meet eligibility rules and sign an undertaking","Inland applicants should generally maintain their own temporary status"],
  faq:[["Should we apply inland or outland?","It depends on where you live, travel plans and work needs. Inland may allow an open work permit, while outland can make travel easier. We compare both for your situation."],["What evidence proves our relationship is genuine?","Typical evidence includes proof of communication, time spent together, shared finances or residence, photos and statements from family and friends."]],
  rel:["parents-grandparents","super-visa","citizenship"]},
 {id:"parents-grandparents",group:"Family Sponsorship",name:"Parents & Grandparents",full:"Parents & Grandparents Sponsorship",img:"family",layout:0,fee:null,
  tag:"Permanent residence for parents and grandparents",
  h:"A permanent home for the people who raised you.",
  intro:"The Parents and Grandparents Program lets eligible Canadian citizens and permanent residents sponsor parents and grandparents for permanent residence. Intake is limited and invitation-based, so preparation before invitations open matters.",
  who:["Citizens and permanent residents who meet income requirements","Families who submitted an interest to sponsor form","Families comparing sponsorship with the Super Visa"],
  help:["Income eligibility review over the required years","Application preparation once invited","Super Visa planning while you wait","Document guidance for parents abroad"],
  consider:["Intake is limited and invitations are not guaranteed","Sponsors must meet income thresholds for several consecutive years","Sponsors commit to a multi-year financial undertaking"],
  faq:[["How do I get invited to sponsor my parents?","IRCC invites potential sponsors from a pool of previously submitted interest forms. Current intake details change each year, so we confirm them at consultation."],["What if I am not invited this year?","Many families use the Super Visa so parents can spend long periods in Canada while waiting for a future intake."]],
  rel:["super-visa","spousal-sponsorship","citizenship"]},
 {id:"citizenship",group:"Permanent Residence",name:"Citizenship",full:"Canadian Citizenship",img:"montreal",layout:1,fee:"CAD 1,200",
  tag:"From permanent resident to citizen",
  h:"The final step of your Canadian journey.",
  intro:"Permanent residents who meet physical presence, tax filing and language requirements can apply for Canadian citizenship. We check your eligibility, calculate your days carefully and prepare a complete application.",
  who:["Permanent residents who meet the physical presence requirement","Families applying together","Applicants with complex travel histories"],
  help:["Physical presence calculation and travel history review","Application preparation and submission","Test and interview preparation guidance","Minor children applications"],
  consider:["Physical presence is counted in days and must be exact","Adults in the required age range must show language ability","Tax filing obligations must be met for the relevant years"],
  faq:[["How many days do I need in Canada to apply?","Applicants generally need at least 1,095 days of physical presence in the five years before applying. Some time spent in Canada before permanent residence may count partially."],["Do I need to take a citizenship test?","Applicants within the required age range usually take a knowledge test about Canada's history, values and institutions."]],
  rel:["express-entry","spousal-sponsorship","pnp"]},
 {id:"business-immigration",group:"Business Immigration",name:"Business Immigration",full:"Business Immigration",img:"business",layout:2,fee:null,
  tag:"Entrepreneurs, investors and owner-operators",
  h:"Build your business, and your future, in Canada.",
  intro:"Entrepreneurs, investors and self-employed professionals can reach Canada through provincial entrepreneur streams, the C11 owner-operator work permit, LMIA-supported routes and federal programs. We match your business plan and net worth to the pathway that fits.",
  who:["Business owners planning to buy or start a Canadian business","Investors exploring provincial entrepreneur streams","Owner-operators seeking a C11 work permit"],
  help:["Pathway comparison across federal and provincial options","Business plan and investment requirement review","Work permit and permanent residence sequencing","Coordination with your accountants and advisors"],
  consider:["Each stream sets its own net worth and investment thresholds","Some federal business programs have changed or paused intake, so confirm availability first","Business files take more preparation time than most applications"],
  faq:[["Which business immigration option is right for me?","It depends on your net worth, business experience, investment plans and preferred province. We compare the options in a strategy consultation."],["Can I get a work permit while my business application is processed?","Some routes, including C11 and certain provincial streams, can include a work permit. We plan the sequence with you."]],
  rel:["pnp-entrepreneur","c11-work-permit","federal-program"]},
 {id:"pnp-entrepreneur",group:"Business Immigration",name:"PNP Entrepreneur",full:"PNP Entrepreneur Streams",img:"vancouver-aerial",layout:0,fee:null,
  tag:"Provincial entrepreneur and investor streams",
  h:"Invest in a province that invests in you.",
  intro:"Several provinces run entrepreneur streams for people who will start or buy a business and actively manage it. Most combine an expression of interest, a business performance agreement and a temporary work permit before nomination.",
  who:["Experienced business owners and senior managers","Investors ready to meet provincial net worth thresholds","Entrepreneurs with a defined business concept"],
  help:["Province and stream comparison","Business plan and net worth verification guidance","Expression of interest and application preparation","Performance agreement and nomination support"],
  consider:["Net worth and investment minimums vary by province","Provinces assess business plans closely","Nomination usually follows meeting agreed business commitments"],
  faq:[["Do I need to run the business myself?","Most entrepreneur streams require active, day-to-day management of the business in Canada."]],
  rel:["business-immigration","pnp","c11-work-permit"]},
 {id:"c11-work-permit",group:"Business Immigration",name:"C11 Work Permit",full:"C11 Owner-Operator Work Permit",img:"business",layout:1,fee:null,
  tag:"Significant benefit work permit for owner-operators",
  h:"Run your own Canadian business.",
  intro:"The C11 work permit is an LMIA-exempt option for entrepreneurs and self-employed people whose business will bring a significant benefit to Canada. A credible business plan and evidence of investment are central to approval.",
  who:["Entrepreneurs starting or acquiring a business in Canada","Owner-operators with majority ownership","Business owners planning a later permanent residence route"],
  help:["Significant benefit assessment","Business plan review and evidence planning","Work permit application and port of entry preparation","Planning the route to permanent residence"],
  consider:["Officers have wide discretion on significant benefit","Investment and job creation evidence strengthen the file","A C11 permit does not by itself lead to permanent residence"],
  faq:[["How much do I need to invest for a C11 work permit?","There is no fixed minimum, but officers expect an investment that makes the business viable and beneficial to Canada."]],
  rel:["business-immigration","pnp-entrepreneur","lmia-application"]},
 {id:"lmia-application",group:"Business Immigration",name:"LMIA",full:"LMIA Applications",img:"work",layout:2,fee:null,
  tag:"Labour Market Impact Assessments for employers",
  h:"Hire international talent with confidence.",
  intro:"A Labour Market Impact Assessment confirms that hiring a foreign worker will not harm the Canadian labour market. We support employers through recruitment requirements, wage rules and the ESDC application, then the worker's permit application.",
  who:["Canadian employers hiring foreign workers","Foreign workers with an employer willing to apply","Businesses managing several LMIA positions"],
  help:["Stream selection between high-wage and low-wage positions","Recruitment and advertising compliance","ESDC application and follow-up","Worker work permit application after approval"],
  consider:["Employers must meet advertising and wage requirements","Some regions and occupations face processing restrictions","Employers face compliance reviews after hiring"],
  faq:[["How long is an LMIA valid?","A positive LMIA must be used within its validity period for the worker to apply for a work permit. We plan timing with the employer."]],
  rel:["work-permit","c11-work-permit","business-immigration"]},
 {id:"federal-program",group:"Business Immigration",name:"Federal Program",full:"Federal Business Programs",img:"toronto-night",layout:0,fee:null,
  tag:"Federal routes for innovators and the self-employed",
  h:"Federal pathways for business founders.",
  intro:"Canada's federal business programs have historically included the Start-up Visa for innovative founders and a program for self-employed people in cultural and athletic activities. Intake and eligibility have changed recently, so we confirm what is open before recommending this route.",
  who:["Founders with support from a designated organization","Self-employed applicants in qualifying fields","Entrepreneurs comparing federal and provincial routes"],
  help:["Current program availability check","Eligibility and fit assessment","Application preparation where a program is open","Alternative pathway planning"],
  consider:["Federal business program intakes can be paused or capped","Designated organization support is required for the Start-up Visa","Provincial routes may be faster for some applicants"],
  faq:[["Is the Start-up Visa still open?","IRCC has adjusted this program in recent years. We confirm its current status at consultation before you invest in a plan."]],
  rel:["business-immigration","pnp-entrepreneur","c11-work-permit"]},
 {id:"refugee-claim",group:"Refugees & IRB",name:"Refugee Claim",full:"Refugee Claim & Appeal",img:"window",layout:1,fee:"CAD 7,000",feeNote:"RPD hearing representation",
  tag:"Confidential refugee representation",
  h:"Confidential help when it matters most.",
  intro:"People who fear persecution in their home country may be able to claim refugee protection in Canada. As an RCIC-IRB, Shoukat Halani can represent claimants at the Refugee Protection Division and the Refugee Appeal Division, and prepare PRRA and humanitarian applications.",
  who:["Claimants preparing a Basis of Claim form","Claimants with an upcoming RPD hearing","Applicants appealing a negative decision to the RAD","People facing removal who may qualify for a PRRA"],
  help:["Basis of Claim narrative preparation","Country conditions evidence","RPD hearing preparation and representation","RAD appeals, PRRA and H&C applications"],
  consider:["Deadlines for the Basis of Claim and appeals are strict","Credibility and consistency are central at the hearing","All information is handled in confidence"],
  faq:[["How soon should I get help with my refugee claim?","As early as possible. The Basis of Claim form has a short deadline and shapes the whole case."],["Is my information kept confidential?","Yes. Refugee files are handled with strict confidentiality."]],
  rel:["irb-hearings-appeals","humanitarian","status-extension"]},
 {id:"irb-hearings-appeals",group:"Refugees & IRB",name:"IRB Hearings & Appeals",full:"IRB Hearings & Appeals",img:"toronto-night",layout:2,fee:null,
  tag:"Representation at all four IRB divisions",
  h:"Representation before the Immigration and Refugee Board.",
  intro:"The Immigration and Refugee Board has four divisions: the Refugee Protection Division, the Refugee Appeal Division, the Immigration Division and the Immigration Appeal Division. Shoukat Halani is an RCIC-IRB, which allows him to represent clients before each of them.",
  who:["Refugee claimants and appellants","People facing admissibility hearings or detention reviews","Sponsors appealing refused family sponsorships","Permanent residents appealing removal orders"],
  help:["Hearing preparation and witness preparation","Written submissions and evidence packages","Representation at the hearing","Appeal strategy after a negative decision"],
  consider:["Each division has its own rules and deadlines","Preparation is the strongest factor within your control","Some matters may also require a lawyer for Federal Court review"],
  faq:[["What does RCIC-IRB mean?","It is a Regulated Canadian Immigration Consultant class licensed by the College of Immigration and Citizenship Consultants to represent clients before the IRB."],["Can you represent me at a sponsorship appeal?","Yes. Sponsorship appeals are heard at the Immigration Appeal Division, where RCIC-IRB consultants can represent clients."]],
  rel:["refugee-claim","humanitarian","spousal-sponsorship"]},
 {id:"humanitarian",group:"Refugees & IRB",name:"Humanitarian & Compassionate",full:"Humanitarian & Compassionate Applications",img:"friends",layout:0,fee:null,
  tag:"Permanent residence on H&C grounds",
  h:"When your circumstances deserve a closer look.",
  intro:"Humanitarian and compassionate applications ask IRCC to grant permanent residence based on factors such as establishment in Canada, the best interests of children and hardship if removed. These are discretionary decisions, so a carefully documented submission matters.",
  who:["People in Canada without a standard immigration pathway","Families with children who would face hardship","Long-term residents with strong establishment in Canada"],
  help:["Assessment of H&C factors in your case","Written submissions and supporting evidence","Coordination with other applications or appeals","Updates while the application is in process"],
  consider:["H&C decisions are discretionary and not guaranteed","An H&C application does not automatically stop removal","Evidence of establishment and children's interests is central"],
  faq:[["Can I apply for H&C if I was refused as a refugee?","Possibly, but there are timing restrictions after some refugee decisions. We review your history first."]],
  rel:["refugee-claim","irb-hearings-appeals","status-extension"]}
];
var SBY = {}; S.forEach(function(s){SBY[s.id]=s;});
var GROUPS = ["Temporary","Permanent Residence","Family Sponsorship","Business Immigration","Refugees & IRB"];

var REVIEWS = [
 {n:"Aazeen Karim",t:"3 months ago",q:"I am extremely satisfied with the services provided by Halani Immigration Services Inc. Their team is very knowledgeable and professional. They carefully reviewed all documents, provided clear guidance, and made the entire process smooth and stress-free. What impressed me the most was their responsiveness and dedication to ensuring everything was handled correctly."},
 {n:"Safia Ladhani",t:"3 months ago",q:"I had a great experience with Halani Immigration Services Inc. The team is highly professional, knowledgeable, and very supportive throughout the entire immigration process. They guided us step by step, ensured all documents were properly prepared, and answered all our questions patiently."},
 {n:"Minhas Lalani",t:"3 months ago",q:"Very professional immigration services. The consultation was clear and focused on practical advice instead of false promises. All my questions were answered patiently and I left with a much better understanding of the process. Highly recommended."},
 {n:"Dear World",t:"2 weeks ago",q:"I had a great consultation with Mr. Shoukat regarding my immigration process. He explained everything in a very clear, honest, and professional manner, helping me understand each step in detail. I really appreciated his realistic approach and valuable guidance."},
 {n:"Farhan Ali",t:"4 months ago",q:"Excellent experience with Halani Immigration Services Inc. They are knowledgeable, responsive, and truly care about clients. Everything was explained in simple language and the process was very smooth. Very honest and straightforward consultation. I liked that they clearly explained both strengths and risks of my application."}
];
var GMAPS = "https://maps.google.com/?cid=2912287405884149234";

var STORIES = [
 {n:"Ahmed Raza",from:"Lahore, Pakistan",svc:"Study Permit",q:"Got my study permit for Seneca College in 6 weeks. The team explained every document and kept me updated."},
 {n:"Priya Sharma",from:"Mumbai, India",svc:"Express Entry (PR)",q:"We received our PR through Express Entry. From profile creation to COPR, everything was clear and professional."},
 {n:"Hassan Mahmood",from:"Karachi, Pakistan",svc:"Work Permit",q:"LMIA-based work permit approved. I was nervous about the process but the consultant made it straightforward. Now working in Toronto."},
 {n:"Anjali Patel",from:"Ahmedabad, India",svc:"Study Permit",q:"Study permit for my master's at University of Toronto. They helped with SOP and financial docs. Visa came in 5 weeks."},
 {n:"Rahim Uddin",from:"Dhaka, Bangladesh",svc:"Provincial Nominee (PNP)",q:"PNP nomination and PR application handled smoothly. Regular updates and honest advice. My family is now in Canada."},
 {n:"Fatima Khan",from:"Islamabad, Pakistan",svc:"Visitor Visa",q:"Applied for visitor visa to attend my brother's graduation. Approved in 3 weeks. Very responsive and professional service."},
 {n:"Vikram Singh",from:"Delhi, India",svc:"Work Permit (LMIA exempt)",q:"Intra-company transfer work permit. Halani sorted all the paperwork and my family's dependent visas too. Smooth process."},
 {n:"Nasrin Akter",from:"Chittagong, Bangladesh",svc:"Study Permit",q:"Study permit for diploma in Canada. They guided me on GIC, medicals, and SOP. Got approval on first attempt."},
 {n:"Omar Farooq",from:"Dubai, UAE",svc:"Express Entry (PR)",q:"Applied from Dubai as outland applicant. PR process was transparent and we landed in Vancouver last month. Very grateful."},
 {n:"Sneha Reddy",from:"Hyderabad, India",svc:"Spousal Sponsorship",q:"My husband sponsored me from Canada. The consultant handled everything and we got approval without any hiccups."},
 {n:"Ayesha Malik",from:"Faisalabad, Pakistan",svc:"Super Visa",q:"Super Visa for my parents so they can visit for 5 years. Process was clear and both applications were approved."},
 {n:"Arjun Nair",from:"Bangalore, India",svc:"Work Permit",q:"Tech work permit for a Canadian company. From job offer to visa stamping, everything was coordinated well. Now in Mississauga."}
];

var POSTS = [
 {t:"Category-based draws: what changed in 2026.",cat:"Express Entry",kind:"Policy update",d:"Apr 18, 2026",r:"6 min read",x:"IRCC's category-based selection prioritizes healthcare, STEM and French-speaking candidates. Here is how to position your profile.",u:"/blog/category-based-draws-2026",img:"toronto-aerial"},
 {t:"Why most Super Visa refusals come down to one paragraph.",cat:"Super Visa",kind:"Practitioner's note",d:"Apr 11, 2026",r:"4 min read",x:"We see the same refusal language repeated across Super Visa files. The fix is in how you frame ties to home, not in more documents.",u:"/blog/super-visa-refusal-paragraph",img:"family"},
 {t:"Preparing for an RPD hearing: a 30-day checklist.",cat:"Refugee Protection",kind:"IRB guidance",d:"Apr 3, 2026",r:"8 min read",x:"From narrative refinement to country-conditions evidence, what an RCIC-IRB does in the month before a Refugee Protection Division hearing.",u:"/blog/rpd-hearing-30-day-checklist",img:"window"}
];
var GUIDES = [
 ["Express Entry Guide","/guides/express-entry-canada","Permanent Residence"],["Provincial Nominee Program Guide","/guides/provincial-nominee-program","Permanent Residence"],["Spousal Sponsorship Guide","/guides/spousal-sponsorship-canada","Family"],["Study Permit Guide","/guides/study-permit-canada","Temporary"],["Work Permit Guide","/guides/work-permit-canada","Temporary"],["Super Visa Guide","/guides/super-visa-canada","Family"],["Parents & Grandparents Guide","/guides/parents-grandparents-program-canada","Family"],["Business Immigration Guide","/guides/business-immigration-canada","Business"],["LMIA Guide","/guides/lmia-canada","Business"],["Canadian Citizenship Guide","/guides/canadian-citizenship","Permanent Residence"],["IRB Hearings & Appeals Guide","/guides/irb-hearings-canada","Refugees & IRB"],["Refugee Claim Guide","/guides/refugee-claim-canada","Refugees & IRB"]
];
var TOOLS = [
 ["Eligibility Quiz","Answer a few questions to see which pathways may fit your profile.","/tools/eligibility-quiz","quiz"],
 ["CRS Calculator","Estimate your Comprehensive Ranking System score for Express Entry.","/tools/crs-calculator","calc"],
 ["IRCC Processing Times","Check current processing estimates by application type.","/tools/processing-times","clock"],
 ["CLB Converter","Convert IELTS, CELPIP and other test results to CLB levels.","/tools/clb-converter","lang"],
 ["Fee Estimator","Estimate government and third-party fees for your application.","/tools/fee-estimator","doc"],
 ["Document Checklist","Build a checklist of documents for your application type.","/tools/document-checklist","list"],
 ["NOC Lookup (TEER)","Find the National Occupational Classification code for your job.","/tools/noc-lookup","search"],
 ["IRCC Data Dashboards","Explore IRCC open data on admissions and permits since 2015.","/data","chart"],
 ["Immigration Glossary","Plain-language definitions of the terms IRCC uses.","/glossary","book"]
];
var CITIES = ["Mississauga","Brampton","Scarborough","North York","Etobicoke","Markham","Vaughan","Hamilton","Ottawa","Calgary","Edmonton","Vancouver"];
var COUNTRIES = [["Pakistan","pakistan"],["India","india"],["Bangladesh","bangladesh"],["Sri Lanka","sri-lanka"],["UAE","uae"],["Saudi Arabia","saudi-arabia"],["Philippines","philippines"],["China","china"],["Vietnam","vietnam"],["Nigeria","nigeria"],["Kenya","kenya"],["Egypt","egypt"],["Iran","iran"],["United States","usa"],["United Kingdom","uk"]];

var IG="https://www.instagram.com/halaniimmigration/";
var REELS=[
 {u:"https://www.instagram.com/reel/Dee5oESN4ov/",img:"reel3",topic:"Work & PR",d:"Oct 14, 2026",t:"Supply chain careers and Canadian immigration",x:"Why supply chain, procurement, purchasing and logistics experience can matter more than you think for Canadian immigration."},
 {u:"https://www.instagram.com/reel/DeKNjzUNNmP/",img:"reel1",topic:"Study in Canada",d:"Oct 6, 2026",t:"Why North Bay? Choosing where to study",x:"Your location, community and long-term immigration strategy can matter as much as the university or program you pick."},
 {u:"https://www.instagram.com/reel/Dd3uyAGtsRS/",img:"reel2",topic:"Business Immigration",d:"Sep 29, 2026",t:"C11 work permit: what comes next?",x:"C11 is not a direct PR pathway, but depending on your profile there may be other routes toward permanent residence."}
];
var IGICON='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>';
function reelsSection(){
  return '<section class="sec reels-sec" aria-label="Instagram reels"><div class="wrap"><div class="sec-head split"><div class="stack" style="gap:16px"><span class="eyebrow" style="color:#FF9AA5">'+I.leaf+'Watch and learn</span><h2 class="h2">Short answers from Shoukat Halani.</h2></div><p class="lead">Quick explainers on study, work and business pathways, recorded by the founder in English and Urdu. Tap a reel to watch it on Instagram.</p></div>'+
   '<div class="reels">'+REELS.map(function(r){return '<a class="reel rv" href="'+r.u+'" target="_blank" rel="noopener" aria-label="Watch reel on Instagram: '+esc(r.t)+'"><div class="phone"><img src="img/'+r.img+'.jpg" alt="Reel cover: '+esc(r.t)+'" loading="lazy"><span class="badge">'+IGICON+'Reel</span></div><div class="meta"><span>'+esc(r.topic)+'</span><span>'+r.d+'</span></div><h3>'+esc(r.t)+'</h3><p>'+esc(r.x)+'</p><span class="watch">Watch on Instagram '+I.ext+'</span></a>';}).join("")+'</div>'+
   '<div class="reels-foot"><p>New explainers on <b style="color:#fff">@halaniimmigration</b></p><a class="btn btn-red" href="'+IG+'" target="_blank" rel="noopener">Follow on Instagram '+I.ext+'</a></div></div></section>';
}

/* ---------- shared fragments ---------- */
function crumbs(list){
  return '<nav aria-label="Breadcrumb"><ol class="crumbs"><li><a href="#home">Home</a></li>' + list.map(function(c,i){return i===list.length-1?'<li aria-current="page">'+esc(c[0])+'</li>':'<li><a href="#'+c[1]+'">'+esc(c[0])+'</a></li>';}).join("") + '</ol></nav>';
}
function pageHero(o){
  var cls = "phero" + (o.center?" center":"") + (o.img?"":" phero-plain");
  return '<section class="'+cls+'">' + (o.img?'<div class="bg"><img src="img/'+o.img+'.jpg" alt="'+esc(o.alt||"")+'"></div>':'') +
   '<div class="wrap"><div class="phero-in">' + crumbs(o.crumbs) + (o.eyebrow?'<span class="eyebrow" style="'+(o.img?'color:#FFB3BB':'')+'">'+I.leaf+esc(o.eyebrow)+'</span>':'') +
   '<h1 class="ph1">'+o.title+'</h1>' + (o.lead?'<p class="lead">'+o.lead+'</p>':'') + (o.extra||'') + '</div></div></section>';
}
function faqHtml(list){
  return '<div class="faq">' + list.map(function(f,i){var id="fq"+Math.random().toString(36).slice(2,8)+i;return '<div class="faq-item"><button class="faq-q" aria-expanded="false" aria-controls="'+id+'">'+esc(f[0])+'<i aria-hidden="true"></i></button><div class="faq-a" id="'+id+'" role="region"><div><p>'+esc(f[1])+'</p></div></div></div>';}).join("") + '</div>';
}
function ctaBand(h,p){
  return '<section class="cta-band"><div class="ctabg">'+I.leafLine+'</div>' +
   '<svg class="flight" viewBox="0 0 1600 600" preserveAspectRatio="none" aria-hidden="true"><path d="M-40 520 C 400 470, 700 330, 1050 260 S 1500 120, 1680 90" fill="none" stroke="rgba(255,255,255,.35)" stroke-width="1.2" stroke-dasharray="4 8" vector-effect="non-scaling-stroke"/></svg>' +
   '<div class="wrap cta-in"><span class="eyebrow" style="color:#FFD9DD">'+I.leaf+'Begin with clarity</span><h2>'+(h||'Your next chapter in Canada begins with one conversation.')+'</h2><p>'+(p||'Start with a free eligibility assessment, or book a strategy consultation with Shoukat Halani, RCIC-IRB.')+'</p><div class="ctas"><a class="btn btn-white" href="#apply">Start Your Assessment '+I.arrow+'</a><a class="btn btn-ghost" href="#contact">Contact Halani Immigration</a></div></div></section>';
}
function storyCard(s){
  return '<article class="story rv"><span class="tag">'+esc(s.svc)+'</span><blockquote>&ldquo;'+esc(s.q)+'&rdquo;</blockquote><div class="by"><div><b>'+esc(s.n)+'</b><span>'+esc(s.from)+'</span></div><span class="route-ic">'+I.plane.replace('<svg','<svg style="transform:rotate(90deg)"')+'Canada</span></div></article>';
}
function svcCard(s){
  return '<a class="scard rv" href="#'+s.id+'"><div class="img"><img src="img/'+s.img+'.jpg" alt="" loading="lazy"></div><div class="body"><span class="k">'+esc(s.group)+'</span><h3>'+esc(s.full)+'</h3><p>'+esc(s.tag)+'</p></div></a>';
}
function founderAside(){
  return '<div class="aside-founder"><img src="img/founder.jpg" alt="Shoukat Qumruddin Halani, RCIC-IRB"><div><b>Shoukat Qumruddin Halani</b><span>RCIC-IRB · CICC R711322</span></div></div>';
}
var DEMO_NOTE = 'Preview build: this form validates but does not send yet. At launch it connects to Halani’s existing intake system.';

/* ---------- pages ---------- */
var P = {};
P.home = function(){
  var tabs = [
   ["Visit Canada","Visitor visas and Super Visas","toronto-park","Tourism, family visits and long stays for parents and grandparents, prepared by a licensed RCIC.",["visitor-visa","super-visa","status-extension"]],
   ["Study in Canada","Study permits and PGWP","study","Study permits for designated learning institutions, with a clear plan from graduation to work.",["study-permit","pgwp"]],
   ["Work in Canada","Employer and open work permits","work","LMIA-based, LMIA-exempt and open work permits, plus support for employers hiring international talent.",["work-permit","lmia-application","pgwp"]],
   ["Permanent Residence","Express Entry, PNP, citizenship","toronto-aerial","Federal and provincial routes to permanent residence, and the final step to Canadian citizenship.",["express-entry","pnp","citizenship"]],
   ["Family Sponsorship","Spouses, partners, parents","lionsgate","Reunite with your spouse, partner, parents or grandparents, inland or outland.",["spousal-sponsorship","parents-grandparents","super-visa"]],
   ["Business Immigration","Entrepreneurs and investors","business","Provincial entrepreneur streams, C11 owner-operator permits and federal business routes.",["business-immigration","pnp-entrepreneur","c11-work-permit","federal-program"]],
   ["Refugee & IRB","Confidential representation","window","Refugee claims, RAD appeals and hearings at all four IRB divisions, led by an RCIC-IRB.",["refugee-claim","irb-hearings-appeals","humanitarian"]]
  ];
  window.__tabs = tabs;
  var tabBtns = tabs.map(function(t,i){return '<button class="ptab" role="tab" id="pt'+i+'" aria-controls="ppanel" aria-selected="'+(i===0)+'" tabindex="'+(i===0?0:-1)+'" data-tab="'+i+'"><span><b>'+t[0]+'</b><small>'+t[1]+'</small></span><span class="num">0'+(i+1)+'</span></button>';}).join("");
  var journey = [["Discover your options","Explore pathways and use the free eligibility assessment to see where you may fit."],["Speak with a consultant","Review your profile with Shoukat Halani, RCIC-IRB, and get an honest view of strengths and risks."],["Prepare your application","Build a complete, consistent file with a clear document plan and milestones."],["Submit with confidence","Every form and document is reviewed before it reaches IRCC or the IRB."],["Follow your progress","Stay informed with clear updates, and get help responding to any IRCC requests."]];
  return ''+
  '<section class="hero" aria-label="Introduction"><div class="bg" id="heroBg" role="img" aria-label="Toronto skyline across Lake Ontario at sunset"></div>'+
   '<div class="hero-art" aria-hidden="true"><svg viewBox="0 0 1600 190" preserveAspectRatio="none"><path id="heroPath" d="M-20 170 C 300 160, 560 80, 820 96 S 1250 40, 1640 20" fill="none" stroke="rgba(255,255,255,.55)" stroke-width="1.3" stroke-dasharray="5 9" vector-effect="non-scaling-stroke"/></svg></div>'+
   '<div class="wrap hero-in">'+
    '<span class="hero-badge rv-h"><i>'+I.leaf+'</i>Regulated Canadian Immigration Consultant · RCIC-IRB</span>'+
    '<h1 class="rv-h">Your Canadian dream <em>starts here.</em></h1>'+
    '<p class="lead rv-h">Explore your opportunities to visit, study, work, and build your future in Canada with professional guidance from Halani Immigration Services Inc.</p>'+
    '<div class="ctas rv-h"><a class="btn btn-red" href="#services">Explore Immigration Pathways '+I.arrow+'</a><a class="btn btn-ghost" href="#book">Book a Consultation</a></div>'+
   '</div>'+
   '<div class="hero-meta"><div class="wrap"><div><b>CICC Licence R711322</b>In good standing</div><div><b>All four IRB divisions</b>RPD · RAD · ID · IAD</div><div><b>Toronto office</b>1940 Eglinton Ave E</div><div><b>5.0 on Google</b><a href="'+GMAPS+'" target="_blank" rel="noopener" style="color:inherit">Read client reviews</a></div></div></div>'+
  '</section>'+

  '<section class="sec sec-white"><div class="wrap about-grid">'+
   '<div class="about-visual rv"><span class="leafmark">'+I.leaf+'</span><div class="big"><img src="img/toronto-park.jpg" alt="CN Tower and the Toronto skyline seen from a lakeside park" loading="lazy"></div>'+
    '<div class="about-card"><div class="who"><img src="img/founder.jpg" alt="Shoukat Qumruddin Halani, RCIC-IRB"><div><b>Shoukat Qumruddin Halani</b><small>Founder · RCIC-IRB</small></div></div><dl class="lic-row"><dt>Licence</dt><dd>R711322</dd><dt>Regulator</dt><dd>CICC</dd><dt>IRB authorization</dt><dd>All tribunals</dd></dl></div></div>'+
   '<div class="stack rv"><span class="eyebrow">'+I.leaf+'About Halani Immigration</span><h2 class="h2">A trusted guide for your Canadian journey.</h2>'+
    '<p class="lead">Halani Immigration provides honest, relevant and personalized immigration advice. Founder Shoukat Qumruddin Halani personally handles every file, treating each one as a project with a structured plan, defined milestones and clear documentation.</p>'+
    '<p style="color:var(--muted)">Consultations are available in English, Urdu, Hindi and Gujarati, among other languages. Clients across Canada, South Asia and the Gulf work with the practice remotely or at the Toronto office.</p>'+
    '<ul class="checks"><li>Licensed RCIC-IRB, CICC R711322</li><li>Free eligibility assessment</li><li>Transparent, published fees</li><li>Express Entry and PNP expertise</li><li>Family sponsorship and refugees</li><li>Study, work and business immigration</li></ul>'+
    '<div><a class="btn btn-line" href="#about-us">About Us '+I.arrow+'</a></div></div>'+
  '</div></section>'+

  '<section class="sec"><div class="wrap"><div class="sec-head split"><div class="stack" style="gap:16px"><span class="eyebrow">'+I.leaf+'Immigration pathways</span><h2 class="h2">Which journey are you starting?</h2></div><p class="lead">Choose a pathway to see how we can help, then open the service pages for eligibility, process and fees.</p></div>'+
   '<div class="explorer"><div class="ptabs" role="tablist" aria-label="Immigration pathways">'+tabBtns+'</div><div class="ppanel" id="ppanel" role="tabpanel" aria-labelledby="pt0"></div></div></div></section>'+

  '<section class="sec mapsec"><div class="wrap mapgrid">'+
   '<div class="stack"><span class="eyebrow">'+I.leaf+'From around the world to Canada</span><h2 class="h2">Clients arrive from everywhere. Futures take root across Canada.</h2><p class="lead">We serve clients in Pakistan, India, Bangladesh, the UAE, Saudi Arabia, Qatar and beyond, helping them settle in cities and provinces across the country.</p>'+
    '<div class="dest-list" id="destList"></div><div class="dest-info" id="destInfo" aria-live="polite"></div>'+
    '<p class="disclaimer" style="margin-top:0">Halani Immigration operates from one office in Toronto and serves clients remotely. City markers show where clients settle, not office locations.</p></div>'+
   '<div class="mapbox rv" id="mapbox"></div>'+
  '</div></section>'+

  '<section class="sec sec-white"><div class="wrap"><div class="sec-head center"><span class="eyebrow">'+I.leaf+'How it works</span><h2 class="h2">Your immigration journey.</h2><p class="lead">A clear, structured process. Every decision rests with IRCC or the IRB, so we focus on making your file as complete and credible as possible.</p></div>'+
   '<div class="timeline" id="timeline"><svg class="tl-line" viewBox="0 0 1000 80" preserveAspectRatio="none" aria-hidden="true"><path id="tlPath" d="M0 12 C 120 -10, 160 40, 250 12 S 400 -10, 500 12 S 650 40, 750 12 S 900 -10, 1000 12" fill="none" stroke="#C91F32" stroke-width="1.6" vector-effect="non-scaling-stroke" pathLength="1" stroke-dasharray="1" stroke-dashoffset="0"/></svg>'+
   journey.map(function(j,i){return '<div class="tstep rv"><span class="dot"></span><span class="n">STEP 0'+(i+1)+'</span><h3>'+j[0]+'</h3><p>'+j[1]+'</p></div>';}).join("")+'</div></div></section>'+

  '<section class="sec"><div class="wrap why"><div class="why-photo rv"><img src="img/business.jpg" alt="An advisor and client celebrating a completed application in a bright office" loading="lazy"></div>'+
   '<div class="stack"><span class="eyebrow">'+I.leaf+'Why choose Halani</span><h2 class="h2">Guidance you can rely on, from the first call to the final decision.</h2>'+
   '<blockquote class="quote rv">Immigration is rarely about the forms. It’s about whether the deciding officer believes the applicant.<cite>Shoukat Qumruddin Halani, RCIC-IRB</cite></blockquote>'+
   '<div class="why-list">'+[
     ["shield","Regulated representation","Licensed by the College of Immigration and Citizenship Consultants and authorized at all four IRB divisions."],
     ["eye","Transparent guidance","Clear explanations of both strengths and risks, with published fees and written quotes before you commit."],
     ["compass","Personalized strategy","A pathway plan built around your profile, family and goals, not a one-size-fits-all checklist."],
     ["doc","Careful preparation","Every file is handled personally by the founder, with milestones and documentation reviewed before submission."],
     ["globe","International client support","Consultations for clients across South Asia and the Gulf, available in several languages."]
   ].map(function(w){return '<div class="why-item rv"><span class="ic">'+I[w[0]]+'</span><div><h3>'+w[1]+'</h3><p>'+w[2]+'</p></div></div>';}).join("")+'</div></div></div></section>'+

  '<section class="sec sec-white"><div class="wrap"><div class="sec-head split"><div class="stack" style="gap:16px"><span class="eyebrow">'+I.leaf+'Client success stories</span><h2 class="h2">Real families. Real journeys.</h2></div><div class="stack" style="gap:16px"><p class="lead">Feedback from clients who received study permits, work permits, sponsorships and permanent residence.</p><a class="link" href="#success-stories">Read all success stories '+I.arrow.replace('<svg','<svg style="width:16px"')+'</a></div></div>'+
   '<div class="stories">'+STORIES.slice(0,3).map(storyCard).join("")+'</div><p class="disclaimer">Past results do not guarantee future outcomes. Every application is decided by IRCC or the IRB on its own merits.</p></div></section>'+

  reviewsSection()+

  '<section class="sec"><div class="wrap"><div class="sec-head split"><div class="stack" style="gap:16px"><span class="eyebrow">'+I.leaf+'Free immigration tools</span><h2 class="h2">Plan with real numbers.</h2></div><p class="lead">Halani’s free tools and IRCC data dashboards help you understand your options before you decide. Each opens the working tool.</p></div>'+
   '<div class="tools">'+TOOLS.slice(0,6).map(toolCard).join("")+'</div><p style="margin-top:22px"><a class="link" href="#tools">See all tools '+I.arrow.replace('<svg','<svg style="width:16px"')+'</a></p></div></section>'+

  '<section class="sec sec-white"><div class="wrap"><div class="sec-head center"><span class="eyebrow">'+I.leaf+'Canadian destinations</span><h2 class="h2">Where will your story continue?</h2><p class="lead">From the Toronto waterfront to the Rocky Mountains, Canada offers room to grow for students, workers and families.</p></div>'+
   '<div class="dests">'+
    '<a class="dest tall rv" href="#express-entry"><img src="img/toronto-aerial.jpg" alt="Aerial view of downtown Toronto and the CN Tower at sunset" loading="lazy"><div><b>Toronto, Ontario</b><span>Canada’s largest city and a home base for many newcomers</span></div></a>'+
    '<a class="dest rv" href="#study-permit"><img src="img/vancouver.jpg" alt="Vancouver waterfront skyline reflected in the harbour" loading="lazy"><div><b>Vancouver, BC</b><span>Coastal living and a strong tech sector</span></div></a>'+
    '<a class="dest rv" href="#citizenship"><img src="img/montreal.jpg" alt="Montreal skyline at dusk" loading="lazy"><div><b>Montreal, Quebec</b><span>Bilingual culture and world-class universities</span></div></a>'+
    '<a class="dest rv" href="#pnp"><img src="img/rockies.jpg" alt="Mountain lake in the Canadian Rockies" loading="lazy"><div><b>Alberta Rockies</b><span>Provincial pathways beyond the big cities</span></div></a>'+
    '<a class="dest rv" href="#spousal-sponsorship"><img src="img/lionsgate.jpg" alt="Lions Gate Bridge crossing Burrard Inlet near Vancouver" loading="lazy"><div><b>British Columbia</b><span>Family reunification across the province</span></div></a>'+
   '</div></div></section>'+

  reelsSection()+
  '<section class="sec"><div class="wrap"><div class="sec-head split"><div class="stack" style="gap:16px"><span class="eyebrow">'+I.leaf+'Latest immigration insights</span><h2 class="h2">Written by a working RCIC-IRB.</h2></div><p class="lead">Practical updates on Express Entry draws, IRCC policy changes and IRB hearings.</p></div>'+
   articlesGrid()+'</div></section>'+
  ctaBand();
};

function reviewsSection(){
  return '<section class="sec reviews" aria-label="Google reviews"><svg class="bgleaf" viewBox="80 70 580 590" aria-hidden="true"><use href="#leafLine"/></svg><div class="wrap">'+
   '<div class="rev-top"><div class="stack" style="gap:16px"><span class="eyebrow" style="color:#FFD9DD">'+I.leaf+'Google reviews</span><h2 class="h2">What our clients say.</h2></div>'+
   '<div class="rating"><span class="g">G</span><div><b>5.0</b> <span class="stars" aria-label="5 out of 5 stars">★★★★★</span><div style="font-size:13px;opacity:.85">Rated on Google Business Profile</div></div></div></div>'+
   '<div class="car" id="car"><div class="car-view"><div class="car-track" id="carTrack">'+REVIEWS.map(function(r){var ini=r.n.split(" ").map(function(x){return x[0];}).join("").slice(0,2);return '<article class="rev"><span class="stars" style="color:#E3A21A" aria-label="5 stars">★★★★★</span><p>&ldquo;'+esc(r.q)+'&rdquo;</p><div class="who"><span class="av">'+ini+'</span><div><b>'+esc(r.n)+'</b><span>'+esc(r.t)+'</span></div><span class="src">Google</span></div></article>';}).join("")+'</div></div>'+
   '<div class="car-ctrl"><button class="arr" id="carPrev" aria-label="Previous review"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M11 6l-6 6 6 6"/></svg></button><button class="arr" id="carNext" aria-label="Next review">'+I.arrow+'</button><div class="dots" id="carDots"></div><a class="btn btn-ghost" href="'+GMAPS+'" target="_blank" rel="noopener">See all reviews on Google '+I.ext+'</a></div></div></div></section>';
}
function toolCard(t){return '<a class="tool rv" href="'+ext(t[2])+'" target="_blank" rel="noopener"><span class="ti">'+I[t[3]]+'</span><h3>'+t[0]+'</h3><p>'+t[1]+'</p><span class="go">Open tool '+I.ext+'</span></a>';}
function articlesGrid(){
  var f=POSTS[0];
  return '<div class="articles"><a class="art feature rv" href="'+ext(f.u)+'" target="_blank" rel="noopener"><div class="img"><img src="img/'+f.img+'.jpg" alt="" loading="lazy"></div><div class="body"><div class="meta"><span class="cat">'+f.cat+'</span><span>'+f.d+'</span><span>'+f.r+'</span></div><h3>'+esc(f.t)+'</h3><p>'+esc(f.x)+'</p><span class="link">Read article '+I.ext+'</span></div></a>'+
   POSTS.slice(1).map(function(p){return '<a class="art rv" href="'+ext(p.u)+'" target="_blank" rel="noopener"><div class="meta"><span class="cat">'+p.cat+'</span><span>'+p.d+'</span><span>'+p.r+'</span></div><h3>'+esc(p.t)+'</h3><p>'+esc(p.x)+'</p><span class="link">Read article '+I.ext+'</span></a>';}).join("")+'</div>';
}

P["about-us"] = function(){
  return pageHero({img:"toronto-park",alt:"Toronto skyline from a lakeside park",crumbs:[["About Us"]],eyebrow:"About Halani Immigration",title:"Ethical, reliable, professional immigration guidance.",lead:"Halani Immigration Services Inc. is a Toronto-based immigration consultancy founded by Shoukat Qumruddin Halani, a Regulated Canadian Immigration Consultant authorized at the Immigration and Refugee Board."})+
  '<section class="sec sec-white"><div class="wrap content-grid"><div class="prose rv"><span class="eyebrow">'+I.leaf+'Our practice</span><h2 class="h2" style="margin-top:0">Every file handled personally.</h2>'+
   '<p>Halani Immigration exists to provide ethical, reliable and professional immigration guidance. We are committed to helping you find the best pathway to Canada, whether you are seeking a visitor visa, study permit, work permit or permanent residence.</p>'+
   '<p>There are no junior associates passing your file along. The founder handles every case directly and runs it like a project: a structured plan, defined milestones and clear documentation at each stage. His background in accounting brings an analytical approach to eligibility, finances and evidence.</p>'+
   '<p>You do not pay for representation until you are sure you want to proceed. Start with a free eligibility assessment or a free 15-minute discovery call.</p>'+
   '<div class="boxgrid"><div class="box"><h3>What we do</h3><ul><li>Temporary residence: visit, study and work</li><li>Permanent residence and citizenship</li><li>Family sponsorship</li><li>Business immigration</li><li>Refugee claims and IRB representation</li></ul></div><div class="box red"><h3>How we work</h3><ul><li>Honest assessment of strengths and risks</li><li>Flat, published professional fees</li><li>Trust account with milestone billing</li><li>Consultations in your first language</li></ul></div></div>'+
   '<h2>Not a government agency</h2><p>Halani Immigration Services Inc. is a private immigration consultancy. We are not affiliated with the Government of Canada, IRCC or the IRB, and no consultant can guarantee an approval.</p></div>'+
   '<aside class="aside"><div class="aside-card">'+founderAside()+'<p style="color:var(--muted);font-size:14.5px">Founder and principal. Authorized to represent clients at the RPD, RAD, ID and IAD.</p><a class="btn btn-line" href="#about-shoukat-halani">Meet the Founder</a></div><div class="aside-card"><h3>Start with clarity</h3><a class="btn btn-red" href="#apply">Free Eligibility Assessment</a><a class="btn btn-line" href="#book">Book a Consultation</a></div></aside></div></section>'+
  reviewsSection()+ctaBand();
};

P["about-shoukat-halani"] = function(){
  return '<section class="sec sec-white" style="padding-top:clamp(50px,7vw,90px)"><div class="wrap">'+crumbs([["About Us","about-us"],["Meet the Founder"]]).replace('class="crumbs"','class="crumbs" style="color:var(--muted);margin-bottom:40px"')+
   '<div class="founder-hero"><div class="portrait rv"><span class="ring"></span><img src="img/founder.jpg" alt="Portrait of Shoukat Qumruddin Halani"><span class="badge">RCIC-IRB</span></div>'+
   '<div class="stack"><span class="eyebrow">'+I.leaf+'Meet the founder</span><h1 class="ph1 h2" style="font-size:clamp(40px,5.6vw,72px)">Shoukat Qumruddin Halani</h1><p class="lead">Regulated Canadian Immigration Consultant, CICC Licence R711322. Founder and principal of Halani Immigration Services Inc.</p>'+
   '<blockquote class="quote">That belief is built one document, one paragraph, one defensible fact at a time.<cite>Shoukat Qumruddin Halani</cite></blockquote></div></div></div></section>'+
  '<section class="sec"><div class="wrap content-grid"><div class="prose rv"><h2 style="margin-top:0">Background</h2>'+
   '<p>Before becoming a licensed immigration consultant, Shoukat Halani worked in accounting, fundraising management and international education consulting. That mix shapes his practice today: analytical about eligibility and finances, and focused on how each application reads to the officer who decides it.</p>'+
   '<p>He handles every file personally. Each case is managed as a project with a structured plan, defined milestones and clear documentation. Consultations can be held in the client’s first language.</p>'+
   '<h2>Credentials</h2><div class="creds">'+[
     ["Regulated Canadian Immigration Consultant","CICC Licence R711322"],["IRB authorization","RPD, RAD, ID and IAD"],["ICEF Certified International Education Consultant","CCG #1851"],["Certified Fund Raising Executive","CFRE"],["Blackbaud Certified Raiser’s Edge Professional","bCRE-Pro"],["Fellow Member","FCMA, ICMA Pakistan"]
   ].map(function(c){return '<div><b>'+c[0]+'</b><span>'+c[1]+'</span></div>';}).join("")+'</div>'+
   '<p class="verify">Licence status can be confirmed on the <a href="https://register.college-ic.ca/" target="_blank" rel="noopener">CICC public register</a>.</p>'+
   '<h2>Who he works with</h2><p>Clients in Canada, Pakistan, India, the UAE, Saudi Arabia, Qatar and other countries, across temporary residence, permanent residence, family sponsorship, business immigration and refugee protection.</p></div>'+
   '<aside class="aside"><div class="aside-card"><h3>Speak with Shoukat</h3><p style="color:var(--muted);font-size:14.5px">Book a 60-minute strategy consultation or start with a free 15-minute discovery call.</p><a class="btn btn-red" href="#book">Book a Consultation</a><a class="btn btn-line" href="#apply">Free Assessment</a></div></aside></div></section>'+ctaBand();
};

P.services = function(){
  return pageHero({img:"wing",alt:"Airplane wing above the clouds at sunrise",crumbs:[["Immigration Services"]],eyebrow:"Immigration services",title:"Every pathway to Canada, under one regulated consultant.",lead:"From a first visitor visa to citizenship, and from business immigration to IRB hearings. Choose a service to see who it is for, how we help and what to consider."})+
  '<section class="sec"><div class="wrap">'+GROUPS.map(function(g){var list=S.filter(function(s){return s.group===g;});return '<div class="group-title rv"><h2>'+g+'</h2><span>'+list.length+' services</span></div><div class="cards">'+list.map(svcCard).join("")+'</div>';}).join("")+'</div></section>'+ctaBand();
};

P.service = function(s){
  var relHtml = '<div class="cards">'+s.rel.map(function(r){return SBY[r]?svcCard(SBY[r]):"";}).join("")+'</div>';
  var feeBlock = s.fee ? '<div class="fee">'+s.fee+'<small>'+(s.feeNote?esc(s.feeNote)+'. ':'')+'Flat professional fee for full representation. Government and third-party fees are separate. <a href="#fees" style="color:var(--red)">See all fees</a></small></div>' : '<div class="fee" style="font-size:28px">Quoted per file<small>Fees for this service are quoted after assessment. <a href="#fees" style="color:var(--red)">See the fee schedule</a></small></div>';
  var aside = '<aside class="aside"><div class="aside-card"><span class="eyebrow">'+I.leaf+'Professional fee</span>'+feeBlock+'<a class="btn btn-red" href="#apply">Free Eligibility Assessment</a><a class="btn btn-line" href="#book">Book a Strategy Consultation</a></div><div class="aside-card">'+founderAside()+'<p style="color:var(--muted);font-size:14px">Your file is prepared and reviewed personally by the founder.</p></div></aside>';
  var body = '<div class="prose"><span class="eyebrow">'+I.leaf+'Overview</span><h2 style="margin-top:0">'+esc(s.full)+'</h2><p>'+esc(s.intro)+'</p>'+
    '<div class="boxgrid rv"><div class="box"><h3>Who it’s for</h3><ul>'+s.who.map(function(x){return '<li>'+esc(x)+'</li>';}).join("")+'</ul></div><div class="box red"><h3>How we help</h3><ul>'+s.help.map(function(x){return '<li>'+esc(x)+'</li>';}).join("")+'</ul></div></div>'+
    '<h2>Things to consider</h2><ul class="rv">'+s.consider.map(function(x){return '<li>'+esc(x)+'</li>';}).join("")+'</ul>'+
    '<p class="verify">Program rules change often. Requirements on this page are confirmed against current IRCC guidance during your consultation.</p>'+
    '<h2>Frequently asked questions</h2>'+faqHtml(s.faq)+'</div>';
  var cr = [["Services","services"],[s.name]];
  var hero;
  if (s.layout===0){
    hero = '<section class="phero-split-wrap"><div class="wrap"><div class="phero-split"><div class="txt">'+crumbs(cr)+'<span class="eyebrow">'+I.leaf+esc(s.group)+'</span><h1 class="ph1">'+esc(s.h)+'</h1><p class="lead">'+esc(s.tag)+'.</p><div class="pill-row"><a class="btn btn-red" href="#apply">Check Your Eligibility '+I.arrow+'</a><a class="btn btn-line" href="#book">Book a Consultation</a></div></div><div class="pic"><img src="img/'+s.img+'.jpg" alt=""><span class="tagline">'+esc(s.full)+'</span></div></div></div></section>';
  } else if (s.layout===1){
    hero = pageHero({img:s.img,crumbs:cr,eyebrow:s.full,title:esc(s.h),lead:esc(s.tag)+'.',center:true,extra:'<div class="pill-row" style="justify-content:center"><a class="btn btn-red" href="#apply">Check Your Eligibility '+I.arrow+'</a><a class="btn btn-ghost" href="#book">Book a Consultation</a></div>'});
  } else {
    hero = pageHero({img:s.img,crumbs:cr,eyebrow:s.group,title:esc(s.h),lead:esc(s.intro.split(". ")[0])+'.',extra:'<div class="pill-row"><a class="btn btn-red" href="#apply">Check Your Eligibility '+I.arrow+'</a><a class="btn btn-ghost" href="#book">Book a Consultation</a></div>'});
  }
  var mid = s.layout===2 ? '<section class="sec-white" style="border-bottom:1px solid var(--line)"><div class="wrap" style="display:grid;grid-template-columns:auto 1fr;gap:clamp(20px,4vw,60px);align-items:center;padding-block:46px"><span class="big-num" aria-hidden="true">'+String(S.indexOf(s)+1).padStart(2,"0")+'</span><p class="lead" style="font-family:var(--serif);color:var(--ink);font-size:clamp(22px,2.4vw,30px);line-height:1.3">'+esc(s.tag)+', prepared and reviewed by a licensed RCIC-IRB.</p></div></section>' : '';
  return hero+mid+'<section class="sec '+(s.layout===1?'sec-white':'')+'"><div class="wrap content-grid">'+body+aside+'</div></section>'+
   '<section class="sec '+(s.layout===1?'':'sec-white')+'" style="padding-top:clamp(50px,6vw,80px)"><div class="wrap"><div class="sec-head"><span class="eyebrow">'+I.leaf+'Related services</span><h2 class="h2" style="font-size:clamp(30px,3.6vw,44px)">You may also need</h2></div>'+relHtml+'</div></section>'+ctaBand();
};

P["success-stories"] = function(){
  return pageHero({img:"family",alt:"A family watching the sunset together on a beach",crumbs:[["Success Stories"]],eyebrow:"Client success stories",title:"Approvals that changed lives.",lead:"Feedback from clients across South Asia and the Gulf who received visas, permits, sponsorships and permanent residence."})+
  '<section class="sec"><div class="wrap"><div class="filters" id="storyFilters" style="margin-bottom:30px"></div><div class="stories" id="storyGrid"></div><p class="disclaimer">Shared with client permission as published on halaniimmigration.com. Past results do not guarantee future outcomes. Every application is decided by IRCC or the IRB on its own merits.</p></div></section>'+ctaBand();
};
P.testimonials = function(){
  return pageHero({crumbs:[["Testimonials"]],eyebrow:"Testimonials",title:"Reviewed by the people we serve.",lead:"Verified reviews from Halani Immigration’s Google Business Profile, rated 5.0."})+
  reviewsSection()+'<section class="sec"><div class="wrap"><div class="sec-head"><span class="eyebrow">'+I.leaf+'More client stories</span><h2 class="h2">In their own words.</h2></div><div class="stories">'+STORIES.slice(3,9).map(storyCard).join("")+'</div><p class="disclaimer">Past results do not guarantee future outcomes.</p></div></section>'+ctaBand();
};
P.tools = function(){
  return pageHero({img:"toronto-night",alt:"Toronto skyline at night",crumbs:[["Immigration Tools"]],eyebrow:"Free tools and data",title:"Plan with real numbers, not guesswork.",lead:"Halani’s free calculators, checklists and IRCC open-data dashboards. Each tool opens in its working version."})+
  '<section class="sec"><div class="wrap"><div class="tools">'+TOOLS.map(toolCard).join("")+'</div><p class="disclaimer">Tool results are estimates for planning only. They are not an eligibility decision or legal advice.</p></div></section>'+ctaBand();
};
P.guides = function(){
  var cats=["All"].concat(GUIDES.map(function(g){return g[2];}).filter(function(v,i,a){return a.indexOf(v)===i;}));
  return pageHero({crumbs:[["Immigration Guides"]],eyebrow:"Immigration guides",title:"Plain-language guides to every major pathway.",lead:"In-depth guides written by a practising RCIC-IRB."})+
  '<section class="sec"><div class="wrap"><div class="filters" id="guideFilters" style="margin-bottom:28px">'+cats.map(function(c,i){return '<button aria-pressed="'+(i===0)+'" data-cat="'+c+'">'+c+'</button>';}).join("")+'</div><div class="cards" id="guideGrid">'+GUIDES.map(function(g){return '<a class="art rv" data-cat="'+g[2]+'" href="'+ext(g[1])+'" target="_blank" rel="noopener"><div class="meta"><span class="cat">'+g[2]+'</span></div><h3>'+g[0]+'</h3><span class="link">Read guide '+I.ext+'</span></a>';}).join("")+'</div></div></section>'+ctaBand();
};
P.blog = function(){
  var cats=["All"].concat(POSTS.map(function(p){return p.cat;}));
  return pageHero({img:"toronto-aerial",alt:"Downtown Toronto aerial view",crumbs:[["Blog & News"]],eyebrow:"Immigration insights",title:"Immigration news, written by practitioners.",lead:"Practical updates on Express Entry draws, IRCC policy changes and IRB hearings. No fluff, no clickbait."})+
  '<section class="sec"><div class="wrap"><div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:space-between;align-items:center;margin-bottom:30px"><div class="search">'+I.search+'<label for="blogQ" class="skip">Search articles and guides</label><input id="blogQ" type="search" placeholder="Search articles and guides"></div><div class="filters" id="blogFilters">'+cats.map(function(c,i){return '<button aria-pressed="'+(i===0)+'" data-cat="'+c+'">'+c+'</button>';}).join("")+'</div></div><div class="cards" id="blogGrid"></div><p style="margin-top:28px"><a class="link" href="'+ext("/blog")+'" target="_blank" rel="noopener">View the full archive '+I.ext+'</a></p></div></section>'+reelsSection()+ctaBand();
};
P.fees = function(){
  var rows=[["Temporary visas & permits",[["Visitor Visa application","CAD 800"],["Study Permit application","CAD 1,500"],["Post-Graduation Work Permit (PGWP)","CAD 1,500"],["Work Permit (LMIA-based)","CAD 2,000"]]],["Permanent residence",[["Canadian Citizenship application","CAD 1,200"],["Spousal Sponsorship","CAD 2,950"],["Express Entry (full application)","CAD 3,850"],["Provincial Nominee Program (PNP)","CAD 6,000"]]],["Refugee & IRB",[["RPD hearing representation","CAD 7,000"]]]];
  return pageHero({crumbs:[["Our Fees"]],eyebrow:"Transparent fees",title:"Clear, flat professional fees.",lead:"Published prices for full representation, held in trust and released as work is completed. Your firm quote appears in your engagement letter."})+
  '<section class="sec"><div class="wrap content-grid"><div class="prose">'+
   '<h2 style="margin-top:0">Consultations</h2><div class="tbl-wrap"><table><thead><tr><th>Option</th><th>Details</th><th class="num">Fee</th></tr></thead><tbody><tr><td><b>Free eligibility assessment</b></td><td>Online assessment of your goals and profile</td><td class="num">Free</td></tr><tr><td><b>Discovery call</b></td><td>15-minute introductory call</td><td class="num">Free</td></tr><tr><td><b>Initial consultation</b></td><td>60 minutes with the RCIC, written summary within 48 hours, credited toward your retainer if you retain within 30 days</td><td class="num">CAD 250</td></tr><tr><td><b>Hourly consultation or drafting</b></td><td>Drafting, review or advice on specific tasks</td><td class="num">CAD 350/hr</td></tr></tbody></table></div>'+
   rows.map(function(g){return '<h2>'+g[0]+'</h2><div class="tbl-wrap"><table><thead><tr><th>Service</th><th class="num">Full representation</th></tr></thead><tbody>'+g[1].map(function(r){return '<tr><td>'+r[0]+'</td><td class="num">'+r[1]+'</td></tr>';}).join("")+'</tbody></table></div>';}).join("")+
   '<p>Super Visa, Parents & Grandparents, PNP Entrepreneur, C11, LMIA, Federal Program, Refugee Claim and IRB Appeals are quoted per file after assessment. Document review packages are also quoted per file.</p>'+
   '<h2>Payment terms</h2><ul><li>Typical schedule: 30% on engagement, 40% on submission, 30% on decision or landing</li><li>Fees are paid into a trust account and released as milestones are completed</li><li>Payment plans and family discounts are available for most services</li><li>Government fees (processing, RPRF, biometrics) and third-party costs (medicals, language tests, ECA) are paid separately</li><li>Completed work is not refunded if an application is refused</li></ul></div>'+
   '<aside class="aside"><div class="aside-card"><h3>Not sure where to start?</h3><p style="color:var(--muted);font-size:14.5px">Take the free eligibility assessment first. There is no fee and no commitment.</p><a class="btn btn-red" href="#apply">Free Eligibility Assessment</a><a class="btn btn-line" href="#book">Book a Consultation</a></div></aside></div></section>'+ctaBand();
};
P["immigration-consultant"] = function(){
  return pageHero({img:"vancouver-aerial",alt:"Vancouver downtown and marinas from above",crumbs:[["Service Areas"]],eyebrow:"Areas we serve",title:"Toronto-based. Serving clients across Canada and abroad.",lead:"Consultations are available in person at our Toronto office or remotely, wherever you are."})+
  '<section class="sec"><div class="wrap"><div class="group-title"><h2>Across Canada</h2><span>'+CITIES.length+' cities</span></div><div class="areas">'+CITIES.map(function(c){return '<a class="area" href="'+ext("/immigration-consultant/"+c.toLowerCase().replace(/ /g,"-"))+'" target="_blank" rel="noopener">'+c+I.leaf+'</a>';}).join("")+'</div>'+
  '<div class="group-title"><h2>Immigrate to Canada from</h2><span>'+COUNTRIES.length+' countries</span></div><div class="areas">'+COUNTRIES.map(function(c){return '<a class="area" href="'+ext("/immigrate-to-canada-from-"+c[1])+'" target="_blank" rel="noopener">'+c[0]+I.leaf+'</a>';}).join("")+'</div></div></section>'+ctaBand();
};
P.apply = function(){
  var goals=[["visit","Visit","Visitor visa, Super Visa"],["study","Study","Study permit, PGWP"],["work","Work","Work permits, LMIA"],["pr","Permanent residence","Express Entry, PNP"],["family","Family sponsorship","Spouse, parents"],["business","Business","Entrepreneur, C11"],["citizenship","Citizenship","PR to citizen"],["refugee","Refugee or IRB","Claims, hearings"]];
  return pageHero({crumbs:[["Free Eligibility Assessment"]],eyebrow:"Free eligibility assessment",title:"Tell us about your goals.",lead:"Three short steps. There is no fee and no commitment. A licensed consultant reviews your answers personally."})+
  '<section class="sec"><div class="wrap content-grid"><div class="form-shell"><div class="steps-bar" aria-hidden="true"><div class="on"></div><div></div><div></div></div>'+
   '<form id="assessForm" class="form" novalidate>'+
   '<fieldset class="fstep" data-step="0" style="border:0;padding:0;margin:0;display:grid;gap:18px"><legend class="h3" style="margin-bottom:6px">What would you like to do in Canada?</legend><div class="goal-grid">'+goals.map(function(g){return '<div class="goal"><input type="checkbox" id="g-'+g[0]+'" name="goal" value="'+g[1]+'"><label for="g-'+g[0]+'">'+g[1]+'<span>'+g[2]+'</span></label></div>';}).join("")+'</div><div class="field" data-f="goal"><span class="msg" aria-live="polite"></span></div></fieldset>'+
   '<fieldset class="fstep" data-step="1" hidden style="border:0;padding:0;margin:0;display:grid;gap:18px"><legend class="h3" style="margin-bottom:6px">About you</legend><div class="frow"><div class="field"><label for="a-country">Country of residence</label><input id="a-country" name="country" autocomplete="country-name" required></div><div class="field"><label for="a-age">Age range</label><select id="a-age" name="age" required><option value="">Select</option><option>Under 18</option><option>18 to 29</option><option>30 to 39</option><option>40 to 49</option><option>50 or older</option></select></div></div><div class="frow"><div class="field"><label for="a-edu">Highest education</label><select id="a-edu" name="edu"><option value="">Select</option><option>Secondary</option><option>Diploma or certificate</option><option>Bachelor’s degree</option><option>Master’s degree</option><option>Doctorate</option></select></div><div class="field"><label for="a-lang">English or French test taken?</label><select id="a-lang" name="lang"><option value="">Select</option><option>Yes, within the last 2 years</option><option>Not yet</option></select></div></div><div class="field"><label for="a-notes">Anything else we should know?</label><textarea id="a-notes" name="notes" placeholder="Previous applications, family in Canada, job offers..."></textarea></div></fieldset>'+
   '<fieldset class="fstep" data-step="2" hidden style="border:0;padding:0;margin:0;display:grid;gap:18px"><legend class="h3" style="margin-bottom:6px">How can we reach you?</legend><div class="frow"><div class="field"><label for="a-name">Full name</label><input id="a-name" name="name" autocomplete="name" required></div><div class="field"><label for="a-email">Email</label><input id="a-email" name="email" type="email" autocomplete="email" required></div></div><div class="field"><label for="a-phone">Phone or WhatsApp</label><input id="a-phone" name="phone" type="tel" autocomplete="tel"></div><label style="display:flex;gap:10px;font-size:14px;align-items:flex-start"><input type="checkbox" id="a-consent" required style="margin-top:4px"> I understand this assessment is not an eligibility decision, and I agree to be contacted about my enquiry.</label><div class="field" data-f="consent"><span class="msg" aria-live="polite"></span></div></fieldset>'+
   '<div id="assessMsg" aria-live="polite"></div><div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap"><button type="button" class="btn btn-line" id="aBack" hidden>Back</button><button type="submit" class="btn btn-red" id="aNext" style="margin-left:auto">Continue '+I.arrow+'</button></div></form></div>'+
   '<aside class="aside"><div class="aside-card">'+founderAside()+'<p style="color:var(--muted);font-size:14.5px">Your answers are reviewed by a licensed RCIC, never an automated eligibility engine. Results are guidance, not a decision.</p></div><div class="aside-card"><h3>Prefer a quick score?</h3><a class="btn btn-line" href="'+ext("/tools/eligibility-quiz")+'" target="_blank" rel="noopener">Eligibility Quiz '+I.ext+'</a><a class="btn btn-line" href="'+ext("/tools/crs-calculator")+'" target="_blank" rel="noopener">CRS Calculator '+I.ext+'</a></div></aside></div></section>';
};
P.book = function(){
  return pageHero({crumbs:[["Book a Consultation"]],eyebrow:"Book a consultation",title:"Choose the conversation that fits.",lead:"Start with a free 15-minute discovery call, or book a full 60-minute strategy consultation with Shoukat Halani, RCIC-IRB."})+
  '<section class="sec"><div class="wrap content-grid"><div class="form-shell"><form id="bookForm" class="form" novalidate>'+
   '<div class="type-cards" role="group" aria-label="Consultation type"><button type="button" class="type-card" aria-pressed="true" data-type="Discovery call (15 min, free)"><span class="eyebrow">15 minutes</span><b>Discovery call</b><span class="price">Free</span><p>A short introductory call to see whether Halani Immigration is a good fit for your goals.</p></button><button type="button" class="type-card" aria-pressed="false" data-type="Strategy consultation (60 min, CAD 250)"><span class="eyebrow">60 minutes</span><b>Strategy consultation</b><span class="price">CAD 250</span><p>Eligibility analysis, pathway recommendations, document checklist and a written summary within 48 hours. Credited to your retainer within 30 days.</p></button></div>'+
   '<div class="field"><span style="font-size:13px;font-weight:700">Preferred day</span><div class="days" id="days" role="group" aria-label="Preferred day"></div></div>'+
   '<div class="field"><span style="font-size:13px;font-weight:700">Preferred time (Toronto time)</span><div class="slots" id="slots" role="group" aria-label="Preferred time"></div></div>'+
   '<div class="frow"><div class="field"><label for="b-name">Full name</label><input id="b-name" autocomplete="name" required></div><div class="field"><label for="b-email">Email</label><input id="b-email" type="email" autocomplete="email" required></div></div>'+
   '<div class="frow"><div class="field"><label for="b-phone">Phone or WhatsApp</label><input id="b-phone" type="tel" autocomplete="tel"></div><div class="field"><label for="b-topic">Topic</label><select id="b-topic"><option>Visit or Super Visa</option><option>Study or PGWP</option><option>Work permit or LMIA</option><option>Express Entry or PNP</option><option>Family sponsorship</option><option>Business immigration</option><option>Citizenship</option><option>Refugee or IRB matter</option></select></div></div>'+
   '<div id="bookMsg" aria-live="polite"></div><button class="btn btn-red" type="submit" style="justify-self:start">Request this time '+I.arrow+'</button><p class="form-note">Requests are confirmed by email. Office hours are Monday to Saturday, 9:00 to 18:00 Toronto time.</p></form></div>'+
   '<aside class="aside"><div class="aside-card">'+founderAside()+'<p style="color:var(--muted);font-size:14.5px">Consultations are available in person in Toronto or online, in several languages.</p></div><div class="aside-card"><h3>Not ready to book?</h3><a class="btn btn-line" href="#apply">Free Eligibility Assessment</a></div></aside></div></section>';
};
P.contact = function(){
  return pageHero({img:"toronto-night",alt:"Toronto at night",crumbs:[["Contact Us"]],eyebrow:"Contact",title:"Let’s talk about your next step.",lead:"Reach the Toronto office by phone, email or WhatsApp, or send a message below."})+
  '<section class="sec"><div class="wrap contact-grid"><div><div class="cinfo">'+
   '<div class="row"><i>'+I.phone+'</i><div><small>Phone & WhatsApp</small><b>+1 (647) 979-7175</b><button class="copy" data-copy="+1 (647) 979-7175">Copy</button></div></div>'+
   '<div class="row"><i>'+I.mail+'</i><div><small>Email</small><b>info@halaniimmigration.com</b><button class="copy" data-copy="info@halaniimmigration.com">Copy</button></div></div>'+
   '<div class="row"><i>'+I.pin+'</i><div><small>Office</small><b>1940 Eglinton Avenue East, Toronto, ON M1L 4R1</b></div></div>'+
   '<div class="row"><i>'+I.clock+'</i><div><small>Hours</small><b>Monday to Saturday, 9:00 to 18:00</b></div></div></div>'+
   '<div class="mapcard" aria-label="Stylized map of the office location">'+officeMap()+'<a class="btn btn-red" href="https://www.google.com/maps/dir/?api=1&destination=1940+Eglinton+Ave+E,+Toronto,+ON+M1L+4R1" target="_blank" rel="noopener">Get directions '+I.ext+'</a></div></div>'+
   '<div class="form-shell"><h2 class="h3" style="margin-bottom:20px">Send a message</h2><form id="contactForm" class="form" novalidate><div class="frow"><div class="field"><label for="c-name">Full name</label><input id="c-name" autocomplete="name" required></div><div class="field"><label for="c-email">Email</label><input id="c-email" type="email" autocomplete="email" required></div></div><div class="frow"><div class="field"><label for="c-phone">Phone</label><input id="c-phone" type="tel" autocomplete="tel"></div><div class="field"><label for="c-topic">Topic</label><select id="c-topic"><option>General enquiry</option><option>Temporary residence</option><option>Permanent residence</option><option>Family sponsorship</option><option>Business immigration</option><option>Refugee or IRB matter</option></select></div></div><div class="field"><label for="c-msg">Message</label><textarea id="c-msg" required></textarea></div><div id="contactMsg" aria-live="polite"></div><button class="btn btn-red" type="submit" style="justify-self:start">Send message '+I.arrow+'</button><p class="form-note">Please do not include passport numbers or other sensitive identifiers in this form.</p></form>'+
   '<div class="pill-row" style="margin-top:26px;padding-top:22px;border-top:1px solid var(--line)"><a class="btn btn-line" href="#apply">Free Eligibility Assessment</a><a class="btn btn-line" href="#book">Book a Consultation</a></div></div></div></section>';
};
function officeMap(){
  return '<svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="800" height="450" fill="#EFEBE5"/><path d="M0 330 C 200 300, 400 360, 800 300 L800 450 L0 450z" fill="#DCE6EC"/>'+
   '<g stroke="#fff" stroke-width="14" fill="none" stroke-linecap="round"><path d="M-20 170 L 820 140"/><path d="M300 -20 L 340 470"/><path d="M560 -20 L 590 470"/></g><g stroke="#fff" stroke-width="6" fill="none"><path d="M-20 80 L 820 60"/><path d="M-20 250 L 820 228"/><path d="M120 -20 L 150 470"/><path d="M700 -20 L 720 470"/></g>'+
   '<text x="40" y="160" font-family="Manrope,sans-serif" font-size="13" font-weight="700" fill="#8A8D93">EGLINTON AVE E</text><text x="40" y="420" font-family="Manrope,sans-serif" font-size="12" font-weight="600" fill="#7E97A6">Lake Ontario</text>'+
   '<g transform="translate(440 150)"><circle r="34" fill="#C91F32" opacity=".15"/><circle r="12" fill="#C91F32"/><circle r="4" fill="#fff"/></g><g transform="translate(470 108)"><rect width="200" height="44" rx="8" fill="#fff"/><text x="14" y="20" font-family="Manrope,sans-serif" font-size="12" font-weight="800" fill="#25272B">Halani Immigration</text><text x="14" y="35" font-family="Manrope,sans-serif" font-size="11" fill="#5E6168">1940 Eglinton Ave E</text></g></svg>';
}
P.privacy = function(){
  return pageHero({crumbs:[["Privacy Policy"]],eyebrow:"Legal",title:"Privacy Policy",lead:"How Halani Immigration Services Inc. collects, uses and protects your personal information."})+
  '<section class="sec"><div class="wrap" style="max-width:860px"><div class="prose"><p>The full Privacy Policy from the current website is carried over to this page at launch, unchanged unless the client approves edits. It is available now at <a href="'+ext("/privacy")+'" target="_blank" rel="noopener">halaniimmigration.com/privacy</a>.</p><p>Questions about privacy can be sent to info@halaniimmigration.com.</p></div></div></section>';
};
P.terms = function(){
  return pageHero({crumbs:[["Terms of Service"]],eyebrow:"Legal",title:"Terms of Service",lead:"The terms that apply when you use this website and Halani Immigration’s online tools."})+
  '<section class="sec"><div class="wrap" style="max-width:860px"><div class="prose"><p>The full Terms of Service from the current website are carried over to this page at launch. They are available now at <a href="'+ext("/terms")+'" target="_blank" rel="noopener">halaniimmigration.com/terms</a>.</p><p>Information on this website is general and is not legal advice. Halani Immigration Services Inc. is a private immigration consultancy and is not affiliated with the Government of Canada.</p></div></div></section>';
};
P.notfound = function(){
  return pageHero({crumbs:[["Page not found"]],eyebrow:"404",title:"This page took a different flight.",lead:"The page you were looking for is not here. Try one of these instead.",extra:'<div class="pill-row"><a class="btn btn-red" href="#home">Back to home</a><a class="btn btn-line" href="#services">All services</a><a class="btn btn-line" href="#contact">Contact</a></div>'});
};

/* ---------- route meta ---------- */
var META = {
 home:["Halani Immigration | Regulated Canadian Immigration Consultant in Toronto","Toronto immigration consultant (RCIC-IRB, CICC R711322) for visitor visas, study and work permits, Express Entry, PNP, family sponsorship, business immigration and IRB hearings."],
 "about-us":["About Halani Immigration | Toronto RCIC","Ethical, reliable immigration guidance from Halani Immigration Services Inc., a Toronto consultancy led by an RCIC-IRB."],
 "about-shoukat-halani":["Shoukat Qumruddin Halani, RCIC-IRB | Halani Immigration","Meet Shoukat Qumruddin Halani, Regulated Canadian Immigration Consultant (CICC R711322), authorized at all four IRB divisions."],
 services:["Canadian Immigration Services | Halani Immigration","Visitor visas, study and work permits, Express Entry, PNP, sponsorship, business immigration and refugee representation in Toronto."],
 "success-stories":["Client Success Stories | Halani Immigration","Client stories from applicants who received Canadian visas, permits and permanent residence with Halani Immigration."],
 testimonials:["Client Reviews | Halani Immigration","Google reviews from Halani Immigration clients. Rated 5.0 on Google."],
 tools:["Free Immigration Tools | CRS Calculator & More","Free CRS calculator, eligibility quiz, processing times, CLB converter and IRCC data dashboards from Halani Immigration."],
 guides:["Canadian Immigration Guides | Halani Immigration","Plain-language guides to Express Entry, PNP, sponsorship, study and work permits, business immigration and refugee claims."],
 blog:["Immigration Blog & News | Halani Immigration","Practical updates on Express Entry draws, IRCC policy changes and IRB hearings from a practising RCIC-IRB."],
 fees:["Immigration Consultant Fees | Halani Immigration","Flat, published professional fees for Canadian immigration applications, consultations and IRB representation."],
 "immigration-consultant":["Areas We Serve | Halani Immigration","Toronto-based immigration consultant serving clients across Canada, South Asia and the Gulf."],
 apply:["Free Eligibility Assessment | Halani Immigration","Tell us your Canadian immigration goals. A licensed RCIC reviews every assessment personally."],
 book:["Book a Consultation | Halani Immigration","Book a free discovery call or a 60-minute strategy consultation with an RCIC-IRB in Toronto."],
 contact:["Contact Halani Immigration | Toronto","Contact Halani Immigration at 1940 Eglinton Ave E, Toronto. Call +1 (647) 979-7175 or email info@halaniimmigration.com."],
 privacy:["Privacy Policy | Halani Immigration","Privacy Policy for Halani Immigration Services Inc."],
 terms:["Terms of Service | Halani Immigration","Terms of Service for Halani Immigration Services Inc."]
};

/* ---------- nav ---------- */
function buildNav(){
  var col=function(g){return '<div class="mega-col"><h4>'+g+'</h4>'+S.filter(function(s){return s.group===g;}).map(function(s){return '<a href="#'+s.id+'">'+esc(s.name)+'</a>';}).join("")+'</div>';};
  var menu = document.getElementById("menu");
  menu.innerHTML =
   '<li><a href="#home">Home</a></li>'+
   '<li class="has-dd"><button aria-expanded="false" aria-haspopup="true">About'+I.chev+'</button><div class="dd"><div class="dd-panel"><a href="#about-us">About Us<span>Our practice and values</span></a><a href="#about-shoukat-halani">Meet the Founder<span>Shoukat Qumruddin Halani, RCIC-IRB</span></a><a href="#success-stories">Success Stories<span>Client journeys</span></a><a href="#testimonials">Testimonials<span>Google reviews</span></a></div></div></li>'+
   '<li class="has-dd mega-wrap"><button aria-expanded="false" aria-haspopup="true">Services'+I.chev+'</button><div class="dd mega"><div class="dd-panel">'+
     '<div>'+col("Temporary")+'</div><div>'+col("Permanent Residence")+col("Family Sponsorship")+'</div><div>'+col("Business Immigration")+'</div><div>'+col("Refugees & IRB")+'<div class="mega-col"><h4>Explore</h4><a href="#services">All services</a><a href="#immigration-consultant">Areas we serve</a></div></div>'+
     '<a class="mega-feature" href="#apply"><img src="img/wing.jpg" alt=""><b>Not sure which pathway fits?</b><span>Start the free eligibility assessment</span></a>'+
   '</div></div></li>'+
   '<li class="has-dd"><button aria-expanded="false" aria-haspopup="true">Resources'+I.chev+'</button><div class="dd"><div class="dd-panel"><a href="#guides">Immigration Guides<span>In-depth pathway guides</span></a><a href="#blog">Blog & News<span>Policy updates and notes</span></a><a href="#tools">Free Tools<span>CRS calculator and more</span></a><a href="#immigration-consultant">Service Areas<span>Cities and countries</span></a></div></div></li>'+
   '<li><a href="#fees">Fees</a></li><li><a href="#contact">Contact</a></li>';
  var items = menu.querySelectorAll(".has-dd");
  var finePointer = window.matchMedia("(hover:hover) and (pointer:fine)").matches;
  items.forEach(function(li){
    var btn=li.querySelector("button"), t=null;
    function open(){clearTimeout(t);items.forEach(function(o){if(o!==li)close(o);});li.classList.add("open");btn.setAttribute("aria-expanded","true");}
    function close(el){el=el||li;el.classList.remove("open");el.querySelector("button").setAttribute("aria-expanded","false");}
    li._close=close;
    if(finePointer){
      li.addEventListener("mouseenter",open);
      li.addEventListener("mouseleave",function(){clearTimeout(t);t=setTimeout(function(){close();},220);});
    }
    btn.addEventListener("click",function(e){e.stopPropagation();li.classList.contains("open")?close():open();});
    btn.addEventListener("keydown",function(e){if(e.key==="ArrowDown"){e.preventDefault();open();var a=li.querySelector(".dd a");a&&a.focus();}});
    li.addEventListener("keydown",function(e){if(e.key==="Escape"){close();btn.focus();}});
    li.addEventListener("focusout",function(e){if(!li.contains(e.relatedTarget))close();});
  });
  document.addEventListener("click",function(e){items.forEach(function(li){if(!li.contains(e.target))li._close();});});

  var mb=document.getElementById("mbody");
  mb.innerHTML='<a class="mlink" href="#home">Home</a>'+
   '<details><summary>About</summary><div><a href="#about-us">About Us</a><a href="#about-shoukat-halani">Meet the Founder</a><a href="#success-stories">Success Stories</a><a href="#testimonials">Testimonials</a></div></details>'+
   GROUPS.map(function(g){return '<details><summary>'+g+'</summary><div>'+S.filter(function(s){return s.group===g;}).map(function(s){return '<a href="#'+s.id+'">'+esc(s.full)+'</a>';}).join("")+'</div></details>';}).join("")+
   '<details><summary>Resources</summary><div><a href="#guides">Immigration Guides</a><a href="#blog">Blog & News</a><a href="#tools">Free Tools</a><a href="#immigration-consultant">Service Areas</a></div></details>'+
   '<a class="mlink" href="#fees">Fees</a><a class="mlink" href="#contact">Contact</a>'+
   '<div class="mnav-foot"><a class="btn btn-red" href="#apply">Free Eligibility Assessment</a><a class="btn btn-line" href="#book">Book a Consultation</a><p style="font-size:14px;color:var(--muted);text-align:center">+1 (647) 979-7175 · info@halaniimmigration.com</p></div>';
  var mnav=document.getElementById("mnav"), burger=document.getElementById("burger");
  function mOpen(){mnav.classList.add("open");burger.setAttribute("aria-expanded","true");document.body.style.overflow="hidden";setTimeout(function(){document.getElementById("mclose").focus();},50);}
  function mClose(){mnav.classList.remove("open");burger.setAttribute("aria-expanded","false");document.body.style.overflow="";}
  window.__mClose=mClose;
  burger.addEventListener("click",mOpen);
  document.getElementById("mclose").addEventListener("click",function(){mClose();burger.focus();});
  mnav.addEventListener("keydown",function(e){if(e.key==="Escape"){mClose();burger.focus();}});
}
function buildFooter(){
  var svc=["express-entry","pnp","spousal-sponsorship","parents-grandparents","super-visa","study-permit","work-permit","pgwp","lmia-application","business-immigration","refugee-claim","irb-hearings-appeals"];
  document.getElementById("footer").innerHTML='<div class="wrap foot-top"><div class="foot-brand"><a class="brand" href="#home"><svg viewBox="80 70 580 590" aria-hidden="true" style="color:#C91F32"><use href="#leafIcon"/></svg><span><b>Halani</b><small>Immigration Services</small></span></a><p>Regulated Canadian immigration consulting from Toronto. Your path to Canada starts here.</p>'+
   '<div class="cred"><b><span class="dotg"></span>RCIC-IRB · CICC Licence R711322</b><span>Shoukat Qumruddin Halani. Authorized at all four IRB divisions.</span></div>'+
   '<div class="socials"><a href="https://www.facebook.com/halaniimmigration/" target="_blank" rel="noopener" aria-label="Facebook">Fb</a><a href="https://www.instagram.com/halaniimmigration/" target="_blank" rel="noopener" aria-label="Instagram">Ig</a><a href="https://www.linkedin.com/company/halani-immigration-services-inc" target="_blank" rel="noopener" aria-label="LinkedIn">in</a><a href="https://www.youtube.com/@HalaniImmigration" target="_blank" rel="noopener" aria-label="YouTube">Yt</a><a href="https://x.com/ShoukatRcic" target="_blank" rel="noopener" aria-label="X">X</a></div></div>'+
   '<div><h4>Services</h4><ul>'+svc.map(function(id){return '<li><a href="#'+id+'">'+esc(SBY[id].name)+'</a></li>';}).join("")+'</ul></div>'+
   '<div><h4>Company</h4><ul><li><a href="#about-us">About Us</a></li><li><a href="#about-shoukat-halani">Meet the Founder</a></li><li><a href="#success-stories">Success Stories</a></li><li><a href="#testimonials">Testimonials</a></li><li><a href="#fees">Fees</a></li><li><a href="#immigration-consultant">Areas We Serve</a></li><li><a href="#contact">Contact</a></li></ul></div>'+
   '<div><h4>Resources</h4><ul><li><a href="#guides">Immigration Guides</a></li><li><a href="#blog">Blog & News</a></li><li><a href="#tools">Free Tools</a></li><li><a href="'+ext("/tools/crs-calculator")+'" target="_blank" rel="noopener">CRS Calculator</a></li><li><a href="'+ext("/tools/processing-times")+'" target="_blank" rel="noopener">Processing Times</a></li><li><a href="'+ext("/glossary")+'" target="_blank" rel="noopener">Glossary</a></li><li><a href="'+IG+'" target="_blank" rel="noopener">Instagram Reels</a></li></ul></div>'+
   '<div><h4>Get started</h4><ul><li><a href="#apply">Free Eligibility Assessment</a></li><li><a href="#book">Book a Strategy Consultation</a></li><li>+1 (647) 979-7175</li><li>info@halaniimmigration.com</li><li>1940 Eglinton Ave E<br>Toronto, ON M1L 4R1</li><li>Mon to Sat, 9:00 to 18:00</li></ul></div></div>'+
   '<div class="wrap"><p class="foot-note">Halani Immigration Services Inc. is a private immigration consultancy and is not affiliated with the Government of Canada, IRCC or the Immigration and Refugee Board. Information on this website is general and is not legal advice. No consultant can guarantee an application outcome.</p></div>'+
   '<div style="position:relative"><div class="redline foot-bot" style="padding:0;border:0"></div><div class="wrap foot-bot"><span>© 2026 Halani Immigration Services Inc.</span><span><a href="#privacy" style="color:inherit">Privacy Policy</a> · <a href="#terms" style="color:inherit">Terms of Service</a></span></div></div>';
}

/* ---------- page behaviours ---------- */
function initPage(route){
  // reveal
  var vh=window.innerHeight;
  var io = ("IntersectionObserver" in window && !RM) ? new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){e.target.classList.remove("pre");io.unobserve(e.target);}});},{rootMargin:"0px 0px -8% 0px"}) : null;
  document.querySelectorAll("#main .rv").forEach(function(el){if(io && el.getBoundingClientRect().top>vh*0.92){el.classList.add("pre");io.observe(el);}});
  // faq
  document.querySelectorAll("#main .faq-q").forEach(function(b){b.addEventListener("click",function(){var it=b.parentNode,o=!it.classList.contains("open");it.classList.toggle("open",o);b.setAttribute("aria-expanded",String(o));});});
  // copy
  document.querySelectorAll("#main .copy").forEach(function(b){b.addEventListener("click",function(){var v=b.getAttribute("data-copy");var done=function(){b.textContent="Copied";setTimeout(function(){b.textContent="Copy";},1600);};try{navigator.clipboard.writeText(v).then(done,function(){selectText(b.previousElementSibling);});}catch(e){selectText(b.previousElementSibling);}});});
  if(document.getElementById("carTrack")) initCarousel();
  if(route==="home"){initExplorer();initMap();if(window.__booted)initHeroMotion();initTimeline();}
  if(route==="success-stories") initStories();
  if(route==="guides") initFilter("guideFilters","guideGrid");
  if(route==="blog") initBlog();
  if(route==="apply") initAssess();
  if(route==="book") initBook();
  if(route==="contact") initSimpleForm("contactForm","contactMsg");
}
function selectText(el){try{var r=document.createRange();r.selectNodeContents(el);var s=getSelection();s.removeAllRanges();s.addRange(r);}catch(e){}}

function initHeroMotion(){
  if(RM||!HAS_GSAP) return;
  gsap.from(".hero .rv-h",{y:30,opacity:0,duration:1.1,stagger:.12,ease:"power3.out",delay:.15});
  gsap.fromTo(".hero .bg",{scale:1.08},{scale:1,duration:2.4,ease:"power2.out"});
  var bg=document.getElementById("heroBg");
  window.__heroScroll=function(){if(!bg||!bg.isConnected)return;var y=Math.min(window.scrollY,900);bg.style.transform="translateY("+(y*0.18)+"px)";};
}
function initTimeline(){
  var p=document.getElementById("tlPath"); if(!p||RM||!HAS_GSAP) return;
  var tl=document.getElementById("timeline");
  if(tl.getBoundingClientRect().top < window.innerHeight*0.9) return;
  p.style.strokeDashoffset="1";
  var io=new IntersectionObserver(function(en){if(en[0].isIntersecting){gsap.to(p,{strokeDashoffset:0,duration:2,ease:"power2.inOut"});io.disconnect();}},{threshold:.3});
  io.observe(tl);
}
function initExplorer(){
  var tabs=window.__tabs, panel=document.getElementById("ppanel"), btns=document.querySelectorAll(".ptab");
  function show(i,focus){
    btns.forEach(function(b,j){b.setAttribute("aria-selected",String(i===j));b.tabIndex=i===j?0:-1;});
    var t=tabs[i];
    panel.setAttribute("aria-labelledby","pt"+i);
    panel.innerHTML='<img src="img/'+t[2]+'.jpg" alt=""><div class="ppanel-in"><span class="eyebrow" style="color:#FFB3BB">'+I.leaf+'Pathway 0'+(i+1)+'</span><h3>'+t[0]+'</h3><p>'+t[3]+'</p><div class="chips">'+t[4].map(function(id){return '<a class="chip" href="#'+id+'">'+esc(SBY[id].full)+' '+I.arrow.replace('<svg','<svg style="width:13px;height:13px"')+'</a>';}).join("")+'</div></div>';
    if(HAS_GSAP&&!RM){gsap.from(panel.querySelector("img"),{opacity:0,scale:1.04,duration:.8,ease:"power2.out"});gsap.from(panel.querySelectorAll(".ppanel-in>*"),{y:16,opacity:0,stagger:.06,duration:.6,ease:"power2.out"});}
    if(focus) btns[i].focus();
  }
  btns.forEach(function(b,i){b.addEventListener("click",function(){show(i);});b.addEventListener("keydown",function(e){var k=e.key,n=null;if(k==="ArrowDown"||k==="ArrowRight")n=(i+1)%btns.length;if(k==="ArrowUp"||k==="ArrowLeft")n=(i-1+btns.length)%btns.length;if(n!==null){e.preventDefault();show(n,true);}});});
  show(0);
}
function initMap(){
  var box=document.getElementById("mapbox"); if(!box) return;
  var D=[["vancouver","Vancouver",110,250,"British Columbia’s coastal hub, with strong technology and film sectors and a large South Asian community.","study-permit"],["calgary","Calgary",250,230,"Alberta offers provincial pathways, a lower cost of living than the coasts and room for skilled trades.","pnp"],["toronto","Toronto",560,300,"Canada’s largest city and the home of Halani Immigration’s office.","express-entry"],["ottawa","Ottawa",625,262,"The national capital, with public sector, technology and bilingual opportunities.","citizenship"],["montreal","Montreal",675,248,"A bilingual city with world-class universities. Quebec runs its own immigration selection.","study-permit"]];
  var O=[["Karachi",930,470],["Lahore",960,420],["Mumbai",900,520],["Dubai",820,470],["Riyadh",770,500],["Dhaka",990,500],["Doha",800,520]];
  var svg='<svg viewBox="0 0 1040 560" role="img" aria-label="Illustrated map of flight paths from South Asia and the Gulf to Canadian cities"><defs><pattern id="dots" width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.3" fill="#D9D3CB"/></pattern><clipPath id="canClip"><path d="M40 260 C 60 160, 160 110, 260 120 C 330 70, 420 80, 470 130 C 520 90, 600 110, 640 170 C 700 150, 760 190, 740 250 C 720 300, 660 330, 600 330 C 520 345, 420 320, 330 300 C 230 310, 120 320, 40 260z"/></clipPath></defs>'+
   '<rect x="0" y="40" width="760" height="320" fill="url(#dots)" clip-path="url(#canClip)"/>'+
   '<path d="M40 260 C 60 160, 160 110, 260 120 C 330 70, 420 80, 470 130 C 520 90, 600 110, 640 170 C 700 150, 760 190, 740 250 C 720 300, 660 330, 600 330 C 520 345, 420 320, 330 300 C 230 310, 120 320, 40 260z" fill="none" stroke="#E2C9CC" stroke-width="1.2" stroke-dasharray="2 5"/>'+
   '<text x="300" y="185" font-family="DM Serif Display,serif" font-size="46" fill="#25272B" opacity=".07">CANADA</text>'+
   '<g style="color:#C91F32" opacity=".9"><use href="#leafLine" x="372" y="118" width="60" height="60"/></g>';
  D.forEach(function(d){O.forEach(function(o){var cx=(d[2]+o[1])/2, cy=Math.min(d[3],o[2])-150-Math.abs(o[1]-d[2])*0.08;svg+='<path class="route" data-d="'+d[0]+'" d="M'+o[1]+' '+o[2]+' Q '+cx+' '+cy+' '+d[2]+' '+d[3]+'"/>';});});
  O.forEach(function(o){svg+='<g class="origin"><circle cx="'+o[1]+'" cy="'+o[2]+'" r="3.5" fill="#25272B" opacity=".55"/><text x="'+(o[1]+8)+'" y="'+(o[2]+4)+'">'+o[0]+'</text></g>';});
  D.forEach(function(d){var ly=d[0]==="ottawa"?d[3]-14:d[3]+24, anchor=d[0]==="montreal"?"start":"middle", lx=d[0]==="montreal"?d[2]+12:d[2];svg+='<g class="dest-btn" data-d="'+d[0]+'"><circle class="halo" cx="'+d[2]+'" cy="'+d[3]+'" r="20" fill="#C91F32" opacity="0"/><circle cx="'+d[2]+'" cy="'+d[3]+'" r="7" fill="#C91F32" stroke="#fff" stroke-width="3"/><text x="'+lx+'" y="'+ly+'" text-anchor="'+anchor+'">'+d[1]+'</text></g>';});
  svg+='<text x="770" y="560" font-family="Manrope,sans-serif" font-size="11" font-weight="700" letter-spacing="2" fill="#9A9CA1">SOUTH ASIA & THE GULF</text></svg>';
  box.innerHTML=svg;
  var list=document.getElementById("destList"), info=document.getElementById("destInfo");
  list.innerHTML=D.map(function(d){return '<button type="button" aria-pressed="false" data-d="'+d[0]+'">'+d[1]+'</button>';}).join("");
  function sel(id){
    var d=D.filter(function(x){return x[0]===id;})[0];
    box.querySelectorAll(".route").forEach(function(r){r.classList.toggle("on",r.getAttribute("data-d")===id);});
    box.querySelectorAll(".dest-btn").forEach(function(g){g.classList.toggle("on",g.getAttribute("data-d")===id);});
    list.querySelectorAll("button").forEach(function(b){b.setAttribute("aria-pressed",String(b.getAttribute("data-d")===id));});
    info.innerHTML='<b>'+d[1]+'</b><p>'+d[4]+'</p><p style="margin-top:10px"><a class="link" href="#'+d[5]+'">Related pathway: '+esc(SBY[d[5]].name)+'</a></p>';
    if(HAS_GSAP&&!RM){box.querySelectorAll('.route[data-d="'+id+'"]').forEach(function(r){var L=r.getTotalLength();gsap.fromTo(r,{strokeDasharray:L,strokeDashoffset:L},{strokeDashoffset:0,duration:1.2,ease:"power2.inOut"});});}
  }
  list.addEventListener("click",function(e){var b=e.target.closest("button");if(b)sel(b.getAttribute("data-d"));});
  box.querySelectorAll(".dest-btn").forEach(function(g){g.addEventListener("click",function(){sel(g.getAttribute("data-d"));});});
  sel("toronto");
}
function initCarousel(){
  var track=document.getElementById("carTrack"), slides=track.children, dots=document.getElementById("carDots"), i=0, timer=null;
  function per(){return window.innerWidth<=820?1:2;}
  function pages(){return Math.max(1,slides.length-per()+1);}
  function draw(){dots.innerHTML="";for(var k=0;k<pages();k++){var b=document.createElement("button");b.setAttribute("aria-label","Show review "+(k+1));if(k===i)b.setAttribute("aria-current","true");(function(k){b.addEventListener("click",function(){go(k);});})(k);dots.appendChild(b);}}
  function go(n){i=(n+pages())%pages();var w=slides[0].getBoundingClientRect().width+parseFloat(getComputedStyle(slides[0]).marginRight||0);track.style.transform="translateX("+(-i*w)+"px)";draw();}
  document.getElementById("carPrev").onclick=function(){go(i-1);restart();};
  document.getElementById("carNext").onclick=function(){go(i+1);restart();};
  function restart(){clearInterval(timer);if(!RM)timer=setInterval(function(){if(!document.getElementById("carTrack")){clearInterval(timer);return;}go(i+1);},7000);}
  var car=document.getElementById("car");
  car.addEventListener("mouseenter",function(){clearInterval(timer);});car.addEventListener("mouseleave",restart);
  car.addEventListener("focusin",function(){clearInterval(timer);});
  window.__carResize=function(){if(track.isConnected)go(Math.min(i,pages()-1));};
  draw();restart();
}
function initStories(){
  var cats=["All"].concat(STORIES.map(function(s){return s.svc.replace(/ \(.*\)/,"");}).filter(function(v,i,a){return a.indexOf(v)===i;}));
  var f=document.getElementById("storyFilters"), g=document.getElementById("storyGrid");
  f.innerHTML=cats.map(function(c,i){return '<button aria-pressed="'+(i===0)+'" data-cat="'+c+'">'+c+'</button>';}).join("");
  function draw(c){g.innerHTML=STORIES.filter(function(s){return c==="All"||s.svc.indexOf(c)===0;}).map(storyCard).join("").replace(/class="story rv"/g,'class="story"');}
  f.addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;f.querySelectorAll("button").forEach(function(x){x.setAttribute("aria-pressed",String(x===b));});draw(b.getAttribute("data-cat"));});
  draw("All");
}
function initFilter(fid,gid){
  var f=document.getElementById(fid), g=document.getElementById(gid);
  f.addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;var c=b.getAttribute("data-cat");f.querySelectorAll("button").forEach(function(x){x.setAttribute("aria-pressed",String(x===b));});g.querySelectorAll("[data-cat]").forEach(function(a){a.hidden=!(c==="All"||a.getAttribute("data-cat")===c);a.classList.remove("pre");});});
}
function initBlog(){
  var items=POSTS.map(function(p){return {t:p.t,c:p.cat,x:p.x,u:p.u,kind:"Article",d:p.d,img:p.img};}).concat(GUIDES.map(function(g){return {t:g[0],c:g[2],x:"In-depth guide from Halani Immigration.",u:g[1],kind:"Guide"};}));
  var q=document.getElementById("blogQ"), f=document.getElementById("blogFilters"), g=document.getElementById("blogGrid"), cat="All";
  function draw(){
    var term=q.value.trim().toLowerCase();
    var res=items.filter(function(it){return (cat==="All"||it.c===cat)&&(!term||(it.t+" "+it.x+" "+it.c).toLowerCase().indexOf(term)>-1);});
    g.innerHTML=res.length?res.map(function(it){return '<a class="art" href="'+ext(it.u)+'" target="_blank" rel="noopener">'+(it.img?'<div style="aspect-ratio:16/9;margin:-28px -28px 6px;overflow:hidden"><img src="img/'+it.img+'.jpg" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover"></div>':'')+'<div class="meta"><span class="cat">'+esc(it.c)+'</span><span>'+it.kind+'</span>'+(it.d?'<span>'+it.d+'</span>':'')+'</div><h3>'+esc(it.t)+'</h3><p>'+esc(it.x)+'</p></a>';}).join(""):'<div class="empty" style="grid-column:1/-1">No articles or guides match "'+esc(term)+'". Try a program name such as Express Entry or Super Visa.</div>';
  }
  q.addEventListener("input",draw);
  f.addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;cat=b.getAttribute("data-cat");f.querySelectorAll("button").forEach(function(x){x.setAttribute("aria-pressed",String(x===b));});draw();});
  draw();
}
function setErr(input,msg){var fld=input.closest(".field");if(!fld)return;fld.classList.toggle("err",!!msg);var m=fld.querySelector(".msg");if(!m){m=document.createElement("span");m.className="msg";m.setAttribute("aria-live","polite");fld.appendChild(m);}m.textContent=msg||"";input.setAttribute("aria-invalid",msg?"true":"false");}
function validate(scope){
  var ok=true, first=null;
  scope.querySelectorAll("input[required],select[required],textarea[required]").forEach(function(el){
    if(el.type==="checkbox") return;
    var v=el.value.trim(), msg="";
    if(!v) msg="Please fill in this field.";
    else if(el.type==="email"&&!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) msg="Enter an email address like name@example.com.";
    setErr(el,msg); if(msg){ok=false;first=first||el;}
  });
  if(first) first.focus();
  return ok;
}
function demoSuccess(box,text){box.innerHTML='<div class="notice ok" role="status">'+text+'</div><div class="notice" style="margin-top:10px">'+DEMO_NOTE+'</div>';}
function initSimpleForm(fid,mid){
  var f=document.getElementById(fid), m=document.getElementById(mid);
  f.addEventListener("submit",function(e){e.preventDefault();m.innerHTML="";if(!validate(f))return;var btn=f.querySelector('button[type="submit"]');btn.disabled=true;btn.innerHTML="Sending...";setTimeout(function(){btn.disabled=false;btn.innerHTML="Send message "+I.arrow;demoSuccess(m,"Thank you. Your message is ready to send to info@halaniimmigration.com.");},700);});
  f.addEventListener("input",function(e){if(e.target.closest(".field.err"))setErr(e.target,"");});
}
function initAssess(){
  var f=document.getElementById("assessForm"), steps=f.querySelectorAll(".fstep"), bars=document.querySelectorAll(".steps-bar div"), back=document.getElementById("aBack"), next=document.getElementById("aNext"), msg=document.getElementById("assessMsg"), s=0;
  function show(n){s=n;steps.forEach(function(st,i){st.hidden=i!==n;});bars.forEach(function(b,i){b.classList.toggle("on",i<=n);});back.hidden=n===0;next.innerHTML=(n===2?"Submit assessment ":"Continue ")+I.arrow;var lg=steps[n].querySelector("legend");if(lg){lg.tabIndex=-1;lg.focus();}}
  back.addEventListener("click",function(){show(s-1);});
  f.addEventListener("input",function(e){if(e.target.closest(".field.err"))setErr(e.target,"");});
  f.addEventListener("submit",function(e){
    e.preventDefault(); msg.innerHTML="";
    if(s===0){var any=f.querySelectorAll('input[name="goal"]:checked').length;var m=f.querySelector('[data-f="goal"] .msg');m.textContent=any?"":"Choose at least one goal to continue.";if(!any)return;show(1);return;}
    if(s===1){if(!validate(steps[1]))return;show(2);return;}
    if(!validate(steps[2]))return;
    var c=document.getElementById("a-consent"), cm=f.querySelector('[data-f="consent"] .msg');
    if(!c.checked){cm.textContent="Please confirm to continue.";c.focus();return;} cm.textContent="";
    var goals=[].map.call(f.querySelectorAll('input[name="goal"]:checked'),function(x){return x.value;});
    next.disabled=true;next.innerHTML="Submitting...";
    setTimeout(function(){next.disabled=false;next.innerHTML="Submit assessment "+I.arrow;demoSuccess(msg,"Thank you, "+esc(document.getElementById("a-name").value.trim())+". Your goals ("+esc(goals.join(", "))+") are ready for review by a licensed consultant, who will reply by email.");},800);
  });
}
function initBook(){
  var days=document.getElementById("days"), slots=document.getElementById("slots"), f=document.getElementById("bookForm"), m=document.getElementById("bookMsg");
  var d=new Date(), out=[], names=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"], mon=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  while(out.length<6){d.setDate(d.getDate()+1);if(d.getDay()!==0)out.push(new Date(d));}
  days.innerHTML=out.map(function(x,i){return '<button type="button" aria-pressed="'+(i===0)+'" data-v="'+names[x.getDay()]+' '+mon[x.getMonth()]+' '+x.getDate()+'"><small>'+names[x.getDay()]+'</small>'+mon[x.getMonth()]+' '+x.getDate()+'</button>';}).join("");
  slots.innerHTML=["9:30","10:30","11:30","13:00","14:00","15:00","16:00","17:00"].map(function(t,i){return '<button type="button" aria-pressed="'+(i===1)+'" data-v="'+t+'">'+t+'</button>';}).join("");
  function single(group){group.addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;group.querySelectorAll("button").forEach(function(x){x.setAttribute("aria-pressed",String(x===b));});});}
  single(days);single(slots);single(f.querySelector(".type-cards"));
  f.addEventListener("input",function(e){if(e.target.closest(".field.err"))setErr(e.target,"");});
  f.addEventListener("submit",function(e){e.preventDefault();m.innerHTML="";if(!validate(f))return;var t=f.querySelector('.type-card[aria-pressed="true"]').getAttribute("data-type"),dv=days.querySelector('[aria-pressed="true"]').getAttribute("data-v"),sv=slots.querySelector('[aria-pressed="true"]').getAttribute("data-v");demoSuccess(m,"Requested: "+esc(t)+" on "+esc(dv)+" at "+esc(sv)+" Toronto time. Halani Immigration confirms by email.");});
}


/* ---------- graphic leaves ---------- */
var LF='<svg viewBox="70 70 600 650" aria-hidden="true"><use href="#leafSolid"/></svg>';
var PALETTE=["#8E2A30","#971C2B","#C91F32","#7A2229"];
var LAYOUTS=[
 [{t:"-40px",r:"-50px",w:220,rot:28,d:10},{t:"170px",r:"110px",w:84,rot:-18,d:8,sm:1},{b:"40px",l:"-46px",w:120,rot:-34,d:11,sm:1}],
 [{b:"-50px",l:"-40px",w:200,rot:-24,d:11},{b:"150px",l:"130px",w:70,rot:22,d:7,sm:1},{t:"30px",r:"-30px",w:110,rot:40,d:9,sm:1}],
 [{t:"20px",l:"-60px",w:170,rot:-40,d:10},{b:"-30px",r:"-40px",w:190,rot:18,d:12},{t:"46%",r:"70px",w:60,rot:-12,d:8,sm:1}]
];
function leafSet(k,light){
  var lay=LAYOUTS[k%LAYOUTS.length];
  return '<div class="leafs" aria-hidden="true">'+lay.map(function(p,i){
    var pos=["t","b","l","r"].map(function(s){var key={t:"top",b:"bottom",l:"left",r:"right"}[s];return p[s]?key+":"+p[s]+";":"";}).join("");
    var c=light?"rgba(255,255,255,.16)":PALETTE[(k+i)%PALETTE.length];
    var vein=light?"rgba(255,255,255,.0)":"#fff";
    return '<span class="lf'+(p.sm?' sm-hide':'')+'" style="'+pos+'--w:'+p.w+'px;--r:'+p.rot+'deg;--d:'+p.d+'s;--c:'+c+';--vein:'+vein+';animation-delay:-'+(i*2.3+k)+'s">'+LF+'</span>';
  }).join("")+'</div>';
}
function decorate(){
  var k=0;
  document.querySelectorAll("#main > section").forEach(function(sec){
    if(sec.classList.contains("hero")||sec.classList.contains("phero")||sec.classList.contains("phero-split-wrap")||sec.classList.contains("reviews")) return;
    if(sec.querySelector(":scope > .leafs")) return;
    var light=sec.classList.contains("cta-band")||sec.classList.contains("reels-sec");
    // every section gets leaves except plain ones that follow a decorated one, keeping it from feeling busy
    if(!light && (k%2===1)) {k++; return;}
    sec.classList.add("deco");
    sec.insertAdjacentHTML("afterbegin",leafSet(k,light));
    k++;
  });
  var hero=document.querySelector("#main .hero");
  if(hero&&!hero.querySelector(".leafs")){
    hero.insertAdjacentHTML("afterbegin",'<div class="leafs" aria-hidden="true">'+
      '<span class="lf" style="left:-30px;bottom:96px;--w:150px;--r:-26deg;--d:11s;--c:#C91F32;--vein:#fff">'+LF+'</span>'+
      '<span class="lf sm-hide" style="left:120px;bottom:180px;--w:58px;--r:20deg;--d:8s;--c:#971C2B;--vein:#fff;animation-delay:-3s">'+LF+'</span>'+
      '<span class="lf sm-hide" style="right:-36px;top:60px;--w:170px;--r:32deg;--d:12s;--c:#971C2B;--vein:#fff;animation-delay:-5s">'+LF+'</span>'+
      '<span class="lf sm-hide" style="right:150px;top:200px;--w:64px;--r:-14deg;--d:9s;--c:#C91F32;--vein:#fff;animation-delay:-1s">'+LF+'</span></div>');
  }
}

/* ---------- router + transitions ---------- */
var current=null, busy=false;
function routeOf(h){h=(h||"").replace(/^#/,"");if(!h||h==="main")return "home";return h;}
function render(r){
  var main=document.getElementById("main"), html, meta;
  if(P[r]){html=P[r]();meta=META[r];}
  else if(SBY[r]){html=P.service(SBY[r]);meta=[SBY[r].full+" | Halani Immigration Toronto",SBY[r].tag+". "+SBY[r].intro.split(". ")[0]+"."];}
  else {html=P.notfound();meta=["Page not found | Halani Immigration",""];}
  main.innerHTML=html;
  document.title=meta[0];
  var md=document.querySelector('meta[name="description"]'); if(md&&meta[1]) md.setAttribute("content",meta[1]);
  var fs=document.getElementById("faqLd"); if(fs) fs.remove();
  if(SBY[r]){var ld=document.createElement("script");ld.type="application/ld+json";ld.id="faqLd";ld.textContent=JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":SBY[r].faq.map(function(q){return {"@type":"Question","name":q[0],"acceptedAnswer":{"@type":"Answer","text":q[1]}};})});document.head.appendChild(ld);}
  document.querySelectorAll('#menu a').forEach(function(a){a.toggleAttribute("aria-current",a.getAttribute("href")==="#"+r);if(a.hasAttribute("aria-current"))a.setAttribute("aria-current","page");});
  current=r;
  window.__heroScroll=null;
  decorate();
  initPage(r);
}
function headingIn(){
  if(RM||!HAS_GSAP) return;
  var h=document.querySelector("#main h1");
  if(h&&current!=="home") gsap.from(h,{y:34,opacity:0,duration:.8,ease:"power3.out"});
  var l=document.querySelector("#main .phero .lead, #main .phero-split .lead");
  if(l) gsap.from(l,{y:20,opacity:0,duration:.8,delay:.1,ease:"power3.out"});
}
function navigate(r,push){
  if(window.__mClose) window.__mClose();
  document.querySelectorAll("#menu .has-dd").forEach(function(li){li._close&&li._close();});
  if(busy) return;
  if(r===current && push){window.scrollTo(0,0);return;}
  var swap=function(){if(push){try{history.pushState(null,"","#"+r);}catch(e){location.hash=r;}}render(r);window.scrollTo(0,0);document.getElementById("main").focus({preventScroll:true});};
  if(RM||!HAS_GSAP){swap();return;}
  busy=true;
  var tx=document.getElementById("tx"), panel=tx.querySelector(".panel"), mark=tx.querySelector(".tmark"), plane=tx.querySelector(".plane"), path=document.getElementById("txPath");
  tx.classList.add("on");
  var W=window.innerWidth, H=window.innerHeight;
  gsap.set(panel,{clipPath:"inset(0% 100% 0% 0%)"});
  gsap.set(mark,{opacity:0,scale:.92});
  gsap.set(path,{strokeDashoffset:1,opacity:1});
  var tl=gsap.timeline({onComplete:function(){tx.classList.remove("on");busy=false;}});
  tl.set(plane,{opacity:1,x:-60,y:H*0.82,rotation:-18})
    .to(plane,{duration:.5,ease:"power2.in",motionPath:{path:[{x:W*0.3,y:H*0.62},{x:W*0.7,y:H*0.36},{x:W+80,y:H*0.1}],curviness:1.2,autoRotate:false},rotation:-24},0)
    .to(path,{strokeDashoffset:0,duration:.5,ease:"power2.in"},0)
    .to(panel,{clipPath:"inset(0% 0% 0% 0%)",duration:.48,ease:"power3.inOut"},.08)
    .to(path,{opacity:0,duration:.15},.5)
    .to(mark,{opacity:1,scale:1,duration:.32,ease:"power2.out"},.42)
    .add(swap,.62)
    .to(mark,{opacity:0,scale:1.04,duration:.2,ease:"power1.in"},.74)
    .to(panel,{clipPath:"inset(0% 0% 0% 100%)",duration:.46,ease:"power3.inOut"},.8)
    .set(plane,{opacity:0},.8)
    .add(headingIn,.9);
}
document.addEventListener("click",function(e){
  var a=e.target.closest("a"); if(!a) return;
  if(a.hasAttribute("data-skip")){e.preventDefault();document.getElementById("main").focus();return;}
  var href=a.getAttribute("href")||"";
  if(href.charAt(0)!=="#"||a.target==="_blank") return;
  e.preventDefault();
  navigate(routeOf(href),true);
});
window.addEventListener("popstate",function(){var r=routeOf(location.hash);if(r!==current)navigate(r,false);});
window.addEventListener("hashchange",function(){var r=routeOf(location.hash);if(r!==current)navigate(r,false);});
var hdr=document.getElementById("hdr");
window.addEventListener("scroll",function(){hdr.classList.toggle("scrolled",window.scrollY>10);if(window.__heroScroll)window.__heroScroll();},{passive:true});
var rz; window.addEventListener("resize",function(){clearTimeout(rz);rz=setTimeout(function(){window.__carResize&&window.__carResize();},150);});

/* ---------- intro ---------- */
function playIntro(){
  var intro=document.getElementById("intro");
  var seen=false; try{seen=sessionStorage.getItem("halaniIntro")==="1";}catch(e){}
  if(seen||RM||!HAS_GSAP||current!=="home"){ if(current==="home") initHeroMotion(); return; }
  try{sessionStorage.setItem("halaniIntro","1");}catch(e){}
  intro.hidden=false;
  var line=document.getElementById("introLine"), leaf=document.getElementById("introLeaf"), stem=intro.querySelector(".istem"), vs=intro.querySelectorAll(".iv"), plane=document.getElementById("introPlane"), word=intro.querySelector(".word"), box=intro.querySelector(".leafbox");
  var finish=function(){gsap.to(intro,{clipPath:"inset(0% 0% 100% 0%)",duration:.75,ease:"power3.inOut",onComplete:function(){intro.hidden=true;intro.style.clipPath="";}});initHeroMotion();};
  var tl=gsap.timeline();
  gsap.set(intro,{clipPath:"inset(0% 0% 0% 0%)"});
  tl.to(line,{strokeDashoffset:0,duration:.9,ease:"power2.inOut"},0)
    .to(leaf,{strokeDashoffset:0,duration:1.1,ease:"power2.inOut"},.4)
    .to(line,{opacity:0,duration:.5},1.0)
    .to(stem,{strokeDashoffset:0,duration:.45,ease:"power2.out"},1.05)
    .to(vs,{strokeDashoffset:0,duration:.5,ease:"power1.out",stagger:.008},1.1)
    .to(leaf,{attr:{"fill-opacity":1},duration:.5,ease:"power1.out"},1.65)
    .to(vs,{attr:{stroke:"#FFFFFF"},duration:.5},1.7)
    .set(plane,{opacity:1},.55)
    .to(plane,{duration:1.8,ease:"power1.inOut",motionPath:{path:"#introFlight",align:"#introFlight",alignOrigin:[.5,.5],autoRotate:true}},.55)
    .to(plane,{opacity:0,duration:.25},2.1)
    .fromTo(box,{scale:.95},{scale:1,duration:1.2,ease:"power2.out"},.7)
    .fromTo(word,{y:18,opacity:0},{y:0,opacity:1,duration:.6,ease:"power2.out"},1.75)
    .add(finish,2.95);
  intro.querySelector(".skipintro").addEventListener("click",function(){tl.kill();finish();});
}

/* ---------- boot ---------- */
buildNav(); buildFooter();
render(routeOf(location.hash));
playIntro();
window.__booted=true;
})();
