import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="container my-5">
            <h3>Please Register</h3>
            <form>
                <input type="email" name="" id="" placeholder="Enter your email" />
                <br /> <br />
                <input type="password" name="" id="" placeholder="Enter your password" />
                <br /><br />

                <input type="button" value="Register" />
            </form>
            <p>___________________________________________</p>
            <h5> <Link to="login">Already Registered</Link></h5>
        </div>
    );
};

export default Register;