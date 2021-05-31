import React from 'react';
import './App.css';
import Row from './components/Row';
import requests from './api/requests';

function App() {
    return (
        <div className='App'>
            <Row
                title='Originals'
                fetchURL={requests.fetchNetflixOriginals}
            ></Row>
            <Row title='Trending' fetchURL={requests.fetchTrending}></Row>
            <Row title='Top Rated' fetchURL={requests.fetchTopRated}></Row>
            <Row
                title='Action Movies'
                fetchURL={requests.fetchActionMovies}
            ></Row>
            <Row
                title='Comedy Movies'
                fetchURL={requests.fetchComedyMovies}
            ></Row>
            <Row
                title='Horror Movies'
                fetchURL={requests.fetchHorrorMovies}
            ></Row>
            <Row
                title='Romance Movies'
                fetchURL={requests.fetchRomanceMovies}
            ></Row>
            <Row
                title='Documentaries'
                fetchURL={requests.fetchDocumentaries}
            ></Row>
        </div>
    );
}

export default App;
