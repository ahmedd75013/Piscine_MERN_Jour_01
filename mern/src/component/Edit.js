import React, { Component } from 'react';
import axios from 'axios';



export default class Edit extends Component {
  constructor(props) {
    super(props);

    
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeTitre = this.onChangeTitre.bind(this);
  

    this.state = {
  
      description: '',
      titre: '',
      
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/ex/'+this.props.match.params.id)
      .then(response => {
        this.setState({
        
          description: response.data.description,
          titre: response.data.titre,
        
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:3001/users')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }



  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeTitre(e) {
    this.setState({
      titre: e.target.value
    })
  }


  onSubmit = (e) => {
    e.preventDefault();
console.log("this.state", this.state)
    const ex = {
   
      description: this.state.description,
      titre: this.state.titre,
  
    }

    axios.post('http://localhost:3001/ex/update/' + this.props.match.params.id, ex)
      .then(res => console.log(res.data));

    window.location = '/list';
  }

  render() {
    return (
    <div>
      <h3>Edit Post </h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          
        </div>

        <div className="form-group">
          <label>Titre </label>
          <input type="text"  className="form-control" value={this.state.titre} onChange={this.onChangeTitre}/>
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text" required className="form-control" value={this.state.description} onChange={this.onChangeDescription}/>
        </div>
      
        <div className="form-group">
          <input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}