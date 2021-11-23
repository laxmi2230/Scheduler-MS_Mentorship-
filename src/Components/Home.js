import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'; 
import NavBar from './NavBar/NavBar'
import Banner from './Banner';
import Footer from '../Components/Footer/Footer'

const Home = () => {
    return (
        <div>
            <NavBar/>
            <br/>
            <Banner/>
            <br/>
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
            &nbsp;&nbsp;&nbsp;
            <Button variant="dark">
            <Link
              to="/Information"
            >
            Class Information
           </Link> 
            </Button>
            <Footer/>
        </div>
    )
}

export default Home;
