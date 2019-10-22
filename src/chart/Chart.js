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
        this.state = {
            options: this.props.options,
            type: null
        }
    }
   
    componentDidMount() {
        this.instance = HighCharts.chart('theChart', this.state.options)
    }
    checkState(props) {
        if(props.type != this.state.type){
            this.setState({
                options: props.options,
                type: props.type
            }, ()=>{
                this.instance = HighCharts.chart('theChart', this.state.options)
            })
        }
    }

    render() {
        this.checkState(this.props)
        return <div><div id="theChart"></div></div>
    }
}

export default Chart;