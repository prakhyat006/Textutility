import React,{useState} from 'react'

export default function TextArea(props) {
    const [text,settext]=useState("")
    const onClickef =() =>{
        settext(text.toUpperCase())
    }
    const onChangeef =(event) =>{
        settext(event.target.value)
        
    }
    const onClickef1 = ()=>{
      settext(text.toLowerCase());
    }
    const onClickef2 = ()=>{
      settext("")
    }
    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    }
  return (
    <>
    <div className="form-floating container mb-3 " style = {{color:props.mode==="light"? "black":"white"}}>
        <h1 >{props.heading}</h1>
  <textarea className="form-control"  id="mybox" value={text} style = {{backgroundColor:props.mode==="light"? "white":"black",color:props.mode==="light"? "black":"white"}}  onChange={onChangeef} rows="5"  ></textarea>
  <br />
  <button disabled={text.length==0} className='btn btn-primary mx-1 my-1' onClick={onClickef}>Convert to UpperCase </button>    <button disabled={text.length==0} className='btn btn-primary mx-1 my-1' onClick={onClickef1}>Convert to LowerCase </button>
  <button disabled={text.length==0} className='btn btn-primary mx-1 my-1' onClick={onClickef2}> Clear Text </button> <button disabled={text.length==0} type="submit" onClick={speak} className="btn btn-warning mx-1 my-1">Speak</button>
</div>
<div className="container" style = {{color:props.mode==="light"? "black":"white"}}>
  <h4 className='my-2'> Your text Analysis</h4>
  <p>{(text.split(" ").filter((elements)=>{return elements.length!=0}).length)} words and {text.length} letters.</p>
  <p>Time required to read word is {0.008 * ((text.split(" ").length)-1)} mins.</p>
  <h3>Preview</h3>
  <p>{text.length>0?text:"Type something bro!!"}</p>
</div>
</>
  )
}
