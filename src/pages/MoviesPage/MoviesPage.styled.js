import styled from "styled-components";
import { Link } from "react-router-dom";


export const Form = styled.form`
    margin-top: 40px;
    margin-left: 30px;
    margin-bottom: 40px;
`;

export const Input = styled.input`
    padding: 10px;
    min-width: 300px;
    border-radius: 6px;
    margin-right: 15px;
    font-size: 20px;
`;

export const Button = styled.button`
    font-size: 20px;
    padding: 6px;
    border-radius: 6px;
    cursor: pointer;

    /* &hover{
        background-color: floralwhite;
    }
     */
`;


export const StyledLink = styled(Link)`
    font-size: 20px;
    margin-bottom: 10px;
    color: blue;
`;

export const List = styled.ul`
    margin-left: 30px;
`;

export const Item = styled.li`
    margin-bottom: 10px;
`;