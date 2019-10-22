import React, {Component} from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import './App.css';
import MonthlySales from './monthly/MonthlySales'
import DailySales from './daily/DailySales';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="p-3">
          <h6>Select below whether you'd like to see an analysis on Monthly or Daily Sales</h6>
        </div>
        <nav className="nav navbar-light bg-light justify-content-center">
          <button className="btn btn-info m-2"><Link className="nav-item nav-link text-light" to="/monthly-sales/all">Monthly Sales</Link></button>
          <button className="btn btn-info m-2"><Link className="nav-item nav-link text-light" to="/daily-sales/all">Daily Sales</Link></button>
        </nav>
        <main>
          <Switch>
            <Route path="/monthly-sales/" component={MonthlySales}></Route>
            <Route path="/daily-sales/" component={DailySales}></Route>
          </Switch> 
        </main>
      </div>
    );
  }
}

export default App;
