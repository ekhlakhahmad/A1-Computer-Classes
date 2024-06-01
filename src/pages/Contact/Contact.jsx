import React from "react";
import "./style.css";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import Location from "../../components/Location/Location";

const Contact = () => {
	return (
		<>
			<div className="contact-sec">
				<div className="formContainer">
					<form action="">
						<div>
							<label htmlFor="stname">Name:</label>
							<input
								className="bg-[#ffffff] dark:bg-[#161f2b]"
								type="text"
								placeholder="Enter Your Name"
								id="stname"
							/>
						</div>
						<div>
							<label htmlFor="email">E-Mail Id:</label>
							<input
								className="bg-[#ffffff] dark:bg-[#161f2b]"
								type="email"
								placeholder="Enter Your Email"
								inputMode="email"
								id="email"
							/>
						</div>
						<div>
							<label htmlFor="number">Mobile No.:</label>
							<input
								className="bg-[#ffffff] dark:bg-[#161f2b]"
								type="number"
								placeholder="Enter Your Mobile Number"
								inputMode="numeric"
								id="number"
							/>
						</div>
						<div>
							<textarea
								className="bg-[#ffffff] dark:bg-[#161f2b]"
								name="msg"
								id="msg"
								placeholder="Enter Your Message..."></textarea>
						</div>
						<div>
							<input
								className="bg-[#ffffff] dark:bg-[#161f2b]"
								type="submit"
								value="Submit"
							/>
						</div>
					</form>
				</div>
				<div className="contactRegisterOffice">
					<div>
						<h2 className="underline font-semibold text-2xl mb-4">
							Register Address
						</h2>
						<h3>QUANTUM COMPUTER ACADEMY & MANAGEMENT PVT.LTD.</h3>
						<h3>
							Lala Babu Colony, Behind High School Chainpur, Siwan Bihar
							(841203)
						</h3>
						<a
							className="flex items-center gap-1"
							href="mailto:quantumcomputeracademy@gmail.com">
							<MdOutlineEmail />
							quantumcomputeracademy@gmail.com
						</a>
						<a className="flex items-center gap-1" href="tel:+918603156431">
							<IoMdCall />
							+91 8603156431
						</a>
					</div>
					<div className="py-5">
						<h2 className="underline font-semibold text-2xl mb-4">
							Corporate Address
						</h2>
						<h3>A1 COMPUTER CLASSES & MANAGEMENT PVT.LTD.</h3>
						<h3>Near Ideal Public School Hasanpur Siwan Bihar 841236.</h3>
						<a
							className="flex items-center gap-1"
							href="mailto:quantumcomputeracademy@gmail.com">
							<MdOutlineEmail />
							a1computerclasses@gmail.com
						</a>
						<a className="flex items-center gap-1" href="tel:+918603156431">
							<IoMdCall />
							+91 8603156431
						</a>
					</div>
				</div>
			</div>
			<Location />
		</>
	);
};

export default Contact;
