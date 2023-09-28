import React from "react";
import mainBannerAsset from "../Assets/mainBannerAsset.png";

export default function TopBanner() {
  return (
    <div className="TopBanner">
      <div className="container p-5">
        <div className="row">
          <div className="col-md-4">
            <img src={mainBannerAsset} className="" />
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6 ">
            <h1 className="main-text white-text mt-3">Delicious</h1>
            <h1 className="main-text2 white-text">food for health</h1>
            <h1 className="main-text2 yellow-text mb-3">to door-step</h1>
            <p className="py-3">
              Come join us for a slice of happiness. It's not just pizza; it's
              an experience!
              <br /> Ready to dive into a world of pizza perfection? Call us at
              or visit our website to place your order today!
            </p>
            <div className="col-lg-5 mt-4 mb-5">
              <a href="" className="btn alpha-button">
                Order Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
