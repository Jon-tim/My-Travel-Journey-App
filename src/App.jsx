import React from "react";
import { ReactDOM } from "react";
import Card from "./card";
import data from "./data";
import Nav from "./nav";

function App() {
  // console.log(data[2]);
  const info = data.map((item) => {
    return <Card item={item} />;
  });
  return (
    <div className="app">
      <Nav />
      <section className="card-list">{info}</section>
    </div>
  );
}

export default App;
