import { useParams, Outlet,useLocation } from "react-router-dom";
import { useEffect, useState, Suspense } from "react";
import toast, {Toaster} from 'react-hot-toast';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { getMovieDetails } from "../../api";
import { PosterWrap, Image, Wrap, InfoWrap,SubTitle, Title,Back, ExtraWrap, StyledLink } from "./MovieDetailsPage.styled";

const defaultImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAYFBMVEXa2tpVVVXd3d1MTExSUlK2trZvb29LS0tTU1Ph4eGNjY2cnJzU1NRaWlpgYGBPT0+np6fGxsavr6/AwMCGhoZqamrOzs51dXWUlJSioqJ+fn7IyMhkZGTBwcG0tLREREQ0AqeBAAAClklEQVR4nO3b63KqMBRAYUiiSbyhKIqXtu//lgcUBRTOFGGm42Z9/5oK06wyQFCDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwCmpAfz2X96hjMh2O/+vpvEXNrTNDcZ/aIAqHQwMa0EBCA2O1fZeOtBPQIEonfWxXAhro2Pe5N/IrJ6DButefL6RBr/tcEQ2ijg2elgbja6DUVxzvqxuMroHaTLMLqdlVhsbWQJ2duZ5CDuXY6BocijtLW24ztgb7+821m461gZro++pgKbrB/4J8PRqsJDdQk1NrBRUUa4Mw2j2mLLFBYmet01Hrn9vpwO0FHwcq1qFO2yOkNnKRDiflK+Q1CC7ZjPS8PcJ2l0zTvS83EddAHa9nPXtsj6C899Ulg7gGwfI2ofyZQu2l7XuR1sCnUfFkzMbVOaltewRpDRb3y3/ozKQy7UV4aj0UhDXwu8qDZlv+77PxKFm0RJDVQJ11mSA0y/Nj3GY/XvbNEYQ1ONXebzCmmLU/5AtmE20bpymqgfqyYY1ZXSOo79vhYVzcNE9RDfzUhM8RFvkvikm23DZIalBZGD/kZ0I1L8f17PWcIKlBkLiXBqFJgkVl2OnXa6SgBn7d+AZsdNrVxq9HRm0vghqosOEwyI+EpzRmtZHawB9fzwbNTHXhHEhqsFj+MkG+Qe0aKaaB2vz2MMjZ1JenRjkNzp0+kqJ3Ap+hqE23j+Xow2MJJafBOWq+LLRwOltCFbeXYhps3LKr7W0vYhpkF4bubnsR1OBtNBDTwPdyEdDAHWZ9pMUd5kc3yJZFvYQSGgyDBjSgwUc3SH/0UKz+zAbB5rvXp/Zr4g/9ch/fbwQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAbv4BqeU7MkrRIMQAAAAASUVORK5CYII='

const MovieDetails = () => {

    const location = useLocation();
    const backLinkHref = location?.state?.from ?? '/movies';

    const { movieId } = useParams();

    const [moviesInfo, setMoviesInfo] = useState(null)

    useEffect(() => {
        const addMovieDetails = async () => {
            try {
                const movieInfo = await getMovieDetails(movieId);
                setMoviesInfo({
                    image: movieInfo.poster_path,
                    title: movieInfo.title,
                    year: movieInfo.release_date.split('-')[0],
                    score: Math.round(movieInfo.vote_average * 100 / 10),
                    overview: movieInfo.overview,
                    genres: movieInfo.genres.map(el => el.name + ' '),
                })

                toast.success('Success!!!', {duration:1500, id: '3',});
            } catch (error) {
                toast.error('Something went wrong..try update!');
            }
        };
        addMovieDetails();
    }, [movieId])

    
    return (  
        <Wrap>
            <Back to={backLinkHref}>
                <AiOutlineArrowLeft />
                Go back
            </Back>
            <Toaster/>
            {moviesInfo &&  <><PosterWrap>
                <Image src={ moviesInfo.image ? `https://image.tmdb.org/t/p/original${moviesInfo.image}` : defaultImage} width='600 px' alt="poster" />
                <InfoWrap>
                    <Title>{moviesInfo.title}<span>({moviesInfo.year })</span></Title>
                    <p>User Score: {moviesInfo.score}%</p>
                    <SubTitle>Overview</SubTitle>
                    <p>{moviesInfo.overview}</p>
                    <SubTitle>Genres</SubTitle>
                    <p>{moviesInfo.genres}</p>
                </InfoWrap>
            </PosterWrap>
            <ExtraWrap>
                <p>Additional information</p>
                <ul>
                    <li><StyledLink to='cast'>Cast</StyledLink></li>
                    <li><StyledLink to='reviews'>Reviews</StyledLink></li>
                </ul>
            </ExtraWrap>
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet/>
                </Suspense>
                
            </div></>}

        </Wrap>
    )
}

export default MovieDetails