import React from "react";
import './style.css';

const Course = () => {
	return (
		<div className="course-sec">
			<h1>
				Popular <span>Courses</span>
			</h1>
			<div className="courseBox">
				<div className="Box">
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4JBgYVdK_VyHXLzSGNQ5imxh6_6DFRdoPnsziBN01GbpYY517plBU-CmOTWuZ6ZNbqWU&usqp=CAU"
						alt="course"
					/>
					<p className="coursePara">Computer Courses</p>
				</div>
				<div className="Box">
					<img
						src="https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/05/05011631/How-to-Learn-Spoken-English_.png"
						alt="course"
					/>
					<p className="coursePara">Speaking Course</p>
				</div>
				<div className="Box">
					<img
						src="https://www.tlctranslation.com/wp-content/uploads/2023/02/DTP.png"
						alt="course"
					/>
					<p className="coursePara">DTP Courses</p>
				</div>
				<div className="Box">
					<img
						src="https://atijsr.com/img/course/computer-dca.jpeg"
						alt="course"
					/>
					<p className="coursePara">PGDCA Course</p>
				</div>
				<div className="Box">
					<img
						src="https://3.imimg.com/data3/XX/RB/MY-11912503/typing-practice.gif"
						alt="course"
					/>
					<p className="coursePara">Computer Typing</p>
				</div>
				<div className="Box">
					<img
						src="https://online.stanford.edu/sites/default/files/styles/embedded_large/public/2018-03/cs_programminglanguage_cs242.jpg?itok=OMscvbtw"
						alt="course"
					/>
					<p className="coursePara">Programming Languages</p>
				</div>
				<div className="Box">
					<img
						src="https://zoets.b-cdn.net/wp-content/uploads/2017/04/Public-Speaking-and-Presentation-Skills-Training-Course.png"
						alt="course"
					/>
					<p className="coursePara">Public Speaking</p>
				</div>
				<div className="Box">
					<img
						src="https://res.cloudinary.com/unichrone/image/upload/v1665149440/Blog/Project-Management-Roles.webp"
						alt="course"
					/>
					<p className="coursePara">Management</p>
				</div>
			</div>
		</div>
	);
};

export default Course;
