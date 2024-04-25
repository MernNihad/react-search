import React, { useState } from "react";
import Form from "./Form";
import Table from "./Table";

function App() {

  const [email,setEmail] = useState()
  const [password,setPassword] = useState()

  return (
    <div>
      <Form setPassword={setPassword} email={email} password={password} setEmail={setEmail} />

      <div className="flex">
        <Table email={email} password={password} />
      </div>


    </div>
  );
}

export default App;
