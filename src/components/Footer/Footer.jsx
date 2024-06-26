import React from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp, IoMdCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import "./style.css";

const Footer = () => {
	return (
		<div>
			<div className="footerSec bg-[#01314c] dark:bg-darkColSecondary">
				<div className="quickLink">
					<h2 className="underline font-semibold text-2xl mb-4">Quick Link</h2>
					<ul className="footerList">
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
					<h2 className="underline font-semibold text-2xl mb-4">
						Register Address
					</h2>
					<h3>QUANTUM COMPUTER ACADEMY & MANAGEMENT PVT.LTD.</h3>
					<h3>
						Lala Babu Colony, Behind High School Chainpur, Siwan Bihar (841203)
					</h3>
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
					<h2 className="underline font-semibold text-2xl mb-4">
						Corporate Address
					</h2>
					<h3>A1 COMPUTER CLASSES & MANAGEMENT PVT.LTD.</h3>
					<h3>Near Ideal Public School Hasanpur Siwan Bihar 841236.</h3>
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
					<h2 className="underline font-semibold text-2xl mb-4">Social Link</h2>
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
			<div className="lastFooter bg-[#092738] dark:bg-darkColPrimary">
				<p className="text-center p-2 text-white">
					© 2016-{new Date().getFullYear()} | A1 Computer Classes & Management
					Pvt. Ltd. | All Rights Reserved.
				</p>
			</div>
		</div>
	);
};

export default Footer;
