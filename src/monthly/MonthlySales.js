import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
//import TotalSalesComponent from './total/TotalSalesComponent';
//import RegionSalesComponent from './region/RegionSales'
import HighCharts from 'highcharts';
import Chart from '../chart/Chart'
import monthlyTotal from '../data/monthly_total.json';
import monthlySales from '../data/monthly_sales.json';
import monthlyTable from '../data/monthly_table.json';
import LineGraph from '../chart/LineGraph';

import './MonthlySales.css'

function Description(props) {
  let str = "";
  console.log("propssdd", props)
  if(props.type=='all'){
    str = "Notice there was an inflection point around October when Burger King came out with their impossible burger. Although the change is obvious on" 
    + " an aggregated the view, it is not so obvious looking at the trend in time on the individual regions. This is a general pattern of little noticeable variation among respective groups as well. You can see more of this by viewing/clicking By Region" 
    
  }else {
    str = "Here we can see, more, that trends almost look steady. There are slight variations on all three categories (HM having a little bit more noticeable change), but for the most part they seem to not deviate to much from their norm." 
    + " The story changes in aggregation. When we look at totals (under All), we can obvious see a change in trend downward during the time of release. An explanation for this difference could be because the Impossible burger is a vegan patty burger. Which means no meat " 
    + " is eaten, including chicken and fish. So in general, if people choose an alternative eating style from meat eating to non meat eating, we could possibly expect to see changes amongst all Mcdonalds meat products."
  }
  let template = ``
  return (<div className="container"><h4>Inflection point around October</h4><p>{str}</p></div>);
}

class MonthlySales extends Component {
  constructor(props) {
    super(props);
    this.mTotalkeys = Object.keys(monthlyTotal); //default all\
    this.mTablekeys = Object.keys(monthlyTable);
    this.mTotalkeys.shift();
    this.mTablekeys.shift();
    this.state = {
      type: "all",
      names: this.mTotalkeys,
      data: monthlyTotal,
      categories: monthlyTotal["Month, Year"],
      options: {},
    }

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
      names: this.mTotalkeys,
      data: monthlyTotal,
      categories: monthlyTotal["Month, Year"]
    })

  }

  clickedRegion() {
    this.setState({
      type: "by region",
      names: this.mTablekeys,
      data: monthlyTable,
      categories: monthlyTable["Month, Year"]
    })
  }
  render() {
    return (
      <div>
        
        
        <main>
          <div className="row p-3">
            <div className="col-md-4 brief">
              <Description type={this.state.type}/>
            </div>
            <div className="col-md-8">
              <Switch>
                <Route path="/monthly-sales/all" render={() => <LineGraph names={this.state.names} data={this.state.data} categories={this.state.categories} type={this.state.type}></LineGraph>}></Route>
                <Route path="/monthly-sales/byregion" render={() => <LineGraph names={this.state.names} data={this.state.data} categories={this.state.categories} type={this.state.type}></LineGraph>}></Route>
              </Switch>
              <nav className="nav justify-content-center">
                <button className="btn btn-info m-2" onClick={this.clickedAll}><Link className="nav-link text-light" to="/monthly-sales/all">All</Link></button>
                <button className="btn btn-info m-2" onClick={this.clickedRegion}><Link className="nav-link text-light" to="/monthly-sales/byregion">By Region</Link></button>
              </nav>
            </div>
          

          </div>
          
          
        </main>
        
        <div>
            
            {/* <Description type={this.state.type}/> */}
        </div>
      </div>
    )
  }
}

export default MonthlySales;