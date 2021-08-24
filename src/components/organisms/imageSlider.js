import React, {  useState } from "react";
import { Card, Button } from "react-mdl";

const Slider = (props) => {
  const [ imageCssClass, setImageCssClass] = useState("img-active-slide-right")
  const [ properties, setProperties ] = useState(props.images)
  const [ property, setProperty]= useState(props.images[0])
  const [ index, setIndex]= useState(0)

  const nextImg = () => {
    setImageCssClass("img-active-slide-right")
    const newIndex =
      properties.length <= index + 1 ? 0 : property.index + 1;
      setProperty(properties[newIndex])
      setIndex(newIndex)
  }

  const prevImg = () => {
    setImageCssClass("img-active-slide-left")
    const newIndex =
      index - 1 >= 0 ? index - 1 : properties.length - 1;
      setProperty(properties[newIndex])
      setIndex(newIndex)
  }

  return (
    <div className="img-slider-div">
      <Button onClick={() => prevImg()}>
        <i className="fa fa-chevron-left"></i>
      </Button>

      <Card className="img-slider-card">
        {properties.map((object, i) => {
          return (
            <img
              key={i}
              alt={''}
              src={object.localUrl}
              id="img-slider"
              className={i === index ? imageCssClass : "img"}
            />
          );
        })}
      </Card>
      <Button style={{ cursor: "pointer" }} onClick={() => nextImg()}>
        <i className="fa fa-chevron-right"></i>
      </Button>
    </div>
  );
}

export default Slider;
