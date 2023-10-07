import React from "react";
import axios from "axios";
import pizza01 from "../Assets/pizza01.png";
import pizza02 from "../Assets/pizza02.png";
import pizza03 from "../Assets/pizza03.png";
import pizza04 from "../Assets/pizza04.png";
import pizza05 from "../Assets/pizza05.png";
import pizza06 from "../Assets/pizza06.png";
import pizza07 from "../Assets/pizza07.png";
import pizza08 from "../Assets/pizza08.png";
import AddtoCart from "./AddtoCart";

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

export default function CustomerFavourite() {
  const [list, setList] = React.useState([
    {
      img: 0,
      name: "Pizza011",
      prize: 1500,
    },
  ]);

  React.useEffect(() => {
    const apiUrl = "http://localhost:3002/allItems";

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
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-12 mb-4">
            <hr />
          </div>
          <div className="col-lg-12 mb-4">
            <h2 className="text-center font-weight-bold mb-3">
              <span className="orange-text">C</span>ustomer{" "}
              <span className="orange-text">F</span>avourite
            </h2>
          </div>
          {list.map((val, key) => {
            return (
              <div className="col-lg-3 col-md-4 col-sm-6 mb-5" key={key}>
                <div className="custom-card mx-auto text-center pt-4 pb-4 ">
                  <img src={images[val.imgkey]} alt={val.name} />
                  <h6 className="mt-2">{val.name}</h6>
                  <p className="orange-text">Rs.{val.prize}.00</p>
                  <AddtoCart prop={val} />
                  {/* <button className="btn alpha-button">Add to Cart</button> */}
                </div>
              </div>
            );
          })}
          <div className="col-lg-12 my-5 d-flex justify-content-center">
            <a href="" className="btn alpha-button">
              Load More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
