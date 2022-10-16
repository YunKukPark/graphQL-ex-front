import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movie from './Pages/Movie';
import Movies from './Pages/Movies';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movies/:id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
