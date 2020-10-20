import React, { useState, useEffect } from "react";
import axios from "axios";

function PlayerDetails() {
  const [playerDetails, setPlayerDetails] = useState([]);

  useEffect(() => {
    const id = window.location.href.split("/").reverse()[0];
    const config = {
      method: "get",
      url: `https://api.football-data.org/v2/players/${id}`,
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": "b75f515919a94829830c8199beb46c05",
      },
    };

    axios(config)
      .then((response) => {
        console.log(response.data);
        setPlayerDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  if (playerDetails === undefined) {
    return <h3>Loading...</h3>;
  }

  return (
    console.log(playerDetails),
    (
      <div className="card" style={cardStyle}>
        <div style={{ padding: "2px 16px" }}>
          <h4>
            <b>{playerDetails.name}</b>
          </h4>
          <p>Date of birth: {playerDetails.dateOfBirth}</p>
          <p>Country of birth: {playerDetails.countryOfBirth}</p>
          <p>First name: {playerDetails.firstName}</p>
          <p>Nationality: {playerDetails.nationality}</p>
          <p>Position: {playerDetails.position}</p>
        </div>
      </div>
    )
  );
}

const cardStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  transition: "0.3s",
  width: "40%",
};
export default PlayerDetails;
