import React from "react";

export default function CountryCard({
  country: { flag, name, population, region, capital },
}) {
  return (
    <div className="card-container">
      <img className="flag" src={flag} alt={name}></img>
      <div className="country-info">
        <h3 className="name">{name}</h3>
        <ul>
          <li>
            <span className="bold">Population:</span> {population}
          </li>
          <li>
            <span className="bold">Region: </span>
            {region}
          </li>
          <li>
            <span className="bold">Capital: </span>
            {capital}
          </li>
        </ul>
      </div>
    </div>
  );
}
