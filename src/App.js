import React from "react";
import Router from "./routes";
import { getClientList } from "./services/clients";

function App() {
  getClientList();
  return <Router />;
}

export default App;
