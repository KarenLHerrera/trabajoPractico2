import React from "react";
import Card from "./Card";
import "../css/Article.css";

const Article = ({ Lenguajes }) => {
  return (
    <div>
      <h2>Lenguajes</h2>
      <ul>
        {Lenguajes.map((item) => (
          <li key={item.id}>
            <Card nombre={item.nombre} img={item.imagen} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Article;
