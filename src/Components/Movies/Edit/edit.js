import React, { Component } from 'react';
import Modal from '../Modal/modal.js';
import TriggerButton from '../TriggerButton';


export default class Edit extends Component{

    constructor(props){
        super(props);
        this.state = {
            isShown: false,
            movieInfo: this.props
        };
    }

    showModal = () => {
        this.setState({ isShown: true }, () => {
          this.closeButton.focus();
          //this.closeButton.triggerHandler("focus")
        });
        this.toggleScrollLock();
    };

    closeModal = () => {
        this.setState({ isShown: false });
        this.TriggerButton.focus();
        this.toggleScrollLock();
    };

    onKeyDown = (event) => {
        if (event.keyCode === 27) {
          this.closeModal();
        }
    };

    toggleScrollLock = () => {
        document.querySelector('html').classList.toggle('scroll-lock');
    };

    render(){
        // console.log(this.props);

        return(
            <React.Fragment>
                <TriggerButton 
                    showModal={this.showModal}
                    buttonRef={(n) => (this.TriggerButton = n)}
                />

                {this.state.isShown ? (
                    <Modal
                        modalRef={(n) => (this.modal = n)}
                        buttonRef={(n) => (this.closeButton = n)} 
                        closeModal={this.closeModal}
                        onKeyDown={this.onKeyDown}
                        movieInfo={this.state.movieInfo}
                        reRender={this.props.reRender}
                        // onClickOutside={this.onClickOutside}
                    />
                    ) : null
                }  
            </React.Fragment>
        );
    }
}

