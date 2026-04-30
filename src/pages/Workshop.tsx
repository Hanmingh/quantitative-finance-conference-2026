import { CalendarDays, MapPin, Landmark } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
} from '@/components/ui/card'

const workshopSpeakers = [
	{ name: "Anna Aksamit", affiliation: "University of Sydney" },
	{ name: "Sara Biagini", affiliation: "Luiss University" },
	{ name: "Patrick Cheridito", affiliation: "ETH Zürich" },
	{ name: "Umut Çetin", affiliation: "The London School of Economics and Political Science" },
	{ name: "Paolo Guasoni", affiliation: "Dublin City University" },
	{ name: "Sebastian Jaimungal", affiliation: "University of Toronto" },
	{ name: "Anastasis Kratsios", affiliation: "McMaster University and Vector Institute" },
	{ name: "Kasper Larsen", affiliation: "Rutgers University" },
	{ name: "Mathieu Laurière", affiliation: "NYU Shanghai" },
	{ name: "Xiaolu Tan", affiliation: "The Chinese University of Hong Kong" },
	{ name: "Hao Xing", affiliation: "Boston University Questrom" },
	{ name: "Rama Cont", affiliation: "University of Oxford" },
]

export default function Workshop() {
	return (
		<>
			<section id="hero" className="relative isolate">
				<img
					className="absolute inset-0 h-full w-full object-cover object-[50%_30%] sm:object-center"
					src="/Hero.jpg"
					alt="Workshop hero background"
					loading="eager"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-blue-950/60 via-blue-900/50 to-blue-900/40 sm:from-blue-950/50 sm:via-blue-900/40 sm:to-blue-900/30" />
				<div className="relative mx-auto max-w-6xl px-6">
					<div className="flex min-h-[260px] items-center sm:min-h-[420px] lg:min-h-[560px]">
						<div className="mx-auto max-w-xl text-center text-white sm:max-w-3xl lg:max-w-5xl">
							<h1 className="text-xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl drop-shadow-lg">Workshop</h1>
							<p className="mt-3 text-sm sm:text-base md:text-lg lg:text-xl drop-shadow-md">8–9 June 2026 · Singapore</p>
							<div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm opacity-95">
								<span className="hidden sm:inline-flex items-center gap-2"><Landmark className="h-4 w-4" />Center for Quantitative Finance X Institute for Mathematical Sciences, NUS</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			<main className="flex-1">
				{/* About Section */}
				<section className="bg-white py-12 md:py-16 lg:py-20">
					<div className="mx-auto max-w-4xl px-6">
						<div className="space-y-4 text-center">
							<h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">About the Workshop</h2>
							<div className="h-1 w-16 rounded bg-accent md:w-20 mx-auto" />
						</div>

						<ul className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-3 text-base text-muted-foreground sm:grid-cols-2 md:gap-4 md:text-lg">
							<li className="flex items-start gap-2">
								<CalendarDays className="mt-0.5 h-5 w-5 md:h-6 md:w-6 text-accent" />
								<span>8–9 June 2026</span>
							</li>
							<li className="flex items-start gap-2">
								<MapPin className="mt-0.5 h-5 w-5 md:h-6 md:w-6 text-accent" />
								<span>IMS Executive Seminar Room, National University of Singapore</span>
							</li>
						</ul>

						<div className="mx-auto mt-8 max-w-3xl space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base text-justify">
							<p>The QF Workshop provides focused sessions on specialized topics in quantitative finance. It offers an excellent opportunity for researchers and practitioners to engage in in-depth discussions and collaborative problem-solving.</p>
							<p>The workshop will feature invited presentations and interactive sessions designed to foster knowledge exchange and networking among participants.</p>
							<p>Registration for Workshop only:</p>
							<div className="mt-6 sm:mt-8 text-center">
								<a href="https://forms.office.com/pages/responsepage.aspx?id=Xu-lWwkxd06Fvc_rDTR-glpST3DWaXhCv1ms4wwV109UMUNEVkpVMjE0NEZEUDRaWU85UjEyNTlMOCQlQCN0PWcu&route=shorturl" target="_blank" rel="noreferrer">
								<Button size="lg" className="w-full sm:w-auto rounded-full bg-accent text-accent-foreground transition-colors shadow-md hover:bg-accent/90 hover:shadow-lg cursor-pointer">Register</Button>
								</a>
							</div>
						</div>
					</div>
				</section>

				{/* Workshop Speakers */}
				<section className="py-12 md:py-16 lg:py-20">
					<div className="mx-auto max-w-4xl px-6">
						<div className="text-center">
							<h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">Workshop Speakers</h2>
							<div className="h-1 w-16 rounded bg-accent md:w-20 mx-auto mt-4" />
						</div>

						<ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
							{workshopSpeakers.map((speaker) => (
								<li key={speaker.name} className="border-l-2 border-accent pl-4 py-1">
									<p className="font-medium text-foreground">{speaker.name}</p>
									<p className="text-sm text-muted-foreground">{speaker.affiliation}</p>
								</li>
							))}
						</ul>
					</div>
				</section>

				{/* Venue & Map */}
				<section id="venue" className="bg-white py-12 md:py-16 lg:py-20">
					<div className="mx-auto max-w-6xl px-6">
						<div className="space-y-4 text-center">
							<h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">Venue & Map</h2>
							<div className="h-1 w-16 rounded bg-accent md:w-20 mx-auto" />
						</div>
						<Card className="mt-8 shadow-sm">
							<CardContent className="p-0">
								<div className="relative w-full pb-[56.25%]">
									<iframe
										title="Institute for Mathematical Sciences, NUS"
										className="absolute inset-0 h-full w-full border-0"
										loading="lazy"
										referrerPolicy="no-referrer-when-downgrade"
										src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.795120067217!2d103.77783297585685!3d1.2976293986900578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1a5469f74519%3A0x4b6a553bb99231fe!2sInstitute%20for%20Mathematical%20Sciences!5e0!3m2!1sen!2ssg!4v1769496594463!5m2!1sen!2ssg"
										allowFullScreen
									/>
								</div>
								<div className="flex flex-col sm:flex-row sm:justify-between gap-4 p-4 text-sm text-muted-foreground">
									<div className="text-left">
										<div className="font-medium text-foreground">IMS Executive Seminar Room</div>
										<div>Institute for Mathematical Sciences, NUS</div>
										<div>3 Prince George's Park, Singapore 118402</div>
									</div>
									<a
										href="https://www.google.com/maps/search/?api=1&query=Institute+for+Mathematical+Sciences+NUS"
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
