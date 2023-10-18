import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("app"));

//front page and link to paths created in MovieRoutes
function FrontPage(){
    return<>
        <h1>Welcome to front page</h1>
        <ul>
            <li><Link to={"/movies"}>List movies</Link></li>
            <li><Link to={"/movies/new"}>New movie</Link></li>
        </ul>
    </>
}


//Routes created, movies need
function MovieRoutes(){
    //Navigates to certain place
    const navigate = useNavigate();
    //use state of movies and set movies
    const [movies, setMovies] = useState([
        {
            title: "Oppenheimer",
            year: "2024"
        },
        {
            title: "Barbie",
            year: "2023"
        }
    ])

    //Handles new movie, takes the old movie and movie to it
    function handleNewMovie(movie){
        setMovies(old => ([
            ...old, movie
        ]));
        navigate("/movies");
    }
   

    return<Routes>
        <Route path={"/"} element={<FrontPage/>}/>
        <Route
         path={"/movies"} 
         element={<ListMovies movies={movies}/>}
         />
        <Route 
        path={"/movies/new"}
        element={<NewMovie onNewMovie={handleNewMovie}/>}/>
        <Route path={"*"} element={<h1>Not found</h1>}/>
    </Routes>
}

//Listing and mapping through the movies. 
function ListMovies({movies}){

    return<>
        {movies.map(m => <div key={m.title}>{
        m.title} ({m.year})</div>)}
    </>
}


function NewMovie({onNewMovie}){
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [plot, setPlot] = useState("");
    const newMovie = {title, year, plot}

    //Created new movie object
    function handleSubmitMovie(e){
        e.preventDefault();
        onNewMovie(newMovie);
    }

    return <form onSubmit={handleSubmitMovie}>
        Title: 
        <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
        <br/>
        Year: 
        <input type="text" value={year} onChange={e => setYear(e.target.value)}/>
        <br/>
        Plot: 
        <input type="text" value={plot} onChange={e => setPlot(e.target.value)}/>
        <button>Submit</button>
        <pre>{JSON.stringify(newMovie, null, " ")}</pre>
    </form>


}


function Application(){

   
    return<BrowserRouter>
        <header>
            <h1>Movie Application</h1>
        </header>
            <nav><Link to = {"/"}>Front page</Link></nav>
        <main>
            <MovieRoutes/>
        </main>
    </BrowserRouter>

}


root.render(<Application/>);

