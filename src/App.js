import React, { useState, useContext } from "react";
import "./App.css";
import Card from "./Component/Card";
import { FaLightbulb, FaMoon } from "react-icons/fa";
import ThemeContext from "./Context/ThemeContext";

var aItems = new Array(9).fill("empty");

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const theme = useState("light");
  const onClickX = (index) => {
    if (aItems[index] !== "empty" || gameOver) return;
    aItems[index] = isCross ? "cross" : "circle";
    setIsCross(!isCross);
    setGameOver(checkIfWon());
  };

  const checkIfWon = () => {
    switch (true) {
      case aItems[0] === aItems[1] &&
        aItems[0] === aItems[2] &&
        aItems[0] !== "empty":
        return true;
      case aItems[3] === aItems[4] &&
        aItems[3] === aItems[5] &&
        aItems[3] !== "empty":
        return true;
      case aItems[6] === aItems[7] &&
        aItems[6] === aItems[8] &&
        aItems[6] !== "empty":
        return true;
      case aItems[0] === aItems[4] &&
        aItems[0] === aItems[8] &&
        aItems[0] !== "empty":
        return true;
      case aItems[2] === aItems[4] &&
        aItems[2] === aItems[6] &&
        aItems[2] !== "empty":
        return true;
      case aItems[0] === aItems[3] &&
        aItems[0] === aItems[6] &&
        aItems[0] !== "empty":
        return true;
      case aItems[1] === aItems[4] &&
        aItems[1] === aItems[7] &&
        aItems[1] !== "empty":
        return true;
      case aItems[2] === aItems[5] &&
        aItems[2] === aItems[8] &&
        aItems[2] !== "empty":
        return true;
    }
  };

  const onReload = () => {
    aItems.fill("empty");
    setIsCross(false);
    setGameOver(false);
  };
  return (
    <ThemeContext.Provider value={theme}>
      <div className="Application">
        <h1 className="text-light">
          {!gameOver
            ? !isCross
              ? "BasketBall's Turn"
              : "Music's Turn"
            : `${!isCross ? "Music" : "BasketBall"} Wins !!!!`}
        </h1>
        <button
          className="h2"
          style={{ fontStyle: "italic" }}
          onClick={onReload}
        >
          Reload
        </button>
        <div className="ps-4">
          <div className="row row-cols-3">
            {aItems.map((item, index) => {
              return <Card onClickX={() => onClickX(index)} type={item} />;
            })}
          </div>
        </div>
        <Toggler/>
      </div>
    </ThemeContext.Provider>
  );
};

const Toggler = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  return (
    <div>
      <FaLightbulb
        style={{ display: theme === "light" ? "block" : "none" }}
        className="h1 m-5 text-warning"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      ></FaLightbulb>
      <FaMoon
        style={{ display: theme === "dark" ? "block" : "none" }}
        className="h1 m-5 text-warning"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      ></FaMoon>
    </div>
  );
};

export default App;
