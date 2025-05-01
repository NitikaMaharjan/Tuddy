import React from 'react';

export default function Alert(props) {

    const handleStatus = (text) =>{
      var text = text.replace(/danger/g, "failed");
      return text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();

    }

  return (
    <div style={{height: '24px'}}>
      {props.alert 
      && 
      <div class={`alert alert-${props.alert.status} alert-dismissible fade show`} role="alert">
          <strong>{handleStatus(props.alert.status)}</strong> : {props.alert.msg}
      </div>}
    </div>
  )
}
