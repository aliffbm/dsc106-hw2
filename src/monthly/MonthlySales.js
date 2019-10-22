import React, {Component} from 'react';
import {Link, Switch, Route} from 'react-router-dom';
//import TotalSalesComponent from './total/TotalSalesComponent';
//import RegionSalesComponent from './region/RegionSales'
import HighCharts from 'highcharts';
import Chart from '../chart/Chart'
import monthlyTotal from '../data/monthly_total.json';
import monthlySales from '../data/monthly_sales.json';
import monthlyTable from '../data/monthly_table.json';
import LineGraph from '../chart/LineGraph';


function regionComponent() {
    return <h1>This is regionComponent</h1>
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
      this.series = [];
      for(let i = 0; i < this.state.names.length; i++) {
        let name = this.state.names[i];
        this.state.data[name] = this.state.data[name].map((num)=>{
            return parseInt(num)
        })
        this.series.push({
            name: name,
            data: this.state.data[name]
        })
    }

      this.title = { all: {
          text: 'Total Monthly Sales (Stores Aggregated) from 2016 - 2019'  
        },
        region: {
          text: 'Total Monthly Sales (Stores Aggregated) from 2016 - 2019'
        }
         
      };
      this.subtitle = {
          text: ''
      };
      this.xAxis = {
          categories: this.state.categories
      };
      this.yAxis = {
        title: {
          text: '# of Students'
        },
        plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
        }]
      };  
      this.tooltip = {
          valueSuffix: '\xB0C'    // /xB0C is basically degrees
        }
      this.legend = {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
      };

      let ser2 = [];
      let n = Object.keys(monthlyTable);
      let d = monthlyTable;
      n.shift();
      for(let i = 0; i < n.length; i++) {
        let na = n[i];
        d[na] = d[na].map((num)=>{
            return parseInt(num)
        })
        ser2.push({
            name: na,
            data: d[na]
        })
    }

        this.options = {all: {}, region: {}};
        this.options.all.title = this.title.all;
        this.options.all.subtitle = this.subtitle;
        this.options.all.xAxis = this.xAxis;
        this.options.all.yAxis = this.yAxis;
        this.options.all.tooltip = this.tooltip;
        this.options.all.legend = this.legend;
        this.options.all.series = this.series;

        this.options.region.title = this.title.region;
        this.options.region.subtitle = this.subtitle;
        this.options.region.xAxis = this.xAxis;
        this.options.region.yAxis = this.yAxis;
        this.options.region.tooltip = this.tooltip;
        this.options.region.legend = this.legend;
        this.options.region.series = ser2;

        this.state.options = this.options.all
  
    }

    componentWillMount() {

    }

    reset(options) {
      console.log("adfadoptions", options)
      this.instance = HighCharts.chart('theChart', options)
    }

    update(options){
      console.log("options", options)
    }

    clickedAll() {
    
      this.setState({
        type: "all",
        names: this.mTotalkeys,
        data: monthlyTotal,
        categories: monthlyTotal["Month, Year"],
        options: this.options.all
      }, ()=> {this.instance = HighCharts.chart('theChart', this.state.options)})
      
    }

    clickedRegion() {
      this.setState({
        type: "by region",
        names: this.mTablekeys,
        data: monthlyTable,
        categories: monthlyTable["Month, Year"],
        options: this.options.region
      }, ()=>{this.instance = HighCharts.chart('theChart', this.state.options)})
    }
    render() {    
      console.log("re", this.state)
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
                        <Route path="/monthly-sales/all" render={()=><LineGraph options={this.state.options}></LineGraph>}></Route>
                        <Route path="/monthly-sales/byregion" render={()=><LineGraph options={this.state.options}></LineGraph>}></Route>
                    </Switch>
                </main>
            </div>
        )
    }
}

export default MonthlySales;