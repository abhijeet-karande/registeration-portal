import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Container, Paper, Button, Typography, Grid } from "@mui/material";
import "C:/Users/karan/Desktop/registration/registrationfrontend/src/App.css";

const currencies = [
  {
    value: "CSE",
    label: "Computer Science and Engineering",
  },
  {
    value: "MECH",
    label: "Mechanical Engineering",
  },
  {
    value: "E&TC",
    label: "Electornic and Telecommunication Engineering",
  },
  {
    value: "CIVIL",
    label: "Civil Engineering",
  },
  {
    value: "ELE",
    label: "Electrical Engineering",
  },
];

export default function Student() {
  const paperstyle = { padding: "20px", maxWidth: 400, margin: "20px auto" };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  const handelclick = (e) => {
    e.preventDefault();
    const student = { name, email, course };
    console.log(student);
    fetch("http://localhost:8080/student/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    }).then(() => {
      console.log("Registerd");
      window.location.reload();
    });
  };
  return (
    <Container className="custom-container">
      <Grid container direction="column" alignItems="center">
        <Typography variant="h4">Welcome To Registration Portal</Typography>
        <Paper elevation={3} style={paperstyle}>
          <Typography variant="h6">Register Here</Typography>
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
              select
              variant="outlined"
              fullWidth
              style={{ margin: "10px 0" }}
              SelectProps={{
                native: true,
              }}
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            >
              {currencies.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
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
        <Typography variant="h6">Thanks for Registering.</Typography>
      </Grid>
    </Container>
  );
}
