import React from 'react'
import "./style.css";


const Location = () => {
  return (
		<div className='locationSec'>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.063692071599!2d84.40311757486381!3d25.998730898771168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992f36ec02a71d9%3A0x665cf6fde1a55e16!2sA1%20Computer%20Classes!5e0!3m2!1sen!2sin!4v1716362033643!5m2!1sen!2sin"
				width="600"
				height="450"
				style={{ border: 0 }}
				allowFullScreen=""
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"></iframe>
		</div>
	);
}

export default Location
