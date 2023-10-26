import React from "react";
import Slider_item from "./Slider_item";
import img1 from "./images/plus.svg";
import img2 from "./images/top_photo_1.png";
import img3 from "./images/photo2.png";
import img4 from "./images/top_photo_2.png";
import img5 from "./images/photo3.png";
import img6 from "./images/top_photo_3.png";
import img7 from "./images/photo4.png";
import img8 from "./images/top_photo_4.png";
import img9 from "./images/photo5.png";
import img10 from "./images/top_photo_5.png";

export default function Slider() {
  const sliders = [
    {
      id: 1,
      url1: img1,
      url2: img2,
    },
    {
      id: 2,
      url1: img3,
      url2: img4,
    },
    {
      id: 3,
      url1: img5,
      url2: img6,
    },
    {
      id: 4,
      url1: img7,
      url2: img8,
    },
    {
      id: 5,
      url1: img9,
      url2: img10,
    },
  ];

  return (
    <div id="slider">
      {sliders.map((e) => (
        <Slider_item
          key={e.id}
          id={e.id}
          slider_top_url={e.url2}
          slider_photo_url={e.url1}
        />
      ))}
    </div>
  );
}
