import axios from 'axios';
import React,{useState, useEffect} from 'react'
//import axios from 'axios';
//import { useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom'


const Classinfo = () => {
   //const [i,setInfo]=useState([]);
   //const [loading,setLoading]=useState(true);
   //const location = useLocation()
   const { subjectcode } = useParams()
   const [posts,setPosts] = useState([]);
  // const { from } = location.state
  //const { subjectcode } = location.state
    
  useEffect(()=>{
 const infos = {
   subjectcode:subjectcode
  };
  axios.post('http://localhost:3001/api/usermodel1/info',infos)
                            .then(response => {
                              setPosts(response.data);
                            }).catch(error => {
                              console.error('Something went wrong!', error);
                            });
  }, []);
  const useaxiosPosts = posts.map((students)=>{
    return <div> 
         <h3>{students.fullname}</h3>
    </div>
  })


    return (
        <div>
           {posts  && useaxiosPosts}
        </div>
    )
}

export default Classinfo


























































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
