import React, { Component } from 'react';
import axios from 'axios'
import Comment from './Comments'
class Customer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Name : '',
            Email : '',
            Comment: ''
         }
    }

    handleSubmit = (e) =>{
       e.preventDefault()
       axios.post('https://localhost:44335/api/customers', 
       this.state)
       .then(response =>{
        console.log(response)
    })
    .catch(error =>{
        console.log(error)
    })
    }
    
    changeHandler = (e) =>{
        this.setState({[e.target.name] : e.target.value})
    }

    EmptyValues = () =>{
        this.state.Name.value = '';
        this.state.Email.value = '';
        this.state.Comment.value = ''
    }

    render() { 
        return (  
            <main>
            <div className="form-container">
               <form onSubmit={this.handleSubmit}>
                   <span className="field1">
                   <input type="text" name="Name" 
                   value={this.state.Name}
                   onChange={this.changeHandler}
                   placeholder="customer name"/>
                   <input type="text" name="Email" 
                   value={this.state.Email} 
                   onChange={this.changeHandler}
                   placeholder="Email"/><br/>
                   </span>
                   <textarea  className="text-comments"
                   value={this.state.Comment} rows="10" cols="70"
                   name="Comment"
                   onChange={this.changeHandler}
                   placeholder="Comments goes here"
                   >
                   </textarea>
                   <button onClick={this.EmptyValues} className="btn btn-primary">Add Comment</button>
               </form>
            </div>
            <Comment/>
            </main>
         );
    }
}
 
export default Customer;