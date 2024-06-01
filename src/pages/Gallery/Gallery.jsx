import React from "react";
import {
	studentsPhotos,
	officeImages,
	studentWithCertificate,
} from "../../utils/data";
import "./style.css";

const Gallery = () => {
	return (
		<div>
			<div className="gallery-sec">
				<h1>
					Student's <span>Photo</span>
				</h1>
				<ImageGallery images={studentsPhotos} />
			</div>
			<div className="gallery-sec">
				<h1>
					Office <span>Images</span>
				</h1>
				<ImageGallery images={officeImages} />
			</div>
			<div className="gallery-sec">
				<h1>
					Student's Photo <span>With Certificate</span>
				</h1>
				<ImageGallery images={studentWithCertificate} />
			</div>
		</div>
	);
};

const ImageGallery = ({ images }) => {
	return (
		<div className="allImages">
			{images.map((image, index) => (
				<div className="gallery-img" key={index}>
					<img src={image.imgSrc} alt="" />
				</div>
			))}
		</div>
	);
};

export default Gallery;
