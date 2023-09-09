import { Route, Routes} from "react-router-dom"
import { lazy } from "react";
import { AppLayout } from "./AppL/AppLayout";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage"));
const MovieDetails = lazy(() => import("../pages/MoviesDetails/MovieDetailsPage"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));


export const App = () => {
  
  return (
   
      <Routes>
        <Route path='/' element={<AppLayout/>}>
            <Route index element={<HomePage/>}></Route>
            <Route path="movies" element={<MoviesPage/>}></Route>
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast/>}></Route>
              <Route path="reviews" element={<Reviews/>}></Route>
            </Route>
        </Route>
      </Routes>
    
    
   )
}
