import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

        function Login() {
            return (
        <div  className="outside">
            <div  className="main">
                <div  className="heading">
                <h1>Login page</h1>
                </div>
                <div>
                <form  action="login"  method="post">
                <input type="email" placeholder="enter your email" name="email" /><br /><br />
                <input type="password" placeholder="enter your password" name="password" /><br /><br />
                <input type="submit" value="Submit"  className="btn" />
                <input type="reset" value="Cancel"  className="btn" />
                </form>
                <Link  to="/register">Register Here</Link>
                </div>
            </div>
        </div>
    )
}

export default Login;
