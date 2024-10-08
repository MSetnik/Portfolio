import React, { useEffect, useState } from "react";
import "../../App.css"
import {
  Tab,
  Tabs,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardText
} from "react-mdl";
import Slider from "../../components/organisms/imageSlider";
import WebSlider from "../../components/organisms/webSlider";
import data from "../../assets/images.js";

const Projects = () => {
  const [androidImages, setAndroidImages] = useState([
    {
      cim: null,
      vsmti: null,
      res: null,
      notes: null,
      hzpp: null,
      hzpp_rd: null,
      hzpp_v3: null
    }
  ]);

  const [webImages, setWebImages] = useState([
    {
      hoteli: null,
      skladiste: null,
      portfolio: null,
      gym: null
    }
  ]);

  const [activeTab, setActiveTab] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    data.forEach((element) => {
      element.Mobile.forEach((element) => {
        setAndroidImages([
          {
            cim: element.cim,
            vsmti: element.vsmtiInfo,
            res: element.restoraniValpova,
            todo: element.RNTodo,
            notes: element.Notes,
            hzpp: element.hzpp,
            hzpp_rd: element.hzpp_rd,
            hzpp_v3: element.hzpp_v3,
          }
        ]);
      });

      element.Web.forEach((element) => {
        setWebImages([
          {
            hoteli: element.hoteli,
            skladiste: element.skladiste,
            portfolio: element.portfolio,
            gym: element.gym
          }
        ]);
      });
    });

    setDataLoaded(true);
  }, []);

  const toggleCategories = () => {
    if (activeTab === 0) {
      return (
        <div>
          {/* Project 7 */}
          <div
            className="single-project-grid"
            style={{
              marginTop: "20px"
            }}
          >
            <div style={{ padding: "20px" }}>
              <Card
                className="single-card"
                shadow={5}
                style={{
                  display: "flex",
                  width: "100%"
                }}
              >
                <div>
                  <CardTitle
                    className="project-title"
                    style={{
                      backgroundColor: "#00a4d3",
                      height: "220px",
                      width: "auto",
                      justifyContent: "center"
                    }}
                  >
                    <img
                      alt=""
                      id="rn-img"
                      src="https://miro.medium.com/proxy/1*AjesIvV-kkwk6LLvNf1t4A.png"
                      style={{
                        height: "220px",
                        width: "auto"
                      }}
                    />
                  </CardTitle>

                  <Grid className="card-mobile-grid">
                  <Cell col={6} id="rn-slider" className="slider-mobile-cell">
                      <div>
                        <Slider images={androidImages[0].hzpp_v3}></Slider>
                      </div>
                    </Cell>
                    <Cell col={6} id="rn-text">
                      <CardText>
                        <h4 style={{ fontWeight: "bold" }}>Raspored Vlakova Hrvatske (V2)</h4>
                        <p>
                          Raspored vlakova Hrvatske (Redesign) je aplikacija osvježenog dizajna i poboljšanih
                          funkcionalnosti napravljena u suradnji sa dizajnericom kako bi pomogla korisnicima prijevoza HŽ-a kako bi jednostavno 
                          i brzo mogli pretražiti raspored polazaka vlakova te ujedno i pratiti status i lokaciju odabranog vlaka.
                          U aplikaciji je dodana funkcionalnost kupovanja karte preko web sučelja službene stranice HŽ-a te dodavanje
                          karte u aplikaciju. Backend napravljen samostalno koristeći NodeJS(Express.js) te hostan 
                          koristeci AWS. Aplikacija napisana pomoću TypeScript-a i koristi
                          Recoil state managment.
                          Aplikacija je dostupna za <a target="_blank"
                          href="https://play.google.com/store/apps/details?id=com.hzppapp" rel="noreferrer">Android</a> 
                           {' i '} <a target="_blank"
                          href="https://apps.apple.com/us/app/raspored-vlakova-hrvatske/id6504168712" rel="noreferrer"> iOS</a>
                          {' uređaje'}.
                          <br/>
                        </p>
                      </CardText>
                    </Cell>
                  </Grid>
                   
                </div>
              </Card>
            </div>
          </div>

          {/* Project 7 */}
          <div
            className="single-project-grid"
            style={{
              marginTop: "20px"
            }}
          >
            <div style={{ padding: "20px" }}>
              <Card
                className="single-card"
                shadow={5}
                style={{
                  display: "flex",
                  width: "100%"
                }}
              >
                <div>
                  <CardTitle
                    className="project-title"
                    style={{
                      backgroundColor: "#00a4d3",
                      height: "220px",
                      width: "auto",
                      justifyContent: "center"
                    }}
                  >
                    <img
                      alt=""
                      id="rn-img"
                      src="https://miro.medium.com/proxy/1*AjesIvV-kkwk6LLvNf1t4A.png"
                      style={{
                        height: "220px",
                        width: "auto"
                      }}
                    />
                  </CardTitle>

                  <Grid className="card-mobile-grid">
                    <Cell col={6} id="rn-text">
                      <CardText>
                        <h4 style={{ fontWeight: "bold" }}>Raspored Vlakova Hrvatske (V1)</h4>
                        <p>
                          Raspored vlakova Hrvatske (Redesign) je produkcijska aplikacija osvježenog dizajna napravljena 
                          u suradnji sa dizajnericom kako bi pomogla korisnicima prijevoza HŽ-a kako bi jednostavno 
                          i brzo mogli pretražiti raspored polazaka vlakova 
                          te ujedno i pratiti status i lokaciju odabranog vlaka.
                          Backend napravljen samostalno koristeći NodeJS(Express.js) te hostan 
                          koristeci AWS. Aplikacija napisana pomoću TypeScript-a i koristi
                          Recoil state managment.
                         
                        </p>
                      </CardText>
                    </Cell>
                    <Cell col={6} id="rn-slider" className="slider-mobile-cell">
                      <div>
                        <Slider images={androidImages[0].hzpp_rd}></Slider>
                      </div>
                    </Cell>
                  </Grid>
                </div>
              </Card>
            </div>
          </div>


          {/* project 6 */}
          <div
            className="single-project-grid"
            style={{
              marginTop: "20px"
            }}
          >
            <div style={{ padding: "20px" }}>
              <Card
                className="single-card"
                shadow={5}
                style={{
                  display: "flex",
                  width: "100%"
                }}
              >
                <div>
                  <CardTitle
                    className="project-title"
                    style={{
                      backgroundColor: "#00a4d3",
                      height: "220px",
                      width: "auto",
                      justifyContent: "center"
                    }}
                  >
                    <img
                      alt=""
                      id="rn-img"
                      src="https://miro.medium.com/proxy/1*AjesIvV-kkwk6LLvNf1t4A.png"
                      style={{
                        height: "220px",
                        width: "auto"
                      }}
                    />
                  </CardTitle>

                  <Grid className="card-mobile-grid">
                    <Cell col={6} id="rn-slider" className="slider-mobile-cell">
                      <div>
                        <Slider images={androidImages[0].hzpp}></Slider>
                      </div>
                    </Cell>
                    <Cell col={5} id="rn-text">
                      <CardText>
                        <h4 style={{ fontWeight: "bold" }}>Raspored Vlakova Hrvatske</h4>
                        <p>
                          Raspored vlakova Hrvatske je MVP (Minimum Viable Product) aplikacija napravljena u suradnji sa dizajnericom kako bi 
                          pomogla korisnicima prijevoza HŽ-a kako bi jednostavno 
                          i brzo mogli pretražiti raspored polazaka vlakova 
                          te ujedno i pratiti status i lokaciju odabranog vlaka.
                          Backend napravljen samostalno koristeći NodeJS(Express.js) te hostan 
                          koristeci AWS. Aplikacija napisana pomoću TypeScript-a i koristi
                          Recoil state managment.
                          Napravljena za testiranje ideje.
                        </p>
                      </CardText>
                    </Cell>
                  </Grid>
                </div>
              </Card>
            </div>
          </div>



          {/* project 5 */}
          <div
            className="single-project-grid"
            style={{
              marginTop: "20px"
            }}
          >
            <div style={{ padding: "20px" }}>
              <Card
                className="single-card"
                shadow={5}
                style={{
                  display: "flex",
                  width: "100%"
                }}
              >
                <div>
                  <CardTitle
                    className="project-title"
                    style={{
                      backgroundColor: "#00a4d3",
                      height: "220px",
                      width: "auto",
                      justifyContent: "center"
                    }}
                  >
                    <img
                      alt=""
                      id="rn-img"
                      src="https://miro.medium.com/proxy/1*AjesIvV-kkwk6LLvNf1t4A.png"
                      style={{
                        height: "220px",
                        width: "auto",

                      }}
                    />
                  </CardTitle>

                  <Grid className="card-mobile-grid">
                    <Cell col={6} id="rn-text">
                      <CardText>
                        <h4 style={{ fontWeight: "bold" }}>Notes</h4>
                        <p>
                          Aplikacija za vođenje bilješki napravljena radi vlastite potrebe, temeljem
                          dizajna sa <a  target="_blank"
                          href="https://dribbble.com/shots/11875872-A-simple-and-lightweight-note-app" rel="noreferrer">Dribble-a.</a> Buildana je pomoću Expo frameworka te je prilagođena i testirana 
                          na obje platforme. Podatci se spremaju u lokalni Async storage. 
                          Aplikacija sadrži dvojezičnost (Hrvatski i Engleski) te se prilagođava 
                          jeziku uređaja. Također je implementiran tamni prikaz.
                          Ujedno i prva aplikacija koja je objavljena na <a target="_blank"
                          href="https://play.google.com/store/apps/details?id=com.msetnik.NotesApp" rel="noreferrer">Trgovini Play.</a> <br/>
                          <i>U daljnjem razvoju ..</i>                        
                        </p>
                      </CardText>
                    </Cell>
                    <Cell col={6} id="rn-slider" className="slider-mobile-cell">
                      <div>
                        <Slider images={androidImages[0].notes}></Slider>
                      </div>
                    </Cell>
                  </Grid>
                </div>

                <CardActions border className="project-card-action">
                  <Button colored>
                    <a
                      href="https://github.com/MSetnik/NotesApp"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </div>
          </div>

          {/* project 4 */}
          <div
            className="single-project-grid"
            style={{
              marginTop: "20px"
            }}
          >
            <div style={{ padding: "20px" }}>
              <Card
                className="single-card"
                shadow={5}
                style={{
                  display: "flex",
                  width: "100%"
                }}
              >
                <div>
                  <CardTitle
                    className="project-title"
                    style={{
                      backgroundColor: "#00a4d3",
                      height: "220px",
                      width: "auto",
                      justifyContent: "center"
                    }}
                  >
                    <img
                      alt=""
                      id="rn-img"
                      src="https://miro.medium.com/proxy/1*AjesIvV-kkwk6LLvNf1t4A.png"
                      style={{
                        height: "220px",
                        width: "auto"
                      }}
                    />
                  </CardTitle>

                  <Grid className="card-mobile-grid">
                    <Cell col={6} id="rn-slider" className="slider-mobile-cell">
                      <div>
                        <Slider images={androidImages[0].todo}></Slider>
                      </div>
                    </Cell>
                    <Cell col={5} id="rn-text">
                      <CardText>
                        <h4 style={{ fontWeight: "bold" }}>Todo App</h4>
                        <p>
                          Todo aplikacija napravljena koristeći React Native
                          framework. Aplikacija sadrži 2 javna prikaza kojem
                          mogu pristupiti anonimni korisnici (Login i
                          Registracija) te su ostali screenovi privatni.
                          Korisnik se može registrirati sa mailom te započeti
                          korištenje aplikacije. Moguće je dodati zadatke,
                          obrisati ih, urediti te označiti kao riješene. Zadatci
                          su spremljeni na server putem Firebase firestore-a.
                          Također je implementiran i firestore offline
                          persistence kako bi korisnici bez problema mogli
                          koristiti aplikaciju i bez pristupa internetu.
                        </p>
                      </CardText>
                    </Cell>
                  </Grid>
                </div>

                <CardActions border className="project-card-action">
                  <Button colored>
                    <a
                      href="https://github.com/MSetnik/RNTodoApp-using-cli"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </div>
          </div>

          {/* project 1 */}
          <div
            className="single-project-grid"
            style={{
              marginTop: "20px"
            }}
          >
            <div style={{ padding: "20px", display: "flex", height: "100%" }}>
              <Card
                className="single-card"
                shadow={5}
                style={{
                  display: "flex",
                  width: "100%"
                }}
              >
                <div style={{ display: "inline-block" }}>
                  <CardTitle
                    className="project-title"
                    style={{
                      backgroundColor: "white",
                      height: "220px",
                      width: "auto",
                      justifyContent: "center"
                    }}
                  >
                    <img
                      alt=""
                      className="android-img"
                      src="https://lh3.googleusercontent.com/GTmuiIZrppouc6hhdWiocybtRx1Tpbl52eYw4l-nAqHtHd4BpSMEqe-vGv7ZFiaHhG_l4v2m5Fdhapxw9aFLf28ErztHEv5WYIz5fA"
                      style={{
                        height: "220px",
                        width: "auto"
                      }}
                    />
                  </CardTitle>

                  <Grid className="card-mobile-grid">
                    <Cell col={6} className="project-info-cell">
                      <CardText>
                        <h4 style={{ fontWeight: "bold" }}>
                          City Infrastructure Manager
                        </h4>
                        <p>
                          Sustav City infrastructure manager ima zadaću
                          evidentirati infrastrukturne ispade na području
                          određenog grada, kako bi građani imali te informacije
                          dostupne javno. Evidentiraju se sljedeće vrste ispada:
                          nestanak električne energije, nestanak plina, nestanak
                          vode, prekid prometa određeno relacijom.
                        </p>
                      </CardText>
                    </Cell>
                    <Cell col={6} className="slider-mobile-cell">
                      <div>
                        <Slider images={androidImages[0].cim}></Slider>
                      </div>
                    </Cell>
                  </Grid>
                </div>

                <CardActions border className="project-card-action">
                  <Button colored>
                    <a
                      href="https://github.com/MSetnik/CityInfrastructureManager"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </div>
          </div>

          {/* project 2 */}
          <div
            className="single-project-grid"
            style={{
              marginTop: "20px"
            }}
          >
            <div style={{ padding: "20px" }}>
              <Card
                className="single-card"
                shadow={5}
                style={{
                  display: "flex",
                  width: "100%"
                }}
              >
                <div style={{ display: "inline-block" }}>
                  <CardTitle
                    className="project-title"
                    style={{
                      backgroundColor: "white",
                      height: "220px",
                      width: "auto",
                      justifyContent: "center"
                    }}
                  >
                    <img
                      alt=""
                      className="android-img"
                      src="https://lh3.googleusercontent.com/GTmuiIZrppouc6hhdWiocybtRx1Tpbl52eYw4l-nAqHtHd4BpSMEqe-vGv7ZFiaHhG_l4v2m5Fdhapxw9aFLf28ErztHEv5WYIz5fA"
                      style={{
                        height: "220px",
                        width: "auto"
                      }}
                    />
                  </CardTitle>

                  <Grid className="card-mobile-grid">
                    <Cell className="slider-mobile-cell" col={6}>
                      <div className="slider">
                        <Slider images={androidImages[0].vsmti}></Slider>
                      </div>
                    </Cell>
                    <Cell col={5}>
                      <CardText>
                        <h4 style={{ fontWeight: "bold" }}>VSMTI Info</h4>
                        <p>
                          Aplikacija sadrži funkcionalnost parsiranja vijesti sa
                          stranice fakulteta te prikaz detaljnijeg opisa vijesti
                          odabirom na nju. Glavni activity sadrži korisne
                          linkove te prikaz vijest, prikaz studijskih programa
                          koje fakultet nudi koji se dohvaćaju sa servera,
                          prikaz dokumenta (također na serveru), kontakt
                          informacije fakulteta te otvaranje web stranice sa 360
                          prikazom školskog prostora. Osim toga, aplikacija ima
                          mogućnost prikaza push obavijesti koje su također
                          spremljene na serveru. Za dohvaćanje podataka sa
                          servera je korišten Retrofit.
                        </p>
                      </CardText>
                    </Cell>
                  </Grid>
                </div>

                <CardActions className="project-card-action" border>
                  <Button colored>
                    <a
                      href="https://github.com/MSetnik/VSMTINews"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </div>
          </div>

          {/* project 3 */}
          <div
            className="single-project-grid"
            style={{
              marginTop: "20px"
            }}
          >
            <div style={{ padding: "20px" }}>
              <Card
                className="single-card"
                shadow={5}
                style={{
                  display: "flex",
                  width: "100%"
                }}
              >
                <div style={{ display: "inline-block" }}>
                  <CardTitle
                    className="project-title"
                    style={{
                      backgroundColor: "white",
                      height: "220px",
                      width: "auto",
                      justifyContent: "center"
                    }}
                  >
                    <img
                      alt=""
                      className="android-img"
                      src="https://lh3.googleusercontent.com/GTmuiIZrppouc6hhdWiocybtRx1Tpbl52eYw4l-nAqHtHd4BpSMEqe-vGv7ZFiaHhG_l4v2m5Fdhapxw9aFLf28ErztHEv5WYIz5fA"
                      style={{
                        height: "220px",
                        width: "auto"
                      }}
                    />
                  </CardTitle>

                  <Grid className="card-mobile-grid">
                    <Cell col={6}>
                      <CardText>
                        <h4 style={{ fontWeight: "bold" }}>
                          Restorani Valpova
                        </h4>
                        <p>
                          Aplikacija prikazuje Restorane grada Valpova (2) sa
                          prikazanim testnim podatcima. Podatci su spremljeni u
                          lokalnu bazu pomoću Room library-a. Korisnik može
                          dodati jelo u wishlistu, te ga maknuti sa wishliste.
                          Također korisnik može pregledati jela u wishlisti.
                        </p>
                      </CardText>
                    </Cell>
                    <Cell col={6} className="slider-mobile-cell">
                      <div>
                        <Slider images={androidImages[0].res}></Slider>
                      </div>
                    </Cell>
                  </Grid>
                </div>

                <CardActions border className="project-card-action">
                  <Button colored>
                    <a
                      href="https://github.com/MSetnik/FoodApp"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </div>
          </div>

        </div>
      );
    } else if (activeTab === 1) {
      return (
        <div>
          {/* Project 4 */}
          <div
            className="single-project-grid"
            style={{
              marginTop: "20px"
            }}
          >
            <div style={{ padding: "20px" }}>
              <Card className="single-card" shadow={5}>
                <div style={{ display: "inline-block" }}>
                  <CardTitle
                    className="project-title"
                    style={{
                      backgroundColor: "#222222",
                      height: "220px",
                      width: "auto",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      alt=""
                      id="react-img"
                      src="data:image/png;base64,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"
                      style={{
                        height: "220px",
                        width: "auto"
                      }}
                    />
                  </CardTitle>

                  <CardText>
                    <h4 style={{ fontWeight: "bold", textAlign: "center", width: "100%" }}>Gorilla gym</h4>
                    <div className="web-card-text-div">
                      <p className="web-project-info-text">
                        Responzivna Web stranica napravljena kao primjer za prezentaciju teretane.
                        Napravljena custom Nav bar koji se različito prikazuje ovisno
                        o veličini uređaja. Također sadrži animacije koje se aktiviraju ovisno o 
                        poziciji scrollanja.
                        Hostana je pomoću firebase-a 
                        te se nalazi na <a href="https://gym-example-c3617.web.app/" target="_blank" rel="noreferrer">link-u</a>.
                      </p>
                    </div>
               
                  </CardText>

                  <div>
                    <WebSlider images={webImages[0].gym}></WebSlider>
                  </div>
                </div>

                <CardActions border>
                  <Button colored>
                    <a
                      href="https://github.com/MSetnik/gym-website-example"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </div>
          </div>

           {/* project 3 */}
           <div
            className="single-project-grid"
            style={{
              marginTop: "20px"
            }}
          >
            <div style={{ padding: "20px" }}>
              <Card className="single-card" shadow={5}>
                <div style={{ display: "inline-block" }}>
                  <CardTitle
                    className="project-title"
                    style={{
                      backgroundColor: "#222222",
                      height: "220px",
                      width: "auto",
                      justifyContent: "center"
                    }}
                  >
                    <img
                      alt=""
                      id="react-img"
                      src="data:image/png;base64,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"
                      style={{
                        height: "220px",
                        width: "auto"
                      }}
                    />
                  </CardTitle>

                  <CardText>
                    <h4 style={{ fontWeight: "bold" }}>Portfolio</h4>
                    <div className="web-card-text-div">
                      <p className="web-project-info-text">
                        Web aplikacija napravljena koristeći React framework.
                        Napravljena za učenje nove tehnologije te ujedno korištena
                        i za prezentaciju znanja i vještina osobe. Aplikacija je
                        hostana koristeći firebase.
                     </p>
                    </div>
                  </CardText>

                  <div>
                    <WebSlider images={webImages[0].portfolio}></WebSlider>
                  </div>
                </div>

                <CardActions border>
                  <Button colored>
                    <a
                      href="https://github.com/MSetnik/Portfolio"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </div>
          </div>
          
          {/* project 2 */}
          <div
            className="single-project-grid"
            style={{
              marginTop: "20px"
            }}
          >
            <div style={{ padding: "20px" }}>
              <Card className="single-card" shadow={5}>
                <div style={{ display: "inline-block" }}>
                  <CardTitle
                    id="skladiste-img"
                    style={{
                      backgroundColor: "white",
                      height: "220px",
                      width: "auto",
                      justifyContent: "center"
                    }}
                  >
                    <img
                      alt=""
                      id="angular-img"
                      src="https://cdn.iconscout.com/icon/free/png-512/angularjs-2-1175271.png"
                      style={{
                        height: "220px",
                        width: "auto"
                      }}
                    />
                  </CardTitle>

                  <CardText>
                    <h4 style={{ fontWeight: "bold" }}>
                      Upravljanje skladištem
                    </h4>
                    <div className="web-card-text-div">
                      <p className="web-project-info-text">
                        Web aplikacija napravljena koristeći AngularJS framework i
                        PHP jezik kao backend. Aplikacija služi za evidenciju
                        dokumenata koji dolaze u skladište te evidenciju artikala
                        u skladištu (primka, izdatnica i početno stanje).
                        Aplikacija ima mogućnost administracije samo korisniku
                        koji ima dopuštene ovlasti.
                      </p>
                    </div>
                  </CardText>

                  <div>
                    <WebSlider images={webImages[0].skladiste}></WebSlider>
                  </div>
                </div>

                <CardActions border>
                  <Button colored>
                    <a
                      href="https://github.com/MSetnik/UpravljanjeSkladistem"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </div>
          </div>

          {/* project 1 */}
          <div
            className="single-project-grid"
            style={{
              marginTop: "20px"
            }}
          >
            <div style={{ padding: "20px" }}>
              <Card className="single-card" shadow={5}>
                <div style={{ display: "inline-block" }}>
                  <CardTitle
                    className="project-title"
                    style={{
                      backgroundColor: "white",
                      height: "220px",
                      width: "auto",
                      justifyContent: "center"
                    }}
                  >
                    <img
                      alt=""
                      id="js-img"
                      src="https://www.p92.co.uk/binaries/content/gallery/p92website/technologies/htmlcssjs-details.png"
                      style={{
                        height: "220px",
                        width: "auto"
                      }}
                    />
                  </CardTitle>

                  <CardText>
                    <h4 style={{ fontWeight: "bold" }}>
                      Administracija hotela
                    </h4>
                    <div className="web-card-text-div">
                      <p className="web-project-info-text">
                        Web aplikacija koja služi za administraciju hotela.
                        Aplikacija ima mogućnost pregleda hotela na području
                        Hrvatske te mogućnost dodavanja novih. Također je moguće
                        rezervirati smještaj te pregledati kapacitet, odnosno
                        popunjenost hotela. Hotele je moguće prikazati na google
                        karti. Kao baza je korišten firebase.
                      </p>
                    </div>
                  </CardText>

                  <div>
                    <WebSlider images={webImages[0].hoteli}></WebSlider>
                  </div>
                </div>

                <CardActions border>
                  <Button colored>
                    <a
                      href="https://github.com/MSetnik/AdministracijaHotela"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </Button>
                </CardActions>
              </Card>
            </div>
          </div>

         
        </div>
      );
    }
    else if (activeTab === 2) {
      return (
        <div>
          {/* Project 4 */}
          <div
            className="single-project-grid"
            style={{
              marginTop: "20px"
            }}
          >
            <div style={{ padding: "20px" }}>
              <Card className="single-card" shadow={5}>
                <div style={{ display: "inline-block" }}>
                  <CardTitle
                    className="project-title"
                    style={{
                      backgroundColor: "#FFFFFF",
                      height: "220px",
                      width: "auto",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      alt=""
                      id="react-img"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
                      style={{
                        height: "180px",
                        width: "auto"
                      }}
                    />
                  </CardTitle>

                  <CardText>
                    <h4 style={{ fontWeight: "bold", textAlign: "center", width: "100%" }}>Hž raspored vlakova</h4>
                    <div className="web-card-text-div">
                      <p className="web-project-info-text">
                        Hž raspored vlakova backend napravljen koristeći NodeJS(Express.js). <br/>
                        <b style={{fontStyle: "italic"}}>! Top secret !</b>
                     </p>
                    </div>
               
                  </CardText>
                </div>
              </Card>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="category-tabs">
      <div style={{ position: "relative" }}>
        <Tabs
          activeTab={activeTab}
          onChange={(tabId) => setActiveTab(tabId)}
          ripple
        >
          <Tab>Mobile</Tab>
          <Tab>Web</Tab>
          <Tab>Backend</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            {dataLoaded === true && (
              <div className="content">{toggleCategories()}</div>
            )}
          </Cell>
        </Grid>
      </div>
    </div>
  );
};

export default Projects;