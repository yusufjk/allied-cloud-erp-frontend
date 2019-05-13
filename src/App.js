import React, {Component} from 'react';
import './styles.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import Login from "./components/Login";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.css'
import mAuth from "./config/FirebaseConfig";
import Inventory from "./components/Inventory/Inventory";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
        };
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

    render() {
        return (
            <div className="App">
                {this.state.user ? (<Inventory/>) : (<Login/>)}
            </div>
        );
    }
}

export default App;
