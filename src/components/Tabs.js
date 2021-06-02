import React, { Component } from 'react'
import Table1 from './Table1'
import Table2 from './Table2'
import Table3 from './Table3'
import Table4 from './Table4'

class Tabs extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            error: null,
           isLoaded: false,
           items : [],
           order: '',
            name: '',
            year1: '',
            year2: '',
            category: ''
            
        }
        this.updateState = this.updateState.bind(this);
        this.updateState2 = this.updateState2.bind(this);
        this.updateState3 = this.updateState3.bind(this);
        this.updateState4 = this.updateState4.bind(this);
        
    }

    componentDidMount() {
        fetch("prize.json")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.prizes,
                
              });
              
            },
           
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

    updateState(e) {
        this.setState({name: e.target.value});
     }
     updateState2(e) {
        this.setState({year: e.target.value});
     }
     updateState3(e) {
         
        let nam = e.target.name;
        let val = e.target.value;
        this.setState({[nam]: val});

     }
     updateState4(e) {
         
      let nam = e.target.name;
      let val = e.target.value;
      this.setState({[nam]: val});

   }
     
    
    render() {
        const { error, isLoaded } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
         
          
          
        return (
            <div>

<div>
            <ul className="nav nav-tabs nav-pills nav-justified">
    <li className="active"><a data-toggle="tab" href="#home">Name</a></li>
    <li><a data-toggle="tab" href="#menu1">Year</a></li>
    <li><a data-toggle="tab" href="#menu2">Year & Category</a></li>
    <li><a data-toggle="tab" href="#menu3">Sort Alphabetically</a></li>
  </ul>
  
  <div className="tab-content">

    <div id="home" className="tab-pane fade in active">
      <h3 style={{textAlign: 'center'}}>Enter  Nobel prize winner name</h3>
    <div style={{textAlign: 'center'}}>
      <input type = "text" value = {this.state.name} 
               onChange = {this.updateState} />
            
       </div>

       <Table1  items2={this.state.items} name={this.state.name} />
         
    </div>


    <div id="menu1" className="tab-pane fade">
    <h3 style={{textAlign: 'center'}}>Enter Year</h3>
    <div style={{textAlign: 'center'}}>
      <input type = "text" value = {this.state.year} 
               onChange = {this.updateState2} />
            
       </div>

       <Table2  items2={this.state.items} year={this.state.year} />


    </div>

    <div id="menu2" className="tab-pane fade">


        <div className="col-md-6">
        <div className="form-group">
        <h3>Enter Year</h3>
        <input type = "text" name="year2" className="form-control" value = {this.state.year2} 
               onChange = {this.updateState3} />
               </div>
        </div>

        <div className="col-md-6">
        <div className="form-group">
        <h3>Enter Category</h3>
        <input type = "text" name="category" className="form-control" value = {this.state.category} 
               onChange = {this.updateState3} />
               </div>
        </div>


        <Table3  items2={this.state.items} year={this.state.year2} category={this.state.category} />




      
    </div>


    <div id="menu3" className="tab-pane fade">
      <br />
      <h3 style={{textAlign: 'center'}}>

          Choose the order

      </h3>
      <br />
      <div onChange={this.updateState4} className="inputField">

            <input className="radio-input" type="radio" name="order" value="Ascending" />
            <label className="radio-label r1" >Ascending</label>
            <input className="radio-input" type="radio" name="order" value="Descending" />
            <label className="radio-label">Descending</label>




      </div>

 
        
        <Table4 items2={this.state.items} order={this.state.order} />
      
    </div>





  </div>
  
        </div>
                












            </div>
        )
    }
  }
}

export default Tabs
