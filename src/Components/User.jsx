import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { RemoveUser } from "../Redux/actions/RemoveUser";

import Axios from "axios";
import _ from "lodash";

import "../Styling/user.scss";

function User({ handle, photoURL, searchProblem }) {
  const [userInfo, setUserInfo] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const [status, setStatus] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    (async function fetchData() {
      let userStatusRes = await Axios.get("https://codeforces.com/api/user.status", {
        params: { handle: handle },
      });

      setUserInfo(userStatusRes.data.result);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    if (_.isEqual(searchProblem, { id: -1, index: "X" })) {
      setStatus("Enter a Valid Problem");
      return;
    }
    
    if(userInfo.length === 0){
      setStatus("ZERO submissions");
      return;
    }

    const foundIndex = _.findIndex(userInfo, {
      problem: { contestId: searchProblem.id, index: searchProblem.index },
    });

    if (foundIndex === -1) setStatus("NOT SOLVED");
    else if (userInfo[foundIndex].verdict == "OK")
      setStatus("SOLVED");
    else 
      setStatus("TRIED");

  }, [userInfo, searchProblem]);



  return (
    <div className="userContainer">
      <button
        className="remove-btn"
        onClick={() => dispatch(RemoveUser(handle))}
      >
        x
      </button>
      <a
        rel="noopener noreferrer"
        href={`https://codeforces.com/profile/${handle}`}
        target="_blank"
      >
        <div className="user">
          <h3> {handle} </h3>

          <img alt="" src={photoURL} />

          <div className="status">
            {isLoading && <i className="fa fa-spin fa-refresh"></i>}
            {!isLoading > 0 && (
              <div id={status.replace(/\s/g, "-")}>
                {status}
              </div>
            )}
          </div>
        </div>
      </a>
    </div>
  );
}

export default User;
