import React from "react";
import MainNavbar from "../Components/MainNavbar";
import payAsset from "../Assets/paymentSuccess.png";

export default function PaymentDone() {
  return (
    <div>
      <div>
        <MainNavbar />
        <div className="container py-4 mb-5">
          <div className="row justify-content-center mb-4">
            <div className="col-lg-12 mb-4">
              <h2 className="text-center font-weight-bold mb-3">
                <span className="orange-text">S</span>uccess{"  "}
                <span className="orange-text">P</span>ayment
              </h2>
            </div>
            <div className="col-md-3 mb-4"></div>
            <div className="col-md-7 mb-4">
              <img src={payAsset} alt="pay asset" className="w-50" />
            </div>
            <div className="col-md-6 mb-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
