import React from 'react'
import Logo from '../images/Logo.png'
import {useState} from 'react'
import Display from './Display'

import '../index.css'
function Home() {
    const [name,setName]=useState('');
    const [display,setDisplay]=useState(false);

   const onChangeHandler=(e)=>{
            setName(e.target.value)
    }

    const handleEnter=(e)=>{
          if(e.key=='Enter'){
               setDisplay(true);
          }
    }


    return (<>
           
      { display===false?
      <>
        <div className="logo"> 
              <img src={Logo} width="100px" alt="Logo"/>
        </div>

        <div className="input-body">
               <div className="subtitle is-1 isheadline">Find your <p className="title is-1 istitle">Coderex</p></div>
              <input autoFocus value={name} onChange={onChangeHandler} onKeyDown={handleEnter} className="input islarge" type="text" placeholder="Enter Codeforces Handle"></input>
        </div> 
        </>
        : <Display name={name}/>
       
        }
       
        </>
    )
}

export default Home
