import { ClickAwayListener } from "@material-ui/core";
import React, { Component } from "react";
import { Button } from "react-mdl";

export const ImageFullscreen = ({ show, closeModalHandler, images }) => {
  const prevImg = () => {
    // const newIndex = this.state.property.index - 1;
    // this.setState({
    //     property: this.state.properties[newIndex]
    // })
  };

  const nextImg = () => {
    // const newIndex = this.state.property.index + 1;
    // console.log(newIndex);
    // this.setState({
    //     property: this.state.properties[newIndex]
    // })
    // console.log(this.state.property)
  };

  function click() {
    console.log("click");
  }

  return (
    <div className="modal-wrapper">
      <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-dbe68.appspot.com/o/Web%2Fhoteli%2Fhoteli7.png?alt=media&token=3367e54d-a6d9-43d7-a987-f5ba0a4f16dc" />
    </div>
  );
};
