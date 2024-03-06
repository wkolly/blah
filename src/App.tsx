import React from "react";
import "./App.css";
import CollegeBasketballTeams from "./CollegeBasketballTeams.json";

interface Team {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

function Welcome() {
  return (
    <div>
      <h1>Welcome to the NCAA Basketball Teams Website</h1>
    </div>
  );
}

function Teams({ team }: { team: Team }) {
  return (
    <div>
      <h2>{team.school}</h2>
      <p>Mascot: {team.name}</p>
      <p>
        Location: {team.city}, {team.state}
      </p>
    </div>
  );
}

function TeamList() {
  return (
    <div>
      {CollegeBasketballTeams.teams.map((team: Team, index: number) => (
        <Teams key={index} team={team} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
