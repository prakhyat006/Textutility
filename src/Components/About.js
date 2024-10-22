import React ,{useState, useSyncExternalStore}from 'react'


export default function About(props) {
  const[mystyle,setmystyle]=useState({
    color:"white",
    backgroundColor:"Black",
    border:"1px solid white"
  }
)
const[btntext,mybtntext]=useState("Enable light mode")
const onClickef=()=>{
if(mystyle.color==="white"){
  setmystyle({
    color:"black",
    backgroundColor:"white"
  })
  mybtntext("Enable Dark mode")
}
else{
  setmystyle({
    color:"white",
    backgroundColor:"Black",
    border:"1px solid white"
  })
  mybtntext("Enable Light mode")
}
}
  return (

    <div className="accordion container my-2 " id="accordionExample" style = {props.mode}>
        <h1 style={{Color:props.mode==="light"?"black":"white"}}>About Us</h1>
  <div className="accordion-item" style={{Color:props.mode==="light"?"black":"white"}}>
    <h2 className="accordion-header" >
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"style={mystyle} >
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" >
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle}>
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mystyle}>
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <button type="button" className="btn btn-dark my-2" onClick={onClickef}>{btntext}</button>
</div>
  )
}
