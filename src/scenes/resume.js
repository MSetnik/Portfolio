import React from "react";
import { Grid, Cell } from "react-mdl";
import Education from "../components/molecules/education";
import Experience from "../components/molecules/experience";
import Skills from "../components/molecules/skills";

const Resume = () => {
  return (
    <div>
      <Grid>
        <Cell className="resume-left-col" col={6}>
          <div style={{ textAlign: "center", paddingTop: "10px" }}>
            <img
              src="https://icon-library.com/images/avatar-icon/avatar-icon-4.jpg"
              alt="avatar"
              style={{ height: "250px" }}
            />
          </div>

          <h2 style={{ paddingTop: "1em" }}>Matko Setnik</h2>
          <h4 style={{ color: "grey" }}>Frontend mobile developer</h4>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          <p>
            Moje ime je Matko Setnik, dolazim iz Valpova, <br />
            te sam završio preddiplomski stručni studij Računarstva, smjera
            Programsko inženjerstvo u Virovitici.
          </p>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          <h5>Adresa</h5>
          <p>Valpovo, Hrvatska</p>
          <h5>Telefon</h5>
          <p>Na upit</p>
          <h5>Email</h5>
          <p>setnik99@gmail.com</p>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
        </Cell>

        <Cell className="resume-right-col" col={6}>
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

          <hr style={{ borderTop: "3px solid #e22947" }} />

          <h2>Iskustvo</h2>

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

          <hr style={{ borderTop: "3px solid #e22947" }} />

          <h2>Vještine</h2>

          <Skills skill="React Native" progress={50} />

          <Skills skill="Android (Java)" progress={35} />

          <Skills skill="HTML/CSS + Javascript" progress={40} />

          <Skills skill="ReactJS" progress={30} />

          <Skills skill="SQL" progress={40} />

          <Skills skill="PHP" progress={20} />

          <Skills skill="C#" progress={20} />
        </Cell>
      </Grid>
    </div>
  );
};

export default Resume;
