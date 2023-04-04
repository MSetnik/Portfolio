/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import {
  Tab,
  Tabs,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardText,
} from "react-mdl";
import Slider from "../../components/organisms/imageSlider";
import WebSlider from "../../components/organisms/webSlider";
import data from "../../assets/images.js";

const ProjectsEn = () => {
  const [androidImages, setAndroidImages] = useState([
    {
      cim: null,
      vsmti: null,
      res: null,
      notes: null,
      hzpp: null,
      hzpp_rd: null,
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
                    <Cell col={6} id="rn-text">
                      <CardText>
                        <h4 style={{ fontWeight: "bold" }}>HŽ Train schedule (Redesign)</h4>
                        <p>
                          Croatian Train schedule is a redesign of Hž Train schedule app made in order to
                          help Croatian train transportation users to easily
                          and quickly search the schedule of train departures
                          and at the same time monitor the status and location of the selected train.
                          Backend made independently using NodeJS (Express.js) and hosted
                          using AWS. App is created using TypeScript and Recoil state managment.
                          App is published at <a target="_blank"
                          href="https://play.google.com/store/apps/details?id=com.hzppapp" rel="noreferrer">Play Store.</a> <br/>
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
                        <h4 style={{ fontWeight: "bold" }}>Hž train schedule</h4>
                        <p>
                          Croatian Train schedule is an application made in order to
                          help Croatian train transportation users to easily
                          and quickly search the schedule of train departures
                          and at the same time monitor the status and location of the selected train.
                          Backend made independently using NodeJS (Express.js) and hosted
                          using AWS. App is created using TypeScript and Recoil state managment.
                        </p>
                      </CardText>
                    </Cell>
                  </Grid>
                </div>

                <CardActions border className="project-card-action">
                  <Button colored>
                    <a
                      href="https://github.com/MSetnik/hzppApp"
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


          {/* Project 1 */}
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
                        <h4 style={{ fontWeight: "bold" }}>Notes</h4>
                        <p>
                          Note taking app made for my own needs, based on design from <a target="_blank" 
                          href="https://dribbble.com/shots/11875872-A-simple-and-lightweight-note-app" rel="noreferrer">Dribble.</a> Created
                          using Expo framework, customized and tested on both platforms (iOS and Android).
                          Data is stored in local Async storage. App can be viewed in 2 languages (Croatian and English) using
                          system laungage. There is implemented Dark Mode. First app published on <a target="_blank" 
                          href="https://play.google.com/store/apps/details?id=com.msetnik.NotesApp" rel="noreferrer"> Play Store.</a> <br/>
                          <i>In current development ..</i>                         
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
              marginTop: "20px",
            }}
          >
            <div style={{ padding: "20px" }}>
              <Card
                className="single-card"
                shadow={5}
                style={{
                  display: "flex",
                  width: "100%",
                }}
              >
                <div>
                  <CardTitle
                    className="project-title"
                    style={{
                      backgroundColor: "#00a4d3",
                      height: "220px",
                      width: "auto",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      id="rn-img"
                      src="https://miro.medium.com/proxy/1*AjesIvV-kkwk6LLvNf1t4A.png"
                      style={{
                        height: "220px",
                        width: "auto",
                      }}
                    />
                  </CardTitle>

                  <Grid className="card-mobile-grid">
                    <Cell col={6} id="rn-slider" className="slider-mobile-cell">
                      <div>
                        <Slider images={androidImages[0].todo}></Slider>
                      </div>
                    </Cell>
                    <Cell col={6} id="rn-text">
                      <CardText>
                        <h4 style={{ fontWeight: "bold" }}>Todo App</h4>
                        <p>
                          Todo app made using React Native. App has 2 public screens 
                          that can be accsessed by anonymous users (Login and Register). 
                          Rest of the screens are privated. User can register using email and
                          start using the app. 
                          User can add and delete tasks, edit them or mark them as done.
                          Tasks are stored on server using Firebase firestore. There 
                          is also implemented firestore offline persistence so users dont 
                          have problems using the app without internet access.
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
              marginTop: "20px",
            }}
          >
            <div style={{ padding: "20px", display: "flex", height: "100%" }}>
              <Card
                className="single-card"
                shadow={5}
                style={{
                  display: "flex",
                  width: "100%",
                }}
              >
                <div style={{ display: "inline-block" }}>
                  <CardTitle
                    className="project-title"
                    style={{
                      backgroundColor: "white",
                      height: "220px",
                      width: "auto",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      className="android-img"
                      src="https://lh3.googleusercontent.com/GTmuiIZrppouc6hhdWiocybtRx1Tpbl52eYw4l-nAqHtHd4BpSMEqe-vGv7ZFiaHhG_l4v2m5Fdhapxw9aFLf28ErztHEv5WYIz5fA"
                      style={{
                        height: "220px",
                        width: "auto",
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
                          City infrastructure manager shows outages from city network
                          and shows them in the app so citizens have the information publicly
                          availible. App shows electricity, gas, water and transport outages based
                          on the city. App is connected to the backend and the admin office.
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
              marginTop: "20px",
            }}
          >
            <div style={{ padding: "20px" }}>
              <Card
                className="single-card"
                shadow={5}
                style={{
                  display: "flex",
                  width: "100%",
                }}
              >
                <div style={{ display: "inline-block" }}>
                  <CardTitle
                    className="project-title"
                    style={{
                      backgroundColor: "white",
                      height: "220px",
                      width: "auto",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      className="android-img"
                      src="https://lh3.googleusercontent.com/GTmuiIZrppouc6hhdWiocybtRx1Tpbl52eYw4l-nAqHtHd4BpSMEqe-vGv7ZFiaHhG_l4v2m5Fdhapxw9aFLf28ErztHEv5WYIz5fA"
                      style={{
                        height: "220px",
                        width: "auto",
                      }}
                    />
                  </CardTitle>

                  <Grid className="card-mobile-grid">
                    <Cell className="slider-mobile-cell" col={6}>
                      <div className="slider">
                        <Slider images={androidImages[0].vsmti}></Slider>
                      </div>
                    </Cell>
                    <Cell col={6}>
                      <CardText>
                        <h4 style={{ fontWeight: "bold" }}>VSMTI Info</h4>
                        <p>
                          App shows latest College news which are parsed from College website.
                          Main activity is a navigation that shows usefull links for the students,
                          news, college programs that are offered which are fetched from server,
                          documents and ability to download them from server, 360 view of the 
                          College facility, and contact information. There is also functionality 
                          for recieving notifications. 
                          For data fetching is used Retrofit.
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
              marginTop: "20px",
            }}
          >
            <div style={{ padding: "20px" }}>
              <Card
                className="single-card"
                shadow={5}
                style={{
                  display: "flex",
                  width: "100%",
                }}
              >
                <div style={{ display: "inline-block" }}>
                  <CardTitle
                    className="project-title"
                    style={{
                      backgroundColor: "white",
                      height: "220px",
                      width: "auto",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      className="android-img"
                      src="https://lh3.googleusercontent.com/GTmuiIZrppouc6hhdWiocybtRx1Tpbl52eYw4l-nAqHtHd4BpSMEqe-vGv7ZFiaHhG_l4v2m5Fdhapxw9aFLf28ErztHEv5WYIz5fA"
                      style={{
                        height: "220px",
                        width: "auto",
                      }}
                    />
                  </CardTitle>

                  <Grid className="card-mobile-grid">
                    <Cell col={6}>
                      <CardText>
                        <h4 style={{ fontWeight: "bold" }}>
                          Restaurants of Valpovo
                        </h4>
                        <p>
                          App shows Restaurants of Valpovo city and nearby area
                          with dummy data. Data is stored in local database using Room lib.
                          User can add and remove meal in whishlist so he can have clear
                          view what to order
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
                        Responsive Web site made as an example of the imaginary gym.
                        Custom made Nav bar has different view based on size of the device.
                        Website has custom animations that are triggered based on scroll position.
                        Hosted with firebase on <a href="https://gym-example-c3617.web.app/" target="_blank" rel="noreferrer">link</a>.
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
              marginTop: "20px",
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
                      id="react-img"
                      src="data:image/png;base64,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"
                      style={{
                        height: "220px",
                        width: "auto",
                      }}
                    />
                  </CardTitle>

                  <CardText>
                    <h4 style={{ fontWeight: "bold" }}>Portfolio</h4>
                    <div className="web-card-text-div">
                      <p className="web-project-info-text">
                        Web app made with React. Made for learning new technology and 
                        for showing my skills and knowlege. App hosted with firebase.
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
              marginTop: "20px",
            }}
          >
            <div style={{ padding: "20px" }}>
              <Card className="single-card" shadow={5} >
                <div style={{ display: "inline-block" }}>
                  <CardTitle
                    id="skladiste-img"
                    style={{
                      backgroundColor: "white",
                      height: "220px",
                      width: "auto",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      id="angular-img"
                      src="https://cdn.iconscout.com/icon/free/png-512/angularjs-2-1175271.png"
                      style={{
                        height: "220px",
                        width: "auto",
                      }}
                    />
                  </CardTitle>

                  <CardText>
                    <h4 style={{ fontWeight: "bold" }}>
                      Warehouse administration
                    </h4>
                    <div className="web-card-text-div">
                      <p className="web-project-info-text">
                        Web app made with AngularJS framework, PHP and MySql database.
                        App is used for record keeping of the documents/receipt and products in warehouse.
                        There is restrictions for administration only for users that have permission.
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
              marginTop: "20px",
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
                      justifyContent: "center",
                    }}
                  >
                    <img
                      id="js-img"
                      src="https://www.p92.co.uk/binaries/content/gallery/p92website/technologies/htmlcssjs-details.png"
                      style={{
                        height: "220px",
                        width: "auto",
                      }}
                    />
                  </CardTitle>

                  <CardText>
                    <h4 style={{ fontWeight: "bold" }}>
                      Hotel administration
                    </h4>
                    <div className="web-card-text-div">
                      <p className="web-project-info-text">
                        Web app for hotel administration. User can view and add hotels in Croatia. 
                        Also, there is option for reserving hotel and view hotel capacity. Hotel can 
                        be shown on the google map. As a database is used firebase.
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
                    <h4 style={{ fontWeight: "bold", textAlign: "center", width: "100%" }}>Hž train schedule</h4>
                    <div className="web-card-text-div">
                      <p className="web-project-info-text">
                        Croatian Train schedule backend created using NodeJS(Express.js). <br/>
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

export default ProjectsEn;
