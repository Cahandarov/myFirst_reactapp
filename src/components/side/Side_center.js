import React from "react";
import Side_item from "./Side_item";
import side_item_photo_1 from "./images/side_item_1.png";
import side_item_photo_2 from "./images/side_item_2.png";
import side_item_photo_3 from "./images/side_item_3.png";
import side_item_photo_4 from "./images/side_item_4.png";
import empthy from "./images/empthy.png";
import verified from "./images/verified.png";
import circle_black from "./images/circle_black.png";

export default function Side_center() {
  const data = [
    {
      id: 1,
      url1: side_item_photo_1,
      name: "Angle",
      url2: verified,
      url3: circle_black,
      activity: "Typing....",
      verified: true,
      online: true,
    },
    {
      id: 2,
      url1: side_item_photo_2,
      name: "Proggamiz",
      url2: verified,
      url3: circle_black,
      activity: "Last seen 1:30 am",
      verified: true,
      online: false,
    },
    {
      id: 3,
      url1: side_item_photo_3,
      name: "Sam",
      url2: verified,
      url3: circle_black,
      activity: "Online",
      verified: false,
      online: true,
    },
    {
      id: 4,
      url1: side_item_photo_4,
      name: "John",
      url2: verified,
      url3: circle_black,
      activity: "Last seen 6:30 pm",
      verified: true,
      online: false,
    },
  ];
  return (
    <div id="side_center">
      {data.map((e) => {
        return (
          <Side_item
            key={e.id}
            side_item_photo={e.url1}
            profil_name={e.name}
            verify={e.url2}
            online={e.online}
            verified={e.verified}
            circle={e.url3}
            last_activity={e.activity}
          />
        );
      })}
    </div>
  );
}
