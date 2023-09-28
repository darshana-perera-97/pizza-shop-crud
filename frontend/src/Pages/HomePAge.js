import React from "react";
import MainBanner from "../Components/MainBanner";
import MainNavbar from "../Components/MainNavbar";
import ItalianTasteBanner from "../Components/ItalianTasteBanner";
import CustomerFavourite from "../Components/CustomerFavourite";
import TopBanner from "../Components/TopBanner";
import Recents from "../Components/Recents";
import CustomerFeedbacks from "../Components/CustomerFeedbacks";
import SocialMedia from "../Components/SocialMedia";

export default function HomePAge() {
  return (
    <div>
      <MainNavbar />
      <TopBanner />
      <ItalianTasteBanner />
      <CustomerFavourite />
      <MainBanner />
      <Recents />
      <CustomerFeedbacks />
      <SocialMedia />
    </div>
  );
}
