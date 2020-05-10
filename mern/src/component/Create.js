import React, { Component } from 'react';
import axios from 'axios';



export default class Create extends Component {
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
    axios.get('http://localhost:3001/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            login: response.data.map(user => user.login),
        
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeTitre(e) {
    this.setState({
      titre: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }


  render() {
    return (
    <div>
      <h3>Create New blog</h3>
      <form onSubmit={async () => {
        // console.log('ggg')
        const user = {
          description: this.state.description,
          titre: this.state.titre
        }
        await axios.post('http://localhost:3001/ex/add', user);
        window.location = '/show';
      }}>

      <div className="form-group">
          <label>Titre </label>
          <input type="text" className="form-control"value={this.state.titre} onChange={this.onChangeTitre}/>
        </div>
         <div className="form-group"> 
          <label>Description: </label>
          <textarea required className="form-control" value={this.state.description} onChange={this.onChangeDescription} />
        </div>
       
         <div className="form-group">
          <input type="submit" value="valide" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}