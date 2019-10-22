import React, {Component} from 'react';
import Chart from './Chart'

import HighCharts from 'highcharts';

function makeOptions(props, callback) {
    let data = props.data;
    let names = props.names;
    let series = [];

    console.log("MDfadfm porps", props)
    for (let i = 0; i < names.length; i++) {
      let name = names[i];
      // cast to int
      data[name] = data[name].map((num) => {
        return parseInt(num)
      })
      // add element to series
      series.push({
        name: name,
        data: data[name]
      })
    }
    
    let str = props.type == 'all' ? 'Total (Stored Aggregated for each month)' : 'By Region';
    let keys = Object.keys(data);
    let cycle = keys.includes("Weekday") ? "Daily" : "Monthly";

    let title = {
        
        text: `${str} ${cycle} Sales from 2016 - 2019`
    };
    let subtitle = {
      text: ''
    };
    let xAxis = {
      categories: props.categories
    };
    let yAxis = {
      title: {
        text: 'Sales'
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#808080'
      }]
    };
    let tooltip = {
      valuePrefix: '$'    // /xB0C is basically degrees
    }
    let legend = {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      borderWidth: 0
    };

    let options = {};
    options.title = title;
    options.subtitle = subtitle;
    options.xAxis = xAxis;
    options.yAxis = yAxis;
    options.tooltip = tooltip;
    options.legend = legend;
    options.series = series;

    console.log("THIS", options)
    return options;
  }

class LineGraphAll extends Component {
    constructor(props) {
        super(props);

        // testing this out
        this.state = {
            options: makeOptions(this.props), // makeOptions(this.props)
            type: null
        }

        
    }
    checkState(props) {
        if(props.type == this.state.type){

        } else {
            this.setState({
                type: props.type,
                options: makeOptions(props)
            })
        }
    }
    
    render() {
    
      this.checkState(this.props);
      return (<div>
            <Chart options={this.state.options} type={this.state.type}></Chart>
            
        </div>);
    }
 
}

export default LineGraphAll;