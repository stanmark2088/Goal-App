import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { Table } from 'react-bootstrap';

export default function Standings() {
  const [standings, setStandings] = useState({ standings: [] });
  useEffect(() => {
    const allUrl = window.location.href;
    const id = allUrl.split("/").reverse()[0];
    // console.log(allUrl);
    // console.log(id);
    var config = {
      method: "get",
      url: `https://api.football-data.org/v2/competitions/${id}/standings`,
      headers: {
        "X-Auth-Token": "b75f515919a94829830c8199beb46c05",
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data.standings[0]));
        setStandings(response.data.standings[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  if (standings.table === undefined) {
    return <p>Loading...</p>;
  }

  return (
    // console.log(standings),
    <table className="standings">
      <tbody>
        <tr className="table-head">
          <td className="team-position">#</td>
          <td className="team-name">Team</td>
          <td title="Matches played">MP</td>
          <td title="Wins">W</td>
          <td title="Draws">D</td>
          <td title="Losses">L</td>
          <td title="Goals for">GF</td>
          <td title="Goals against">GA</td>
          <td title="Goals difference">GD</td>
          <td title="Team points">Pts</td>
        </tr>
        {standings.table.map((team, i) => (
          <tr>
            <td className="team-position">{team.position}</td>
            <Link to={`/players/${team.team.id}`}>
              <td className="team-name">
                <div className="crest">
                  <img src={team.team.crestUrl} alt="" />
                </div>
                <span>{team.team.name}</span>
              </td>
            </Link>
            <td>{team.playedGames}</td>
            <td>{team.won}</td>
            <td>{team.draw}</td>
            <td>{team.lost}</td>
            <td>{team.goalsFor}</td>
            <td>{team.goalsAgainst}</td>
            <td>{team.goalDifference}</td>
            <td className="team-points">{team.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
