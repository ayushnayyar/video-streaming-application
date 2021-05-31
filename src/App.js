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
            <Row title='Trending Now' fetchURL={requests.fetchTrending}></Row>
        </div>
    );
}

export default App;
