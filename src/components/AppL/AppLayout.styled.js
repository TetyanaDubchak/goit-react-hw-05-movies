import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  padding: 30px 40px;
  margin-bottom: 20px;
  
  box-shadow: -1px 8px 16px -3px rgba(0,0,0,0.68);
  -webkit-box-shadow: -1px 8px 16px -3px rgba(0,0,0,0.68);
  -moz-box-shadow: -1px 8px 16px -3px rgba(0,0,0,0.68);
  > nav {
    display: flex;
  }
`;

export const StyledLink = styled(NavLink)`
  color: black;
  font-size: 24px;
  font-weight: 600;
  text-decoration:none;
  margin-right: 20px;
  &.active {
    color: red;
  }
`;