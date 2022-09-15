import { BsShare, BsCardImage, BsEye } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbDotsCircleHorizontal, TbMessageCircle } from "react-icons/tb";
import { TiTick } from "react-icons/ti";
import { AiOutlineLike } from "react-icons/ai";
const Posts = ({ date }) => {
  return (
    <div>
      {date.map((post) => (
        <div key={post.id} className="post">
          <div className="post-status">
            <p>{post.status}</p>
            <p>
              <BsCardImage />
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
            <p className="post-image">{post.entry.image}</p>
            <div className="post-actions">
              <AiOutlineLike />
              <TbMessageCircle />
              <BsShare />
              <BsEye />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Posts;
