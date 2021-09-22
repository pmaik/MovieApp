import React from "react";
import axios from "axios";
import './style.css';
import Edit from '../Edit/edit';
import favStar from './starlight.png';
import nfavStar from './star.png';
// import MovieInfo from '../MovieInfo';

export default class Movie extends React.Component{

    constructor(props){
        super(props);
        const {reRender, getMovieId} = this.props;
        this.reRender = reRender;
        this.getMovieId = getMovieId;
        
        this.state = {
            fav:this.props.Favorite,
            movieInfo:{
                id:this.props.id,
                Title: this.props.Title,
                Description: this.props.Description,
                ImagePath: this.props.ImagePath,
                Cast: this.props.Cast
            }
        }
        this.onClick = this.onClick.bind(this);
        this.onClickImg = this.onClickImg.bind(this);
    }

    onClickImg(){
        this.getMovieId(this.state.movieInfo);
    }

    async onClick(){
        this.setState({fav: this.state.fav==="1" ? "0" : "1"});
        const obj = {
            id:this.props.id,
            Favorite:this.state.fav
        };

        await axios.post('http://localhost/movieCRUD/favorite.php', JSON.stringify(obj), {crossDomain: true})
            .then(res => console.log(res.data))
            .catch(error=>console.log(error.message))
        
        this.reRender();
    }

    render(){
        const {Title, ImagePath} = this.state.movieInfo;
        return(
            <div className="parent">
                <button className="moviePoster" onClick = {this.onClickImg}>
                    <img className="movieImg" src={ImagePath} alt={Title}></img>
                </button>
                <h1>{Title}</h1>
                <div className="child">
                    <Edit movieInfo={this.state.movieInfo} reRender={this.props.reRender}/>  
                    <button className="favButton" onClick = {this.onClick}>
                        <img className="favImg" src={this.state.fav === "1" ? favStar : nfavStar} alt="Star"></img>
                    </button>
                </div>
            </div>
        );
    }
}