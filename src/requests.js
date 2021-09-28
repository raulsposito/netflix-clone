const API = `0fe28d8b15646003ca4ed7b732dae662`

const requests = {
    fetchTrending: `/movie/popular?api_key=${API}&language=en-US&page=1`,
    fetchTopRated: `/movie/top_rated?api_key=${API}&language=en-US&page=1`,
    fetchLatest: `/movie/latest?api_key=${API}&language=en-US`,
    fetchNowPlaying: `/movie/now_playing?api_key=${API}&language=en-US&page=1`,
}

export default requests