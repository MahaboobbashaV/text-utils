import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {

    const titleCase = (text) => {
        return text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      };

    const handleUpClick = () =>{
        // console.log("UpperCase was clicked" + text)
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleLoClick = () =>{
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handleTitClick = () => {
         setText(titleCase(text))
    }

    const handleClrClick = () => {
        setText("")
    }

    const handleTrmClick = () => {
        let newText = text.replace(/ +/g,' ');
        setText(newText)
    }

    const handleCpyClick = () => {
        navigator.clipboard.writeText(text)
        .then(() => {
          setText(text)
        })
        .catch((err) => {
          console.error('Error copying text to clipboard: ', err);
        });
    }

    const handleOnChange = (event) =>{
        // console.log("on change")
        setText(event.target.value)
    }

    const[text, setText] = useState("");

  return (
    <>
    <div className='container'>
        <h3>{props.heading}</h3>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="5"></textarea>
        </div>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2 btns1' onClick={handleUpClick}>UpperCase</button>
        <button disabled={text.length===0} className='btn btn-success mx-2 my-2 btns2' onClick={handleLoClick}>LowerCase</button>
        <button disabled={text.length===0} className='btn btn-danger mx-2 my-2 btns3' onClick={handleTitClick}>Title Case</button>
        <button disabled={text.length===0} className='btn btn-info mx-2 my-2 btns5' onClick={handleTrmClick}>Remove Extra Space</button>
        <button disabled={text.length===0} className='btn btn-warning mx-2 my-2 btns4' onClick={handleClrClick}>Clear</button>
        <button disabled={text.length===0} className='btn btn-dark mx-2 my-2 btns6' onClick={handleCpyClick}>Copy Text</button>
        <h6 className='para m-2'>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} Words and {text.length} Characters</h6>
    </div>
    <div className="container my-3">
        <h3 style={{textAlign: "center"}}>Your Text Summary</h3>
        <div className="summary">
        <p>{text}</p>
        </div>
    </div>
  </>
  )
}
