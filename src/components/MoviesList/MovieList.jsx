import { useLocation } from "react-router-dom";
import { StyledLink,Item, List } from "./MovieList.styled";

export const MovieList = ({resevedMovie}) => {
     const location = useLocation();
    return (
        <List>
            {resevedMovie.map(el => (
                <Item key={el.id}>
                    <StyledLink state={{ from: location }} to={`/movies/${el.id}`}>{el.title}</StyledLink> 
                </Item>
            )
            )}
        </List>
    )
}

