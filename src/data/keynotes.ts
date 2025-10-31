export type Keynote = {
  name: string
  affiliation: string
  siteUrl: string
  initials: string
  bio: string
  imageSrc?: string
}

export const keynotes: Keynote[] = [
  {
    name: "Steven G. Kou",
    affiliation: "Boston University",
    siteUrl: "https://sites.google.com/site/stevenkousg/",
    initials: "SK",
    bio:
      "Allen and Kelli Questrom Professor of Finance at Boston University; former Director of the Risk Management Institute at NUS. His research spans FinTech, quantitative finance, applied probability, and statistics, with extensive publications and recognition including IMS Fellow and major awards.",
    imageSrc: "/KouSteven.webp",
  },
]


