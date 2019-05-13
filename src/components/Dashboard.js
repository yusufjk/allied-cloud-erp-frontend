import React, {Component} from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <h2>This is the Dashboard</h2>
                <Footer/>
            </div>
        );
    }
}

export default Dashboard;