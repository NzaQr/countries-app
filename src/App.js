import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CountryFetch from "./CountryFetch";
import CountryInfo from "./CountryInfo";
import Header from "./components/Header";
export default function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/">
        <CountryFetch />
      </Route>
      <Route path="/countries/:name">
        <CountryInfo />
      </Route>
    </Router>
  );
}
