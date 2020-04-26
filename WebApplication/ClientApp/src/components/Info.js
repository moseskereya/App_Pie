import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
class Details extends Component {
    constructor(props) {
        super(props);
        this.state = { data:[] }
    }
    componentDidMount = () =>{
        const itemId  = this.props.location.state.recipe;
        axios.get(`https://localhost:44335/api/recipes/${itemId}`)
        .then(response => {
            this.setState({data : response.data})
            console.log(this.state.data)
        })
        .catch(error => {
            console.log(error)
        })
    }


    render() { 
        const info = this.state.data
        return ( 
            <div className="main-details">
                <div className="img-info">
                    <img src={info.img} alt=""/>
                </div>
                <div className="info">
                 <h4 className="head-info">{info.name}</h4>
                 <hr/>
                  <p>{info.description}</p>
                  <span>{info.price} USD</span>
                  <p>RecipeId : {info.id}</p>
                  <button className="btn btn-danger">
                      <Link style={styles} to = "/pies">
                           Back to recipes
                      </Link>
                      </button>
                </div>
            </div>
         );
    }
}
 
export default Details;

const styles = {
    color : "#fff",
    textdecoration: "none"
}