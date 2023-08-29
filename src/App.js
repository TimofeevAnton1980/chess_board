import './App.css';
import BuildEl from "./BuildEl/BuildEl";

function App() {
  const createArray = length => [...Array(length)];
  return (
    <div className="App" style={{display: 'flex', width: '100vw', height: '100vh'}}>
      <main style={{ display: 'block', backgroundColor: 'white', width: '400px', height: '400px', margin: 'auto', fontSize: '0', borderTop: '1px solid black', borderLeft: '1px solid black', padding: '0' }}>
        {createArray(64).map((n, i) => <BuildEl key={i}/>)}
      </main>
    </div>
  );
}

export default App;
