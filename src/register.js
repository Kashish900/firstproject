import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div  className="outside">
            <div  className="main">
                <div    className="heading">
                <h1>Register page</h1>
                </div>
                <div>
                <form  action="login"  method="post">
                <input type="text" placeholder="enter your usernmae" name="username" /><br /><br />
                <input type="email" placeholder="enter your email" name="email" /><br /><br />
                <input type="password" placeholder="enter your password" name="password" /><br /><br />
                <input type="submit" value="Register"  className="btn" /><br /><br />
                <Link  to="/login">Back</Link>
                </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
