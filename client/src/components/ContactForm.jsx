import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ContactForm() {
  const [validated, setValidated] = useState(false);
  const [data, setData] = useState({});
  const [submission, setSubmission] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const handleChange = (event) => {
    setSubmission(false);
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setData(formData);
      setSubmission(true);
      setTimeout(() => {
        setFormData({ name: "", email: "", feedback: "" });
        setValidated(false);
      }, 100);
    }

    setValidated(true);
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      style={{
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        borderRadius: "20px",
        padding: "15px",
      }}
    >
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="feedback">
          <Form.Label>Feedback</Form.Label>
          <Form.Control
            required
            as="textarea"
            placeholder="Feedback"
            value={formData.feedback}
            onChange={handleChange}
            style={{ height: "100px" }}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row>
        {submission ? <Form.Label style={{color:"#0bc20b"}}>Thank You For Submitting</Form.Label> : ""}
      </Row>
      <Button variant="secondary" type="submit">
        Submit form
      </Button>
    </Form>
  );
}

export default ContactForm;
