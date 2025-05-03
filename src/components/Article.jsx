import React from "react";
import Card from "./Card";
import "../css/Article.css";

const Article = ({ Lenguajes }) => {
  return (
    <div className="container px-4 px-lg-5 mt-5 cards-container">
      <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-3 justify-content-center">
        {Lenguajes.map((lenguaje,index)=> 
            <Card key={index} item={lenguaje}/>
        )}
      </div>
    </div>


  );
};

export default Article;
