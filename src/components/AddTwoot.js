import React, { useState } from "react";

const AddTwoot = ({ addTwoot, history }) => {
  const initialFormState = {
    user: "",
    text: "",
  };

  const [formState, setFormState] = useState(initialFormState);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTwoot = {
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
          placeholder="gimme a title"
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
