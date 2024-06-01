import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Register = () => {
	return (
		<div className="register-sec">
			<img
				src="https://img.freepik.com/free-vector/secure-login-concept-illustration_114360-4582.jpg?t=st=1716627890~exp=1716631490~hmac=2ccd3e9009cec15f7ce523d21448dda455ab48a2b25756f69cfcbc450dcd1e4f&w=740"
				alt=""
			/>
			<div className="formArea">
				<h1>Registration Form</h1>
				<form className="register-form" action="">
					<div>
						<label htmlFor="stname">Name:</label>
						<input
							className="bg-[#ffffff] dark:bg-[#161f2b]"
							type="text"
							placeholder="Enter Student Name"
							id="stname"
						/>
					</div>
					<div>
						<label htmlFor="username">Username:</label>
						<input
							className="bg-[#ffffff] dark:bg-[#161f2b]"
							type="text"
							placeholder="Username"
							id="username"
						/>
					</div>
					<div>
						<label htmlFor="createPass">Create Password:</label>
						<input
							className="bg-[#ffffff] dark:bg-[#161f2b]"
							type="password"
							placeholder="Create Password"
							id="createPass"
						/>
					</div>
					<div>
						<label htmlFor="stemail">Email ID:</label>
						<input
							className="bg-[#ffffff] dark:bg-[#161f2b]"
							type="email"
							placeholder="example@gmail.com"
							id="stemail"
							inputMode="email"
						/>
					</div>
					<div>
						<label htmlFor="mobile">Mobile No.:</label>
						<input
							className="bg-[#ffffff] dark:bg-[#161f2b]"
							type="number"
							placeholder="+91 XXXX XXXX XX"
							id="mobile"
							inputMode="number"
						/>
					</div>
					<div className="submitBtn">
						<input
							className="bg-[#ffffff] dark:bg-[#161f2b]"
							type="submit"
							value="Register"
						/>
						<p className="registerPara">
							if you have already account?{" "}
							<Link to="/login" className="underline text-blue-800">
								Login
							</Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
