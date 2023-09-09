import { useEffect, useState } from "react";
import { useSearchParams} from "react-router-dom";
import toast from 'react-hot-toast';
import { getMovie } from "../../api";
import { Form, Input, Button } from "./MoviesPage.styled";
import { StyledLink,Item, List } from "./MoviesPage.styled";

const MoviesPage = () => {
    const [findMovies, setFindMovies] = useState(null);

    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query')?? "";
    console.log(query);


    useEffect(() => {
        async function getMovies() {
            try {
                const moviesCollection = await getMovie(query);
                console.log(moviesCollection);
                setFindMovies(moviesCollection.results)
                toast.success('Look! Trending movies');
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

