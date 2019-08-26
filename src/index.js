import React, { Component } from "react";
import ReactDOM from "react-dom";

import TableLine from "./components/tableline";

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      characters: [
        { nom: "Darth vader", role: "Sith", camp: "Empire" },
        { nom: "Luke Skywalker", role: "Jedi", camp: "Rebellion" },
        { nom: "Boba Fett", role: "Chasseur de primes", camp: "Scum" },
        { nom: "Han Solo", role: "Contrebandier", camp: "Rebellion" },
        { nom: "Sheev Palpatine", role: "Empereur", camp: "Empire" },
        { nom: "Leia Organa", role: "Princesse", camp: "Rebellion" },
        { nom: "Bib Fortuna", role: "Majordome", camp: "Scum" }
      ],
      newCharacter: { nom: "", role: "", camp: "Empire" }
    };
  }

  getLogo = name => {
    if (name.toLowerCase() === "scum") return "scum.svg";
    if (name.toLowerCase() === "rebellion") return "rebel.svg";
    if (name.toLowerCase() === "empire") return "empire.svg";
  };

  handleClick = ev => {
    ev.preventDefault();
    this.setState({
      characters: [...this.state.characters, this.state.newCharacter],
      newCharacter: { nom: "", role: "", camp: "" }
    });
  };

  handleNameChange = ev => {
    /*console.log(ev.currentTarget.value)*/
    this.setState({
      /*
      spread objet en dessous, sans spread on écrit comme ça
      newCharacter: {nom:"", role:"", camp:"", nom: ev.currentTarget.value}
      */
      newCharacter: { ...this.state.newCharacter, nom: ev.currentTarget.value }
    });
  };
  handleRoleChange = ev => {
    /*console.log(ev.currentTarget.value)*/
    this.setState({
      newCharacter: { ...this.state.newCharacter, role: ev.currentTarget.value }
    });
  };
  handleCampChange = ev => {
    /*console.log(ev.currentTarget.value)*/
    this.setState({
      newCharacter: { ...this.state.newCharacter, camp: ev.currentTarget.value }
    });
  };

  render() {
    return (
      <div className="App">
        <table border="1">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Rôle</th>
              <th>Camp</th>
            </tr>
          </thead>
          <tbody>
            {this.state.characters.map(character => (
              /*Je fais passer la propriété "perso" qui pointe vers la référence character, pareil pour getLogo. Ca sera mis dans "props" dans le fichier tableline.js*/
              <TableLine perso={character} logo={this.getLogo} />
            ))}
          </tbody>
        </table>

        <form>
          Nom:{" "}
          <input
            type="text"
            onChange={this.handleNameChange}
            value={this.state.newCharacter.nom}
          />
          Role:{" "}
          <input
            type="text"
            onChange={this.handleRoleChange}
            value={this.state.newCharacter.role}
          />
          Camp:{" "}
          <select value={this.state.value} onChange={this.handleCampChange}>
            <option value="Empire">Empire</option>
            <option value="Rebellion">Rebellion</option>
            <option value="Scum">Scum</option>
          </select>
          <button onClick={this.handleClick}>CLICK ME !</button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
