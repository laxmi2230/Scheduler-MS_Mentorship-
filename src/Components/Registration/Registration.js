import React from 'react'
import './Registration.css';

const Registration = () => {
    return (
        <div>
        <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
        <main class="pa4 black-80">
        <form class="measure center">
          <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
            <legend class="f4 fw6 ph0 mh0">Registration</legend>
            <div class="mt3">
              <label class="db fw6 lh-copy f6" for="full-name">Full Name</label>
              <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="name" name="name"  id="name" />
            </div>
            <div class="mv3">
              <label class="db fw6 lh-copy f6" for="date-of-birth">Date-of-Birth</label>
              <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="dob" name="number"  id="number" />
            </div>
            <div class="mv3">
              <label class="db fw6 lh-copy f6" for="subject-code">Subject Code</label>
              <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="subjectcode" name="subjectcode"  id="subjectcode" />
            </div>
            <div class="mv3">
              <label class="db fw6 lh-copy f6" for="subject-name">Subject Name</label>
              <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="subjectname" name="subjectname"  id="subjectname" />
            </div>
          </fieldset>
          <div class="">
            <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Submit" />
          </div>
        </form>
      </main>
     </article>
    </div> 
    )
}

export default Registration
