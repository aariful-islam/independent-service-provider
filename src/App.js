import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './Pages/AboutMe/AboutMe';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import CheckOut from './Pages/Home/Services/CheckOut/CheckOut';
import LogIn from './Pages/LogIn/LogIn/LogIn';
import Registration from './Pages/LogIn/Registration/Registration';
import RequireAuth from './Pages/LogIn/RequireAuth/RequireAuth';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/aboutme' element={<AboutMe></AboutMe>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>

          </RequireAuth>
        
        }></Route>
        {/* <Route path='/services' element={<Services></Services>}></Route> */}
        <Route path='/logIn' element={<LogIn></LogIn>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
      </Routes>
      
     
    </div>
  );
}

export default App;
