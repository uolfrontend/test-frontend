import React from "react";
import { BrowserRouter as BRouter, Routes, Route } from "react-router-dom";
import ListClient from "./pages/ListClient";
import CreateClient from "./pages/CreateClient";
import UpdateClient from "./pages/UpdateClient";

export default function Router() {
  return (
    <BRouter>
      <Routes>
        <Route path="/" exact element={<ListClient />} />
        <Route path="/create-client" element={<CreateClient />} />
        <Route path="/update-client/:id" element={<UpdateClient />} />
      </Routes>
    </BRouter>
  );
}
