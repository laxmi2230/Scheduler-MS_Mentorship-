import React,{useState} from 'react'
import { useLocation } from 'react-router-dom'

const ClassInfo = () => {
   const [info,setInfo]=useState([]);
   const [loading,setLoading]=useState(true);
   const location = useLocation()
   const { from } = location.state
  //const { subjectcode } = location.state
    return (
        <div>
            {this.state.subjectcode}
        </div>
    )
}

export default ClassInfo


























































/*//import axios from 'axios';
import React, { Component } from "react";
import axios from "axios";
//import Signup from './Signup/Signup';

class ClassInfo extends Component {
  constructor() {
    super();
    this.state = {
      subjectcode: this.props.location.subjectcode,
      Info: null,
      loading: true,
    };
    // this.onSubmit=this.onSubmit.bind(this)
  }

  componentDidMount() {
    const infos = {
      subjectcode: this.props.subjectcode,
    };
    axios
      .post("http://localhost:3001/api/usermodel1/info", infos)
      .then((response) => this.setState({ Info: response.data,loading:false }));
  }

  loadInfo = data => (
        data.length > 0 && data.map((student,i) => (
            <p key={i} >
              {student.fullname}
              </p>
        ))
    )
  render() {
    return (
     <div>
      {/* {this.state.loading?<p>Loading</p>:this.loadInfo(this.state.Info)}
        Hello 
       <p>{this.state.subjectcode}</p> 
      </div>
    );
  }
}
*/
