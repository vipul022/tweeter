import React from "react";

const Twoot = ({ twoot }) => {
  // const { user, text, date } = twoot;
  console.log(twoot);
  if (twoot) {
    const { user, text, date } = twoot;
    return (
      <div>
        <h1>{user}</h1>
        <p>{text}</p>
        <p>{date.toLocaleString()}</p>
      </div>
    );
  }
};

export default Twoot;
