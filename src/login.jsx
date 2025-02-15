import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'


const login = () => {
  const [email, setEmail] = useState('new12@gmail.com');
  const [password, setPassword] = useState('new1@123');

  const navigate = useNavigate();


  const loginhandler = async () => {
    navigate('/home')
    // try {
    //   const res = await axios.post("http://localhost:7777/login", {
    //     email,
    //     password,
    //   },{withCredentials:true});
    //   console.log(res.data)
    //   if(res){
    //     navigate('/profile')
      
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
  };
  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-sm ">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              value={email}
              className="input"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              value={password}
              className="input"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
            />
          </fieldset>
          <div className="card-actions justify-center">
            <button
              className="btn btn-primary mt-3 w-80"
              onClick={loginhandler}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
//on click of add button it will dispatch an action and it should call reducer function and then it will update the slice of store
