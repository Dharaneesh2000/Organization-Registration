import { render } from "@testing-library/react";
import React from "react";
 
import './App.css';
import Center from "./Center";
import Top from "./Top";
import Base from "./Main";
import Form from "./Form";

class App extends React.Component {
     render(){
       return(
         <div>
         <Base/>
         </div>
       )
     }
    }
   
export default App;
// export default My;
// export default Next;

 
