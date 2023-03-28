import React from "react";
import "./form.css";
import { Link } from "react-router-dom";
const Form = () => {
  // // const initialvalues = { title: "", summary: "" };
  // const [title, setTitle] = useState("");
  // const [summary, setSummary] = useState("");
  // const handle = (e) => {
  //   e.preventDefault();
  //   const data = {
  //     title,
  //     summary,
  //   };
  //   localStorage.setItem("data", data);
  // };

  return (
    <div>
      <center>
        <h1>New Hackathon Submission</h1>
      </center>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Title of your submission"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="Summary" className="form-label">
            summary
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="A short summary of your submission(this will be visible with your submission)"
            id="exampleInputPassword1"
          />
          <label className="form-label" for="exampleInputPassword1">
            Description
          </label>
          <br />
          <textarea rows={9} cols={80}></textarea>
          <br />
          <label className="form-label">Cover Image</label>
          <h4>Minimum resolution:360px X 360px</h4>

          <label className="form-label">Hackathon Name</label>
          <input
            type="text"
            className="form-control"
            id="hackathonName"
            placeholder="Enter the name of the Hackathon"
          />
          <div className="form-group c1 required" dat-cid="c1">
            <label className="control-label" for="c1">
              Hackathon Start Date
            </label>
            <div className="input-group">
              <span className="input-group-adon left">
                <i className="glyphicon glyphicon-user"></i>
              </span>
              <input
                type="date"
                className="form-control"
                id="c1"
                name="c1"
                value=""
                data-rule-required="true"
              />
            </div>
          </div>
          <div className="form-group c2 required" dat-cid="c2">
            <label className="control-label" for="c2">
              Hackathon Last Date
            </label>
            <div className="input-group">
              <span className="input-group-adon left">
                <i className="glyphicon glyphicon-user"></i>
              </span>
              <input
                type="date"
                className="form-control"
                id="c2"
                name="c2"
                value=""
                data-rule-email="true"
                data-rule-required="true"
              />
            </div>
          </div>
          <br />
          <label className="form-label">Github Reprository</label>
          <input
            type="text"
            className="form-control"
            id="hackathonName"
            placeholder="Enter your submission's public GitHub reprository link"
          />
          <label className="form-label">Other Links</label>
          <input
            type="text"
            className="form-control"
            id="hackathonName"
            placeholder="You can upload a video demo or URL of your demo app"
          />
          <Link to="/">
            <input
              className="btn btn-success mt-3"
              type="button"
              placeholder="Upload submission"
              value="upload submission"
            />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Form;
// import React, { useState, useEffect } from "react";

// function Form() {
//   const [myData, setMyData] = useState("");

//   useEffect(() => {
//     // retrieve the data from the local storage on component mount
//     const data = localStorage.getItem("Hello World");
//     if (data) {
//       setMyData(data);
//     }
//   }, []);

//   const handleChange = (event) => {
//     // update the state and the local storage when the input value changes
//     const data = event.target.value;
//     setMyData(data);
//     localStorage.setItem("Hello World", data);
//   };

//   return (
//     <div>
//       <input type="text" value={myData} onChange={handleChange} />
//       <p>{myData}</p>
//     </div>
//   );
// }

// export default Form;
