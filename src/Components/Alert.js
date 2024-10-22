import React from 'react'

export default function Alert(props) {
  const capatial=(msg)=>{
    const lower = msg.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
  }
  return (
    props.alert && <div className={`alert alert-${props.alert.Type} alert-dismissible fade show container my-2`} role="alert">
        <strong>{capatial(props.alert.Type) }</strong>: {props.alert.msg}
  
</div>
  )
}
