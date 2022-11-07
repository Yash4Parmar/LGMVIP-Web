import Card from './components/card';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user_data: [],
      loading: true
    }
    this.displayUsers = this.displayUsers.bind(this)
  }

  displayUsers() {

    const url = "https://reqres.in/api/users?page=1";
    fetch(url)
      .then(response => response.json())
      .then((userData) => {
        this.setState({
          user_data: userData.data,
          loading: false
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render() {
    return (
      <>
        <nav className="navbar bg-dark">
          <form className="container-fluid justify-content-start">
            <button className="btn btn-outline-success me-2" type="button" onClick={this.displayUsers} users={this.state.user_data}>Get Users</button>
          </form>
        </nav>

        <Card users={this.state.user_data} />
      </>
    )
  }
}

export default App;
