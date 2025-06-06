import logo from "./logo.png";
import hero_photo from "./hero_photo.jpg";
import about_photo from "./about_photo.jpg";
import swift_dezire from "./swift-dezire.avif";
import tajMahal from "./taj_mahal.avif";
import redFort from "./red_fort.avif";
import indiaGate from "./india_gate.avif";
import hawaMahal from "./hawa_mahal.jpg";
import crysta from "./crysta-innova.avif";
import xuv from "./xuv.avif";
import goldenTour from "./golden.jpg";
import tiger from "./tiger.jpg";

import pic2 from "./pic2.jpg";
import pic3 from "./pic3.jpg";
import pic4 from "./pic4.jpg";
import pic6 from "./pic6.jpg";
import pic7 from "./pic7.jpg";
import pic8 from "./pic8.jpg";
import pic9 from "./pic9.jpg";
import pic10 from "./pic10.jpg";
import pic11 from "./pic11.jpg";
import pic12 from "./pic12.jpg";
import pic13 from "./pic13.jpg";
import pic14 from "./pic14.jpg";
import pic15 from "./pic15.jpg";
import pic16 from "./pic16.jpg";
import pic17 from "./pic17.jpg";
import pic18 from "./pic18.jpg";
import pic19 from "./pic19.jpg";
import pic20 from "./pic20.jpg";
import pic21 from "./pic21.jpg";
import pic22 from "./pic22.jpg";
import pic23 from "./pic23.jpg";
import pic24 from "./pic24.jpg";
import pic25 from "./pic25.jpg";
import pic26 from "./pic26.jpg";
import pic27 from "./pic27.jpg";
import pic28 from "./pic28.jpg";
import pic29 from "./pic29.jpg";
import pic30 from "./pic30.jpg";
import pic31 from "./pic31.jpg";
import pic32 from "./pic32.jpg";
import pic33 from "./pic33.jpg";
import pic34 from "./pic34.jpg";
import pic35 from "./pic35.jpg";
import pic36 from "./pic36.jpg";
import pic37 from "./pic37.jpg";
import pic38 from "./pic38.jpg";
import pic39 from "./pic39.jpg";
import pic40 from "./pic40.jpg";
import pic41 from "./pic41.jpg";
import pic42 from "./pic42.jpg";
import pic43 from "./pic43.jpg";
import pic44 from "./pic44.jpg";
import pic45 from "./pic45.jpg";
import pic46 from "./pic46.jpg";
import pic47 from "./pic47.jpg";
import pic48 from "./pic48.jpg";
import pic49 from "./pic49.jpg";
import pic50 from "./pic50.jpg";
import pic51 from "./pic51.jpg";
import pic52 from "./pic52.jpg";
import pic53 from "./pic53.jpg";
import pic54 from "./pic54.jpg";
import pic56 from "./pic56.jpg";
import pic57 from "./pic57.jpg";
import pic60 from "./pic60.jpg";
import { desc } from "framer-motion/client";

export const assets = {
  logo,
  hero_photo,
  about_photo,
  swift_dezire,
  crysta,
  xuv,
  // car
};

// tour data
export const tourData = [
  {
    id: 1,
    title: "Taj Mahal",
    price: 4999,
    image: tajMahal,
    alt: "tajamahal.jpg",
    place: "Agra  India",
    days: 5,
    rating: 5,
    people: 5,
  },
  {
    id: 2,
    title: "India Gate",
    image: indiaGate,
    alt: "red_fort.jpg",
    days: 1,
    place: "Delhi India",
    price: 1999,
    people: 3,
    rating: 4,
  },
  {
    id: 3,
    people: 3,
    title: " Hawa Mahal",
    image: hawaMahal,
    alt: "qutub_minar.jpg",
    days: 1,
    place: "Jaipur India",
    price: 1999,
    rating: 5,
  },
  {
    id: 4,
    people: 2,
    title: "GT Tour With Ranthambore",
    image: tiger,
    alt: "gateway_of_india.jpg",
    days: 2,
    place: "Jaipur India",
    price: 2999,
    rating: 4,
  },
  {
    id: 5,
    people: 4,
    title: "Golden Triangle Tour ",
    image: goldenTour,
    alt: "hawa_mahal.jpg",
    days: 5,
    place: "Jaipur India",
    price: 3499,
    rating: 5,
  },
  {
    id: 6,
    people: 6,
    title: "Red Fort",
    image: redFort,
    alt: "red_fort.jpg",
    days: 1,
    place: "Delhi India",
    price: 2599,
    rating: 4,
  },
  // {
  //   id: 7,
  //   people: 2,
  //   title: "Mysore Palace",
  //   image: tajMahal,
  //   alt: "mysore_palace.jpg",
  //   days: 2,
  //   place: "Mysore India",
  //   price: 2799,
  //   rating: 5,
  // },
  // {
  //   id: 8,
  //   people: 5,
  //   title: "Victoria Memorial",
  //   image: redFort,
  //   alt: "victoria_memorial.jpg",
  //   days: 1,
  //   place: "Kolkata India",
  //   price: 1999,
  //   rating: 4,
  // },
  // {
  //   id: 9,
  //   people: 3,
  //   title: "Golden Temple",
  //   image: qutubMinar,
  //   alt: "golden_temple.jpg",
  //   days: 2,
  //   place: "Amritsar India",
  //   price: 2999,
  //   rating: 5,
  // },
  // {
  //   id: 10,
  //   people: 4,
  //   title: "Lotus Temple",
  //   image: tajMahal,
  //   alt: "lotus_temple.jpg",
  //   days: 1,
  //   place: "Delhi India",
  //   price: 1899,
  //   rating: 4,
  // },
  // {
  //   id: 11,
  //   people: 2,
  //   title: "Amber Fort",
  //   image: redFort,
  //   alt: "amber_fort.jpg",
  //   days: 2,
  //   place: "Jaipur India",
  //   price: 2499,
  //   rating: 5,
  // },
  // {
  //   id: 12,
  //   people: 5,
  //   title: "Meenakshi Temple",
  //   image: qutubMinar,
  //   alt: "meenakshi_temple.jpg",
  //   days: 3,
  //   place: "Madurai India",
  //   price: 3299,
  //   rating: 4,
  // },
  // {
  //   id: 13,
  //   people: 3,
  //   title: "Gateway of India",
  //   image: tajMahal,
  //   alt: "gateway_of_india.jpg",
  //   days: 2,
  //   place: "Mumbai India",
  //   price: 2999,
  //   rating: 5,
  // },
  // {
  //   id: 14,
  //   people: 4,
  //   title: "Jantar Mantar",
  //   image: redFort,
  //   alt: "jantar_mantar.jpg",
  //   days: 1,
  //   place: "Delhi India",
  //   price: 1599,
  //   rating: 4,
  // },
  // {
  //   id: 15,
  //   people: 2,
  //   title: "Sanchi Stupa",
  //   image: qutubMinar,
  //   alt: "sanchi_stupa.jpg",
  //   days: 2,
  //   place: "Sanchi India",
  //   price: 2199,
  //   rating: 5,
  // },
  // {
  //   id: 16,
  //   people: 5,
  //   title: "Ajanta Caves",
  //   image: tajMahal,
  //   alt: "ajanta_caves.jpg",
  //   days: 3,
  //   place: "Aurangabad India",
  //   price: 3999,
  //   rating: 4,
  // },
  // {
  //   id: 17,
  //   people: 3,
  //   title: "Ellora Caves",
  //   image: redFort,
  //   alt: "ellora_caves.jpg",
  //   days: 2,
  //   place: "Aurangabad India",
  //   price: 2899,
  //   rating: 5,
  // },
  // {
  //   id: 18,
  //   people: 4,
  //   title: "Sun Temple",
  //   image: qutubMinar,
  //   alt: "sun_temple.jpg",
  //   days: 1,
  //   place: "Konark India",
  //   price: 2099,
  //   rating: 4,
  // },
  // {
  //   id: 19,
  //   people: 2,
  //   title: "Ranthambore Fort",
  //   image: tajMahal,
  //   alt: "ranthambore_fort.jpg",
  //   days: 2,
  //   place: "Rajasthan India",
  //   price: 2599,
  //   rating: 5,
  // },
  // {
  //   id: 20,
  //   people: 5,
  //   title: "Chittorgarh Fort",
  //   image: redFort,
  //   alt: "chittorgarh_fort.jpg",
  //   days: 3,
  //   place: "Chittorgarh India",
  //   price: 3499,
  //   rating: 4,
  // },
  // {
  //   id: 21,
  //   people: 3,
  //   title: "Golconda Fort",
  //   image: qutubMinar,
  //   alt: "golconda_fort.jpg",
  //   days: 2,
  //   place: "Hyderabad India",
  //   price: 2799,
  //   rating: 5,
  // },
  // {
  //   id: 22,
  //   people: 4,
  //   title: "Brihadeeswara Temple",
  //   image: tajMahal,
  //   alt: "brihadeeswara_temple.jpg",
  //   days: 1,
  //   place: "Thanjavur India",
  //   price: 1999,
  //   rating: 4,
  // },
  // {
  //   id: 23,
  //   people: 2,
  //   title: "Sundarbans",
  //   image: redFort,
  //   alt: "sundarbans.jpg",
  //   days: 2,
  //   place: "West Bengal India",
  //   price: 2999,
  //   rating: 5,
  // },
  // {
  //   id: 24,
  //   people: 5,
  //   title: "Kaziranga National Park",
  //   image: qutubMinar,
  //   alt: "kaziranga_national_park.jpg",
  //   days: 3,
  //   place: "Assam India",
  //   price: 3999,
  //   rating: 4,
  // },
  // {
  //   id: 25,
  //   people: 3,
  //   title: "Backwaters of Kerala",
  //   image: tajMahal,
  //   alt: "backwaters_kerala.jpg",
  //   days: 2,
  //   place: "Kerala India",
  //   price: 3499,
  //   rating: 5,
  // },
];

// car data
export const carsData = [
  {
    id: 1,
    name: "Toyota Innova Crysta",
    seats: 7,
    fuelType: "Diesel",
    transmission: "Automatic",
    airbags: 6,
    pricePerKm: 16,
    image: crysta,
    category: "SUV",
    available: true,
  },
  {
    id: 2,
    name: "Maruti Swift Dzire",
    seats: 5,
    fuelType: "Petrol",
    transmission: "Manual",
    airbags: 2,
    pricePerKm: 11,
    image: swift_dezire,
    category: "Sedan",
    available: true,
  },
  {
    id: 3,
    name: "Mahindra XUV700",
    seats: 7,
    fuelType: "Diesel",
    transmission: "Automatic",
    airbags: 6,
    pricePerKm: 14,
    image: xuv,
    category: "SUV",
    available: true,
  },
  {
    id: 4,
    name: "Honda City",
    seats: 5,
    fuelType: "Petrol",
    transmission: "Automatic",
    airbags: 4,
    pricePerKm: 2500,
    image: swift_dezire,
    category: "Sedan",
    available: true,
  },
  {
    id: 5,
    name: "Maruti Ertiga",
    seats: 7,
    fuelType: "CNG",
    transmission: "Manual",
    airbags: 2,
    pricePerKm: 2200,
    image: xuv,
    category: "MPV",
    available: true,
  },
  {
    id: 6,
    name: "Hyundai Creta",
    seats: 5,
    fuelType: "Petrol",
    transmission: "Automatic",
    airbags: 6,
    pricePerKm: 2800,
    image: swift_dezire,
    category: "Sedan",
    available: true,
  },
  {
    id: 7,
    name: "Tata Nexon",
    seats: 5,
    fuelType: "Electric",
    transmission: "Automatic",
    airbags: 6,
    pricePerKm: 3000,
    image: xuv,
    category: "SUV",
    available: true,
  },
  {
    id: 8,
    name: "Toyota Fortuner",
    seats: 7,
    fuelType: "Diesel",
    transmission: "Automatic",
    airbags: 7,
    pricePerKm: 5000,
    image: swift_dezire,
    category: "SUV",
    available: true,
  },
  {
    id: 9,
    name: "Maruti Baleno",
    seats: 5,
    fuelType: "Petrol",
    transmission: "Manual",
    airbags: 2,
    pricePerKm: 1600,
    image: swift_dezire,
    category: "Hatchback",
    available: true,
  },
  {
    id: 10,
    name: "MG Hector",
    seats: 5,
    fuelType: "Diesel",
    transmission: "Automatic",
    airbags: 6,
    pricePerKm: 3200,
    image: xuv,
    category: "SUV",
    available: true,
  },
  {
    id: 11,
    name: "Kia Seltos",
    seats: 5,
    fuelType: "Petrol",
    transmission: "Automatic",
    airbags: 6,
    pricePerKm: 2700,
    image: xuv,
    category: "SUV",
    available: true,
  },
  {
    id: 12,
    name: "Volkswagen Virtus",
    seats: 5,
    fuelType: "Petrol",
    transmission: "Automatic",
    airbags: 6,
    pricePerKm: 2900,
    image: crysta,
    category: "Sedan",
    available: true,
  },
  {
    id: 13,
    name: "Mahindra Thar",
    seats: 4,
    fuelType: "Diesel",
    transmission: "Manual",
    airbags: 4,
    pricePerKm: 3800,
    image: swift_dezire,
    category: "SUV",
    available: true,
  },
  {
    id: 14,
    name: "Hyundai Verna",
    seats: 5,
    fuelType: "Petrol",
    transmission: "Automatic",
    airbags: 6,
    pricePerKm: 2400,
    image: crysta,
    category: "Sedan",
    available: true,
  },
  {
    id: 15,
    name: "Tata Safari",
    seats: 7,
    fuelType: "Diesel",
    transmission: "Automatic",
    airbags: 6,
    pricePerKm: 3600,
    image: xuv,
    category: "SUV",
    available: true,
  },
  {
    id: 16,
    name: "Skoda Slavia",
    seats: 5,
    fuelType: "Petrol",
    transmission: "Automatic",
    airbags: 6,
    pricePerKm: 2800,
    image: swift_dezire,
    category: "Sedan",
    available: true,
  },
  {
    id: 17,
    name: "Mahindra Scorpio",
    seats: 7,
    fuelType: "Diesel",
    transmission: "Manual",
    airbags: 4,
    pricePerKm: 3300,
    image: xuv,
    category: "SUV",
    available: true,
  },
  {
    id: 18,
    name: "Honda Amaze",
    seats: 5,
    fuelType: "Petrol",
    transmission: "Manual",
    airbags: 2,
    pricePerKm: 1700,
    image: crysta,
    category: "Sedan",
    available: true,
  },
];

export const galleryPhotos = [
  { id: 1, src: pic2 },
  { id: 2, src: pic3 },
  { id: 3, src: pic4 },
  { id: 4, src: pic6 },
  { id: 5, src: pic7 },
  { id: 6, src: pic8 },
  { id: 7, src: pic9 },
  { id: 8, src: pic10 },
  { id: 9, src: pic11 },
  { id: 10, src: pic12 },
  { id: 11, src: pic13 },
  { id: 12, src: pic14 },
  { id: 13, src: pic15 },
  { id: 14, src: pic16 },
  { id: 15, src: pic17 },
  { id: 16, src: pic18 },
  { id: 17, src: pic19 },
  { id: 18, src: pic20 },
  { id: 19, src: pic21 },
  { id: 20, src: pic22 },
  { id: 21, src: pic23 },
  { id: 22, src: pic24 },
  { id: 23, src: pic25 },
  { id: 24, src: pic26 },
  { id: 25, src: pic27 },
  { id: 26, src: pic28 },
  { id: 27, src: pic29 },
  { id: 28, src: pic30 },
  { id: 29, src: pic31 },
  { id: 30, src: pic32 },
  { id: 31, src: pic33 },
  { id: 32, src: pic34 },
  { id: 33, src: pic35 },
  { id: 34, src: pic36 },
  { id: 35, src: pic37 },
  { id: 36, src: pic38 },
  { id: 37, src: pic39 },
  { id: 38, src: pic40 },
  { id: 39, src: pic41 },
  { id: 40, src: pic42 },
  { id: 41, src: pic43 },
  { id: 42, src: pic44 },
  { id: 43, src: pic45 },
  { id: 44, src: pic46 },
  { id: 45, src: pic47 },
  { id: 46, src: pic48 },
  { id: 47, src: pic49 },
  { id: 48, src: pic50 },
  { id: 49, src: pic51 },
  { id: 50, src: pic52 },
  { id: 51, src: pic53 },
  { id: 52, src: pic54 },
  { id: 53, src: pic56 },
  { id: 54, src: pic57 },
  { id: 55, src: pic60 },
];


export const exploreTour = [
  {
    id: 1,
    title: "Same Day Agra Tour By Car",
    overview:
      "Same day explore Tajmahal in one day from Delhi and return back .This tour package includes everything .Enjoy your luxury trip from Delhi in a air conditioned car and return back on same day .Get to experience the amazing view of Taj Mahal Tour By Car and other near by Historic monuments on your visit to Agra",
    first: "At 09.00AM arriving at the city of love Agra.",
    firstdesc:
      "At 09.00AM arriving at the city of love Agra You will be taken to visit Tajmahal ,Which is the chief attraction of the city. Taj Mahal Tour is the most extravagant monument ever built for love .It was constructed by Mughal emperor Shahjahan as a memorial to his beloved wife Mumtaz Mahal she died in 1630AD and it was her last wish that a memorial should be built in her memory that was simply matchless and which the world had not seen earlier. Taj mahal is made out of white marble took 22years to complete.Drive towards Agra Fort .This building itself gives you the view of the glorious rule of the Mughal .Agra Fort built by Mughal emperor Akbar in 1565CE, the large Fort is made of red sand stone.Lunch at Indian restaurant with a taste of India. You enjoy the best Taj Mahal Tour By Gatimaan Train. After the end of the Fort moving towards lunch at a multi – cuisine air conditioned restaurant.After having lunch enjoy some shopping in Agra which is known for its unique Handicrafts made of Marble with hard stones inlay work .Other major Handicraft products leather , brass , carpet , jewellery and embroidery work.Explore Mehtab Bagh Back view of Tajmahal sunset point.",
    last: "Drive to back to Delhi.",
    departure: "Delhi Airport / Hotel /Gurgoan",
    departureTime:
      "Please arrive by 05:00 AM for a prompt departure at 06:00 AM",
    returnTime: "Approximately 20:30 PM",
    included: [
      "A/c car driven by English speaking driver",
      "All toll tax, parking, state tax as applicable",
      "Food tasting in Agra.",
      "Professional Guide",
    ],
    notIncluded: ["Monument Entrance fees", "Tipping if any"],
  },
  {
    id: 2,
    title: "Same Day Delhi",
    overview:
      "Delhi is the heart throb of India. Since centuries it has the political city for rulers who came to India from diverse parts of the world. Today it has completely transformed into a metro city and is an amazing blend of modernity but at the same time it has not lost the touch of its glorious past. From shopping, sightseeing to pampering yourself with multi cuisine food, Delhi has everything to offer its tourist. The India gate, Jama Masjid, Akshardham Temple, the Lotus Temple, the Red Fort, Qutub Minar are some of the most interesting historical monuments which should be visited. The Same Day Delhi Tour starts at 9 AM.",

    first: "09:00 AM : Visit to Rajghat, Jama Masjid and more",
    firstdesc:"Our representative from Perfect Agra Tours will take you around the city for sightseeing. The first location in New Delhi city will be Rajghat i.e. Mahatma Gandhi's memorial, Jama Masjid, The biggest mosque in India, Qutab Minar, Humayun's Tomb, Red Fort, Jantar Mantar and many more",

    sec: "13.30 PM : Lunch",
    secdesc: "You can enjoy the best street food or you will taken to a posh restaurant, where you can enjoy the multi-cuisine. You will get the best North Indian and Mughlai cuisine here. After a break you can resume your Delhi Same day tour.",

    third: "14.30 PM : Historical Building",
    thirddesc: "You can drive down through Parliament House, Rashtrapathi Bhavan, India Gate, Teen Murti Bhawan, Indira Gandhi Memorial, Gandhi Smriti and Purana Quila. You can enjoy boating and Light and sound show in Purana Quila which starts at 19.00PM which is totally optional.",

    fourth: "18.30PM : Places represent Delhi Culture",
    fourthdesc:
      "You can enjoy the popular Connaught place, Chandni Chowk market where you can enjoy the old Delhi culture which is unparalleled. Other places you can visit in Delhi are Lotus Temple Akshardham Temple but it completely depends on the time left. ",

    last: "The Same Day Delhi Tour will show the real India, its culture and their traditions. For tourists who come to India for the first time, this tour should be included in their itinerary to make it a wonderful vacation.",
    departure: "Delhi Airport / Hotel /Gurgoan",

    departureTime:
      "Please arrive by 05:00 AM for a prompt departure at 06:00 AM",
    returnTime: "06:00 PM",
    included: [
      "A/c car driven by English speaking driver",
      "All toll tax, parking, state tax as applicable",
      "Accommodation in 3/4/5 star hotel 3 nights",
      "Professional Guide",
    ],
    notIncluded: ["Monument Entrance fees", "Tipping if any"],
  },
  {
    id: 3,
    title: "Same Day Jaipur Tour By Car",
    overview:"Same Day Agra Tour is a credible tour and travel agency that has designed exclusive Jaipur tour package in which we will be our journey to Jaipur from Delhi. After reaching Jaipur our tour guide and travel representative will guide you in visiting different tourist attraction in Jaipur which includes Jal Mahal, Hawa Mahal, City palace, Albert Hall and Amber fort. You can cover this journey in one day and after collecting beautiful memories of trip you can easily get back to your home.",

    first: "6:00 AM: Start from Delhi and Drive in Jaipur City.",
    firstdesc:
      "Start your most anticipated journey to the pink city from Delhi at 6:00 AM. Our travel guide cum driver will come to pick from your hotel and then the exciting journey will be started.",

    sec: "10:30 AM: Arrival in the Pink City Jaipur",
    secdesc:
      "After a long distance of a journey that takes 3 to 4 hours, you will be reached in Jaipur, The capital city of Rajasthan State. It was established by Maharaja Jai Singh II, the king of Amer on 18 November 1727. It was named after him. Jaipur is also known as Pinki City. In 1876, Prince of Wales and Queen Victoria arrived on India tour and then Maharaja Ram Singh of Jaipur painted the whole city in Pink color to show the hospitality for prince and queen.",

    third: "12:00 Noon: Visit the scenic Jal Mahal",
    thirddesc:
      "At this time you can visit Jal Mahal and as the name suggests this palace is situated in the middle of Man Sagar Lake in the city of Jaipur. To see the beauty of this palace in the lake is just mesmerizing. This palace was renovated by Maharaja Jai Singh in the 18th century.",

    fourth: "12:30 noon: Visiting the famous Hawa Mahal",
    fourthdesc:
      "Well, everyone is aware of Hawa Mahal in Jaipur; this palace is situated in Jaipur. It is built with pink and red stone architecture. This palace is located on the corner of the Jaipur city. This spectacular palace was constructed by Maharaja Sawai Pratap Singh in 1799.",

    fifth: "01:00 PM: Beholding the magnificence of City Palace",
    fifthdesc:
      "After Hawa Mahal, you will be navigated to visit City Palace in which Chandra Mahal and Mubarak Mahal are comprised. It was considered the seat of the Maharaja of Jaipur. Chandra Mahal Palace is now converted into a museum, but it has maintained its royal essence. This palace was built by Sawai Jai Singh II between 1729 to 1732. Later this palace is beautified by Sir Samuel Swinton Jacob and Vidyadhar Bhattacharya, the main architect in the royal palace.",

    sixth:
      "02:00 PM: Visiting Jantar Mantar to rediscover the most anticipated Monuments",
    sixthdesc:
      "At 2:00 PM, now the time has come to visit the famous Jantar Mantar in Jaipur which is a series of 19 monuments rich in astronomical and architectural equipment. These scientific places were built and finished by Sawai Jai Singh II in the year 1734. It is undoubtedly a great place to visit in Jaipur.",

    seventh: "3:00 PM: Visiting Albert Hall",
    seventhdesc:
      "Now it’s time to visit the ancient museum in the Rajasthan state. This scenic building is located in the Ram Niwas garden and it was designed by Sir Samuel Swinton Jacob in which he was assisted by Meir Tujumool Hoosein. This museum was opened for public in 1887. This is considered one of the central museum of government. Visiting this hall will definitely take you in the ancient past of India and it shows the fine artwork of Indo-Saracenic architecture.",

    eightth: "4:00 PM: Visiting the Amber Fort",
    eightthdesc:
      "As the name suggests, Amer Fort is established in Amer, Rajasthan. It is about 11 km away from Jaipur city. People who come to Jaipur generally visit Amer Fort. This beautiful structure and architectural was built by Raja Man Singh, who was a famous connoisseur of Akbar the Great. It is a magnificent example of Rajasthani culture and art.",

    last: "05:00 PM: Return to Delhi Airport or Hotel",
    lastdesc:
      "After gathering unforgettable memories of Jaipur city, now it’s time for departure. Our driver will drop you at the hotel where you stay or he would drop you at the Airport, from where you will go to your home with sweet memories of this joyful Jaipur journey.",

    departure: "Delhi Airport / Hotel / Gurgoan",
    departureTime:
      "Please arrive by 05:00 AM for a prompt departure at 06:00 AM",
    returnTime: "06:00 PM",
    included: [
      "A/c car driven by English speaking driver",
      "All toll tax, parking, state tax as applicable",
      "Food tasting in Jaipur.",
      "Professional Guide",
    ],
    notIncluded: ["Monument Entrance fees", "Tipping if any"],
  },
  {
    id: 4,
    title: "Golden Triangle Tour With Ranthambore",
    overview: "Golden Triangle Tour is the landmark of cultural tours of India and gets even more exciting when you visit Ranthambore. The Tour to India is incomplete without visiting Agra for the TAJ MAHAL- one of the wonders of the world also symbolize India, further Golden Triangle tour takes you to Jaipur to get the feel of real essence of royal and colorful India, Golden Triangle tour makes you understand the Indian culture, tradition and warmness of its hospitality with friendly touch.",

    first: "Day 1: Arrive in Delhi.",
    firstdesc:
      "As per your flight schedule driver pickup you from Airport and transfer you to Delhi hotel. Afternoon visit Red fort, Jama Masjid, Qutab Minar, Lotus Temple, Humayun Tomb.Evening rest in Delhi hotel.",

    sec: "Day 2: Delhi - Agra.",
    secdesc:
      "After breakfast visit India Gate, President hose. and depart from Delhi to Agra. around 3 hrs drive. afternoon check in Agra hotel. evening visit Agra fort, Mehtab bag garden. view the Taj Mahal from Garden. over night rest in Agra hotel.",

    third: "Day 3: Agra - Ranthambore.",
    thirddesc:
      "Early morning at the time of sunrise visit Taj Mahal (best time to visit Taj Mahal). Aafter the Taj tour back to the hotel for breakfast and and depart from Agra to Ranthambore Tour. Around 4 hrs drive on the way visit Fatehpur sikri (Capital city of Akbar). Evening check in Ranthambore hotel. over night rest in Hotel.",

    fourth: "Day 4: Ranthambore.",
    fourthdesc:
      "Early morning visit the Ranthambore park by Jeep Safari. after noon visit Fort. Eevening visit the Rantambore National park again. and over night rest in hotel.",

    fifth: "Day 5: Ranthambore - Jaipur",
    fifthdesc:
      "After breakfast depart from Ranthambore to Jaipur. around 4 hrs drive. Afternoon check in Jaipur hotel. Evening visit Hawa mahal and Jaipur Bazaar. over night in Jaipur hotel.",

    sixth: "Day 6: Jaipur.",
    sixthdesc:
      "After breakfast start your guiding tour of Capital city of Rajasthan (Jaipur). Visit - Amber fort with Elephant ride, City Palace, Jantar Mantar (Astronomical sight). Jal Mahal (water Palace), Monkey Temple. Evening free for shopping or over night rest in Jaipur hotel.",

    last: "Day 7: Jaipur to Delhi.",
    lastdesc:
      "After breakfast depart from Jaipur to Delhi around 4 hrs. drive as per your flight schedule driver transfer you to Delhi airport. Golden Triangle Tour With Ranthambore design Delhi Agra Jaipur Ranthambore City by City.",

    departure: "Delhi Airport / Hotel / Gurgoan",
    departureTime:
      "Please arrive by 05:00 AM for a prompt departure at 06:00 AM",
    returnTime: "In 7 Days",
    included: [
      "A/c car driven by English speaking driver",
      "All toll tax, parking, state tax as applicable",
      "Jeep safari tour at Ranthambore.",
      "Professional Guide",
    ],
    notIncluded: ["Monument Entrance fees", "Tipping if any"],
  },
  {
    id: 5,
    title: "Golden Triangle Tour 5 Day",
    overview:"Golden Triangle Tour is the landmark of cultural tours of India and gets even more exciting when you visit Ranthambore. The Tour to India is incomplete without visiting Agra for the TAJ MAHAL- one of the wonders of the world also symbolize India, further Golden Triangle tour takes you to Jaipur to get the feel of real essence of royal and colorful India, Golden Triangle tour makes you understand the Indian culture, tradition and warmness of its hospitality with friendly touch.",

    first: "Day 1: Arrive  Delhi.",
    firstdesc:
      "As per your flight schedule driver pickup you from Delhi airport. mostly international flight in evening. so after the pickup from airport driver transfer you Delhi hotel. over night stay in Delhi. On the first day of your Golden Triangle Tour 5 Days.",

    sec: "Day 2: Guiding Tour of Delhi - Agra Transfer.",
    secdesc:
      "Early morning after the breakfast start your guiding tour of Capital city Delhi. Guiding Tour:- Visit the Qutab Minar, Humayun Tomb, Lotus Temple, Red fort, India Gate, President House. Evening around 5 pm depart from Delhi to Agra around 3 hours drive from Yamuna express way. Around 8 pm check in Agra hotel. Over night in Agra.",

    third: "Day 3: Guiding tour of Agra - Jaipur Transfer.",
    thirddesc:
      "Early morning at the Time of Sunrise visit the Taj Mahal (best time to visit the Taj). After the Taj Mahal back to the hotel for breakfast. and visit the Agra fort. After the fort free for shopping and after the lunch depart from Agra to Jaipur. around 4 hours drive. On the way visit the Fatehpur Sikri (Capital city of Akbar 40 km from Agra). Evening check in Jaipur hotel and over night rest in Jaipur hotel.",

    fourth: "Day 4: Guiding Tour of Jaipur.",
    fourthdesc:
      "After the break fast around 8 am. visit the Amber fort (with Elephant ride from Parking to Fort). And visit the City Palace (Museum), Jantar Mantar (Astronomical site), Hawa mahal (Air palace). Jal Mahal (Water Palace). And evening free for shopping in Jaipur Bazaar or rest in Jaipur hotel. Over night in Jaipur hotel.",

    last: "Day 5: Jaipur - Delhi Airport Drop",
    lastdesc:
      "Early morning after breakfast depart from Jaipur to Delhi around 5 hours drive. Evening As per your flight schedule driver transfer you to Delhi.",
    

    departure: "Delhi Airport / Hotel / Gurgoan",
    departureTime:
      "Please arrive by 05:00 AM for a prompt departure at 06:00 AM",
    returnTime: "In 5 Days",
    included: [
      "A/c car driven by English speaking driver",
      "All toll tax, parking, state tax as applicable",
      "Accomodation in 3/4/5 star hotel 4 nights.",
      "Professional Guide",
    ],
    notIncluded: ["Monument Entrance fees", "Tipping if any"],
  },
  {
    id: 6,
    title: "Golden Triangle Tour 4 Days",
    overview:"Explore India’s Golden Triangle Tour 4 Days from New Delhi, and discover some of India's most famous attractions, such as the Taj Mahal, Agra Fort, and city of Jaipur.",

    first: "Day 1: Airport to Delhi Hotel & Half Day Delhi Sight-seeing",
    firstdesc:
      "Arrive at Delhi International Airport and meet your guide for a transfer to your city hotel. Once you have checked in, take a tour of Old Delhi and discover a labyrinth of congested by-lanes concealing old monuments, forts, secret gardens, and fascinating museums. Continue to New Delhi and be enthralled by the artistic atmosphere, spacious streets, vivacious lifestyle, and vibrant nightlife.Visit places, such as Jama Masjid, Chandni Chowk, Raj Ghat, India Gate, the Presidential House of India, Humayun's Tomb, and Qutub Minar and its monuments. These are ethereal structures of mind-blowing architecture, amazing calligraphy, and verdant surroundings. Each one will give you a peak into the history and legends of bygone eras. In the evening, thrill to the Light and Sound show at the Red Fort in Old Delhi. The show is closed on Mondays, and you can go on a shopping spree instead. Return to your hotel for an overnight stay.",

    sec: "Day 2: Sight-seen of New Delhi and Drive to Agra",
    secdesc:
      "After breakfast, check out of your hotel and relax during the drive to Agra. You will stop off at Sikandra Fort, location for the miraculous tomb of the Mughal Emperor Akbar. The structure is a perfect blend of Hindu, Christian, Islamic, Buddhist, and Jain motifs. Gaze at its minarets, built in red sandstone with stunning inlay work of marble. You'll also find huge mosaic patterns on its gateway. On arrival in Agra, you will be transferred to your hotel, and after a short rest embark on a tour of the city.Visit the sublime Agra Fort complex. Built of red sandstone and white marble, Agra Fort is a treasure house of Mughal architecture. Inside this magnanimous complex are remarkable palaces, embellished chambers, hospitable reception rooms, and marvelous Golden Triangle Tourmosques. Discover the beautiful Pearl Mosque, the citadel of Jahangir Mahal, the ornate Diwan-i-Khas, Diwan-i-Am, Macchi Bhawan, Nagina Masjid, and the old Mughal market of the Meena Bazar. You will also see the mosaics of the Sheesh Mahal, and the octagonal tower of the Musammam Burj. Retire to your hotel for an overnight stay.",

    third: "Day 3: Visit Agra and drive to Jaipur enroute Fateh-pur-Sikri",
    thirddesc:
      "After breakfast at your hotel, go on an early morning visit to the Taj Mahal to witness the spectacular view of the white marble mausoleum at sunrise. Recognized as the jewel of Muslim art in India, the Taj Mahal is one of the most famous UNESCO World Heritage Sites in the world.Return to your hotel to check out before the drive to Jaipur. En route, you will visit Fatehpur Sikri. Built in the honor of Saint Sheikh Salim Chisti, Fatehpur Sikhri was Akbar's capital and is hailed for its imperial contents. The inner citadel of the city houses showcases some prominent evidence of the skillful artisans of the Mughal era, with highly refined architecture.Tour some of the finest monuments, such as the Diwan-i-Am, Diwan-i-Khas, Panch Mahal, Buland Darwaza, tomb of Saint Sheikh Salim Chisti, and Jama Masjid, one of the largest mosques In India. Continue to Jaipur and check in to your hotel for the night.",

       last: "Day 4: Jaipur to Delhi",
    lastdesc:
      "After breakfast at your hotel, you will be taken on a Jaipur sightseeing tour. The largest city in Rajasthan, Jaipur was also one of the first planned cities in India and is remarkable for its wide streets, and beautiful terracotta colored buildings.Your first stop will be Amber Fort, located high on a hill overlooking Maota Lake. You will travel there in thrilling fashion on the back of an elephant! With your feet back on firm ground, gaze in awe at the fort’s mirror works, paintings, carvings, mosaics, engravings,frescoes, and murals. Continue to the City Palace complex, which displays a perfect illustration of architecture, art, and craft in structures such as the Chandra Mahal and Mubarak Mahal palaces. Located next to it is Hawa Mahal, or “Palace of Winds,” a unique 5-story structure that looks similar to a giant beehive. A major Golden Triangle Tourattraction of Hawa Mahal is the 953 small windows, or jharokhas that are intricatelydecorated with skillful latticework. Continue to Jantar Mantar, a great masterpiece of Indian architecture that demonstrates the scientific acumen of ancient India. It is a magnanimous solar observatory that consists of 14 major geometric devices for measuring time, predicting eclipses, and tracking the location of stars, as well as the earth’s orbit around the sun. Having spent the day discovering the magical monuments of Jaipur, you will be driven back to Delhi International Airport for your flight home or onward journey. Here End your Delhi Agra Jaipur Tour 4 Days journey.",
   

    departure: "Delhi Airport / Hotel / Gurgoan",
    departureTime:
      "Please arrive by 05:00 AM for a prompt departure at 06:00 AM",
    returnTime: "In 5 Days",
    included: [
      "A/c car driven by English speaking driver",
      "All toll tax, parking, state tax as applicable",
      "Accomodation in 3/4/5 star hotel 4 nights.",
      "Professional Guide",
    ],
    notIncluded: ["Monument Entrance fees", "Tipping if any"],
  },
 
];