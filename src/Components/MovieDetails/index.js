import React from "react";
import './style.css';

export default class MovieDetails extends React.Component{

    // constructor(props){
    //     super(props);

    // }

    render(){

        const {movieInfo} = this.props;
        const {Title, Description, ImagePath, Cast} = movieInfo;

        return(
            <div className = "container1">
                <div className="title">
                    <h1>{Title}</h1>
                    <p>2018 - India - 2h 20mins </p>
                </div>

                <div className="hrLine">
                    <p>Cast & Crew -  User Reviews - Trivia - IMDBPro </p>
                </div>

                <div className="parent1">
                    <img src={ImagePath} alt={Title}></img>
                    <div className="child1">
                        <div className="movieGen"><span>Action</span> <span>Adventure</span><span>SCI-FI</span></div>
                        <h5>Description: {Description}</h5><hr/>
                        <h5>Director: xyz</h5><hr/>
                        <h5>Writter: abc</h5><hr/>
                        <div className="cast">
                            <h5>Cast:</h5> 
                            <p>{Cast}, Cast1, Cast2, Cast3</p>
                        </div>
                        <hr/>
                    </div>
                </div>
                <button className="btn btnFav"> + Add to Favorite</button>
            </div>
        );
    }
}