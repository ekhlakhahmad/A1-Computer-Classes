import React from "react";
import {
	FaFacebook,
	FaFacebookSquare,
	FaInstagram,
	FaInstagramSquare,
	FaYoutube,
} from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp, IoMdCall } from "react-icons/io";
import { LuInstagram } from "react-icons/lu";
import { MdLanguage, MdOutlineEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import "./style.css";


const Footer = () => {
	return (
		<div>
			<div className="footerSec">
				<div className="quickLink">
					<h2 className="border-b-2 font-semibold text-2xl text-center mb-4">
						Quick Link
					</h2>
					<ul>
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">Registration</a>
						</li>
						<li>
							<a href="#">Result</a>
						</li>
						<li>
							<a href="#">Admission</a>
						</li>
						<li>
							<a href="#">Our Blogs</a>
						</li>
					</ul>
				</div>
				<div className="registerOffice">
					<h2 className="border-b-2 font-semibold text-2xl text-center mb-4">
						Register Address
					</h2>
					<h3>QUANTUM COMPUTER ACADEMY & MANAGEMENT PVT.LTD.</h3>
					<p>
						Lala Babu Colony, Behind High School Chainpur, Siwan Bihar (841203)
					</p>
					<a href="mailto:quantumcomputeracademy@gmail.com">
						<MdOutlineEmail />
						quantumcomputeracademy@gmail.com
					</a>
					<a href="tel:+918603156431">
						<IoMdCall />
						+91 8603156431
					</a>
				</div>
				<div className="corporateOffice">
					<h2 className="border-b-2 font-semibold text-2xl text-center mb-4">
						Corporate Address
					</h2>
					<h3>A1 COMPUTER CLASSES & MANAGEMENT PVT.LTD.</h3>
					<p>Near Ideal Public School Hasanpur Siwan Bihar 841236.</p>
					<a href="mailto:a1computerclasses@gmail.com">
						<MdOutlineEmail />
						a1computerclasses@gmail.com
					</a>
					<a href="tel:+918603156431">
						<IoMdCall />
						+91 8603156431
					</a>
				</div>
				<div>
					<h2 className="border-b-2 font-semibold text-2xl text-center mb-4">
						Social Link
					</h2>
					<div className="socialMedia">
						<a
							className="text-[#FF0000]"
							href="https://www.youtube.com/@A1COMPUTERCLASSES-le5zu"
							target="_blank">
							<FaYoutube />
						</a>
						<a
							className="text-[#e1306c]"
							href="https://www.instagram.com/a1computerclasses?igsh=cHg0OWNwM3VpM3Qx"
							target="_blank">
							<FaSquareInstagram />
						</a>
						<a
							className="text-[#25D366]"
							href="https://wa.me/+918603156431"
							target="_blank">
							<IoLogoWhatsapp />
						</a>
						<a className="text-[#1877F2]" href="#" target="_blank">
							<FaFacebook />
						</a>
					</div>
				</div>
			</div>
			<p className="text-center p-2 bg-[#061a25] text-white">
				© 2016-{new Date().getFullYear()} | A1 Computer Classes & Management Pvt.
				Ltd. | All Rights Reserved.
			</p>
		</div>
	);
};

export default Footer;
