import React, {Component} from 'react';
import axios from 'axios';
//import { Button } from 'react-bootstrap';
import './Registration.css';

class Registration extends Component {
  constructor(){
    super()
    this.state = {
      fullname:'',
      dob:'',
      offline_online:'',
      subjectcode:'',
      subjectname:''
    }
    this.changeFullname=this.changeFullname.bind(this)
    this.changeDob=this.changeDob.bind(this)
    this.changeOfflineonline=this.changeOfflineonline.bind(this)
    this.changeSubjectcode=this.changeSubjectcode.bind(this)
    this.changeSubjectname=this.changeSubjectname.bind(this)
    this.onSubmit=this.onSubmit.bind(this)
     this.onChange=this.onChange.bind(this)
    
  }

  changeFullname(event){
    this.setState({
      fullname:event.target.value
    })
  }
  changeDob(event){
    this.setState({
      dob:event.target.value
    })
  }
  changeOfflineonline(event){
    this.setState({
      offline_online:event.target.value
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
      fullname: this.state.fullname,
      dob: this.state.dob,
      offline_online: this.state.offline_online,
      subjectcode: this.state.subjectcode,
      subjectname: this.state.subjectname
    }
    axios.post('http://localhost:3001/api/usermodel1', registered)
        .then(response => console.log(response.data))
    
      this.setState({
      fullname:'',
      dob:'',
      offline_online:'',
      subjectcode:'',
      subjectname:''
    })
 }
  onChange(){
    //console.log("xyz");
    const blogs = {
      offline_online : this.state.offline_online
    }
    axios.post('http://localhost:3001/api/usermodel2/seats', blogs)
  .then(response=>console.log(response.data));
  }
  render() {
    return (
      <div>
      <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
      <main className="pa4 black-80">
      <form className="measure center" onSubmit={this.onSubmit}>
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="f4 fw6 ph0 mh0">Registration</legend>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="full-name">Full Name</label>
            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="name" placeholder="FullName" onChange={this.changeFullname} value={this.state.fullname} />
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="date-of-birth">Date-of-Birth</label>
            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="number" placeholder="DOB" onChange={this.changeDob} value={this.state.dob}  />
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="subject-code">Subject Code</label>
            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="subjectcode" placeholder="subjectcode(Only Char)" onChange={this.changeSubjectcode} value={this.state.subjectcode} />
            &nbsp;&nbsp;&nbsp;
            <br/>
            <button variant="dark" onClick={this.onChange}>
             Find Avaliable Seats
            </button>
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="offline/online">Offline/Online</label>
            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="offline_online" placeholder="offline/online" onChange={this.changeOfflineonline} value={this.state.Offline_online} />
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="subject-name">Subject Name</label>
            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="subjectname" placeholder="subjectname" onChange={this.changeSubjectname} value={this.state.subjectname}  />
          </div>
        </fieldset>
        <div className="">
          <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Submit" />
        </div>
      </form>
    </main>
   </article>
  </div> 
  )
  }
   
}

export default Registration;
