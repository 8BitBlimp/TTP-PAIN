import * as React from "react";

import './App.css'
import logo from './logo.svg'

import AlertError from "./Alert/Error";
import AlertWarning from "./Alert/Warning";
import AlertSuccess from "./Alert/Success";
import AlertTimer from "./Alert/Timer";
import AlertAjax from "./Alert/Ajax";

/* Data sets
const ErrorData = {
    title: "Oops..",
    type: "error",
    text: "Something went wrong!",
    footer: "<a href>Why do I have this issue?</a>"
  };
  
  const WarningData = {
    title: "Are you sure?",
    type: "warning",
    text: "You won't be able to revert this!",
    footer: ""
  };
  
  const SuccessData = {
    title: "Success",
    type: "success",
    text: "Your work has been saved.",
    footer: ""
  };
  
  const TimerData = {
    title: "Auto close alert!",
    html: "I will close in 3 seconds.",
    timer: 3000,
    showConfirmButton: false
  };
  */
  const AjaxData = {
    title: 'Report user.',  
    type: 'info',  
    text: 'Enter Discord ID or Discord username with tag.',
    input: "text",
    inputValue: "Discord ID.",
    inputAttributes: {
        autocapitalize: "off"
    },
    showCancelButton: true,
    showConfirmButton: "Submit",
    showLoaderOnConfirm: true
  };

function App() {
    return (

        <div className="App">
            <header className="App-header">
                <h2>
                    Tax The Poor
                    <img src={logo} className="App-logo" alt="logo"></img>
                    <hr className="App-divider"></hr>
                </h2>
                <br />
                {/*   
                <AlertError {...ErrorData} />
                <br />
                <AlertWarning {...WarningData} />
                <br />
                <AlertSuccess {...SuccessData} />
                <br />
                <AlertTimer {...TimerData} />
                <br />
                 */}
                
                <div className="App-button">
                  <p>Report user here.</p>
                  <AlertAjax {...AjaxData} />
                </div>
                
            </header>
        </div>
        
      );
}

export default App;