import React, { Component } from "react";
import ProductService from "../../services/productServices";
import UserService from "../../services/user.service";
import { v4 as uuidv4 } from 'uuid';
import { connect } from "react-redux";




class AddProduct extends Component {


constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveProduct = this.saveProduct.bind(this);
    this.newProduct = this.newProduct.bind(this);
    this.onProductId = this.onChangeId.bind(this);


    this.state = {
      id: "",
      title: "",
      description: "",
      published: false,
      productId: "",
      numberUserFavorits: null,
      submitted: false
    };
  }

 
  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }
  onChangeId(e) {
    this.setState({
      productId: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  
  saveProduct() {
    const { user: currentUser } = this.props;
    var data = {
      title: this.state.title,
      description: this.state.description,
      productId: uuidv4(),
      numberUserFavorits: null,
      id: currentUser.id,
    };

console.log(data)
    ProductService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published,
          productId: response.data.productId,
          numberUserFavorits: response.data.numberUserFavorits,
          submitted: true
        });
        console.log(data);
      })
      .catch(e => {
        console.log(e);
      });
    UserService.createUserAdd(data).then(response => {
      this.setState({
        productId: response.data.productId,
        id: response.data.id,
      });
      console.log(data)
    })
  }

  newProduct() {
    this.setState({
      id: null,
      title: "",
      description: "",
      published: false,
      productId: null,
      numberUserFavorits: null,
      submitted: false
    });
  }

  render() {

    return (

      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newProduct}>
              Add
            </button>
          </div>
        ) : (
            <div>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  required
                  value={this.state.title}
                  onChange={this.onChangeTitle}
                  name="title"
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  required
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                  name="description"
                />
              </div>

              <button onClick={this.saveProduct} className="btn btn-success">
                Submit
            </button>
            </div>
          )}
      </div>
    );
        };
 }
 function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(AddProduct);