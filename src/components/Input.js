import React, { useState } from "react";

function Input() {
  const [nameInput, handleName] = useState("");
  const [dateInput, handleDate] = useState("");
  const inputForm = () => {
    let frm = document.getElementById("form");
    frm.classList.toggle("form-disp");
  };
  return (
    <div id="input-container">
      <form className="form" id="form">
        <div id="form-elem">
          <p
            style={{
              color: "#5a5858",
              fontWeight: "600",
              fontSize: "1.2rem",
              margin: "0.2rem auto",
            }}
          >
            Add Birthday
          </p>
          <input
            type="text"
            placeholder="name"
            value={nameInput}
            onChange={(e) => handleName(e.target.value)}
          />
          <input
            type="date"
            value={dateInput}
            onChange={(e) => handleDate(e.target.value)}
          />
          <button type="submit">Save</button>
          {/*-------------Push to localstorage-----------*/}
        </div>
      </form>
      <a href="#" onClick={inputForm}>
        <svg
          height="40"
          viewBox="0 0 21 21"
          width="40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            fill="none"
            fill-rule="evenodd"
            stroke="#5a5858"
            stroke-linecap="round"
            stroke-linejoin="round"
            transform="translate(2 2)"
          >
            <path d="m2.5.5h12c1.1045695 0 2 .8954305 2 2v12c0 1.1045695-.8954305 2-2 2h-12c-1.1045695 0-2-.8954305-2-2v-12c0-1.1045695.8954305-2 2-2z" />
            <path d="m.5 4.5h16" />
            <g transform="translate(5 7)">
              <path d="m3.5.5v6.056" />
              <path d="m3.5.5v6" transform="matrix(0 1 -1 0 7 0)" />
            </g>
          </g>
        </svg>
      </a>
    </div>
  );
}

export default Input;
