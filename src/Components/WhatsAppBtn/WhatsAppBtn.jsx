import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

function WhatsAppBtn() {
  return (
    <>
      <div>
        <a
          href="https://api.whatsapp.com/send?phone=9873545322&text=Hello%20I%20want%20to%20book%20a%20tour"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="fixed bottom-20 bg-green-500 cursor-pointer p-4 text-white rounded-full right-5 z-50">
            <FaWhatsapp className="text-3xl " />
          </div>
        </a>
      </div>
    </>
  );
}

export default WhatsAppBtn;
