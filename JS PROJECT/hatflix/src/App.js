
import './App.css';
import requests from './requests';
import Row from './Row';

function App() {
  return (
    <div className="App">
      <h1>hey clever proh
        <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
        <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending}/>
      </h1>
    </div>
  );
}

export default App;
