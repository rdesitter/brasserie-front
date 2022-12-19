import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import AddUser from '../../pages/Admin/Users/AddUser';
import Admin from '../../pages/Admin/Dashboard';
import AllUsers from '../../pages/Admin/Users';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import { setUser } from '../../reducers/userSlice';

import '../../style/style.scss';
import Register from '../../pages/Register';
import EditUser from '../../pages/Admin/Users/EditUser';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // If user is in localstorage -> log user
    const user = JSON.parse(localStorage.getItem('user'));
    const accessToken = localStorage.getItem('accessToken');

    if(accessToken) {
      dispatch(setUser(user));
    }
  })
  const logged = useSelector((state) => state.user.logged);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/connexion" element={ <Login /> } />

        {/* Private routes */}
        {logged && (
          <>
            <Route path="/dashboard" element={ <Admin /> } />
            <Route path="/dashboard/user" element={ <AllUsers /> } />
            <Route path="/dashboard/user/add" element={ <AddUser /> } />
            <Route path="/dashboard/user/edit/:userId" element={ <EditUser /> } />
          </>
        )}

        <Route path="/register" element={ <Register />} />
      </Routes>
    </div>
  );
}

export default App;
