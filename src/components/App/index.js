import { Route, Routes } from 'react-router';
import Home from '../../pages/Home';
import Login from '../../pages/Login';

import '../../style/style.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/connexion" element={ <Login /> } />
      </Routes>
    </div>
  );
}

export default App;
