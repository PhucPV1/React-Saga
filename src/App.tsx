import NotFound from 'components/Common/NotFound';
import PrivateRoute from 'components/Common/PrivateRoute';
import AdminLayout from 'components/Layout/Admin';
import LoginPage from 'features/auth/pages/LoginPage';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Counter } from './features/counter/Counter';
import logo from './logo.svg';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
      </div>
    {/* <div>
      <Routes>
        <Route path='/login/:id' element={<div>id</div>} />
        <Route path='/login' element={<LoginPage />} />
        <PrivateRoute  path='/admin' element={<AdminLayout />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div> */}
    </>
  );
}

export default App;
