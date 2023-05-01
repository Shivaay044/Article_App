import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { store } from "../Redux/store";
import { Navigate } from "react-router-dom";



function PrivateRoute({children}:any)  {
   
  const isAuth = useSelector((store:any)=>store.authReducer.isAuth)

  return isAuth ? children : <Navigate to={"/login"}/>
}

export default PrivateRoute;
