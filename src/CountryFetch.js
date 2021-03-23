import React, { useState, useEffect } from "react";
import CountryCard from "./components/CountryCard";
import "./components/CountryCard.css";

export default function CountryFetch() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");
  const url = `https://restcountries.eu/rest/v2/all`;
  const urlSearch = `https://restcountries.eu/rest/v2/name/${query}`;

  const fetchCountry = async () => {
    const response = await fetch(url);
    const countries = await response.json();
    setCountries(countries);
    console.log(countries);
  };

  const fetchSearchCountry = async (event) => {
    event.preventDefault();
    const response = await fetch(urlSearch);
    const countries = await response.json();
    setCountries(countries);
    console.log(countries);
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSelect = (event) => {
    setRegion(event.target.value);
  };

  useEffect(() => {
    fetchCountry();
  }, []);

  const updateCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(query.toLowerCase()) &&
      country.region.toLowerCase().includes(region.toLocaleLowerCase())
  );

  return (
    <>
      <form onSubmit={fetchSearchCountry}>
        <div className="input-container">
          <input
            className="search-bar"
            placeholder="Search for a country..."
            value={query}
            onChange={handleChange}
          />
          <i className="fas fa-search search-image"></i>
        </div>
        <select value={region} onChange={handleSelect}>
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </form>
      <div className="countries-container">
        {updateCountries.map((country) => {
          const { numericCode } = country;
          return (
            <div key={numericCode}>
              <CountryCard country={country} />
            </div>
          );
        })}
      </div>
    </>
  );
}
