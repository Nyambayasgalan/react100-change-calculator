import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue : ' ',
      amountReceived : ' ',
      changeDue: ' ',

    };
    this.handleAmountDue = this.handleAmountDue.bind(this)
    this.handleAmountReceived = this.handleAmountReceived.bind(this)
    this.calculate = this.calculate.bind(this)
  }
  
  handleAmountDue(event) {
    this.setState({amountDue: event.target.value})

  }

  handleAmountReceived(event) {
    this.setState({amountReceived: event.target.value})
  }

  calculate() {
    let amountDue = (this.state.amountDue);
    let amountReceived = (this.state.amountReceived);
    let result = amountReceived - amountDue;
    console.log(amountDue, amountReceived)
    let changeValue = [20.00, 10.00, 5.00, 1.00, 0.25, 0.10, 0.05, 0.01];
    let storageForChange = [];
     
    //Using IF statement to check if there is change. 
    if (Math.sign(result) == 1) {
    //Repeats through to calculate change fro inputed amount.
      for (var i = 0; i < changeValue.length; i++) {
        let changeAmount = result / changeValue[i];
        result = result % changeValue[i];
        storageForChange.push(changeAmount);
      }
    }

    this.setState(
      {
        changeDue: (amountReceived-amountDue).toFixed(2),
        twenties: Math.floor(storageForChange[0]),
        tens: Math.floor(storageForChange[1]),
        fives: Math.floor(storageForChange[2]),
        dollars: Math.floor(storageForChange[3]),
        quarters: Math.floor(storageForChange[4]),
        dimes: Math.floor(storageForChange[5]),
        nickels: Math.floor(storageForChange[6]),
        pennies: Math.floor(storageForChange[7]), 
      }
    );
  }
  
  render() {
    return (
      <div className='container-sm'>
        
            <div className ='header'>
              <header><h1><font color="white"><strong>Change Calculator</strong></font></h1></header>
              <hr size='3px'></hr>
            </div>
         <div className='panel panel-default'>
             <div className='panel-heading'>Enter Information</div>
              <div className='panel-body'>
                <label className='due'>How much is due?</label>
                <input type='number' value={this.state.amountDue} onChange={this.handleAmountDue}  placeholder='DUE'/>
                <label className='received'>How much was received?</label>
                <input type='number' value={this.state.amountReceived} onChange={this.handleAmountReceived} placeholder='RECEIVED'/>
                
                <button className='btn btn-primary btn-block' name='changeDue' onClick={this.calculate}>Calculate</button>

              </div>
        
              </div>
              <div className='row'></div>
              <div className='col-lg-4'>
              <div className='jumbotron jumbotron-fluid'>Change Due: {this.state.changeDue}</div>

            </div>
            <div className='row'>
             
              <div className='card bg-info text-dark'>
              <div className='card-body'>Twenties: {this.state.twenties}</div>
              </div>
              <div className='card bg-info text-dark'>
              <div className='card-body'>Tens: {this.state.tens}</div>
              </div>
              <div className='card bg-info text-dark'>
              <div className='card-body'>Fives: {this.state.fives}</div>
              </div>
              <div className='card bg-info text-dark'>
              <div className='card-body'>Dollars: {this.state.dollars}</div>
              </div>
              </div>
              <div className='row'>
             
              <div className='card bg-info text-dark'>
              <div className ='card-body'>Quarters: {this.state.quarters}</div>
              </div>
              <div className='card bg-info text-dark'>
              <div className='card-body'>Dimes: {this.state.dimes}</div>
              </div>
              <div className='card bg-info text-dark'>
              <div className='card-body'>Nickels: {this.state.nickels}</div>
              </div>
              <div className='card bg-info text-dark'>
              <div className='card-body'>Pennies: {this.state.pennies}</div>
              </div>
            </div>
         </div>
    );
  }
}
export default App;

