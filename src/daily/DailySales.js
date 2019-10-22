import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
//import TotalSalesComponent from './total/TotalSalesComponent';
//import RegionSalesComponent from './region/RegionSales'
import HighCharts from 'highcharts';
import Chart from '../chart/Chart'
import dailyTotal from '../data/daily_total.json';
import dailySales from '../data/daily_sales.json';
import dailyTable from '../data/daily_table.json';
import LineGraph from '../chart/LineGraph';

class DailySales extends Component {
  constructor(props) {
    super(props);
    this.dTotalkeys = Object.keys(dailyTotal); //default all\
    this.dTablekeys = Object.keys(dailyTable);
    this.dTotalkeys.shift();
    this.dTotalkeys.shift();
    this.dTablekeys.shift();
    this.dTablekeys.shift();
   
    this.state = {
      type: "all",
      names: this.dTotalkeys,
      data: dailyTotal,
      categories: dailyTotal["Day"].map((el)=> (new Date(el)).toDateString())
    }

    console.log("DAKEYS", this.dTotalkeys)

    this.clickedAll = this.clickedAll.bind(this);
    this.clickedRegion = this.clickedRegion.bind(this);
    this.reset = this.reset.bind(this);
    this.update = this.update.bind(this);
   
  }

  componentWillMount() {

  }

  reset(options) {
    console.log("adfadoptions", options)
    this.instance = HighCharts.chart('theChart', options)
  }

  update(options) {
    console.log("options", options)
  }

  clickedAll() {
    this.setState({
      type: "all",
      names: this.dTotalkeys,
      data: dailyTotal,
      categories: dailyTotal["Day"]
    })

  }

  clickedRegion() {
    this.setState({
      type: "by region",
      names: this.dTablekeys,
      data: dailyTable,
      categories: dailyTable["Day"]
    })
  }
  render() {

    console.log("rerendering???", this.state)
    return (
      <div>
        <div className="p-3">
          <h6>Choose <strong>All</strong> for total of regions for each month or <strong>By Region</strong> to see each</h6>
        </div>
        <nav className="nav justify-content-center">
          <button className="btn btn-info m-2" onClick={this.clickedAll}><Link className="nav-link text-light" to="/daily-sales/all">All</Link></button>
          <button className="btn btn-info m-2" onClick={this.clickedRegion}><Link className="nav-link text-light" to="/daily-sales/byregion">By Region</Link></button>
        </nav>
        <main>
          <Switch>
            <Route path="/daily-sales/all" render={() => <LineGraph names={this.state.names} data={this.state.data} categories={this.state.categories} type={this.state.type}></LineGraph>}></Route>
            <Route path="/daily-sales/byregion" render={() => <LineGraph names={this.state.names} data={this.state.data} categories={this.state.categories} type={this.state.type}></LineGraph>}></Route>
          </Switch>
        </main>
      </div>
    )
  }
}

export default DailySales;