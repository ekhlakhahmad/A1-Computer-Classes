import React from "react";
import { FaLock, FaUser } from "react-icons/fa";

const Login = () => {
	return (
		<div className="login-sec">
			<img
				src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?t=st=1716630273~exp=1716633873~hmac=e67d7ecb994361d496c1a5ff54abf32aa8499614e1b761aceab442c4d157ad61&w=740"
				alt=""
			/>
			<div className="formArea">
				<h1>Login Form</h1>
				<form action="">
					<div>
						<label htmlFor="userName">Username:</label>
						<div className="userInput">
							<FaUser />
							<input type="text" placeholder="Username" id="userName" />
						</div>
					</div>
					<div>
						<label htmlFor="Pass">Password:</label>
						<div className="userInput">
							<FaLock />
							<input type="password" placeholder="Password" id="Pass" />
						</div>
					</div>
					<div className="submitBtn">
						<input type="submit" value="Login" id="LoginBtn" />
						<p>
							if you have not already account? <a href="#">Register</a>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
