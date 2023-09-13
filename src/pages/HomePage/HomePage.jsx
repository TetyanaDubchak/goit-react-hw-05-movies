import { useEffect, useState } from "react";
import toast, {Toaster} from 'react-hot-toast';
import {getTrendMovie} from "../../api";
import { Title } from "./HomePage.styled";
import { MovieList } from "../../components/MoviesList/MovieList";

const HomePage = () => {
    const [trendMovie, setTrendMovie] = useState([])

    useEffect(() => {
        const addTrendMovies = async () => {
        
        try {
            const moviesList = await getTrendMovie();
            setTrendMovie(moviesList.results);
            toast.success('Look! Trending movies', {duration:1500, id: '1',});
        } catch (error) {
            toast.error('Something went wrong..try update!');
        }
        };
        addTrendMovies();
    }, [])
    
    

    return (
        <div>
            <Toaster/>
            <Title>Trending today</Title>
            <MovieList resevedMovie={trendMovie} />
        </div>)
    
}
export default HomePage;