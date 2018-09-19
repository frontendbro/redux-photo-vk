import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    const {name, surname, age} = this.props.user
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Мой топ фото</h1>
        </header>
        <p className="App-intro">
          Привет из App, {name} {surname}!
        </p>
        <p>Тебе уже {age}?</p>
      </div>
    )
  }
}

/* Приклеиваем данные из store */
const mapStateToProps = store => {
  console.log(store);
  return {
    user: store.user
  }
}

export default connect(mapStateToProps)(App);
