import React from "react";

const ArticleList = ({ articles }) => (
  <ul className="list-group list-group-flush">
  {console.log("in list", articles)}
    {articles.map(element => (
      <li className="list-group-item" key={element.id}>
        {element.name}
      </li>
    ))}
  </ul>
);

export default ArticleList;