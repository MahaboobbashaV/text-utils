import React from 'react'



export default function About(props) {

// const [myStyle, setMyStyle] = useState({
//         color: 'black',
//         backgroundColor: 'white'
// })

let myStyle = {
    color: props.mode === "dark"?"white":"black",
    backgroundColor: props.mode === "dark"?"rgb(36 74 104)":"white"
}

  return (
    <div className='container' style={{color: props.mode === "dark"?"white":"black"}}>
        <h1 className='my-4'>About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne"  style={myStyle}>
                <strong>TextUtils</strong>
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body"  style={myStyle}>
                TextUtils is a word counter and a character counting utility which can be used to manipulate your text in the way you want. You can remove punctuations, convert your text Uppercase..
                </div>
            </div>
            </div>
            <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"  style={myStyle}>
                <strong>Free To Use</strong>
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body"  style={myStyle}>
                    TextUtils is a free character counter tool that provides a instant charcter count & word count statistics for the given words. Textutils reports the number of words and characters. Thus this is suitable for writing text with word/character limit.
                </div>
            </div>
            </div>
            <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"  style={myStyle}>
                <strong>Browser Compactible</strong>
                </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body"  style={myStyle}>
                This word counter software works in any web browser such as chrome, firefox, microsoft edge, safari, opera. It suits to count characters in facebook, blog, book, excel document, pdf document, essays etc.
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
