import React, {Component} from 'react';
import Chart from './Chart'

function LineGraphAll(props) {
    let data = props.data;
    let names = props.names;
    let categories = props.categories;
    let series = [];
    console.log("adfm  again",data)
    console.log(names)
    for(let i = 0; i < names.length; i++) {
        let name = names[i];
        series.push({
            name: name,
            data: data[name]
        })
    }
    
        // Configuration about the plot
    var title = {
          text: 'Total Monthly Sales (Stores Aggregated) from 2016 - 2019'   
      };
      var subtitle = {
          text: ''
      };
      var xAxis = {
          categories: props.categories
      };
      var yAxis = {
          title: {
            text: '# of Students'
          },
          plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
          }]
      };  
      var tooltip = {
          valueSuffix: '\xB0C'    // /xB0C is basically degrees
      }
    var legend = {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
    };
    let json = {};
    
    json.title = title;
    json.subtitle = subtitle;
    json.xAxis = xAxis;
    json.yAxis = yAxis;
    json.tooltip = tooltip;
    json.legend = legend;
    json.series = series;

return (<div>
            <Chart options={json}></Chart>
            <h1>Inflection point around October</h1>
            <p>Notice there was an inflection point around October when  </p>
        </div>);
}

export default LineGraphAll;