import React from "react";

export default function CountryCard({
  country: { flag, name, population, region, capital },
}) {
  return (
    <div className="card-container">
      <img className="flag" src={flag} alt={name}></img>
      <h3 className="name">{name}</h3>
      <ul>
        <li>Population: {population}</li>
        <li>Region: {region}</li>
        <li>Capital: {capital}</li>
      </ul>
    </div>
  );
}
