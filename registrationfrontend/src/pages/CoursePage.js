import React from "react";
import Appbar from "../component/Appbar";
import { Container } from "@mui/material";
import "C:/Users/karan/Desktop/registration/registrationfrontend/src/App.css";

function CoursePage() {
  return (
    <div>
      <Appbar></Appbar>
      <Container className="custom-container">
        <h1> Courses In University </h1>
        <div>
          <h1>B.Tech In Computer Science and Engg.</h1>
          50+ PHD Faculties Are There For This Branch
          <div>Best Computer Labs Are Present In Our Institute</div>
          <h1>B.Tech In Mechanical Engg.</h1>
          55+ PHD Faculties Are There For This Branch
          <div>
            There Are 80+ Mechanical Machines Available In Our Institute
          </div>
          <h1>B.Tech In Electornic and Telecommunication Engg.</h1>
          38+ PHD Faculties Are There For This Branch
          <div>There Are Best Electrical-Tools Available In Our Institute</div>
          <h1>B.Tech In Civil Engg.</h1>
          40+ PHD Faculties Are There For This Branch
          <div>There Are 80+ Site visit are done In Our Institute</div>
          <h1>B.Tech In Electrical Engg.</h1>
          30+ PHD Faculties Are There For This Branch
          <div>All Best Electrical-Tools Provides Our Institute</div>
        </div>
      </Container>
    </div>
  );
}

export default CoursePage;
