import React from "react";
import avatar from "../../assets/avatar.png";

const LandingPageEn = () => {
	return (
		<div className="main-container">
			<div data-aos="fade-down" style={{ textAlign: "center" }}>
				<img src={avatar} alt="avatar" className="avatar-img" />
			</div>

			<div data-aos="zoom-out" data-aos-delay="500">
				<div className="banner-text">
					<h1>Matko Setnik</h1>
					<h4 style={{ color: "white" }}>bacc. ing. comp.</h4>

					<hr />

					<p>Frontend mobile developer</p>

					<div className="social-links">
						<a
							href="https://github.com/MSetnik"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i
								className="fa fa-github-square"
								aria-hidden="true"
							></i>
						</a>

						<a
							href="https://www.linkedin.com/in/matko-setnik-2b8a491aa/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i
								className="fa fa-linkedin-square"
								aria-hidden="true"
							></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPageEn;
