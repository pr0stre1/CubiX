import React, {useRef, useState} from 'react';
import '../../App.css';
import './Sign.css';
import {useAuth} from "../hooks/AuthProvider";
import {Navigate} from "react-router-dom";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import Blocks from "../Blocks";

export default function SignUp() {
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
    repeatPassword: "",
  });

  const handleSubmitEvent = (e) => {
    e.preventDefault();

    if (input.username !== "" && input.password !== "") {
      if (input.password === input.repeatPassword) {
        auth.registerAction(input);
        return;
      }
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
          <form className='sign-up' onSubmit={handleSubmitEvent}>
            <input type='text' className="form-control mb-2" name='username' placeholder='username' autoComplete='username'
                   onChange={handleInput}></input>
            <input type='password' className="form-control mb-2" name='password' placeholder='password' autoComplete='new-password'
                   onChange={handleInput}></input>
            <input type='password'  className="form-control mb-2" name='repeatPassword' placeholder='repeat password' autoComplete='new-password'
                   onChange={handleInput}></input>
            <a href="/sign-in" className="me-2">Already have an account?</a>
            <button className="btn">Sign up</button>
          </form>
        </div>
      </>
  );
}
