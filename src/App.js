import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import User from "./Components/User.jsx";
import Axios from "axios";
import AddUserBtn from "./Components/AddUserBtn.jsx";

import "./Styling/App.scss";

function App() {
  const [queryProblem, setQueryProblem] = useState({ id: -1, index: "X" });

  const storedUsers = useSelector((state) => state.users);

  const [users, setUsers] = useState([]);
  const [profilePhotos, setProfilePhotos] = useState([]);


  useEffect(() => {
    setUsers(storedUsers);
  }, [storedUsers]);


  useEffect(() => {

    if(users.length > 0)
      (async function fetchData() {
        let userInfoRes = await Axios.get("https://codeforces.com/api/user.info", {
          params: { handles: users.join(';') },
        });
    
        const resURL = userInfoRes.data.result;
        setProfilePhotos(resURL);
      })();

  }, [users]);


  const handleChange = (evt) => {
    let str = evt.target.value.replace(/\s/g, "").toUpperCase();

    const id = parseInt(str);
    const index = str.replace(id, "");

    console.log(id + index);
    const regExp = /^\d+[A-Z]\d?$/g;
    if (`${id}${index}`.match(regExp))
      setQueryProblem({ id, index });
    else 
      setQueryProblem({ id: -1, index: "X" });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1> Who Solved Problem </h1>
        <input
          autoFocus
          type="text"
          pattern="\d+\w\d?"
          title="Not a valid problem that follows the pattern: \d+\w\d?"
          placeholder="1272C"
          onChange={(evt) => handleChange(evt)}
        />
        <h1> ? </h1>
      </header>

      <main>
        <div className="users-area">
          <AddUserBtn />

          {users.map((userName, idx) => (
            <User
              key={idx}
              handle={userName}
              photoURL={profilePhotos[idx]?.titlePhoto ?? "images/user.png"}
              searchProblem={queryProblem}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;