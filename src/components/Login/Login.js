// import React, { useContext } from 'react';
import React from 'react';
import useFirebase from '../../hooks/useFirebase';


const Login = () => {
    const {handalerGoogleSignIn,users,error,handelGithub,handalerFacebookSignIn,signInWithEmailAndPassword} = useFirebase()
    return (
        <div className="container my-3">
            <h3>Please Login</h3>
            <form onSubmit={signInWithEmailAndPassword}>
                <input type="email" name="" id="" placeholder="Enter your email" />
                <br /> <br />
                <input type="password" name="" id="" placeholder="Enter your password" />
                <br /><br />
            <input className="text-danger w-25" type="submit" value="Log In" />
            </form>
            <p className="text-primary"><span>{users?.email}</span></p>
            
              <p>___________ or _________</p>
              <button className="btn btn-danger" onClick={handalerGoogleSignIn}>Google SignIn</button>
            
              <h5>{users?.displayName} {error}</h5>

              <button onClick={handelGithub} className="btn btn-primary ">Github SignIn</button>
             
              <button onClick={handalerFacebookSignIn} className="btn btn-danger m-3">FB SignIn</button>
        </div>
    );
};

export default Login;