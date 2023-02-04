import { Field, Form, Formik } from 'formik';
import React from 'react';
import styled from 'styled-components';
import Input from '../components/Input/Input';
import { useAddCategoryMutation } from '../hooks/useAddCategoryMutation';

const initialValues = {
  title: '',
  url: '',
  image_url: '',
  publisher: '',
  prep_time: '',
  serving: '',
  ingredient_1: '',
};

const CreateRecipe = () => {
  const { mutateAsync } = useAddCategoryMutation();

  const handleSubmit = async (values) => {
    try {
      mutateAsync(values, {
        onSuccess: () => {},
        onError: () => {},
      });
    } catch (error) {}
  };

  return (
    <Wrapper>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <div className="container">
            <div className="form-wrapper">
              <div>
                <h3>Recipe Data</h3>
                <div className="form-control">
                  <label htmlFor="firstName">Title</label>
                  <Field type="text" id="title" name="title" />
                </div>
                <div className="form-control">
                  <label htmlFor="url">URL:</label>
                  <Field type="text" id="url" name="url" />
                </div>
                <div className="form-control">
                  <label htmlFor="image_url">Image URL:</label>
                  <Field type="text" id="image_url" name="image_url" />
                </div>
                <div className="form-control">
                  <label htmlFor="publisher">Publisher:</label>
                  <Field type="text" id="publisher" name="publisher" />
                </div>
                <div className="form-control">
                  <label htmlFor="prep_time">Prep Time:</label>
                  <Field type="text" id="prep_time" name="prep_time" />
                </div>
                <div className="form-control">
                  <label htmlFor="servings">Servings</label>
                  <Field type="text" id="servings" name="servings" />
                </div>
              </div>

              <div>
                <h3>Ingredients</h3>
                <div className="form-control">
                  <label htmlFor="ingredient_1">Ingredient 1</label>
                  <Field type="text" id="ingredient_1" name="ingredient_1" />
                </div>

                <div className="form-control">
                  <label htmlFor="ingredient_2">Ingredient 2</label>
                  <Field type="text" id="ingredient_2" name="ingredient_2" />
                </div>

                <div className="form-control">
                  <label htmlFor="ingredient_3">Ingredient 3</label>
                  <Field type="text" id="ingredient_3" name="ingredient_3" />
                </div>

                <div className="form-control">
                  <label htmlFor="ingredient_4">Ingredient 4</label>
                  <Field type="text" id="ingredient_4" name="ingredient_4" />
                </div>

                <div className="form-control">
                  <label htmlFor="ingredient_5">Ingredient 5</label>
                  <Field type="text" id="ingredient_5" name="ingredient_5" />
                </div>

                <div className="form-control">
                  <label htmlFor="ingredient_6">Ingredient 6</label>
                  <Field type="text" id="ingredient_6" name="ingredient_6" />
                </div>
              </div>
            </div>
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </Wrapper>
  );
};

export default CreateRecipe;

const Wrapper = styled.div`
  display: flex;
  background-color: #eee;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  border: 3px solid teal;
  .container {
    border: 3px solid teal;
    background-color: #f38e91;
    padding: 3rem;
  }
  .form-wrapper {
    display: flex;
  }
  @media (min-width: 900px) {
    form {
      display: flex;
    }
  }
`;
