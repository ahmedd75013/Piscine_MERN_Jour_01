import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Exercise = props => (
  <tr>
  
    <td>{props.ex.description}</td>
    <td>{props.ex.titre}</td>
    
    <td>
      <Link to={"/edit/"+props.ex._id}>edit</Link> | <a href="#" onClick={() => { props.deleteEx(props.ex._id) }}>delete</a>
    </td>
  </tr>
)

export default class List extends Component {
  constructor(props) {
    super(props);


    this.state = {ex: []};
  }

  componentDidMount() {
    axios.get('http://localhost:3001/ex')
      .then(response => {
        console.log("response", response)
        this.setState({ ex: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteExercise = (id) =>  {
    axios.delete('http://localhost:3001/ex/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      ex: this.state.ex.filter(el => el._id !== id)
    })
  }

  exerciseList() {
    return this.state.ex.map(currentex => {
      return <Exercise ex={currentex} deleteEx={this.deleteExercise} key={currentex._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>List</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
            <th>Titre</th>
              <th>Description</th>
              <th>Edit / Delete</th>      
            </tr>
          </thead>
          <tbody>
            {this.exerciseList()}
          </tbody>
        </table>
      </div>
    )
  }
}