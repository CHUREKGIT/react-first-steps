import Container from './components/Container/Container';
import Home from './components/Home/Home';
import About from './components/About/About';
import Favourite from './components/Favourite/Favourite';
import List from './components/List/List';
import NotFound from './components/NotFound/NotFound';
import { Routes, Route } from 'react-router-dom';



const App = () => {
  return (
    <Container>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} /> 
         <Route path="/favorite" element={<Favourite />} /> 
         <Route path ="/list/:listId" element = {<List/>}/>
         <Route path="*" element={<NotFound />} /> 
      </Routes>
    </Container>
  );
};

export default App;