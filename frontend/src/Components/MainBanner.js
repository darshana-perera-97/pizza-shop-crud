import React from 'react'
import AddBanner from "../Assets/AddBanner.png";

export default function MainBanner() {
  return (
    <div className="d-flex justify-content-center dark-background">
      <img src={AddBanner} className="mainBanner" />
    </div>
  );
}
