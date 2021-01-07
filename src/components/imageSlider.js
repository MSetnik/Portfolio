import React, { Component, useState } from "react";
import { Card, Button } from "react-mdl";
import { ImageFullscreen } from "./imageFullscreen";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: props.images,
      property: props.images[0],
      index: 0,
      show: false,
      setShow: false,
    };
    console.log(props);
    this.nextImg = this.nextImg.bind(this);
    this.prevImg = this.prevImg.bind(this);
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

  render() {
    return (
      <div className="img-slider-div">
        <Button onClick={this.prevImg}>
          <i class="fa fa-chevron-left"></i>
        </Button>

        <Card
          className="img-slider-card"
          // style={{ display: "flex", height: "100%" }}
        >
          {this.state.properties.map((object, index) => {
            console.log(object.localUrl);
            // return (
            //   <div
            //     className={index === this.state.index ? "img-active" : "img"}
            //   >
            //     <img
            //       src={object.localUrl}
            //       className="img-slider"
            //       onClick={this.imageFullscreen}
            //     ></img>
            //   </div>
            // );
            return (
              <img
                src={object.localUrl}
                id="img-slider"
                className={index === this.state.index ? "img-active" : "img"}
                onClick={this.imageFullscreen}
              ></img>
            );
          })}
        </Card>
        <Button style={{ cursor: "pointer" }} onClick={this.nextImg}>
          <i class="fa fa-chevron-right"></i>
        </Button>
      </div>
    );
  }
}

export default Slider;
