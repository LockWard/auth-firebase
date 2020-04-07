import React, { Component } from 'react';
import fire from './Fire';
import login from './Login';
import home from './Home';

import './App.css';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      user:{},

    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      //console.log(user);
      if (user) {
        this.setState({user});
        //localStorage.setItem('user', user.id);      
      } else {
        this.setState({user: null});
        //localStorage.removeItem('user');
      }
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.user ? (<home />) : (<login />)}
      </div>
    );
  }
}


export default App;
