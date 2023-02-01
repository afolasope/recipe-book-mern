import { useState } from 'react';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { IoMdAdd } from 'react-icons/io';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import LoginSignupModal from './components/LoginSignupModal';
import Protected from './components/Protected';
import RecipesList from './components/RecipesList';
import SingleRecipe from './components/SingleRecipe';
import useToggle from './hooks/useToggle';
import CreateRecipe from './pages/CreateRecipe';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

const queryClient = new QueryClient();

function App() {
  const [user, setUser] = useState(false);
  const [queryID, setQueryID] = useState();
  const { show: openModal, toggle: setOpenModal } = useToggle();

  return (
    <QueryClientProvider client={queryClient}>
      <Wrapper>
        <header>
          <h1>
            <Link to="/"> Recipe Book</Link>
          </h1>
          <div className="header-nav relative">
            <p className="nav-item" onClick={() => setOpenModal(true)}>
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
        {openModal && <LoginSignupModal setOpenModal={setOpenModal} />}

        <Routes>
          <Route
            path="/"
            element={<Home queryID={queryID} setQueryID={setQueryID} />}
          >
            <Route path="/" element={<RecipesList />} />
            <Route path="/:id" element={<RecipesList />} />
            <Route
              path="/single-recipe/:id"
              element={
                <SingleRecipe queryID={queryID} setQueryID={setQueryID} />
              }
            />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/create-recipe"
            element={
              <Protected isUser={user}>
                <CreateRecipe />
              </Protected>
            }
          ></Route>
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
        cursor: pointer;
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
