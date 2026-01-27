import './App.css'
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Navbar } from '@/components/navbar'
import Footer from '@/components/footer'
import Program from '@/pages/Program'
import SummerSchool from '@/pages/SummerSchool'
import Workshop from '@/pages/Workshop'
import Conference from '@/pages/Conference'

function ScrollToTop() {
	const { pathname } = useLocation()
	
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])
	
	return null
}

export default function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<div className="flex min-h-dvh flex-col">
				<Navbar />
				<Routes>
					<Route path="/" element={<Conference />} />
					<Route path="/program" element={<Program />} />
					<Route path="/summer-school" element={<SummerSchool />} />
					<Route path="/workshop" element={<Workshop />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	)
}
