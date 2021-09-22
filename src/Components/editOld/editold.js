import React from "react";
import axios from 'axios';
import './edit.css';

export default class Edit extends React.Component{

    constructor(props){
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeImagePath = this.onChangeImagePath.bind(this);
        this.onChangeCast = this.onChangeCast.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Title:'',
            Description:'',
            ImagePath:'',
            Cast:''
        }
    }

    onChangeTitle(e){
        this.setState({
            Title:e.target.value
        });
    }

    onChangeDescription(e){
        this.setState({
            Description:e.target.value
        });
    }

    onChangeImagePath(e){
        this.setState({
            ImagePath:e.target.value
        });
    }

    onChangeCast(e){
        this.setState({
            Cast:e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const obj = {
            Title: this.state.Title,
            Description: this.state.Description,
            ImagePath: this.state.ImagePath,
            Cast: this.state.Cast,
            Favorite:0
        };
        // console.log(obj);

    axios.post('http://localhost/movieCRUD/addmovie.php', JSON.stringify(obj), {crossDomain: true})
        .then(res => console.log(res.data));

        this.setState({
            Title:'',
            Description:'',
            ImagePath:'',
            Cast:''
        });
    }
    
    render(){
        return(
            <div className="addmovie">
                <h2>New Movie</h2><hr/>

                <form onSubmit = {this.onSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" className="form-control" placeholder="Some New Movie"
                            value = {this.state.Title}
                            onChange = {this.onChangeTitle}
                        />
                    </div><br/>

                    <div className="form-group">
                        <label>Description</label>
                        <textarea className="form-control" rows="3" cols="50" placeholder="Tell us a little bit about yourself"
                            value = {this.state.Description}
                            onChange = {this.onChangeDescription}
                        />
                    </div><br/>

                    <div className="form-group">
                        <label>Image Path URL</label>
                        <input type="text" className="form-control" placeholder="Paste image URL"
                            value = {this.state.ImagePath}
                            onChange = {this.onChangeImagePath}
                        />
                    </div><br/>

                    <div className="form-group">
                        <label>Cast</label>
                        <textarea className="form-control" rows="4" cols="50" 
                            value = {this.state.Cast}
                            onChange = {this.onChangeCast}
                        />
                    </div><br/>
                    
                    <div className="form-group">
                        <input type="submit" className="btn btn-success" value="Update Profile"/>
                    </div>
                </form>
            </div>
        );
    }
}