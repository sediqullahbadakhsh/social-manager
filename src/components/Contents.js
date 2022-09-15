import React from "react";
import data from "../data/data.json";
import Posts from "./Posts";
const Contents = () => {
  const values = Object.entries(data.posts_by_date);
  const dateFormatter = (date) => {
    const months = date.slice(5, 7);
    const year = date.slice(0, 4);
    const day = date.slice(8, 10);

    if (months === "06") {
      return `${day} June ${year}`;
    } else {
      return `${day} July ${year}`;
    }
  };

  return (
    <div className="posts-container">
      {values.map((date) => (
        <div key={date[0]} className="posts-by-date">
          <p className="date">{dateFormatter(date[0])}</p>
          <Posts date={date[1]} />
        </div>
      ))}
    </div>
  );
};
export default Contents;
