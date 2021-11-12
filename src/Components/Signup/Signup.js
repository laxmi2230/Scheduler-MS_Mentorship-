import React from 'react';

import './Signup.css'


const Signup = () => {
    return (
        <div>
        <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
        <main class="pa4 black-80">
        <form class="measure center">
          <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
            <legend class="f4 fw6 ph0 mh0">Sign In</legend>
            <div class="mt3">
              <label class="db fw6 lh-copy f6" for="email-address">Email</label>
              <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
            </div>
            <div class="mv3">
              <label class="db fw6 lh-copy f6" for="password">Password</label>
              <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
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
            <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
          </div>
          <div class="lh-copy mt3">
            <a href="#0" class="f6 link dim black db">Sign up</a>
          </div>
        </form>
      </main>
     </article>
    </div> 
    )
}

export default Signup
