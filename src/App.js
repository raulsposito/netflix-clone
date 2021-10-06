import './App.css';
import Row from './Row'
import Banner from './Banner'
import Nav from './Nav'
import requests from './requests'

function App() {
  return (
    <div className="App">
      <h1>Small change</h1>
      <Nav />
      <Banner />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Lastest Movies" fetchUrl={requests.fetchLatest}/>
      <Row title="Now Playing" fetchUrl={requests.fetchNowPlaying}/>
    </div>
  );
}

export default App;
