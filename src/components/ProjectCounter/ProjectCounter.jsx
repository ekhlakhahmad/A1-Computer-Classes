import React from "react";
import { BiSolidInstitution } from "react-icons/bi";
import { FaCity, FaFlag, FaUsers } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { SlBookOpen } from "react-icons/sl";

const ProjectCounter = () => {
	return (
		<div class="project">
			<div class="projectSec">
				<FaUsers />
				<h2>2000+</h2>
				<p>Students</p>
			</div>
			<div class="projectSec">
				<FaCity />
				<h2>30+</h2>
				<p>Institute</p>
			</div>
			<div class="projectSec">
				<SlBookOpen />
				<h2>20+</h2>
				<p>Course</p>
			</div>
			<div class="projectSec">
				<FaLocationDot />
				<h2>3+</h2>
				<p>State</p>
			</div>
			<div class="projectSec">
				<FaFlag />
				<h2>30+</h2>
				<p>Districts</p>
			</div>
		</div>
	);
};

export default ProjectCounter;
