import React from "react";
import MainNavbar from "../Components/MainNavbar";
import HomePAge from "../Pages/HomePAge";
import Cart from "../Pages/Cart";
import Payment from "../Pages/Payment";
import PaymentDone from "../Pages/PaymentDone";
import Customize from "../Pages/Customize";
export default function Pages() {
  return (
    <div>
      {/* <HomePAge />
      <Cart />
      <PaymentDone /> */}
      <Customize />
      <Payment />
    </div>
  );
}
