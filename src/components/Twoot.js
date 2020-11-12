import React from "react";
import { Link } from "react-router-dom";

const Twoot = ({ twoot }) => {
  // const { user, text, date } = twoot;
  console.log(twoot);
  if (twoot) {
    const { user, text, date, id } = twoot;

    return (
      <div>
        <Link to={`/show/${id}`}>
          <h1>{user}</h1>
        </Link>
        <p>{text}</p>
        <p>{date.toLocaleDateString()}</p>
      </div>
    );
  }
};

export default Twoot;

{
  /* <Link style={linkStyles} to={`/posts/${post._id}`}>
  <h1>{title}</h1>
</Link>;  */
}
