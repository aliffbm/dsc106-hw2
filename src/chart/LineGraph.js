import React, {Component} from 'react';
import Chart from './Chart'

import HighCharts from 'highcharts';


class LineGraphAll extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {

      return (<div>
            <Chart options={this.props.options}></Chart>
            <h1>Inflection point around October</h1>
            <p>Notice there was an inflection point around October when  </p>
        </div>);
    }
 
}

export default LineGraphAll;