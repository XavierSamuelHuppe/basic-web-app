import "./App.css";

import Login from "./Login/Login";
import MainPage from "./Main/MainPage";

import { Fragment, useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return <Fragment>{loggedIn ? <MainPage /> : <Login />}</Fragment>;
}

export default App;
