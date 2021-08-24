import React, { useState } from "react";
import { Card, Button } from "react-mdl";

const WebSlider = (props) => {
  const [ imageCssClass, setImageCssClass] = useState("web-img-active-slide-right")
  const [ properties, setProperties ] = useState(props.images)
  const [ property, setProperty]= useState(props.images[0])
  const [ index, setIndex]= useState(0)

  const nextImg = () => {
    setImageCssClass("web-img-active-slide-right")
    const newIndex =
      properties.length <= index + 1 ? 0 : property.index + 1;
      setProperty(properties[newIndex])
      setIndex(newIndex)
  }

  const prevImg = () => {
    setImageCssClass("web-img-active-slide-left")
    const newIndex =
      index - 1 >= 0 ? index - 1 : properties.length - 1;
      setProperty(properties[newIndex])
      setIndex(newIndex)
  }

  const setClassName = (imageTitle) => {
    if (imageTitle.includes("hoteli")) {
      return "img-hoteli";
    } else if (imageTitle.includes("skladiste")) {
      return "img-skladiste";
    }
  }


  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "yellow",
      }}
    >
      <div>
        <Card className="web-card">
          {properties.map((object, i) => {
            return (
              <div
                className={
                  i === index
                    ? imageCssClass
                    : "web-img"
                }
              >
                <img
                  src={object.localUrl}
                  className={setClassName(object.imageTitle)}
                ></img>
              </div>
            );
          })}
          <div>
            <Button style={{ cursor: "pointer" }} onClick={() => prevImg()}>
              <i class="fa fa-chevron-left"/>
            </Button>
            <Button style={{ cursor: "pointer" }} onClick={() => nextImg()}>
              <i class="fa fa-chevron-right"/>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );

}

// class WebSlider extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       imageCssClass: "web-img-active-slide-right",
//       properties: props.images,
//       property: props.images[0],
//       index: 0,
//     };
//     this.nextImg = this.nextImg.bind(this);
//     this.prevImg = this.prevImg.bind(this);
//   }
//   nextImg() {
//     this.setState({
//       imageCssClass: "web-img-active-slide-right",
//     });
//     const newIndex =
//       this.state.properties.length <= this.state.index + 1
//         ? 0
//         : this.state.property.index + 1;
//     this.setState({
//       property: this.state.properties[newIndex],
//       index: newIndex,
//     });
//   }

//   prevImg() {
//     this.setState({
//       imageCssClass: "web-img-active-slide-left",
//     });
//     const newIndex =
//       0 <= this.state.index - 1
//         ? this.state.index - 1
//         : this.state.properties.length - 1;
//     this.setState({
//       property: this.state.properties[newIndex],
//       index: newIndex,
//     });
//   }

//   setClassName(imageTitle) {
//     if (imageTitle.includes("hoteli")) {
//       return "img-hoteli";
//     } else if (imageTitle.includes("skladiste")) {
//       return "img-skladiste";
//     }
//   }

//   render() {
//     return (
//       <div
//         style={{
//           textAlign: "center",
//           backgroundColor: "yellow",
//         }}
//       >
//         <div>
//           <Card className="web-card">
//             {this.state.properties.map((object, index) => {
//               return (
//                 <div
//                   className={
//                     index === this.state.index
//                       ? this.state.imageCssClass
//                       : "web-img"
//                   }
//                 >
//                   <img
//                     src={object.localUrl}
//                     className={this.setClassName(object.imageTitle)}
//                   ></img>
//                 </div>
//               );
//             })}
//             <div>
//               <Button style={{ cursor: "pointer" }} onClick={this.prevImg}>
//                 <i class="fa fa-chevron-left"></i>
//               </Button>
//               <Button style={{ cursor: "pointer" }} onClick={this.nextImg}>
//                 <i class="fa fa-chevron-right"></i>
//               </Button>
//             </div>
//           </Card>
//         </div>
//       </div>
//     );
//   }
// }

export default WebSlider;
