import React from "react";
import { GoogleLogin } from "react-google-login";
const clientId =
  "1083946645730-tgns4u03ojfe20rjbutkge8ikvb0tmr0.apps.googleusercontent.com";
const Login = () => {
  const onSuccess = (res) => {
    console.log("success", res.profileObj);
  };
  const onFailure = (res) => {
    console.log("Lgin Failed", res);
  };
  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy="single_host_origin"
        isSignedIn={true}
      />
    </div>
  );
};

export default Login;
