import React from "react";
import loadingLogo from "../../images/loading.png";

import "./LoadingIndicator.css";

// Loading indicator until the request has been occurred
const LoadingIndicator = () => (
  <img className="loading" src={loadingLogo} alt="Loading" />
);

export default LoadingIndicator;
