//import axios from 'axios';
import React, {Component} from 'react'
import axios from 'axios';
//import Signup from './Signup/Signup';

class ClassInfo extends Component{
    constructor(){
        super()
        this.state={
            subjectcode:'',
            Info:null,
        }
       // this.onSubmit=this.onSubmit.bind(this)
    }
    OnSubmit(){
        const infos = {
            subjectcode: this.state.subjectcode
        }
        axios.post('http://localhost:3001/api/usermodel1/info', infos)
            .then(response=> this.setState({Info:response.data}));
    }
    render(){
        return (
            <div>
              {/*  <Signup onClick={this.onSubmit}/>
               {(this.state.Info!=null)?<p>{this.state.seats[0].availableseats}</p>:null} */}
               Hello
            </div>
        )
    }
    
}

export default ClassInfo
