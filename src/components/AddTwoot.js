import React, { useState } from "react";

const AddTwoot = ({ addTwoot, history, nextId }) => {
  const initialFormState = {
    user: "",
    text: "",
  };

  const [formState, setFormState] = useState(initialFormState);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({ ...formState, [name]: value });
  };
  // console.log("formState=>,", formState);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTwoot = {
      id: nextId,
      user: formState.user,
      text: formState.text,
      date: new Date(),
    };
    addTwoot(newTwoot);
    history.push("/");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>User</label>
        <input
          required
          type="text"
          name="user"
          placeholder="Enter user name..."
          onChange={handleChange}
        />

        <label>Text</label>
        <input
          required
          type="text"
          name="text"
          placeholder="Enter text..."
          onChange={handleChange}
        />

        <input type="submit" value="New Post"></input>
      </form>
    </div>
  );
};

export default AddTwoot;
