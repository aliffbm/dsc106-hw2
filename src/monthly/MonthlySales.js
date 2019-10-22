import React, {Component} from 'react';
import {Link, Switch, Route} from 'react-router-dom';
//import TotalSalesComponent from './total/TotalSalesComponent';
//import RegionSalesComponent from './region/RegionSales'
import {HighCharts} from 'highcharts';
import Chart from '../chart/Chart'
import monthlyTotal from '../data/monthly_total.json';
import monthlySales from '../data/monthly_sales.json';
import monthlyTable from '../data/monthly_table.json';
import LineGraph from '../chart/LineGraph';


function regionComponent() {
    return <h1>This is regionComponent</h1>
}
class MainSales extends Component {
    constructor(props) {
      super(props);
      this.state = {
        type: "all"
      }
      this.clickedAll = this.clickedAll.bind(this);
      this.clickedRegion = this.clickedRegion.bind(this);
      this.data = null;
      console.log("adfadf again")
      if(this.state.type== "by region"){
        let keys = Object.keys(monthlyTable);
        keys.shift()
        this.names = keys;
        this.data = monthlyTable;
        this.categories = this.data["Month, Year"];

        
      } else {
        let keys = Object.keys(monthlyTotal);
        keys.shift();
        this.names = keys;
        this.data = monthlyTotal;
        this.categories = monthlyTotal["Month, Year"]
        
      }
      
    }

    shouldComponentUpdate(nextProps) {
      console.log("next", this.state)
      if(this.state.type== "by region"){
        let keys = Object.keys(monthlyTable);
        keys.shift()
        this.names = keys;
        this.data = monthlyTable;
        this.categories = this.data["Month, Year"];

        
      } else {
        let keys = Object.keys(monthlyTotal);
        keys.shift();
        this.names = keys;
        this.data = monthlyTotal;
        this.categories = monthlyTotal["Month, Year"]
        
      }
      return true;
    }

    clickedAll() {
      this.setState({
        type: "all"
      })
    }

    clickedRegion() {
      this.setState({
        type: "by region"
      })
    }
  
    render() {
        return (
            <div>
              <div className="p-3">
                <h6>Choose <strong>All</strong> for total of regions for each month or <strong>By Region</strong> to see each</h6>
              </div>
                <nav className="nav justify-content-center">

                        <button className="btn btn-info m-2" onClick={this.clickedAll}><Link className="nav-link text-light" to="/monthly-sales/all">All</Link></button>
                        <button className="btn btn-info m-2" onClick={this.clickedRegion}><Link  className="nav-link text-light" to="/monthly-sales/byregion">By Region</Link></button>
                </nav> 
                <main>
                    <Switch>
                        <Route path="/monthly-sales/all" render={()=><LineGraph names={this.names} data={this.data} categories={this.categories}></LineGraph>}></Route>
                        <Route path="/monthly-sales/byregion" render={()=><LineGraph names={this.names} data={this.data} categories={this.categories}></LineGraph>}></Route>
                    </Switch>
                </main>
            </div>
        )
    }
}

export default MainSales;