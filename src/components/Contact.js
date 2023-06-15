import React from "react";
import '../components/Contact.css';


export default function ContactUs() {
  return (
    <>
    <br></br>
    <br></br>
    <br></br>
      <div className="contact">
        <form className="text-center border border-light p-5" action="#!">
          <p className="h4 mb-4">Contact us</p>

          <input
            type="text"
            id="defaultContactFormName"
            className="form-control mb-4"
            placeholder="Name"
          />
          <input
            type="email"
            id="defaultContactFormEmail"
            className="form-control mb-4"
            placeholder="E-mail"
          />
          <label>Subject</label>
          <select className="browser-default custom-select mb-4">
            <option value="" disabled>
              Choose option
            </option>
            <option value="1" selected>
              Feedback
            </option>
            <option value="2">Report a bug</option>
            <option value="3">Feature request</option>
            <option value="4">Feature request</option>
          </select>

          <div className="form-group">
            <textarea
              className="form-control rounded-0"
              id="exampleFormControlTextarea2"
              rows="3"
              placeholder="Message"
            ></textarea>
          </div>

          <div className="custom-control custom-checkbox mb-4">
            
          </div>

          <button type="submit">
            Send
          </button>
        </form>
      </div>
    </>
  );
}
