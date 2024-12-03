import axios from 'axios';

const httpClient = axios.create({
  method: 'GET',
  url: 'https://api.themoviedb.org/3/',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDdiOTAyMDI1MGM1YWUwOWM3MTBjMDM1OWVkZjgyNiIsIm5iZiI6MTczMzA4NjU0NS44NDksInN1YiI6IjY3NGNjZDUxOWU3ZjZmNzNmMzAxNDBjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g3_YWJfiFyDApQYZDTD9EbHbjkC2piGahzcwISM6ivY'
  }
});