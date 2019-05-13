import React, {Component} from 'react';
import Navbar from "../Navbar";
import Footer from "../Footer";
import Table from "./Table";

class Inventory extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <h2 className="text-center inventory-heading">Inventory Management</h2>
                <div>
                    <ul className="nav nav-tabs">
                        <li className="nav-item"><a className="nav-link active" role="tab" data-toggle="tab"
                                                    href=" ">Pipes</a></li>
                        <li className="nav-item"><a className="nav-link" role="tab" data-toggle="tab"
                                                    href=" ">Elbows</a></li>
                        <li className="nav-item"><a className="nav-link" role="tab" data-toggle="tab" href=" ">Tab
                            3</a></li>
                    </ul>
                    <div className="tab-content">
                        <Table/>
                        <div className="tab-pane" role="tabpanel" id="tab-2">
                            <p>Content for tab 2.</p>
                        </div>
                        <div className="tab-pane" role="tabpanel" id="tab-3">
                            <p>Content for tab 3.</p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Inventory;