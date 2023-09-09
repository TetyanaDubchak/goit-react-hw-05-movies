import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrap = styled.div`
    margin-left: 20px;
    margin-right: 20px;
    
`;

export const Back = styled(Link)`
    display: flex;
    align-items: center;
    gap: 5px;
    margin: 16px 16px;
    text-decoration: none;
    color: black;
    font-size: 20px;
    font-weight: 600;
`;

export const PosterWrap = styled.div`
    display: flex;
    padding-top: 10px;
    padding-bottom: 10px;
    border-top: grey 4px solid;
    border-bottom: grey 4px solid;
`;

export const Image = styled.img`
    width: 300px;
    border-radius: 6px;
`;

export const InfoWrap = styled.div`
    margin-left: 30px;
    padding-top: 10px;
`;

export const SubTitle = styled.h4`
    font-size: 20px;
`;

export const Title = styled.h2`
    font-size: 36px;
`;

export const ExtraWrap = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    border-bottom: grey 4px solid;
`;

export const StyledLink = styled(Link)`
    font-size: 16px;
    margin-bottom: 10px;
    color: blue;
    text-decoration: none;
`;