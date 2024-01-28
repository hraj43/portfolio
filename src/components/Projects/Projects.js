import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import imdb from "../../Assets/Projects/imdb.png";
import tic_tac_toe from "../../Assets/Projects/tic_tac_toe.png";
import primePalace from "../../Assets/Projects/primePalace1.png";
import free4talk from "../../Assets/Projects/free4talk.png";
import shopify from "../../Assets/Projects/shopify.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={free4talk}
              isBlog={false}
              title="free4talk"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js,Socket Io,Node js and mongodb. Have features which allows user for realtime messaging,and end to end encryptions"
              ghLink="https://github.com/hraj43/Free4talk"
            />
          </Col>
 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={primePalace}
              isBlog={false}
              title="primePalace"
              description="PrimePalace, a dynamic MERN stack real estate platform, delivers an intuitive interface for seamless property exploration. Users benefit from interactive listings,personalized profiles, and neighborhood insights, creating a comprehensive real estate experience. "
              ghLink="https://github.com/hraj43/primePalace"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tic_tac_toe}
              isBlog={false}
              title="Tic_Tac_toe"
              description="Dive into nostalgia with our React-powered Tic Tac Toe game, featuring a polished UI for an engaging experience. Challenge friends, relive classic gameplay, and enjoy seamless interactions in this modern twist on a timeless favorite."
              ghLink="https://github.com/hraj43/Tic_Tac_Toe"
              demoLink="https://tic-tac-toe-green-tau.vercel.app/"
             
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imdb}
              isBlog={false}
              title="IMDB_clone"
              description="Dive into the world of cinema with our React-based IMDb clone. Explore a sleek and responsive website that mirrors the iconic IMDb experience, showcasing movie details, ratings, and reviews. Immerse yourself in a user-friendly platform, combining the charm of the original with modern web technologies for an enhanced movie-browsing adventure."
              ghLink="https://github.com/hraj43/IMDb-clone2"
              demoLink="https://im-db-clone2.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopify}
              isBlog={false}
              title="Shopify"
              description="Shop with ease in our React-powered store project, where intuitive design meets seamless cart management. Browse, add to your cart, and enjoy a streamlined checkout for a hassle-free shopping experience. Elevate your online retail journey with our user-friendly and responsive React store."
              ghLink="https://github.com/hraj43/react_project"
              demoLink="https://react-project-green-three.vercel.app/" 
            />
          </Col>

       
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
