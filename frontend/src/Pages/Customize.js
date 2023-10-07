import React from "react";
import axios from "axios";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import MainNavbar from "../Components/MainNavbar";
import basic from "../Assets/pizza/Layer 1@2x.png";
import spicy from "../Assets/pizza/Asset 17@2x.png";
import sausage from "../Assets/pizza/Asset 5@2x.png";
import belpaper from "../Assets/pizza/Asset 6@2x.png";
import pineapple from "../Assets/pizza/Asset 7@2x.png";
import onion from "../Assets/pizza/Asset 8@2x.png";
import moreSource from "../Assets/pizza/Asset 9@2x.png";
import tomatoSource from "../Assets/pizza/Asset 10@2x.png";
import mushroom from "../Assets/pizza/Asset 11@2x.png";
import black from "../Assets/pizza/Asset 12@2x.png";
import tomato from "../Assets/pizza/Asset 13@2x.png";
import moreTomato from "../Assets/pizza/Asset 14@2x.png";
import mint from "../Assets/pizza/Asset 15@2x.png";
import Chese from "../Assets/pizza/Asset 16@2x.png";

export default function Customize() {
  const [moreSources, setmoreSources] = React.useState(true);
  const [spicys, setspicys] = React.useState(true);
  const [Cheses, setCheses] = React.useState(true);
  const [mints, setmints] = React.useState(true);
  const [sausages, setsausages] = React.useState(true);
  const [belpapers, setbelpapers] = React.useState(true);
  const [pineapples, setpineapples] = React.useState(true);
  const [onions, setonions] = React.useState(true);
  const [tomatoSources, settomatoSources] = React.useState(true);
  const [mushrooms, setmushrooms] = React.useState(true);
  const [blacks, setblacks] = React.useState(true);
  const [tomatos, settomatos] = React.useState(true);
  const [mtomatos, setmtomatos] = React.useState(true);
  const [price, setPrice] = React.useState(1000);

  const calculateScore = () => {
    let score = 0;

    // Check each state variable and add 100 for true, 0 for false
    if (!moreSources) score += 100;
    if (!spicys) score += 100;
    if (!Cheses) score += 100;
    if (!mints) score += 100;
    if (!sausages) score += 100;
    if (!belpapers) score += 100;
    if (!pineapples) score += 100;
    if (!onions) score += 100;
    if (!tomatoSources) score += 100;
    if (!mushrooms) score += 100;
    if (!blacks) score += 100;
    if (!tomatos) score += 100;
    if (!mtomatos) score += 100;
    setPrice(score + 1000);
    return score;
  };

  React.useEffect(() => {
    const projectScore = calculateScore();
    // console.log("Project Score:", projectScore);
  }, [
    moreSources,
    spicys,
    Cheses,
    mints,
    sausages,
    belpapers,
    pineapples,
    onions,
    tomatoSources,
    mushrooms,
    blacks,
    tomatos,
    mtomatos,
  ]);

  const chipStyle = {
    backgroundColor: "#feae00",
  };
  return (
    <div>
      <MainNavbar />
      <div className="container py-4 mb-5">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-12 mb-4">
            <h2 className="text-center font-weight-bold mb-3">
              <span className="orange-text">C</span>ustomize{"  "}
              <span className="orange-text">Y</span>our{"  "}
              <span className="orange-text">O</span>rder
            </h2>
          </div>
          <div className="col-md-6 mb-4" style={{ position: "relative" }}>
            <img
              src={basic}
              alt="pay asset"
              className="img-fluid p-5 w-75"
              style={{ position: "absolute", zIndex: 1 }}
            />
            {!spicys && (
              <img
                src={spicy}
                alt="pay asset"
                className="img-fluid p-5 w-75"
                style={{ position: "absolute", zIndex: 2 }}
              />
            )}
            {!Cheses && (
              <img
                src={Chese}
                alt="pay asset"
                className="img-fluid p-5 w-75"
                style={{ position: "absolute", zIndex: 3 }}
              />
            )}

            {!moreSources && (
              <img
                src={moreSource}
                alt="pay asset"
                className="img-fluid p-5 w-75"
                style={{ position: "absolute", zIndex: 4 }}
              />
            )}
            {!mints && (
              <img
                src={mint}
                alt="pay asset"
                className="img-fluid p-5 w-75"
                style={{ position: "absolute", zIndex: 4 }}
              />
            )}
            {!sausages && (
              <img
                src={sausage}
                alt="pay asset"
                className="img-fluid p-5 w-75"
                style={{ position: "absolute", zIndex: 5 }}
              />
            )}
            {!belpapers && (
              <img
                src={belpaper}
                alt="pay asset"
                className="img-fluid p-5 w-75"
                style={{ position: "absolute", zIndex: 6 }}
              />
            )}
            {!pineapples && (
              <img
                src={pineapple}
                alt="pay asset"
                className="img-fluid p-5 w-75"
                style={{ position: "absolute", zIndex: 7 }}
              />
            )}
            {!onions && (
              <img
                src={onion}
                alt="pay asset"
                className="img-fluid p-5 w-75"
                style={{ position: "absolute", zIndex: 8 }}
              />
            )}
            {!tomatoSources && (
              <img
                src={tomatoSource}
                alt="pay asset"
                className="img-fluid p-5 w-75"
                style={{ position: "absolute", zIndex: 9 }}
              />
            )}
            {!mushrooms && (
              <img
                src={mushroom}
                alt="pay asset"
                className="img-fluid p-5 w-75"
                style={{ position: "absolute", zIndex: 10 }}
              />
            )}
            {!blacks && (
              <img
                src={black}
                alt="pay asset"
                className="img-fluid p-5 w-75"
                style={{ position: "absolute", zIndex: 11 }}
              />
            )}
            {!tomatos && (
              <img
                src={tomato}
                alt="pay asset"
                className="img-fluid p-5 w-75"
                style={{ position: "absolute", zIndex: 12 }}
              />
            )}
            {!mtomatos && (
              <img
                src={moreTomato}
                alt="pay asset"
                className="img-fluid p-5 w-75"
                style={{ position: "absolute", zIndex: 14 }}
              />
            )}
          </div>

          <div className="col-md-6 mb-4">
            <div>
              <h4 className="font-weight-bold mb-3 mt-5">
                <span></span>Customize your order{"  "}
                <span className="orange-text"> as your wish </span>
              </h4>
            </div>
            <Stack direction="row" spacing={1} className="mb-3">
              {spicys ? (
                <Chip
                  label="spicy"
                  onClick={() => {
                    setspicys(!spicys);
                  }}
                />
              ) : (
                <Chip
                  label="spicy"
                  color="primary"
                  style={chipStyle}
                  onClick={() => {
                    setspicys(!spicys);
                  }}
                />
              )}
              {Cheses ? (
                <Chip
                  label="Cheese"
                  onClick={() => {
                    setCheses(!Cheses);
                  }}
                />
              ) : (
                <Chip
                  label="cheese"
                  color="primary"
                  style={chipStyle}
                  onClick={() => {
                    setCheses(!Cheses);
                  }}
                />
              )}
              {mints ? (
                <Chip
                  label="Mint Leaves"
                  onClick={() => {
                    setmints(!mints);
                  }}
                />
              ) : (
                <Chip
                  label="Mint Leaves"
                  color="primary"
                  style={chipStyle}
                  onClick={() => {
                    setmints(!mints);
                  }}
                />
              )}
              {sausages ? (
                <Chip
                  label="Sausage"
                  onClick={() => {
                    setsausages(!sausages);
                  }}
                />
              ) : (
                <Chip
                  label="Sausage"
                  color="primary"
                  style={chipStyle}
                  onClick={() => {
                    setsausages(!sausages);
                  }}
                />
              )}
            </Stack>
            <Stack direction="row" spacing={1} className="mb-3">
              {belpapers ? (
                <Chip
                  label="Bell Pepper"
                  onClick={() => {
                    setbelpapers(!belpapers);
                  }}
                />
              ) : (
                <Chip
                  label="Bell Pepper"
                  color="primary"
                  style={chipStyle}
                  onClick={() => {
                    setbelpapers(!belpapers);
                  }}
                />
              )}
              {pineapples ? (
                <Chip
                  label="Pineapple"
                  onClick={() => {
                    setpineapples(!pineapples);
                  }}
                />
              ) : (
                <Chip
                  label="Pineapple"
                  color="primary"
                  style={chipStyle}
                  onClick={() => {
                    setpineapples(!pineapples);
                  }}
                />
              )}
              {onions ? (
                <Chip
                  label="onion"
                  onClick={() => {
                    setonions(!onion);
                  }}
                />
              ) : (
                <Chip
                  label="onion"
                  color="primary"
                  style={chipStyle}
                  onClick={() => {
                    setonions(!onions);
                  }}
                />
              )}
              {tomatoSources ? (
                <Chip
                  label="Tomato Sauce"
                  onClick={() => {
                    settomatoSources(!tomatoSources);
                  }}
                />
              ) : (
                <Chip
                  label="Tomato Sauce"
                  color="primary"
                  style={chipStyle}
                  onClick={() => {
                    settomatoSources(!tomatoSources);
                  }}
                />
              )}
            </Stack>
            <Stack direction="row" spacing={1}>
              {mushrooms ? (
                <Chip
                  label="Mushroom"
                  onClick={() => {
                    setmushrooms(!mushrooms);
                  }}
                />
              ) : (
                <Chip
                  label="Mushroom"
                  color="primary"
                  style={chipStyle}
                  onClick={() => {
                    setmushrooms(!mushrooms);
                  }}
                />
              )}
              {blacks ? (
                <Chip
                  label="Black Chicken"
                  onClick={() => {
                    setblacks(!blacks);
                  }}
                />
              ) : (
                <Chip
                  label="Black Chicken"
                  color="primary"
                  style={chipStyle}
                  onClick={() => {
                    setblacks(!blacks);
                  }}
                />
              )}
              {tomatos ? (
                <Chip
                  label="Tomato"
                  onClick={() => {
                    settomatos(!tomatos);
                  }}
                />
              ) : (
                <Chip
                  label="Tomato"
                  color="primary"
                  style={chipStyle}
                  onClick={() => {
                    settomatos(!tomatos);
                  }}
                />
              )}
              {mtomatos ? (
                <Chip
                  label="More Tomato"
                  onClick={() => {
                    setmtomatos(!mtomatos);
                  }}
                />
              ) : (
                <Chip
                  label="More Tomato"
                  color="primary"
                  style={chipStyle}
                  onClick={() => {
                    setmtomatos(!mtomatos);
                  }}
                />
              )}
            </Stack>
            <div>
              <h4 className="font-weight-bold mb-3 mt-5">
                <span></span>You have to pay{"  "}
                <span className="orange-text"> Rs.{price}.00 </span>for this
                order.{"  "}
              </h4>
            </div>
            <button
              className="btn alpha-button"
              onClick={() => {
                const cashAmmount = {
                  amount: price,
                };
                axios
                  .post("http://localhost:3002/toPay", cashAmmount)
                  .then((response) => {
                    console.log(response.data.message);
                  })
                  .catch((error) => {
                    console.error("Error sending data:", error);
                  });
              }}
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
