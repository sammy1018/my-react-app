import React, { Component } from 'react';
import Header from './Header.js'
import ItemPanel from './ItemPanel'
import logo from './logo.svg';
import './App.css';
import './style.css'

var rawData = [{ info: {descrip:'Description', sex: 'Male', age: 20, name: 'David', id: 'Professor'}},
    { info: {descrip:'Description', sex: 'Female', age: 21, name: 'Serena', id: 'Student'}},
    { info: {descrip:'Description', sex: 'Female', age: 22, name: 'Nana', id: 'Student'}},
    { info: {descrip:'Description', sex: 'Female', age: 24, name: 'Lily', id: 'Internship'}},
    { info: {descrip:'Description', sex: 'Female', age: 23, name: 'Ted', id: 'Internship'}},
    { info: {descrip:'Description', sex: 'Male', age: 22, name: 'Barney', id: 'Student'}},
    { info: {descrip:'Description', sex: 'Male', age: 24, name: 'John', id: 'Professor'}},
    { info: {descrip:'Description', sex: 'Male', age: 35, name: 'March', id: 'Lecture'}},
    { info: {descrip:'Description', sex: 'Male', age: 42, name: 'Just', id: 'Student'}},
    { info: {descrip:'Description', sex: 'Male', age: 50, name: 'Sean', id: 'Internship'}},
    { info: {descrip:'Description', sex: 'Male', age: 60, name: 'Levis', id: 'Internship'}}];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React_demo for Personnel Information System</h2>
        </div>
          <div>
              <Header/>
              <ItemPanel items={rawData} />
          </div>
      </div>
    );
  }
}

export default App;
