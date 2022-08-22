import { AnimatePresence } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import BlogPage from './pages/BlogPage';
import BookPage from './pages/BookPage';
import ContactPage from './pages/ContactPage';
import LandingPage from './pages/LandingPage';
import { useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path='/contact' element={<ContactPage/>} />
          <Route path='/book' element={<BookPage/>} />
          <Route path='/blog' element={<BlogPage/>} />
          <Route path='/' element={<LandingPage/>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
