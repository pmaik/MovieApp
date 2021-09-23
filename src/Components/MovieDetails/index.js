import React from 'react';
import axios from "axios";
import './style.css';

export default class MovieDetails extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            movieInfo:null,
            btnContent:null
        }
        this.onClick = this.onClick.bind(this);
    }

    async componentDidMount(){
        try{
            const response = await axios.get("http://localhost/movieCRUD/fetchOne.php", {params: {id:this.props.match.params.id}});
            this.setState({ movieInfo: response.data});
            this.setState({btnContent: response.data[0].Favorite});
          } catch(error){
              console.log(error.message);
          }
    }


    async onClick(){
        const {Favorite, id} = this.state.movieInfo[0];
        this.setState({btnContent: this.state.btnContent==="1" ? "0" : "1"});

        const obj = {
            id:id,
            Favorite:Favorite
        };

        await axios.post('http://localhost/movieCRUD/favorite.php', JSON.stringify(obj), {crossDomain: true})
            .then(res => console.log(res.data))
            .catch(error=>console.log(error.message))
    }


    render(){

        if(!this.state.movieInfo){
            return(
                <div>Loading...</div>
            );
        }

        const {Title, Description, ImagePath, Cast} = this.state.movieInfo[0];
        const {btnContent} = this.state;

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

                <button className="btn btnFav" onClick ={this.onClick} >
                    {btnContent==="0"? "+ Add to Favorite" : "+ Remove form Favorite"}
                </button>

            </div>
        );
    }
}