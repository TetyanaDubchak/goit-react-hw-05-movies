import { useParams, Outlet,useLocation } from "react-router-dom";
import { useEffect, useState, Suspense } from "react";
import toast from 'react-hot-toast';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { getMovieDetails } from "../../api";
import { PosterWrap, Image, Wrap, InfoWrap,SubTitle, Title,Back, ExtraWrap, StyledLink } from "./MovieDetailsPage.styled";


const MovieDetails = () => {

    const location = useLocation();
    const backLinkHref = location.state?.from ?? '/movies';

    const { movieId } = useParams();

    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [score, setScore] = useState('');
    const [overview, setOverView] = useState('');
    const [genres, setGenres] = useState('');

    useEffect(() => {
        const addMovieDetails = async () => {
        try {
            const movieInfo = await getMovieDetails(movieId);
            setImage(movieInfo.poster_path);
            setTitle(movieInfo.title);
            setYear(movieInfo.release_date.split('-')[0]);
            setScore(Math.round(movieInfo.vote_average * 100 / 10));
            setOverView(movieInfo.overview);
            setGenres(prevState => 
                movieInfo.genres.map(el =>  el.name + ' '))
            toast.success('Look! Trending movies');
        } catch (error) {
            toast.error('Something went wrong..try update!');
        }
        };
        addMovieDetails();
       }, [])
    
    
    return (
        <Wrap>
            <Back to={backLinkHref}>
                <AiOutlineArrowLeft/>
                Go back
            </Back>
            
            <PosterWrap>
                <Image src={`https://image.tmdb.org/t/p/original${image}`} width='600 px' alt="poster" />
                <InfoWrap>
                    <Title>{title}<span>({year })</span></Title>
                    <p>User Score: { score}%</p>
                    <SubTitle>Overview</SubTitle>
                    <p>{overview}</p>
                    <SubTitle>Genres</SubTitle>
                    <p>{genres}</p>
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
                
            </div>
        </Wrap>
    )
}

export default MovieDetails