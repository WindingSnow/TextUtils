import React, {useState} from "react";

const TextForm = props => {
  const handleUpClick = () => {
    let upperText = text.toUpperCase();
    setText(upperText);
    props.showAlert("Text converted to uppercase", "success");
  };

  const handleOnChange = e => {
    setText(e.target.value);
  };

  const handledownClick = () => {
    let lowerText = text.toLowerCase();
    setText(lowerText);
    props.showAlert("Text converted to lowercase", "success");
  };

  const clear = () => {
    setText("");
    props.showAlert("Text cleared", "success");
  };

  const capitalizeFirst = () => {
    const lower = text.toLowerCase();
    let capitalizedText = text.charAt(0).toUpperCase() + lower.slice(1);
    setText(capitalizedText);
    props.showAlert("Capitalized First Letter", "success");
  };

  const copyText = () => {
    var text = document.getElementById("myBox");
    text.select();
    document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied", "success");
  };

  const extraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra spaces", "success");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="my-5"
        style={{color: props.mode === "light" ? "black" : "white"}}
      >
        <h1 className="text-warning fs-4">{props.heading}</h1>
        <label htmlFor="myBox" className="form-label">
          {props.subtitle}
        </label>
        <textarea
          style={{
            backgroundColor: props.mode === "light" ? "#fff" : "#222",
            color: props.mode === "light" ? "black" : "white",
          }}
          className="form-control mb-3"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
          placeholder="Enter Your Text Here..."
        ></textarea>
        <button
          disabled={text.length === 0}
          className="btn btn-warning mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert to uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-warning mx-1 my-1"
          onClick={handledownClick}
        >
          Convert to lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-warning mx-1 my-1"
          onClick={clear}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-warning mx-1 my-1"
          onClick={extraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-warning mx-1 my-1"
          onClick={capitalizeFirst}
        >
          Capitalize First Letter
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-warning mx-1 my-1"
          onClick={copyText}
        >
          Copy Text
        </button>
        <div className="summary my-5">
          <h1 className="text-warning fs-5">Your Text Summary</h1>
          <p className="characters">
            Characters: <b>{text.length}</b>
          </p>
          <p className="words">
            Words:{" "}
            <b>
              {
                text.split(/\s+/).filter(function (n) {
                  return n !== "";
                }).length
              }
            </b>
          </p>
          <p className="timeTaken">
            Approximate Time Taken To Read:{" "}
            <b>
              {0.008 *
                text.split(" ").filter(function (n) {
                  return n !== "";
                }).length}{" "}
              minute(s)
            </b>
          </p>
          <br />
          <h1 className="text-warning fs-5">Preview</h1>
          <p className="preview">
            {text.length > 0 ? text : "Nothing to preview"}
          </p>
        </div>
      </div>
    </>
  );
};

export default TextForm;
