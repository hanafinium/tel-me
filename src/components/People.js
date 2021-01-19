import React from "react";
import mailgo from "mailgo";

function People({ birthdays }) {
  return (
    <div id="display">
      {birthdays.map((person, index) => {
        const { img, name, birthday } = person;
        mailgo();
        return (
          <div className="person" id="person" key={index}>
            <div className="image">
              <img src={img} alt={name} />
            </div>
            <div className="data" id="data">
              <h2 id="name">{name}</h2>
              <h3 id="birthday">{birthday}</h3>
            </div>
            <div id="icons">
              <a href="tel:+012345678">
                <svg
                  height="21"
                  viewBox="0 0 21 21"
                  width="21"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fill-rule="evenodd" transform="translate(2 3)">
                    <path
                      d="m14.5.5c1.1045695 0 2 .8954305 2 2v10c0 1.1045695-.8954305 2-2 2l-2.999-.001-2.29389322 2.2938932c-.36048396.360484-.92771502.3882135-1.32000622.0831886l-.09420734-.0831886-2.29389322-2.2938932-2.999.001c-1.1045695 0-2-.8954305-2-2v-10c0-1.1045695.8954305-2 2-2z"
                      stroke="#969494"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="m8.49884033 8.5c.5 0 1-.5 1-1s-.5-1-1-1-.99884033.5-.99884033 1 .49884033 1 .99884033 1zm-4 0c.5 0 1-.5 1-1s-.5-1-1-1-.99884033.5-.99884033 1 .49884033 1 .99884033 1zm7.99999997 0c.5 0 1-.5 1-1s-.5-1-1-1-.9988403.5-.9988403 1 .4988403 1 .9988403 1z"
                      fill="#969494"
                    />
                  </g>
                </svg>
              </a>
              <a
                href="#"
                onClick={(e) =>
                  e.target.parentElement.parentElement.parentElement.remove()
                }
              >
                <svg
                  height="21"
                  viewBox="0 0 21 21"
                  width="21"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    fill="none"
                    fill-rule="evenodd"
                    stroke="#d12e23"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    transform="translate(2 3)"
                  >
                    <path d="m8 16c4.4380025 0 8-3.5262833 8-7.96428571 0-4.43800246-3.5619975-8.03571429-8-8.03571429-4.43800245 0-8 3.59771183-8 8.03571429 0 4.43800241 3.56199755 7.96428571 8 7.96428571z" />
                    <path d="m4 8h8" />
                  </g>
                </svg>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default People;
