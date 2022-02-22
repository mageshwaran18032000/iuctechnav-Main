import React,{Component} from "react";
import './Content.css';
export default class Card extends Component
{
  render(props){
      return(
        <div data-aos={this.props.aos} data-aos-offset={this.props.aos_offset} className="col-md-6">
        <div class="card p-2 overflow-hidden h-100 shadow vals" >
           
           <img class="card-img-top" src={this.props.img} alt="Card image cap"></img>
          
        </div>
        
      </div> 
      )
  }
}