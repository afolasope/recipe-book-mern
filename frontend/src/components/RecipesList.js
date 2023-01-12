import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useRecipesData } from '../hooks/useRecipesData';

const RecipesList = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useRecipesData(id);

  useEffect(() => {
    localStorage.setItem('recipesList', JSON.stringify(data));
  }, [data]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Something went wrong...</h1>;
  }

  return (
    <Wrapper>
      {data.map(
        ({ id, image_url, title, publisher, servings, cooking_time }) => {
          return (
            <Link to={`/single-recipe/${id}`} key={id} className="card">
              <div className="image-container">
                <img src={image_url} alt="" />
              </div>
              <div>
                <p className="title">{title}</p>
                <p className="desc">
                  <span>publisher: {publisher}</span>
                  <span>servings:{servings}</span>
                  <span>cooking time: {cooking_time} mins</span>
                </p>
              </div>
            </Link>
          );
        }
      )}
    </Wrapper>
  );
};

export default RecipesList;

const Wrapper = styled.div`
  padding: 1rem;
  .card {
    padding: 0.5rem;
    border: 1px solid #eee;
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    .title {
      font-weight: bold;
      font-size: 0.9rem;
    }
    .desc {
      span {
        margin-right: 2rem;
      }
    }
    div:nth-child(2) {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }
  .image-container {
    height: 5rem;
    width: 8rem;
    img {
      height: 100%;
      width: 100%;
    }
  }
`;
