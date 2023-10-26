import React from "react";

export default function Slider_item({ id, slider_top_url, slider_photo_url }) {
  console.log(id);
  return (
    <div className="slider_item_full">
      <img src={slider_top_url} className="slider_item_top" />
      <img src={slider_photo_url} className="slider_item" />
    </div>
  );
}
