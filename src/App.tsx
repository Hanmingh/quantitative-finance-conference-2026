import './App.css'
import { CalendarDays, MapPin, Landmark, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
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
					className="absolute inset-0 h-full w-full object-cover"
					src="/Hero.jpg"
					alt="Conference hero background"
					loading="eager"
				/>
				<div className="absolute inset-0 bg-primary/40" />
				<div className="relative mx-auto max-w-6xl px-6">
					<div className="flex min-h-[360px] items-center sm:min-h-[480px] lg:min-h-[560px]">
						<div className="mx-auto max-w-3xl text-center text-white">
							<h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">Quantitative Finance Conference 2026</h1>
							<p className="mt-3 text-base md:text-lg lg:text-xl">10–12 June 2026 · Singapore</p>
							<div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-sm/relaxed opacity-95">
								<span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4" /> 10–12 June</span>
								<span className="inline-flex items-center gap-2"><Landmark className="h-4 w-4" /> National University of Singapore, Center for Quantitative Finance</span>
							</div>
							<div className="mt-8">
								<Button size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90">Register Now</Button>
							</div>
						</div>
					</div>
				</div>
			</section>

			<main className="flex-1">
				{/* About */}
				<section id="about" className="py-12 md:py-16 lg:py-20">
					<div className="mx-auto grid max-w-6xl items-start gap-10 px-6">
						<div className="space-y-5">
							<h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">About the Conference</h2>
							<div className="h-1 w-16 rounded bg-accent md:w-20" />
							<p className="text-muted-foreground md:text-lg lg:text-xl">
								The Quantitative Finance Conference 2026 is a three-day conference from 10-12 June 2026 at NUS Singapore and promotes the latest features, trends and developments in the field. Its aim is to exchange ideas and to bring together and foster collaboration between distinguished and experienced speakers and young researchers.
							</p>
							<div className="rounded-lg border border-accent/30 bg-accent/5 p-4 text-sm text-muted-foreground">
								Detailed program, speakers, and sessions TBA.
							</div>
							<ul className="mt-4 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
								<li className="inline-flex items-start gap-2"><CalendarDays className="mt-0.5 h-4 w-4 text-accent" /> 10–12 June 2026</li>
								<li className="inline-flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-accent" /> Auditorium 1 (UT-AUD1), University Town</li>
								<li className="inline-flex items-start gap-2"><Landmark className="mt-0.5 h-4 w-4 text-accent" /> National University of Singapore</li>
								<li className="inline-flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4 text-accent" /> Daily agenda with keynotes and invited sessions</li>
							</ul>
						</div>
					</div>
				</section>

				<section className="py-12 md:py-16 lg:py-20">
					<div className="mx-auto max-w-6xl px-6">
						<div className="space-y-4">
							<h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">Schedule</h2>
							<p className="text-muted-foreground md:text-lg lg:text-xl">Three days of keynotes and invited sessions.</p>
						</div>
						<div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							<Card>
								<CardHeader>
									<CardTitle className="text-lg">10 June</CardTitle>
								</CardHeader>
								<CardContent className="grid gap-3">
									<TimelineRow time="09:50" title="Opening remarks" />
									<TimelineRow time="10:00" title="Keynote (1 hour)" />
									<TimelineRow title="Tea break" />
									<TimelineRow title="Invited sessions (parallel)" />
									<TimelineRow title="Lunch" />
									<TimelineRow title="Keynote (1 hour)" />
									<TimelineRow title="Tea break" />
									<TimelineRow title="Invited sessions (parallel)" />
									<TimelineRow time="18:00" title="Banquet" />
								</CardContent>
							</Card>

							<Card>
								<CardHeader>
									<CardTitle className="text-lg">11 June</CardTitle>
								</CardHeader>
								<CardContent className="grid gap-3">
									<TimelineRow time="10:00" title="Keynote" />
									<TimelineRow title="Tea break" />
									<TimelineRow title="Invited sessions" />
									<TimelineRow title="Afternoon free discussion" />
								</CardContent>
							</Card>

							<Card>
								<CardHeader>
									<CardTitle className="text-lg">12 June</CardTitle>
								</CardHeader>
								<CardContent className="grid gap-3">
									<TimelineRow time="09:50" title="Opening recap" />
									<TimelineRow title="Keynote (1 hour)" />
									<TimelineRow title="Tea break" />
									<TimelineRow title="Invited sessions (parallel)" />
									<TimelineRow title="Lunch" />
									<TimelineRow title="Keynote (1 hour)" />
									<TimelineRow title="Tea break" />
									<TimelineRow title="Invited sessions (parallel)" />
									<TimelineRow time="17:00" title="Closing" />
								</CardContent>
							</Card>
						</div>
					</div>
				</section>

				<section id="speakers" className="bg-white py-12 md:py-16 lg:py-20">
					<div className="mx-auto max-w-6xl px-6">
						<div className="space-y-4">
							<h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">Speakers</h2>
							<div className="h-1 w-16 rounded bg-accent md:w-20" />
							<p className="text-muted-foreground md:text-lg lg:text-xl">Keynote and invited speakers.</p>
						</div>
						<div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
							{keynotes.map((k) => (
								<Speaker key={k.name} name={k.name} role={k.affiliation} initials={k.initials} siteUrl={k.siteUrl} bio={k.bio} imageSrc={k.imageSrc} />
							))}
						</div>
					</div>
				</section>

				{/* Venue & Map */}
				<section id="venue" className="py-12 md:py-16 lg:py-20">
					<div className="mx-auto max-w-6xl px-6">
						<h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">Venue & Map</h2>
						<div className="h-1 w-16 rounded bg-accent md:w-20" />
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
      <div>
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

function TimelineRow({ time, title }: { time?: string; title: string }) {
	return (
		<div className="flex items-start gap-3 p-2">
			<Clock className={`mt-0.5 h-4 w-4 text-muted-foreground ${!time ? 'invisible' : ''}`} />
			<div>
				{time ? <div className="text-xs uppercase text-muted-foreground">{time}</div> : null}
				<div className="text-sm">{title}</div>
			</div>
		</div>
	)
}

function Speaker({ name, role, initials, siteUrl, bio, imageSrc }: { name: string; role: string; initials: string; siteUrl?: string; bio?: string; imageSrc?: string }) {
    return (
        <div className="flex h-full flex-col items-center gap-3 rounded-lg border p-4 text-center">
            <Avatar className="h-24 w-24">
                <AvatarImage src={imageSrc || ""} alt={name} />
                <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
                <div className="text-base font-semibold">{name}</div>
                <div className="text-sm text-muted-foreground">{role}</div>
                {bio ? <p className="text-sm text-muted-foreground">{bio}</p> : null}
                {siteUrl ? (
                    <a href={siteUrl} target="_blank" rel="noreferrer" className="text-sm font-medium text-accent hover:underline">
                        Personal site
                    </a>
                ) : null}
            </div>
        </div>
    )
}
