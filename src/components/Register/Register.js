import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Register = () => {
    const {emailChange,passwordChange,generatEamilPasswords,users} = useFirebase()
    console.log(users);
    return (
        <div className="container my-5">
            <h3>Please Register</h3>
            <p className="text-primary"><span>{users?.email}</span></p>
            <form onSubmit={generatEamilPasswords}>
                <input onBlur={emailChange} type="email" name="" id="" placeholder="Enter your email" required />
                <br /> <br />

                <input onBlur={passwordChange} type="password" name="" id="" placeholder="Enter your password" required />
                <br /><br />

                <input type="submit" value="Register" />
            </form>
            <p>___________________________________________</p>
            <h5> <Link to="login">Already Registered</Link></h5>
        </div>
    );
};
export default Register;