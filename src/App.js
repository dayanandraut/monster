import React , {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';


class App extends Component{
 
 constructor(){
   super();
   this.state = {
    heroes: [],
    searchKey: ''
   }
   
 }

 componentDidMount(){
   fetch("https://jsonplaceholder.typicode.com/users")
   .then(response=>response.json())
   .then(users=>this.setState({heroes:users}))
  
 }
 
  render(){
    const{heroes, searchKey} = this.state;
    const filteredHeros = heroes.filter(h=>h.name.toLowerCase().includes(searchKey.toLowerCase()))
    return(     
        <div className="App"> 
        <h1>Legends Summit</h1>
        <SearchBox
        placeholder="search hero"
        handleChange= {   e =>  this.setState({searchKey:e.target.value} )}           
         
        />
      <CardList heroes={filteredHeros}>
     
      </CardList>
     
        </div>
        
      );
  }
    
      
}

export default App;
