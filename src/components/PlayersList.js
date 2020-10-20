import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

function PlayersList() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const id = window.location.href.split("/").reverse()[0];
    const config = {
      method: "get",
      url: `http://api.football-data.org/v2/teams/${id}`,
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": "b75f515919a94829830c8199beb46c05",
        // "X-Auth-Token": "b75f515919a94829830c8199beb46c05",
      },
    };

    axios(config)
      .then((response) => {
        setPlayers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  if (players.squad === undefined) {
    return <h3>Loading...</h3>;
  }
  const style = {
    Color: "#aaa",
    width: "80%",
  };

  return (
    <div>
      <div className="big-logo">
        <img
          src={players.crestUrl}
          alt=""
          verticalAlign="text-top"
          height="10px"
          position="inline"
        />
        <h1 style={{ fontWeight: "bold", fontFamily: "Roboto" }}>
          {players.name}
        </h1>
      </div>
      <table className="standings" style={style}>
        <tbody>
          <tr className="table-head">
            <td className="player-name">Player Name</td>
            <td className="player-position">Position</td>
            <td className="player-nationality">Nationality</td>
          </tr>
          {players.squad.map((player, i) => (
            <tr>
              <Link to={`/player/${player.id}`}>
                <td className="player-name" style={{ whiteSpace: "nowrap" }}>
                  {player.name}
                </td>
              </Link>
              <td>{player.position}</td>
              <td>{player.nationality}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlayersList;
