// ContactForm.jsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import PopularDestinationBtn from "../Button/PopularDestinationBtn";

function ContactForm() {
  const [result, setResult] = React.useState("Send Message");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    console.log(formData);
    

    formData.append("access_key", "575638ac-485e-427c-98eb-b8fefeffe180");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    console.log(data);
    

    if (data.success) {
      setResult("Send Message");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center p-6 bg-white rounded-2xl shadow-2xl   lg:px-16 w-full overflow-hidden "
      id="Contact"
    >
      <form onSubmit={onSubmit} className="max-w-lg mx-auto text-black pt-8">
        <div className="flex flex-wrap">
          <div className="w-full  text-left">
            <p className="text-lg"> Your Name</p>

            <input
              className="w-full  outline-none bg-[#EFEAF7]  shadow-xl focus:bg-[#E9E1FF] rounded-xl py-3 px-4 mt-2"
              type="text"
              name="name"
              placeholder="Your Name"
              id="name"
              required
            />
          </div>
          <div className="w-full pt-4 text-left ">
            <p className="text-lg"> Your Email</p>
            <input
              className="w-full  outline-none bg-[#EFEAF7]  shadow-xl focus:bg-[#E9E1FF] rounded-xl py-3 px-4 mt-2"
              type="text"
              name="email"
              placeholder="Your Email"
              id="email"
              required
            />
          </div>
          <div className="w-full pt-4 text-left ">
            <p className="text-lg"> Mobile</p>
            <input
              className="w-full  outline-none bg-[#EFEAF7]  shadow-xl focus:bg-[#E9E1FF] rounded-xl py-3 px-4 mt-2"
              type="number"
              name="mobile"
              placeholder="Mobile"
              id="Mobile"
              required
            />
          </div>
        </div>
        <div className="mb-6 pt-4 text-left">
          <p className="text-lg"> Message</p>
          <textarea
            className="w-full  outline-none bg-[#EFEAF7]  shadow-xl focus:bg-[#E9E1FF] rounded-xl py-3 px-4 mt-2 h-36 resize-none"
            name="message"
            placeholder="Enter Your Query"
            id="message"
            required
          ></textarea>
        </div>

        <PopularDestinationBtn text={result ? result : "Send Messeage"} />
      </form>
    </motion.div>
  );
}

export default ContactForm;
