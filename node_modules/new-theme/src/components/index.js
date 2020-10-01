import React from "react";
import { connect, Global, css, styled, Head } from "frontity";
import Link from "./link";
import List from "./list";
import Post from "./post";
import Page from "./page";

const Header = styled.header`
  background-color: #eee;
  border-width: 0 0 8px 0;
  border-style: solid;
  border-color: ${(props) => (props.isPostType ? "indigo" : "maroon")};
`;

const HeaderContent = styled.div`
  max-width: 800px;
  padding: 2rem 1rem;
  margin: auto;
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  & > div {
    margin-right: 1rem;
  }
`;

const Main = styled.main`
  max-width: 800px;
  padding: 1rem;
  margin: auto;
  img {
    max-width: 100%;
  }
  h2 {
    margin: 0.5rem 0;
  }
  p {
    line-height: 1.25rem;
    margin-bottom: 0.75rem;
  }
`;

const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <Global
        styles={css`
          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }
          html {
            font-family: sans-serif;
          }
        `}
      />
      <Head>
        <title>Frontity tutorial</title> //change the name of the tab
      </Head>
      <Header isPostType={data.isPostType}>
        <HeaderContent>
          <h1>Frontity tutorial</h1>
          <p>Current URL: {state.router.link}</p>
          {state.theme.isMenuOpen ? (
            <>
              <button onClick={actions.theme.closeMenu}>Close</button>
              <Menu>
                <Link href="/">Home</Link>
                <Link href="/products">Our products</Link>
                <Link href="/contact">Contact us</Link>
              </Menu>
            </>
          ) : (
            <button onClick={actions.theme.openMenu}>Open</button>
          )}
        </HeaderContent>
      </Header>

      <Main>
        {data.isArchive && <List />}
        {data.isPost && <Post />}
        {data.isPage && <Page />}
      </Main>
    </>
  );
};

export default connect(Root);
