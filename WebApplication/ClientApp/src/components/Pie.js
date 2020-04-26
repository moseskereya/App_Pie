import React, { Component } from 'react';
import Axios from 'axios'
import {Link} from 'react-router-dom'
class Recipe extends Component {
    constructor(props) {
        super(props);
        this.state = {data : [] }
    }
    componentDidMount = () =>{
        Axios.get('https://localhost:44335/api/recipes')
        .then(response => {
            this.setState({data: response.data})
            console.log(this.state.data);
        })
        .catch(error =>{
            console.log(error, "No data retrived from databases")
        })
    }

    render() { 
        const lists = this.state.data
        return ( 
            <>
            <div>
                <h3>List of Pie's we have in our databases</h3>
            </div>
        <div className="main">
            {lists.map(item => {
                return(
                    <div className="container-items"  key={item.id}>
                     <Link style={styles} 
                     to = {
                          {pathname :`/Info/${item.id}`, state :{ recipe:item.id}}}>
                        <img src={item.img} alt="Recipe_Image"/> 
                       <span className="item-title">{item.name}</span>
                       </Link>
                    </div>
                );
            })}
        </div>
        </>
         );
    }
}
 
export default Recipe;

const styles = {
    color : "#fff",
    textdecoration: "none"
}