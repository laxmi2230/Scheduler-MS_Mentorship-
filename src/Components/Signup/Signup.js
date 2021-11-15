import React, { Component} from 'react';
import axios from 'axios';
import './Signup.css'
import { Link } from 'react-router-dom';


class Signup extends Component {
  constructor(){
    super()
    this.state = {
      email:'',
      password:'',
      subjectcode:'',
      subjectname:''
    }
    this.changeEmail=this.changeEmail.bind(this)
    this.changePassword=this.changePassword.bind(this)
    this.changeSubjectcode=this.changeSubjectcode.bind(this)
    this.changeSubjectname=this.changeSubjectname.bind(this)
    this.onSubmit=this.onSubmit.bind(this)
  }

  changeEmail(event){
    this.setState({
      email:event.target.value
    })
  }
  changePassword(event){
    this.setState({
      password:event.target.value
    })
  }
  changeSubjectcode(event){
    this.setState({
      subjectcode:event.target.value
    })
  }
  changeSubjectname(event){
    this.setState({
      subjectname:event.target.value
    })
  }
  onSubmit(event){
    event.preventDefault()

    const registered = {
      email: this.state.email,
      password: this.state.password,
      subjectcode: this.state.subjectcode,
      subjectname: this.state.subjectname
    }
    axios.post('http://localhost:3001/api/usermodel', registered)
        .then(response => console.log(response.data))
    
      this.setState({
      email:'',
      password:'',
      subjectcode:'',
      subjectname:''
    })
    
  }
  

  render() {
    return (
      <div className="container">
      <article className="dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
      <main className="pa4 black-80">
      <div className="measure center">
        <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
          <legend className="f4 fw6 ph0 mh0">Sign In</legend>
          <div class="mt3">
            <label className="db fw6 lh-copy f6" for="email-address">Email</label>
            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" placeholder="email" onChange={this.changeEmail} value={this.state.email}   />
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" for="password">Password</label>
            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" placeholder="password" onChange={this.changePassword} value={this.state.password}   />
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" for="subject-code">Subject Code</label>
            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="subjectcode" placeholder="subjectcode(Only Char)" onChange={this.changeSubjectcode} value={this.state.subjectcode}  />
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" for="subject-name">Subject Name</label>
            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="subjectname" placeholder="subjectname" onChange={this.changeSubjectname} value={this.state.subjectname}  />
          </div>
        </fieldset>
        <div className="">
        <button onClick={this.onSubmit}>
          <Link to="/Classinfo">
          {/*<input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Submit" />*/}
           Submit
          </Link>
          </button>
        </div>
      </div>
    </main>
   </article>
  </div> 
  );
  }
}

export default Signup;
