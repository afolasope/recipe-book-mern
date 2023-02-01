import { Form, Formik } from 'formik';
import React from 'react';
import styled from 'styled-components';
import Input from '../components/Input/Input';

const CreateRecipe = () => {
  return (
    <Wrapper>
      <div className="container">
        <form action="">
          <div>
            <h3>Recipe data</h3>
            <Input label={'Title'} name={'title'} type={'text'} id={'id'} />
            <Input label={'URL'} name={'url'} type={'text'} id={'url'} />
            <Input
              label={'Image URL'}
              name={'image_url'}
              type={'text'}
              id={'image_url'}
            />
            <Input
              label={'Publisher'}
              name={'publisher'}
              type={'text'}
              id={'publisher'}
            />
            <Input
              label={'Prep Time'}
              name={'time'}
              type={'text'}
              id={'time'}
            />
            <Input
              label={'Servings'}
              name={'servings'}
              type={'text'}
              id={'servings'}
            />
          </div>

          <div>
            <h3>Ingredients</h3>
            <Input
              label={'Ingredient 1'}
              name={'ingredient-1'}
              type={'text'}
              id={'ingredient-1'}
            />
            <Input
              label={'Ingredient 2'}
              name={'ingredient-2'}
              type={'text'}
              id={'ingredient-2'}
            />
            <Input
              label={'Ingredient 3'}
              name={'ingredient-3'}
              type={'text'}
              id={'ingredient-3'}
            />
            <Input
              label={'Ingredient 4'}
              name={'ingredient-4'}
              type={'text'}
              id={'ingredient-4'}
            />
            <Input
              label={'Ingredient 5'}
              name={'ingredient-5'}
              type={'text'}
              id={'ingredient-5'}
            />
            <Input
              label={'Ingredient 6'}
              name={'ingredient-6'}
              type={'text'}
              id={'ingredient-6'}
            />
          </div>
        </form>
        <button type="submit">Upload</button>
      </div>
    </Wrapper>
  );
};

export default CreateRecipe;

const Wrapper = styled.div`
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  .container {
    background-color: #f38e91;
    padding: 3rem;
  }
  @media (min-width: 900px) {
    form {
      display: flex;
    }
  }
`;
