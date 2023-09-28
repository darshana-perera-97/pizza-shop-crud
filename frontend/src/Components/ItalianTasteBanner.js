import React from "react";
import PizzaBannerAsset from "../Assets/PizzaBannerAsset.png";

export default function ItalianTasteBanner() {
  return (
    <div>
      <div className="container taste">
        <div className="row px-3 my-5">
          <div className="col-md-7">
            <h2 className="orange-text">
              The Real{" "}
              <span className="dark-text font-weight-lighter">
                Italina Taste
              </span>
            </h2>
            <p>
              🍕 Explore Our Irresistible Pizza Menu 🍕
              <br /> Welcome to Pizza Shop - Where Every Slice Tells a Story!
            </p>
            <ul className="features">
              <li>
                <b>🔥 Classic Margherita 🔥</b>
                <p>
                  Savor the simplicity of our classic Margherita pizza, topped
                  with ripe tomatoes, fresh mozzarella,
                </p>
              </li>
              <li>
                <b>🌶️ Spicy Pepperoni Delight 🌶️</b>
                <p>
                  Get ready to spice up your taste buds with our Spicy Pepperoni
                  Delight. Generous layers of pepperoni, jalapeños
                </p>
              </li>
              <li>
                <b>🌱 Veggie Lover's Paradise 🌱</b>
                <p>
                  For all you veggie enthusiasts, our Veggie Lover's Paradise is
                  a dream come true. Loaded with colorful bell.
                </p>
              </li>
            </ul>
            <button className="btn alpha-button my-2 mx-3">Order Now</button>
          </div>
          <div className="col-md-4 d-flex align-items-center">
            <img src={PizzaBannerAsset} className="p-4" alt="Pizza Banner" />
          </div>
        </div>
      </div>
    </div>
  );
}
