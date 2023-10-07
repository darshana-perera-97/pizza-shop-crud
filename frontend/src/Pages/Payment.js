import React, { useState } from "react";
import axios from "axios";
import MainNavbar from "../Components/MainNavbar";
import payAsset from "../Assets/payAsset.png";

export default function Payment() {
  const [amountToPay, setAmountToPay] = useState(0);
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    window.location.href = "http://localhost:3001/#memes";
    // You can use axios here to send the payment data to your server
    // Example: axios.post("/api/payment", { name, cardNumber, expirationDate, cvv });
  };
  React.useEffect(() => {
    const apiUrl = "http://localhost:3002/toPay";

    axios
      .get(apiUrl)
      .then((response) => {
        const data = response.data;
          setAmountToPay(data.amount);
        //   console.log(data.amount);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div>
      <div>
        <MainNavbar />
        <div className="container py-4 mb-5">
          <div className="row justify-content-center mb-4">
            <div className="col-lg-12 mb-4">
              <h2 className="text-center font-weight-bold mb-3">
                <span className="orange-text">O</span>nline{"  "}
                <span className="orange-text">P</span>ayment
              </h2>
            </div>
            <div className="col-md-6 mb-4">
              <img src={payAsset} alt="pay asset" className="img-fluid" />
            </div>
            <div className="col-md-6 mb-4">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <p>You have to pay Rs. {amountToPay} .00</p>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Name on Card</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input
                    type="text"
                    id="cardNumber"
                    className="form-control"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="expirationDate">Expiration Date</label>
                  <input
                    type="text"
                    id="expirationDate"
                    className="form-control"
                    value={expirationDate}
                    onChange={(e) => setExpirationDate(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mt-2">
                  <label htmlFor="cvv">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    className="form-control"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn alpha-button mt-3">
                  Submit Payment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
