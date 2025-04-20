import React, {useState} from 'react';

export default function TextForm(props) {

  const [text, setText] = useState('');

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const handleUpClick = () => {
    let new_text = text.toUpperCase();
    setText(new_text);
  }

  const handleLoClick = () => {
    let new_text = text.toLowerCase();
    setText(new_text);
  }

  const handleReplaceYellow = () => {
    // setText(text.replace("yellow", "banana")); this replaces only the first instance of the yellow
    setText(text.replace(/yellow/g, "banana"))
  }

  const handleReplaceBanana = () => {
    setText(text.replace(/banana/g, "yellow"))
  }

  const handleClear = () => {
    setText("");
  }

  const handleClip = async() => {
    navigator.clipboard.writeText(text); // writeText is to write onto the clipboard while readText is to read from the clipboard
    try {
      let copiedText = await navigator.clipboard.readText();
      alert("Copied text is: "+ copiedText);
    }catch(err){
      alert("Failed to read clipboard: " + err);
    }
  }

  const handleCapitalize = () => {
    setText(text.charAt(0).toUpperCase()+text.substring(1).toLowerCase());
  }

  const handleCapitalizeEach = () => {
    let words = text.split(' ');
    for (let i =0; i<words.length; i++){
      words[i] = words[i].charAt(0).toUpperCase()+words[i].substring(1).toLowerCase();
    }
    setText(words.join(' '));
  }
  
  const countWords = () => {
    let trimmed = text.trim(); // trim() removes both leading and trailing white spaces
    return trimmed === '' ? 0 : trimmed.split(' ').length; // if trimmed is empty then return 0 else split the words where ever there is space and count the number of words
  }
  
  return (
    <div>
        <fieldset>
            <legend>{props.header}</legend>
            <form>
                <label>Enter text here:</label><br/>
                <textarea className='my-text' value={text} onChange={handleOnChange}></textarea><br/>
            </form>
            <button onClick={handleUpClick}>Change to Uppercase</button>&nbsp;&nbsp;&nbsp;
            <button onClick={handleLoClick}>Change to Lowercase</button>&nbsp;&nbsp;&nbsp;
            <button onClick={handleReplaceYellow}>Replace yellow to banana</button>&nbsp;&nbsp;&nbsp;
            <button onClick={handleReplaceBanana}>Replace banana to yellow</button>&nbsp;&nbsp;&nbsp;
            <button onClick={handleClear}>Clear Text</button>&nbsp;&nbsp;&nbsp;
            <button onClick={handleClip}>Copy to Clipboard</button>&nbsp;&nbsp;&nbsp;
            <button onClick={handleCapitalize}>Capitalize first letter</button>&nbsp;&nbsp;&nbsp;
            <button onClick={handleCapitalizeEach}>Capitalize each first letter</button>
            <p>{countWords()} words and {text.length} characters</p>
            <p>{countWords()*0.008} minutes to read</p>
            <h4>Preview</h4>
            <p>{text}</p>
        </fieldset>
    </div>
  );
}