import React from "react";
import './style.css';

const Facility = () => {
	return (
		<div>
			<div className="facility-sec">
				<h1>
					Our <span>Facilities</span>
				</h1>
				<div className="FacilitiesBox">
					<div>
						<img
							src="https://cdn.sanity.io/images/68lp9qid/production/9e54fd568101c6d33018dd431c98b3c059969a15-652x418.png"
							alt="course"
						/>
						<p>CCTV Camara in Classroom</p>
					</div>
					<div>
						<img
							src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sJTIwY2xhc3Nyb29tfGVufDB8fDB8fHww"
							alt="course"
						/>
						<p>Theory Classroom</p>
					</div>
					<div>
						<img
							src="https://5.imimg.com/data5/DJ/PV/GLADMIN-64970456/computer-lab-class.png"
							alt="course"
						/>
						<p>Practical Classroom</p>
					</div>
					<div>
						<img
							src="https://cliniconex.com/wp-content/uploads/shutterstock_371601100_1200px-1.jpg"
							alt="course"
						/>
						<p>Waiting Room</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Facility;
