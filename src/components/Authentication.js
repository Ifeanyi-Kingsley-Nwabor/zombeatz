import React from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import User from "./User";

const Login = () => {
  return (
    <div>
      <User />
    </div>
  );
};

export default withAuthenticator(Login);
