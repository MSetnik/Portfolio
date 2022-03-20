import React from "react";
import { Grid, Cell } from "react-mdl";
import Certificates from "../../components/molecules/certificates";
import Education from "../../components/molecules/education";
import Experience from "../../components/molecules/experience";
import Skills from "../../components/molecules/skills";

const certificatesList = [
  {
    name: "PCI DSS v3.2.1",
    date: "03.02.2022"
  }
]

const Resume = () => {
    return (
      <div>
        <Grid>
          <Cell className="resume-left-col" col={6}>
            <div data-aos="fade-down" style={{ textAlign: "center", paddingTop: "10px" }}>
              <img
                src="https://icon-library.com/images/avatar-icon/avatar-icon-4.jpg"
                alt="avatar"
                style={{ height: "250px" }}
              />
            </div>

            <div data-aos="fade-left" data-aos-delay="250" data-aos-duration="1000" id='animStart'>
                <h2 style={{ paddingTop: "1em" }}>Matko Setnik</h2>
                <h4 style={{ color: "grey" }}>Frontend mobile developer</h4>
                <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
                <p>
                  Moje ime je Matko Setnik, dolazim iz Valpova, <br />
                  te sam završio preddiplomski stručni studij Računarstva, smjera
                  Programsko inženjerstvo u Virovitici. <br />
                  Radim kao mlađi specijalist u službi razvoja aplikativnih rješenja u mStart plus d.o.o. <br /> 
                  na poziciji React Native developera. <br />
                  Glavno područje interesa su mi mobilne aplikacije.
                </p>
                <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
                <h5>Adresa</h5>
                <p>Valpovo, Hrvatska</p>
                <h5>Telefon</h5>
                <p>Na upit</p>
                <h5>Email</h5>
                <p>setnik99@gmail.com</p>
                <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            </div>
          </Cell>
    
          <Cell className="resume-right-col" col={6} >
            <div data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000" data-aos-anchor="#startAnim" >

              <h2>Obrazovanje</h2>
      
              <Education
                startYear="09/2013"
                endYear="05/2017"
                schoolName="SŠ Valpovo, Komercijalist"
                schoolDescription="dr. Franje Tuđmana 2, 31550 Valpovo"
                schoolWeb="www.ss-valpovo.hr"
              />
      
              <Education
                startYear="10/2017"
                endYear="9/2020"
                schoolName="VSMTI, Računarstvo"
                schoolDescription="Matije Gupca 78, 33000 Virovitica"
                schoolWeb="www.vsmti.hr"
              />
            </div>
    
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <div data-aos="zoom-out" data-aos-anchor="#startAnim">
              <h2 >Iskustvo</h2>
            
              <Experience
                startYear={2016}
                endYear={2019}
                jobName="Pomoćni djelatnik za izdavanje pića na festivalu na otvorenom"
                jobDescription="posluživanje gostiju, čišćenje objekta, postavljanje festivalskih šatora"
                companyName="Gasthaus-pension Krone Kleinheppach"
                jobPlace="Kelterstr. 1, 71404 Kleinheppach, Njemačka"
              />
            
              <Experience
                startYear="10/07/2020"
                endYear="04/09/2020"
                jobName="Stručna praksa (Android)"
                jobDescription="Kreiranje aplikacije za prikaz informacija o fakultetu"
                companyName="VSMTI"
                jobPlace="Matije Gupca 78, Virovitica"
              />

             
              <Experience
                startYear="25/01/2021"
                endYear="01/07/2021"
                jobName="Pripravnik u Službi razvoja aplikativnih rješenja"
                jobDescription="Frontend mobile developer - React Native"
                companyName="mStart plus d.o.o."
                jobPlace="Slavonska avenija 11a, Zagreb"
              />
      
              
              <Experience
                startYear="01/07/2021"
                endYear="Danas"
                jobName="Mlađi Specijalist u Službi razvoja aplikativnih rješenja"
                jobDescription="Frontend mobile developer - React Native"
                companyName="mStart plus d.o.o."
                jobPlace="Slavonska avenija 11a, Zagreb"
              />
            </div>

            <hr style={{ borderTop: "3px solid #e22947" }} />

            <div data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000" data-aos-anchor="#startAnim" >
              <h2>
                Certifikati
              </h2>

              {/* <Grid style={{marginBottom: -30, width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <Cell col={6} style={{textAlign: 'center'}}>
                  <p style={{fontWeight: 'bold'}}>Naziv certifikata</p>
                </Cell>

                <Cell col={6} style={{textAlign: 'center'}}>
                  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                    <p style={{fontWeight: 'bold'}}>Datum polaganja</p>
                  </div>
                </Cell>
              </Grid> */}
             
              <Certificates certificates={certificatesList} />

            </div>


            <hr style={{ borderTop: "3px solid #e22947" }} />


            <div data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000" data-aos-anchor="#startAnim" >
              <h2>Vještine</h2>
    
              <Skills skill="React Native" progress={55} />
      
              <Skills skill="Android (Java)" progress={30} />
      
              <Skills skill="HTML/CSS + Javascript" progress={40} />
      
              <Skills skill="ReactJS" progress={40} />

              <Skills skill="Three JS" progress={20} />
      
              <Skills skill="SQL" progress={30} />
      
              <Skills skill="PHP" progress={20} />
      
              <Skills skill="C#" progress={20} />
            </div>
          </Cell>
        </Grid>
      </div>
    );
  };
  

export default Resume;
