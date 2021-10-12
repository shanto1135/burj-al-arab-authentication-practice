// import React, { useContext } from 'react';
import React from 'react';
import useFirebase from '../../hooks/useFirebase';


const Login = () => {
    const {handalerGoogleSignIn,users,error} = useFirebase()
    return (
        <div className="container my-3">
            <h3>Please Login</h3>
            <form>
                <input type="email" name="" id="" placeholder="Enter your email" />
                <br /> <br />
                <input type="password" name="" id="" placeholder="Enter your password" />
                <br /><br />
            </form>
              <h3>User: {users?.email} {error}</h3>
              <p>___________ or _________</p>
              <button onClick={handalerGoogleSignIn}>Google SignIn</button>
        </div>
    );
};

export default Login;