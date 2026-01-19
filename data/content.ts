import { QuizQuestion, DraftingScenario, CitationChallenge, SoftwareItem } from "../types";

// WILLS CONTENT
export const willsQuestions: QuizQuestion[] = [
  {
    id: "w1",
    question: "In Pennsylvania, what is the minimum age for a person to execute a valid will?",
    options: ["21 years old", "18 years old", "16 years old", "25 years old"],
    correctAnswer: 1,
    explanation: "Under 20 Pa. C.S. § 2501, any person 18 or more years of age who is of sound mind may make a will."
  },
  {
    id: "w2",
    question: "To make a will self-proving in PA, what document must be attached?",
    options: ["A Codicil", "A Self-Proving Affidavit", "A Grant of Letters", "A Renunciation"],
    correctAnswer: 1,
    explanation: "A Self-Proving Affidavit, acknowledged by the testator and subscribed by witnesses before an officer authorized to administer oaths, avoids the need for witnesses to appear at probate."
  },
  {
    id: "w3",
    question: "Where do you file a Will for probate in Philadelphia?",
    options: ["City Hall, Room 180 (Register of Wills)", "The Federal Courthouse", "The PA Supreme Court", "The Department of Revenue"],
    correctAnswer: 0,
    explanation: "In Philadelphia, the Register of Wills is located in City Hall, Room 180. This is where you petition for the Grant of Letters."
  }
];

export const willsDrafting: DraftingScenario[] = [
  {
    id: "wd1",
    title: "Drafting the Exordium (Opening)",
    instruction: "Draft the opening paragraph (Exordium) for a Will for client 'Jane Doe' who lives in Philadelphia, PA. Include revocation of prior wills.",
    context: "Client: Jane Doe, Address: Philadelphia, PA.",
    modelAnswer: "I, Jane Doe, a resident of Philadelphia, Pennsylvania, make this my Will and revoke all prior Wills and Codicils.",
    keyPoints: ["Identified the Testator", "Stated Domicile (Philadelphia, PA)", "Expressly revoked prior Wills/Codicils"]
  },
  {
    id: "wd2",
    title: "Specific Bequest of Personal Property",
    instruction: "Draft a clause giving a diamond ring to a niece, 'Sarah Smith'. If she predeceases, it should go to the residue.",
    context: "Item: Diamond engagement ring. Beneficiary: Sarah Smith.",
    modelAnswer: "I give my diamond engagement ring to my niece, Sarah Smith, if she survives me. If she does not survive me, this gift shall lapse and become part of my residuary estate.",
    keyPoints: ["Identified property clearly", "Identified beneficiary", "Included contingency (survivorship)", "Specified failure condition (lapse)"]
  }
];

// TRUSTS CONTENT
export const trustsQuestions: QuizQuestion[] = [
  {
    id: "t1",
    question: "Which PA statute largely adopted the Uniform Trust Code (UTC)?",
    options: ["Act 98 of 2006 (Title 20, Chapter 77)", "Act 101 of 1988", "The Probate Code of 1947", "The PA Constitution"],
    correctAnswer: 0,
    explanation: "Chapter 77 of the PEF Code (Title 20) contains the Uniform Trust Act provisions in Pennsylvania."
  },
  {
    id: "t2",
    question: "What is the primary role of a Trustee?",
    options: ["To benefit themselves", "To hold and administer assets for the benefit of beneficiaries", "To write the will", "To calculate inheritance tax only"],
    correctAnswer: 1,
    explanation: "A Trustee acts as a fiduciary to hold legal title to property and administer it for the equitable benefit of the beneficiaries according to the trust instrument."
  },
  {
    id: "t3",
    question: "What is a 'Pour-Over Will'?",
    options: ["A will that gives everything to a neighbor", "A will that pours assets into a Living Trust upon death", "A will written in liquid ink", "A will that creates a testamentary trust"],
    correctAnswer: 1,
    explanation: "A Pour-Over Will captures assets not funded into a trust during lifetime and directs ('pours') them into the trust upon the testator's death."
  }
];

export const trustsDraftingQuestions: QuizQuestion[] = [
  {
    id: "td1",
    question: "Under the Pennsylvania Uniform Trust Act (Act 98), if a trust instrument is silent regarding revocability, the trust is presumed to be:",
    options: ["Irrevocable", "Revocable", "Void", "Testamentary"],
    correctAnswer: 1,
    explanation: "Unlike the common law presumption, PA's adoption of the UTC (20 Pa. C.S. § 7752) presumes a trust is revocable unless the instrument expressly states it is irrevocable."
  },
  {
    id: "td2",
    question: "What is the primary purpose of a 'Spendthrift Clause' in a trust document?",
    options: ["To force the trustee to spend money quickly", "To protect trust assets from a beneficiary's creditors and prevent assignment of interest", "To reduce trustee fees", "To avoid Rule Against Perpetuities"],
    correctAnswer: 1,
    explanation: "A spendthrift provision (20 Pa. C.S. § 7741) restrains both voluntary and involuntary transfer of a beneficiary's interest, protecting it from most creditors."
  },
  {
    id: "td3",
    question: "When funding a Revocable Living Trust during the grantor's lifetime, what drafting step is crucial for real estate?",
    options: ["Drafting a new Deed transferring title from the individual to the Trustee", "Attaching a post-it note to the deed", "Listing the house in the Schedule A only", "Notarizing the trust abstract"],
    correctAnswer: 0,
    explanation: "Listing an asset in a trust schedule is often insufficient for real property. A new deed must be drafted, executed, and recorded to legally transfer title to the trust."
  }
];

// ESTATES CONTENT
export const estatesQuestions: QuizQuestion[] = [
  {
    id: "e1",
    question: "What form is used to file the Pennsylvania Inheritance Tax Return?",
    options: ["Form 1040", "REV-1500", "REV-516", "PA-40"],
    correctAnswer: 1,
    explanation: "The REV-1500 is the specific PA Department of Revenue form for filing Inheritance Tax for decedents."
  },
  {
    id: "e2",
    question: "What is the deadline for filing the REV-1500 to receive the 5% discount?",
    options: ["9 months after death", "3 months after death", "1 year after death", "30 days after death"],
    correctAnswer: 1,
    explanation: "Payments made within 3 months of the decedent's death are entitled to a 5% discount on the tax due."
  },
  {
    id: "e3",
    question: "What is a 'Short Certificate'?",
    options: ["A brief death certificate", "Evidence of the authority of the Executor/Administrator", "A small will", "A receipt for tax payment"],
    correctAnswer: 1,
    explanation: "A Short Certificate is issued by the Register of Wills to prove the Personal Representative has the authority to act on behalf of the estate (e.g., to close bank accounts)."
  },
  {
    id: "e4",
    question: "According to PA O.C. Rule 10.5, notice must be sent to beneficiaries within how many months of the grant of letters?",
    options: ["3 months", "6 months", "1 month", "9 months"],
    correctAnswer: 0,
    explanation: "Rule 10.5 requires notice of estate administration to be sent to beneficiaries and heirs within 3 months of the grant of letters."
  }
];

export const estatesDrafting: DraftingScenario[] = [
  {
    id: "ed1",
    title: "Notice of Estate Administration (Rule 10.5)",
    instruction: "Draft the core statement for a Rule 10.5 Notice informing a beneficiary that the Personal Representative has been appointed.",
    context: "Executor: John Doe. Estate of: Mary Smith. Date of Death: Jan 1, 2024.",
    modelAnswer: "IMPORTANT NOTICE: The Estate of Mary Smith, Deceased. You are informed that John Doe has been appointed Executor of the Estate of Mary Smith, who died on January 1, 2024.",
    keyPoints: ["Name of Decedent", "Name of Executor", "Date of Death", "Explicit statement of appointment"]
  }
];

// CITATION CONTENT
export const citationChallenges: CitationChallenge[] = [
  {
    id: "c1",
    sourceDescription: "Title 20 of Pennsylvania Consolidated Statutes, Section 3101 (Probate, Estates and Fiduciaries Code)",
    correctCitation: "20 Pa. C.S. § 3101",
    hint: "Use 'Pa. C.S.' for Consolidated Statutes."
  },
  {
    id: "c2",
    sourceDescription: "Pennsylvania Orphans' Court Rule 10.5",
    correctCitation: "Pa. O.C. Rule 10.5",
    hint: "The abbreviation for Orphans' Court Rule is Pa. O.C. Rule."
  },
  {
    id: "c3",
    sourceDescription: "In re Estate of Kester, a 1979 PA Supreme Court case found at volume 486, page 349 of the Pennsylvania State Reports.",
    correctCitation: "In re Estate of Kester, 486 Pa. 349 (1979)",
    hint: "Case Name, Vol Reporter Page (Year). Remember 'In re' format for estates."
  },
  {
    id: "c4",
    sourceDescription: "Title 61 of the Pennsylvania Code, Section 91.1 (Inheritance Tax General Provisions)",
    correctCitation: "61 Pa. Code § 91.1",
    hint: "Abbreviation for Pennsylvania Code is 'Pa. Code'."
  },
  {
    id: "c5",
    sourceDescription: "Title 20 of Pennsylvania Consolidated Statutes, Section 5601 (General Provisions for Power of Attorney)",
    correctCitation: "20 Pa. C.S. § 5601",
    hint: "Standard statutory citation for the PEF Code."
  },
  {
    id: "c6",
    sourceDescription: "In re Estate of Miller, a 2011 case found at volume 18, page 1163 of the Atlantic Reporter, Third Series, decided by the Pennsylvania Superior Court.",
    correctCitation: "In re Estate of Miller, 18 A.3d 1163 (Pa. Super. Ct. 2011)",
    hint: "Case Name, Vol Reporter Page (Court Year). Use 'Pa. Super. Ct.' for Superior Court."
  },
  {
    id: "c7",
    sourceDescription: "Internal Revenue Code Section 2056 (Bequests, etc., to surviving spouse)",
    correctCitation: "I.R.C. § 2056",
    hint: "Use 'I.R.C.' for the Internal Revenue Code."
  }
];

// SOFTWARE CONTENT
export const softwareList: SoftwareItem[] = [
  {
    name: "Lackner 6-in-1",
    category: "Estate Administration",
    description: "A comprehensive Windows-based software widely used in PA. It handles inheritance tax (REV-1500), federal estate tax (706), fiduciary income tax (1041/PA-41), inventory, and accountings.",
    relevance: "The industry standard for many PA law firms for tax prep and accounting."
  },
  {
    name: "EstateWorks",
    category: "Case Management",
    description: "Cloud-based settlement/management platform. Helps track assets, tasks, and deadlines across the firm.",
    relevance: "Common in larger firms for workflow management."
  },
  {
    name: "EstateVal (EVP Systems)",
    category: "Asset Valuation",
    description: "The gold standard for automated securities valuation. It calculates mean prices for stocks and bonds on the Date of Death for IRS Form 706 and PA REV-1500.",
    relevance: "Used by almost every firm to generate ready-to-file valuation reports for tax returns."
  },
  {
    name: "LegalServer / Clio",
    category: "Practice Management",
    description: "General case management tools used to track billable time and client contacts.",
    relevance: "You will track your time here (e.g., '0.5 hrs - Drafting Renunciation')."
  }
];