import React, { useState } from "react";
import Appbar from "../component/Appbar";
import TextField from "@mui/material/TextField";
import { Container, Paper, Button, Typography, Grid } from "@mui/material";
import "C:/Users/karan/Desktop/registration/registrationfrontend/src/App.css";

function ContactPage() {
  const paperstyle = { padding: "20px", maxWidth: 400, margin: "20px auto" };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [issue, setIssue] = useState("");

  const handelclick = (e) => {
    e.preventDefault();
    const contact = { name, email, issue };
    console.log(contact);
    fetch("http://localhost:8080/contact/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact),
    }).then(() => {
      console.log("Registerd");
      window.location.reload();
    });
  };
  return (
    <div>
      <Appbar> </Appbar>
      <Container className="custom-container">
        <Grid container direction="column" alignItems="center">
          <Typography variant="h4">Contact Us for More Information</Typography>
          <Paper elevation={3} style={paperstyle}>
            <Typography variant="h6">Contact Here</Typography>
            <form>
              <TextField
                label="Name of Student"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                style={{ margin: "10px 0" }}
              />
              <TextField
                label="Email id"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                style={{ margin: "10px 0" }}
              />
              <TextField
                label="Issue"
                variant="outlined"
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
                fullWidth
                style={{ margin: "10px 0" }}
              />
              <Button
                variant="contained"
                color="primary"
                disableElevation
                fullWidth
                style={{ margin: "10px 0" }}
                onClick={handelclick}
              >
                Submit!
              </Button>
            </form>
          </Paper>
          <Typography variant="h6">Thanks for Contacting Us.</Typography>
        </Grid>
      </Container>
    </div>
  );
}

export default ContactPage;
