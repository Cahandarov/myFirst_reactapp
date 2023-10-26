import React from "react";
// import side_item_photo_1 from './images/side_item_1.png'
// import verified from './images/verified.png'
// import circle_black from './images/circle_black.png'

export default function Side_item({
  side_item_photo,
  profil_name,
  verify,
  circle,
  last_activity,
  verified,
  online,
}) {
  return (
    <div className="Side_item">
      <img
        src={side_item_photo}
        alt="side_item_photo"
        className="side_item_photo_1"
      />
      <div className="side_item_rigth">
        <div className="side_item_rigth_top">
          <p className="side_item_text1">{profil_name}</p>
          {verified ? (
            <img src={verify} alt="verify" className="verified" />
          ) : (
            ""
          )}
        </div>
        <div className="side_item_rigth_bottom">
          {online ? (
            <img src={circle} alt="circle" className="circle_black" />
          ) : (
            ""
          )}
          <p className="side_item_text2">{last_activity}</p>
        </div>
      </div>
    </div>
  );
}
