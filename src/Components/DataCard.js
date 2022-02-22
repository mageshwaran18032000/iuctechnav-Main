import React,{Component} from "react";
import './Content.css';
import Form from 'react-bootstrap/Form';
export default class DataCard extends Component
{
  render(props){
      return(
        <div data-aos={this.props.aos} data-aos-offset={this.props.aos_offset} className="col-md-6 col-12">
        <div class="card p-2 overflow-hidden h-100 shadow vals1" >
            <div className="card-body">
            <h5 class="card-title">{this.props.title}</h5>
             <p class="card-text">{this.props.desc}</p>
            </div>
            
        </div>
        
      </div> 
      )
  }
}