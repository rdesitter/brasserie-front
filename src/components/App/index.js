import { Route, Routes } from 'react-router';
import Home from '../../pages/Home';

import '../../style/style.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
      </Routes>
    </div>
  );
}

export default App;
