import React, { useState } from 'react'
// import PropTypes from 'prop-types' // Never read


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to UpperCase", "success");
        // setText("You have picked HandlePickedUp Case"); 
    }
    const handleClearClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = '';
        setText(newText);
        // setText("You have picked HandlePickedUp Case"); 
    }
    const handleLoClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to LowerCase", "success");
        // setText("You have picked HandlePickedUp Case"); 
    }

    const handleOnChange = (event) => {
        // console.log("OnChange");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // text = "new text" // Wrong way to change the state
    // setText("Set text"); // Correct Way to change the state
    return (
        <>
            <div className="container" style= {{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'black' : 'white', color: props.mode === 'dark'? 'black': 'white'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
            </div>
            <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>your text summay</h1>
                <p>{text.split(" ").length} words, and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length}</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
