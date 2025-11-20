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
    name: "Beatrice Acciaio",
    affiliation: "ETH Zürich, Switzerland",
    siteUrl: "https://people.math.ethz.ch/~beacciaio/",
    initials: "BA",
    bio: "Full Professor at ETH Zürich, Executive Secretary of the Bachelier Finance Society and recipient of the Louis Bachelier Prize (2022). Her research spans optimal transport theory and stochastic analysis, and their applications in finance, insurance and economics. She is Associate Editor e.g. in SIFIN, Mathematical Finance, Finance and Stochastics, Annals of Applied Probability, and IJTAF.",
    imageSrc: "/Bea.png",
  },
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
  }

]


