
import '../App.css';
import React from 'react';
import axios from 'axios';


export default class ProductList extends React.Component {
  state = {
    products: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/products`)
      .then(res => {
        const products = res.data;
        this.setState({ products });
      })
  }

  render() {
    return (
      <ul>
        { this.state.products.map(products =>
          <li>{products.title}</li>
        )}
        { this.state.products.map(products =>
          <li>{products.price}</li>
        )}
      </ul>
    )
  }
}