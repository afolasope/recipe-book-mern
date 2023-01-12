import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useCategoryData } from '../hooks/useCategoryData';

const CategoriesList = ({ setQueryID }) => {
  const { data, isLoading } = useCategoryData();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Wrapper>
      <div>
        <ul className="list-items">
          {data.map(({ name, image, id }) => {
            return (
              <Link key={id} to={`/${id}`} onClick={() => setQueryID(id)}>
                <li className="list-item">
                  <div className="image-container">
                    <img src={image} alt="food" />
                  </div>
                  <p>{name}</p>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

export default CategoriesList;

const Wrapper = styled.div`
  background-color: #f8f5f3;
  .list-items {
    .list-item {
      padding: 0.3rem;
      display: flex;
      align-items: center;
      gap: 0.7rem;
      text-transform: uppercase;
      margin-bottom: 0.4rem;
      transition: transform 0.3s ease-in;
      &:hover {
        background-color: #eee;
        transform: translateY(-2%);
      }
    }
    .image-container {
      height: 3rem;
      width: 3rem;
      /* display: flex; */
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
`;
