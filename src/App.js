import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import AddRetails from "./retails/AddRetails";
import { Component } from 'react';


class App extends Component {

  render() {


    return (

      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
