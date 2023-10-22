
import './App.css';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     {/* <Home /> */}

     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route  path='/profile/:id' element={<Profile />}/>
     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
