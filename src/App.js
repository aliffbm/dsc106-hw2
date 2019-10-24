import React, {Component} from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import './App.css';
import MonthlySales from './monthly/MonthlySales'
import DailySales from './daily/DailySales';
import img from './mcd.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="p-3 sheet">
        <div className="">
              <img src={img} width="200" style={{ }}/>
          </div>
          <div className="p-3 monthly-sales">
          <h6>Analyzing the influence of Burger King's Impossible Burger</h6>
        </div>
          <nav style={{position: "relative"}} className="nav navbar-light bg-light justify-content-center">
            <button className="btn btn-info m-2"><Link className="nav-item nav-link text-light" to="/monthly-sales/all">Monthly Sales</Link></button>
            <span style={{display: "inline-block", margin: "2em"}}>OR</span>
            <button className="btn btn-info m-2"><Link className="nav-item nav-link text-light" to="/daily-sales/all">Daily Sales</Link></button>
          </nav>
          <main className="p-3">
            <Switch>
              <Route path="/monthly-sales/" component={MonthlySales}></Route>
              <Route path="/daily-sales/" component={DailySales}></Route>
            </Switch> 
          </main>
        </div>
      </div>
    );
  }
}

export default App;
