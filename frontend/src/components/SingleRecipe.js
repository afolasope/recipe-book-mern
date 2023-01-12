import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { MdOutlinePeople } from 'react-icons/md';
import { IoIosCheckmark, IoIosTimer } from 'react-icons/io';
import { BsBookmark } from 'react-icons/bs';

const SingleRecipe = ({ queryID }) => {
  const { id } = useParams();

  const localRecipes = JSON.parse(localStorage.getItem('recipesList'));

  const recipe = localRecipes.find((item) => item.id === id);

  return (
    <Wrapper>
      <div className="image-container">
        <img src={recipe.image_url} alt="" />
        <h1 className="title">
          <span>{recipe.title}</span>
        </h1>
      </div>
      <div className="description-tags">
        <p>
          <span>
            <IoIosTimer />
          </span>
          <span>{recipe.cooking_time} minutes</span>
        </p>
        <p>
          <span>
            <MdOutlinePeople />
          </span>
          <span>{recipe.servings} servings</span>
        </p>
        <p>
          <span>
            <BsBookmark />
          </span>
        </p>
      </div>
      <div className="recipes">
        <h3>recipe ingredients</h3>
        <ul className="recipe-list">
          {recipe.ingredients.map((item) => {
            return (
              <li className="recipe">
                <span>
                  <IoIosCheckmark />
                </span>
                {item.quantity} {item.unit} {item.description}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="directions">
        <h3>HOW TO COOK IT</h3>
        <p>
          This recipe was carefully designed and tested by
          <b> {recipe.publisher}</b>. Please check out directions at their
          website.
        </p>
        <button>
          <a href={recipe.source_url} target="_blank" rel="noreferrer">
            Directions
          </a>
        </button>
      </div>
    </Wrapper>
  );
};

export default SingleRecipe;

const Wrapper = styled.div`
  .image-container {
    position: relative;
    height: 20rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: relative;
      opacity: 0.8;
      background-color: black;
      filter: blur(2px);
    }

    .title {
      transform: translate(-50%, 20%) skewY(-6deg);
      position: absolute;
      bottom: 0%;
      left: 50%;
      text-align: center;
      span {
        padding: 0.5rem 2rem;
        background-color: #f9bf87;
        color: #fff;
        text-transform: uppercase;
        -webkit-box-decoration-break: clone;
        box-decoration-break: clone;
      }
    }
  }
  .description-tags {
    padding: 3rem;
    padding-top: 5rem;
    display: flex;
    background-color: #f8f5f3;
    p {
      display: flex;
      align-items: center;
      justify-content: center;
      span:first-of-type {
        color: #f59382;
        font-size: 1.3rem;
      }
    }
    p:nth-child(1) {
      margin-right: 20%;
    }

    p:nth-child(3) {
      margin-left: auto;
      span {
        display: flex;
        padding: 0.5rem;
        background: white;
        justify-content: center;
        align-items: center;
        background-color: #f59382;
        height: 2rem;
        width: 2rem;
        border-radius: 50%;
        color: #fff;
      }
    }
  }
  .recipes {
    padding: 3rem;
    background-color: #f1efee;
    h3 {
      color: #f59382;
      text-align: center;
      text-transform: uppercase;
    }
    .recipe-list {
      display: flex;
      flex-wrap: wrap;
    }
    .recipe {
      span {
        color: #f59382;
        font-weight: 600;
      }
      flex-basis: 50%;
      margin-bottom: 1rem;
    }
  }
  .directions {
    padding: 3rem;
    text-align: center;
    background-color: #f8f5f3;
    h3 {
      color: #f59382;
      text-transform: uppercase;
    }
    button {
      margin-top: 2rem;
      font-size: inherit;
      border-radius: 2rem;
      padding: 1.25rem 2.25rem;
      border: none;
      background-color: #f59382;
      color: #fff;
    }
  }
`;
