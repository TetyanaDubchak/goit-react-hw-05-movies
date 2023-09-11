import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import {getTrendMovie} from "../../api";
import { Title } from "./HomePage.styled";
import { TrendMovieList } from "../../components/MoviesList/MoviesTrendList";

const HomePage = () => {
    const [trendMovie, setTrendMovie] = useState([])

    useEffect(() => {
        const addTrendMovies = async () => {
        
        try {
            const moviesList = await getTrendMovie();
            setTrendMovie(moviesList.results);
            toast.success('Look! Trending movies');
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong..try update!');
        }
        };
        addTrendMovies();
    }, [])
    
    

    return (
        <div>
            <Title>Trending today</Title>
            <TrendMovieList trendMovie={trendMovie} />
            {/* <List>
                {trendMovie.map(el => (         
                    <Item key={el.id}>
                        <StyledLink to={`/movies/${el.id}`}>{el.original_title}</StyledLink> 
                    </Item>
                ))}
            </List> */}
        </div>)
    
}
export default HomePage;