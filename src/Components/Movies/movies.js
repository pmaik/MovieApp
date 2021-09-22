import React from "react";
import axios from 'axios';
import Movie from './Movie/movie.js';
import './style.css';


export default class Movies extends React.Component{

    constructor(props) {
        super(props);
        this.state = { isFetching: true, allMovies:[]};
        this.reRender = this.reRender.bind(this);
        this.fetchMovies = this.fetchMovies.bind(this);
        // console.log(this.props.allMovies, "In movies constructor");
    }

    async fetchMovies(){
        try{
            // const response = await axios.get("http://localhost/movieCRUD/search.php",{params:{Title:"captain marvel"}});
            const response = await axios.get("http://localhost/movieCRUD/fetchmovies.php");
            this.setState({ allMovies: response.data});
            this.setState({ isFetching: false });
      
          } catch(error){
              console.log(error.message);
          }
    }

    reRender(){
        // console.log( "Called");
        this.fetchMovies();
        // console.log("Updated");
    }

    async componentDidMount(){
        this.fetchMovies();
    }

    render(){
        
        const {isFetching, allMovies} = this.state;
        const {searchTitle} = this.props;
        // console.log(this.props.allMovies, "In movies constructor");

        if(isFetching){
            return <div>Loading...</div>
        }

        function searchLogic(movie){
            if(searchTitle===""){
                return true;
            } else if(movie.Title.toLowerCase().includes(searchTitle.toLowerCase())){
              return true;
            }
            return false;
        }
        const arrMovies = allMovies.filter(searchLogic);

        return(
            <div className="allmovies">
                {
                    arrMovies.map((movie) =>
                                    <Movie 
                                        key = {movie.id}
                                        id = {movie.id}
                                        Title={movie.Title} 
                                        Description = {movie.Description} 
                                        ImagePath = {movie.ImagePath}
                                        Cast = {movie.Cast}
                                        Favorite = {movie.Favorite}
                                        reRender={this.reRender} 
                                        getMovieId={this.props.getMovieId}
                                    />
                    )
                }
            </div>
        );
    }
}