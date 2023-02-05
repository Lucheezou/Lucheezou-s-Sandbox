import React from 'react'
import Draggable from 'react-draggable'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"

import { DraggableCore } from 'react-draggable'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useReducer } from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


function App (){
const defaulttodo = [{ id: 1, task: "Sweep", completed:false} ];




return(
<>
{
defaulttodo.map((item) => {return(<Draggable handle='#head'><div id='1' className="box"><h2 id="head" className="head">Task : {item.id}</h2>

<p>{item.task} 

  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />


</p></div></Draggable>)})}
</>
)
}


export default App
