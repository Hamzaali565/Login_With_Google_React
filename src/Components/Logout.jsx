import React from "react";
import { GoogleLogout } from "react-google-login";
const clientId =
  "1083946645730-tgns4u03ojfe20rjbutkge8ikvb0tmr0.apps.googleusercontent.com";
const Logout = () => {
  const onLogoutSuccess = () => {
    console.log("loged Out");
  };
  return (
    <div id="signOutButton">
      <GoogleLogout
        onLogoutSuccess={onLogoutSuccess}
        buttonText="Log Out"
        clientId={clientId}
      />
    </div>
  );
};

export default Logout;
