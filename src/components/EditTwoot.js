import React, { useState, useEffect } from "react";

const EditTwoot = ({ twoot, updateTwoot, history }) => {
  const initialFormState = {
    user: "",
    text: "",
  };

  const [formState, setFormState] = useState(initialFormState);

  useEffect(() => {
    twoot &&
      setFormState({
        user: twoot.user,
        text: twoot.text,
      });
  }, [twoot]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedTwoot = {
      id: twoot.id,
      user: formState.user,
      text: formState.text,
      date: new Date(),
    };
    updateTwoot(updatedTwoot);
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
          value={twoot.user}
          onChange={handleChange}
        />

        <label>Text</label>
        <input
          required
          type="text"
          name="text"
          placeholder="Enter text..."
          value={twoot.text}
          onChange={handleChange}
        />

        <input type="submit" value="Edit Post"></input>
      </form>
    </div>
  );
};

export default EditTwoot;
