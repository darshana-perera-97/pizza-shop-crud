import React from "react";
import axios from "axios";
import MainNavbar from "../Components/MainNavbar";

import pizza01 from "../Assets/pizza01.png";
import pizza02 from "../Assets/pizza02.png";
import pizza03 from "../Assets/pizza03.png";
import pizza04 from "../Assets/pizza04.png";
import pizza05 from "../Assets/pizza05.png";
import pizza06 from "../Assets/pizza06.png";
import pizza07 from "../Assets/pizza07.png";
import pizza08 from "../Assets/pizza08.png";
const images = [
  pizza01,
  pizza02,
  pizza03,
  pizza04,
  pizza05,
  pizza06,
  pizza07,
  pizza08,
];

export default function Cart() {
  const [list, setList] = React.useState([]);
  var t = 0;
  React.useEffect(() => {
    const apiUrl = "http://localhost:3002/orders";
    axios
      .get(apiUrl)
      .then((response) => {
        const data = response.data;
        setList(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div>
      <MainNavbar />
      <div className="container py-4 mb-5">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-12 mb-4">
            <h2 className="text-center font-weight-bold mb-3">
              <span className="orange-text">Y</span>our{"  "}
              <span className="orange-text">C</span>art{"  "}
              <span className="orange-text">I</span>tems
            </h2>
          </div>
          {list.length === 0 ? (
            <p className="text-center orange-text">No items added for cart</p>
          ) : (
            <p></p>
          )}
          {list.map((val, key) => {
            return (
              <div
                className="col-lg-3 col-md-4 col-sm-6 mb-5"
                key={key}
                r={key}
              >
                <div className="custom-card mx-auto text-center pt-4 pb-4 ">
                  <img src={images[val.productName.imgkey]} alt={val.name} />
                  <h6 className="mt-2">{val.productName.name}</h6>
                  <p className="orange-text">Rs.{val.productName.prize}.00</p>
                  <p style={{ display: "none" }}>
                    {(t = t + val.productName.prize)}
                  </p>
                  {/* <button className="btn alpha-button">Add to Cart</button> */}
                </div>
              </div>
            );
          })}
        </div>
        <div className="row mb-4">
          <div className="col-md-9 mb-2">
            <h3>
              Total Ammount to be paid
              <span className="orange-text"> Rs.{t}.00</span>
            </h3>
          </div>
          <div className="col-md-3 mb-2">
            <button
              className="btn alpha-button"
              onClick={() => {
                const cashAmmount = {
                  amount: t,
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
