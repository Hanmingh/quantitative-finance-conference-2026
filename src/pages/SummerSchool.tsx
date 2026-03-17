import { CalendarDays, MapPin, Landmark, BookOpen, Users, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
} from '@/components/ui/card'

const lectureCourses = [
	{
		lecturer: "Beatrice Acciaio",
		affiliation: "ETH Zurich",
		course: "Optimal Transport and Applications in Mathematical Finance",
	},
	{
		lecturer: "Christa Cuchiero",
		affiliation: "University of Vienna",
		course: "Generative AI in Finance",
	},
	{
		lecturer: "Mathieu Laurière",
		affiliation: "NYU Shanghai",
		course: "Mean Field Games and Applications in Mathematical Finance",
	},
	{
		lecturer: "Sara Biagini",
		affiliation: "LUISS Rome",
		course: "Carbon Emissions Regulation",
	},
]

const highlights = [
	{
		icon: BookOpen,
		title: "4 Lecture Courses",
		description: "Intensive courses taught by world-renowned experts",
	},
	{
		icon: Users,
		title: "Interactive Sessions",
		description: "Engage directly with lecturers and fellow participants",
	},
	{
		icon: Award,
		title: "Certificate",
		description: "Receive a certificate of completion from NUS",
	},
]

export default function SummerSchool() {
	return (
		<>
			<section id="hero" className="relative isolate">
				<img
					className="absolute inset-0 h-full w-full object-cover object-[50%_30%] sm:object-center"
					src="/Hero.jpg"
					alt="Summer School hero background"
					loading="eager"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-blue-950/60 via-blue-900/50 to-blue-900/40 sm:from-blue-950/50 sm:via-blue-900/40 sm:to-blue-900/30" />
				<div className="relative mx-auto max-w-6xl px-6">
					<div className="flex min-h-[260px] items-center sm:min-h-[420px] lg:min-h-[560px]">
						<div className="mx-auto max-w-xl text-center text-white sm:max-w-3xl lg:max-w-5xl">
							<h1 className="text-xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl drop-shadow-lg">Summer School</h1>
							<p className="mt-3 text-sm sm:text-base md:text-lg lg:text-xl drop-shadow-md">2–5 June 2026 · Singapore</p>
							<p className="mt-2 text-sm sm:text-base font-bold drop-shadow-md">Acceptances for participation and room allocation (if required) are provided on a rolling basis, so early application is encouraged.</p>
							<div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm opacity-95">
								<span className="hidden sm:inline-flex items-center gap-2"><Landmark className="h-4 w-4" />Center for Quantitative Finance X Institute for Mathematical Sciences, NUS</span>
							</div>
							<div className="mt-6 sm:mt-8">
								<a href="https://forms.office.com/r/e5tFyGndV8" target="_blank" rel="noreferrer">
									<Button size="lg" className="w-full sm:w-auto rounded-full bg-accent text-accent-foreground transition-colors shadow-md hover:bg-accent/90 hover:shadow-lg cursor-pointer">Apply Now</Button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<main className="flex-1">
				{/* About Section */}
				<section className="bg-white py-12 md:py-16 lg:py-20">
					<div className="mx-auto max-w-6xl px-6">
						<div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
							<div>
								<h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">About the Summer School</h2>
								<div className="h-1 w-16 rounded bg-accent md:w-20 mt-4" />
								
								<div className="mt-6 space-y-4 text-muted-foreground md:text-lg leading-relaxed text-justify">
									<p>The QF Summer School offers an intensive program designed for graduate students, early-career researchers, and practitioners who want to deepen their understanding of quantitative finance.</p>
									<p>The program features tutorials and lectures by leading experts, covering foundational and advanced topics in financial mathematics, econometrics, and computational methods.</p>
								</div>

								<ul className="mt-6 space-y-3">
									<li className="flex items-center gap-3 text-muted-foreground">
										<CalendarDays className="h-5 w-5 text-accent shrink-0" />
										<span>2–5 June 2026</span>
									</li>
									<li className="flex items-center gap-3 text-muted-foreground">
										<MapPin className="h-5 w-5 text-accent shrink-0" />
										<span>IMS Executive Seminar Room, National University of Singapore</span>
									</li>
								</ul>
							</div>

							<div className="grid gap-4">
								{highlights.map((item) => (
									<Card key={item.title} className="shadow-sm border-l-4 border-l-accent">
										<CardContent className="p-5 flex items-start gap-4">
											<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent mt-0.5">
												<item.icon className="h-5 w-5" />
											</div>
											<div className="flex-1 min-w-0">
												<h3 className="font-semibold text-foreground leading-tight">{item.title}</h3>
												<p className="text-sm text-muted-foreground mt-1">{item.description}</p>
											</div>
										</CardContent>
									</Card>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* Lecture Courses */}
				<section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-muted/30 to-muted/50">
					<div className="mx-auto max-w-6xl px-6">
						<div className="text-center">
							<h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">Lecture Courses</h2>
							<div className="h-1 w-16 rounded bg-accent md:w-20 mx-auto mt-4" />
							<p className="mt-4 text-muted-foreground md:text-lg max-w-2xl mx-auto">
								The summer school features four comprehensive lecture courses taught by internationally recognized experts in quantitative finance
							</p>
						</div>

						<div className="mt-12 grid gap-6 md:grid-cols-2">
							{lectureCourses.map((item, index) => (
								<Card key={item.lecturer} className="shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
									<CardContent className="p-0">
										<div className="flex">
											<div className="w-2 bg-blue-500 group-hover:bg-accent transition-colors" />
											<div className="p-6 flex-1">
												<div className="flex items-start justify-between gap-4">
													<div className="flex-1">
														<p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">Course {index + 1}</p>
														<h3 className="text-lg font-semibold text-foreground mb-1">{item.lecturer}</h3>
														<p className="text-sm text-muted-foreground mb-3">{item.affiliation}</p>
														<p className="text-sm font-medium text-foreground/80 leading-relaxed">
															{item.course}
														</p>
													</div>
												</div>
											</div>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* Application */}
				<section id="apply" className="bg-white py-12 md:py-16 lg:py-20">
					<div className="mx-auto max-w-4xl px-6">
						<Card className="shadow-lg overflow-hidden">
							<div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 md:p-10 text-white text-center">
								<h2 className="text-2xl font-bold md:text-3xl">Ready to Join?</h2>
								<p className="mt-3 text-blue-100 md:text-lg max-w-xl mx-auto">
									Apply now to secure your spot in this intensive program featuring world-class instructors from leading institutions worldwide.
								</p>
								<div className="mt-6">
									<a
										href="https://forms.office.com/r/e5tFyGndV8"
										target="_blank"
										rel="noreferrer"
										className="inline-flex items-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition-colors shadow-md cursor-pointer"
									>
										Apply Now
									</a>
								</div>
							</div>
						</Card>
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
