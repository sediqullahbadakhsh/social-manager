import React, { useEffect } from "react";
import data from "../data/data.json";
const Contents = () => {
  //   const values = Object.values(data.posts_by_date["2021-06-17"]);
  const values = Object.entries(data.posts_by_date);
  useEffect(() => {
    console.log(data.posts_by_date["2021-06-17"]);
    console.log(values[1]);
  });
  return (
    <div>
      {/* {Object.keys(data).map((d, key) => (
        <div key={key}>{d}</div>
      ))} */}
      {/* {values.map((item) => (
        <div key={item.id}>
          {Object.values(item.entry).map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      ))} */}
      {values.map((date) => (
        <div key={date[0]}>
          {date[0]}
          {date[1].map((post) => (
            <div key={post.id}>
              <p>{post.published_at}</p>
              <p>{post.status}</p>
              <p>{post.entry.image}</p>
              <p>{post.entry.message}</p>
              <p>{post.account.name}</p>
              <p>{post.account.username}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default Contents;
