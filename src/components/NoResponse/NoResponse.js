import React from "react";

import "./NoResponse.css";

import Logo from "../../images/nodata.png";

// No data case
const NoResponse = () => (
  <div className="NoResponse">
    <img src={Logo} alt="No response" />
  </div>
);

export default NoResponse;
