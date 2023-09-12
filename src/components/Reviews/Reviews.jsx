import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import { useParams } from "react-router-dom";
import { getReviews } from "../../api";

const Reviews = () => {
    const { movieId } = useParams();
    const [revList, setRevList] = useState([]);

    useEffect(() => {
        const addRev = async () => {
        try {
            const movieRev = await getReviews(movieId);
            setRevList(movieRev.results);
            toast.success('Look! This are movies');
        } catch (error) {
            toast.error('Something went wrong..try update!');
        }
        };
        addRev();
    }, [movieId])
    
    
    return (
        <>
            {revList.length > 0 ? (<ul>
            {revList.map(el => (
                <li key={el.id}>
                    <h5>Author: {el.author}</h5>
                    <p>{el.content}</p>
                </li>
            ))}
        </ul>) : (<p>We don't have any reviews for this movie</p>)}
        
        
        </>
       
    )
}

export default Reviews