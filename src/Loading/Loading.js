import React, { Component } from 'react'
import "./loading.css"
import {BounceLoader,BarLoader,BeatLoader} from "react-spinners"

class Loading extends Component {
    render() {
        return (
            <div>
               <BounceLoader loading/>
     <BarLoader loading/>
     <BeatLoader loading/>  
            </div>
        )
    }
}


 
export default Loading