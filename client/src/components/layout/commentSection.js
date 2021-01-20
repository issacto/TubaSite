import React, { Component } from "react";
import "../../stylesheet.css";
import ReactStars from "react-rating-stars-component";
import {postReview} from "../../redux/actions/reviewActions"

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state={
      showButton :false,
      model: props.model,
      user: props.user,
      commentedAuthors: props.commentedAuthors
    };
  }
  ratingChanged = (newRating) => {
    this.setState({rating:newRating});
  };
  handleChange= (event) => {
    this.setState({comment :event.target.value});
  }
  async postNewReview(model,data){
    postReview(model,data);
    
  };
  submit= (event) =>{
    if(!this.state.commentedAuthors.includes(this.state.user)){
      if(this.state.rating && this.state.comment){
     
        this.postNewReview(this.state.model,
        {
          "comment": this.state.comment,
          "author": this.state.user,
          "rating":this.state.rating
        }
        );
        console.log("Successfully sent");
        window.location.reload();
      }else{
        this.setState({showButton:true})
        setTimeout(() => {
          this.setState({showButton:false})
          console.log('This will run after 1 second!')
        }, 2500)
  
      }

    }else{
      alert("You have commented already! You are allowed to comment once only for each item!")
    }
    
  }
    render() {
      
      return (


          
        <div style={{backgroundColor:"#aaa",borderRadius:"6px",padding:"5px",border:"3px solid black"}}>
            <div style={{marginBottom:"2%",left:"50%"}}>
              <ReactStars
                count={5}
                onChange={this.ratingChanged}
                color={ "black"}
                size={20}
                activeColor="#ffd700"
                
            />
            </div>
            <textarea
            id="exampleFormControlTextarea1"
            placeholder="//Type your review here!! !!Please note that you could only submit your review once only for each item"
            rows="10"
            style={{backgroundColor:"white",border:"5px solid darkgoldenrod"}}
            onChange={this.handleChange}
            />
            <p style={{left:"3%", bottom:"12%",visibility: this.state.showButton? "visible":"hidden", color:"darkred", 
             position:"absolute",fontSize:"13px"}}>**Please fill in BOTH the rating and review section</p>
            
            
            <button
                onClick={this.submit}
                style={{right:"2%", marginTop:"0.5%",marginBottom:"0.5%",fontSize:"20px"
            }}
            >Submit</button>
    </div>
      );
    }
  }
export default CommentSection;