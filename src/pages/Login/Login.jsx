import React from "react";
import { FaLock, FaUser } from "react-icons/fa";
import "./style.css";
import { Link } from "react-router-dom";


const Login = () => {
	return (
		<div className="login-sec">
			<img
				src="https://img.freepik.com/free-vector/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37336.jpg?t=st=1716664095~exp=1716667695~hmac=18e0ee452a77b28e81e238602f9330f98d9f9f79359ba50acfd31afb329386ac&w=740"
				alt=""
			/>
			<div className="loginformArea">
				<h1>Login Form</h1>
				<form className="login-form" action="">
					<div>
						<label htmlFor="userName">Username:</label>
						<div className="userInput">
							<FaUser />
							<input
								className="bg-[#ffffff] dark:bg-[#161f2b]"
								type="text"
								placeholder="Username"
								id="userName"
							/>
						</div>
					</div>
					<div>
						<label htmlFor="Pass">Password:</label>
						<div className="userInput">
							<FaLock />
							<input
								className="bg-[#ffffff] dark:bg-[#161f2b]"
								type="password"
								placeholder="Password"
								id="Pass"
							/>
						</div>
					</div>
					<div className="submitBtn">
						<input
							className="bg-[#ffffff] dark:bg-[#161f2b]"
							type="submit"
							value="Login"
							id="LoginBtn"
						/>
						<p className="loginpara">
							if you don't have already account?{" "}
							<Link to="/register" className="underline text-blue-800">
								{" "}
								Register{" "}
							</Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
