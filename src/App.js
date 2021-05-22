import './App.css';
import env from "react-dotenv";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Mew mew mew.
        </p>
        <p>
          TESTNG API KEY: '{env.GUARDIAN_API_KEY}'
        </p>
      </header>
    </div>
  );
}

export default App;
