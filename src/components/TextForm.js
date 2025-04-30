import React, {useState} from 'react';

export default function TextForm(props) {
  const[divStyle, setDivStyle] = useState({
    'display': 'block',
    'margin' : '24px',
    'padding' : '24px'
  })

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
    <div style={{...divStyle, border:props.mode==='light'?'1px solid black':'1px solid white'}}>
      <div>
        <fieldset>
          <legend style={{color:props.mode==='light'?'black':'white'}}>{props.header}</legend>
          <form>
              <label style={{color:props.mode==='light'?'black':'white'}}>Enter text here:</label><br/>
              <textarea className='my-text' value={text} onChange={handleOnChange}></textarea><br/>
          </form>
          <button onClick={handleUpClick} className="btn btn-primary my-1 mx-1">Change to Uppercase</button>
          <button onClick={handleLoClick} className="btn btn-primary my-1 mx-1">Change to Lowercase</button>
          <button onClick={handleReplaceYellow} className="btn btn-warning my-1 mx-1">Replace yellow to banana</button>
          <button onClick={handleReplaceBanana} className="btn btn-warning my-1 mx-1">Replace banana to yellow</button>
          <button onClick={handleClear} className="btn btn-danger my-1 mx-1">Clear Text</button>
          <button onClick={handleClip} className="btn btn-success my-1 mx-1">Copy to Clipboard</button>
          <button onClick={handleCapitalize} className="btn btn-info my-1 mx-1">Capitalize first letter</button>
          <button onClick={handleCapitalizeEach} className="btn btn-info my-1 mx-1">Capitalize each first letter</button>
          <p style={{color:props.mode==='light'?'black':'white'}}>{countWords()} words and {text.length} characters</p>
          <p style={{color:props.mode==='light'?'black':'white'}}>{countWords()*0.008} minutes to read</p>
          <h4 style={{color:props.mode==='light'?'black':'white'}}>Preview</h4>
          <p style={{color:props.mode==='light'?'black':'white'}}>{text}</p>
        </fieldset>
      </div>
    </div>
  );
}