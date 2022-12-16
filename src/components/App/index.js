import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import AddUser from '../../pages/AddUser';
import Admin from '../../pages/Admin';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import { setUser } from '../../reducers/userSlice';

import '../../style/style.scss';

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
            <Route path="/dashboard/user" element={ <AddUser /> } />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
