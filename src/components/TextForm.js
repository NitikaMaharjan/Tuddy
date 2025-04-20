import React, {useState} from 'react';

export default function TextForm(props) {

  const handleUpClick = () => {
    let new_text = text.toUpperCase();
    setText(new_text);
  }
  const handleLoClick = () => {
    let new_text = text.toLowerCase();
    setText(new_text);
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const [text, setText] = useState("");
  return (
    <div>
        <fieldset>
            <legend>{props.header}</legend>
            <form>
                <label>Enter text here:</label><br/>
                <textarea className='my-text' value={text} onChange={handleOnChange}></textarea><br/>
            </form>
            <button onClick={handleUpClick}>Change to Uppercase</button>&nbsp;&nbsp;&nbsp;
            <button onClick={handleLoClick}>Change to Lowercase</button><br/>
            <p>{text.split(' ').length} words and {text.length} characters</p>
            <p>{text.split(' ').length * 0.008} minutes to read</p>
            <p>Preview</p>
            <p>{text}</p>
        </fieldset>
    </div>
  );
}