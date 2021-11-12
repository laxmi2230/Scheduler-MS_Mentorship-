import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <Button variant="dark">
            <Link
              to="/Signup"
            >
            Sign up 
           </Link> 
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button variant="dark">
            <Link
              to="/Registration"
            >
             Registration
           </Link> 
            </Button>
        </div>
    )
}

export default Home;
