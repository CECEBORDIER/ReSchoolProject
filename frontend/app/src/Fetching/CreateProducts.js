import React from 'react';
import axios from 'axios';
import '../App.css';


export default class CreateProduct extends React.Component {
  constructor() {
  super();
  this.state = {
    input: {},
    errors: {}
  };
   
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}
   
handleChange(event) {
  let input = this.state.input;
  input[event.target.name] = event.target.value;

  this.setState({
    input
  });
}
   
handleSubmit(event) {
  event.preventDefault();

  if(this.validate()){

      const post = this.state.input;
      const headers = {
        'Content-Type': 'application/json'
      }
      axios.post(`http://localhost:3000/Product/Create`, post , {
        headers:headers})
      .then(res => {
        console.log('res');
        console.log(res);
        console.log(res.data);

        let input = {};
        input["title"] = "";
        input["description"] = "";
        this.setState({input:input});



      })
 
  }
}

validate(){
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["title"]) {
      isValid = false;
      errors["title"] = "Please enter your title.";
    }

    if (!input["description"]) {
      isValid = false;
      errors["description"] = "Please enter your description.";
    }

    this.setState({
      errors: errors
    });

    return isValid;
}
   
render() {
  return (
    <div>
      <h1>React Axios Post Request Example - ItSolutionStuff.com</h1>
      <form onSubmit={this.handleSubmit}>

        <div className="form-group">
          <label for="title">Title:</label>
          <input 
            type="text" 
            name="title" 
            value={this.state.input.title}
            onChange={this.handleChange}
            className="form-control" 
            placeholder="Enter title" 
            id="title" />

            <div className="text-danger">{this.state.errors.title}</div>
        </div>

        <div className="form-group">
          <label for="description">description:</label>
          <textarea 
            name="description"
            value={this.state.input.body} 
            onChange={this.handleChange}
            placeholder="Enter description"
            className="form-control" />

            <div className="text-danger">{this.state.errors.description}</div>
        </div>
            
        <input type="submit" value="Submit" className="btn btn-success" />
      </form>
    </div>
  );
}
}

