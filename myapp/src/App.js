import { BrowserRouter } from 'react-router-dom';
import Main from './pages/Main';
import Navbar from './pages/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Main />
      </BrowserRouter>
    </div >
  );
}

export default App;
