import React from "react";
import axios from 'axios';

export default class Form extends React.Component{

    constructor(props){
        super(props);
        const {closeModal, movieInfo, reRender} = this.props;
        this.closeModal = closeModal;
        this.reRender = reRender;

        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeImagePath = this.onChangeImagePath.bind(this);
        this.onChangeCast = this.onChangeCast.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id:movieInfo.id,
            Title:movieInfo.Title,
            Description:movieInfo.Description,
            ImagePath:movieInfo.ImagePath,
            Cast:movieInfo.Cast
        }
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

    async onSubmit(e){
        e.preventDefault();

        const obj = {
            id:this.state.id,
            Title: this.state.Title,
            Description: this.state.Description,
            ImagePath: this.state.ImagePath,
            Cast: this.state.Cast
        };

        await axios.post('http://localhost/movieCRUD/edit.php', JSON.stringify(obj), {crossDomain: true})
            .then(res => console.log(res.data))
            .catch(error=>console.log(error.message))
        
        this.reRender();
        this.closeModal();
    }
    
    render(){

        const {Title, Description, ImagePath, Cast} = this.state;
        
        return(
            <div className="addmovie">
                <h2>Edit Movie</h2><hr/>

                <form onSubmit = {this.onSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" className="form-control"
                            value = {Title}
                            disabled="disabled"
                        />
                    </div><br/>

                    <div className="form-group">
                        <label>Description</label>
                        <textarea className="form-control" rows="3" cols="50"
                            value = {Description}
                            onChange = {this.onChangeDescription}
                        />
                    </div><br/>

                    <div className="form-group">
                        <label>Image Path URL</label>
                        <input type="text" className="form-control"
                            value = {ImagePath}
                            onChange = {this.onChangeImagePath}
                        />
                    </div><br/>

                    <div className="form-group">
                        <label>Cast</label>
                        <textarea className="form-control" rows="4" cols="50" 
                            value = {Cast}
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