import React, {Component} from 'react';
import {Button, Modal} from "react-bootstrap";

class EditModal extends Component {
    constructor(props) {
        super(props);
        this.handleModalClose = this.handleModalClose.bind(this);
        this.state = {
            editToggle: false,
            productName: '',
            size: '',
            qty: '',
            godown: '',
            rackSection: '',
            shelfNo: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            editToggle: nextProps.editToggle,
            productName: nextProps.productName,
            size: nextProps.size,
            qty: nextProps.qty,
            godown: nextProps.godown,
            rackSection: nextProps.rackSection,
            shelfNo: nextProps.shelfNo
        });
    }

    handleModalClose() {
        this.setState({editToggle: false})
    }

    productNameHandler(e) {
        this.setState({productName: e.target.value});
    }

    sizeHandler(e) {
        this.setState({size: e.target.value});
    }

    qtyHandler(e) {
        this.setState({qty: e.target.value});
    }

    godownHandler(e) {
        this.setState({godown: e.target.value});
    }

    shelfNoHandler(e) {
        this.setState({shelfNo: e.target.value});
    }

    rackSectionHandler(e) {
        this.setState({rackSection: e.target.value});
    }

    updateData(product) {
        const updateUrl = 'http://localhost:8080/api/update-product';
        fetch(updateUrl, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(product), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => console.log('Product has been successfully updated.'))
            .catch(error => console.error('Error:', error));
    }

    render() {
        return (
            <Modal size="lg" show={this.state.editToggle}
                   onHide={this.handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-row">
                            <div className="col-6 align-self-center"><label
                                className="col-form-label">Product
                                Name</label></div>
                            <div className="col-6 text-left align-self-center"><input value={this.state.productName}
                                                                                      onChange={(e) => this.productNameHandler(e)}
                                                                                      type="text"
                                                                                      className="form-control form-control-sm"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-2 align-self-center"><label
                                className="col-form-label">Size</label></div>
                            <div className="col-4 text-left align-self-center"><input value={this.state.size}
                                                                                      onChange={(e) => this.sizeHandler(e)}
                                                                                      type="text"
                                                                                      className="form-control"/>
                            </div>
                            <div className="col-2 align-self-center"><label
                                className="col-form-label">Quantity</label></div>
                            <div className="col-4 text-left align-self-center"><input value={this.state.qty}
                                                                                      onChange={(e) => this.qtyHandler(e)}
                                                                                      type="text"
                                                                                      className="form-control"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-2 align-self-center"><label
                                className="col-form-label">Godown</label></div>
                            <div className="col-4 text-left align-self-center"><input value={this.state.godown}
                                                                                      onChange={(e) => this.godownHandler(e)}
                                                                                      type="text"
                                                                                      className="form-control"/>
                            </div>
                            <div className="col-2 align-self-center"><label
                                className="col-form-label">Rack
                                Section</label></div>
                            <div className="col-4 text-left align-self-center"><input value={this.state.rackSection}
                                                                                      onChange={(e) => this.rackSectionHandler(e)}
                                                                                      type="text"
                                                                                      className="form-control"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-2 align-self-center"><label
                                className="col-form-label">Shelf
                                No</label></div>
                            <div className="col-4 text-left align-self-center"><input value={this.state.shelfNo}
                                                                                      onChange={(e) => this.shelfNoHandler(e)}
                                                                                      type="text"
                                                                                      className="form-control"/>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleModalClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.updateData()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default EditModal;