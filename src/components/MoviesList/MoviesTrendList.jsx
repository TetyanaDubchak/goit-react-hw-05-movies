
import { StyledLink, Item, List } from "./MoviesTrendList.styled";
import { useLocation } from "react-router-dom";


export const TrendMovieList = ({trendMovie}) => {
    const location = useLocation();
    return (
            <List>
                {trendMovie.map(el => (         
                    <Item key={el.id}>
                        <StyledLink state={{ from: location }} to={`/movies/${el.id}`}>{el.original_title}</StyledLink> 
                    </Item>
                ))}
            </List>
    )
}

