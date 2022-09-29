import React, { Component } from "react";
import Swal from "sweetalert2";

import { myFunc } from "./Webhook/Webhook";




export default class AlertAjax extends Component {
  constructor() {
    super();
    this.HandleClick = this.HandleClick.bind(this);
  }

  HandleClick() {
    let {result: pain} = Swal.fire({
      ...this.props,
      closeOnConfirm: false,
      closeOnCancel: true,
      preConfirm: (value) => {
        if(!value || !Number.isInteger(+value)) Swal.showValidationMessage('Please enter a Discord ID');
      }
    }).then((pain) =>{
      if(pain.value){
        Swal.fire(`Reported user with ID: ${pain.value}.`)
        myFunc(pain.value)
        
      } else Swal.close()
    })
    
  
    
    
  }

  

  render() {
    return (
      <div>
        <button class="btn btn-info" onClick={this.HandleClick}>
          Report User
        </button>
      </div>
    );
  }
}
