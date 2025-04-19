//How to handle event
//How to set state
import React, {useState} from 'react'; // useState is a hook

export default function TextForm(props) {

  const handleOnClick = () => {
    // console.log("Change to Uppercase"+text);
    let new_text = text.toUpperCase();
    setText(new_text);
  }
  const handleOnChange = (event) => {
    // console.log("On Change")
    setText(event.target.value);
  }
  const [text, setText] = useState("this is me testing"); // text is a variable while setText is a method
  // text = "Not Nitika";  -> Wrong way of changing the state using variable
  // setText("Niti");      -> Right way of changing the state using the function
  return (
    <div>
        <fieldset>
            <legend>{props.header}</legend>
            <form>
                <label>Enter text here:</label><br/>
                <textarea rows="8" value={text} onChange={handleOnChange}></textarea><br/>
            </form>
            <button onClick={handleOnClick}>Change to Uppercase</button>
        </fieldset>
    </div>
  );
}
