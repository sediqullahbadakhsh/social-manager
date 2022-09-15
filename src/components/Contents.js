import React from "react";
import data from "../data/data.json";
import Posts from "./Posts";
const Contents = () => {
  const values = Object.entries(data.posts_by_date);

  return (
    <div className="posts-container">
      {values.map((date) => (
        <div key={date[0]} className="posts-by-date">
          <p className="date">{date[0]}</p>
          <Posts date={date[1]} />
        </div>
      ))}
    </div>
  );
};
export default Contents;
