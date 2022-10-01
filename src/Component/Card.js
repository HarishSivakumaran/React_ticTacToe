import React from "react";
import { FaPen, FaBasketballBall, FaMusic } from "react-icons/fa";
import '../App.css'

const Card = ({ type = "empty", onClickX }) => {
  var icon = "";
  switch (type) {
    case "cross":
      icon = <FaMusic className="h3"/>;
      break;
    case "circle":
      icon = <FaBasketballBall className="h3" />;
      break;
    default:
      icon = <FaPen className="h3"/>;
      break;
  }

  return <div className="CardIcon" onClick={onClickX}>{icon}</div>;
};

export default Card;
