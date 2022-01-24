import React, { useState } from "react";
import ReactDom from "react-dom";
import axios from "axios";
import { Link, Route, Router } from "react-router-dom";
const allStates = {
  name: "",
  date: "",
  purpose: "",
  status: ""
};

export default function Employee() {
  const [state, setState] = useState(allStates);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!state.name || !state.date || !state.purpose || !state.status) {
      alert("Please provide input");
      return;
    }
    const config = {
      url: "http://localhost:8000/employee",
      method: "post",
      data: state
    };
    await axios(config);
  };
  return (
    <>
      <h1>Employee Page</h1>
      <form
        style={{
          border: "2px solid black",
          width: "20rem",
          margin: "6rem auto",
          padding: "1.3rem"
        }}
      >
        <div style={{ marginBottom: "2rem" }}>
          <label>
            Name:
            <div>
              <input
                type="text"
                value={state.name}
                onChange={handleChange}
                name="name"
              />
            </div>
          </label>
        </div>
        <div style={{ marginBottom: "2rem" }}>
          <label>
            Date:
            <div>
              {" "}
              <input
                type="text"
                value={state.date}
                onChange={handleChange}
                name="date"
              />
            </div>
          </label>
        </div>
        <div style={{ marginBottom: "2rem" }}>
          {" "}
          <label>
            Purpose:
            <div>
              <input
                type="text"
                value={state.purpose}
                onChange={handleChange}
                name="purpose"
              />
            </div>
          </label>
        </div>
        <div style={{ marginBottom: "2rem" }}>
          <label>
            status:
            <div>
              <input
                type="text"
                value={state.status}
                onChange={handleChange}
                name="status"
              />
            </div>
          </label>
        </div>
        <button onClick={handleSubmit}>
          <Link to={"/admin"}>Submit</Link>
        </button>
      </form>
    </>
  );
}
