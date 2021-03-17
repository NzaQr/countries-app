import React, { useState, useEffect } from "react";
import CountryCard from "./components/CountryCard";

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

  let updateCountries = countries.filter((i) => {
    return i.name.toLowerCase().includes(query);
  });

  return (
    <>
      <form onSubmit={fetchSearchCountry}>
        <input placeholder="Search" value={query} onChange={handleChange} />
      </form>
      {updateCountries.map((country) => {
        const { numericCode } = country;
        return (
          <article key={numericCode}>
            <CountryCard country={country} />
          </article>
        );
      })}
    </>
  );
}
