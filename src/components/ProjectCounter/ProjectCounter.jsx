import React from "react";
import { BiSolidInstitution } from "react-icons/bi";
import { FaCity, FaFlag, FaUsers } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SlBookOpen } from "react-icons/sl";
import './style.css';

const ProjectCounter = () => {
	return (
		<div className="project bg-[#f5f1f1] dark:bg-[#161f2b]">
			<div className="projectSec">
				<span className="text-4xl text-[#0075bb]">
					<FaUsers />
				</span>
				<h2>2000+</h2>
				<p className="couterPara">Students</p>
			</div>
			<div className="projectSec">
				<span className="text-4xl text-[#0075bb]">
					<FaCity />
				</span>
				<h2>30+</h2>
				<p className="couterPara">Institute</p>
			</div>
			<div className="projectSec">
				<span className="text-4xl text-[#0075bb]">
					<SlBookOpen />
				</span>
				<h2>20+</h2>
				<p className="couterPara">Course</p>
			</div>
			<div className="projectSec">
				<span className="text-4xl text-[#0075bb]">
					<FaLocationDot />
				</span>
				<h2>3+</h2>
				<p className="couterPara">State</p>
			</div>
			<div className="projectSec">
				<span className="text-4xl text-[#0075bb]">
					<FaFlag />
				</span>
				<h2>30+</h2>
				<p className="couterPara">Districts</p>
			</div>
		</div>
	);
};

export default ProjectCounter;
