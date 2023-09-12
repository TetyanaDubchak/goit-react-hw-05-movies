import { useEffect, useState } from "react";
import { useSearchParams} from "react-router-dom";
import toast, {Toaster} from 'react-hot-toast';
import { getMovie } from "../../api";
import { MovieList } from "components/MoviesList/MovieList";
import { SearchForm } from "components/SearchForm/Form";


const MoviesPage = () => {
    const [findMovies, setFindMovies] = useState(null);

    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query')?? "";


    useEffect(() => {
        async function getMovies() {
            try {
                const moviesCollection = await getMovie(query);
                setFindMovies(moviesCollection.results)
                toast.success('Look! It is movies');
            } catch (error) {
                toast.error('Something went wrong..try update!');

            }
        }
        getMovies();
    }, [query]);


    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        setSearchParams({ query: form.elements.query.value });
        form.reset();
  };

    return (
    <div>
        <Toaster/>
            <SearchForm handleSubmit={handleSubmit} />
            {findMovies && <MovieList resevedMovie={findMovies } />}
    </div>)
}

export default MoviesPage;

