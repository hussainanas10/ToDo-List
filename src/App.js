import React, { Component } from 'react'

//css files
import './App.css'
import './bootstrap.css'
import './bootstrap.min.css'
import ListItem from './ListItem'

// logo used 
import Todologo from './logo.png'
import mrbean from './mrbean.jfif'

//fontAwesome
import {library} from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
library.add(faTrash)


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       currentValue:{
         key:'',
         text:''
       },
       list:[]

    }
    
    this.handleInput=this.handleInput.bind(this);
    this.addItem=this.addItem.bind(this);
    this.delete=this.delete.bind(this);
    this.updateList=this.updateList.bind(this);
    }
     handleInput(e){
      this.setState({
        currentValue:{
          key:Date.now(),
          text:e.target.value
        }
      })
    }
      addItem(e){
        // e.preventDefault();
        const newValue= this.state.currentValue;
        console.log(newValue)
        if(newValue.text!==''){
          const newItem=[...this.state.list,newValue];
         this.setState({
          list:newItem,
          currentValue:{
            key:'',
            text:''
          }
         })
        }
      }

     delete(key){
       console.log("delete "+ key)
       const filterlist= this.state.list.filter(lists=>lists.key!==key);
       this.setState({
         list:filterlist
         
        })      
     }

     updateList(text,key){
       console.log("list "+ this.state.list)
      const lists=this.state.list;
      lists.map(list=>{
        if(list.key === key){
          list.text=text;
        }
      })
      this.setState({
        list:lists
      })
     }

  render() {
    return (
      <div className="App" >
        <div className="text-center text-white" id="heading">
          <h1 ><img src={mrbean}/> Todo List App</h1>
        </div>
       
        <div className="form-group text-white bg-secondary text-center" id="panel">
          <form  >
          
            <h2><img src={Todologo}/>Prepare List</h2>
      
{/* Input field to enter text */}
            <input
             className="form-control-lg text-white " type="text"
             placeholder="Enter Text"
             id="inputText"
             value={this.state.currentValue.text}
             onChange={this.handleInput} >
            
             </input>
          
{/* Add button is used to add the items in the list we are calling addItem function */}
            <button type="button"
            onClick={this.addItem}
            className=" btn btn-primary btn-lg ">Add</button>
        
          </form>

          <ListItem 
          list={this.state.list}
          delete={this.delete}
          updateList={this.updateList} />   
        
        </div>  
      
      </div>
    )
  }
}

export default App
