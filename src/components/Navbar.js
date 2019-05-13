import React, {Component} from 'react';
import mAuth from "../config/FirebaseConfig";
class Navbar extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: {},
        };

        this.logout = this.logout.bind(this);
    }
    componentDidMount() {
        this.authListener();
    }

    authListener() {
        mAuth.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({user});
            } else {
                this.setState({user: null});
            }
        });
    }
    logout() {
       mAuth.auth().signOut();
    }
    render() {
        const logoutButton = () => (
            <p className="ml-auto navbar-text text-right">
                <button className="btn btn-dark border rounded-0 border-danger" onClick={this.logout} type="button">Logout</button>
            </p>
        );
        return (<nav className="navbar navbar-light navbar-expand-md">
            <div className="container-fluid"><a href=" " className="navbar-brand">Allied Trade Centre</a>
                <button data-toggle="collapse" data-target="#navcol-1" className="navbar-toggler"/>
                <div className="collapse navbar-collapse align-right" id="navcol-1">
                    <ul className="nav navbar-nav"/>
                    {this.state.user ? logoutButton() : null}

                </div>
            </div>
        </nav>);
        }
}
export default Navbar;