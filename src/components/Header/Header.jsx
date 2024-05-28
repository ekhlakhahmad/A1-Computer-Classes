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
import { RxCross1 } from "react-icons/rx";
import { ImCross } from "react-icons/im";

const Header = () => {
	const [dark, setDark] = useState(true);
	const [active, setActive] = useState(false);
	const [humburgerMenu, setHumburgerMenu] = useState(true);

	const toggleDarkMode = () => {
		setDark(!dark);
	};

	const toggleHumburgerMenu = () => {
		setHumburgerMenu(!humburgerMenu);
		setActive(!active);
	};

	return (
		<div>
			<div
				className={`${active ? "overlayActive " : "overlayHidden"}`}
				onClick={toggleHumburgerMenu}></div>
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
					<img
						className="logo"
						src="https://a1computerclasses.com/wp-content/uploads/2024/03/111.jpg"
						alt="logo"
					/>
				</NavLink>
				<ul className={`navbar ${active ? "navactive" : "notactive"}`}>
					<li>
						<NavLink className="navLink" to="/" onClick={toggleHumburgerMenu}>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							className="navLink"
							to="/course"
							onClick={toggleHumburgerMenu}>
							Course
						</NavLink>
					</li>
					<li>
						<NavLink
							className="navLink"
							to="/gallery"
							onClick={toggleHumburgerMenu}>
							Gallery
						</NavLink>
					</li>
					<li>
						<NavLink
							className="navLink"
							to="/about"
							onClick={toggleHumburgerMenu}>
							About
						</NavLink>
					</li>
					<li>
						<NavLink
							className="navLink"
							to="/contact"
							onClick={toggleHumburgerMenu}>
							Contact
						</NavLink>
					</li>
				</ul>
				<div className="humburgerMenu" onClick={toggleHumburgerMenu}>
					{humburgerMenu ? (
						<GiHamburgerMenu />
					) : (
						<RxCross1 className="font-extrabold text-xl" />
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;
