import React from 'react'

//css files
import './App.css'
import './bootstrap.css'
import './bootstrap.min.css'

// Importi icon from fontAwesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Flipmove from 'react-flip-move'

function ListItem(props)
{
    const list=props.list;
    const listitem=list.map(lists =>{
        return(
            <div  key={lists.key} id="listed" >
                <p>
                    <input type="text"
                    id={lists.key}
                    value={lists.text}
                    onChange={(e)=>
                        {props.updateList(e.target.value,lists.key)}} />
               
                     
                </p>
                <span>
                    <button type="button"                   
                        onClick={()=>props.delete(lists.key)}>
                        <FontAwesomeIcon className="faicons" icon="trash"/>
                    </button>
                 </span>
               
            </div>)             
    })    
    return(
        <div>
        <Flipmove duration={300} easing="ease-in-out">
        {listitem}
        </Flipmove>              
        </div>)
}

export default ListItem
