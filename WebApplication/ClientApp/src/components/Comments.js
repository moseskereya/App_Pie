import React, { Component } from 'react';
import Axios from 'axios'
class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comments : []
         }
    }

    componentDidMount = () =>{
        Axios.get('https://localhost:44335/api/customers')
        .then(response => {
            this.setState({comments: response.data})
            console.log(this.state.comments);
        })
        .catch(error =>{
            console.log(error, "No data retrived from databases")
        })
    }


    render() { 
        return ( 
            <div className="comments-section">
                 {this.state.comments.map(item =>{
                     return(
                          <div key={item.id} >
                             <p>{item.name}</p>
                             <p>{item.email}</p>
                             <p>{item.comment}</p>
                             <button 
                             className="btn btn-danger">Delete comment</button>
                         </div>
                     )
                 })}
            </div>
         );
    }
}
 
export default Comment;