import React, { Component } from "react";
import Swal from "sweetalert2";
import { InferencePriority } from "typescript";

import { myFunc } from "./Webhook/Webhook";


const something = {}

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
        something.id = pain.value
        Swal.fire({
          closeOnConfirm: false,
          closeOnCancel: true,
          type: 'info',
          text: 'Enter a reason for report',
          inputValue: 'Reason',
          input: 'text',
          showCancelButton: true,
          showConfirmButton: "Submit",
          showLoaderOnConfirm: true,
          preConfirm: (value) => {
            if(!value) Swal.showValidationMessage('Please enter a reason.')
          }
        }).then((fuck) => {
          console.log('test1')
          if(fuck.value) {
            Swal.fire({
              showConfirmButton: "Ok",
              showCancelButton: false,
              text: 'Submitted report.',
              type: 'info',
              closeOnConfirm: true,
              showLoaderOnConfirm: true
            })
            something.reason = fuck.value
            console.log('something')
            console.log(something)
            myFunc(something)
          } 
        })
        
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
