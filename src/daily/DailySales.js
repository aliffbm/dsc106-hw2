import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import HighCharts from 'highcharts';
import dailyTotal from '../data/daily_total.json';
import dailyTable from '../data/daily_table.json';
import LineGraph from '../chart/LineGraph';

function Description(props) {
  let str = "";
  if(props.type=='all'){
    str = "This information doesn't seem to tell us much related to October event. There does seem to be some volitility. Perhaps people are settling on a new years resolution." 
    + "Otherwise, there was a small net negative by month end."
    
  }else {
    str = "You can see here that trends were pretty steady. In general, red meat, HM (Hamburgers), still tends to sell higher than Chickent Fillet and Fish Fillet."
  }
  let template = ``
  return (<div class="container"><h4>Inflection point around October</h4><p>{str}</p></div>);
}

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
        <main>
          <div className="row p-3">
            <div className="col-md-4 brief">
              <Description type={this.state.type}/>
            </div>
            <div className="col-md-8">
              <Switch>
                <Route path="/daily-sales/all" render={() => <LineGraph names={this.state.names} data={this.state.data} categories={this.state.categories} type={this.state.type}></LineGraph>}></Route>
                <Route path="/daily-sales/byregion" render={() => <LineGraph names={this.state.names} data={this.state.data} categories={this.state.categories} type={this.state.type}></LineGraph>}></Route>
              </Switch>
              <nav className="nav justify-content-center">
                <button className="btn btn-info m-2" onClick={this.clickedAll}><Link className="nav-link text-light" to="/daily-sales/all">All</Link></button>
                <button className="btn btn-info m-2" onClick={this.clickedRegion}><Link className="nav-link text-light" to="/daily-sales/byregion">By Region</Link></button>
              </nav>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default DailySales;