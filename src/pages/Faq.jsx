import React, { useState } from "react";

const faqData = [
  {
    question: "Can I book at the last minute?",
    answer:
      "Yes, we accommodate same-day bookings based on vehicle availability.",
  },
  {
    question: "Do you provide drivers?",
    answer: "Absolutely, all rentals come with the option of a professional chauffeur.",
  },
  {
    question: " Is there a cancellation fee?",
    answer:
      "Cancellations made 12 hours prior to the scheduled time are free of charge",
  },
  {
    question: "Are the vehicles suitable for long trips?",
    answer:
      "Yes, all our vehicles are well-maintained and ideal for long-distance travel.",
  },
  {
    question: " Do you operate outside Rajasthan?",
    answer:
      "Yes, we offer services across India, including inter-state travel.",
  },
];



  function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="bg-white flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-2xl mx-auto  p-8">
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-[#4642AD] mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((item, idx) => (
            <div key={idx} className="border-b cursor-pointer  px-4 shadow-2xl rounded-lg">
              <button
                className="w-full text-left py-4 focus:outline-none flex justify-between items-center"
                onClick={() => toggle(idx)}
              >
                <span className="text-lg font-semibold  text-black">
                  {item.question}
                </span>
                <span className="text-[#4642AD] text-3xl">
                  {openIndex === idx ? "-" : "+"}
                </span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden`}
                style={{
                  maxHeight: openIndex === idx ? "200px" : "0",
                  opacity: openIndex === idx ? 1 : 0,
                }}
              >
                <div className="pb-4 text-gray-700 text-base">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;