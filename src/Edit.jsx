import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Link, useLocation } from "react-router-dom";

function Edit() {
  const { state } = useLocation();

  console.log(state,'state')

  const [form, setForm] = useState({});

  // preview of image
  const [preview, setPreview] = useState("");
  // states for form
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     // Form validation checks...

  //     setIsVisible(true);
  //     setForm([
  //       ...form,
  //       {
  //         name: name,
  //         category: category,
  //         image: URL.createObjectURL(image),
  //         price: price,
  //         description: description,
  //       },
  //     ]);
  //   };

  const handleChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
    console.log(file, "---");
  };

  const resetImage = () => {
    setPreview("");
    setImage("");
  };

  useEffect(() => {
    setForm({...state});
  });

  return (
    <div>
      <Container className="mt-5">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              value={form.title}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Category </Form.Label>
            <Form.Control
              type="text"
              value={form.category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Name"
            />
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload Product Image</Form.Label>
            <Form.Control
              type="file"
              onClick={resetImage}
              onChange={handleChange}
            />
          </Form.Group>

          {/* image preview */}
          <Card
            className="rounded-3"
            style={{ width: "18rem", height: "300px" }}
          >
            <Card.Img
              variant="top"
              className=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                padding: "30px 0px",
              }}
              src={form.image}
            />
          </Card>
          {/* image preview */}

          {/* product price */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Price in(&#8377;) </Form.Label>
            <Form.Control
              type="number"
              value={form.price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Amount"
            />
          </Form.Group>
          {/* product price */}

          {/* description */}
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description about Product</Form.Label>
            <Form.Control
              value={form.description}
              onChange={(e) => setDescription(e.target.value)}
              as="textarea"
              rows={3}
            />
          </Form.Group>
          {/* description */}

          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Link to={-1}>
            <Button variant="primary" type="submit">
              Back
            </Button>
          </Link>
        </Form>
      </Container>
    </div>
  );
}

export default Edit;
