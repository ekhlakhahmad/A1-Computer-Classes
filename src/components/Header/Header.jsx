import React from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdLanguage, MdOutlinePayment } from "react-icons/md";
// import logo from "../utilities/headingLogo.webp";

const Header = () => {
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
					<a href="#">
						<FaLock />
						Login
					</a>
					<a href="#">
						<FaUser />
						Register
					</a>
					<a href="#">
						<MdOutlinePayment />
						Payment
					</a>
				</div>
			</div>
			<div className="heading-sec">
				<a href="#">
					<img
						src="https://a1computerclasses.com/wp-content/uploads/2024/03/111.jpg"
						alt="logo"
					/>
				</a>
				<ul>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">About</a>
					</li>
					<li>
						<a href="#">Course</a>
					</li>
					<li>
						<a href="#">Student Zone</a>
					</li>
					<li>
						<a href="#"></a>Gallery
					</li>
					<li>
						<a href="#"></a>Franshisee
					</li>
					<li>
						<a href="#"></a>Contact
					</li>
				</ul>
			</div>
		</>
	);
};

export default Header;
