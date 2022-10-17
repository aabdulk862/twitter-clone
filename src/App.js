import './App.css';
import Sidebar from './Sidebar'
import Feed from './Feed'
function App() {
  return (
    // BEM
    <div className="app">
      <Sidebar/>
      <Feed/>
      {/* Widgets */}
    </div>
  );
}

export default App;
