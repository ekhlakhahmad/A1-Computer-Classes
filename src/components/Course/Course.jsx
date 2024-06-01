import React from "react";
import './style.css';
import { courses } from "../../utils/data";

const Course = () => {
	return (
		<div className="course-sec bg-[#f5f1f1] dark:bg-[#161f2b]">
			<h1>
				Popular <span>Courses</span>
			</h1>
			<div className="courseBox">
				{courses.map((course, index) => (
					<CourseBox
						key={index}
						imgSrc={course.imgSrc}
						courseName={course.courseName}
					/>
				))}
			</div>
		</div>
	);
};

export const CourseBox = ({ imgSrc, courseName }) => {
	return (
		<div className="Box">
			<img src={imgSrc} alt="course" />
			<p className="coursePara">{courseName}</p>
		</div>
	);
};


export default Course;
