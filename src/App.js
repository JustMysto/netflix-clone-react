import './App.css';
import requests from './requests'
import Nav from './components/Nav'
import Banner from './components/Banner'
import Row from './components/Row'

const App = () => {
  return (
    <div className="App">
		<Nav/>
		<Banner />
		<Row title="NETFLIX ORIGINALS" fetchUrl={ requests.fetchNetflixOriginals } isLargeRow />
		<Row title="TRENDING NOW" fetchUrl={ requests.fetchTrending }/>
		<Row title="Top Rated" fetchUrl={ requests.fetchTopRated }/>
		<Row title="Action Movies" fetchUrl={ requests.fetchActionMovies }/>
		<Row title="Comedy Movies" fetchUrl={ requests.fetchComedyMovies }/>
		<Row title="Horror Movies" fetchUrl={ requests.fetchHorrorMovies }/>
		<Row title="Romance Movies" fetchUrl={ requests.fetchRomanceMovies }/>
		<Row title="Documentary Movies" fetchUrl={ requests.fetchDocumantaries }/>
    </div>
  );
}

export default App;
