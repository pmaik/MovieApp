import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import AddMovie from './Components/AddMovie/addmovie';
import Movies from './Components/Movies/movies.js';
import MovieDetails from './Components/MovieDetails';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {searchTitle:""};
    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    this.setState({searchTitle:""});
  }

  render(){

      return (
        <Router>
          <div>
            <nav className="navbar">
              <Link to={'/'} className="heading" onClick={this.onClick}>Trending Movies</Link>
  
              <div className="search-add">
                <Link to={'/search'} ><input className="search" onChange={(e)=> this.setState({searchTitle:e.target.value})} type="text" value={this.state.searchTitle} name='search'  placeholder="Search Movie.." /></Link>
                <Link to={'/addmovie'} className="add">Add Movie</Link>
              </div>
            </nav>
  
            <Switch>
              <Route exact path="/" render={props => <Movies searchTitle = {""} />} />
              <Route path='/search' render={props => <Movies searchTitle = {this.state.searchTitle} />} />
              <Route path='/addmovie' component={AddMovie}/> 
              <Route path='/moviedetails/:id' component={MovieDetails} />
            </Switch>

          </div>
          
        </Router>
    );
  }
}

export default App;
