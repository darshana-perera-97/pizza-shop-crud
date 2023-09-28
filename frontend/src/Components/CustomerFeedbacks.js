import React from "react";
export default function CustomerFeedbacks() {
  const [list, setList] = React.useState([
    {
      customername: "Customer Name",
      comment:
        "Delicious pizza, always hot and fresh! 5 stars!. Fast delivery and amazing taste. Will order again!",
      likes: 5,
    },
    {
      customername: "Customer Name",
      comment:
        "The Margherita pizza was divine. I'll definitely be back for more! Best pepperoni pizza in town. Crispy crust and perfect amount of cheese",
      likes: 7,
    },
  ]);

  return (
    <div>
      <div className="container py-4 mb-5">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-12 mb-4">
            <hr />
          </div>
          <div className="col-lg-12 mb-4">
            <h2 className="text-center font-weight-bold mb-3">
              <span className="orange-text">C</span>ustomer{" "}
              <span className="orange-text">F</span>eedbacks
            </h2>
          </div>
          {list.map((val, key) => {
            return (
              <div className="col-md-4 col-sm-6" key={key}>
                <div className="custom-feedbacks mx-auto text-center d-flex flex-column h-100 pt-4 pb-4 px-3">
                  <h4 className="mt-2">{val.customername}</h4>
                  <p className="flex-grow-1">{val.comment}</p>
                  <div className="d-flex mx-auto">
                    <button
                      onClick={() => {
                        console.log(key);
                      }}
                    >
                      ❤
                    </button>
                    <p className="mt-auto">{val.likes}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
