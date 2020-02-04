import React from "react";
import spinner from "./spinner.gif";
import fb1 from "./spinner.gif";
export default () => {
  return (
    <div>
      <img
        src={fb1}
        style={{ width: "200px", margin: "auto", display: "block" }}
        alt="Loading..."
      />
    </div>
  );
};
