import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./CountryInfo.css";

export default function CountryInfo() {
  const [country, setCountry] = useState([]);
  const { name } = useParams();
  const urlName = `https://restcountries.eu/rest/v2/name/${name}`;

  const countryInfoFetch = async () => {
    const response = await fetch(urlName);
    const countries = await response.json();
    setCountry(countries);
    console.log(countries);
  };

  useEffect(() => {
    countryInfoFetch();
  }, [name]);

  return (
    <>
      <div className="container">
        <Link to="/" className="back-btn">
          <i className="fas fa-arrow-left"></i> Back
        </Link>
        {country.map((country) => {
          const {
            numericCode,
            flag,
            name,
            nativeName,
            population,
            region,
            subregion,
            capital,
            topLevelDomain,
            currencies,
            languages,
            borders,
          } = country;

          return (
            <div key={numericCode}>
              <div className="country-info-container">
                <div className="country-info-flag">
                  <img src={flag} alt={name} />
                </div>
                <div className="details-container">
                  <h2>{name}</h2>
                  <div className="list-container">
                    <ul>
                      <li>
                        <span className="bold">Native Name: </span>
                        {nativeName}
                      </li>
                      <li>
                        <span className="bold">Population:</span> {population}
                      </li>
                      <li>
                        <span className="bold">Region:</span> {region}
                      </li>
                      <li>
                        <span className="bold">Sub Region:</span> {subregion}
                      </li>
                      <li>
                        <span className="bold">Capital:</span> {capital}
                      </li>

                      <li>
                        <span className="bold">Top Level Domain:</span>{" "}
                        {topLevelDomain}
                      </li>
                      <li>
                        <span className="bold">Currencies:</span>{" "}
                        {currencies[0].name}
                      </li>
                      <li>
                        <span className="bold">Languages:</span>{" "}
                        {languages[0].name}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3>Border Countries: </h3>
                    <div className="border-countries-container">
                      {borders.map((border) => {
                        return (
                          <ul key={border}>
                            <li className="border-countries">{border}</li>
                          </ul>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
