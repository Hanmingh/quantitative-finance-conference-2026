import './App.css'
import { CalendarDays, MapPin, Landmark } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
} from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { keynotes } from '@/data/keynotes'
import { Navbar } from '@/components/navbar'

export default function App() {
	return (
		<div className="flex min-h-dvh flex-col">
			<Navbar />
			<section id="hero" className="relative isolate">
				<img
					className="absolute inset-0 h-full w-full object-cover object-[50%_30%] sm:object-center"
					src="/Hero.jpg"
					alt="Conference hero background"
					loading="eager"
				/>
				<div className="absolute inset-0 bg-primary/50 sm:bg-primary/40" />
				<div className="relative mx-auto max-w-6xl px-6">
						<div className="flex min-h-[260px] items-center sm:min-h-[420px] lg:min-h-[560px]">
							<div className="mx-auto max-w-xl text-center text-white sm:max-w-3xl lg:max-w-5xl">
								<h1 className="text-xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl lg:whitespace-nowrap">Quantitative Finance&nbsp;Conference&nbsp;2026</h1>
								<p className="mt-3 text-sm sm:text-base md:text-lg lg:text-xl">10–12 June 2026 · Singapore</p>
								<div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm opacity-95">
									<span className="hidden sm:inline-flex items-center gap-2"><Landmark className="h-4 w-4" />Center for Quantitative Finance, National University of Singapore</span>
							</div>
							<div className="mt-6 sm:mt-8">
								<Button size="lg" className="w-full sm:w-auto rounded-full bg-accent text-accent-foreground hover:bg-accent/90">Register Now</Button>
							</div>
						</div>
					</div>
				</div>
			</section>

			<main className="flex-1">
				<section id="keynotes" className="bg-white py-12 md:py-16 lg:py-20">
					<div className="mx-auto max-w-6xl px-6">
						<div className="space-y-4">
							<h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">Keynotes</h2>
							<div className="h-1 w-16 rounded bg-accent md:w-20 mx-auto" />
						</div>
						<div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
							{keynotes.map((k) => (
								<Speaker key={k.name} name={k.name} role={k.affiliation} initials={k.initials} siteUrl={k.siteUrl} bio={k.bio} imageSrc={k.imageSrc} />
							))}
						</div>
					</div>
				</section>

				{/* About */}
				<section id="about" className="py-12 md:py-16 lg:py-20">
					<div className="mx-auto grid max-w-6xl items-start gap-10 px-6">
						<div className="space-y-5">
							<h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">About the Conference</h2>
							<div className="h-1 w-16 rounded bg-accent md:w-20 mx-auto" />
						<div className="mx-auto mt-4 max-w-3xl space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
							<p>On behalf of the Centre for Quantitative Finance (CQF) at the National University of Singapore (NUS), we are delighted to invite you to join us at the QF Annual Conference 2026, to be held from 10–12 June 2026 in Singapore.</p>
							<p>The QF Annual Conference is the flagship academic event of CQF, bringing together leading researchers, policymakers, and industry practitioners in quantitative finance, data science, and emerging technologies. The conference serves as a vibrant platform for advancing dialogue between theory and practice, fostering collaboration, and showcasing cutting-edge developments in financial econometrics, risk analytics, computational methods, fintech innovation, and quantum finance.</p>
							<p>The Centre for Quantitative Finance (CQF) at NUS is dedicated to promoting interdisciplinary research and education at the intersection of mathematics, data science, and finance. We work closely with global academic and industry partners to advance innovation, develop frontier methodologies, and cultivate the next generation of thought leaders in quantitative finance.</p>
							<p>This year’s conference will be integrated into the broader QF Thematic Program (1–19 June 2026), sponsored by the NUS Institute for Mathematical Sciences (IMS). The program features a series of tutorials, workshops, and collaborative research sessions, offering extended opportunities for in-depth academic exchange and networking. More information is available on the program website: https://ims.nus.edu.sg/events/qf_2026/.</p>
							<p>We warmly welcome your participation in this exciting event and look forward to your contribution to the continuing success of the QF Annual Conference.</p>
						</div>

						<ul className="mx-auto mt-6 grid max-w-3xl grid-cols-1 gap-3 text-sm text-muted-foreground sm:grid-cols-3 md:gap-4">
							<li className="flex items-start gap-2"><CalendarDays className="mt-0.5 h-4 w-4 text-accent" /> 10–12 June 2026</li>
							<li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-accent" /> Auditorium 1 (UT-AUD1), University Town</li>
							<li className="flex items-start gap-2"><Landmark className="mt-0.5 h-4 w-4 text-accent" /> Center for Quantitative Finance, National University of Singapore</li>
						</ul>
						</div>
					</div>
				</section>

				<section id="program" className="py-12 md:py-16 lg:py-20">
					<div className="mx-auto max-w-3xl px-6 text-center">
						<h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">Program</h2>
						<p className="mt-2 text-muted-foreground md:text-lg">For specific details, visit the official event page.</p>
						<div className="mt-6">
							<a
								href="https://ims.nus.edu.sg/events/qf_2026/"
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground hover:bg-accent/90"
							>
								View full program
							</a>
						</div>
					</div>
				</section>

				{/* Venue & Map */}
				<section id="venue" className="py-12 md:py-16 lg:py-20">
					<div className="mx-auto max-w-6xl px-6">
						<h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">Venue & Map</h2>
						<div className="h-1 w-16 rounded bg-accent md:w-20 mx-auto mt-2" />
						<Card className="mt-6 shadow-sm">
							<CardContent className="p-0">
								<div className="relative w-full pb-[56.25%]">
									<iframe
										title="NUS University Town – Auditorium 1"
										className="absolute inset-0 h-full w-full border-0"
										loading="lazy"
										referrerPolicy="no-referrer-when-downgrade"
										src="https://www.google.com/maps?q=1+Create+Way,+Town+Plaza,+Singapore+138602&output=embed"
										allowFullScreen
									/>
								</div>
								<div className="flex justify-between p-4 text-sm text-muted-foreground">
					      			<div className="text-left">
										<div>Auditorium 1 (UT-AUD1), University Town</div>
										<div>1 Create Wy, Level 1 Town Plaza, Singapore 138602</div>
									</div>
									<a
										href="https://www.google.com/maps/search/?api=1&query=1+Create+Way,+Town+Plaza,+Singapore+138602"
										target="_blank"
										rel="noreferrer"
										className="inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:bg-accent/90"
									>
										Open in Google Maps
        							</a>
      							</div>
							</CardContent>
						</Card>
					</div>
				</section>

			</main>

			<footer className="border-t bg-muted/40">
				<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-sm text-muted-foreground">
					<p>© 2026 Center for Quantitative Finance</p>
					<div className="flex items-center gap-4">
						<a className="hover:underline" href="#">Privacy</a>
						<a className="hover:underline" href="#">Terms</a>
					</div>
				</div>
			</footer>
      </div>
	)
}

// Removed deprecated TimelineRow

function Speaker({ name, role, initials, siteUrl, bio, imageSrc }: { name: string; role: string; initials: string; siteUrl?: string; bio?: string; imageSrc?: string }) {
    return (
        <div className="flex h-full flex-col items-center gap-3 rounded-lg border p-4 text-center">
            <Avatar className="h-36 w-36 md:h-40 md:w-40">
                <AvatarImage src={imageSrc || ""} alt={name} />
                <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
                <div className="text-base font-semibold">{name}</div>
                <div className="text-sm text-muted-foreground">{role}</div>
						{bio ? (
							<p className="text-sm text-muted-foreground">
								{(() => {
									const phrase = 'Bachelier Finance Society'
									const url = 'https://www.bachelierfinance.org/'
									const parts = bio.split(phrase)
									if (parts.length === 1) return bio
									return parts.map((part, idx) => (
										idx < parts.length - 1 ? (
											<span key={idx}>
												{part}
												<a href={url} target="_blank" rel="noreferrer" className="text-accent hover:underline">{phrase}</a>
											</span>
										) : part
									))
								})()}
							</p>
						) : null}
                {siteUrl ? (
                    <a href={siteUrl} target="_blank" rel="noreferrer" className="text-sm font-medium text-accent hover:underline">
                        Personal site
                    </a>
                ) : null}
            </div>
        </div>
    )
}
