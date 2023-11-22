import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import './App.scss';
import { HomePage } from './components/Loader/HomePage';
import { NotFoundPage } from './components/Loader/NotFoundPage';
import { PeoplePage } from './components/Loader/PeoplePages';
import { Navbar } from './components/Loader/NavBar';

export const App = () => (
  <div data-cy="app">
    <Navbar />

    <main className="section">
      <div className="container">
        <Routes>
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/people" element={<PeoplePage />}>
            <Route path=":slug" />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </main>
  </div>
);
