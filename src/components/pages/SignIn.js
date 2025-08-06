import React, {useRef, useState} from 'react';
import '../../App.css';
import './Sign.css';
import { useAuth } from "../hooks/AuthProvider";
import { Navigate } from "react-router-dom";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import Blocks from "../Blocks";

export default function SignIn() {
  const auth = useAuth();

  if (auth.token) {
    <Navigate to="/"/>;
  }

  const form = useRef();
  useGSAP((context, contextSafe) => {
      gsap.fromTo("form", {
        opacity: 0
          }, {
        opacity: 1
      });
  }, { scope: form });

  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleSubmitEvent = (e) => {
    e.preventDefault();

    if (input.username !== "" && input.password !== "") {
      auth.loginAction(input);
      return;
    }
    alert("Provide a valid input");
  };

  const handleInput = (e) => {
    const { name, value } = e.target;

    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
      <>
        <Blocks/>

        <div className="sign-form" ref={form}>
          <form className='sign-in' onSubmit={handleSubmitEvent}>
            <input type='text' className="form-control mb-2" name='username' placeholder='username' autoComplete='username' onChange={handleInput}></input>
            <input type='password' className="form-control mb-2" name='password' placeholder='password' autoComplete='password' onChange={handleInput}></input>
            <a href="/sign-up" className="me-2">Do not have an account?</a>
            <button className="btn">Sign in</button>
          </form>
        </div>
      </>
  );
}
