import React from "react";
import "./PreFooter.css";

const PreFooter = () => {
  return (
    <>
      <div className="pre-footer">
        <div className="container">
          <div className="pre-footer-container">
            <h1 className="pre-footer-title">Lorem Ipsum</h1>
            <p className="pre-footer-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>

            <ul className="pre-footer-list">
              <li className="pre-footer-item">
                <h1 className="pre-footer-item-title">
                  Stay in the loop
                </h1>
                <p className="pre-footer-item-text">
                  Subscribe to receive the latest news and updates about TDA.
                  <br />
                  We promise not to spam you!
                </p>
              </li>

              <div className="pre-footer-input-box">
                <input type="email" placeholder="Enter email address" />
                <button>Continue</button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreFooter;