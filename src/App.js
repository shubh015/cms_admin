import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Header from './components/Header'
import SideBar from './components/navbar/SideBar';
import TopBar from './components/navbar/TopBar';
import DropdownMenu from './components/navbar/DropdownMenu';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Sidebar/>
      <Header/>
      <Dashboard/>
      <SideBar/>
      <TopBar/>
      <DropdownMenu/>

      </header>
    </div>
  );
}

export default App;
