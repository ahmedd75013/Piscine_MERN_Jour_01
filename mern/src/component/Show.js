import React, { Component } from 'react';

import axios from 'axios';

const Exercise = props => (
  <tr>
  
    <td>{props.ex.description}</td>
    <td>{props.ex.titre}</td>
    
  </tr>
)

export default class show extends Component {
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