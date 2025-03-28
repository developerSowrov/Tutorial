import React from "react";

const Footer = () => {
  return (
    <div className="bg-base-200 mt-20">
      <footer className="footer max-w-[1180px] mx-auto  text-base-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a href="/services/branding" className="link link-hover">
            Branding
          </a>
          <a href="/services/design" className="link link-hover">
            Design
          </a>
          <a href="/services/marketing" className="link link-hover">
            Marketing
          </a>
          <a href="/services/advertisement" className="link link-hover">
            Advertisement
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a href="/about" className="link link-hover">
            About us
          </a>
          <a href="/contact" className="link link-hover">
            Contact
          </a>
          <a href="/careers" className="link link-hover">
            Jobs
          </a>
          <a href="/press" className="link link-hover">
            Press kit
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a href="/terms" className="link link-hover">
            Terms of use
          </a>
          <a href="/privacy" className="link link-hover">
            Privacy policy
          </a>
          <a href="/cookies" className="link link-hover">
            Cookie policy
          </a>
        </nav>

        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn bg-yellow-500 text-white join-item">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
