import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";
import closeIcon from "../../icons/closeIcon.png";

import "./InfoBar.css";

export const InfoBar = ({ room, status, toggleCamera }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h3>{room}</h3>
      <div className="btn-camera">
        <button onClick={() => toggleCamera()}>
          {status === null || status === false ? `Open Cam` : `Close Cam`}
        </button>
      </div>
    </div>
    <div className="rightInnerContainer">
      <a href="/">
        <img src={closeIcon} alt="close icon" />
      </a>
    </div>
  </div>
);
