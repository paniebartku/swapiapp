import React from "react";
import spinnerImg from "../../assets/images//spinner.gif";

const Spinner = () => {
  return (
    <>
      <img
        src={spinnerImg}
        alt="loading..."
        style={{
          width: "200px",
          margin: "auto",
          display: "block"
        }}
      />
    </>
  );
};

export default Spinner;
