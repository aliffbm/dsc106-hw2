import React, {Component} from 'react';
import {Link, Switch, Route} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import MonthlySales from './monthly/MonthlySales'
import DailySales from './daily/DailySales';
function randComponent() {
  return <h1>Some random component</h1>;
}

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <div className="p-3">
          <h6>Select below whether you'd like to see an analysis on Monthly or Daily Sales</h6>
        </div>
        <nav className="nav navbar-light bg-light justify-content-center">
          <button className="btn btn-info m-2"><Link className="nav-item nav-link text-light" to="/monthly-sales/">Monthly Sales</Link></button>
          <button className="btn btn-info m-2"><Link className="nav-item nav-link text-light" to="/daily-sales/">Daily Sales</Link></button>
        </nav>
        <main>
          
          <Switch>
            <Route path="/monthly-sales/" component={MonthlySales}></Route>
            <Route path="/daily-sales/" component={DailySales}></Route>
          </Switch> 
        </main>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Awesome, this is my page
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
