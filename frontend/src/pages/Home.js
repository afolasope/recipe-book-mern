import React from 'react';
import { Outlet } from 'react-router';
import styled from 'styled-components';
import CategoriesList from '../components/CategoriesList';

const Home = () => {
  return (
    <Wrapper>
      <aside>
        <CategoriesList />
      </aside>
      <main>
        <Outlet />
      </main>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  aside {
    border: 2px solid red;
    width: 20%;
    height: 100vh;
  }

  main {
    flex-basis: 80%;
  }
`;
