import './App.css';
import Favori from './components/Favori';
import Main from './components/Main';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Main></Main>
      <Favori></Favori>
    </div>
  );
}

export default App;
