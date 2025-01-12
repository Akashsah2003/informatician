import React from "react";
import ImgSection from "./ImgSection/ImgSection";
import BkCards from "./BkCards/BkCards";


export default function Home() {
  return (
    <>
      <ImgSection />
      <BkCards bkhead="Bestselling Books & Audiobooks" />
      <BkCards 
        bkhead="Current New York Times Bestsellers" />
    </>
  );
}
