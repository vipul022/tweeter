import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddTwoot from "./components/AddTwoot";
import EditTwoot from "./components/EditTwoot";
import NavBar from "./components/Navbar";
import Twoot from "./components/Twoot";
import Twoots from "./components/Twoots";

const App = () => {
  const [twoots, setTwoots] = useState([
    { user: "Jess", text: "This is a text", date: new Date("2020-11-11") },
    {
      user: "Matt",
      text: "This is a text again",
      date: new Date("2020-11-11"),
    },
  ]);

  const addTwoot = (twoot) => {
    setTwoots([...twoots, twoot]);
  };

  const findTwootByIndex = (id) => {
    return twoots[id];
  };
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route
            path="/create"
            render={(props) => <AddTwoot {...props} addTwoot={addTwoot} />}
          />
          <Route exact path="/show" render={(props) => <Twoot {...props} />} />
          <Route path="/edit" render={(props) => <EditTwoot {...props} />} />

          <Route
            path="/show/:id"
            render={(props) => (
              <Twoot
                {...props}
                twoot={findTwootByIndex(props.match.params.id)}
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
