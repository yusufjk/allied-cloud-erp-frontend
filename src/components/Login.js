import React, {Component} from 'react';
import img from "../assets/img/atc_logo.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import mAuth from "../config/FirebaseConfig";

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            password: '',
            errors: false
        }
    }

    login(e) {
        e.preventDefault();
        mAuth.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
            console.log(error.message);
            this.setState({
                errors: true
            });
        })
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const errorMsg = () => (
            <h6 className="text-center text-danger invalid-login-txt"><em>username or password is
                incorrect!</em></h6>

        );
        return (
            <div>
                <Navbar/>
                <div className="login-clean">
                    <form>
                        <h2 className="sr-only">Login Form</h2>
                        <div className="illustration"><img alt="" src={img} className="logo-img"/></div>
                        <div className="form-group"><input className="form-control" value={this.state.email}
                                                           onChange={this.handleChange} type="email" name="email"
                                                           placeholder="Email"/></div>
                        <div className="form-group"><input className="form-control" value={this.state.password}
                                                           onChange={this.handleChange} type="password" name="password"
                                                           placeholder="Password"/></div>
                        <div className="form-group">
                            <button className="btn btn-primary btn-block" onClick={this.login} type="submit">Log In
                            </button>
                        </div>
                        {this.state.errors ? errorMsg() : null}
                    </form>
                </div>
                <Footer/>
            </div>

        );
    }
}

export default Login;