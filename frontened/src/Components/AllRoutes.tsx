import React from "react";
import { Routes,Route } from "react-router-dom";
import Login from "../Pages/Login";
import Regsiter from "../Pages/Register";
import Notes from "../Pages/Notes";
import PrivateRoute from "./PrivateRoute";





function AllRoutes() {
  return <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Regsiter/>}/>
    <Route path="/notes" element={ <PrivateRoute> <Notes/> </PrivateRoute>}/>
  </Routes>;
}

export default AllRoutes;
