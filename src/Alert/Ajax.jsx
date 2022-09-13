import React, { Component } from "react";
import Swal from "sweetalert2";

import { myFunc } from "./Webhook/Webhook";



export default class AlertAjax extends Component {
  constructor() {
    super();
    this.HandleClick = this.HandleClick.bind(this);
  }

  HandleClick() {
    const {value: discordID } = Swal.fire({
      ...this.props,
      closeOnConfirm: false,
      closeOnCancel: false,
      preConfirm: (value) => {
        if(!value) Swal.showValidationMessage('Write something!!')
      }
    }).then(function(isConfirm){
      if(isConfirm){
        Swal.fire('Reported user.')
        myFunc()
      }
    })
    
  
    
    
  }

  

  render() {
    return (
      <div>
        <button class="btn btn-info" onClick={this.HandleClick}>
          Show Ajax Alert
        </button>
      </div>
    );
  }
}

