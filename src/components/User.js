import React from "react";
import Links from "./Links";
import Carousel from "./Carousel";
import Slider from "./Slider";
import { Authenticator } from "@aws-amplify/ui-react";

const Home = () => {
  return (
    <div>
      <Slider />
      <Authenticator>
        {({ signOut, user }) => (
          <div>
            <h1>Hello {user.username}</h1>
            <h2>Welcome to the Home Page</h2>
            <button onClick={signOut}>Sign out</button>
          </div>
        )}
      </Authenticator>
      <Carousel />
      <Links />
    </div>
  );
};

export default Home;
