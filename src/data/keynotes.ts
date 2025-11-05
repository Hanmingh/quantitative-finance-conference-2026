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
    affiliation: "Boston University, USA",
    siteUrl: "https://sites.google.com/site/stevenkousg/",
    initials: "SK",
    bio:
      "Allen and Kelli Questrom Professor of Finance at Boston University; former Director of the Risk Management Institute at NUS. His research spans FinTech, quantitative finance, applied probability, and statistics, with extensive publications and recognition including IMS Fellow and major awards.",
    imageSrc: "/KouSteven.webp",
  },
  {
    name: "Huyên Pham",
    affiliation: "École Polytechnique, France",
    siteUrl: "https://sites.google.com/site/phamxuanhuyen/",
    initials: "HP",
    bio:
      "Full Professor at École Polytechnique (CMAP) and Vice-President of the Bachelier Finance Society (2024); recipient of the Louis Bachelier Prize (2007). His research spans stochastic control, mathematical finance, machine learning, numerical probability, and large deviations, and he serves as Editor-in-Chief of SIAM Journal on Control and Optimization (since 2024).",
    imageSrc: "/pham.jpg",
  },

]


