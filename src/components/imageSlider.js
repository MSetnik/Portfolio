import React, { Component, useState } from "react";
import { Card, Button } from "react-mdl";
import { ImageFullscreen } from "./imageFullscreen";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: props.images,
      property: props.images[0],
      index: null,
      show: false,
      setShow: false,
    };
    console.log(props);
    this.nextImg = this.nextImg.bind(this);
    this.prevImg = this.prevImg.bind(this);
    this.imageFullscreen = this.imageFullscreen.bind(this);
  }

  nextImg() {
    const newIndex = this.state.property.index + 1;
    console.log(newIndex);
    this.setState({
      property: this.state.properties[newIndex],
    });
    console.log(this.state.property);
  }

  prevImg() {
    const newIndex = this.state.property.index - 1;
    this.setState({
      property: this.state.properties[newIndex],
    });
  }

  imageFullscreen() {
    console.log("clicked");
    this.setState({ show: true });
    // return (
    //     <ImageFullscreen></ImageFullscreen>
    // )
  }

  render() {
    const closeModalHandler = () => this.setState({ setShow: false });
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          onClick={this.prevImg}
          disabled={this.state.property.index === 0}
        >
          <i class="fa fa-chevron-left"></i>
        </Button>

        <Card>
          <img
            src={this.state.property.localUrl}
            className="img-slider"
            onClick={this.imageFullscreen}
          ></img>
        </Card>
        <Button
          style={{}}
          onClick={this.nextImg}
          disabled={
            this.state.property.index === this.state.properties.length - 1
          }
        >
          <i class="fa fa-chevron-right"></i>
        </Button>
      </div>
    );
  }
}

export default Slider;
