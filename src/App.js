import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddTwoot from "./components/AddTwoot";
import EditTwoot from "./components/EditTwoot";
import NavBar from "./components/Navbar";
import Twoot from "./components/Twoot";
import Twoots from "./components/Twoots";

const App = () => {
  const [twoots, setTwoots] = useState([
    {
      id: 1,
      user: "Jess",
      text: "This is a text",
      date: new Date("2020-11-11"),
    },
    {
      id: 2,
      user: "Matt",
      text: "This is a text again",
      date: new Date("2020-11-11"),
    },
  ]);
  // !nextId() is generating a next id for a new twoot
  const nextId = () => {
    return (
      twoots.reduce((acc, cur) => (acc.id > cur.id ? acc : cur), {
        id: 0,
      }).id + 1
    );
  };
  const addTwoot = (twoot) => {
    setTwoots([...twoots, twoot]);
  };

  const findTwootById = (id) => {
    return twoots.find((p) => p.id === parseInt(id));
  };

  const updateTwoot = (inTwoot) => {
    const updatedTwoots = twoots.map((t) =>
      t.id === inTwoot.id ? inTwoot : t
    );
    setTwoots(updatedTwoots);
  };

  const deleteTwoot = (id) => {
    const updatedTwoots = twoots.filter((t) => t.id !== parseInt(id));
    setTwoots(updatedTwoots);
  };
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route
            path="/create"
            render={(props) => (
              <AddTwoot {...props} addTwoot={addTwoot} nextId={nextId()} />
            )}
          />
          {/* <Route exact path="/show" render={(props) => <Twoot {...props} />} /> */}
          <Route
            path="/edit/:id"
            render={(props) => (
              <EditTwoot
                {...props}
                twoot={findTwootById(props.match.params.id)}
                updateTwoot={updateTwoot}
              />
            )}
          />

          <Route
            path="/show/:id"
            render={(props) => (
              <Twoot
                {...props}
                twoot={findTwootById(props.match.params.id)}
                showControls
                deleteTwoot={deleteTwoot}
              />
            )}
          />

          <Route
            exact
            path="/"
            render={(props) => <Twoots {...props} twoots={twoots} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
// {
//   /* <Route
//           exact
//           path="/posts/edit/:id"
//           render={(props) => (
//             <EditBlogPost
//               {...props}
//               updateBlogPost={updateBlogPost}
//               post={getPostFromId(props.match.params.id)}
//             /> */
// }
