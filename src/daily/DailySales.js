import React, {Component} from 'react';
import {Link, Switch, Route} from 'react-router-dom';
//import TotalSalesComponent from './total/TotalSalesComponent';
//import RegionSalesComponent from './region/RegionSales'
import {HighCharts} from 'highcharts';
import Chart from '../chart/Chart'

function totalComponent() {
    return <h1>This is totalComponent</h1>
}

function regionComponent() {
    return <h1>This is regionComponent</h1>
}
class DailySales extends Component {
    
    options = {
        chart: {
          type: "bar"// this.props.type
        },
        title: {
          text: "Bar Chart" // this.props.title
        },
        series: [
          {
            data: [1, 3, 4, 10, 9]
          }
        ]
      };

    render() {
        return (
            <div>
              <h6>Select All to analysis of aggregated sales of all regions for each day</h6>
                <nav className="nav justify-content-center">
                        <Link className="nav-link" to="/daily-sales/all">All</Link>
                        <Link  className="nav-link" to="/daily-sales/byregion">Region</Link>
                </nav> 
                <main>
                    <Switch>
                        <Route path="/daily-sales/all" render={()=><Chart options={this.options}/>}></Route>
                        <Route path="/daily-sales/byregion" component={regionComponent}></Route>
                    </Switch>
                </main>
            </div>
        )
    }
}

export default DailySales;