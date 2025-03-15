import React from "react";

const Faqs = () => {
  return (
    <div className="w-full mx-auto p-4 mt-20">
      <h2 className="text-2xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h2>

      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="faq-accordion" defaultChecked />
        <div className="collapse-title font-semibold">What is Talkzy?</div>
        <div className="collapse-content text-sm">
          Talkzy is a real-time communication platform that allows users to
          connect seamlessly through messaging, audio, and video calls.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-100 border border-base-300 mt-2">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title font-semibold">
          How do I sign up on Talkzy?
        </div>
        <div className="collapse-content text-sm">
          Click the "Sign Up" button and register using your email or social
          login. Follow the steps to set up your profile.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-100 border border-base-300 mt-2">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title font-semibold">
          Can I make voice and video calls on Talkzy?
        </div>
        <div className="collapse-content text-sm">
          Yes! Talkzy supports high-quality voice and video calls for a seamless
          communication experience.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-100 border border-base-300 mt-2">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title font-semibold">
          Is Talkzy available on mobile?
        </div>
        <div className="collapse-content text-sm">
          Talkzy is fully responsive and works on mobile, tablet, and desktop. A
          mobile app version is also in development.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-100 border border-base-300 mt-2">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title font-semibold">
          How secure is Talkzy?
        </div>
        <div className="collapse-content text-sm">
          Talkzy prioritizes user privacy with end-to-end encryption for secure
          messaging and calls.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-100 border border-base-300 mt-2">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title font-semibold">
          How can I report an issue?
        </div>
        <div className="collapse-content text-sm">
          If you face any issues, go to Settings → Report a Problem or contact
          our support team via support@talkzy.com.
        </div>
      </div>
    </div>
  );
};

export default Faqs;
