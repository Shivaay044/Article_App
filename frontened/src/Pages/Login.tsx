import React, { useState } from "react";
import "../Style/Login.css"
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../Redux/action";
import { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { store } from "../Redux/store";
import { postLoginFaliureAction, postLoginSuccessAction } from "../Redux/actionType";

interface authtype {
  isAuth:boolean
  token:String
}


function Login() {
   

  const [form,setForm] = useState <Login|{}>({})

  const dispatch : Dispatch<any> | (() => any) =  useDispatch()

  const {isAuth,token} : LoginState = useSelector((store:any) =>store.authReducer)

  

  const handleSubmit = (e:React.FormEvent):void => {
   e.preventDefault()
   dispatch(userLogin(form))
  //  .then((res:AxiosResponse<Login>)=>{
  //   alert("login Success")
  //   localStorage.setItem("isAuth", isAuth)
  //   localStorage.setItem("token", token)
  //   console.log(isAuth,token)
  // })
  // .catch((err:AxiosResponse)=>{
  //   localStorage.clear()
  //   alert("login Fail")
  // })
 }

 const handleChange = (e:React.FormEvent<HTMLInputElement>):void =>{
  setForm({
        ...form,
         [e.currentTarget.name]: e.currentTarget.value
      })
 }


  return <div className="login-main">
    <form className="login" onSubmit={handleSubmit}>
      <input placeholder="email" name="email"  onChange={handleChange}/>
      <input placeholder="password" name="pass" onChange={handleChange}/>
      <input  type="submit" value={"Login"}/>
    </form>
  </div>;
}

export default Login;
