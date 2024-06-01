import React from "react";
import './style.css';
import { facility } from "../../utils/data";
import { CourseBox } from "../Course/Course";

const Facility = () => {
	return (
		<div>
			<div className="facility-sec">
				<h1>
					Our <span>Facilities</span>
				</h1>
				<div className="FacilitiesBox">
					{facility.map((facility, index) => (
						<CourseBox
							key={index}
							imgSrc={facility.imgSrc}
							courseName={facility.facilityName}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Facility;
