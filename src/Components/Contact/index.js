import React from 'react'

export default function Contact() {
  return (
    <div className="container-contact100">
      <div className="wrap-contact100">
        <form className="contact100-form validate-form">
          <span className="contact100-form-title">
            Send Us A Message
          </span>
          <div className="wrap-input100 validate-input" data-validate="Name is required">
            <label className="label-input100" for="name">Full name</label>
            <input id="name" className="input100" type="text" name="name" placeholder="Enter your name..." />
            <span className="focus-input100"></span>
          </div>
          <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
            <label className="label-input100" for="email">Email Address</label>
            <input id="email" className="input100" type="text" name="email" placeholder="Enter your email..." />
            <span className="focus-input100"></span>
          </div>
          <div className="wrap-input100">
            <div className="label-input100">What do you need?</div>
            <div>
              <select className="js-select2" name="service">
                <option>Please chooses</option>
                <option>UI/UX Design</option>
                <option>eCommerce Bussiness</option>
                <option>Online Services</option>
              </select>
              <div className="dropDownSelect2"></div>
            </div>
            <span className="focus-input100"></span>
          </div>
          <div className="wrap-input100 validate-input" data-validate="Message is required">
            <label className="label-input100" for="message">Message</label>
            <textarea id="message" className="input100" name="message" placeholder="Type your message here..."></textarea>
            <span className="focus-input100"></span>
          </div>
          <div className="container-contact100-form-btn">
            <button className="contact100-form-btn btn btn-outline-secondary btn-lg">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
