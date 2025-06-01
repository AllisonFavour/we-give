import { useState } from "react";
import ArrowUpIcon from "../assets/icons/arrow-up.png";

export default function Faqs() {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    console.log("clicked!");
    setShowText(!showText);
  };

  return (
    <>
      <section className="bg-gray-100 py-8 px-10 mx-0 md:mx-0 lg:mx-0">
        <div className="text-center">
          <h2 className="text-neutral-500 mb-1">FAQs</h2>
          <h3 className="text-2xl font-bold text-green-950 mb-4">
            Frequently Asked Questions
          </h3>
        </div>

        {/* <div className="bg-white my-6 py-4 rounded-xs">
          <div className="flex flex-col justify-between items-center px-4 py-2">
            <div className="flex justify-between">
              <span>How can i make donations?</span>

              <img
                src={ArrowUpIcon}
                alt="An arrow up icon"
                onClick={() => handleClick()}
              />
            </div>

            <p className={showText ? "block" : "hidden"}>
              You can donate through our secure online donation platform. Simply
              visit our donation page, choose your preferred amount, and follow
              the prompts to complete your donation using a credit card, debit
              card, or PayPal
            </p>
          </div>
        </div> */}

        <div className="bg-white my-6 py-4 px-4 rounded-xs">
          <div
            className="flex justify-between items-center"
            onClick={() => handleClick()}
          >
            <span>How can i make donations?</span>
            <img src={ArrowUpIcon} alt="An arrow up icon" />
          </div>

          <p className={showText ? "block" : "hidden"}>
            You can donate through our secure online donation platform. Simply
            visit our donation page, choose your preferred amount, and follow
            the prompts to complete your donation using a credit card, debit
            card, or PayPal
          </p>
        </div>

        <div className="bg-white my-6 py-4 px-4 rounded-xs">
          <div className="flex justify-between items-center" onClick={() => handleClick()}>
            <span>How can i make donations?</span>
            <img
              src={ArrowUpIcon}
              alt="An arrow up icon"
              onClick={() => handleClick()}
            />
          </div>

          <p className={showText ? "block" : "hidden"}>
            You can donate through our secure online donation platform. Simply
            visit our donation page, choose your preferred amount, and follow
            the prompts to complete your donation using a credit card, debit
            card, or PayPal
          </p>
        </div>

        <div className="bg-white my-6 py-4 px-4 rounded-xs">
          <div
            className="flex justify-between items-center"
            onClick={() => handleClick()}
          >
            <span>How can i make donations?</span>
            <img src={ArrowUpIcon} alt="An arrow up icon" />
          </div>

          <p className={showText ? "block" : "hidden"}>
            You can donate through our secure online donation platform. Simply
            visit our donation page, choose your preferred amount, and follow
            the prompts to complete your donation using a credit card, debit
            card, or PayPal
          </p>
        </div>

        <div className="bg-white">
          <div className="bg-white my-6 py-4 px-4 rounded-xs">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleClick()}
            >
              <span>How can i make donations?</span>
              <img src={ArrowUpIcon} alt="An arrow up icon" />
            </div>
          </div>

          <p className={showText ? "block" : "hidden"}>
            You can donate through our secure online donation platform. Simply
            visit our donation page, choose your preferred amount, and follow
            the prompts to complete your donation using a credit card, debit
            card, or PayPal
          </p>
        </div>

        <div className="bg-white">
          <div className="bg-white my-6 py-4 px-4 rounded-xs">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleClick()}
            >
              <span>How can i make donations?</span>
              <img src={ArrowUpIcon} alt="An arrow up icon" />
            </div>
          </div>

          <p className={showText ? "block" : "hidden"}>
            You can donate through our secure online donation platform. Simply
            visit our donation page, choose your preferred amount, and follow
            the prompts to complete your donation using a credit card, debit
            card, or PayPal
          </p>
        </div>

        <div className="bg-white">
          <div className="bg-white my-6 py-4 px-4 rounded-xs">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleClick()}
            >
              <span>How can i make donations?</span>
              <img src={ArrowUpIcon} alt="An arrow up icon" />
            </div>
          </div>

          <p className={showText ? "block" : "hidden"}>
            You can donate through our secure online donation platform. Simply
            visit our donation page, choose your preferred amount, and follow
            the prompts to complete your donation using a credit card, debit
            card, or PayPal
          </p>
        </div>
      </section>
    </>
  );
}
