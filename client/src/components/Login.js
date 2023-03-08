import React from "react";
import "App.css";

function Login () {
    return (
        <div className="login-form-box">
            <form className="login-form">
                <div className="login-content">
                    <h3 className="login-title">Sign In</h3>
                    <div className="form-group mt-3">
                        <label>Email:</label>
                        <input 
                            type="email"
                            className="form-control mt-1"
                            placeholder="Please enter your Email"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password:</label>
                        <input 
                        type="password"
                        className="form-control mt-1"
                        placeholder="Please enter your password"
                        />
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Log In
                        </button>
                    </div>
                    <p className="forgot-pasword text-right mt-2">
                        Forgot <a href="#">password.</a>
                    </p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;