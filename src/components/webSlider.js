import React, { Component } from "react";
import { Card, Button } from "react-mdl";
import data from "./assets/images.js";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: props.images,
      property: props.images[0],
      index: null,
    };
    console.log(props);
    this.nextImg = this.nextImg.bind(this);
    this.prevImg = this.prevImg.bind(this);
    // this.imageFullscreen = this.imageFullscreen.bind(this);
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

  // imageFullscreen () {
  //     console.log('clicked')
  //     return (
  //         <div style={{backgroundColor: 'black', justifyContent: 'center', position:'relative'}}>
  //             <img src={this.state.property.localUrl} style={{width: '50%', height: '100%'}}></img>
  //         </div>
  //     )
  // }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        {/* <Card style={{ display:'inline-block'}}>
                   
            
                    
                <img src={this.state.property.localUrl} 
                    className="web-img-slider"></img>
                
                <Button  
                        style={{}} 
                        onClick={this.prevImg} 
                        disabled={this.state.property.index === 0}><i class="fa fa-chevron-left"></i></Button>
                <Button 
                    onClick={this.nextImg}
                    disabled={this.state.property.index === this.state.properties.length-1}><i class="fa fa-chevron-right"></i></Button>

                </Card>    */}
        <div>
          <Card
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
            }}
          >
            <img
              src={this.state.property.localUrl}
              className="web-img-slider"
              onClick={this.imageFullscreen}
            ></img>
            <div>
              <Button
                onClick={this.prevImg}
                disabled={this.state.property.index === 0}
              >
                <i class="fa fa-chevron-left"></i>
              </Button>
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
          </Card>
        </div>
      </div>
    );
  }
}

export default Slider;
