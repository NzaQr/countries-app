import React from "react";
import CountryFetch from "./CountryFetch";
import Header from "./components/Header";
export default function App() {
  return (
    <div>
      <Header />
      <CountryFetch />;
    </div>
  );
}
