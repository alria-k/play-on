type timeWindowType = 'day' | 'week'

export const API_ROUTES = {
    //MOVIES
    POPULAR_MOVIES: 'movie/popular/',
    TRENDING_MOVIES: (timeWindow: timeWindowType) => `trending/movie/${timeWindow}`,
    //TV SHOWS
    TRENDING_TV_SHOWS: (timeWindow: timeWindowType) => `trending/tv/${timeWindow}`,
    //OTHER
    ALL_TRENDING: (timeWindow: timeWindowType) => `trending/all/${timeWindow}`,
    GENRE_LIST: 'genre/movie/list/',
}