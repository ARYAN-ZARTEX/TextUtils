import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!", "success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!", "success");
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }
    const handleSenClick = () => {
        let newText = text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
        setText(newText);
        props.showAlert("Converted to SentenceCase!", "success");
    }
    const handleTitleClick = () => {
        let newText = text.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
        setText(newText);
        props.showAlert("Converted to TitleCase!", "success");
    }
    const handleCopyClick = () => {
        let text = document.getElementById("My Box");
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied!", "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');

    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'#303030'}}>
            <h3>{props.heading}</h3>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode==='dark'?'#303030':'white', color: props.mode==='dark'?'white':'#303030', border: props.mode==='dark'?'2px solid white':'2px solid #303030'}} id="My Box" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleSenClick}>Sentence Case</button>
            <button className="btn btn-primary mx-1" onClick={handleTitleClick}>Title Case</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy</button>
        </div>
        <div className="container my-2" style={{color: props.mode==='dark'?'white':'#303030'}}>
            <h1>Text summary</h1>
            <p>{text.split(" ").length} words or {text.length} characters.</p>
            <p>It will take {.48 * text.split(" ").length} seconds on an avgerage to read.</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Your Text to Preview"}</p>
        </div>
        </>
    )
}
