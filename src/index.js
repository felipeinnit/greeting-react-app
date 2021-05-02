import React from "react";
import ReactDom from "react-dom";

var currentTime = new Date();
var hours = currentTime.getHours();

const customColor = {
  color: ""
};

var greeting;

if (hours >= 1 || hours <= 12) {
  greeting = "good morning";
  customColor.color = "red";
}
if (hours >= 13 || hours <= 18) {
  greeting = "good evening";
  customColor.color = "green";
} else {
  greeting = "good afternoon";
  customColor.color = "blue";
}

const customStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

ReactDom.render(
  <div style={customStyle}>
    <h1 className="heading" style={customColor}>
      {" "}
      {greeting}{" "}
    </h1>
  </div>,
  document.getElementById("root")
);
