import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";

function View() {
  const { state } = useLocation();
  const [form, setForm] = useState({});
  console.log(state, "state");

  useEffect(() => {
    setForm({ ...state });
  }, []);

  return (
    <Container className="mt-5 d-flex  " style={{ height: "100vh" }}>
      <div className="mx-auto d-flex  justify-content-center  align-items-center  ">
        <img
          src={state.image}
          className="object-contain m-auto "
          alt=""
          style={{width:"300px",height:"300px"}}
          loading="lazy"
        />
      </div>
      <div
        className="d-flex flex-column  mx-auto  justify-content-center  align-content-center   bg-bg-success "
        style={{ height: "100%", fontSize: "22px" }}
      >
        <p>&#x20b9; {state.price}</p>
        <div>{form.title}</div>
        <div className="d-flex flex-column my-3 ">
          <p className="m-0">count{form?.rating?.count}</p>
          <p className="m-0">rate{form?.rating?.rate}</p>
        </div>
      </div>
    </Container>
  );
}

export default View;
