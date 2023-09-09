import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCast } from "../../api";
import { Image, Item, SubTitle, Text } from "./Cast.styled";

const Cast = () => {
    const { movieId } = useParams();
    const [castesList, setCastesList] = useState([]);

    useEffect(() => {
        const addCast = async () => {
        try {
            const movieCast = await getCast(movieId);
            setCastesList(movieCast.cast);
                console.log(movieCast);
            // toast.success('Все хорошо квиз добавлен');
        } catch (error) {
            console.log(error);
            // toast.error('Все пропало, вешайся');
        }
        };
        addCast();
    }, [])
    console.log(castesList);
    
    return (
        
        <ul>
            {castesList.map(el => (
                <Item key={el.id}>
                    <Image src={`https://image.tmdb.org/t/p/original${el.profile_path}`} alt="Actor" />
                    <SubTitle>{el.name}</SubTitle>
                    <Text>Character: {el.character}</Text>
                </Item>
            ))}
        </ul>
        
       
    )
}

export default Cast