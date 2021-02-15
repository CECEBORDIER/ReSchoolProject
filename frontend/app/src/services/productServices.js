import axios from 'axios';
import http from "../http-common";



class ProductService {

  getAll() {
    return http.get('/products');
  }

  create(data) {
    return http.post("/product/create", data);
  }

  get(param) {
    return http.get(`/product/${param}/`);
  }
  update(param, data) {
    return http.put(`/products/${param}`, data);
  }
  delete(param) {
    return http.delete(`/delteProduct/${param}`);
  }
  deleteAll() {
    return http.delete(`/delteAll`);
  }
 
  findByTitle(title) {
    return http.get(`/products?title=${title}`);
  }
}

export default new ProductService()