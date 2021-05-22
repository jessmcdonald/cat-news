import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Mew mew mew.
        </p>
        <p>
          TESTNG API KEY: '{process.env.GUARDIAN_API_KEY}'
        </p>
      </header>
    </div>
  );
}

export default App;
