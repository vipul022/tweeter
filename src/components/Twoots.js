import React from "react";
import Twoot from "./Twoot";

const Twoots = ({ twoots }) => {
  // console.log("twoots", twoots);
  return (
    <div>
      {twoots.map((t, index) => (
        <Twoot key={index} twoot={t} />
      ))}
    </div>
  );
};

export default Twoots;
