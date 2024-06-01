import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import About from "./pages/About/About";
import Contact from './pages/Contact/Contact'
import Gallery from './pages/Gallery/Gallery'
import ThemeContextWrapper from "./context/ThemeContextWrapper ";

const App = () => {
	return (
		<div className="bg-white dark:bg-[#101720] text-black dark:text-white transition duration-300 ease-in-out">
			<BrowserRouter>
				<ThemeContextWrapper>
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/gallery" element={<Gallery />} />
					</Routes>
					<Footer />
				</ThemeContextWrapper>
			</BrowserRouter>
		</div>
	);
};

export default App
