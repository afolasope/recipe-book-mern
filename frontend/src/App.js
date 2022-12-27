import Home from './pages/Home';
import styled from 'styled-components';
import { ReactQueryDevtools } from 'react-query/devtools';
import { IoMdAdd } from 'react-icons/io';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Route, Routes } from 'react-router-dom';
import SingleRecipe from './components/SingleRecipe';
import RecipesList from './components/RecipesList';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Wrapper>
        <header>
          <h1>Recipe Book</h1>
          <div className="header-nav">
            <p className="nav-item">
              <span>
                <IoMdAdd />
              </span>
              <span className="desktop-list">Add Recipe</span>
            </p>
            <p className="nav-item">
              <span>
                <BsFillBookmarkFill />
              </span>
              <span className="desktop-list">Bookmarks</span>
            </p>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<RecipesList />} />
            <Route path="/single-recipe" element={<SingleRecipe />} />
          </Route>
        </Routes>
      </Wrapper>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

const Wrapper = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #f8f5f3;
    h1 {
      font-size: 1rem;
    }
    .header-nav {
      display: flex;
      gap: 1rem;
      .nav-item {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.2rem;
        span:first-of-type {
          height: 2rem;
          width: 2rem;
          border-radius: 50%;
          border: 1px solid #eee;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #f38e82;
        }
      }
      .desktop-list {
        display: none;
        @media (min-width: 600px) {
          display: block;
        }
      }
    }
  }
`;
