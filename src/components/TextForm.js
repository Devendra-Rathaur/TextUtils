import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () =>{
    // console.log("button clicked")
    const newText = text.toUpperCase();

    setText(newText);
    props.showAlert("converted to uppercasse!","success")

  }
  const handleLowClick = () =>{
    // console.log("button clicked")
    const newText = text.toLowerCase();

    setText(newText);
    props.showAlert("converted to lowercasse!","success")
  }

  
  const handleClearClick= () =>{
    // console.log("button clicked")
    const newText = " "

    setText(newText);
    props.showAlert("clear box!","success")
  }
  
  const handleOnChange = (event) =>{
    // console.log("you are in handle on change")
    setText(event.target.value);

  }
  const handleCopyClick = () =>{
    navigator.clipboard.writeText(text)
    props.showAlert("copy to clipboard!","success")
    

  }

  const removeExtraSpacesClick = () =>{
    const newText = text.split(/[ ]+/)
    setText(newText.join(""));
    props.showAlert("Extraspaces removed!","success")

  }
  
const [text,setText] = useState(' ')

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className='mb-3'>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "gray" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert To UpperCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>
          Convert To LowerCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>
          Clear Text
        </button>

        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>
          Copy to clipboard
        </button>
        <button disabled={text.length===0}
          className="btn btn-primary mx-2 my-2"
          onClick={removeExtraSpacesClick}
        >
          Remove extra spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Text summery</h1>
        <p>
          
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words {text.length} character
        </p>
        <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
        <h2>Text preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the above textbox to preview it here"}
        </p>
      </div>
    </>
  );
}

//rfc for function based component

