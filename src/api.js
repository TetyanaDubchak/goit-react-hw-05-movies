import axios from "axios";
const MY_API_KEY = '6869eea87e9a5924a6109e2c1ce18a07';
const URL = 'https://api.themoviedb.org/';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODY5ZWVhODdlOWE1OTI0YTYxMDllMmMxY2UxOGEwNyIsInN1YiI6IjY0ZjIxYzdmOTdhNGU2MDBhYzNlZjkzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xf908n0lKGdljHcYVseW23zLQyHdOPpw3m81eOX6tbw'
  }
};

export const getTrendMovie = async () => {
    const response = await axios.get(`${URL}3/trending/movie/day?language=en-US`, options)
    return response.data;
}

export const getMovieDetails = async (id) => {
    const response = await axios.get(`${URL}3/movie/${id}language=en-US`, options)
    return response.data;
}

export const getCast = async (id) => {
    const response = await axios.get(`${URL}3/movie/${id}/credits?language=en-US`, options)
    return response.data;
}

export const getReviews = async (id) => {
    const response = await axios.get(`${URL}3/movie/${id}/reviews?language=en-US&page=1`, options)
    return response.data;
}

export const getMovie = async (name) => {
    const response = await axios.get(`${URL}3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`, options)
    return response.data;
}