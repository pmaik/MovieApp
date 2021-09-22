import React from 'react';
// import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import AddMovie from './Components/AddMovie/addmovie';
import Movies from './Components/Movies/movies.js';
import MovieDetails from './Components/MovieDetails';
// import SearchBox from './Components/Search/search';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {searchTitle:"", movieInfo:null};
    this.onClick = this.onClick.bind(this);
    this.getMovieId = this.getMovieId.bind(this);
  }

  onClick(){
    this.setState({searchTitle:""});
  }

  getMovieId(movieInfo){
    this.setState({movieInfo:movieInfo});
    // console.log(movieInfo)
    // console.log(this.state.movieInfo);
  }

  

  render(){

    if(this.state.movieInfo){
      return(
        <MovieDetails movieInfo={this.state.movieInfo}  /> 
      );
    }

      return (
        <Router>
          <div >
            <nav className="navbar">
              <Link to={'/'} className="heading" onClick={this.onClick}>Trending Movies</Link>
  
              <div className="search-add">
                {/* <SearchBox handleChange={(e)=> this.setState({searchTitle:e.target.value})} /> */}
                <Link to={'/'} ><input className="search" onChange={(e)=> this.setState({searchTitle:e.target.value})} type="text" value={this.state.searchTitle} name='search'  placeholder="Search Movie.." /></Link>
                <Link to={'/addmovie'} className="add">Add Movie</Link>
              </div>
  
            </nav>
  
            <Switch>
              {/* {this.state.showDetails ? <MovieDetails /> : null} */}
              <Route exact path="/" render={props => <Movies searchTitle = {this.state.searchTitle} getMovieId={this.getMovieId} />} />
              <Route path='/addmovie' component={AddMovie}/> 
              
            </Switch>

            
          </div>
          
        </Router>
    );
  }
}

export default App;
