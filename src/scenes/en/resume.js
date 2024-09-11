import React from "react";
import { Grid, Cell } from "react-mdl";
import CertificatesEng from "../../components/molecules/certificatesEng";
import Education from "../../components/molecules/education";
import Experience from "../../components/molecules/experience";
import Skills from "../../components/molecules/skills";
import avatar from "../../assets/avatar.png";

const certificatesList = [
	{
		name: "PCI DSS v3.2.1",
		date: "03.02.2022.",
	},
	{
		name: "PCI DSS v3.2.1",
		date: "10.02.2023.",
	},
	{
		name: "PCI DSS v4",
		date: "13.02.2024.",
	},
];

const ResumeEn = () => {
	return (
		<div>
			<Grid>
				<Cell className="resume-left-col" col={6}>
					<div
						data-aos="fade-down"
						style={{ textAlign: "center", paddingTop: "10px" }}
					>
						<img
							src={avatar}
							alt="avatar"
							style={{ height: "250px" }}
						/>
					</div>
					<div
						data-aos="fade-left"
						data-aos-delay="250"
						data-aos-duration="1000"
						id="animStart"
					>
						<h2 style={{ paddingTop: "1em" }}>Matko Setnik</h2>
						<h4 style={{ color: "grey" }}>
							Frontend mobile developer
						</h4>
						<hr
							style={{
								borderTop: "3px solid #833fb2",
								width: "50%",
							}}
						/>
						<p>
							My name is Matko Setnik and I completed my
							undergraduate professional study <br /> of Computer
							Science, majoring in Software Engineering in
							Virovitica. <br />
							Im currently working as a React Native developer at
							mStart plus d.o.o. in Zagreb, Croatia. <br />
							In my professional experience i have developed 4
							internal and <br />2 client applications. My main
							interest are mobile applications.
						</p>
						<hr
							style={{
								borderTop: "3px solid #833fb2",
								width: "50%",
							}}
						/>
						<h5>Address</h5>
						<p>Valpovo, Croatia</p>
						<h5>Phone</h5>
						<p>On request</p>
						<h5>Email</h5>
						<p>setnik99@gmail.com</p>
						<hr
							style={{
								borderTop: "3px solid #833fb2",
								width: "50%",
							}}
						/>
					</div>
				</Cell>

				<Cell className="resume-right-col" col={6}>
					<div
						data-aos="fade-right"
						data-aos-delay="500"
						data-aos-duration="1000"
						data-aos-anchor="#startAnim"
					>
						<h2>Education</h2>
						<Education
							startYear="10/2017"
							endYear="09/2020"
							schoolName="VSMTI College, Computer Science"
							schoolDescription="Matije Gupca 78, 33000 Virovitica"
							schoolWeb="www.vsmti.hr"
						/>

						<Education
							startYear="09/2013"
							endYear="05/2017"
							schoolName="High School Valpovo, Commercialist"
							schoolDescription="dr. Franje Tuđmana 2, 31550 Valpovo"
							schoolWeb="www.ss-valpovo.hr"
						/>
					</div>

					<hr style={{ borderTop: "3px solid #e22947" }} />

					<div data-aos="zoom-out" data-aos-anchor="#startAnim">
						<h2>Experience</h2>

						{/* <Experience
							startYear={2016}
							endYear={2019}
							jobName="Assistant for drinks at the open-air festival"
							jobDescription="Serving guests, cleaning, setting up tents"
							companyName="Gasthaus-pension Krone Kleinheppach"
							jobPlace="Kelterstr. 1, 71404 Kleinheppach, Germany"
						/> */}

						<Experience
							startYear="01/06/2023"
							endYear="Today"
							jobName="Business owner"
							jobDescription="Business owner/Software Engineer"
							companyName="MCODE"
							jobPlace="Valpovo, Croatia"
							url='https://mcode.hr/en'
						/>

						<Experience
							startYear="01/05/2021"
							endYear="Today"
							jobName="Software Specialist"
							jobDescription="Frontend mobile developer - React Native"
							companyName="mStart plus d.o.o."
							jobPlace="Slavonska avenija 11a, Zagreb"
							url='https://mstart.hr'

						/>

						<Experience
							startYear="01/07/2021"
							endYear="01/05/2023"
							jobName="Junior Software Specialist"
							jobDescription="Frontend mobile developer - React Native"
							companyName="mStart plus d.o.o."
							jobPlace="Slavonska avenija 11a, Zagreb"
							url='https://mstart.hr'

						/>

						<Experience
							startYear="25/01/2021"
							endYear="01/07/2021"
							jobName="Intern"
							jobDescription="Frontend mobile developer - React Native"
							companyName="mStart plus d.o.o."
							jobPlace="Slavonska avenija 11a, Zagreb"
							url='https://mstart.hr'

						/>

						<Experience
							startYear="10/07/2020"
							endYear="04/09/2020"
							jobName="Internship (Android)"
							jobDescription="Creating simple mobile app with information about College"
							companyName="VSMTI"
							jobPlace="Matije Gupca 78, Virovitica"
							url='https://vuv.hr'

						/>
					</div>

					<hr style={{ borderTop: "3px solid #e22947" }} />

					<div
						data-aos="fade-right"
						data-aos-delay="1000"
						data-aos-duration="1000"
						data-aos-anchor="#startAnim"
					>
						<h2>Certificates</h2>

						<CertificatesEng certificates={certificatesList} />
					</div>

					<hr style={{ borderTop: "3px solid #e22947" }} />

					<div
						data-aos="fade-right"
						data-aos-delay="1000"
						data-aos-duration="1000"
						data-aos-anchor="#startAnim"
					>
						<h2>Skills</h2>

						<Skills skill="React Native" progress={55} />

						<Skills skill="Android (Java)" progress={30} />

						<Skills skill="HTML/CSS + Javascript" progress={40} />

						<Skills skill="ReactJS" progress={40} />

						<Skills skill="Three JS" progress={20} />

						<Skills skill="SQL" progress={40} />

						<Skills skill="PHP" progress={20} />

						<Skills skill="C#" progress={20} />
					</div>
				</Cell>
			</Grid>
		</div>
	);
};

export default ResumeEn;
