import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from 'react-router-dom';
//  imported image as variable
import championshipsImg from "../../images/championships.jpg";
import playersImg from "../../images/players.jpg";
import coachesImg from "../../images/coaches.jpg";


function CarouselHomePage() {
   
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={championshipsImg /* replaced require with variable name */}
            alt="First slide"
          />
          <Carousel.Caption>
            <Link to="championships">
              <h3 style={h3Style}>Championships</h3>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={playersImg} alt="Second slide" />

          <Carousel.Caption>
            <Link to="players">
              <h3 style={h3Style}>Players</h3>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={coachesImg} alt="Third slide" />

          <Carousel.Caption>
            <Link to="coaches">
              <h3 style={h3Style}>Coaches</h3>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}

const h3Style = {
    backgroundColor: 'black',
    color: 'white',
    textDecoration : 'none'
}

export default CarouselHomePage;

