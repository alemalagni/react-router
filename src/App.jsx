import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage.jsx';
import AboutUs from './pages/AboutUs.jsx';
import PostList from './pages/PostList.jsx';
import MainNav from './components/MainNav.jsx';

function App() {
  return (
    <>
      <MainNav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/PostList" element={<PostList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
