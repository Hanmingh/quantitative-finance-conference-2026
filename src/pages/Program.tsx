import { CalendarDays, Landmark, Info, MapPin } from 'lucide-react'
import {
	Card,
} from '@/components/ui/card'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { Link } from 'react-router-dom'

const organizingCommittee = [
	{ name: "Daniel Bartl", affiliation: "National University of Singapore" },
	{ name: "Agostino Capponi", affiliation: "Columbia University" },
	{ name: "Ying Chen", affiliation: "National University of Singapore" },
	{ name: "Min Dai", affiliation: "The Hong Kong Polytechnic University" },
	{ name: "Julian Sester", affiliation: "National University of Singapore" },
	{ name: "Nizar Touzi", affiliation: "New York University" },
	{ name: "Marko Weber", affiliation: "National University of Singapore" },
]

export default function Program() {
	return (
		<>
			<section id="hero" className="relative isolate">
				<img
					className="absolute inset-0 h-full w-full object-cover object-[50%_30%] sm:object-center"
					src="/Hero.jpg"
					alt="Conference hero background"
					loading="eager"
				/>
			<div className="absolute inset-0 bg-gradient-to-b from-blue-950/60 via-blue-900/50 to-blue-900/40 sm:from-blue-950/50 sm:via-blue-900/40 sm:to-blue-900/30" />
				<div className="relative mx-auto max-w-6xl px-6">
					<div className="flex min-h-[260px] items-center sm:min-h-[420px] lg:min-h-[560px]">
						<div className="mx-auto max-w-xl text-center text-white sm:max-w-3xl lg:max-w-5xl">
							<h1 className="text-xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl lg:whitespace-nowrap drop-shadow-lg">Quantitative Finance&nbsp;Summer Program&nbsp;2026</h1>
							<p className="mt-3 text-sm sm:text-base md:text-lg lg:text-xl drop-shadow-md">2–12 June 2026 · Singapore</p>
							<div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm opacity-95">
								<span className="hidden sm:inline-flex items-center gap-2"><Landmark className="h-4 w-4" />Center for Quantitative Finance X Institute for Mathematical Sciences, National University of Singapore</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			<main className="flex-1">
				{/* Schedule Overview */}
				<section id="schedule" className="bg-white py-12 md:py-16 lg:py-20">
					<div className="mx-auto max-w-4xl px-6">
						<div className="space-y-4 text-center">
							<h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">Schedule Overview</h2>
							<div className="h-1 w-16 rounded bg-accent md:w-20 mx-auto" />
						</div>
						<Card className="mt-8 shadow-sm overflow-hidden">
							<Table>
								<TableHeader>
									<TableRow className="bg-muted/50 hover:bg-muted/50">
										<TableHead className="py-4 px-6 text-sm font-semibold uppercase tracking-wide text-foreground">Event</TableHead>
										<TableHead className="py-4 px-6 text-sm font-semibold uppercase tracking-wide text-foreground text-right">Dates</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									<TableRow className="hover:bg-muted/30">
										<TableCell className="py-4 px-6">
											<Link to="/summer-school" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
												<div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
													<CalendarDays className="h-5 w-5" />
												</div>
												<span className="font-medium text-foreground hover:text-accent transition-colors">Summer School</span>
											</Link>
										</TableCell>
										<TableCell className="py-4 px-6 text-right text-muted-foreground">
										2–5 June 2026
									</TableCell>
									</TableRow>
									<TableRow className="hover:bg-muted/30">
										<TableCell className="py-4 px-6">
											<Link to="/workshop" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
												<div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-600">
													<CalendarDays className="h-5 w-5" />
												</div>
												<span className="font-medium text-foreground hover:text-accent transition-colors">Workshop</span>
											</Link>
										</TableCell>
										<TableCell className="py-4 px-6 text-right text-muted-foreground">
										8–9 June 2026
									</TableCell>
									</TableRow>
									<TableRow className="hover:bg-muted/30">
										<TableCell className="py-4 px-6">
											<Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
												<div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-accent">
													<CalendarDays className="h-5 w-5" />
												</div>
												<span className="font-medium text-foreground hover:text-accent transition-colors">Conference</span>
											</Link>
										</TableCell>
										<TableCell className="py-4 px-6 text-right text-muted-foreground">
										10–12 June 2026
									</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</Card>
					</div>
				</section>

				{/* Overview */}
				<section className="py-12 md:py-16 lg:py-20">
					<div className="mx-auto max-w-4xl px-6">
						<div className="space-y-4 text-center">
							<h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">Overview</h2>
							<div className="h-1 w-16 rounded bg-accent md:w-20 mx-auto" />
						</div>

						<ul className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-3 text-base text-muted-foreground sm:grid-cols-2 md:gap-4 md:text-lg">
							<li className="flex items-start gap-2">
								<CalendarDays className="mt-0.5 h-5 w-5 md:h-6 md:w-6 text-accent" />
								<span>02 Jun 2026 – 12 Jun 2026</span>
							</li>
							<li className="flex items-start gap-2">
								<MapPin className="mt-0.5 h-5 w-5 md:h-6 md:w-6 text-accent" />
								<span>National University of Singapore</span>
							</li>
						</ul>

						<div className="mt-8 text-muted-foreground md:text-lg leading-relaxed text-justify">
							<p>The program will feature two weeklong workshops: one dedicated to cutting-edge research in stochastic control, exploring dynamic decision-making in complex financial systems, systemic risk, and market frictions; and another focused on the transformative impact of machine learning in finance, showcasing innovative approaches to pricing, hedging, forecasting, and portfolio optimization. By bridging classical methods with modern data-driven techniques, this program aims to spark new ideas, foster collaboration, and position Singapore as a hub for research at the forefront of quantitative finance and fintech innovation.</p>
						</div>
					</div>
				</section>

				{/* Organizing Committee */}
				<section className="bg-white py-12 md:py-16 lg:py-20">
					<div className="mx-auto max-w-4xl px-6">
						<div className="space-y-4 text-center">
							<h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">Organizing Committee</h2>
							<div className="h-1 w-16 rounded bg-accent md:w-20 mx-auto" />
						</div>
						<ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
							{organizingCommittee.map((member) => (
								<li key={member.name} className="border-l-2 border-accent pl-4 py-1">
									<p className="font-medium text-foreground">{member.name}</p>
									<p className="text-sm text-muted-foreground">{member.affiliation}</p>
								</li>
							))}
						</ul>
					</div>
				</section>

			</main>
		</>
	)
}
