// ContactForm.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import PopularDestinationBtn from "../Button/PopularDestinationBtn";

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
    reset();
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
            <p className="text-lg"> Subject</p>
            <input
              className="w-full  outline-none bg-[#EFEAF7]  shadow-xl focus:bg-[#E9E1FF] rounded-xl py-3 px-4 mt-2"
              type="text"
              name="subject"
              placeholder="Subject"
              id="subject"
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

        <PopularDestinationBtn text={"Send Message"} />
      </form>
    </motion.div>
  );
}

export default ContactForm;
