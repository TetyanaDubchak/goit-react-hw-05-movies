import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Header, StyledLink } from "./AppLayout.styled";


export const AppLayout = () => {
    
    return (
        <div>
            <Header>
                <nav>
                    <StyledLink to="/">Home</StyledLink>
                    <StyledLink to="/movies">Movies</StyledLink>
                </nav>
            </Header>
            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet />
            </Suspense>
            
        </div>
    );
};