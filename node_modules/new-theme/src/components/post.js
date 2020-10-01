import React from "react";
import { connect, styled } from "frontity";

const PostInfo = styled.div`
  background-image: linear-gradient(to right, #f4f4f4, #fff);
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-left: 4px solid lightseagreen;
  font-size: 0.8rem;
  & > p {
    margin: 0;
  }
`;

const Post = ({ state }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const author = state.source.author[post.author];
  return (
    <div>
      <h2>{post.title.rendered}</h2>
      <PostInfo>
        <p>
          <strong>Posted:</strong>
          {post.date}
        </p>
        <p>
          <strong>Author:</strong>
          {author.name}
        </p>
      </PostInfo>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
};

export default connect(Post);
