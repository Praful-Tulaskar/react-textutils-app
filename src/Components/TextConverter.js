import React, { useState } from 'react';

export default function TextConverter(props) {

    const handleUpClick = () => {
        let convertedText = text.toUpperCase();
        setText(convertedText);
        props.showAlert("Converted to UpperCase!", "success")
    }
    
    const handleLoClick = () => {
        let convertedText = text.toLowerCase();
        setText(convertedText);
        props.showAlert("Converted to LowerCase!", "success")
    }
    
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    
    const handleCopy = () => {
        var text = document.getElementById("my-box");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to clipboard!", "success")
    }
    
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed!", "success")
    }
    
    const handleClrClick = () => {
        let convertedText = '';
        setText(convertedText);
        props.showAlert("Text Cleared!", "success")
    }
    const [text, setText] = useState('')

    return (
        <>
            <div className='my-3' style={{color: props.mode=== 'light' ? 'black' : 'white'}}>
                <h2>{props.heading}</h2>
                <div className="input-group my-3">
                    <textarea className="form-control" aria-label="With textarea" id="my-box" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'light' ? 'white' : 'grey', color: props.mode=== 'light' ? 'black' : 'white'}}></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
                <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
                <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className='btn btn-warning mx-2' onClick={handleClrClick}>Clear Text</button>

            </div>
            <div className="container my-3" style={{color: props.mode=== 'light' ? 'black' : 'white'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters.</p>
            </div>
        </>
    )
}
