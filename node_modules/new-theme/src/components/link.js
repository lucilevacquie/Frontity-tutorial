import React from "react";
import { connect, styled } from "frontity";

const Anchor = styled.a`
  text-decoration: none;
  color: steelblue;
`;

const Link = ({ href, actions, children }) => {
  return (
    <div>
      <Anchor href={href}>
        {(e) => {
          e.preventDefault();
          actions.router.set(href);
        }}
        {children}
      </Anchor>
    </div>
  );
};

export default connect(Link);
