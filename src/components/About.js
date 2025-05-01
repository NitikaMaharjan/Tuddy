import React from 'react';

export default function About(props) {

    // myStyle is an object
    // let myStyle={
    //     color: 'white',
    //     backgroundColor: 'black',
    //     border: '1px solid white'
    // }

    let myStyle = {
        color: props.mode==="light"?"black":"white",
        backgroundColor: props.mode==="light"?"white":"black"
    };
    
    return (
        <div style={{margin: '40px 0px 0px 120px', width: '80%'}}>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>What Is Tuddy?</strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Tuddy is your no-fuss, no-fluff text buddy that helps you quickly transform and manage your writing. Whether you're formatting a sentence or checking your word count, Tuddy makes text editing easy and instant—right in your browser.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Your Text, Your Way</strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Need to convert text to UPPERCASE, lowercase, or Capitalize It Smartly? Tuddy’s got your back. Swap words like “yellow” with “banana” (and vice versa), clear your content in a click, or copy it straight to your clipboard—effortlessly.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>More Than Just Edits</strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Tuddy not only changes your text but also gives you insights: see how many words, characters, or even minutes it’ll take to read your text. You’ll also get a live preview, so you know exactly what your content looks like before you hit send or save.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
