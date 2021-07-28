import React, { Component, useState } from "react";
import { Card, Button } from "react-mdl";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageCssClass: 'img-active-slide-right',
      properties: props.images,
      property: props.images[0],
      index: 0,
      show: false,
      setShow: false,
    };
    this.nextImg = this.nextImg.bind(this);
    this.prevImg = this.prevImg.bind(this);
  }

  nextImg() {
    this.setState({
      imageCssClass: 'img-active-slide-right'
    })
    const newIndex =
      this.state.properties.length <= this.state.index + 1
        ? 0
        : this.state.property.index + 1;
    this.setState({
      property: this.state.properties[newIndex],
      index: newIndex,
    });
  }

  prevImg() {
    this.setState({
      imageCssClass: 'img-active-slide-left'
    })
    const newIndex =
      0 <= this.state.index - 1
        ? this.state.index - 1
        : this.state.properties.length - 1;
    this.setState({
      property: this.state.properties[newIndex],
      index: newIndex,
    });
  }

  render() {
    return (
      <div className="img-slider-div">
        <Button onClick={this.prevImg}>
          <i class="fa fa-chevron-left"></i>
        </Button>

        <Card className="img-slider-card">
          {this.state.properties.map((object, index) => {
            return (
              <img
                src={object.localUrl}
                id="img-slider"
                className={index === this.state.index ? this.state.imageCssClass : "img"}
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
