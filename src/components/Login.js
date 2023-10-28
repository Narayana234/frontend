import {Component} from "react"

import axios from "axios"

class Login extends Component{
    state = {
        name : "ee",
        email : "pas",
        password : "ee"
    }

    storedData = (event) =>{
        const {name,email,password} = this.state;
        const obj = {
            name,
            email,
            password
        }
       console.log(obj)
       const url = "http://localhost:5002/students/login";
    
       axios.post(url,obj).then((res) =>{
          alert(res.data)
       })
       .catch((err) =>{
        alert(err)
       })
       event.preventDefault();
    }
    
render(){
    return(
        <form onSubmit={this.storedData}>
            <h1> LOGIN PAGE</h1>
            <label for="name"> Name</label>
            <input type="text" id="name" placeholder = "Enter your Name" onChange = {(event) =>(this.setState({name:event.target.value}))}/>
           <label for="email"> Email</label>
           <input type="email" id="email" onChange = {(event) =>(this.setState({email:event.target.value}))}/>
           <label for="pas"> Password</label>
           <input type = "password" id="pas" onChange = {((event) =>(this.setState({password:event.target.value})))}/>
           <input type="submit"/>
             </form> 
    )
}
}


export default Login