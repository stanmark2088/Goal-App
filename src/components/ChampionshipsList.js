import React, { useState } from "react";
// import axios from "axios";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Button, Col, Row, Container } from "react-bootstrap";
import Bundesliga from "../img/Bundesliga.png";
import Eredivisie from "../img/Eredivisie.png";
import LaLiga from "../img/LaLiga.png";
import Ligue1 from "../img/Ligue1.png";
import PremierLeague from "../img/PremierLeague.png";
import SerieA from "../img/SerieA.png";

function ChampionshipsList() {
  const [championships, setChampionship] = useState([
    {
      id: 2021,
      name: "Premier League",
      img:
        "https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg",
    },
    {
      id: 2002,
      name: "Bundesliga",
      img:
        "https://upload.wikimedia.org/wikipedia/en/d/df/Bundesliga_logo_%282017%29.svg",
    },
    {
      id: 2003,
      name: "Eredivisie",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/0/0f/Eredivisie_nieuw_logo_2017-.svg",
    },
    {
      id: 2014,
      name: "La Liga",
      img: "https://upload.wikimedia.org/wikipedia/commons/1/13/LaLiga.svg",
    },
    {
      id: 2015,
      name: "Ligue 1",
      img: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Ligue1.svg",
    },
    {
      id: 2019,
      name: "Serie A",
      img:
        "https://vignette.wikia.nocookie.net/logopedia/images/1/12/Serie_A_2019.svg/revision/latest/scale-to-width-down/340?cb=20190710115458",
    },
  ]);

  // useEffect(() => {
  //         var config = {
  //           method: "get",
  //           url: "https://api.football-data.org/v2/competitions/2021/teams",
  //           headers: {
  //             "X-Auth-Token": "00790e41e6fc4447b2e54f2afd7d82dd",
  //           },
  //         };

  //         axios(config)
  //             .then(function (response) {
  //                 console.log(JSON.stringify(response.data));
  //                 setChampionship(response.data)
  //             })
  //             .catch(function (error) {
  //                 console.log(error);
  //             });

  // }, []);

  // if (championships.teams === undefined) {
  //     return (
  //         <p>Loading...</p>
  //     )
  // }

  const championshipList = championships.map((championship, index) => (
    <Container style={{ marginTop: "30px" }}>
      <Row style={rowStyle} className="col-10">
        <Col className="col-3 offset-4">
          <img src={championship.img} alt="ffff" style={imgSize} />
        </Col>
        <Col className="col-3">
          <Link
            key={index}
            style={{ textDecoration: "none", textAlign: "center" }}
            to={`/championships/${championship.id}`}
          >
            <Button style={btnStyle}>{championship.name}</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  ));

  return championshipList;
}

const btnStyle = {
  margin: "10px",
  padding: "5px",
  size: "100px",
  width: "150px",
};

const imgSize = {
  maxHeight: "80px",
  //   textAlign: "center",
};

const rowStyle = {
  margin: "10px",
};

export default ChampionshipsList;
