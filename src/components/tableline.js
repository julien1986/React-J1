import React from "react";

/*Je récupère les propriétés dans props, je stock le tout et je peux y accéder via props."monchamp" */
export default function TableLine(props) {
  const { nom, role, camp } = props.perso;
  return (
    <tr>
      <td>{nom}</td>
      <td>{role}</td>
      <td align="center">
        <img src={props.logo(camp)} alt={camp} width="15px" />
      </td>
    </tr>
  );
}
