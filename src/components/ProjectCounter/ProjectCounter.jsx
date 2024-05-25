import React from "react";
import { BiSolidInstitution } from "react-icons/bi";
import { FaCity, FaFlag, FaUsers } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SlBookOpen } from "react-icons/sl";

const ProjectCounter = () => {
	return (
		<div class="project">
			<div class="projectSec">
				<span className="text-4xl text-[#0075bb]">
					<FaUsers />
				</span>
				<h2>2000+</h2>
				<p>Students</p>
			</div>
			<div class="projectSec">
				<span className="text-4xl text-[#0075bb]">
					<FaCity />
				</span>
				<h2>30+</h2>
				<p>Institute</p>
			</div>
			<div class="projectSec">
				<span className="text-4xl text-[#0075bb]">
					<SlBookOpen />
				</span>
				<h2>20+</h2>
				<p>Course</p>
			</div>
			<div class="projectSec">
				<span className="text-4xl text-[#0075bb]">
					<FaLocationDot />
				</span>
				<h2>3+</h2>
				<p>State</p>
			</div>
			<div class="projectSec">
				<span className="text-4xl text-[#0075bb]">
					<FaFlag />
				</span>
				<h2>30+</h2>
				<p>Districts</p>
			</div>
		</div>
	);
};

export default ProjectCounter;
