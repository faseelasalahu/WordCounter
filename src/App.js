import { Route,Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JokesPage from './pages/JokesPage';
import PageNotFound from './pages/PageNotFound'
import './App.css';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/jokes' element={<JokesPage />} />
      <Route path='/*' element={<PageNotFound />} />
    </Routes>
    
    </>
  );
}

export default App;
