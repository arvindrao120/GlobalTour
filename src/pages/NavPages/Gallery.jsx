import React from "react";
import { motion } from "framer-motion";
import { galleryPhotos } from "../../assets/assets";

// const images = [
//   {
//     id: 1,
//     url: "https://images.unsplash.com/photo-1500463959177-e0869687df26?q=80&w=2070&auto=format&fit=crop",
//     alt: "Car 1",
//   },
//   // Add more images here
// ];

function Gallery() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="relative w-full py-10 lg:py-20">
        <div className="absolute inset-0 -z-10 w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
        </div>

        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4245AD] text-center "
          >
            Car Gallery
          </motion.h1>
          <p className="text-gray-500 text-center py-4 max-w-2xl mx-auto">
            At <span className="text-lg text-orange-400">Global India Travels</span> , we specialize in providing
            customized tour packages and dependable car rental services across
            India. Whether you're a solo traveler, a family on vacation, or a
            corporate group, we ensure a seamless and memorable travel
            experience tailored to your needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
            {galleryPhotos
              .map((item) => (
                <motion.div
                 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3,  }}
                  className="group relative overflow-hidden rounded-xl shadow-lg aspect-square"
                >
                  <img
                    src={item.src}
                    alt="Gallery image "
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
