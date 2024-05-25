import React from "react";
import Carousel from "../../components/Carousel_Img/Carousel";
import Content from "../../components/Content/Content";
import Course from "../../components/Course/Course";
import Facility from "../../components/Facility/Facility";
import ProjectCounter from "../../components/ProjectCounter/ProjectCounter";
import Testimonial from "../../components/Testimonial/Testimonial";
import Location from "../../components/Location/Location";

const Home = () => {
	return (
		<div>
			<Carousel />
			<Content />
			<Course />
			<Facility />
			<ProjectCounter />
			<Testimonial />
			<Location />
		</div>
	);
};

export default Home;
