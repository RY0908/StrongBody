import React from "react";

function Contact() {
  return (
    <div>
      <section id="contact">
        <div className="contact-container">
          <div className="title-container">
            <p className="title-comment">Get In Touch</p>
            <p className="title">
              Contact Me
              <span></span>
            </p>
          </div>
          <div className="contact-content">
            <div className="contact-info-container">
              <div className="contact-info">
                <div className="contact-info-text">
                  <p className="info-title">LOCATION</p>
                  <p className="info">
                    Algeiers, Hydra <br />
                    CitÃ© bois des pins
                  </p>
                </div>
                <div className="contact-info-icon">
                  <svg
                    class="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 21"
                  >
                    <g
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path d="M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                      <path d="M13.8 12.938h-.01a7 7 0 1 0-11.465.144h-.016l.141.17c.1.128.2.252.3.372L8 20l5.13-6.248c.193-.209.373-.429.54-.66l.13-.154Z" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="contact-info">
                <div className="contact-info-text">
                  <p className="info-title">E-MAIL</p>
                  <p className="info">rayanrayman901@gmail.com</p>
                </div>
                <div className="contact-info-icon">
                  <svg
                    class="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 4a4 4 0 0 1 4 4v6M5 4a4 4 0 0 0-4 4v6h8M5 4h9M9 14h10V8a3.999 3.999 0 0 0-2.066-3.5M9 14v5m0-5h4v5m-9-8h2m8-4V1h2"
                    />
                  </svg>
                </div>
              </div>
              <div className="contact-info">
                <div className="contact-info-text">
                  <p className="info-title">PHONE</p>
                  <p className="info">+213791074030</p>
                </div>
                <div className="contact-info-icon">
                  <svg
                    class="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m16.344 12.168-1.4-1.4a1.98 1.98 0 0 0-2.8 0l-.7.7a1.98 1.98 0 0 1-2.8 0l-2.1-2.1a1.98 1.98 0 0 1 0-2.8l.7-.7a1.981 1.981 0 0 0 0-2.8l-1.4-1.4a1.828 1.828 0 0 0-2.8 0C-.638 5.323 1.1 9.542 4.78 13.22c3.68 3.678 7.9 5.418 11.564 1.752a1.828 1.828 0 0 0 0-2.804Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="form-container">
              <form id="form1">
                <div className="form-grp">
                  <input
                    type="text"
                    className="form-inpt"
                    placeholder="Name"
                    name="name"
                    required
                    minlength="2"
                    maxlength="12"
                  />
                </div>
                <div className="form-grp">
                  <input
                    type="email"
                    className="form-inpt"
                    placeholder="E-mail"
                    name="E-MAIL"
                    required
                  />
                </div>
                <div className="form-grp">
                  <input
                    type="text"
                    className="form-inpt"
                    placeholder="Subject"
                    name="Subject"
                    required
                  />
                </div>
                <div className="form-grp">
                  <textarea
                    type="text"
                    className="form-inpt message"
                    placeholder="Your Message"
                    name="Your Message"
                    minlength="10"
                    maxlength="100"
                  ></textarea>
                </div>
                <div className="flex max-md:justify-center max-md:items-center">
                  <button
                    className="form-btn"
                    type="submit"
                    form="form1"
                    value="Submit"
                  >
                    SEND MESSAGE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
