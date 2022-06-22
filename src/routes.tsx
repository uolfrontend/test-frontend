import React from "react";
import { Route, Routes } from "react-router-dom";
import { Creator } from "./pages/Creator";
import { Dashboard } from "./pages/Dashboard";
import { Editor } from "./pages/Editor";

const MainRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/create" element={<Creator />} />
            <Route path="/edit/:id" element={<Editor />} />
            <Route path="/edit/" element={<Dashboard />} />
        </Routes>
    );
};

export { MainRoutes };
