import { useEffect, useState } from "react";
import { useSearchParams} from "react-router-dom";
import { Link } from "react-router-dom";
import { getMovie } from "../../api";
import { Form, Input, Button } from "./MoviesPage.styled";
import { StyledLink,Item, List } from "./MoviesPage.styled";

const MoviesPage = () => {
    const [findMovies, setFindMovies] = useState(null);

    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query')?? "";
    console.log(query);

    // const updateQueryString = (query) => {
    //     const nextParams = query !== "" ? { query } : {};
    //     setSearchParams(nextParams);
    // }



    useEffect(() => {
        async function getMovies() {
            try {
                const moviesCollection = await getMovie(query);
                console.log(moviesCollection);
                setFindMovies(moviesCollection.results)
            } catch (error) {
                console.log(error);

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
        <Form onSubmit={handleSubmit}>
            <Input
                type="text"
                name='query' />
            <Button type="submit">
                Search
            </Button>
        </Form>
        {findMovies && <List>
            {findMovies.map(el => (
                <Item key={el.id}>
                    <StyledLink to={`/movies/${el.id}`}>{el.title}</StyledLink> 
                </Item>
            )
                
            )}
        </List>}
    </div>)
}

export default MoviesPage;


// const [query, setQuery] = useState('')
    // const [movies, setMovies] = useState([])

    // const changeQueryHandler = (newQuery) => {
    //     setQuery(`${Date.now()}/${newQuery}`);
    //     console.log(newQuery);
    //     setMovies([]);
    // }

    // const onSubmitHandler = event => {
    //     event.preventDefault();
    //     if (event.target.elements.query.value.trim() === '') {
    //         console.log('Please, enter something what you want to see')
    //     return;
    // }
    // changeQueryHandler(event.target.elements.query.value);   
    // event.target.reset();
    // }

    // useEffect(() => {
    //     async function getMovies() {
    //         try {
    //             if (query === '') {
    //                 return
    //             }

    //             //  setIsLoading(true);
    //             const moviesCollection = await getMovie(query);
    //             console.log(moviesCollection);
    //             // const { hits } = imagesCollection;
    //             // if (hits.length) {
    //             //   setImages(prevState =>
    //             //    page > 1 ? [...prevState, ...hits] : hits
    //             //   )
    //             //   setIsLoading(false);
    //             // }
    //             // setIsLoading(false);
    //         } catch (error) {
    //             console.log(error);
    //             // Notify.failure('Sorry, something went wrong')
    //             // setIsLoading(false);
    //         }
    //     }
    //     getMovies();
    // }, [query]);