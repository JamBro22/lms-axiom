import React, { useContext, useEffect } from "react";
import Introduction from "./Introduction";
import Users from "./Users";
import Reason from "./Reason";
import Features from "./Features";
// add auth context to dashboard to ensure user is loaded...
import AuthContext from "../../context/auth/authContext";

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();

    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Introduction />
      <Users />
      <Reason />
      <Features />
    </div>
  );
};

export default Home;
