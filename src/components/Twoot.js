import React from "react";
import { Link } from "react-router-dom";

const Twoot = ({ history, twoot, deleteTwoot, showControls }) => {
  // const { user, text, date } = twoot;
  console.log(twoot.id);
  console.log("deleteTwoot", deleteTwoot);
  console.log("history =>", history);

  const handleEdit = (event) => {
    event.preventDefault();
    console.log("inside handleEdit");
    history.push(`/edit/${twoot.id}`);
    // history.push("/");
  };

  const handleDelete = (event) => {
    console.log("inside handleDelete");
    event.preventDefault();
    deleteTwoot(twoot.id);
    history.push("/");
  };
  if (twoot) {
    const { user, text, date, id } = twoot;

    return (
      <div>
        <Link to={`/show/${id}`}>
          <h1>{user}</h1>
        </Link>
        <p>{text}</p>
        <p>{date.toLocaleDateString()}</p>
        {showControls && (
          <div>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        )}
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
