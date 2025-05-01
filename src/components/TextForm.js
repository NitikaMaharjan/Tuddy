import React, {useState} from 'react';

export default function TextForm(props) {
  const divStyle = {
    'display': 'block',
    'margin' : '32px 24px 0px 24px', // top right bottom left
    'padding' : '0px 24px 24px 24px'
  };

  const [text, setText] = useState('');

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const handleUpClick = () => {
    let new_text = text.toUpperCase();
    setText(new_text);
    if (countWords() !== 0){
      props.showAlert("success", "Your text is converted to upper case!");
    }else{
      props.showAlert("danger", "Enter some text below:");
    }
  }

  const handleLoClick = () => {
    let new_text = text.toLowerCase();
    setText(new_text);
    if (countWords() !== 0){
      props.showAlert("success", "Your text is converted to lower case!");
    }else{
      props.showAlert("danger", "Enter some text below:");
    }
  }

  const handleReplaceYellow = () => {
    // setText(text.replace("yellow", "banana")); this replaces only the first instance of the yellow
    setText(text.replace(/yellow/g, "banana")); // g replaces all instances of yellow
    if (countWords() !== 0){
      props.showAlert("success", "Yellow is replaced by banana!");
    }else{
      props.showAlert("danger", "Enter some text below:");
    }
  }

  const handleReplaceBanana = () => {
    setText(text.replace(/banana/g, "yellow")); // g replaces all instances of banana
    if (countWords() !== 0){
      props.showAlert("success", "Banana is replaced by yellow!");
    }else{
      props.showAlert("danger", "Enter some text below:");
    }
  }

  const handleClear = () => {
    setText("");
    if (countWords() !== 0){
      props.showAlert("success", "Your text has been cleared!");
    }else{
      props.showAlert("danger", "Enter some text below:");
    }
  }

  const handleClip = async() => {
    navigator.clipboard.writeText(text); // writeText is to write onto the clipboard while readText is to read from the clipboard
    try {
      let copiedText = await navigator.clipboard.readText();
      if (countWords() !== 0){
        props.showAlert("success", "Your copied text is \""+copiedText+"\"");
      }else{
        props.showAlert("danger", "No text has been copied!");
      }
    }catch(err){
      alert("Failed to read clipboard: " + err);
    }
  }

  const handleCapitalize = () => {
    setText(text.charAt(0).toUpperCase()+text.substring(1).toLowerCase());
    if (countWords() !== 0){
      props.showAlert("success", "Your first letter is capitalized!");
    }else{
      props.showAlert("danger", "Enter some text below:");
    }
  }

  const handleCapitalizeEach = () => {
    let words = text.split(' ');
    for (let i =0; i<words.length; i++){
      words[i] = words[i].charAt(0).toUpperCase()+words[i].substring(1).toLowerCase();
    }
    setText(words.join(' '));
    if (countWords() !== 0){
      props.showAlert("success", "Your first letter of each word is capitalized!");
    }else{
      props.showAlert("danger", "Enter some text below:");
    }
  }
  
  const countWords = () => {
    let trimmed_text = text.trim(); // trim() removes both leading and trailing white spaces
    return trimmed_text === '' ? 0 : trimmed_text.split(' ').length; // if trimmed is empty then return 0 else split the words where ever there is space and count the number of words
  }
  
  return (
    <div style={divStyle}>
      <div>
        <fieldset>
          <strong><legend style={{color:props.mode==='light'?'black':'white'}}>{props.header}</legend></strong>
          <form>
              <label style={{color:props.mode==='light'?'black':'white'}}>Enter text here:</label><br/>
              <textarea className='my-text' value={text} onChange={handleOnChange}></textarea><br/>
          </form>
          <button disabled={countWords()===0} onClick={handleUpClick} className="btn btn-primary my-1 mx-1">Change to Uppercase</button>
          <button disabled={countWords()===0} onClick={handleLoClick} className="btn btn-primary my-1 mx-1">Change to Lowercase</button>
          <button disabled={countWords()===0} onClick={handleReplaceYellow} className="btn btn-warning my-1 mx-1">Replace yellow to banana</button>
          <button disabled={countWords()===0} onClick={handleReplaceBanana} className="btn btn-warning my-1 mx-1">Replace banana to yellow</button>
          <button disabled={countWords()===0} onClick={handleClear} className="btn btn-danger my-1 mx-1">Clear Text</button>
          <button disabled={countWords()===0} onClick={handleClip} className="btn btn-success my-1 mx-1">Copy to Clipboard</button>
          <button disabled={countWords()===0} onClick={handleCapitalize} className="btn btn-info my-1 mx-1">Capitalize first letter</button>
          <button disabled={countWords()===0} onClick={handleCapitalizeEach} className="btn btn-info my-1 mx-1">Capitalize each first letter</button>
          <p style={{color:props.mode==='light'?'black':'white'}}>{countWords()} words and {text.length} characters</p>
          <p style={{color:props.mode==='light'?'black':'white'}}>{countWords()*0.008} minutes to read</p>
          <h4 style={{color:props.mode==='light'?'black':'white'}}>Preview</h4>
          <p style={{color:props.mode==='light'?'black':'white'}}>{text === ""?"Nothing to preview!":text}</p>
        </fieldset>
      </div>
    </div>
  );
}