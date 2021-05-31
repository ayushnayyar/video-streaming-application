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
            <Row title='Drama' fetchURL={requests.fetchDramaMovies}></Row>
            <Row
                title='Comedy Movies'
                fetchURL={requests.fetchComedyMovies}
            ></Row>
            <Row
                title='Family Movies'
                fetchURL={requests.fetchFamilyMovies}
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
