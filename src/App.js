import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Header/Home/Home';
import Login from './Component/Login/Login';
import User from './Component/User/User';
import UserInfo from './Component/UserInfo/UserInfo';
import RequireAuth from './RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/user' element={<User />} />
        <Route path='/user/:userId' element={
          <RequireAuth>
            <UserInfo />
          </RequireAuth>
        }>
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
