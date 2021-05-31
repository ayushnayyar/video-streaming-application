const API_KEY = '33f20684d1af0809cf02b1b1a261033c';

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchDramaMovies: `/discover/tv?api_key=${API_KEY}&with_genres=18`,
    fetchComedyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchFamilyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10751`,
    fetchRomanceMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
