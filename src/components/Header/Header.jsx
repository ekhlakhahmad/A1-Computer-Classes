import React, { useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import {
	MdDarkMode,
	MdLanguage,
	MdOutlineLightMode,
	MdOutlinePayment,
} from "react-icons/md";
import "./style.css";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
	const [dark, setDark] = useState(true);

	const toggleDarkMode = () => {
		setDark(!dark);
	};

	return (
		<>
			<div className="header-container">
				<div className="contact-details">
					<a href="www.a1computerclasses.co.in">
						<MdLanguage />
						a1computerclasses.co.in
					</a>
					<a href="tel:+918603156431">
						<IoMdCall />
						+91 8603156431
					</a>
				</div>
				<div className="link-details">
					<NavLink to="/login">
						<button>
							<FaLock />
							Login
						</button>
					</NavLink>
					<NavLink to="/register">
						<button>
							<FaUser />
							Register
						</button>
					</NavLink>
					<div
						className="flex items-center cursor-pointer"
						onClick={toggleDarkMode}>
						{dark ? <MdDarkMode /> : <MdOutlineLightMode />}
					</div>
				</div>
			</div>
			<div className="heading-sec">
				<NavLink to="/">
					<img className="logo"
						src="https://a1computerclasses.com/wp-content/uploads/2024/03/111.jpg"
						alt="logo"
					/>
				</NavLink>
				<ul>
					<li>
						<NavLink className="navLink" to="/">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink className="navLink" to="/about">
							About
						</NavLink>
					</li>
					<li>
						<NavLink className="navLink" to="/course">
							Course
						</NavLink>
					</li>
					<li>
						<NavLink className="navLink" to="/studentZone">
							Student Zone
						</NavLink>
					</li>
					<li>
						<NavLink className="navLink" to="/gallery">
							Gallery
						</NavLink>
					</li>
					<li>
						<NavLink className="navLink" to="/franshisee">
							Franshisee
						</NavLink>
					</li>
					<li>
						<NavLink className="navLink" to="/contact">
							Contact
						</NavLink>
					</li>
				</ul>
				<div className="humburgerMenu">
					<GiHamburgerMenu />
				</div>
			</div>
		</>
	);
};

export default Header;
