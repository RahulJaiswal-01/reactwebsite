import React, { useState } from 'react'



export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase","success");
    }
    const handlelowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase","success");

    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText)
        props.showAlert("text is clear","success");


    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    //copy to clipboard
    const handleCopy = () => {
        var text = document.getElementById("MyBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("copied to clipboard","success");

    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert(" Extra spaces removed","success");

    }
    const [text, setText] = useState('Enter text here');
    //  text="new text"; //Wrong way to change the state
    //  setText("new text"); //Right way to change the state


    return (
        <>        <div className="conatiner" style={{ color: props.Mode === 'light' ? 'dark' : 'black' }}>
            <h1 >{props.heading}</h1>

            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.Mode === 'dark' ? 'grey' : 'light', color: props.Mode === 'dark' ? 'light' : 'black' }} id="MyBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handlelowClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy to Clipboard</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>


        </div> 

            <div className="container my-3" style={{ color: props.Mode === 'light' ? 'dark' : 'black' }}>
//                 <h2>our text summary</h2>
//                 <p>{text.split(" ").length} words and {text.length}characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox  to preview here"}</p>

            </div>
        </>

    )
}
