import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import { Component } from 'react';
import logo from './logo.svg'


class App extends Component {

  render() {

    return (
      <>
        <Home />
        <img src={logo} className="App-logo" alt="logo" class="justify-content-center" />
      </>
    );
  }
}

export default App;
