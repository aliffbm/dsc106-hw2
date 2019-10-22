import React, {Component} from 'react';
import HighCharts from 'highcharts';
import dailySales from '../data/daily_sales.json';
import dailyTable from '../data/daily_table.json';
import monthlySales from '../data/monthly_sales.json';
import monthlyTable from '../data/daily_table.json';
import funcs from './funcs';

class Chart extends Component {
    instance;
    constructor(props) {
        super(props);
        console.log(dailySales)
    }
   
    componentDidMount() {
        this.instance = HighCharts.chart('theChart', this.props.options)
    }
    render() {
        return <div><div id="theChart"></div></div>
    }
}

export default Chart;