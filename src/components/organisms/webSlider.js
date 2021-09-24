import React, { useState } from "react";
import { Card, Button } from "react-mdl";

const WebSlider = (props) => {
  const [imageCssClass, setImageCssClass] = useState("web-img-active-slide-right");
  const [properties, setProperties] = useState(props.images);
  const [property, setProperty] = useState(props.images[0]);
  const [index, setIndex] = useState(0);

  const nextImg = () => {
    setImageCssClass("web-img-active-slide-right");
    const newIndex =
      properties.length <= index + 1 ? 0 : property.index + 1;
    setProperty(properties[newIndex]);
    setIndex(newIndex);
  };

  const prevImg = () => {
    setImageCssClass("web-img-active-slide-left");
    const newIndex =
      index - 1 >= 0 ? index - 1 : properties.length - 1;
    setProperty(properties[newIndex]);
    setIndex(newIndex);
  };

  const setClassName = (imageTitle) => {
    if (imageTitle.includes("hoteli")) {
      return "img-hoteli";
    } else if (imageTitle.includes("skladiste")) {
      return "img-skladiste";
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "yellow"
      }}
    >
      <div>
        <Card className="web-card">
          {properties.map((object, i) => {
            return (
              <div
                key={i}
                className={i === index ? imageCssClass : "web-img"}
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
              <i className="fa fa-chevron-left"/>
            </Button>
            <Button style={{ cursor: "pointer" }} onClick={() => nextImg()}>
              <i className="fa fa-chevron-right"/>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default WebSlider;
