import React, { Component } from "react";
import ProductService from "../../services/productServices";


export default class Product extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.getProduct = this.getProduct.bind(this);
        this.updatePublished = this.updatePublished.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);

        this.state = {
            currentProduct: {
                param: null,
                title: "",
                description: "",
                published: false
            },
            message: ""
        };
    }

    componentDidMount() {
        this.getProduct(this.props.match && this.props.match.params.param);
    }

    onChangeTitle(e) {
        const title = e.target.value;

        this.setState(function (prevState) {
            return {
                currentProduct: {
                    ...prevState.currentProduct,
                    title: title
                }
            };
        });
    }

    onChangeDescription(e) {
        const description = e.target.value;

        this.setState(prevState => ({
            currentProduct: {
                ...prevState.currentProduct,
                description: description
            }
        }));
    }

    getProduct(param) {
        ProductService.get(param)
            .then(response => {
                this.setState({
                    currentProduct: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    updatePublished(status) {
        var data = {
            param: this.state.currentProduct.param,
            title: this.state.currentProduct.title,
            description: this.state.currentProduct.description,
            published: status
        };

        ProductService.update(this.state.currentProduct.param, data)
            .then(response => {
                this.setState(prevState => ({
                    currentProduct: {
                        ...prevState.currentProduct,
                        published: status
                    }
                }));
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    updateProduct() {
        console.log(this.state.currentProduct)
        ProductService.update(
            this.state.currentProduct._id,
            this.state.currentProduct
        )
            .then(response => {
                console.log(response.data);
                this.setState({
                    message: "The add was updated successfully!"
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    deleteProduct() {
        ProductService.delete(this.state.currentProduct._id)
            .then(response => {
                console.log(response.data);
                this.props.history.push('/product')
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        const { currentProduct } = this.state;

        return (
            <div>
                {currentProduct ? (
                    <div className="edit-form">
                        <h4>Your add</h4>
                        <form>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    value={currentProduct.title}
                                    onChange={this.onChangeTitle}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="description"
                                    value={currentProduct.description}
                                    onChange={this.onChangeDescription}
                                />
                            </div>

                            <div className="form-group">
                                <label>
                                    <strong>Status:</strong>
                                </label>
                                {currentProduct.published ? "Published" : "Pending"}
                            </div>
                        </form>

                        {currentProduct.published ? (
                            <button
                                className="badge badge-primary mr-2"
                                onClick={() => this.updatePublished(false)}
                            >
                                UnPublish
                            </button>
                        ) : (
                                <button
                                    className="badge badge-primary mr-2"
                                    onClick={() => this.updatePublished(true)}
                                >
                                    Publish
                                </button>
                            )}

                        <button
                            className="badge badge-danger mr-2"
                            onClick={this.deleteProduct}
                        >
                            Delete
            </button>

                        <button
                            type="submit"
                            className="badge badge-success"
                            onClick={this.updateProduct}
                        >
                            Update
            </button>
                        <p>{this.state.message}</p>
                    </div>
                ) : (
                        <div>
                            <br />
                            <p>Please click on a Product...</p>
                        </div>
                    )}
            </div>
        );
    }
}