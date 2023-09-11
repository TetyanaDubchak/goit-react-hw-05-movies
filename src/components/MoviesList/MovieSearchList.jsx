import { useLocation } from "react-router-dom";
import { StyledLink,Item, List } from "./MovieSearchList.styled";

export const SearchMovie = ({findMovies}) => {
     const location = useLocation();
    return (
        <List>
            {findMovies.map(el => (
                <Item key={el.id}>
                    <StyledLink state={{ from: location }} to={`/movies/${el.id}`}>{el.title}</StyledLink> 
                </Item>
            )
                
            )}
        </List>
    )
}