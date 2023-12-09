import React from "react";
import { Body, Footer, Header, Hero } from "../UI";
import { ScrollButton } from "../Constants";

export default function Home() {
  return (
    <div>
      <Header />
      {/* <Hero /> */}
      <Body />
      <div className="bg-black opacity-60">
        <Footer />
        <ScrollButton />
      </div>
    </div>
  );
}
