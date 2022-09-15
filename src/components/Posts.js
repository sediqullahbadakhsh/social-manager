import { BsShare, BsCardImage, BsEye } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbDotsCircleHorizontal, TbMessageCircle } from "react-icons/tb";
import { TiTick } from "react-icons/ti";
import { AiOutlineLike } from "react-icons/ai";
const Posts = ({ date }) => {
  const image = (imgName) => {
    return require(`../assets/${imgName}`);
  };
  const colorSetter = (state) => {
    if (state === 0) {
      return "#ABACAE";
    } else if (state === 1) {
      return "#32C687";
    } else if (state === 2) {
      return "#FEBC2D";
    } else if (state === 3) {
      return "#EF6D42";
    } else return "#5DB3FE";
  };

  return (
    <div className="posts">
      {date.map((post) => (
        <div key={post.id} className="post">
          <div
            className="post-status"
            style={{ backgroundColor: colorSetter(post.status) }}
          >
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
