import { CalendarDays, MapPin, Landmark, FileText, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
} from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { keynotes } from '@/data/keynotes'
import { organizers } from '@/data/organizers'
import { Link } from 'react-router-dom'

export default function Conference() {
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
							<h1 className="text-xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl drop-shadow-lg">Quantitative Finance Conference 2026</h1>
							<p className="mt-3 text-sm sm:text-base md:text-lg lg:text-xl drop-shadow-md">10–12 June 2026 · Singapore</p>
							<div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm opacity-95">
								<span className="hidden sm:inline-flex items-center gap-2"><Landmark className="h-4 w-4" />Center for Quantitative Finance, National University of Singapore</span>
							</div>
							<div className="mt-6 sm:mt-8 flex flex-col items-center justify-center gap-3">
								<a
									href="https://www.gevme.com/quantitative-finance-conference-2026"
									target="_blank"
									rel="noreferrer"
								>
									<Button
										size="lg"
										className="w-[min(420px,100%)] rounded-full bg-accent text-accent-foreground transition-colors shadow-md hover:bg-accent/90 hover:shadow-lg cursor-pointer"
									>
										Register
									</Button>
								</a>
								<a href="https://forms.office.com/r/MaeztkxuPD" target="_blank" rel="noreferrer">
									<Button
										size="lg"
										variant="outline"
										className="w-[min(420px,100%)] rounded-full border bg-white text-foreground transition-colors shadow-md hover:bg-muted cursor-pointer"
									>
										Call for Invited Sessions
									</Button>
								</a>
								<a
									href="https://forms.office.com/Pages/ResponsePage.aspx?id=Xu-lWwkxd06Fvc_rDTR-ggvMrAZJ1BhIilC9INMxyuBUMVhWQU9HVERNT0lURDVGVlY4SzlUSURHNS4u"
									target="_blank"
									rel="noreferrer"
								>
									<Button
										size="lg"
										variant="outline"
										className="w-[min(420px,100%)] rounded-full border bg-white text-foreground transition-colors shadow-md hover:bg-muted cursor-pointer"
									>
										Call for Contributed Talks
									</Button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<main className="flex-1">
				{/* Program Info */}
				<section className="bg-muted/40 py-4 md:py-5">
					<div className="mx-auto max-w-4xl px-6">
						<div className="flex items-center justify-center gap-3">
							<div className="hidden sm:block h-px flex-1 bg-gradient-to-r from-transparent to-border" />
							<p className="text-sm text-muted-foreground text-center">
								The CQF Annual Conference 2026 is part of the {' '}
								<Link to="/program" className="font-medium text-accent hover:underline">
									Quantitative Finance Programme (01 Jun 2026–19 Jun 2026)
								</Link>
								<span className="hidden sm:inline">, co-sponsored by the <a href="https://ims.nus.edu.sg/events/qf_2026/" target="_blank" rel="noreferrer" className="font-medium text-accent hover:underline">Institute for Mathematical Sciences (IMS)</a> and the <a href="https://www.math.nus.edu.sg/cqf/" target="_blank" rel="noreferrer" className="font-medium text-accent hover:underline">Centre for Quantitative Finance (CQF)</a>.</span>
							</p>
							<div className="hidden sm:block h-px flex-1 bg-gradient-to-l from-transparent to-border" />
						</div>
					</div>
				</section>

				<section id="keynotes" className="bg-white py-12 md:py-16 lg:py-20">
					<div className="mx-auto max-w-6xl px-6">
						<div className="space-y-4 text-center">
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
					<div className="mx-auto max-w-6xl px-6">
						<div className="space-y-4 text-center">
							<h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">About the Conference</h2>
							<div className="h-1 w-16 rounded bg-accent md:w-20 mx-auto" />
						</div>

						<ul className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-3 text-base text-muted-foreground sm:grid-cols-3 md:gap-4 md:text-lg">
							<li className="flex items-start gap-2">
								<CalendarDays className="mt-0.5 h-5 w-5 md:h-6 md:w-6 text-accent" />
								<span>10–12 June 2026</span>
							</li>
							<li className="flex items-start gap-2">
								<MapPin className="mt-0.5 h-5 w-5 md:h-6 md:w-6 text-accent" />
								<span>Auditorium 1 (UT-AUD1), University Town</span>
							</li>
							<li className="flex items-start gap-2">
								<Landmark className="mt-0.5 h-5 w-5 md:h-6 md:w-6 text-accent" />
								<span>Center for Quantitative Finance, NUS</span>
							</li>
							<li className="flex items-start gap-2 sm:col-span-2 md:col-span-3">
								<Users className="mt-0.5 h-5 w-5 md:h-6 md:w-6 text-accent" />
								<span>
									<span className="font-medium text-foreground">Organizing committee:</span>{' '}
									{organizers.join(', ')}
								</span>
							</li>
						</ul>

						<div className="mx-auto mt-8 max-w-4xl space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base text-justify">
							<p>On behalf of the Centre for Quantitative Finance (CQF) at the National University of Singapore (NUS), we are delighted to invite you to join us at the QF Annual Conference 2026, to be held from 10–12 June 2026 in Singapore.</p>
							<p>The QF Annual Conference is the flagship academic event of CQF, bringing together leading researchers, policymakers, and industry practitioners in quantitative finance, data science, and emerging technologies. The conference serves as a vibrant platform for advancing dialogue between theory and practice, fostering collaboration, and showcasing cutting-edge developments in financial econometrics, risk analytics, computational methods, fintech innovation, and quantum finance.</p>
							<p>The Centre for Quantitative Finance (CQF) at NUS is dedicated to promoting interdisciplinary research and education at the intersection of mathematics, data science, and finance. We work closely with global academic and industry partners to advance innovation, develop frontier methodologies, and cultivate the next generation of thought leaders in quantitative finance.</p>
							<p>This year's conference will be integrated into the broader QF Thematic Program (1–19 June 2026), sponsored by the NUS Institute for Mathematical Sciences (IMS). The program features a series of tutorials, workshops, and collaborative research sessions, offering extended opportunities for in-depth academic exchange and networking. More information is available on the program website: <a href="https://ims.nus.edu.sg/events/qf_2026/" target="_blank" rel="noreferrer" className="text-accent hover:underline">ims.nus.edu.sg/events/qf_2026</a>.</p>
							<p>We warmly welcome your participation in this exciting event and look forward to your contribution to the continuing success of the QF Annual Conference.</p>
						</div>
					</div>
				</section>

				{/* Registration */}
				<section id="register" className="bg-white py-12 md:py-16 lg:py-20">
					<div className="mx-auto max-w-6xl px-6">
						<div className="space-y-4 text-center">
							<h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">Registration</h2>
							<div className="h-1 w-16 rounded bg-accent md:w-20 mx-auto" />
						</div>
						<div className="mt-8 grid gap-6 md:grid-cols-3">
							<Card className="shadow-sm h-full">
								<CardContent className="flex h-full flex-col space-y-3 p-6">
									<div className="text-lg font-semibold">Session Proposal</div>
									<p className="text-sm text-muted-foreground text-justify">For prospective organizers who wish to host an invited session at QF2026. Briefly outline the session theme, motivation, and 4 potential speakers in your proposal.</p>
									<p className="text-sm font-bold">Deadline: April 5, 2026</p>
									<div className="mt-auto flex flex-wrap justify-center gap-2 pt-1">
									<a
										href="https://forms.office.com/r/MaeztkxuPD"
										target="_blank"
										rel="noreferrer"
										className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground hover:bg-accent/90 cursor-pointer"
									>
										Submit Now
									</a>
										<a
											href="/Call%20for%20Invited%20Sessions.pdf"
											target="_blank"
											rel="noreferrer"
											className="inline-flex items-center rounded-full border px-5 py-2.5 text-sm font-medium text-foreground bg-white hover:bg-muted cursor-pointer"
										>
											<FileText className="mr-2 h-4 w-4" />
											View details
										</a>
									</div>
								</CardContent>
							</Card>
							<Card className="shadow-sm h-full">
								<CardContent className="flex h-full flex-col space-y-3 p-6">
									<div className="text-lg font-semibold">Contributed Talk</div>
									<div className="mt-auto flex flex-wrap justify-center gap-2 pt-1">
										<a
											href="https://forms.office.com/Pages/DesignPageV2.aspx?subpage=design&FormId=Xu-lWwkxd06Fvc_rDTR-ggvMrAZJ1BhIilC9INMxyuBUMVhWQU9HVERNT0lURDVGVlY4SzlUSURHNS4u&Token=fa1101c0b84f4a7eb1cec0c5029cf516"
											target="_blank"
											rel="noreferrer"
											className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground hover:bg-accent/90 cursor-pointer"
										>
											Submit Now
										</a>
									</div>
								</CardContent>
							</Card>
							<Card className="shadow-sm h-full">
								<CardContent className="flex h-full flex-col space-y-3 p-6">
									<div className="text-lg font-semibold">Participant Registration</div>
									<div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground md:gap-3 md:text-sm">
										<span className="font-medium">Conference fees:</span>
										<span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-[11px] md:text-xs text-foreground">Standard S$350</span>
										<span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-[11px] md:text-xs text-foreground">Student S$150</span>
										<span className="hidden md:inline text-muted-foreground">•</span>
										<span className="inline-flex items-center rounded-full bg-muted/70 px-2 py-0.5 text-[11px] md:text-xs text-foreground">Dinner included</span>
									</div>
									<p className="text-sm text-muted-foreground text-justify">For general attendees (faculty, students, and industry). Registration is available via GEVME.</p>
									<div className="mt-auto flex justify-center pt-1">
										<a
											href="https://www.gevme.com/quantitative-finance-conference-2026"
											target="_blank"
											rel="noreferrer"
											className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground hover:bg-accent/90 cursor-pointer"
										>
											Register
										</a>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>

				{/* Venue & Map */}
				<section id="venue" className="py-12 md:py-16 lg:py-20">
					<div className="mx-auto max-w-6xl px-6">
						<div className="space-y-4 text-center">
							<h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">Venue & Map</h2>
							<div className="h-1 w-16 rounded bg-accent md:w-20 mx-auto" />
						</div>
						<Card className="mt-8 shadow-sm">
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
							<div className="flex flex-col sm:flex-row sm:justify-between gap-4 p-4 text-sm text-muted-foreground">
									<div className="text-left">
										<div className="font-medium text-foreground">Auditorium 1 (UT-AUD1), University Town</div>
										<div>1 Create Wy, Level 1 Town Plaza, Singapore 138602</div>
									</div>
									<a
										href="https://www.google.com/maps/search/?api=1&query=1+Create+Way,+Town+Plaza,+Singapore+138602"
										target="_blank"
										rel="noreferrer"
										className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:bg-accent/90 cursor-pointer"
									>
										Open in Google Maps
									</a>
								</div>
							</CardContent>
						</Card>
					</div>
				</section>
			</main>
		</>
	)
}

function Speaker({ name, role, initials, siteUrl, bio, imageSrc }: { name: string; role?: string; initials: string; siteUrl?: string; bio?: string; imageSrc?: string }) {
    return (
        <div className="flex h-full flex-col items-center gap-3 rounded-lg border p-4 text-center">
            <Avatar className="h-36 w-36 md:h-40 md:w-40">
                <AvatarImage src={imageSrc || ""} alt={name} loading="eager" />
                <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
                <div className="text-base font-semibold">{name}</div>
                {role ? <div className="text-sm text-muted-foreground">{role}</div> : null}
						{bio ? (
							<p className="text-sm text-muted-foreground text-justify">
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
