import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import Login from "./Components/Login";
import Logout from "./Components/Logout";

const clientid =
  "1083946645730-tgns4u03ojfe20rjbutkge8ikvb0tmr0.apps.googleusercontent.com";

function App() {
  useEffect(() => {
    const Start = () => {
      gapi.client.init({
        clientid: clientid,
        scope: "",
      });
    };
    gapi.load("client:auth2", Start);
  }, []);

  return (
    <div>
      <Login />
      <Logout />
    </div>
  );
}

export default App;
