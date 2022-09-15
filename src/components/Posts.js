import { useEffect, useState } from "react";

import { BsShare, BsCardImage, BsEye } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbDotsCircleHorizontal, TbMessageCircle } from "react-icons/tb";
import { TiTick } from "react-icons/ti";
import { AiOutlineLike } from "react-icons/ai";
const Posts = ({ date }) => {
  const image = (imgName) => {
    return require(`../assets/${imgName}`);
  };
  const [color, setColor] = useState("");
  useEffect(() => {
    date.map((post) => {
      if (post.status === 0) {
        return setColor("#ABACAE");
      } else if (post.status === 1) {
        return setColor("#32C687");
      } else if (post.status === 2) {
        return setColor("#FEBC2D");
      } else if (post.status === 3) {
        return setColor("#EF6D42");
      } else return setColor("#5DB3FE");
    });
  });
  return (
    <div className="posts">
      {date.map((post) => (
        <div key={post.id} className="post">
          <div className="post-status" style={{ backgroundColor: color }}>
            <p>
              <BsCardImage style={{ fill: "#fff" }} />
            </p>
          </div>
          <div className="post-content">
            <div className="post-header">
              <p className="post-date">{post.published_at}</p>
              <div className="post-options">
                <TiTick />
                <RiDeleteBin6Line />
                <TbDotsCircleHorizontal />
              </div>
            </div>
            <p className="post-description">{post.entry.message}</p>
            <img
              src={image(post.entry.image)}
              className="post-image"
              alt={post.entry.message}
            />
            <div className="post-actions">
              <p>
                <AiOutlineLike /> 0
              </p>
              <p>
                <TbMessageCircle /> 0
              </p>
              <p>
                <BsShare /> 0
              </p>
              <p>
                <BsEye /> 0
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Posts;
