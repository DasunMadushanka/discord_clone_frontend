import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";

function Login() {
  const signIn = () => {
    //do google login
    auth.signInWithPopup(provider).catch((error)=>alert(error.message));
  };

  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="data:image/png;base64,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"
          alt=""
        />
      </div>

      <Button onClick={signIn}>Sign in</Button>
    </div>
  );
}

export default Login;
