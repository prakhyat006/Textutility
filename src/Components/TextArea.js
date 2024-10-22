import React,{useState} from 'react'

export default function TextArea(props) {
    const [text,settext]=useState("")
    const onClickef =() =>{
        settext(text.toUpperCase())
        props.showalert("Converted to upper Case","success")
    }
    const onChangeef =(event) =>{
        settext(event.target.value)
        
    }
    const onClickef1 = ()=>{
      settext(text.toLowerCase());
      props.showalert("Converted to Lower Case","success")
    }
    const onClickef2 = ()=>{
      settext("")
      props.showalert("Text cleared","success")
    }
    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
      props.showalert("Read the Text","success")
    }
  return (
    <>
    <div className="form-floating container mb-3 " style = {{color:props.mode==="light"? "black":"white"}}>
        <h1 >{props.heading}</h1>
  <textarea className="form-control"  id="mybox" value={text} style = {{backgroundColor:props.mode==="light"? "white":"black",color:props.mode==="light"? "black":"white"}}  onChange={onChangeef} rows="5"  ></textarea>
  <br />
  <button className='btn btn-primary' onClick={onClickef}>Convert to UpperCase </button>    <button className='btn btn-primary mx-3' onClick={onClickef1}>Convert to LowerCase </button>
  <button className='btn btn-primary mx-3' onClick={onClickef2}> Clear Text </button> <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
</div>
<div className="container" style = {{color:props.mode==="light"? "black":"white"}}>
  <h4 className='my-2'> Your text Analysis</h4>
  <p>{(text.split(" ").length)-1} words and {text.length} letters.</p>
  <p>Time required to read word is {0.008 * ((text.split(" ").length)-1)} mins.</p>
  <h3>Preview</h3>
  <p>{text.length>0?text:"Type something"}</p>
</div>
</>
  )
}
