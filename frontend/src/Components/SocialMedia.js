import React from "react";
import img1 from "../Assets/img1.png";
import img2 from "../Assets/img2.png";
import img3 from "../Assets/img3.png";
import img4 from "../Assets/img4.png";

export default function SocialMedia() {
  const [list, setList] = React.useState([]);

  return (
    <div className="dark-background social-media">
      <div className="container py-4">
        <div className="row justify-content-center px-4">
          <div className="col-lg-12 my-5">
            <h2 className="text-center font-weight-bold mb-3 white-text">
              <span className="orange-text">F</span>ollow us{" "}
              <span className="orange-text"> -&gt; S</span>ocial{" "}
              <span className="orange-text">M</span>edia
            </h2>
          </div>
          <div className="col-md-3 mb-5">
            <div>
              <img src={img1} className="h-100 w-100 p-3" />
            </div>
          </div>
          <div className="col-md-3 mb-5">
            <div>
              <img src={img2} className="h-100 w-100 p-3" />
            </div>
          </div>
          <div className="col-md-3 mb-5">
            <div>
              <img src={img3} className="h-100 w-100 p-3" />
            </div>
          </div>
          <div className="col-md-3 mb-5">
            <div>
              <img src={img4} className="h-100 w-100 p-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
