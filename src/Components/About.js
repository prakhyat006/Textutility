import React ,{useState, useSyncExternalStore}from 'react'


export default function About(props) {
//   const[mystyle,setmystyle]=useState({
//     color:"white",
//     backgroundColor:"Black",
//     border:"1px solid white"
//   }
// )
let mystyle = {
  color : props.mode==="dark"?"white":"black",
  backgroundColor:props.mode==="dark"?"black":"white",
  // border:props.mode==="dark"?"1px solid white":" "
}


  return (

    <div className="accordion container my-2" id="accordionExample" style={mystyle}>
        <h1>About Us</h1>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header" >
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"style={mystyle} >
        About the developer
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" >
      <div className="accordion-body">
        <strong>The developer of the website is Prakhyat.</strong> I have designed this website as a part of the project to display my basic skill of the react ,HTML and CSS.I am currently pursuring my bacholer in the field of Computer Science and Engineering . 
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle}>
        About TextModifier
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" >
        <strong>This is a site that is used to perform certain task on the Text.</strong>This site takes the text from the user and performs certain type of operations depending upon the requirments of the user and the special feature of the site is that the site has an in-buit text reader that can read the provided text for .If your provide an story then this site will read the story for you .</div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mystyle}>
        About the Languages Used
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>It is based on React.js.</strong> react.js is an library of the js coding language this library of the js excecute 10x faster than the js and also removes one of the most prominent issuse of the time that is the realodading.React.js loads the entire files from the server at once and doesn't require realoddaing to navigaate from one icons to other icons.
         </div>
    </div>
  </div>
<p></p>
</div>
  )
}
