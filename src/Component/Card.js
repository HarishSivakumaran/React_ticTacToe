import React from "react";
import { useContext } from "react";
import { FaPen, FaBasketballBall, FaMusic } from "react-icons/fa";
import '../App.css'
import ThemeContext from "../Context/ThemeContext";
import colours from "../Color";

const Card = ({ type = "empty", onClickX }) => {
  const theme = useContext(ThemeContext)[0];
  var icon = "";
  switch (type) {
    case "cross":
      icon = <FaMusic className="h3"/>;
      break;
    case "circle":
      icon = <FaBasketballBall className="h3" />;
      break;
    default:
      icon = <FaPen style={{color: theme === "light" ? "black" : "beige"}}  className="h3"/>;
      break;
  }

  return <div style={{backgroundColor: colours[theme]}} className="CardIcon" onClick={onClickX}>{icon}</div>;
};

export default Card;
