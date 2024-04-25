import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { dummyData } from "./data";

function App1() {
 
  const [data, setData] = useState({});
  const [query, setQuery] = useState("");
  const [modal, setModal] = useState(false);




  return (
    <div>
  
      <>
        {/* search feature */}
        <div className="d-flex justify-content-center  align-items-center mt-5 mb-3  ">
          <input
            type="text"
            className=""
            style={{
              outline: "none",
              border: "none",
              padding: "10px",
              borderBottom: "1px solid #C4CCCC ",
            }}
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        {/* search feature */}

        <Container>
          <div className="d-flex justify-content-center  align-items-center  flex-wrap gap-4 mb-5 mt-5">
            {dummyData &&
              dummyData
                .filter((i) =>
                  i.title.toLowerCase().includes(query.toLowerCase())
                )
                .map((item, index) => {
                  return (
                    <Card style={{ width: "18rem", height: "32rem" }}>
                      <div className="">
                        <Card.Img
                          variant="top"
                          className="mt-3"
                          loading="lazy"
                          style={{
                            width: "100%",
                            height: "15rem",
                            objectFit: "contain",
                          }}
                          src={item.image}
                        />
                        <span
                          onClick={() => {
                            setModal(!modal);
                            setData(item);
                          }}
                          className="ms-5 mt-5"
                        >
                          view
                        </span>
                      </div>
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.title}</Card.Text>
                        <Card.Text
                          style={{ height: "100px" }}
                          className="overflow-auto"
                        >
                          {item.description}
                        </Card.Text>
                        <Link to={"/edit"} state={item}>
                          <Button variant="outline-success">Edit</Button>{" "}
                        </Link>
                        <Link to={"/view"} state={item}>
                          <Button variant="outline-danger">View</Button>{" "}
                        </Link>
                      </Card.Body>
                    </Card>
                  );
                })}
          </div>
        </Container>

        {modal && (
          <div
            className="m-auto d-flex  justify-content-center  align-items-center  position-absolute top-0  "
            style={{
              height: "100vh",
              width: "100%",
              background: "rgba(0,0,0,0.3)",
            }}
          >

            <div
              className="m-auto d-flex justify-content-center position-relative  align-items-center px-3   rounded-2 shadow-lg  "
              style={{ width: "600px", background: "white" }}
            >
              <span onClick={()=>setModal(!modal)} className="position-absolute  "   style={{right:"30px",top:"20px"}}>X</span>
              <div className="">
                <img
                  src={data.image}
                  alt=""
                  style={{
                    width: "300px",
                    height: "100%",
                    padding: "40px",
                    boxSizing: "border-box",
                    objectFit: "cover",
                  }}
                />
              </div>

              <div className="d-flex  justify-content-center  align-items-center  flex-col ">
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>{data.title}</Card.Text>
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
}

export default App1;
