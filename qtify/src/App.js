import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Logo from './components/Logo/Logo';
import Search from './components/Search/Search';

function App() {
  return (
    <div className="App">
      <Navbar>
        <Logo />
        <Search />
      </Navbar>
    </div>
  );
}

export default App;
