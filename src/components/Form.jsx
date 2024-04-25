import React, { useState } from "react";
import Table from "./Table";

function Form({setEmail,setPassword,email,password}) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

  return (
    <>
      <form className="form">
        <h1>Add </h1>
        <div className="form-div">
          <input
            value={email}
            // onChange={(e) => setEmail(e.target.value)}
            onChange={(e) => setEmail(e.target.value)}
            className="form-filed"
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="form-div">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-filed"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="form-div ">
          <input
            className="submit-btn form-filed"
            type="submit"
            placeholder="Password"
          />
        </div>
        {/* CHANGES HERE: Email :{JSON.stringify(email)} */}
        {/* Passwor : {JSON.stringify(password)} */}
      </form>

    </>
  );
}

export default Form;
