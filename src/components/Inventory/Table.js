import React, {Component} from 'react';
import EditModal from "./EditModal";

const allProductsUrl = "http://localhost:8080/api/get-all-data";

class Table extends Component {
    constructor(props) {
        super(props);
        this.toggleEditModal = this.toggleEditModal.bind(this);
        this.state = {
            requiredItem: 0,
            product: [
                {
                    "godown": [{
                        "godownName": "",
                        "rackSection": "",
                        "shelfNo": "",
                        "qty": ""
                    }],
                    "productName": "",
                    "size": "",
                    "totalQty": "",
                    "price": ""
                }
            ],
            editToggle: false
        }
    }

    toggleEditModal(index) {
        this.setState({
            requiredItem: index,
            editToggle: true
        })
    }

    componentDidMount() {
        console.log('ComponentDidMount Method Executed'
        );
        this.fetchData();
    }

    fetchData() {
        fetch(allProductsUrl)
            .then(response => response.json())
            .then(parsed => {
                //console.log(parsed)
                this.setState({product: parsed});
            })
            .catch(error => console.log('parsing failed', error))
    }

    render() {
        const product = this.state.product.map((product, i) => {
            return <tr key={i}>
                <td>{product.productName}</td>
                <td>{product.size}</td>
                <td>
                    <div className="table-responsive table-bordered text-center border-dark">
                        <table className="table table-striped table-bordered table-hover table-sm">
                            <thead>
                            <tr>
                                <th>Godown Name</th>
                                <th>Rack Section</th>
                                <th>Shelf No</th>
                                <th>Quantity</th>
                            </tr>
                            </thead>
                            <tbody>
                            {product.godown.map((godown, j) => {
                                return <tr key={j}>
                                    <td>  {godown.godownName} </td>
                                    <td>  {godown.rackSection} </td>
                                    <td> {godown.shelfNo}  </td>
                                    <td>  {godown.qty} </td>
                                </tr>
                            })}
                            </tbody>
                        </table>
                    </div>
                </td>
                <td>{product.totalQty}</td>
                <td>{product.price}</td>
                <td>
                    <button className="btn btn-warning btn-sm" type="button"
                            onClick={() => this.toggleEditModal(i)}><i
                        className="far fa-edit"/></button>
                    &nbsp; / &nbsp;
                    <button className="btn btn-danger btn-sm" type="button"><i
                        className="far fa-trash-alt"/></button>
                </td>
            </tr>
        });
        const requiredItem = this.state.requiredItem;
        const modalData = this.state.product[requiredItem];
        console.log('inside html');
        console.log(this.state.product);
        return (
            <div className="tab-pane active" role="tabpanel" id="tab-1">
                <h3 className="text-center">Pipes</h3>
                <div className="col">
                    <div className="table-responsive table-bordered text-center border-dark">
                        <table className="table table-striped table-bordered table-hover table-sm">
                            <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Size</th>
                                <th>Godown</th>
                                <th>Total Quantity</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {product}
                            <EditModal
                                editToggle={this.state.editToggle}
                                productName={modalData.productName}
                                size={modalData.size}
                                totalQty={modalData.totalQty}
                                godown={modalData.godown}
                                price={modalData.price}
                            />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Table;