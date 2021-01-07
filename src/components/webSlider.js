import React, { Component } from "react";
import { Card, Button } from "react-mdl";
import data from "./assets/images.js";

class WebSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: props.images,
      property: props.images[0],
      index: 0,
    };
    console.log(props);
    this.nextImg = this.nextImg.bind(this);
    this.prevImg = this.prevImg.bind(this);
    // this.imageFullscreen = this.imageFullscreen.bind(this);
  }
  nextImg() {
    const newIndex =
      this.state.properties.length <= this.state.index + 1
        ? 0
        : this.state.property.index + 1;
    this.setState({
      property: this.state.properties[newIndex],
      index: newIndex,
    });
    console.log(this.state.index);
  }

  prevImg() {
    const newIndex =
      0 <= this.state.index - 1
        ? this.state.index - 1
        : this.state.properties.length - 1;
    this.setState({
      property: this.state.properties[newIndex],
      index: newIndex,
    });
    console.log(this.state.index);
  }

  // imageFullscreen () {
  //     console.log('clicked')
  //     return (
  //         <div style={{backgroundColor: 'black', justifyContent: 'center', position:'relative'}}>
  //             <img src={this.state.property.localUrl} style={{width: '50%', height: '100%'}}></img>
  //         </div>
  //     )
  // }

  setClassName(imageTitle) {
    if (imageTitle.includes("hoteli")) {
      return "img-hoteli";
    } else if (imageTitle.includes("skladiste")) {
      return "img-skladiste";
    }
  }

  render() {
    return (
      <div
        style={{
          textAlign: "center",
          backgroundColor: "yellow",
        }}
      >
        <div>
          <Card className="web-card">
            {this.state.properties.map((object, index) => {
              console.log(object);
              return (
                <div
                  className={
                    index === this.state.index ? "web-img-active" : "web-img"
                  }
                >
                  <img
                    src={object.localUrl}
                    // className="web-slider"
                    className={this.setClassName(object.imageTitle)}
                    onClick={this.imageFullscreen}
                  ></img>
                </div>
              );
            })}
            <div>
              <Button style={{ cursor: "pointer" }} onClick={this.prevImg}>
                <i class="fa fa-chevron-left"></i>
              </Button>
              <Button style={{ cursor: "pointer" }} onClick={this.nextImg}>
                <i class="fa fa-chevron-right"></i>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

export default WebSlider;
