import React, { useState, useEffect } from "react";
import CountryCard from "./components/CountryCard";
import "./components/CountryCard.css";

export default function CountryFetch() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");
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

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    fetchCountry();
  }, []);

  const updateCountries = countries.filter((i) => {
    return i.name.toLowerCase().includes(query);
  });

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
        <select>
          <option>Filter by Region</option>
          <option>Africa</option>
          <option>America</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
      </form>
      <div className="countries-container">
        {updateCountries.map((country) => {
          const { numericCode } = country;
          return (
            <article key={numericCode}>
              <CountryCard country={country} />
            </article>
          );
        })}
      </div>
    </>
  );
}
