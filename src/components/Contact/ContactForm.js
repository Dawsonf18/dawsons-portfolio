import React from "react";
import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2"
import Particle from "../Particle";
import { Container } from "react-bootstrap";


const SERVICE_ID = "service_p9q2nzm";
const TEMPLATE_ID = "template_3ann7md";
const PUBLIC_KEY = "3J9bzML2NDe6nhljs";

const ContactForm = () => {

const handleOnSubmit = (e) => {
  e.preventDefault();
  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
    .then((result) => {
      console.log(result.text);
      Swal.fire({
        icon: "success",
        title: "Message Sent Successfully"
      })
    }, (error) => {
      console.log(error.text);
      Swal.fire({
        icon: "error",
        title: "Ooops, something went wrong",
        text: error.text,
      })
    });
  e.target.reset()
};

  return (
    <div className= "contact-form">
      <Container style={{ marginTop: "100%", marginBottom: "130%" }}>
      <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id="form-input-control-email"
          control={Input}
          label="Email"
          name="user_email"
          placeholder="Email…"
          required
          icon="mail"
          iconPosition="left"
        />
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="Name"
          name="user_name"
          placeholder="Name…"
          required
          icon="user circle"
          iconPosition="left"
        />
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          label="Message"
          name="user_message"
          placeholder="Message…"
          required
        />
        <Button type="submit" color="green">Submit</Button>
      </Form>
      <Particle />
      </Container>
    </div>
  );
}
export default ContactForm;